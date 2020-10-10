<template>
  <Layout class="pad-top">
    <CenteredContainer>

       <div class="grid1">

        <g-link
          v-for="({node:drawing},index) in drawings"
          :key="index + '-drawing'"
          :to="`shop/product/${drawing.id}`"
          class="drawing">

          <article>
            <LazyImage class="v-grid-item__img" :shouldLoad="true" :src="drawing.product.images[0].transformedSrc" alt="alt"/>
            <h3>{{drawing.name}}</h3>
            <p>{{drawing.product.priceRange.minVariantPrice.amount}}£ - {{drawing.product.priceRange.maxVariantPrice.amount}}£</p>
          </article>
         
        </g-link>

      </div>
      
      <Pager :info="$page.allDrawings.pageInfo"/>

    </CenteredContainer>
   
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'
import { FilterIcon } from 'vue-feather-icons'
import slugify from "slugify"

export default {
  components: {
    Pager,
      FilterIcon
  },
  metaInfo: {
    title: 'Shop'
  },
  methods : {
    slugify(string){
      return slugify(string,{
        replacement: '-',  
        remove: undefined, 
        lower: true,      
        strict: true    
      })
    }
  },
  computed: {
    variants (){ 
      const variants = this.$page.allDrawings.edges.map(x => x.node.product.variants.map(v => v.selectedOptions.map(s => s))).flat(2)
      const variantTypes = [...new Set(variants.map(v => v.name))]

      const variantCombinations = variantTypes.map(vt => {
        const _variants = variants.filter(v=> v.name === vt)
          return {
            name : vt,
            possibleValues : [...new Set(_variants.map(v => v.value))]
          }
      })

      return variantCombinations
    },
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
          images{
            transformedSrc
          }
          variants{
            id
            selectedOptions{
              name
              value
            }
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

<style lang="scss" scoped>

.featured{
  background-color: rgb(243, 243, 243);
  height: 50vh;
  margin: 0 0 100px;
}


.grid1{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 50px;
  margin: 0 0 200px;
}

.drawing{
  img{
    border-radius: 3px;
  }
  transition: all .3s ease;
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
