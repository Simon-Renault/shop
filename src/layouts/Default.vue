<template>
  <div class="layout">
    <notifications/>
    <Header/>
    <slot/>
  </div>
</template>

<script>
import Header from '@/components/v-header'


export default {
  data(){
    return{
      isOpen : false,
      isFixed : false
    }
  },
  components: { 
    Header ,
  },
}
</script>

<style lang="scss">

.layout{
  &.pad-top{
    padding: calc(var(--header-height) + 20px) 0 0 0;
    @media screen and (min-width: 1130px) {
      padding: calc(var(--header-height) * 2) 0 0 0;
    }
  }
}

</style>