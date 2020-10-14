<template>
  <div class="layout">
    <Header/>
    <div class="page-content">
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default {
  data : () => ({
    isOpen : false,
    isFixed : false
  }),
  components: { 
    Header,
    Footer
  },
  mounted(){
    this.$nextTick(() => {
      const cart = JSON.parse(localStorage.getItem("cart"))
      if(cart){
        this.$store.commit("updateCart",cart)
      }
    })
  }
}
</script>

<style lang="scss">

.layout{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  .page-content{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  padding: calc(var(--header-height) + 20px) 0 0 0;
  @media screen and (min-width: 1130px) {
    padding: calc(var(--header-height) * 2) 0 0 0;
  }
}
</style>