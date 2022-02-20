class Banco
{

    private cofreQtd: number = 10000;

    private debitarCofre(valor:number):number|string
    {
        if (this.cofreQtd >= valor) {
            this.cofreQtd -= valor;
            return this.cofreQtd;
        } else {
            return `Não é possível sacar R$ ${valor}`;
        }
    }

    protected sacarDoCaixa(valor:number)
    {
        return this.debitarCofre(valor);
    }

    public sacarCaixaEletronico(valor:number)
    {
        return this.debitarCofre(valor);
    }

}

class Banco24hr extends Banco
{

    sacar(valor:number){
        return this.sacarDoCaixa(valor);
    }

}

const nubank = new Banco();

console.log(nubank.sacarCaixaEletronico(500));

const banco24 = new Banco24hr();
console.log(banco24.sacar(10250));