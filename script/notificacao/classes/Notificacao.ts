import IMeuUsuario from "../interfaces/MeuUsuario";

export default abstract class Notificacao
{
    abstract enviar(usuario: IMeuUsuario): boolean
}