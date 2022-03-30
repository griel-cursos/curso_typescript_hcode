interface IMeuUsuario
{
    nome: string;
    email: string;
    telefone: string;
}

abstract class Notificacao
{
    abstract enviar(usuario: IMeuUsuario): boolean
}

class Email extends Notificacao
{
    enviar(usuario: IMeuUsuario): boolean
    {

        console.log(`Enviando email para ${usuario.email}`)

        return true;
    }

}

class SMS extends Notificacao
{
    enviar(usuario: IMeuUsuario): boolean
    {

        console.log(`Enviando sms para ${usuario.telefone}`)

        return true;
    }

}

const mail = new Email();
const sms = new SMS();

console.log(mail.enviar({
    nome: "Roberto",
    email: "teste@teste",
    telefone: "123456789"
}))
console.log(sms.enviar({
    nome: "Roberto",
    email: "teste@teste",
    telefone: "123456789"
}))