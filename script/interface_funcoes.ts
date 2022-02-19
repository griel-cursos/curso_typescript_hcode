interface ISoma
{

    (num1: number, num2: number): number;

}

let primeiraSoma:ISoma;

primeiraSoma = (num1: number, num2: number):number=>{

        return num1 + num2;

}

console.log(primeiraSoma(848,516));

console.log('=======================');

interface ICalculos
{

    somar(a: number, b: number): number;
    subtrair(a: number, b: number): number;
    multiplicar(a: number, b: number): number;
    dividir(a: number, b: number): number;

}

let calculadora: ICalculos;

let adicao = (a:number, b:number):number=>{
    return a+b;
}

calculadora = {

    dividir: (a: number, b: number): number => {
        return a / b;
    },
    multiplicar: (a: number, b: number): number => {
        return a * b;
    },
    somar: adicao,
    subtrair: function(a: number, b: number): number {
        return a - b;
    },

}

console.log(calculadora.somar(10,10));
console.log(calculadora.multiplicar(25,48));