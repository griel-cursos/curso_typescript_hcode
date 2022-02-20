class Pessoa
{

    nome: string;
    idade: number;
    altura: number;


    constructor
    (
        nome: string,
        idade: number,
        altura: number
    )
    {

        this.nome = nome;
        this.idade = idade;
        this.altura = altura;

    }

    lerNome():string
    {
        return `Bem vindo ${this.nome}. Você tem ${this.idade} anos e tem ${this.altura} de altura`
    }


}

const roberto = new Pessoa('Roberto',33, 1.85);

console.log(roberto.nome);
console.log(roberto.lerNome());