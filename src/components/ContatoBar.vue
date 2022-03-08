<template>
    
    <div class="contato" id="contato">

        <div class="row">
            <div class="col-6 item">
                <img  v-bind:src="require('../assets/icones/call.png')" alt="">
                <h3>{{ LANGUAGE.contato.telefone.cabecalho }}</h3>
                <p>{{ LANGUAGE.contato.telefone.paragrafo }}</p>
            </div>
            <div class="col-6 item">
                <img  v-bind:src="require('../assets/icones/letter.png')" alt="">
                <h3>{{ LANGUAGE.contato.email.cabecalho }}</h3>
                <p>{{ LANGUAGE.contato.email.paragrafo }}</p>
            </div>
            
        </div>


    </div>



</template>

<script>

import Translate  from "./translateTexts.js";

export default({
    data(){
        return{
              LANGUAGE: Translate.conteudoTexto,
        }
    }
})
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;500&display=swap');

.contato{
    background-color: #138732;
    padding: 45px;
}

h3{
    color: var(--text-color);
    font-weight: 500;
    font-family: 'Noto Sans JP', sans-serif;
    padding: 0px;
    margin: 0px;
}
p{
    color: var(--text-color);
    font-weight: 100;
    font-family: 'Noto Sans JP', sans-serif;
    padding: 0px;
    margin: 0px;
}

img{
    width: 60px;
}

.item{
    padding: 8px;
}

</style>
