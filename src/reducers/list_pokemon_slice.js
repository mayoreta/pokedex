import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "listPokemon",
  initialState: {
    isLoading: false,
    isLoaded: [],
    isError: "",
  },
  reducers: {
    listPokemonLoading: (state, action) => {
      state.isLoading = true;
      state.isError = "";
    },
    listPokemonLoaded: (state, action) => {
      state.isLoading = false;
      state.isError = "";
      state.isLoaded = action.payload;
    },
    listPokemonError: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    }
  },
});

export const {
  listPokemonLoading,
  listPokemonLoaded,
  listPokemonError
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
