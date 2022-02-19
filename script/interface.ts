interface IEndereco {

    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string;

}

let endereco: IEndereco;

endereco = {
    logradouro: 'Rua',
    numero: 100,
    bairro: 'Centro',
    cidade: 'São Paulo'
}