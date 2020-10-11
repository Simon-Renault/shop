<template>
  <li class="cart-item">

    <figure class="thumbnail">
        <LazyImage  class="v-grid-item__img" 
                    :shouldLoad="true" 
                    :src="item.image.transformedSrc" 
                    alt="alt to fill"/>
    </figure>

    <div>
        {{ item.productTitle }}
    </div>
    <div>
        {{ item.variantTitle !== 'Default Title' ? item.variantTitle : '' }}
    </div>
    <div>
        {{ item.price }}
    </div>


    <div class="cart-item__edditor">
        <button
            class="button is-white"
            @click="removeItem(item.variantId)"
            @keyup="removeItem(item.variantId)">
            <small>Remove</small>
        </button>
        <button
            class="button is-light"
            @click="decreaseItemQty(item)"
            @keyup="decreaseItemQty(item)">
            -
        </button>
        <label for="qty">
            <input :value="item.qty"
                class="input has-text-centered"
                type="number"
                placeholder="Enter a quantity"
                min="1"
                @change="e => updateItemQty(item, e.target.valueAsNumber)">
        </label>
        <button
            class="button is-light"
            @click="increaseItemQty(item)"
            @keyup="increaseItemQty(item)">
            +
        </button>
    </div>

    <div>
        {{ item.total }}
    </div>

  </li>
</template>

<script>
export default {
    props:["item"],
    methods: {
        async removeItem (itemId) {
            await this.$store.dispatch('removeFromCart', itemId)
            this.$toast.success(`Item removed from the cart`,{
                position: 'top'
            });
        },
        async decreaseItemQty (item) {
            if (item.qty === 1) return
            const qty = item.qty - 1
            await this.$store.dispatch('updateItemQty', { itemId: item.variantId, qty })
        },
        async increaseItemQty (item) {
            const qty = item.qty + 1
            await this.$store.dispatch('updateItemQty', { itemId: item.variantId, qty })
        },
        async updateItemQty (item, qty) {
            if (qty <= 0) return
            await this.$store.dispatch('updateItemQty', { itemId: item.variantId, qty })
        },
        
    }
}
</script>

<style lang="scss" scoped>
.cart-item{

}
</style>