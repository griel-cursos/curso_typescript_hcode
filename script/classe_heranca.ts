class Cadastro
{
    nome: string;
    nascimento: Date;

    constructor(nome: string, nascimento: Date)
    {
        this.nome = nome;
        this.nascimento = nascimento;
    }

}

class Cliente extends Cadastro
{

    email: string;
    empresa: string;

    constructor(nome: string, nascimento: Date, email:string, empresa:string)
    {
        super(nome, nascimento); //Invocando o construtor da classe pai

        this.email = email;
        this.empresa = empresa;
    }

}

let cliente = new Cliente('Roberto',new Date('1989-08-28'), 'roberto@griel.com','Griel');

console.log(cliente)