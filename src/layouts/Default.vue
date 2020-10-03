<template>
  <div class="layout">
    <notifications/>
      <Header :class="{sticked:isOpen }">
        <g-link class="link" to="/"><span>Home</span></g-link>
        <!-- <g-link class="link" to="/drawing"><span>Drawing</span></g-link> -->
        <g-link class="link" to="/blog"><span>Blog</span></g-link>
        <g-link class="link" to="/shop"><span>Shop</span></g-link>
        <g-link class="link" to="/about"><span>About</span></g-link>
        <hr class="separator"/>
        <CartLink/>
      </Header>
    <slot/>
  </div>
</template>

<script>
import Header from '@/components/v-header'
import CartLink from '@/components/v-cart-icon-link.vue'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  data(){
    return{
      isOpen : false,
      isFixed : false
    }
  },
  components: { 
    Header ,
    CartLink
  },
  mounted(){

    const trigger =  ScrollTrigger.create({
      onUpdate: self => {

        if(window.scrollY > 100){

          if(!this.isFixed) this.isFixed = true

          if(self.getVelocity() >= 1 && !this.isOpen){
            console.log("hide")
            this.isOpen = true
          }

          if(self.getVelocity() <= -1 && this.isOpen){
            console.log("show")
            this.isOpen = false
          }

        }

      }
    });

  }
}
</script>

<style lang="scss">

.layout{
  padding: calc(var(--header-height) + 20px) 0 0 0;
  @media screen and (min-width: 1130px) {
    padding: calc(var(--header-height) * 2) 0 0 0;
  }
}



</style>