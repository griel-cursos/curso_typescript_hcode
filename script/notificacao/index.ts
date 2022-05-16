import { Email, SMS } from "./classes/MeiosDeNotificacao";

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