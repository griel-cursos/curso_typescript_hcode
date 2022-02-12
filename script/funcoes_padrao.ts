const enviarEmail = (para: string, assunto: string = "Sem assunto", remetente?:string):void=>{

    console.log({
        para, assunto, remetente
    })

}

enviarEmail('roberto@griel.com', 'Typescript')