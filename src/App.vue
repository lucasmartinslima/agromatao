<template>
  <Menu/>
  <Home/>
  <Contato/>
  <Equipamentos/>
  <About/>
  <Footer/>
</template>

<script>
import Menu from './components/Menu.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Equipamentos from './components/Equipamentos.vue'
import Contato from './components/ContatoBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  created () {
            document.title = "Agromatão - Mais de 4 décadas de experiência.";
            localStorage.setItem('language', 0);
  },
  components: {
    Menu, 
    Home,
    About,
    Equipamentos, 
    Contato,
    Footer
  },
  data(){
    return{
     
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1a1a1a;
}

body{
  background: url('~@/assets/background.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-color: rgba(43, 43, 43, 0.5);
}


* {
  box-sizing: border-box;
}


.row::after {
  content: "";
  clear: both;
  display: table;
}

[class*="col-"] {
  float: left;
}

html {
  font-family: "Lucida Sans", sans-serif;
}

body{
  padding: 0px;
  margin: 0px;
}

/* For mobile phones: */
[class*="col-"] {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  /* For tablets: */
  .col-s-1 {width: 8.33%;}
  .col-s-2 {width: 16.66%;}
  .col-s-3 {width: 25%;}
  .col-s-4 {width: 33.33%;}
  .col-s-5 {width: 41.66%;}
  .col-s-6 {width: 50%;}
  .col-s-7 {width: 58.33%;}
  .col-s-8 {width: 66.66%;}
  .col-s-9 {width: 75%;}
  .col-s-10 {width: 83.33%;}
  .col-s-11 {width: 91.66%;}
  .col-s-12 {width: 100%;}
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
}

</style>
