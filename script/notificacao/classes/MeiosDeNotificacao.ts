import IMeuUsuario from "../interfaces/MeuUsuario";
import Notificacao from "./Notificacao";

export class Email extends Notificacao
{
    enviar(usuario: IMeuUsuario): boolean
    {

        console.log(`Enviando email para ${usuario.email}`)

        return true;
    }

}

export class SMS extends Notificacao
{
    enviar(usuario: IMeuUsuario): boolean
    {

        console.log(`Enviando sms para ${usuario.telefone}`)

        return true;
    }

}