import Swal from "sweetalert2"

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