<template>
  <Layout>
    <v-centered-container>
     
      <div
        v-for="({node:drawing},index) in drawings"
        :key="index + '-drawing'"
        class="column is-4">
        <div class="card">
          {{drawing.name}}
            <div class="field is-grouped is-grouped-right">
              <div class="control">
                <g-link
                  :to="`shop/product/${drawing.id}`"
                  class="button is-primary is-outlined">
                  View Product
                </g-link>
              </div>
            </div>

        </div>
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
