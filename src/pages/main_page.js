import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listPokemon } from '../actions/pokemon_action';
import CardPokemon from '../components/card_pokemon';

const MainPage = () => {
    const dispatch = useDispatch();
    const pokemonLoaded = useSelector(state => state.listPokemon.isLoaded)
    const pokemonLoading = useSelector(state => state.listPokemon.isLoading)

    useEffect(() => {
        dispatch(listPokemon())
    }, [dispatch])

    return (
        <>
            <h3>Pokemon List</h3>
            <Row>
            {
                pokemonLoading ? <p>Loading...</p> : pokemonLoaded.map((val) => <CardPokemon data={val} key={val.id} />)
            }
            </Row>
        </>
    );
}

export default MainPage;