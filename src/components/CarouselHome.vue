<template>
  <Carousel :autoplay="3000" :wrap-around="true">

    <Slide class="carrousel" v-for="slide in slides" :key="slide">
      
        <img v-bind:src="require('../assets/' + slide.img)" />
        <h2>{{ slide.texto }}</h2>
     
    </Slide>

    <template #addons>
     
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    
  },
   setup() {

     const slides = [
       {
         texto: '',
         img: 'slide-principal.png'
       },
      {
         texto: '',
         img: 'slide-secundario.png'
       },
     ]
      // expose to template
      return {
        slides
      }
    }
});
</script>

<style scoped>


 img{
   width: 100%;
 }

 .carrousel{
padding: 0;
 }
Pagination{
  margin: 0;
  padding: 0;
}


</style>