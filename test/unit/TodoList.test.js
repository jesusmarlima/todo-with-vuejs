import {shallow, createLocalVue} from '@vue/test-utils';
import {__createMocks as createStoreMocks} from "./mockStore";
import TodoList from '../../src/components/TodoList.vue';
import Vuex from 'vuex';

jest.mock('../../src/store');

const localVue = createLocalVue();

localVue.use(Vuex);

describe('TodoList', () => {
  it('creates a list of empty items', () => {
    let storeMocks = createStoreMocks();
    let wrapper = shallow(TodoList, {store: storeMocks.store, localVue});
    expect(wrapper.find('.list-group').exists()).toBe(true);
  });
});
