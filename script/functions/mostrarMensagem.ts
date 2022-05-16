export function mostrarMensagem(texto?: string | number):boolean {

    if (texto) {
        console.log(texto)
        return true;
    } else {
        return false;
    }

}