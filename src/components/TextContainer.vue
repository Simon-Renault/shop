<template>
  <div class="text" v-if="html" v-html="html">
    ss
  </div>
  <div  class="text" v-else>
    <slot/>
  </div>
</template>

<script>
export default {
  props : ["html"]
}
</script>

<style lang="scss" >
.text{
  padding: 0 0 100px 0;
  margin : 0 auto;
  max-width: 75ch;
  h2{
    font-size: 40px;
    margin: 70px 0 20px 0;
  }
  h3{
    font-size: 30px;
    margin: 35px 0 15px 0;
  }
  p{
    font-size: 18px;
    margin: 0 0 20px 0;
    line-height: 1.7;
    color: rgba(0,0,0,0.6);
  }
  img{
    margin: 20px 0;
    max-width: 100%;
    border-radius: 3px;
  }
}
</style>