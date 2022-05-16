"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MeiosDeNotificacao_1 = require("./notificacao/classes/MeiosDeNotificacao");
const Notificacao_1 = __importDefault(require("./notificacao/classes/Notificacao"));
class NotificacaoV2 {
}
class EmailV2 extends Notificacao_1.default {
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
class SMSV2 extends Notificacao_1.default {
    constructor(usuario) {
        super();
        this.numero = usuario.telefone;
    }
    enviar(usuario) {
        console.log(`Enviando sms para ${usuario.telefone}`);
        return true;
    }
}
const mailV2 = new MeiosDeNotificacao_1.Email();
const smsV2 = new MeiosDeNotificacao_1.SMS();
//# sourceMappingURL=classe_interface.js.map