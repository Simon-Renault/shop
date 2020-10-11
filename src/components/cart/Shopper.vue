<template>
    <div class="shopper">
        <h1>A nice title</h1>
        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut eiatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <div class="variants" v-if="!variants">
            <Skeleton class="variant" width="100%" />
            <Skeleton class="variant" width="100%" />
            <Skeleton class="variant" width="100%" />
        </div>

        <div  class="variants" v-if="variants">
            <div  class="variant" 

                  :class="{'selected' :variant.id === selecteVariant.id }"
                  v-for="variant in variants" 
                  :key="variant.id"
                  @click="setSelectedVariant(variant)">
              {{variant.title}} - {{variant.price}}£ -{{variant.quantityAvailable}}

            </div>
          </div>
          
        <button @click="addToCart" 
                @keyup.enter="addToCart">
          Add to cart
        </button>

    </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  props : ["product"],
  data: () => ({
    variants : null,
    selecteVariant: '',
    quantity: 1,
    loading : true
  }),
  watch: {
    $route (to, from) {
      this.setSelectedVariant(this.variants[0])
    }
  },
  async mounted () {

    const  { data : {productByHandle : {variants:{edges}}}} = await this.$apollo.query({
      query: gql`
        query($handle: String!) {
          productByHandle(handle: $handle) {
            handle
            variants(first: 10) {
              edges {
                node {
                  id
                  price 
                  title
                  image {
                    transformedSrc(maxHeight:200,maxWidth:200)
                  }
                  availableForSale
                  quantityAvailable
                  selectedOptions{
                    name
                    value
                  }
                }
              }
            }
          }
        }
      `,
      variables : {
        handle : this.product.handle
      }
    })

    this.variants = edges.map(e=>e.node)
    this.setSelectedVariant(this.variants[0])

  },
  methods: {
    setSelectedVariant(id){
      this.selecteVariant = id
    },
    async addToCart () {
      const variant = this.selecteVariant
      const payload = {
        qty: this.quantity,
        productTitle: this.product.title,
        variantTitle: variant.title,
        variantId: variant.id,
        price: variant.price,
        image: variant.image
      }
      await this.$store.dispatch('addToCart', payload)

      this.$toast.success(`Added ${this.product.title} to the cart`,{
        position: 'top'
      });

    }
  }
}
</script>

<style lang="scss" scoped>
.variants{
  display: grid;
  grid-gap: 10px;
  margin: 0 0 30px;
  .variant{
    &.selected{
      border:2px solid black;
    }
    min-height:70px;
    cursor: pointer;
    padding: 10px;
    border-radius: 3px;
    border:2px solid var(--light-grey);
  }
}
.shopper{
  h1{
    font-size: 40px;
    margin: 10px 0 20px 0;
  }
  .desc{
    font-size: 18px;
    margin: 0 0 20px 0;
    opacity: .7;
    line-height: 1.7;
  }
  button{
    cursor: pointer;
    background : black;
    border: 1px solid black;
    border-radius: 3px;
    color: white;
    padding: 12px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    outline: none;
    transition: 0.3s ease;
    &:hover{
      opacity: 0.8;
    }
  }
}

.options{
  .option{
    margin: 10px 0 20px 0;
  }
  .name{
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 5px 0;
  }
  ul{
    display: flex;

    li{
      &.selected{
        border: 2px solid black;
        &::before{
          border: 2px solid white;
          background: black;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.8);
        }
      }
      cursor: pointer;
      display: flex;
      align-items: center;
      &:hover{
        background: var(--light-grey);
      }
      &::before{
        content:'';
        display: block;
        border: 1px solid var(--light-grey);
        border-radius: 50%;
        height:15px;
        width:15px;
        margin: 0 10px 0 0;
      }
      border: 1px solid var(--light-grey);
      border-radius: 3px;
      list-style: none;
      padding: 12px 30px 12px 15px;
      margin: 10px 10px 10px 0;
    }
  }
}
</style>