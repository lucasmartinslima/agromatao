<template>
  <div class="menu-mobile row">
    <div class="">
      <img src="../assets/logo.png" alt="" /> 

      <div class="lang" @click="changeLanguage(0)"> 
        <img style="width: 35px; padding: 2px; margin-top:17px;" src="../assets/icones/brazil.png" alt="" />
      </div>
           <div class="lang" @click="changeLanguage(1)"> 
              <img style="width: 35px; padding: 2px; margin-top:17px;" src="../assets/icones/estados-unidos.png" alt="" />
         </div>
          <div class="lang" @click="changeLanguage(2)"> 
        <img style="width: 35px; padding: 2px; margin-top:17px;" src="../assets/icones/espanha.png" alt="" />
  </div>
    </div>

    <div class="icon-menu-mobile">
      <img @click="hiddenMobileMenu" src="../assets/menu-mobile.png" alt="" />
    </div>


      
  </div>
   

  <div v-if="menu" class="menu-open" id="menu">
        <img  src="../assets/icones/brazil.png" alt="" />
    <img
      @click="hiddenMobileMenu"
      style="float: right; width: 60px; padding: 7px"
      src="../assets/icones/close.png"
      alt=""
    />
    <ul>
      <li><a @click="scrollTo('Equipamentos')">Início</a></li>
      <li><a @click="scrollTo('about')">Empresa</a></li>
      <li><a @click="scrollTo('Equipamentos')">Produtos</a></li>
      <!--<li><a @click="scrollTo('Equipamentos')">Eventos</a></li>-->
      <li><a @click="scrollTo('contato')">Fale Conosco</a></li>
    </ul>
  </div>

</template>

<script>

import Translate  from "./translateTexts.js";


export default {
  name: "Menu",
  data() {
    return {
      menu: false,
      mobile: false,
      LANGUAGE: 'pt',
      
    };
  },
  components: {},
  props: {
    msg: String,
  },
  methods: {
    scrollTo: function (idMenu) {
      document
        .getElementById(idMenu)
        .scrollIntoView({ behavior: "smooth", block: "start" });
      this.menu = false;
    },
    hiddenMobileMenu: function () {
      this.menu = !this.menu;
      
    },
     changeLanguage: function (lang) { 
      Translate.changeLanguage(lang) 
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
:root {
  --text-color: #ebebeb;
  --primary-color: rgba(0, 0, 0, 0.5);
  --secundary-color: #b30000;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

#itens {
  text-align: right;
}

#nav a {
  font-weight: bold;
  color: var(--text-color);
  text-decoration: none;
  font-size: 9px;
  padding: 25px;
}



#nav a.a-exact-active {
  border-bottom: var(--secundary-color) 3px solid;
  color: var(--secundary-color);
}
.sub-header {
  color: var(--primary-color);
  font-size: 10px;
}
.menu {
  min-height: 70px;
}

.menu-principal {
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.85),
    var(--primary-color)
  );
}

@media screen and (min-width: 651px) and (max-width: 1890px) {
  .menu-principal {
    background-color: red;
    display: none;
  }
    .menu-open {
    position: fixed;
    margin: 0;
    top: 0;
    height: 100%;
    width: 280px;
    right: 0;
    padding: 0;
    z-index: 14;
    background: white;
    color: #138732;
  }
}

@media screen and (max-width: 650px) {
  .menu-principal {
    background-color: red;
    display: none;
  }
    .menu-open {
    position: fixed;
    margin: 0;
    top: 0;
    height: 100%;
    width: 100%;
    padding: 0;
    z-index: 14;
    background: white;
    color: #138732;
  }
}

.menu-open a:hover{
  cursor: pointer;
  border-bottom: 2px solid  #138732;
}


.menu-principal-fixed {
  background-color: #138732;
  position: fixed;
  width: 100%;
  z-index: 8;
  top: 0;
}

.menu-mobile {
  padding: 18px;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.85),
    var(--primary-color)
  );
}
.menu-mobile img{
  width: 300px;
  float: left;
  padding: 20px;
}


.menu-open ul li {
  width: 100%;
  padding: 25px;
  font-size: 19px;
}

.icon-menu-mobile img {
  width: 70px;
  float: right;
}
.icon-menu-mobile img:hover {
  cursor: pointer;
}

.primary-color {
  background-color: var(--primary-color);
}
#telefone {
  color: var(--text-color);
}
.logo {
  text-align: center;
  height: 100%;
}

.logo img {
  margin-top: 10px;
  vertical-align: middle;
  width: 250px;
  padding: 0px;
}

.lang:hover{
cursor: pointer;
}
</style>
