import Vue from "vue";
import Vuex from "vuex";
import items from "../../items";
Vue.use(Vuex);

function updateLocalStorage(items) {
  localStorage.setItem("items", JSON.stringify(items));
}

export default new Vuex.Store({
  state: {
    items: JSON.parse(localStorage.getItem("items")) || items,
  },
  getters: {
    items: (state) => {
      return state.items;
    },
    totalItems: (state) => {
      return state.items.length;
    }
  },
  mutations: {
    updateItem: (state, payload) => {
      const index = state.items.findIndex((item) => item.name === payload.name);
      state.items[index].value = payload.value;
      updateLocalStorage(state.items);
    }
  },
});
