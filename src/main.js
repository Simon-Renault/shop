// Layouts
import DefaultLayout from '~/layouts/Default.vue'

// Plugins
import createStore from '@/store/store'
import VueApollo from 'vue-apollo'
import VueToast from 'vue-toast-notification';

// Dependencies
import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'
import Vuex from 'vuex'

// Styles
import '~/styles/main.scss'

//components
import ImageLoader from '~/components/atoms/LazyImage.vue'
import CenteredContainer from '~/components/layout/CenteredContainer.vue'
import TextContainer from '~/components/atoms/TextContainer.vue'
import ButtonLink from '~/components/atoms/ButtonLink.vue'
import Pagination from '~/components/atoms/Pagination.vue'
import Skeleton from '~/components/atoms/Skeleton.vue'

export default function (Vue, {router, head, appOptions, isClient }) {

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component("LazyImage", ImageLoader);
  Vue.component("CenteredContainer", CenteredContainer);
  Vue.component("TextContainer", TextContainer);
  Vue.component("ButtonLink", ButtonLink);
  Vue.component("Pagination", Pagination);
  Vue.component("Skeleton", Skeleton);

  // Import global plugins
  Vue.use(Vuex)
  Vue.use(VueApollo)
  Vue.use(VueToast);

  //configure the router
  router.options.scrollBehavior = function(to, from , savedPosition) {
    if (savedPosition) {
      return  savedPosition;
    }
    if (to.hash) {
      return {selector: to.hash};
    }
    if (true) {
      return window.scrollHeight
    }
    return {x: 0, y: 0}
  }

  // Create Apollo client
  const defaultClient = new ApolloClient({
    fetch,
    uri: `https://${process.env.GRIDSOME_SHOPIFY_STOREFRONT}.myshopify.com/api/2020-04/graphql.json`,
    headers: {
      'X-Shopify-Storefront-Access-Token': process.env.GRIDSOME_SHOPIFY_STOREFRONT_TOKEN
    }
  })

  // Add provider to vue app
  appOptions.apolloProvider = new VueApollo({defaultClient})

  // Create Vuex store
  appOptions.store = createStore(Vue, { isClient })


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



