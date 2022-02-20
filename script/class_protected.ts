class Domicilio
{
    public cor: string;
    public endereco: object;

    constructor(cor: string, endereco: object)
    {
        this.cor = cor;
        this.endereco = endereco;
    }

    public tocarInterfone(): string
    {
        return 'Interfone tocado';
    }

    protected atenderInterfone(mensagem: string): string
    {
        return mensagem;
    }

}

class Casa extends Domicilio
{

    public entrarNaCasa()
    {
        return this.atenderInterfone('Não tem ninguém!');
    }



}

const casaRoberto = new Casa('Branca', {
    rua: 'Everygreen Terrace',
    cidade: 'Springfield'
});

console.log(casaRoberto.entrarNaCasa())