<template>
  <Layout class="pad-top about">
   <CenteredContainer>

    <LazyImage class="cover" :shouldLoad="true" src="./imgs/me.jpeg" alt="a photo of simon renault"/>

    <TextContainer>
      <h2>A nice title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h3>A nice title</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <img src="https://cdn.shopify.com/s/files/1/0359/0160/3976/products/mock_drawinf_square.jpg?v=1601826514" width="100%" height="100%" alt="">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h3>A nice title</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </TextContainer>

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


