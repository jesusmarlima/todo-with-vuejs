import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  // strict: true,  
  state: {
    todo_list: []
  },
  getters: {
    to_do_list: state => {
      return state.todo_list;
    },
    uncompleted: state => {
      return state.todo_list.filter((item) => !item.complete )
    },
    completed: state => {
      return state.todo_list.filter((item) => item.complete )
    }
  },
  mutations: {
    addItem: (state, new_item) => {
      state.todo_list.push(new_item);
    },
    complete: (state, item) => {
      item.complete = true;
    },
    resetStore: (state) => {
      state.todo_list = [];
    }
  },
  actions: {
    addItem ({commit} , item) {
      commit('addItem', item);
    },
    complete({commit}, item) {
      commit('complete',item);
    },
    resetStore({commit}) {
      commit('resetStore');
    }
  }
});
