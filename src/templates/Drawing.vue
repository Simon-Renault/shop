<template>
  <Layout class="pad-top">
    <v-centered-container>

      <div class="top">
        <div class="gallery">
          <figure class="img">
               <v-image-loader class="v-grid-item__img" :shouldLoad="true" :src="drawing.cover" :alt="drawing.name"/>
          </figure>
          <div class="list">
             <div
              v-for="(image) in drawing.product.images"
              :key="image.id"
              class="column is-3">
              <figure class="image is-square">
                <img
                  :src="image.thumbnail"
                  :alt="image.altText || drawing.name">
              </figure>
              </div>
          </div>
        </div>
        <div class="side">
          

          <!--  -->

          <div class="column is-two-fifths">
            <h3 git>
              {{ drawing.name }}
            </h3>
            <h5
              v-if="currentVariant"
              class="subtitle">
              {{ currentVariant.price.amount }}
            </h5>
          
            <div
              v-for="option in drawingOptions"
              :key="option.id"
              class="field">
              <div class="control">
                <label
                  :for="option.name"
                  class="label">
                  {{ option.name }}
                  <div class="select is-fullwidth">
                    <select
                      :id="option.name"
                      v-model="selectedOptions[option.name]">
                      <option
                        v-for="value in option.values"
                        :key="value"
                        :value="value">
                        {{ value }}
                      </option>
                    </select>
                  </div>
                </label>
              </div>
            </div>
            <br>
            <div class="field is-grouped is-grouped-right">
              <div class="field has-addons is-fullwidth">
                <div class="control">
                  <label
                    class="label"
                    for="quantity">
                    Quantity
                  </label>
                  <input
                    id="quantity"
                    v-model.number="quantity"
                    class="input quantity"
                    type="number"
                    placeholder="Find a repository">
                </div>
                <div class="add-to-cart">
                  <button
                    class="button is-primary"
                    @click="addToCart"
                    @keyup.enter="addToCart">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>



          <!--  -->

        
      </div>


      <div v-html="drawing.content">

      </div>


     
    </v-centered-container>
   
  </Layout>
</template>

<script>
export default {
  data: () => ({
    selectedOptions: {},
    quantity: 1
  }),
  computed: {
    drawing () { return this.$page.drawings },
    drawingOptions () { return this.drawing.product.options.filter(({ name }) => name !== 'Title') },
    currentVariant () {
      const matchedVariant = this.drawing.product.variants.find(variant =>
        variant.selectedOptions.every(({ name, value }) => value === this.selectedOptions[ name ])
      )
      return matchedVariant
    }
  },
  watch: {
    $route (to, from) {
      const [firstVariant] = this.drawing.product.variants
      this.selectedOptions = firstVariant.selectedOptions.reduce((options, { name, value }) => ({ [ name ]: value, ...options }), {})
    }
  },
  mounted () {
    const [firstVariant] = this.drawing.product.variants
    this.selectedOptions = firstVariant.selectedOptions.reduce((options, { name, value }) => ({ [ name ]: value, ...options }), {})
  },
  methods: {
    async addToCart () {
      const variant = this.currentVariant
      const payload = {
        qty: this.quantity,
        productTitle: this.drawing.product.title,
        variantTitle: variant.title,
        variantId: variant.id,
        price: variant.price,
        image: variant.image
      }
      await this.$store.commit('addToCart', payload)
      this.$notify({
        title: `Added ${payload.productTitle} to Cart`,
        type: 'primary'
      })
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
    slug
    isForSale
    
    product{
      options {
        id
        name
        values
      }
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
  grid-template-columns: 4fr 3fr;
  grid-gap: 30px;
}
.list{
  display: flex;
}
</style>
