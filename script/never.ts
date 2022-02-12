//O never nunca vai ter um retorno
//

function showError(message: string):never {
    throw new Error(message)
}

// showError('Algo deu errado')

console.log('====================');

let n = 0;

function loopInfinito():never
{
    while(true) {
        console.log(n++)
    }
}

loopInfinito()