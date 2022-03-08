<template>
  <div class="about" id="about">
    



    <div class="row">
      <h2>{{ LANGUAGE.about.cabecalho }}</h2> 
      <div class="col-12">
        <img src="~@/assets/agromatao-fachada.jpg" alt="" />
        <p>
          {{ LANGUAGE.about.texto  }}
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-6 mapa">
        <h2>Unidade 1 - Rua Carlos Galli, 115 - Nova Cidade, Matão - SP</h2>
        <br>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.0419256119285!2d-48.34175678522593!3d-21.62328988567939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8e1b60abd2a2f%3A0x94c1305f938e4650!2sAgroMat%C3%A3o!5e0!3m2!1spt-PT!2sbr!4v1636084704308!5m2!1spt-PT!2sbr"
          height="550"
          style="border: 0; padding: 1px"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>

      <div class="col-6 mapa">
        <h2>Unidade 2 - Rua Danilo João Bambozzi Jr - Parq Industrial Toriba, Matão - SP</h2>
        <br>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.60957008868!2d-48.342950685225524!3d-21.64013248567039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8e183fb5a3daf%3A0x9147c179016bd5fa!2sAGROMATAO%20-%20und%202!5e0!3m2!1spt-PT!2sbr!4v1636084479729!5m2!1spt-PT!2sbr"
          height="550"
          style="border: 0; padding: 1px"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script> 
import Translate  from "./translateTexts.js";

export default{
  data() {
    return { 
      LANGUAGE: Translate.conteudoTexto,
      langSelected: Translate.LANGUAGE
      
    };
  },
  methods: {
    
  }
}
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;500&display=swap");

.about {
  height: auto;
  background-color: #138732;
  opacity: 0.97;
  color: var(--text-color);

  font-family: "Noto Sans JP", sans-serif;
}

.row {
  padding: 0px 150px;
}

@media (max-width: 885px) {
  .row {
    padding: 0px 20px;
  }
}

iframe {
  width: 100%;
  padding: 0px 30px;
}

h2 {
  font-size: 45px;
  font-weight: 100;
  margin: 0;
  padding: 37px;
}

.mapa h2 {
  font-size: 18px;
  padding: 0;
  margin: 0;
  float: left;
}

p {
  font-weight: 100;
  text-align: justify;
  font-size: 19px;
}

img {
  width: 100%;
  border-radius: 3px;
}
</style>