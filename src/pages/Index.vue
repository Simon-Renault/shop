<template>
  <Layout class="pad-top">

    <CenteredContainer class="project-grid">

      <div class="centered">
        <h2>An awesome title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient monte</p>
      </div>

      <div class="grid">

        <template v-for="(item,index) in homePageItems" >
          <GridItem  class="special"  
            :item="item" 
            :key="'grid-item'+index"/>
        </template>

      </div>

      <div class="centered">
        <h2>Newsletter</h2>
        <p>Subscribe and be informed of new publication, exhibitions, events and more !</p>
        <div class="input">
          <input type="text">
          <button>Subscribe</button>
        </div>
      </div>


    </CenteredContainer>
   
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
  import GridItem from '@/components/GridItem.vue'

  export default {
    components: {
      GridItem
    },
    computed : {
      homePageItems (){
        return this.$page.allHomePageFeaturedItem.edges.map(i => i.node)
      }
    }
  }
</script>


<style lang="scss" >
.shop_banner{
  height:300px;
  width: 100%;
  background-color: var(--light-grey);
  border-radius: 3px ;
  margin-bottom: 100px;
}
.centered{
  position: relative;
  margin: 0 auto 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 70%;
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