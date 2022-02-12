//Usado para especificar o retorno de uma função ou método como vazio
//Podemos aplicar em funções que nós mesmos criamos que não tem retorno, apenas executam uma ação

const meuConsole:void = console.log("Hello Type");

console.log(meuConsole);

console.log('==================');

function mostrarFrase():void {
    console.log("Aprendendo Typescript");
}

mostrarFrase()