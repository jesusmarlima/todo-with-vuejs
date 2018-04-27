import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
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
      let {todo_list} = state;
      let element = todo_list.find((i) => i.text === item.text);
      todo_list[todo_list.indexOf(element)].complte = true;
      state.todo_list = todo_list;
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
