<template>
  <Layout class="pad-top">
    <v-centered-container>

      <div class="top">

        <div class="galery">
          <figure>
            
          </figure>
        </div>

        <div class="shopper">
          <h1>A nice title</h1>
          <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut eiatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


            <div class="options">

              <div class="option">
                <div class="name">
                  Drawing type
                </div>
                <ul>
                  <li class="selected">
                    Print
                  </li>
                  <li>
                    Original
                  </li>
                </ul>
              </div>

              <div class="option">
                <div class="name">
                  Format
                </div>
                <ul>
                  <li>
                    A4
                  </li>
                  <li  class="selected">
                    A3
                  </li>
                  <li>
                    A2
                  </li>
                </ul>
              </div>


            </div>






            <button>Add to cart</button>
        </div>

      </div>

    </v-centered-container>

    <v-centered-container>

      <div class="article text">

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

      </div>

    </v-centered-container>
   
  </Layout>
</template>

<script>
export default {
 
}
</script>

<page-query>
query Drawing ($id: ID!) {
  drawings(id : $id){
    name
    id
    content
    cover
    slug
    isForSale
    
    product{
      options {
        id
        name
        values
      }
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
      images(limit: 4) {
        id
        altText
        src: transformedSrc(maxWidth: 600, maxHeight: 400, crop: CENTER)
        thumbnail: transformedSrc(maxWidth: 150, maxHeight: 150, crop: CENTER)
      }
      variants {
        id
        title
        price {
          amount(format: true)
        }
        selectedOptions {
          name
          value
        }
        image {
          id
          altText
          thumbnail: transformedSrc(maxWidth: 150, maxHeight: 150, crop: CENTER)
        }
      }
    }
    
  }
}
</page-query>

<style lang="scss" scoped>
.top{
  display: grid;
  @media screen and (max-width: 900px) {
      grid-template-columns: 1fr ;
      grid-gap: 20px;
  }
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  .galery{
    position: relative;
    position: relative;
    padding-bottom: 100%;
    figure{
      position: absolute;
      top:0;
      right:0;
      left:0;
      bottom: 0;
      background-size: 130%; 
      background-position: center;
      background-image: url("https://cdn.shopify.com/s/files/1/0359/0160/3976/products/mock_drawing_horizontal_33d7e671-1d58-4393-9b17-d634793faa43.jpg?v=1601826178");
      border-radius: 3px;
    }
  }
}

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

.shopper{
  h1{
    font-size: 40px;
    margin: 10px 0 20px 0;
  }
  .desc{
    font-size: 18px;
    margin: 0 0 20px 0;
    opacity: .7;
    line-height: 1.7;
  }
  button{
    cursor: pointer;
    background : black;
    border: 1px solid black;
    border-radius: 3px;
    color: white;
    padding: 12px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    outline: none;
    transition: 0.3s ease;
    &:hover{
      opacity: 0.8;
    }
  }
}

.options{
  .option{
    margin: 10px 0 20px 0;
  }
  .name{
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 5px 0;
  }
  ul{
    display: flex;

    li{
      &.selected{
        border: 2px solid black;
        &::before{
          border: 2px solid white;
          background: black;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.8);
        }
      }
      cursor: pointer;
      display: flex;
      align-items: center;
      &:hover{
        background: var(--light-grey);
      }
      &::before{
        content:'';
        display: block;
        border: 1px solid var(--light-grey);
        border-radius: 50%;
        height:15px;
        width:15px;
        margin: 0 10px 0 0;
      }
      border: 1px solid var(--light-grey);
      border-radius: 3px;
      list-style: none;
      padding: 12px 30px 12px 15px;
      margin: 10px 10px 10px 0;
    }
  }
}
</style>
