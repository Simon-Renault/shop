<template>
  <li class="cart-item">


    <LazyImage  class="thumbnail" 
                :shouldLoad="true" 
                :src="item.image.transformedSrc" 
                alt="alt to fill"/>


    <div>
        {{ item.productTitle }}
    </div>
    <div>
        {{ item.variantTitle !== 'Default Title' ? item.variantTitle : '' }}
    </div>
    <div>
        {{ item.price }}
    </div>


    <div class="hover-actions">
        <button class="button remove"
            @click="removeItem(item.variantId)"
            @keyup="removeItem(item.variantId)">
            <span>Remove</span>
        </button>
    </div>


    <div class="cart-item__edditor">
       
        <button class="button"
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
        <button class="button"
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
    position: relative;
    display: flex;
    border: 1px solid var(--accents-2);
    padding: 0 0 10px 0;
    padding:10px;
    border-radius: 3px;
    height: 180px;
    max-width: 100vw;
    overflow: hidden;
    .thumbnail{
        position: relative;
        height:100%;
        margin: 0 10px 0 0;

        img{
            height: 100%;
        }
    }
    &__edditor{
        display: flex;
    }
    .hover-actions{
        position: absolute;
        top:0;
        right:0;
        left:auto;
        bottom:0;
    }
}

</style>