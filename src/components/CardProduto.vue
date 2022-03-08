<template>
  <div class="card">
    <div class="into">
    <div  style="width: 100%; height: 250px; overflow: hidden">
      <img
        v-bind:src="require('../assets/equipamentos/' + imgProduto + '')"
        alt=""
      />
    </div>
    <h3>{{ nomeProduto }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  props: {
    imgProduto: String,
    nomeProduto: String,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;500&display=swap");

.card {
  height: 100%;
  min-height: 150px;
  
  background-color: #ededed;

padding: 2px 10px;
}
.card:hover {
  cursor: pointer;
}

.into{
background-color: white;
border-radius: 10px;
}

h3 {
  font-weight: 300;
  font-family: "Noto Sans JP", sans-serif;
}
img {
 width: auto;
  padding: 10px;
  height: 100%;
}
</style>