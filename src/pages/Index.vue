<template>
  <Layout>

    <CenteredContainer class="project-grid">

      <div class="centered">
        <h2>Simon Renault</h2>
        <p>{{intro}}</p>
        
        <g-link class="button" to="/shop">
          <span>Shop</span>
          <shopping-cart-icon size="1x" class="custom-class"></shopping-cart-icon>
        </g-link>

      </div>

      <div class="grid">

        <GridItem  class="special"  
          :item="item" 
          v-for="(item,index) in homePageItems"
          :key="'grid-item'+index"/>

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
  import HomeConfig from '../../config/home_page.json'
  import GridItem from '@/components/GridItem.vue'
  import { ShoppingCartIcon } from 'vue-feather-icons'

  export default {
    components: {
      GridItem,
      ShoppingCartIcon,
    },
    data : () =>({
      intro : HomeConfig.intro
    }),
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
.button{
  cursor: pointer;
  margin: 20px 0 0 0;
  outline: none;
  display: flex;
  align-items: center;
  padding: 0 20px ;
  height:45px;
  border-radius: 3px;
  background: black;
  border: none;
  color: white;
  font-size: 14px;
  span{
    margin-right: 7px;
  }
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
    p{
      max-width: 95%;
    }
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
  position: relative;
  height: 45px;
  padding:0;
  margin: 30px 0;
  width: 100%;
  max-width: 500px;
  display: flex;
  font-size: 15px;
  input{
    flex-grow: 1;
    height:100%;
    width: 100%;
    border: none;
    outline: none;
    padding: 0 12px;
    font-size: inherit;
    border: 2px solid black;
    border-radius:  3px 0 0 3px ;
  }
  button{
    flex-shrink: 0;
    margin: 0;
    color: white;
    border: none;
    padding: 0 20px;
    background-color: black;
    outline: none;
    cursor: pointer;
    font-size: inherit;
    border-radius: 0 3px 3px 0;
  }
}
</style>