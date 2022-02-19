"use strict";
let primeiraSoma;
primeiraSoma = (num1, num2) => {
    return num1 + num2;
};
console.log(primeiraSoma(848, 516));
console.log('=======================');
let calculadora;
let adicao = (a, b) => {
    return a + b;
};
calculadora = {
    dividir: (a, b) => {
        return a / b;
    },
    multiplicar: (a, b) => {
        return a * b;
    },
    somar: adicao,
    subtrair: function (a, b) {
        return a - b;
    },
};
console.log(calculadora.somar(10, 10));
console.log(calculadora.multiplicar(25, 48));
//# sourceMappingURL=interface_funcoes.js.map