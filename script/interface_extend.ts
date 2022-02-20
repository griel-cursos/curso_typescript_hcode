interface Modelo
{
    id: number;
    created_at: number;
    updated_at: number;
}

interface IPessoa extends Modelo
{
    nome: string;
    idade?: number;

}

interface IUsuario extends IPessoa
{
    email: string;
    password: string;
}

let usuario: IUsuario;

usuario = {
    nome: 'Roberto Griel Filho',
    email: 'roberto@griel.com.br',
    password: '1516316316',
    id: 1,
    idade: 33,
    created_at: new Date().getTime(),
    updated_at: new Date().getTime(),
}

console.log(usuario)