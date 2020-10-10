<template>
  <Layout class="pad-top">

    <CenteredContainer class="project-grid">

      <div class="centered">
        <h2>Simon renault</h2>
        <p>Hello, I am Simon, a poetic and passionate illustrator. Fascinated by the subtle play between order and chaos, nature and concrete, I like to spend hours drawing intricate and detailed cities and buildings. </p>
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
          <input type="text" placeholder="Enter your email address ...">
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

.input{
  border-radius: 3px;
  position: relative;
  height: 45px;
  margin: 30px 0;
  width: 100%;
  max-width: 500px;
  display: flex;
  border: 2px solid black;
  font-size: 15px;
  input{
    height:100%;
    width: 100%;
    border: none;
    outline: none;
    padding: 0 12px;
     font-size: inherit;
  }
  button{
    color: white;
    border: none;
    padding: 0 20px;
    background-color: black;
    outline: none;
    cursor: pointer;
    font-size: inherit;
  }
}
</style>