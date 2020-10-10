<template>
    <header class="header" :class="{sticked:isOpen}" >

      <div class="header__inner">

        <g-link class="hero" to="/">
          <div class="logo"></div>
          <h1 class="title">Simon Renault</h1>
        </g-link>

        <div class="mobile-nav">
            <CartLink @click="hideNav" v-if="cart.length >= 1"/>
            <Burger @click="toggleNav" :isOpen="isNavVisible"/>
        </div>
       
        <div class="nav" @click="hideNav" :class="{show:isNavVisible}">
          <nav>

            <g-link @click="hideNav" class="link" to="/"><span>Gallery</span></g-link>
            <g-link @click="hideNav" class="link" to="/shop"><span>Shop</span></g-link>
            <g-link @click="hideNav" class="link" to="/about"><span>About</span></g-link>
            <hr class="separator"/>
            <CartLink @click="hideNav" />

          </nav>
        </div>

      </div>

    </header>
</template>

<script>
import CartLink from '@/components/CartLink.vue'
import Burger from '@/components/Burger.vue'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  props : ["type"],
  components : {
    Burger,
    CartLink
  },
  data : () => ({
    isNavVisible : false,
    isOpen : false
  }),
  computed:{
      cart () { return this.$store.state.cart },
  },
  methods : {
    hideNav(){
      this.isNavVisible = false
      document.getElementsByTagName('body')[0].style.overflow = 'visible';
    },
    toggleNav(){
      this.isNavVisible = !this.isNavVisible
      if(this.isNavVisible) document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      if(!this.isNavVisible) document.getElementsByTagName('body')[0].style.overflow = 'visible';
    }
  },
  mounted(){
    gsap.registerPlugin(ScrollTrigger)
    const trigger =  ScrollTrigger.create({
      id : "x1",
      scrub: true,
      onUpdate: self => {

        if(window.scrollY > 100){
          if(self.getVelocity() >= 1 && !this.isOpen)this.isOpen = true
          if(self.getVelocity() <= -1 && this.isOpen) this.isOpen = false
        }

      }
    });
  }
}
</script>


<style lang="scss" scoped>
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
.header{
    height: var(--header-height);
    position: fixed;
    top:0;
    left:0;
    right:0;
    z-index: 2;
    background: white;
    transform: translate(0,0%);
    transition: all .5s ease;
    border-bottom: 1px solid var(--light-grey);
    display: flex;
    justify-content: center;
    z-index: 999;
    &.sticked{
      transform: translate(0,-100%);
    }
    &__inner{
      margin: auto;
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 1430px;
      padding: 0 20px 0;
      @media screen and (min-width: 900px) {
        padding: 20px 70px 20px;
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



.mobile-nav{
  display:flex;
  @media screen and (min-width: 800px) {
     display: none;
  }
}
.nav {
    height: 35px;
    display: none;
    @media screen and (max-width: 800px) {

      @keyframes opacity {
        from {
          opacity: 0;
        }

        to {
          opacity: 1;
        }
      }

      @keyframes slideDown {
        from {
          transform: translate(0,-30%);
        }

        to {
          transform: translate(0,0%);
        }
      }


      &.show{
        opacity: 0;
        display: flex;
        animation-delay: 0.1s;
        animation-duration: 0.2s;
        animation-name: opacity;
        animation-fill-mode: forwards;
        nav{
          transform: translate(0,-30%);
          animation-duration: 0.2s;
          animation-name: slideDown;
          animation-fill-mode: forwards;
        }
      }
      flex-direction: column;
      position: fixed;
      top: var(--header-height);
      left:0;
      bottom: 0;
      right: 0;
      height: 100vh;
      z-index: -1;
      background: rgba(0,0,0,0.5);
      nav{
        z-index: -1;
        background: white;
        padding: 20px;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        .separator{
          display: flex;
          height:1px;
          width: 95%;
          margin: auto 20px;
          flex-shrink: 0;
        }
        .link{
          width:100%;
          margin: 5px 0;
          span{
            width:100%;
            height: 60px;
            text-align:center;
          }
        }
      }
    }
    @media screen and (min-width: 800px) {
      display: flex;
    }
    nav{
      display: flex;
      justify-content: center;
      align-items: center;
    }
}
</style>
