<template>
  <Layout class="pad-top about">
   <CenteredContainer>

    <LazyImage class="cover" :shouldLoad="true" src="./imgs/me.jpeg" alt="a photo of simon renault"/>

    <TextContainer :html="description"/>

   </CenteredContainer>
  </Layout>
</template>

<script>
import AboutConfig from '../../config/about_page.json'
export default {
  data : () => ({
    description : AboutConfig.description
  })
}
</script>

<style lang="scss" scoped>
.about{
  .cover{
    height: 60vh;
  }
}
</style>


