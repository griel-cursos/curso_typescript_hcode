import { mostrarMensagem } from "./functions/mostrarMensagem"

mostrarMensagem('Roberto')
mostrarMensagem(200)

console.log(mostrarMensagem('Roberto'))

console.log("===============")

const show = (codigo:number):(number | Date | object )=>{

    return new Date();

}
show(200)