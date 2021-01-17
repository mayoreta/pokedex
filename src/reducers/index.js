import { combineReducers } from "@reduxjs/toolkit";
import detailPokemonSlice from "./detail_pokemon_slice";
import pokemonSlice from "./list_pokemon_slice";

export default combineReducers({
    listPokemon: pokemonSlice,
    detailPokemon: detailPokemonSlice
});