<template>
  <div class="layout">
    <Notification/>
    <Header/>
    <div class="page-content">
       <slot/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  data : () => ({
    isOpen : false,
    isFixed : false
  }),
  components: { 
    Header,
    Footer
  },
}
</script>

<style lang="scss">

.layout{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  .page-content{
    flex-grow: 1;
  }
  &.pad-top{
    padding: calc(var(--header-height) + 20px) 0 0 0;
    @media screen and (min-width: 1130px) {
      padding: calc(var(--header-height) * 2) 0 0 0;
    }
  }
}


</style>