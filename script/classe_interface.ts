interface IEmailV2
{
    nome: string;
    email: string;
}

interface ITelefoneV2
{
    numero: string;
}

interface INotificacaoV2
{
    enviar(usuario: IMeuUsuarioV2) : boolean
}

interface IMeuUsuarioV2
{
    nome: string;
    email: string;
    telefone: string;
}

abstract class NotificacaoV2 implements INotificacaoV2
{
    abstract enviar(): boolean
}

class EmailV2 extends Notificacao implements INotificacaoV2, IEmailV2
{
    nome: string;
    email: string;

    constructor(usuario: IMeuUsuarioV2)
    {
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }
  

    enviar(): boolean
    {

        console.log(`Enviando email para ${usuario.email}`)

        return true;
    }

}

class SMSV2 extends Notificacao implements INotificacaoV2, ITelefoneV2
{
    numero: string;

    constructor(usuario: IMeuUsuarioV2) {
        super();
        this.numero = usuario.telefone
    }

    enviar(usuario: IMeuUsuario): boolean
    {

        console.log(`Enviando sms para ${usuario.telefone}`)

        return true;
    }

}

const mailV2 = new Email();
const smsV2 = new SMS();

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