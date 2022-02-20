"use strict";
class Professor {
    constructor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    seApresentar() {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos e vou lecionar ${this.materia}`;
    }
    dizerNotas(aluno, ...notas) {
        let total = notas.reduce((notaNotal, notaAtual) => notaNotal + notaAtual, 0);
        return `O aluno ${aluno} teve a média ${total / notas.length}`;
    }
}
const glaucio = new Professor('Glaucio Daniel', 30, 'DBA');
console.log(glaucio.seApresentar());
console.log(glaucio.dizerNotas('Roberto', 9, 8, 7.5, 10));
//# sourceMappingURL=classe_metodo.js.map