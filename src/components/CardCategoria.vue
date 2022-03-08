<template>
    


<div class="cardCategoria">


<h3> {{nomeCategoria}} </h3>

</div>

</template>

<script>

export default({
    setup() {
        
    },
    props:{
        nomeCategoria: String
    }
})
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;500&display=swap');

.cardCategoria{
    height: auto;
    width: auto;
    float: left;
    background-color: #ededed;
    padding: 10px;
    border-radius: 5px;
}

.card:hover{
   cursor: pointer;
}

h3{
    font-weight: 300;
    font-family: 'Noto Sans JP', sans-serif;
    margin: 0px;
}
img{
    width: 80%;
    padding: 20px;
}


</style>