import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import { myPokemonList } from '../actions/pokemon_action';
import CardMyPokemon from '../components/card_my_pokemon';

const MyPokemonPage = () => {
    const dispatch = useDispatch();
    const pokemonLoaded = useSelector(state => state.myPokemon.isLoaded);
    const pokemonLoading = useSelector(state => state.myPokemon.isLoading);

    console.log(pokemonLoaded);

    useEffect(() => {
        dispatch(myPokemonList())
    }, [dispatch])

    return (
        <>
            <h3>My Pokemon</h3>
            <Row>
                {
                    pokemonLoading ? <p>Loading...</p> : pokemonLoaded.map((val) => <CardMyPokemon data={val} key={val.catch_id} />)
                }
            </Row>
        </>
    );
}

export default MyPokemonPage;