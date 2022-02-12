function mostrarMensagem(texto?: string | number):boolean {

    if (texto) {
        console.log(texto)
        return true;
    } else {
        return false;
    }

}
mostrarMensagem('Roberto')
mostrarMensagem(200)

console.log(mostrarMensagem('Roberto'))

console.log("===============")

const show = (codigo:number):(number | Date | object )=>{

    return new Date();

}
show(200)