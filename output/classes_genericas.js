"use strict";
class CadastroBasico {
    criar(dados) {
        console.log("Criando um registro");
        return dados;
    }
    selecionar(id) {
        console.log(`Selecionando o registro de id ${id}`);
        return {};
    }
    editar(id, dadosAtualizado) {
        console.log(`Editando dados do id ${id}`);
        return dadosAtualizado;
    }
    excluir(id) {
        console.log(`Excluindo o registro de id ${id}`);
        return true;
    }
}
const novoUsuario = new CadastroBasico();
console.log(novoUsuario.criar({
    id: 1,
    nome: "João",
    email: "teste@teste.com",
    senha: "123456",
    createdAt: new Date(),
    updatedAt: new Date()
}));
console.log(novoUsuario.selecionar(1));
//# sourceMappingURL=classes_genericas.js.map