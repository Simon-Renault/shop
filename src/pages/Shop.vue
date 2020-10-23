<template>
  <Layout>
    <CenteredContainer>


     
      <div class="centered">
        <h2>Shop</h2>
        <p>A curated collection of my best work, handpicked every month. If you don't know where to start, this is the place to go.</p>
      </div>

      <div class="product-grid">

        <g-link
          v-for="({node:drawing},index) in $page.allDrawings.edges"
          :key="index + '-drawing'"
          :to="`shop/product/${drawing.id}`"
          class="drawing">

          <article>
            <LazyImage class="v-grid-item__img" :shouldLoad="true"  ratio="100%" :src="drawing.product.images[0].src" alt="alt"/>
            <h3>{{drawing.name}}</h3>
            <p>{{drawing.product.priceRange.minVariantPrice.amount}}£ - {{drawing.product.priceRange.maxVariantPrice.amount}}£</p>
          </article>
         
        </g-link>

      </div>
      
      <Pagination :info="$page.allDrawings.pageInfo"/>

    </CenteredContainer>
   
  </Layout>
</template>

<script>
import slugify from "slugify"


export default {
  metaInfo: {
    title: 'Shop'
  }
}
</script>

<page-query>
query($page: Int){
  allDrawings( perPage: 20 , page: $page , filter : { isForSale : {eq : true}})  @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges{
      node{
        id
       	name
        content
        cover
        isForSale
        product{
          id
          handle
          availableForSale
          images{
            src: transformedSrc(maxWidth: 1200, maxHeight: 1200, crop: CENTER)
          }
          priceRange{
            minVariantPrice{
              amount
              currencyCode
            }
            maxVariantPrice{
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
} 
</page-query>

<style lang="scss" >



.product-grid{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  margin: 0 0 100px;
}

.drawing{
  transition: all .3s ease;
  position: relative;
  img{
    border-radius: 3px;
    transform: scale(2.3);
  }
  &:hover{
    opacity: 0.6;
  }
  h3{
    margin: 10px 5px 5px;
    color: var(--black);
    font-size: 20px;
  }
  p{
    font-size: 14px;
    margin: 5px 5px;
    color: var(--black);
    opacity: .5;
  }
}

.centered{
  position: relative;
  margin: 0 auto 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 70%;
  h2{
    font-size: 50px;
  }
  p{
    display: flex;
    margin:auto;
    max-width: 80%;
    margin: 20px 0 0;
    font-size: 16px;
    line-height: 1.6;
    opacity: .6;
  }
  @media screen and (max-width: 600px) {
    margin: 30px auto 70px;
    max-width: 100%;
    p{
      max-width: 95%;
    }
    h2{
      font-size: 40px;
    }
  }
}
.top{
  border-radius: 3px;
  background-color: var(--light-grey);
  height:40vh;
  margin: 0 0 100px 0;
 
  &__inner{
     padding:30px;
     display:flex;
     height:100%;
     justify-content: center;
     align-items: center;
  }
}


</style>
