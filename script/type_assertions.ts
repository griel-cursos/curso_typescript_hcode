//Afirmação de tipos

const site: unknown = 'https://www.griel.dev.br';

let siteFavoritos: Array<string> = [];

siteFavoritos.push(site as string);
siteFavoritos.push(<string>site); //Não funcionará no React
//Estou afirmando o tipo da variavel

console.log('=====================')