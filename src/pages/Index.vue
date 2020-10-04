<template>
  <Layout class="pad-top">

    <v-centered-container class="project-grid">


      <div class="centered">
        <h2>An awesome title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient monte</p>
      </div>

      <div class="grid">

        <template v-for="(item,index) in homePageItems" >
          <v-grid-item  class="special"  
            :item="item" 
            :key="'grid-item'+index"/>
        </template>

      </div>

      <div class="centered">
        <h2>An awesome title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient monte</p>
      </div>


      <div class="grid">

        <template v-for="(item,index) in homePageItems" >

          <v-grid-item  
            :item="item" 
            :key="'grid-item'+index"/>


        </template>

      </div>

    </v-centered-container>
   
  </Layout>
</template>

<page-query>
query{
  allHomePageFeaturedItem(sortBy:"index",order: ASC){
      edges{
        node{
          id
          index
          cover_image
          name
          sizing
          drawing_id
        }
      }
  }
}
</page-query>

<script>
  import vGridItem from '@/components/v-grid-item.vue'



  export default {
    components: {
      'v-grid-item': vGridItem
    },
    computed : {
      homePageItems (){
        return this.$page.allHomePageFeaturedItem.edges.map(i => i.node)
      }
    }
  }
</script>


<style lang="scss" >

.centered{
  position: relative;
  margin: 0 auto 100px;
  text-align: center;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    font-size: 50px;
  }
  p{
    display: flex;
    margin:auto;
    max-width: 80%;
    margin: 20px 0 0;
    font-size: 16px;
    line-height: 1.6;
    opacity: .6;
  }
   @media screen and (max-width: 600px) {
      margin: 30px auto 70px;
     max-width: 100%;
      h2{
        font-size: 40px;
      }
  }
}

.grid {
  margin: 0 0 100px 0;
  display: grid;
  grid-gap: 30px;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

}
</style>