"use strict";
class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    lerNome() {
        return `Bem vindo ${this.nome}. Você tem ${this.idade} anos e tem ${this.altura} de altura`;
    }
}
const roberto = new Pessoa('Roberto', 33, 1.85);
console.log(roberto.nome);
console.log(roberto.lerNome());
//# sourceMappingURL=primeira_class.js.map