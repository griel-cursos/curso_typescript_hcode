"use strict";
class Cadastro {
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}
class Cliente extends Cadastro {
    constructor(nome, nascimento, email, empresa) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
}
let cliente = new Cliente('Roberto', new Date('1989-08-28'), 'roberto@griel.com', 'Griel');
console.log(cliente);
//# sourceMappingURL=classe_heranca.js.map