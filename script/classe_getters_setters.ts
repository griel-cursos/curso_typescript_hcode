class Permissao
{
    constructor(private _nome: string, private _nivel: number)
    {}

    get nome(): string
    {
        return this._nome.toUpperCase();
    }

    set nome(novoNome: string)
    {

        if(novoNome.length < 5) {
            throw new Error("O nome da permissão deve ter mais de 5 caracteres");
        }

        this._nome = novoNome;
    }
}

const permissao = new Permissao('Gerenciar usuários', 1);

console.log(permissao.nome)

permissao.nome = "Administrador";
console.log(permissao.nome)