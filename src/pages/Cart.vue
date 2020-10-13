<template>
  <Layout>
  
    <CenteredContainer v-show="cart.length > 0">
      <div class="cart-layout">
        <div class="cart-layout__list">
          <div class="cart-layout__list__inner">
            <div class="legend">
              
            </div>
            
            <CartItem v-for="item in cart" 
                :item="item" 
                :key="item.variantId"/>
          </div>
          
        </div>
       
        <CartCheckout/>
      </div>
     
    </CenteredContainer>

    <div v-for="(item,index) in cart" :key="index + 'i'">{{item}}</div>

    <CenteredContainer v-show="!cart.length > 0">
      <CartEmptyState/>
    </CenteredContainer>



  </Layout>
</template>

<script>
import CartItem from "@/components/cart/CartItem"
import CartCheckout from "@/components/cart/CartCheckout"
import CartEmptyState from "@/components/cart/CartEmptyState"

export default {
  components : {
    CartItem,
    CartCheckout,
    CartEmptyState
  },
  computed: {
    cart () { return this.$store.state.cart || []}
  }
}

</script>

<style lang="scss" scoped>
.center{
  margin: auto;
}
.cart-layout{
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 40px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-bottom: 70px;
  }
  &__list{
    display: flex;
    flex-direction: column;
    &__inner{
      display: grid;
      grid-gap: 20px;
    }
  }
}
</style>
