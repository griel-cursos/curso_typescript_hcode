//Afirmação de tipos

const site: unknown = 'https://www.griel.dev.br';

let siteFavoritos: Array<string> = [];

siteFavoritos.push(site as string);

siteFavoritos.push(<string>site);

console.log('=====================')