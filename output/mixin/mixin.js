"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixin_1 = __importDefault(require("./applyMixin"));
class ProdutoFinal {
    vender(qty) {
        return `Foram vendidos ${qty} itens`;
    }
    comprar(qty) {
        return `Foram vendidos ${qty} itens`;
    }
}
class Movel {
    sentar() {
        return 'O movel está sentado';
    }
    empurrar(metros) {
        return `O movel está empurrando por ${metros} metros`;
    }
}
class Sofa {
    constructor(nome) {
        this.nome = nome;
    }
}
(0, applyMixin_1.default)(Sofa, [ProdutoFinal, Movel]);
const produto = new Sofa('Meu Sofá');
console.log(produto.vender(10));
console.log(produto.empurrar(10));
console.log(produto.nome);
//# sourceMappingURL=mixin.js.map