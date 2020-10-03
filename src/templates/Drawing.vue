<template>
  <Layout>
    <v-centered-container>
      {{drawing.name}}
    </v-centered-container>
   
  </Layout>
</template>

<script>
export default {
  computed: {
    drawing() {
      return this.$page.drawings
    }
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
</page-query>

<style lang="scss" scoped>

</style>
