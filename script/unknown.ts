let resultado: unknown;
//Unknow: Não posso definir a variavel desconhecida em outra variavel de outro tipo
//Any: Armazena em sua variável qualquer valor e posso atribuir em qualquer outro tipo de variavel

resultado = {
    sucesso: true
}

resultado = "Sucesso";

resultado = 200;

console.log("================")

const informacao: any = 150;
const informacaoDesconhecida: unknown = 250;

const primeiroNumero: number = informacao;
//const segundoNumero: number = informacaoDesconhecida;