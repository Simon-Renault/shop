<template>
  <li class="cart-item">


    <LazyImage  class="thumbnail" 
                :shouldLoad="true" 
                :src="item.image.transformedSrc" 
                alt="alt to fill"/>


    <div class="section">
        <span class="name">{{ item.productTitle }}</span>
        <span>
            <span class="pill">{{item.variantTitle}}</span>
            <span></span>
        </span>
    </div>


    <div class="section ">
        <span>Count :</span>
        <span class="counter">
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
        </span>
    </div>


    <div class="section">
        <span>{{ item.price }}</span>
        <span>{{ item.total }}</span>
    </div>


    <div class="hover-actions" >
        <button class="remove"
            @click="removeItem(item.variantId)"
            @keyup="removeItem(item.variantId)">
            <x-icon size="1.2x" class="custom-class"></x-icon>
        </button>
    </div>



  </li>
</template>

<script>
import { XIcon } from 'vue-feather-icons'

export default {
    props:["item"],
    components : {
        XIcon
    },
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
    --pad : 10px;
    position: relative;
    display: grid;
    grid-template-columns: 150px 1fr 1fr 1fr;
    grid-gap: 25px;
    align-items: center;
    border-bottom: 1px solid var(--accents-2);
    padding: 0 0 15px 0;
    height: 150px;
    max-width: 100vw;
    overflow: hidden;
    &:last-child{
        border-bottom: none;
        margin-bottom: 100px;
    }
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
        top:var(--pad);
        right:var(--pad);
        left:auto;
        bottom:var(--pad);
        .remove{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            height:25px;
            width:25px;
            border:none;
            opacity: 0;
            transition: 0.3s ease ;
            //border: 1px solid var(--accents-2);
            background-color: white;
            &:hover{
                background-color: var(--accents-1);
            }
        }
    }
    &:hover{
        .hover-actions{
            .remove{
                opacity: 1;
            }
        }
    }
}

.section{
    display: flex;
    flex-direction: column;
    & > span:first-child{
        font-size: 20px;
        font-weight: 800;
        margin-bottom: 10px;
    }
}

.pill{
    border : 1px solid var(--accents-2);
    border-radius: 3px;
    padding: 2px 4px;
    background-color:var(--accents-1); 
}
.counter{
    display: flex;
    flex-direction: row;
    input{
        height: 25px;
        padding: 0 5px;
        outline: none;
        width: 40px;
    }
    button{
        cursor: pointer;
        margin: 0 10px;
        height: 25px;
        width: 25px;
        border: 1px solid var(--accents-2);
        &:hover{
            background-color: var(--accents-1);
        }
        border-radius: 3px;
    }
}

</style>