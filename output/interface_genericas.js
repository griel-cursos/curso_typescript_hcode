"use strict";
const texto = {
    valor: "roberto",
    realizarProcessamento(argumento) {
        return argumento.toUpperCase();
    }
};
console.log(texto.valor);
console.log(texto.realizarProcessamento("roberto"));
const numero = {
    valor: 50,
    realizarProcessamento(v) {
        return v * v;
    }
};
console.log(numero.realizarProcessamento(numero.valor));
//# sourceMappingURL=interface_genericas.js.map