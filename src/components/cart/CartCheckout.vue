<template>
  <div class="cart-checkout">
        <table class="table is-fullwidth">
        <tfoot v-if="$store.state.cart.length">
          <tr>
            <th />
            <th />
            <th />
            <th />
            <th class="has-text-right">
              <p>Cart Total: {{ cartTotal }}</p>
            </th>
          </tr>
        </tfoot>
      </table>
     
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  metaInfo: {
    title: 'Your Cart'
  },
  data: () => ({ 
    email: '',
    isLoading: false 
  }),
  computed: {
    cartTotal () { 
      return this.$store.getters.cartTotal.format() 
    }
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

<style>

</style>