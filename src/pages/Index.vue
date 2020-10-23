<template>
  <Layout>

    <CenteredContainer class="project-grid">

      <div class="centered">
        <h2>Welcome</h2>
        <p>{{intro}}</p>
        
        <g-link class="button" to="/shop">
          <span>Shop</span>
          <shopping-cart-icon size="1x" class="custom-class"></shopping-cart-icon>
        </g-link>

      </div>

      <div class="grid">

        <GridItem  class="special" :item="homePageItems[0]" />
        <GridItem  class="special" :item="homePageItems[1]" />
        <GridItem  class="special not-odd" :item="homePageItems[2]" />
        <GridItem  class="special" :item="homePageItems[3]" />

      </div>

      <div class="centered">
        <h2>Featured drawings</h2>
        <p>A curated collection of my best work, handpicked every month. If you don't know where to start, this is the place to go.</p>
      </div>

      <div class="product-grid">

        <g-link
          v-for="({node:drawing},index) in $page.allDrawings.edges"
          :key="index + '-drawing'"
          :to="`shop/product/${drawing.id}`"
          class="drawing">

          <article>
            <LazyImage class="v-grid-item__img" :shouldLoad="true"  ratio="100%" :src="drawing.product.images[0].transformedSrc" alt="alt"/>
            <h3>{{drawing.name}}</h3>
            <p>{{drawing.product.priceRange.minVariantPrice.amount}}£ - {{drawing.product.priceRange.maxVariantPrice.amount}}£</p>
          </article>
         
        </g-link>

      </div>

      <div class="centered">
        <h2>Newsletter</h2>
        <p>Subscribe and be informed of new publication, exhibitions, events and more! No spam, not more than an email a month, that's a promisse.</p>
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
  },
  allDrawings( perPage: 4  , filter : { isForSale : {eq : true}}){
    pageInfo {
      totalPages
      currentPage
    }
    edges{
      node{
        id
       	name
        content
        cover
        isForSale
        product{
          id
          handle
          availableForSale
          images{
            transformedSrc
          }
          priceRange{
            minVariantPrice{
              amount
              currencyCode
            }
            maxVariantPrice{
              amount
              currencyCode
            }
          }
        }
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


<style lang="scss" scoped>
.shop_banner{
  height:300px;
  width: 100%;
  background-color: var(--accents-2);
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
.not-odd{

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

.project-grid{
  .input{
    position: relative;
    height: 45px;
    padding:0;
    margin: 30px 0;
    width: 100%;
    max-width: 500px;
    display: flex;
    font-size: 14px;
    input{
      flex-grow: 1;
      height:100%;
      width: 100%;
      border: none;
      outline: none;
      padding: 0 12px;
      font-size: inherit;
      border: 1px solid black;
      border-radius:  3px 0 0 3px ;
      &:focus{
          box-shadow: 0 0 0 3px rgba(0,0,0,0.1);
          border: 1px solid black;
      }
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
}


.product-grid{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  margin: 0 0 100px;
}

.drawing{
  transition: all .3s ease;
  position: relative;
  img{
    border-radius: 3px;
  }
  &:hover{
    opacity: 0.6;
  }
  h3{
    margin: 10px 5px 5px;
    color: var(--black);
    font-size: 20px;
  }
  p{
    font-size: 14px;
    margin: 5px 5px;
    color: var(--black);
    opacity: .5;
  }
}

</style>