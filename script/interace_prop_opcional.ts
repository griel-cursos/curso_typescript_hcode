interface IProdutos 
{

    nome: string;
    preco: number;
    description?: string;
    dataValidade: Date;

}

const produtoDados: IProdutos = {

    nome: 'Xbox',
    preco: 2000,
    dataValidade: new Date(2022, 11, 1)

};
const produtoDados2: IProdutos = {

    nome: 'PlayStation',
    preco: 2000,
    description: 'Plastation para vender',
    dataValidade: new Date(2022, 11, 1)

};