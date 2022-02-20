class Professor
{
    nome: string;
    idade: number;
    materia: string;

    constructor(nome: string, idade: number, materia:string)
    {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }

    seApresentar():string
    {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos e vou lecionar ${this.materia}`;
    }

    dizerNotas(aluno:string, ...notas: number[]):string
    {

       let total = notas.reduce((notaNotal, notaAtual) => notaNotal + notaAtual, 0);

       return `O aluno ${aluno} teve a média ${total / notas.length}`;
        
    }
}

const glaucio = new Professor('Glaucio Daniel',30, 'DBA');

console.log(glaucio.seApresentar());

console.log(glaucio.dizerNotas('Roberto',9,8,7.5,10))