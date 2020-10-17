<template>
  <Layout>
    <CenteredContainer>

      <div class="top">

        <div class="galery">
          <LazyImage class="v-grid-item__img" :shouldLoad="true" ratio="100%" :src="drawing.product.images[0].src" :alt="drawing.title"/>

        </div>

        <Shopper v-if="product" :product="product"/>

      </div>

    </CenteredContainer>

    <CenteredContainer>
      <TextContainer :html="drawing.content"/>
    </CenteredContainer>
   
  </Layout>
</template>

<script>
import Shopper from "@/components/cart/Shopper"
export default {
  components : {
    Shopper
  },
  data : () => ({
    gallery : {
      activeId : 0,
      images : []
    }
  }),
  computed : {
    drawing(){
      return this.$page.drawings
    },
    product(){
      return this.$page.drawings.product
    }
  },
  mounted(){
    console.log(this.$page)
  }
}
</script>

<page-query>
query Drawing ($id: ID!) {
  drawings(id : $id){
    name
    id
    content
    cover
    slug
    isForSale
    
    product{
      options {
        id
        name
        values
      }
      id
      title
      handle
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
      images(limit: 4) {
        id
        altText
        src: transformedSrc(maxWidth: 1000, maxHeight: 1000, crop: CENTER)
        thumbnail: transformedSrc(maxWidth: 150, maxHeight: 150, crop: CENTER)
      }
      variants {
        id
        title
        price {
          amount(format: true)
        }
        selectedOptions {
          name
          value
        }
        image {
          id
          altText
          thumbnail: transformedSrc(maxWidth: 150, maxHeight: 150, crop: CENTER)
        }
      }
    }
    
  }
}
</page-query>

<style lang="scss" scoped>
.top{
  display: grid;
  @media screen and (max-width: 900px) {
      grid-template-columns: 1fr ;
      grid-gap: 20px;
  }
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 60px;
}




</style>
