"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BancoDeDados_1 = require("./classes/BancoDeDados");
const cnx = BancoDeDados_1.BancoDeDados.factory({
    tipoBanco: BancoDeDados_1.BancoDeDados.TIPO_MYSQL,
    senha: 'root',
    usuario: 'root',
    ip: BancoDeDados_1.BancoDeDados.LOCAL
});
console.log(cnx);
//# sourceMappingURL=classe_prop_metodo_estasticos.js.map