<template>
   <div class="article text">
       <slot/>
    </div>
</template>


<style lang="scss" scoped>
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
    opacity: .7;
    line-height: 1.7;
  }
  img{
    margin: 20px 0;
    border-radius: 3px;
  }
}
</style>