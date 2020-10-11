<template>
  <Layout>
    <CenteredContainer>

      <div class="top">

        <div class="galery">
          <figure></figure>
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
        src: transformedSrc(maxWidth: 600, maxHeight: 400, crop: CENTER)
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
  .galery{
    position: relative;
   
    padding-bottom: 100%;
    figure{
      position: absolute;
      top:0;
      right:0;
      left:0;
      bottom: 0;
      background: #f3f3f3;
      background-size: 130%; 
      background-repeat: no-repeat;
      background-position: center;
      background-image: url("https://cdn.shopify.com/s/files/1/0359/0160/3976/products/mock_drawing_horizontal_33d7e671-1d58-4393-9b17-d634793faa43.jpg?v=1601826178");
      border-radius: 3px;
    }
  }
}




</style>
