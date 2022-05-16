import applyMixins from "./applyMixin";

class ProdutoFinal {

    vender(qty:number) {

        return `Foram vendidos ${qty} itens`;

    }

    comprar(qty:number) {

        return `Foram vendidos ${qty} itens`;

    }

}

class Movel {

    sentar() {
        return 'O movel está sentado';
    }

    empurrar(metros:number) {
        return `O movel está empurrando por ${metros} metros` ;
    }

}

class Sofa  {
    constructor(public nome: string) {
        
    }
}

interface Sofa extends ProdutoFinal, Movel {
    
}

applyMixins(Sofa, [ProdutoFinal, Movel])

const produto = new Sofa('Meu Sofá')

console.log(produto.vender(10));
console.log(produto.empurrar(10));
console.log(produto.nome);
