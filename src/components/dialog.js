import Swal from "sweetalert2"
import { savePokemon } from "../actions/pokemon_action"

export const errorDialog = (message) => {
    Swal.fire({
        title: message,
        icon: "error"
    })
}

export const successDialog = (message) => {
    Swal.fire({
        title: message,
        icon: "success"
    })
}

export const catchPokemonDialog = async (pokemon) => {
    const { value: name } = await Swal.fire({
        title: "Catched",
        input: "text",
        inputLabel: "Your pokemon name",
        inputPlaceholder: "Enter your pokemon name",
        confirmButtonText: "Save"
    })

    if (name) {
        var tempProps = JSON.parse(JSON.stringify(pokemon));
        tempProps.nickname = name;
        tempProps.catch_id = Date.now();
        Object.preventExtensions(tempProps);

        savePokemon(tempProps);

        successDialog("Success");
    }
}