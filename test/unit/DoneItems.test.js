import {shallow, createLocalVue} from '@vue/test-utils';
import {__createMocks as createStoreMocks} from "./mockStore";
import DoneItems from '../../src/components/DoneItems.vue';
import Vuex from 'vuex';

jest.mock('../../src/store');
const localVue = createLocalVue();
localVue.use(Vuex);

describe('TodoList', () => {
  it('creates a list nom empty completed items', () => {
    let storeMocks = createStoreMocks();
    let wrapper = shallow(DoneItems, {store: storeMocks.store, localVue});
    expect(wrapper.find('.list-group').exists()).toBe(true);
  });
});
