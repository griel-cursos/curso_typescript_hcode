class Usuario
{
    readonly id: number = 0; //Esse valor agora só pode ser lido
    nome: string = 'Roberto';
    private senha: string = '3613505631';
    readonly dataCadastro: Date = new Date('2021-01-01'); //Esse valor agora só pode ser lido

}

const user = new Usuario();

console.log(user.id);