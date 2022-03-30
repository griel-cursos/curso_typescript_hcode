"use strict";
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
BancoDeDados.LOCAL = '127.0.0.1';
BancoDeDados.TIPO_MYSQL = 'MYSQL';
BancoDeDados.TIPO_SQL_SERVER = 'SQL SERVER';
const cnx = BancoDeDados.factory({
    tipoBanco: BancoDeDados.TIPO_MYSQL,
    senha: 'root',
    usuario: 'root',
    ip: BancoDeDados.LOCAL
});
console.log(cnx);
//# sourceMappingURL=classe_prop_metodo_estasticos.js.map