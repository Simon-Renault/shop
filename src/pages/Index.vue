<template>
  <Layout>

    <v-centered-container class="project-grid">

      <div class="grid">

        <template v-for="(item,index) in grid_items" >

          <v-grid-item  v-if="item.template==='home-page-tile'" 
            :item="item" 
            :key="'grid-item'+index"/>

          <v-grid-lift  v-if="item.template==='home_page_quote'" 
            :key="'grid-item'+index">
            <span v-html="item.quote"></span>
          </v-grid-lift>

        </template>

      </div>

    </v-centered-container>
   
  </Layout>
</template>

<script>
  import vGridItem from '@/components/v-grid-item.vue'
  import vGridLift from '@/components/v-grid-lift.vue'

  import homeConfig from '../../config/home_page.json'

  export default {
    components: {
      'v-grid-lift': vGridLift,
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

.featured-img{
  margin:auto;
  padding: 30px 0;
  &__content{
    overflow: hidden;
    position: relative;
    margin: auto;
    padding: 0 70px;
    max-width: 1430px;
    img{
      border-radius: 2px;
       max-height: 50vh;
    }
  }
}
.top-image{
  position: relative;
  height: 50vh;
  margin: 50px 0;
}
.project-grid{
  padding: 40px 0;
}
.grid {
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1330px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>