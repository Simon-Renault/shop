<template>
  <Layout>
    <v-centered-container>



       <div class="grid">

        <g-link
          v-for="({node:drawing},index) in drawings"
          :key="index + '-drawing'"
          :to="`shop/product/${drawing.id}`"
          class="drawing">
          <article>
            <v-image-loader class="v-grid-item__img" :shouldLoad="true" src="./imgs/frame_mock_vertical.png" :alt="drawing.title"/>
            <h3>{{drawing.name}}</h3>
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

</style>
