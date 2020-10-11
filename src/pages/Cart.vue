<template>
  <Layout>
    <CenteredContainer>

      <CartItem v-for="item in $store.state.cart" 
                :item="item" 
                :key="item.variantId"/>
                
      <CartCheckout/>

    </CenteredContainer>
  </Layout>
</template>

<script>
import CartItem from "@/components/cart/CartItem"
import CartCheckout from "@/components/cart/CartCheckout"

export default {
  components : {
    CartItem,
    CartCheckout
  }
}

</script>

<style lang="scss" scoped>

</style>
