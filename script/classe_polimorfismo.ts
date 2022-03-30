class Empresa
{
    prestarServico()
    {
        return "Empresa prestando serviço"
    }
}

class Padaria extends Empresa
{
    prestarServico()
    {
        return "Vendendo Pão"
    }
}

class Mercearia extends Empresa
{
    prestarServico(): string {
        return "Vendendo alimentos"
    }
}

console.log(new Empresa().prestarServico())
console.log(new Padaria().prestarServico())
console.log(new Mercearia().prestarServico())