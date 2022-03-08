<template>


<div class="container">
    <div v-for="(dado) in resp" :key="dado">
        <img class="col-4" :src="dado['media_url'] " alt="" srcset="">
    </div>
</div>



</template>
<script>

export default ({
    setup() {
        
    },
    data(){
        return{
            imgs: '',resp: null
        }
    },
    mounted () {
    const axios = require('axios');
   //   const token = 'IGQVJYZAnpmUktkNlJpd1dPaGdsSHcwb0FoRjl5UkpKM1diQzItdlo3RWZA4M0tjcjVUQXVRMW93ODJ0YkFrQXJZAbllFVU1pX3B5b1NsaGMwNXM3WEJaZAmpjZA05Vc1I1blpLUzhqYnRRTl9obC0xbllMSwZDZD'
        const tribusToken = 'IGQVJYbkdUSlFCb2JZAVmROaEYzMFZAqQTJHRWRUbnBHX3NVRkxqOGZAYc2tYZAkxmNTctN25JVVQ1azlVYVh2Q0VVZAW1DU1JYb1RhX3FmdFM5VE5kRlRnejd3alFlOE1IZAm83ZAFlPRmdfUkxVWGlxZAVNEUAZDZD'

    axios.get('https://graph.instagram.com/me/media?access_token='+tribusToken+'&fields=media_url,media_type,caption,permalink')
        .then((response) => {
            // handle success
            console.log(response.data['data']);
            this.resp = response.data['data']
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });


  },
  methods:{
      loadInsta: function(){
        
    
      }
  }
})
</script>

<style scoped>

.container{
    width: 100%;
}




</style>
