module.exports = {
  siteName: 'Simon Renault - Drawing',
  templates: {
    Drawings: [
      {
        path: '/shop/product/:id',
        component: './src/templates/Drawing.vue'
      }
    ],
    ShopifyCollection: [
      {
        path: '/collection/:handle',
        component: './src/templates/Collection.vue'
      }
    ]
  },
  plugins: [
    {
      use: 'gridsome-source-shopify',
      types: [ 'Product' ],
      options: {
        storeName: process.env.GRIDSOME_SHOPIFY_STOREFRONT,
        storefrontToken: process.env.GRIDSOME_SHOPIFY_STOREFRONT_TOKEN
      }
    }
  ]
}
