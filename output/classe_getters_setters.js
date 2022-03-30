"use strict";
class Permissao {
    constructor(_nome, _nivel) {
        this._nome = _nome;
        this._nivel = _nivel;
    }
    get nome() {
        return this._nome.toUpperCase();
    }
    set nome(novoNome) {
        if (novoNome.length < 5) {
            throw new Error("O nome da permissão deve ter mais de 5 caracteres");
        }
        this._nome = novoNome;
    }
}
const permissao = new Permissao('Gerenciar usuários', 1);
console.log(permissao.nome);
permissao.nome = "Administrador";
console.log(permissao.nome);
//# sourceMappingURL=classe_getters_setters.js.map