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
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/account'],
        config: {
          '/shop': {
            changefreq: 'daily',
            priority: 0.5
          },
          '/shop/product/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/': {
            changefreq: 'daily',
            priority: 0.7
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-manifest',
      options: {
        background_color: '#000000',
        icon_path: './src/favicon.png',
        name: 'Simon Renault - Drawing',
        short_name: 'Simon R - Drawing',
        theme_color: '#000000',
        lang: 'en'
      }
    },
    {
      use: 'gridsome-plugin-service-worker',
      options: {
        staleWhileRevalidate: {
          cacheName: 'static-resources',
          routes: [/\.(?:css)$/]
        }
      }
    }
  ]
}
