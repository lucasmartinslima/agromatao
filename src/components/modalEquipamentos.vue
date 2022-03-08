<template >
  <div class="bgModal" v-if="modalShow"></div>

  <div class="container" v-if="modalShow">
    <div class="modal">
      <div class="close-btn">
        <img
          @click="showModal"
          v-bind:src="require('../assets/icones/close.png')"
          alt=""
        />
      </div>

      <div class="row scroll-bar">
        <div class="col-7">
          <div
            style="
              width: 100%;
              height: 100%;
              max-height: 700px;
              overflow: hidden;
            "
          >
            <img
              class="showIMG"
              v-if="changeIMG == false && showVideo == false"
              v-bind:src="require('../assets/equipamentos/' + imgProduto + '')"
              alt=""
            />
            <img
              class="showIMG"
              v-if="changeIMG == true && showVideo == false"
              v-bind:src="require('../assets/equipamentos/' + IMG.nome + '')"
              alt=""
            />
            <video
              v-if="changeIMG == false && showVideo == true"
              controls
              autoplay="false"
              v-bind:src="require('../assets/equipamentos/' + VIDEO.nome + '')"
            ></video>
          </div>
        </div>

        <div class="col-1">
          <div style="float: left">
            <div v-for="img in imgs" :key="img">
              <div style="width: 70px; height: 70px; overflow: hidden">
                <img
                  @click="switchIMG(img)"
                  class="imgsProduto"
                  v-bind:src="require('../assets/equipamentos/' + img.nome + '')"
                  alt=""
                />
              </div>
            </div>
            <div v-for="video in videosProduto" :key="video">
              <div style="width: 70px; height: 70px; overflow: hidden">
                
                <img
                  @click="switchVIDEO(video)"
                  class="imgsProduto" style="padding: 10px"
                  v-bind:src="require('../assets/icones/video-player.png')"
                  alt=""
                />

              </div>
            </div>
          </div>
        </div>

        <div class="col-4">
          <h2>{{ nomeProduto }}</h2>

          <div class="desc">
            <p>{{ descProduto }}</p>
          </div>

          <div class="opcionais">
            <div v-if="opcionais == '' ">
              Para informações detalhadas entre em contato.
            </div>
            <div v-else>
            {{ opcionais }}
            </div>
            
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      modalShow: false,
      changeIMG: false,
      showVideo: false,
      IMG: "",
      VIDEO: "",
    };
  },
  props: {
    imgProduto: String,
    nomeProduto: String,
    descProduto: String,
    imgs: Array,
    videosProduto: Array,
    modal: Boolean,
    opcionais: String,
  },
  methods: {
    showModal: function () {
      this.modalShow = !this.modalShow;
      this.changeIMG = false;
      this.showVideo = false;
    },
    switchIMG: function (img) {
      this.IMG = img;
      this.showVideo = false;
      this.changeIMG = true;
    },
    switchVIDEO: function (video) {
      this.showVideo = true;
      this.changeIMG = false;
      this.VIDEO = video;
    },
  },
};
</script>

<style scoped>
.bgModal {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 10;
  top: 0;
}

.modal {
  position: fixed;
  background-color: white;
  z-index: 15;
  width: 85%;
  height: auto;
  padding: 30px;
}

.scroll-bar {
  overflow: scroll;
  height: 85vh;
}

.scroll-bar::-webkit-scrollbar-track {
  border: 0px solid none;
  padding: 2px 0;
  background-color: none;
}

.scroll-bar::-webkit-scrollbar {
  width: 10px;
}

.scroll-bar::-webkit-scrollbar-thumb {
  border-radius: 15px;
  box-shadow: inset 0 0 6px #078c26;
  background-color: #078c26;
  border: 0px solid #078c26;
}

.container {
  z-index: 15;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 100%;
}

.imgsProduto {
  float: left;
}
.imgsProduto:hover {
  cursor: pointer;
}
.showIMG {
  width: 100%;
  max-width: 80%;
  min-width: 50px;
}

.desc {
  white-space: pre-wrap;
}
.opcionais {
  background-color: #078c26;
  width: 100%;
  color: white;
  padding: 20px;
  border-radius: 20px;
  white-space: pre-wrap;
}

.close-btn img {
  width: 25px;
}

.close-btn img:hover {
  cursor: pointer;
}

.red {
  background-color: red;
}

.blue {
  background-color: blue;
  height: 100%;
}
</style>
