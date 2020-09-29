<template>
  <Layout>
   <v-centered-container>
     <div v-html="description">

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


