import { BancoDeDados } from './classes/BancoDeDados';

const cnx = BancoDeDados.factory({
    tipoBanco: BancoDeDados.TIPO_MYSQL,
    senha: 'root',
    usuario: 'root',
    ip: BancoDeDados.LOCAL
})

console.log(cnx)