import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

export default function createStore(Vue, { isClient }){
    Vue.use(Vuex)

    const store = new Vuex.Store({
        state: {
        cart: []
        },
        mutations: {
        addToCart: (state, newItem) => {
            const itemExists = state.cart.find(item => item.variantId === newItem.variantId)
    
            if (itemExists) itemExists.qty += newItem.qty
            else state.cart.push(newItem)
        },
        removeFromCart: (state, itemId) => {
            const updatedCart = state.cart.filter(item => item.variantId !== itemId)
            state.cart = updatedCart
        }
        }
    })

    if (isClient) {
        new VuexPersistence({
          storage: window.localStorage,
        }).plugin(store)
    }
    
    return store
}