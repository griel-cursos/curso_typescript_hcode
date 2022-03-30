"use strict";
class Notificacao {
}
class Email extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando email para ${usuario.email}`);
        return true;
    }
}
class SMS extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando sms para ${usuario.telefone}`);
        return true;
    }
}
const mail = new Email();
const sms = new SMS();
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
//# sourceMappingURL=classe_abstrata.js.map