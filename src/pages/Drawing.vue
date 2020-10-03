<template>
  <Layout>

    <v-centered-container class="project-grid">

      <div class="grid">

        <template v-for="(item,index) in grid_items" >

          <v-grid-item  v-if="item.template==='home-page-tile'" 
            :item="item" 
            :key="'grid-item'+index"/>


        </template>

      </div>

      <div class="grid">

        <template v-for="(item,index) in grid_items" >

          <v-grid-item  v-if="item.template==='home-page-tile'" 
            :item="item" 
            :key="'grid-item'+index"/>


        </template>

      </div>

    </v-centered-container>
   
  </Layout>
</template>

<script>
  import vGridItem from '@/components/v-grid-item.vue'

  import homeConfig from '../../config/home_page.json'

  export default {
    components: {
      'v-grid-item': vGridItem
    },
    data(){
      return{
        grid_items : homeConfig.grid_config
      }
    }
  }
</script>


<style lang="scss" >



.grid {
  margin: 0 0 100px 0;
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1130px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>