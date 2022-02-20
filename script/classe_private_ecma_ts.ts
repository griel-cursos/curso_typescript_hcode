class Documento
{
    private valor: string = '123.654.789-00'; //Atributo privado pelo Typescript

    #numero: number = 536153; //Atributo privado pelo EcmaScript

    mostrarDocumento()
    {
        return this.#numero;
    }

}

class CNPJ extends Documento
{
    //private valor: string = '64653165316';

    #numero:number = 516;

    mostrarCNPJ()
    {
        return this.#numero;
    }
}


const rg = new Documento();

console.log(rg.mostrarDocumento());

const cnpj = new CNPJ();

console.log(cnpj.mostrarCNPJ());

// console.log('RG' + rg.valor);
// console.log('RG' + rg.#numero); 