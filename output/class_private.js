"use strict";
class Banco {
    constructor() {
        this.cofreQtd = 10000;
    }
    debitarCofre(valor) {
        if (this.cofreQtd >= valor) {
            this.cofreQtd -= valor;
            return this.cofreQtd;
        }
        else {
            return `Não é possível sacar R$ ${valor}`;
        }
    }
    sacarDoCaixa(valor) {
        return this.debitarCofre(valor);
    }
    sacarCaixaEletronico(valor) {
        return this.debitarCofre(valor);
    }
}
class Banco24hr extends Banco {
    sacar(valor) {
        return this.sacarDoCaixa(valor);
    }
}
const nubank = new Banco();
console.log(nubank.sacarCaixaEletronico(500));
const banco24 = new Banco24hr();
console.log(banco24.sacar(10250));
//# sourceMappingURL=class_private.js.map