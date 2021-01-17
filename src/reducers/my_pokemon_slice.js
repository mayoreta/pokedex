import { createSlice } from "@reduxjs/toolkit";

export const myPokemonSlice = createSlice({
    name: "myPokemonSlice",
    initialState: {
        isLoading: false,
        isLoaded: [],
        isError: ""
    },
    reducers: {
        myPokemonLoading: (state, action) => {
            state.isLoading = true;
            state.isError = "";
        },
        myPokemonLoaded: (state, action) => {
            state.isLoading = false;
            state.isError = "";
            state.isLoaded = action.payload;
        },
        myPokemonError: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        }
    }
});

export const {
    myPokemonLoading,
    myPokemonLoaded,
    myPokemonError
} = myPokemonSlice.actions;

export default myPokemonSlice.reducer;