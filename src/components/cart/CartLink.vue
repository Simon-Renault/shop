<template>
   <g-link class="link cart-link match" to="/cart">
        <span>
            <shopping-cart-icon size="1x" class="custom-class"></shopping-cart-icon>
            <div class="indicator" >{{ cart.length }}</div>
        </span>
    </g-link>
</template>

<script>
import { ShoppingCartIcon } from 'vue-feather-icons'

export default {
  components : {
    ShoppingCartIcon,
  },
  data: () => ({
    isMenuActive: false,
    searchTerm: ''
  }),
  computed: {
    cart () { return this.$store.state.cart },
  }
}
</script>


<style lang="scss" >
.cart-link{
  &:hover,&.active{
    .indicator{
      color: black;
      background: white;
    }
  }
  svg{
    z-index: 7;
  }
  .indicator{
    --size : 20px;
    --geist-green : #a4f7e5;
    --geist-blue : #c9f2f6;
    top: 10%;
    right: 10%;
    display: block;
    padding: 0 6px 0 5px;
    min-width: var(--size);
    background:var(--geist-blue);
    border-radius: var(--size);
    font-size: 12px;
    text-align: center;
    line-height: calc(var(--size) + 2px );
    height: var(--size);
    margin: 0 0 0 10px;
    font-weight: 600;
    transition: background .2s linear;
  }
}


</style>