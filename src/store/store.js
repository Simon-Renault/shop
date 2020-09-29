import Vue from 'vue'
import Vuex from 'vuex'

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


export default store