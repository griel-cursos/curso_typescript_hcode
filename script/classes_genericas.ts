interface CadastroPadrao {
    readonly id: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}

interface CadastroUsuario extends CadastroPadrao {
    
    nome: string;
    email: string;
    senha: string;

}

interface CadastroCategoria extends CadastroPadrao {
    nome: string;
}

class CadastroBasico<InterfaceBasica> {

    criar(dados: InterfaceBasica): InterfaceBasica {
        console.log("Criando um registro")
        return dados;
    }

    selecionar(id: number): InterfaceBasica {
        console.log(`Selecionando o registro de id ${id}`)

        return {} as InterfaceBasica
    }

    editar (id: number, dadosAtualizado: InterfaceBasica): InterfaceBasica {
        console.log(`Editando dados do id ${id}`)

        return dadosAtualizado
    }

    excluir(id: number): boolean {
        console.log(`Excluindo o registro de id ${id}`)
        return true;
    }

}

const novoUsuario = new CadastroBasico<CadastroUsuario>();
console.log(novoUsuario.criar({
    id: 1,
    nome: "João",
    email: "teste@teste.com",
    senha: "123456",
    createdAt: new Date(),
    updatedAt: new Date()
}))

console.log(novoUsuario.selecionar(1))