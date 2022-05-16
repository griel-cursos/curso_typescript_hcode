interface IProcessamento<TipoInterface> {
    valor: TipoInterface;

    realizarProcessamento(arg: TipoInterface) : TipoInterface
}

const texto: IProcessamento<string> = {

    valor: "roberto",

    realizarProcessamento(argumento: string): string {
        return argumento.toUpperCase();
    }

}

console.log(texto.valor)
console.log(texto.realizarProcessamento("roberto"))

const numero: IProcessamento<number> = {
    valor: 50,
    realizarProcessamento(v: number):number {
        return v * v;
    }
}

console.log(numero.realizarProcessamento(numero.valor))
