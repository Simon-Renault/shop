<template>
  <Layout>
    <v-centered-container>



       <div class="grid">

        <g-link
          v-for="(i,index) in 66"
          :key="index + '-drawing'"
          :to="`shop/product/${i}`"
          class="drawing">
          <article>
            <v-image-loader class="v-grid-item__img" :shouldLoad="true" src="./imgs/frame_mock_vertical.png" :alt="i"/>
            <h3>Drawing name</h3>
            <p>66£</p>
          </article>
         
              
        </g-link>

      </div>
     
   
       
    </v-centered-container>
    <Pager :info="$page.allDrawings.pageInfo"/>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  },
  metaInfo: {
    title: 'Shop'
  },
  computed: {
    drawings () { return this.$page.allDrawings.edges},
    first () { return this.$page.allDrawings.edges[0]}
  }
}
</script>

<page-query>
query($page: Int){
  allDrawings( perPage: 6 , page: $page , filter : { isForSale : {eq : true}})  @paginate {
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
          availableForSale
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

<style lang="scss" scoped>



.grid{
  display:grid;
  grid-template-columns: repeat(4,1fr);
}

.drawing{
  img{
    border-radius: 3px;
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
