const nome: string = 'Roberto'

console.log(`Olá ${nome}!`);

console.log('================================');

class Produto
{

    nome: string;
    valor: number;

    constructor(produtoNome: string, produtoValor: number)
    {

        this.nome = produtoNome;

        this.valor = produtoValor;

    }

    mostrarProduto()
    {

    }
}

const produto = new Produto('Produto', 5000)