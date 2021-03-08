import { loginApi } from '@/api/login'
const state = {
  userName: '',
}
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({
      id,
      quantity
    }) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },
}

const actions = {
  login({
    commit,
    state
  }, products) {
    debugger
    return new Promise((resolve, reject) => {
      loginApi(products).then(response => {
        const data = response;
        debugger
        resolve()
      }).catch(error => {
        console.log(error);
        reject(error)
      })
    })
  },
}

// mutations
const mutations = {
  addToCart(state) {
    debugger
    state.count++
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
