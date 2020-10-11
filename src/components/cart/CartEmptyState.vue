<template>
    <div class="centered">
        <h2>Your cart is empty</h2>
        <p>To add artworks go to the shop</p>
        
        <g-link class="button" to="/shop">
          <span>Shop</span>
          <shopping-cart-icon size="1x" class="custom-class"></shopping-cart-icon>
        </g-link>

    </div>
</template>

<script>
  import { ShoppingCartIcon } from 'vue-feather-icons'
export default {
    components: {
      ShoppingCartIcon,
    }
  }
</script>

<style lang="scss" scoped>
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
  span{
    margin-right: 7px;
  }
}
.centered{
  position: relative;
  margin: 0 auto 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 70%;
  h2{
    font-size: 50px;
  }
  p{
    display: flex;
    margin:auto;
    max-width: 80%;
    margin: 20px 0 0;
    font-size: 16px;
    line-height: 1.6;
    opacity: .6;
  }
  @media screen and (max-width: 600px) {
    margin: 30px auto 70px;
    max-width: 100%;
    p{
      max-width: 95%;
    }
    h2{
      font-size: 40px;
    }
  }
}
</style>