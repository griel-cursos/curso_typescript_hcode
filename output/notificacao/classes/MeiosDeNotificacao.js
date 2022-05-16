"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMS = exports.Email = void 0;
const Notificacao_1 = __importDefault(require("./Notificacao"));
class Email extends Notificacao_1.default {
    enviar(usuario) {
        console.log(`Enviando email para ${usuario.email}`);
        return true;
    }
}
exports.Email = Email;
class SMS extends Notificacao_1.default {
    enviar(usuario) {
        console.log(`Enviando sms para ${usuario.telefone}`);
        return true;
    }
}
exports.SMS = SMS;
//# sourceMappingURL=MeiosDeNotificacao.js.map