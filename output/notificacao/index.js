"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MeiosDeNotificacao_1 = require("./classes/MeiosDeNotificacao");
const mail = new MeiosDeNotificacao_1.Email();
const sms = new MeiosDeNotificacao_1.SMS();
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
//# sourceMappingURL=index.js.map