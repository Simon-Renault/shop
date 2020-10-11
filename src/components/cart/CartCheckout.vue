<template>
    <div class="cart-checkout">
        <div class="cart-checkout__inner">

            <div class="section">
                <h2>Cart</h2>
            </div>
            <div class="section">
                <p>Cart Total: {{ cartTotal }}</p>
            </div>
            <div class="section last">
                <input class="email" type="text" v-model="email" placeholder="Enter your email ...">
                <button class="button" @click="checkout">
                    <span>Checkout</span>
                    <arrow-right-icon size="1.2x" class="custom-class"/>
                </button>
            </div>

            
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'
import { ArrowRightIcon } from 'vue-feather-icons'

export default {
  metaInfo: {
    title: 'Your Cart'
  },
  components : {
      ArrowRightIcon
  },
  data: () => ({ 
    email: '',
    isLoading: false 
  }),
  computed: {
    cartTotal () { 
      return this.$store.getters.cartTotal.format() 
    },
    cart () { 
         return this.$store.state.cart 
    },
  },
  methods: {
    async checkout () {

      if (!this.cart.length) return alert('No items in cart')

      const email = this.email
      const lineItems = this.cart.map(item => ({ quantity: item.qty, variantId: item.variantId }))
      const checkoutInput = { email, lineItems }

      try {
        this.isLoading = true
        const { data: { checkoutCreate } } = await this.$apollo.mutate({
          mutation: gql`mutation checkoutCreate($input: CheckoutCreateInput!) {
            checkoutCreate(input: $input) {
              checkout {
                id
                webUrl
              }
              checkoutUserErrors {
                code
                field
                message
              }
            }
          }
          `,
          variables: { input: checkoutInput }
        })
       
        if (checkoutCreate.checkoutUserErrors.length) throw new Error(checkoutCreate.checkoutUserErrors[ 0 ].message)
        window.location = checkoutCreate.checkout.webUrl

      } catch (error) {

        this.isLoading = false
        this.$toast.error(`Ooops,something went wrong - please try again.`,{
          position: 'top'
        });
        
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-checkout{
    position: sticky;
    top: 100px;
    display: flex;
    flex-direction: column;
    box-shadow: var(--shadow-medium);
     border-radius: 3px;
    &__inner{
       
        border-radius: 3px;
        border: 1px solid rgba(0,0,0,0.07);
        margin-bottom: auto;
        .section{
            border-bottom: 1px solid var(--accents-2);
            padding: 20px;
            &:last-child{
                border-bottom: none;
            }
        }
    }
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
  width:100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  span{
    margin-right: 7px;
  }
}
.email{
    width:100%;
    outline: none;
    border-radius: 3px;
    border: 1px solid var(--black);
    padding: 10px;
    height: 45px;
    font-size: 14px;
    &:focus{
        box-shadow: 0 0 0 3px rgba(0,0,0,0.1);
        border: 1px solid black;
    }
}
</style>