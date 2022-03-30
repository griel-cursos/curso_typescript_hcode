"use strict";
class NotificacaoV2 {
}
class EmailV2 extends Notificacao {
    constructor(usuario) {
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }
    enviar() {
        console.log(`Enviando email para ${usuario.email}`);
        return true;
    }
}
class SMSV2 extends Notificacao {
    constructor(usuario) {
        super();
        this.numero = usuario.telefone;
    }
    enviar(usuario) {
        console.log(`Enviando sms para ${usuario.telefone}`);
        return true;
    }
}
const mailV2 = new Email();
const smsV2 = new SMS();
console.log(mail.enviar({
    nome: "Roberto",
    email: "teste@teste",
    telefone: "123456789"
}));
console.log(sms.enviar({
    nome: "Roberto",
    email: "teste@teste",
    telefone: "123456789"
}));
//# sourceMappingURL=classe_interface.js.map