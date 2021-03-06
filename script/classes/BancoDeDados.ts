import { IBancoDeDados } from "../Interfaces/IBancoDeDados";


export class BancoDeDados {

    static LOCAL = '127.0.0.1';
    static TIPO_MYSQL = 'MYSQL';
    static TIPO_SQL_SERVER = 'SQL SERVER';

    constructor
        (
            private _ip: string,
            private _usuario: string,
            private _senha: string,
            private _tipoBanco: string,
    ) { }

    static factory(parametros: IBancoDeDados)
    {

        if (![BancoDeDados.TIPO_MYSQL, BancoDeDados.TIPO_SQL_SERVER].includes(parametros.tipoBanco)) {
            throw new Error("Tipo de banco incorreto");
        }

        return new BancoDeDados(parametros.ip, parametros.usuario, parametros.senha, parametros.tipoBanco);
    }
}