class Pedido
{

    constructor(
        private produto: string,
        protected valorTotal: number,
        public previsaoEntrega: Date
        )
    {
       
    } 
}

const meuPedido = new Pedido('Macbook Pro', 2000, new Date('2021-01-01'));

console.log(meuPedido)