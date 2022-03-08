<template>
  <ModalEquipamentos
    ref="equipamentos"
    v-bind:imgProduto="IMG_PRODUTO"
    v-bind:imgs="IMGS_PRODUTO"
    v-bind:nomeProduto="NOME_PRODUTO"
    v-bind:descProduto="DESC_PRODUTO"
    v-bind:opcionais="OPCIONAIS_PRODUTO"
    v-bind:videosProduto="VIDEOS_PRODUTO"
  />

  <div class="equipamentos" id="Equipamentos">
    <div class="row">
      <h2>{{ LANGUAGE.produto.cabecalho }}</h2>
    </div>

<!--
    <div class="row">
      <div class="col-12 produtos">
        <div class="row" style="align-items: center">
          <div v-for="produto in produtos" :key="produto">
            <CardProduto
              v-on:click="
                showModal(
                  produto.nome,
                  produto.desc,
                  produto.img,
                  produto.imgs,
                  produto.videos,
                  produto.opcionais
                )
              "
              v-if="produto.categoria === selected"
              v-bind:imgProduto="produto.img"
              v-bind:nomeProduto="produto.nome"
            />
            <CardProduto
              v-on:click="
                showModal(
                  produto.nome,
                  produto.desc,
                  produto.img,
                  produto.imgs,
                  produto.videos,
                  produto.opcionais
                )
              "
              v-else-if="selected === 0"
              class="col-6"
              v-bind:imgProduto="produto.img"
              v-bind:nomeProduto="produto.nome"
            />
          </div>
        </div>
      </div>
    </div> 
    -->


      <div class="row">
      <div class="col-12 produtos">
        <div class="row" style="align-items: center">
          <div v-for="produto in produtosREST" :key="produto">
            <CardProduto
              v-on:click="
                showModal(
                  produto.nome,
                  produto.desc,
                  produto.img,
                  produto.imgs,
                  produto.videos,
                  produto.opcionais
                )
              "
              v-if="produto.categoria === selected"
              v-bind:imgProduto="produto.img"
              v-bind:nomeProduto="produto.nome"
            />
            <CardProduto
              v-on:click="
                showModal(
                  produto.nome,
                  produto.desc,
                  produto.img,
                  produto.imgs,
                  produto.videos,
                  produto.opcionais
                )
              "
              v-else-if="selected === 0"
              class="col-6"
              v-bind:imgProduto="produto.img"
              v-bind:nomeProduto="produto.nome"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="row"><br /></div>
  </div>
</template>

<script>
import CardProduto from "./CardProduto.vue";
import ModalEquipamentos from "./modalEquipamentos.vue";
import Translate  from "./translateTexts.js";

