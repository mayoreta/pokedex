import { detailPokemonError, detailPokemonLoaded, detailPokemonLoading } from '../reducers/detail_pokemon_slice';
import { listPokemonError, listPokemonLoaded, listPokemonLoading } from '../reducers/list_pokemon_slice';
import { detailPokemon, loadPokemon } from '../services/pokemon_services';
import * as ls from 'local-storage';

export const listPokemon = () => async (dispatch) => {
    try {
        dispatch(listPokemonLoading());
        let listPokemon = await loadPokemon();
        dispatch(listPokemonLoaded(listPokemon.listPokemon));
    } catch (error) {
        dispatch(listPokemonError(error.message));
    }
}

export const getDetailPokemon = (id) => async (dispatch) => {
    try {
        dispatch(detailPokemonLoading());
        let getPokemon = await detailPokemon(id);
        dispatch(detailPokemonLoaded(getPokemon));
    } catch (error) {
        dispatch(detailPokemonError(error.message));
    }
}

export const savePokemon = (data) => (dispatch) => {
    let currData = ls.get("pokemon");

    if (currData === null) {
        ls.set("pokemon", data);
    } else {
        currData.push(data);
        ls.set("pokemon", currData);
    }
}

export const removePokemon = (data) => (dispatch) => {
    
}