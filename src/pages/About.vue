<template>
  <Layout>
   <div class="hero-image"></div>
   <v-centered-container>

     <div class="grid">
        <div class="img-left"></div>
        <div v-html="description"></div>
     </div>

   </v-centered-container>
  </Layout>
</template>


<script>
import AboutConfig from '../../config/about_page.json'
export default {
  data(){
    return{
      description : AboutConfig.description
    }
  }
  
}
</script>


<style lang="scss" scoped>
.hero-image{
  height: 50vh;
  width: 100vw;
  background: var(--light-grey);
}
.img-left{
  height: 400px;
  background: var(--light-grey);
}
.grid{
  margin: 100px 0;
  grid-template-columns: 2fr 3fr;
  grid-gap: 60px;
  p{
    opacity: .7;
    line-height: 1.5;
  }
  li{
    list-style: none;
  }
}

</style>


