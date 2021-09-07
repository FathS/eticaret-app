import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baskets: [],
  },
  getters: {
    basketList: (state) => {
      return state.baskets;
    },
  },
  mutations: {
    addBasket(state, product) {
      state.baskets.push(product);
    },
    removeBasket(state, arr) {
      state.baskets = arr;
    },
  },
  actions: {},
});
