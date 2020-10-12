import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import currency from 'currency.js'
import Cookies from 'js-cookie'

export default function createStore(Vue, { isClient }){
    Vue.use(Vuex)

    const store = new Vuex.Store({
        state: {
            cart: [],
            token: {}
        },
        mutations: {
            updateCart: (state, cart) => { state.cart = cart },
            setToken: (state, token) => { state.token = token }
        },
        actions : {
            addToCart: ({ state, commit }, newItem) => {
                const cart = state.cart
                const itemExists = cart.find(item => item.variantId === newItem.variantId)
        
                if (itemExists) itemExists.qty += newItem.qty
                else cart.push(newItem)
        
                const updatedCart = cart.map(item => {
                  const total = currency(item.price, { formatWithSymbol: true, symbol: '£' }).multiply(item.qty).format()
                  return { ...item, total }
                })
        
                commit('updateCart', updatedCart)
            },
            updateItemQty: ({ state, commit }, { itemId, qty }) => {
                const cart = state.cart
                const item = cart.find(item => item.variantId === itemId)
        
                item.qty = qty
                item.total = currency(item.price, { formatWithSymbol: true, symbol: '£' }).multiply(qty).format()
        
                commit('updateCart', cart)
            },
            removeFromCart: ({ state, commit }, itemId) => {
                const cart = state.cart
                const updatedCart = cart.filter(item => item.variantId !== itemId)
        
                commit('updateCart', updatedCart)
            },
            login: ({ commit }, token) => {
                commit('setToken', token)
            },
            logout: ({ commit }) => {
                commit('setToken', {})
                commit('updateCart', [])
            }
        },
        getters: {
            isAuthenticated: ({ token }) => !!token.accessToken,
            accessToken: ({ token }) => token.accessToken,
            cartTotal: ({ cart }) => cart.reduce((total, item) => total.add(currency(item.price).multiply(item.qty)), currency(0, { formatWithSymbol: true, symbol: '£' }))
        }
    })

    if (isClient) {

       

    
        new VuexPersistence({
          storage: window.localStorage,
          //modules: ['cart'],
          //filter: mutation => mutation.type === 'updateCart'
        }).plugin(store)
    }
    
    return store
}