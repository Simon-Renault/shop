// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Layouts
import DefaultLayout from '~/layouts/Default.vue'

// Plugins
import Store from '@/store/store'
import VueApollo from 'vue-apollo'
import Notifications from 'vue-notification/dist/ssr.js'

// Dependencies
import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'
import Vuex from 'vuex'


// Styles
import '~/styles/main.scss'
import 'typeface-karla'
import 'typeface-prata'

//components
import ImageLoader from '~/components/LazyImage.vue'
import CenteredContainer from '~/components/CenteredContainer.vue'
import TextContainer from '~/components/TextContainer.vue'

export default function (Vue, { router,head,appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component("LazyImage", ImageLoader);
  Vue.component("CenteredContainer", CenteredContainer);
  Vue.component("TextContainer", TextContainer);
  // Import global plugins
  Vue.use(Vuex)
  Vue.use(VueApollo)
  Vue.use(Notifications)

  //configure the router
  router.options.scrollBehavior = function(to, from , savedPosition) {
    if (savedPosition) {
      return  savedPosition;
    }
    if (to.hash) {
      return {selector: to.hash};
    }
    if ((from.name == 'project' && to.name == 'project') || ((from.name == 'work' && to.name == 'project'))) {
      return window.scrollHeight
    }
    return {x: 0, y: 0}
  }

  // Create Apollo client
  const apolloClient = new ApolloClient({
    fetch,
    uri: `https://${process.env.GRIDSOME_SHOPIFY_STOREFRONT}.myshopify.com/api/2019-07/graphql.json`,
    headers: {
      'X-Shopify-Storefront-Access-Token': process.env.GRIDSOME_SHOPIFY_STOREFRONT_TOKEN
    }
  })

  // Add client to vue-apollo provider
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient
  })

  // Add provider to vue app
  appOptions.apolloProvider = apolloProvider

  // Create Vuex store
  appOptions.store = Store


  // Add the different metas
  head.meta.push({
    name: 'keywords',
    content: 'Drawing fine-art art illustration city detailes detailed precise'
  })

  head.meta.push({
    name: 'description',
    content: 'The portfolio and shop of the french illustrator Simon Renault'
  })
}



