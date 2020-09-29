<template>
  <div class="layout">
    <notifications/>
    <v-header/>
    <slot/>
  </div>
</template>

<script>
import VHeader from '@/components/v-header'
export default {
  components: { VHeader }
}
</script>

<style lang="scss">


</style>