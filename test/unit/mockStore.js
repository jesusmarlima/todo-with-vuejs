import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const getters = {
  completed: jest.fn().mockReturnValue([
    {text: "wash my hands every day", complete: true},
    {text: "feed the cat", complete: true},
  ]),
  uncompleted: jest.fn().mockReturnValue([
    {text: "learn how to work with vue", complete: false},
    {text: "drink less coffe", complete: false},
  ])
};

export const state = {
  todo_list: [
    {text: "default task", complete: true},
    {text: "one more task", complete: false}
  ]
};

export const mutations = {
  addItem: jest.fn(),
  complete: jest.fn(),
  resetStore: jest.fn()
};

export const actions = {
  addItem: jest.fn(),
  complete: jest.fn(),
  resetStore: jest.fn()
};

export function __createMocks(custom = {getters: {}, state: {}, mutations: {}, actions: {}}) {
  const mockGetters = Object.assign({}, getters, custom.getters);
  const mockState = Object.assign({}, state, custom.state);
  const mockMutations = Object.assign({}, mutations, custom.mutations);
  const mockActions = Object.assign({}, actions, custom.actions);
  return {
    getters: mockGetters,
    State: mockState,
    mutations: mockMutations,
    actions: mockActions,
    store: new Vuex.Store({
      getters: mockGetters,
      state: mockState,
      mutations: mockMutations,
      actions: mockActions
    }),
  };
}

export const store = __createMocks().store;
