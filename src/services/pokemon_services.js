import axios from 'axios';
import ucfirst from 'ucfirst';

const apiPokemon = "https://pokeapi.co/api/v2/pokemon/";

export const loadPokemon = (apiURL) => {
    return new Promise((resolve, reject) => {
        axios({
            url: apiURL || apiPokemon,
            method: "GET",
        }).then(({ data }) => {
            let listPokemon = [];
            for (const val of data.results) {
                let getId = val.url.split("/");
                listPokemon.push({
                    id: getId[6],
                    name: ucfirst(val.name),
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getId[6]}.png`,
                });
            }

            resolve({
                listPokemon: listPokemon,
                next: data.next
            });
        }).catch((err) => {
            reject(err);
        });
    });
}

export const detailPokemon = (id) => {
    return new Promise((resolve, reject) => {
        axios({
            url: apiPokemon + id,
            method: "GET",
        }).then(({ data }) => {
            let moves = [];
            let type = [];

            for (let i = 0; i < 3; i++) {
                moves.push(ucfirst(data.moves[i].move.name));
            }
            for (const val of data.types) {
                type.push(ucfirst(val.type.name));
            }

            let pokemon = {
                name: ucfirst(data.name),
                moves: moves.join(", "),
                type: type.join(", "),
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            };

            resolve(pokemon);
        }).catch((err) => {
            reject(err);
        });
    });
}