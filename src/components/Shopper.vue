<template>
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
</template>

<script>
export default {
    props : [],
    data : () => ({})
}
</script>

<style lang="scss" scoped>
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