import { createSlice } from "@reduxjs/toolkit";

export const detailPokemonSlice = createSlice({
    name: "detailPokemonSlice",
    initialState: {
        isLoading: false,
        isLoaded: {},
        isError: ""
    },
    reducers: {
        detailPokemonLoading: (state, action) => {
            state.isLoading = true;
            state.isError = "";
        },
        detailPokemonLoaded: (state, action) => {
            state.isLoading = false;
            state.isError = "";
            state.isLoaded = action.payload;
        },
        detailPokemonError: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        }
    }
});

export const { detailPokemonLoading, detailPokemonLoaded, detailPokemonError } = detailPokemonSlice.actions;

export default detailPokemonSlice.reducer;