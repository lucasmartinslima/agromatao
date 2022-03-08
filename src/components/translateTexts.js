import texts from '../assets/conteudoTexto.json'

const test = texts


var LANGUAGE = 0;


function changeLanguage(lang){

// 0 = pt-br  1 = ingles 2 = espanhol
    localStorage.setItem('language', lang);
    document.location.reload(true);
}

function getLanguage(){

    // 0 = pt-br  1 = ingles 2 = espanhol
    return localStorage.getItem('language');
    
}


var about = {
    cabecalho: "",
    texto: ""
}

var conteudoTexto = { 


// CONTATO
contato:{
    telefone:{
        cabecalho: "",
        paragrafo: "",
    },
    email:{
        cabecalho: "",
        paragrafo: "",
    },
   
},

// NOSSOS PRODUTOS
produto:{
    cabecalho: ""
},



    //SOBRE A EMPRESA
    about:{
        cabecalho: "",
        texto: ""
    }

}

switch(LANGUAGE){
    case 0:
        console.log('pt-br')
    break
    case 1:
        console.log('pt-br')
    break
}

console.log(about, test)


about = texts.about


if(getLanguage() == 0){ // EM PORTUGUES

    // CONTATO
    conteudoTexto.contato.telefone.cabecalho = texts.contato.telefone.cabecalho.pt
    conteudoTexto.contato.email.cabecalho = texts.contato.email.cabecalho.pt

    conteudoTexto.contato.telefone.paragrafo = texts.contato.telefone.paragrafo.pt
    conteudoTexto.contato.email.paragrafo = texts.contato.email.paragrafo.pt

    // NOSSOS PRODUTOS
    conteudoTexto.produto.cabecalho = texts.produto.cabecalho.pt

    // SOBRE A EMPRESA
    conteudoTexto.about.cabecalho = texts.about.cabecalho.pt
    conteudoTexto.about.texto = texts.about.texto.pt

}
else if(getLanguage() == 1) // EM INGLES
{
    // CONTATO 
    conteudoTexto.contato.telefone.cabecalho = texts.contato.telefone.cabecalho.en
    conteudoTexto.contato.email.cabecalho = texts.contato.email.cabecalho.en

    conteudoTexto.contato.telefone.paragrafo = texts.contato.telefone.paragrafo.en
    conteudoTexto.contato.email.paragrafo = texts.contato.email.paragrafo.en

    // NOSSOS PRODUTOS
    conteudoTexto.produto.cabecalho = texts.produto.cabecalho.en

    // SOBRE A EMPRESA
    conteudoTexto.about.cabecalho = texts.about.cabecalho.en
    conteudoTexto.about.texto = texts.about.texto.en
}
else if(getLanguage() == 2) // EM ESPANHOL
{
        // CONTATO 
        conteudoTexto.contato.telefone.cabecalho = texts.contato.telefone.cabecalho.es
        conteudoTexto.contato.email.cabecalho = texts.contato.email.cabecalho.es
    
        conteudoTexto.contato.telefone.paragrafo = texts.contato.telefone.paragrafo.es
        conteudoTexto.contato.email.paragrafo = texts.contato.email.paragrafo.es
    
        // NOSSOS PRODUTOS
        conteudoTexto.produto.cabecalho = texts.produto.cabecalho.es
    
        // SOBRE A EMPRESA
        conteudoTexto.about.cabecalho = texts.about.cabecalho.es
        conteudoTexto.about.texto = texts.about.texto.es
}

console.log(about)

export default {conteudoTexto,LANGUAGE, changeLanguage}