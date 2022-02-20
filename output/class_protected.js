"use strict";
class Domicilio {
    constructor(cor, endereco) {
        this.cor = cor;
        this.endereco = endereco;
    }
    tocarInterfone() {
        return 'Interfone tocado';
    }
    atenderInterfone(mensagem) {
        return mensagem;
    }
}
class Casa extends Domicilio {
    entrarNaCasa() {
        return this.atenderInterfone('Não tem ninguém!');
    }
}
const casaRoberto = new Casa('Branca', {
    rua: 'Everygreen Terrace',
    cidade: 'Springfield'
});
console.log(casaRoberto.entrarNaCasa());
//# sourceMappingURL=class_protected.js.map