export default {
  setup() {},
  components: {
    CardProduto,
    ModalEquipamentos,
  },
  data() {
    return {
      selected: 0,
      modalShow: true,

      LANGUAGE: Translate.conteudoTexto,

      IMG_PRODUTO: "canterizador-1.png",
      IMGS_PRODUTO: [],
      VIDEOS_PRODUTO: [],
      NOME_PRODUTO: "",
      DESC_PRODUTO: "",
      OPCIONAIS_PRODUTO: "",

      categorias: [
        "Todos",
        "Canterizadores",
        "Eliminador de Soqueiras",
        "Subsoladores",
        "Kit's P/ Colheita de Muda",
        "Diversos",
      ],
      produtosREST: "",
      produtos: [
         {
          nome: "Cobridor Agromatão",
          img: "cobridor-1.png",

          imgs: ["cobridor-1.png", "cobridor-2.png"],
          
          desc: "Fabricado em chassi monobloco, possui rodas acamadoras pivotantes, discos cobridores pantográficos com regulagem angular, rodas compactadoras pivotantes e sistema de pulverização de defensivo.\n Número de cobridores (linhas) - 2\n Espaçamento linhas – 900 ou 1500mm\n Chassi - Tubular monobloco  \n Rodas acamadora – pivotante c/ revestimento em sapatas emborrachadas \n Cobridores independentes – pantográfico de discos concavos e ajuste fino p/ regulagem de ângulo \n Sistema de Regulagem de ângulo - catraca\n Rolo compactador (carambola) – pivotante \n Sistema de pulverização de defensivo – dentro dos sulcos com sistema anti-gotejamento \n Sistema de agitação – com agitador 1,5mm, derivando da linha de pressão da bomba \n Bomba – acionamento hidráulico c/ filtro de sucção de 1.1/4” base reta \n Ponta – jato cônico CH100 de engate rápido \n Capacidade de defensivo (tanque) – 600L  ",
          opcionais: "",
          categoria: 5,
        },
        {
          nome: "Subsolador Localizado",
          img: "calcario_air.png",

          imgs: ["calcario_air.png", "calcario_air_2.png"],
          videos: ["subsolador-localizado.mp4"],
          desc: "Equipamento para subsolagem localizada no perfil para planta, fabricado em chassi monobloco possui discos de corte, hastes subsoladoras, rodas para controle de profundidade, depósito solido para aplicação de corretivo em profundidade com distribuição por esteira, sistema de abertura automática de big-bag, depósito líquido para barreira química em profundidade, depósito de semente fina para cobertura de solo, turbina de pressão positiva para aplicação mais eficiente do corretivo no perfil do solo e rolo destorroador.\n\n  Espaçamento entre hastes – 2 hastes 1500mm / 3 hastes 750mm; Potência requerida – 260cv acima; Engate – Hidráulico cat. III",
          opcionais:
            "Opcionais: Depósito de corretivo sólido; Depósito de corretivo sólido com Turbina (Pressão de ar positiva); Depósito líquido para barreira química em profundidade; Depósito de semente fina para cobertura; Para informações detalhadas entre em contato",
          categoria: 5,
        },
        {
          nome: "Canterizador 1 linha",
          img: "canterizador_1.png",
          imgs: [
            "canterizador_1.png",
            "canterizador_2.jpg",
            "canterizador_3.jpg", 
            "canterizador_5.png",
          ],
          videos: ["canteirizador_1_2.mp4"],
          desc: "Equipamento desenvolvido para otimizar operações com ênfase nos benefícios agronômicos. Fabricado em chassi monobloco, prepara 1 linha para plantio de diversas culturas. Muito utilizado para o preparo de rua mãe de meiosi. Possui disco de corte, haste subsoladora com regulagem de profundidade e enxadas rotativas para formação de canteiro com profundidade constante. Tendo como opcional, depósito de fertilizante / corretivo com distribuição por esteira, tanque líquido para distribuição de defensivo ou adubo biológico em profundidade e turbina de pressão positiva para uma melhor distribuição do corretivo no perfil do solo. Número de linhas – 1 \n Número de hastes por linha – 1 ou 2 \n Potência requerida – 160cv acima \n Engate – Hidráulico cat. III",
          opcionais:
            "Opcionais: \n Depósito de corretivo sólido \n Depósito de corretivo sólido com Turbina \n Depósito líquido",
          categoria: 1,
        },
        {
          nome: "Eliminador de Soqueiras",
          img: "elimin_soq_1.png",
          imgs: [
            "elimin_soq_1.png",
            "elimin_soq_2.png",
            "elimin_soq_3.png",
            "elimin_soq_4.jpg",
            "elimin_soq_5.jpg",
            "elimin_soq_6.jpg",
            "elimin_soq_7.jpg",
            "elimin_soq_8.jpg",
          ],
          videos: ["elimin_soq_1.mp4"],
          desc: "Equipamento para eliminar soqueiras de cana-de-açucar, eliminando simultaneamente duas linhas. Extremamente eficiente para controle de praga denominada como Sphenophorus, pois a operação deixa as soqueiras exposta e trituradas. Fabricado em chassi monobloco, discos de corte, hastes com relhas para arranquio e enxadas rotativas para exposição e trituração da soqueira. Todo sistema é movido por caixas de transmissão de alta resistência banhada a óleo. Outra vantagem dessa operação é que o eliminador de soqueiras agromatão deixa o solo totalmente nivelado, não sendo necessário operação subsequente para nivelamento do solo. \n\n Número de linhas – 2 \n Espaçamento ente linhas – 1500mm, 900mm ou personalizado \n Número de hastes por linha – 1 \n Potência requerida – 180v acima \n Engate – Hidráulico cat. III",
          opcionais: "",
          categoria: 2,
        },
        {
          nome: "Canterizador 1 linha e 2 hastes",
          img: "canteirizador_1_linha_2_hastes.png",
          imgs: [
            "canteirizador_1_linha_2_hastes.png",
            "canteirizador_1_linha_2_hastes_1.png",
            "canteirizador_1_linha_2_hastes_2.jpg",
          ],
          videos: ["canterizador_1.mp4"],
          desc: "Equipamento desenvolvido para otimizar operações com ênfase nos benefícios agronômicos. Fabricado em chassi monobloco, prepara 1 linha para plantio de diversas culturas. Muito utilizado para o preparo de rua mãe de meiosi. Possui disco de corte, 2 hastes subsoladoras com regulagem de profundidade e enxadas rotativas para formação de canteiro com profundidade constante. Tendo como opcional, depósito de fertilizante / corretivo com distribuição por esteira, tanque líquido para distribuição de defensivo ou adubo biológico em profundidade e turbina de pressão positiva para uma melhor distribuição do corretivo no perfil do solo.",
          opcionais:
            "Opcionais: Depósito de corretivo sólido; Depósito de corretivo sólido com Turbina de pressão positiva; Depósito líquido Para informações mais detalhadas entre em contato",
          categoria: 3,
        },
        {
          nome: "Canterizador 2 linhas",
          img: "canterizador_linha_2.png",
          imgs: [
            "canterizador_2_linhas.png",
            "canterizador_2_linhas_1.jpg",
            "canterizador_2_linhas_2.jpg",
            "canterizador_2_linhas_3.jpg",
            "canterizador_2_linhas_4.jpg",
            "canterizador_linha_2.png",
            "canterizador_linha_2_2.png",
            "canterizador_linha_2_3.png",
            "canterizador_linha_2_4.png",
            "canterizador_linha_2_5.png",
            "canterizador_linha_2_6.png",
          ],
          videos: ["canteirizador_linha_2.mp4"],
          desc: "Equipamento desenvolvido para otimizar operações com ênfase nos benefícios agronômicos. Fabricado em chassi monobloco, prepara 2 linhas simultaneamente para plantio de diversas culturas. Muito utilizado no preparo de solo para plantio de cana. Possui disco de corte, haste subsoladora com regulagem de profundidade e enxadas rotativas para formação de canteiro com profundidade constante. Tendo como opcional, depósito de fertilizante / corretivo com distribuição por esteira, tanque líquido para distribuição de defensivo ou adubo biológico em profundidade e turbina de pressão positiva para uma melhor distribuição do corretivo no perfil do solo. \n \n Número de linhas – 2 Espaçamento ente linhas – 1500mm, 900mm ou personalizado; Número de hastes por linha – 1 ou 2; Potência requerida – 210cv acima; PTO – 1000 rpm; Engate – Hidráulico cat. III",
          opcionais:
            "Opcionais: Depósito de corretivo sólido; Depósito de corretivo sólido com Turbina de pressão positiva; Depósito líquido Para informações mais detalhadas entre em contato",
          categoria: 3,
        },
        {
          nome: "Canterizador de replante",
          img: "canterizador_replante.png",
          imgs: [
            "canterizador_replante.png",
            "canterizador_replante_1.jpg",
            "canterizador_replante_3.jpg",
            "canterizador_replante_4.jpg",
          ],
          videos: ["canterizador_replante.mp4"],
          desc: "Equipamento para preparo de solo localizado em pequenas falhas no plantio, deixando o solo em perfeitas condições para o replantio. \n Número de linhas – 1 \n Potência requerida – 80cv acima \n Engate – Hidráulico cat. II",
          opcionais: "Opcionais: Depósito de corretivo sólido ",
          categoria: 3,
        },
        {
          nome: "Destorroador 3500",
          img: "destorroador.jpg",
          imgs: ["destorroador.jpg"],
          videos: ["Destorroador.mp4"],
          desc: "Equipamento construído sobre chassi monobloco, elimina torrões do prepara de solo e incorpora a palha, é utilizado em segunda operação. Possui enxadas rotativas acionadas através de caixas de transmissão e redutores de alta resistência e banhados a óleo.\n\n Largura de trabalho  – 3500mm Profundidade das enxadas rotativas – 200 à 250mm; Potência req. aprox. – 160cv; PTO – 540 rpm; Engate – Hidráulico cat. III",
          opcionais: "",
          categoria: 3,
        },
        {
          nome: "Sulcador Especial Agromatão",
          img: "sulcador.png",
          imgs: ["sulcador.png","sulcador_1.png","sulcador_2.png"],
          videos: [],
          desc: "Fabricado em chassi monobloco, possui dois sulcadores especiais que proporcionam diversas vantagens a operação, depósito de adubo e depósito de corretivo (oxido) individuais com distribuição por esteira que proporciona uma distribuição precisa e uniforme. \n Número de sulcadores (linhas) - 2\n Espaçamento entre sulcadores – 1500mm e 900mm \n Disco de corte - 26” oscilante, com molas de compressão \n Tipo de engate - hidráulico cat. III / II \n Capacidade do Depósito de adubo - 650L em aço carbono com revestimento epóxi \n Capacidade do Depósito de corretivo (óxido) – 650L em aço carbono com revestimento epóxi",
          opcionais: "",
          categoria: 3,
        },
        {
          nome: "Subsolador 5 hastes com Depósito de corretivo",
          img: "subsolador_5_hastes.png",
          imgs: [
            "subsolador_5_hastes.png",
            "subsolador_5_hastes_1.jpg",
            "subsolador_5_hastes_2.jpg",
            "subsolador_5_hastes_3.jpg",
          ],
          desc: "Fabricado em chassi monobloco de extrema resistência, possui 5 hastes subsoladoras com espaçamento de 500 ou 570mm, discos de corte, hastes subsoladoras com regulagem de profundidade. Tendo como opcional, depósito de fertilizante / corretivo com distribuição por esteira, tanque líquido para distribuição de defensivo ou adubo biológico em profundidade e turbina de pressão positiva para uma melhor distribuição do corretivo no perfil do solo. \n\n Número de hastes – 5 Espaçamento ente hastes – 500 ou 570mm; Potência req. aprox. – 280cv acima; Engate – Hidráulico cat. III ou arrasto",
          opcionais:
            "Opcionais: Depósito de corretivo sólido; Depósito de corretivo sólido com Turbina; Depósito líquido",
          categoria: 3,
        },
        {
          nome: "Kit Impureza para colheita de cana mecanizada",
          img: "kit_impureza.jpg",
          imgs: [
            "kit_impureza.jpg",
            "kit_impureza_1.jpg",
            "kit_impureza_2.jpg",
            "kit_impureza_3.jpg",
          ],
          desc: "Sistema de rolos transportadores inferiores, permite um transporte uniforme da cana até o rolo picador; Impurezas Vegetais são eliminadas de forma mais eficiente pelo extrator por chegarem mais espalhadas; Impurezas minerais são eliminadas pelo disco de corte vazado e pelo rolo levantador vazado; Extrema economia do facão picador, pois o fluxo não se concentra apenas pelo meio; Pat.req.",
          opcionais: "",
          categoria: 3,
        },
        {
          nome: "Kit Muda",
          img: "kit_muda.jpg",
          imgs: [
            "kit_muda.jpg",
            "kit_muda_1.jpg",
            "kit_muda_2.jpg",
            "kit_muda_3.jpg",
            "kit_muda_4.jpg",
          ],
          desc: "Kit para colheita de muda em módulos emborrachados e Substituíveis, para colheita mecanizada; Exclusivo sistema de troca de sapatas em módulos; Não danifica a gema da cana; Corte padronizado de bitolas; Informações detalhadas entre em contato.",
          opcionais: "",
          categoria: 3,
        },
        /*,
                {
                    nome: 'Teste 3',
                    img: 'canterizador-1.png',
                    categoria: 0
                },
                {
                    nome: 'Teste 3',
                    img: 'canterizador-1.png',
                    categoria: 0
                }*/
      ],
    };
  },
  created() {
     this.$http
      //.get("http://localhost:8080/maquinas.json")
      .get("http://localhost/agromatao/RestMaquinas.php")
      .then((response) => {
        console.log(response.data);
        this.produtosREST = response.data;
        console.log(this.produtosREST)
      });

  },
  methods: {
    selecaoCategoria: function (idx) {
      var list = document.getElementsByClassName("cardCategoria");
      var i = 0;

      for (i = 0; i < list.length; i++) {
        list[i].style.color = "#078c26";
        list[i].style.backgroundColor = "";
        console.log("style" + i);
      }

      list[idx].style.color = "#ededed";
      list[idx].style.backgroundColor = "#078c26";
      this.selected = idx;
    },
    showModal: function (nome, desc, img, imgs, videos, opcionais) {
      this.NOME_PRODUTO = nome;
      this.DESC_PRODUTO = desc;
      this.IMG_PRODUTO = img;
      this.IMGS_PRODUTO = imgs;
      this.VIDEOS_PRODUTO = videos;
      this.OPCIONAIS_PRODUTO = opcionais;

      console.log(this.IMG_PRODUTO);
      this.$refs.equipamentos.showModal();
    },
  },
  mounted() {
    var list = document.getElementsByClassName("cardCategoria");
    var i = 0;

    list[i].style.color = "#ededed";
    list[i].style.backgroundColor = "#078c26";
    this.selected = i;
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;500&display=swap");

.equipamentos {
  width: 100%;
  height: auto;
  background-color: #ededed;
  opacity: 0.98;
  color: #078c26;
  font-family: "Noto Sans JP", sans-serif;
  padding: 10px 190px 10px 190px;
}

@media (max-width: 885px) {
  .equipamentos {
    padding: 5px 0px 5px 0px;
  }
}

h2 {
  font-size: 45px;
  font-weight: 100;
}

.produtos {
  background-color: #ededed;
  height: auto;
}

.categoria:hover {
  cursor: pointer;
}

/**.categoria
.categoria select{
    
    width: 100%;
    -webkit-appearance: none; 
    -moz-appearance: none;
    appearance: none; 
    background: url(http://www.webcis.com.br/images/imagens-noticias/select/ico-seta-appearance.gif) no-repeat #eeeeee; 
    background-position:  right; 
    width: 100%;
    height:40px;   
    border:1px solid #ddd;
    color: #078c26;
}

 */
</style>