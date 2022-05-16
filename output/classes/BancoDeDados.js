"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BancoDeDados = void 0;
class BancoDeDados {
    constructor(_ip, _usuario, _senha, _tipoBanco) {
        this._ip = _ip;
        this._usuario = _usuario;
        this._senha = _senha;
        this._tipoBanco = _tipoBanco;
    }
    static factory(parametros) {
        if (![BancoDeDados.TIPO_MYSQL, BancoDeDados.TIPO_SQL_SERVER].includes(parametros.tipoBanco)) {
            throw new Error("Tipo de banco incorreto");
        }
        return new BancoDeDados(parametros.ip, parametros.usuario, parametros.senha, parametros.tipoBanco);
    }
}
exports.BancoDeDados = BancoDeDados;
BancoDeDados.LOCAL = '127.0.0.1';
BancoDeDados.TIPO_MYSQL = 'MYSQL';
BancoDeDados.TIPO_SQL_SERVER = 'SQL SERVER';
//# sourceMappingURL=BancoDeDados.js.map