<template>
    
<div class="home">

<CarouselHome/>
</div>

</template>

<script>
import CarouselHome from './CarouselHome.vue'

export default({
    components: {
    CarouselHome
  },
})
</script>

<style>

.home{
    position: relative;
    width: 100%;
    height: 80%;
    background-color: var(--primary-color);
}


</style>