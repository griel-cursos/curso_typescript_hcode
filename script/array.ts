const filmesCategorias: string[] = ["Comédia","Drama","Terror","Romance", "Aventura"];

filmesCategorias.push("Animação")

console.log(filmesCategorias)

console.log("==========================")

const filmesAnos: Array<number | string> = [];

for (let ano = 2000; ano < new Date().getFullYear(); ano++) {
    
    filmesAnos.push(ano)
    
}

filmesAnos.push("Animação")

console.log(filmesAnos)