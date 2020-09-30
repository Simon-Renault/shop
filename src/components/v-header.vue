<template>
    <header class="header" >

      <div class="header__inner">

        <g-link class="hero" to="/">
          <div class="logo"></div>
          <h1 class="title">Simon Renault</h1>
        </g-link>

        <div class="burger">
          <menu-icon size="1.2x" class="custom-class"></menu-icon>
        </div>

        <div class="nav">
          <nav>

            <g-link class="link" to="/"><span>Home</span></g-link>
            <g-link class="link" to="/drawing"><span>Drawing</span></g-link>
            <g-link class="link" to="/shop"><span>Shop</span></g-link>
            <g-link class="link" to="/about"><span>About</span></g-link>
            <hr class="separator"/>
            <v-cart-icon-link/>

          </nav>
        </div>

      </div>

    </header>
</template>

<script>
import vCartIconLink from '@/components/v-cart-icon-link.vue'
import { MenuIcon } from 'vue-feather-icons'

export default {
  props : ["type"],
  components : {
    vCartIconLink,
    MenuIcon
  },
  data() {
    return {
     
    }
  }
}
</script>


<style lang="scss" >

.burger{
  display: flex;
  justify-content: center;
  align-items: center;
  height:35px;
  padding: 0 10px;
  border-radius: 3px;
   &:hover{
    
      background: var(--light-grey);
    
  }
  @media screen and (min-width: 900px) {
     display: none;
  }
}



.link {
  color: var(--black);
  position: relative;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  height: 100%;
  padding: 0 10px;
  color: #212121;
  font-size: 16px;
  line-height: 24px;
  box-sizing: border-box;
  font-weight: 500;

  &:last-child{
    padding-right:0;
  }
  &:hover{
    span{
      background: var(--light-grey);
    }
  }
  &.active--exact{
    span{
      background: var(--light-grey);
    }
  }

  span {
    position: relative;
    display: inline-flex;
    vertical-align: top;
    align-items: center;
    padding: 5px 10px;
    transition: all .3s ease;
    line-height: 35px;
     border-radius: 3px;
    height:35px;
    svg{
      margin:0 0 2px 0;
    }
  }
}
  
</style>



<style lang="scss">

.fixed{
  position: fixed;
  background: white;
  width: 100vw;
  left:0;
  right:0;
}

.header{
    //position: fixed;
    top:0;
    left:0;
    right:0;
    z-index: 2;
    background: white;

    
    &__inner{
      margin: auto;
      display: flex;
      align-items: center;
      max-width: 1430px;
      padding: 20px 20px 0px;
      @media screen and (min-width: 900px) {
        padding: 40px 70px 15px;
      }
    }

    .hero{
      padding:0;
      margin-right:auto;
      .title{
        display: block;
        font-size: 18px;
        margin: 0 0 0 15px;
        color: black;
      }
    }

}



.title{
  display: none;
}

.separator{
  display: inline-block;
  border: none;
  border-radius: 2px;
  background :  var(--light-grey);
  width: 2px;
  height: 16px;
}

.hero {
  padding: 50px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo{
    cursor: pointer;
    height:50px;
    width:50px;
    background-image: url("../assets/logo.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 86%;
    border-radius: 50%;
    box-shadow :0px 0px 0px 0px var(--light-grey);
    transition: all .3s ease;
  }
  &:hover{
    .logo{
      box-shadow :0px 0px 0px 4px var(--light-grey);
    }
  }
}

.nav {
    height: 35px;
    display: none;
    @media screen and (min-width: 900px) {
      display: flex;
    }
    nav{
      display: flex;
      justify-content: center;
      align-items: center;
    }
}
</style>
