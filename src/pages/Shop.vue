<template>
  <Layout class="pad-top">
    <v-centered-container>



      <div class="featured"></div>

      <div class="controls">
        <div class="categories">
          <span class="active">All</span>
          <span>Originals</span>
          <span>Prints</span>
          <span>Postcards</span>
        </div>

        <div class="format">
           <span>
             <span>
               Filter
             <filter-icon size="1x" class="custom-class"></filter-icon>
              </span> 
           </span>
           
        </div>
      </div>

       <div class="grid1">

        <g-link
          v-for="(i,index) in 66"
          :key="index + '-drawing'"
          :to="`shop/product/${i}`"
          class="drawing">
          <article>
            <v-image-loader class="v-grid-item__img" :shouldLoad="true" src="./imgs/frame_mock_vertical.png" :alt="i+''"/>
            <h3>Drawing name</h3>
            <p>66£</p>
          </article>
         
              
        </g-link>

      </div>
     
   
       
    </v-centered-container>
    <Pager :info="$page.allDrawings.pageInfo"/>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'
import { FilterIcon } from 'vue-feather-icons'

export default {
  components: {
    Pager,
      FilterIcon
  },
  metaInfo: {
    title: 'Shop'
  },
  computed: {
    drawings () { return this.$page.allDrawings.edges},
    first () { return this.$page.allDrawings.edges[0]}
  }
}
</script>

<page-query>
query($page: Int){
  allDrawings( perPage: 6 , page: $page , filter : { isForSale : {eq : true}})  @paginate {
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
          availableForSale
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

<style lang="scss" scoped>

.featured{
  background-color: rgb(243, 243, 243);
  height: 50vh;
  margin: 0 0 100px;
}

.format{
  margin-left: auto;
  @media screen and (max-width: 600px) {
    margin-left: 0;
    width: 100%;
    margin: 20px 0 0;
    & > span{
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
    }
  }
  &> span{
    box-shadow: 0 0 0 1px var(--light-grey);
  }
}
.categories{
  flex-wrap: nowrap;
}
.controls{
  display: flex;
  margin: 0 0 50px;flex-wrap: wrap;
  user-select: none;
  @media screen and (max-width: 600px) {
    align-items: center;
    justify-content: center;
  }
  span{
    cursor: pointer;
    position: relative;
    display: inline-flex;
    vertical-align: top;
    align-items: center;
    padding: 5px 10px;
    transition: all .3s ease;
    line-height: 35px;
    border-radius: 3px;
    height: 35px;
    margin: 0 5px;
    svg{
      margin: 0 0 0 7px;
    }
    &:first-child,&:last-child{
      margin: 0 0;
    }
    &:hover,&.active{
      background: var(--light-grey);
    }
  }
}
.grid1{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 50px;
}

.drawing{
  img{
    border-radius: 3px;
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


</style>
