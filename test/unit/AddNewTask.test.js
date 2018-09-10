import {shallow, mount, createLocalVue} from '@vue/test-utils';
import AddNewItem from '../../src/components/AddNewTask';
import {__createMocks as createStoreMocks} from "./mockStore";
import sinon from 'sinon';

const myStub = sinon.stub();

describe('AddNewItem', () => {
  it('renders the component sucessifully', () => {
    const wrapper = shallow(AddNewItem);
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('click in button with empty text and view message', () => {
    const mockedStore = createStoreMocks();
    const wrapper = shallow(AddNewItem);
    wrapper.find('button').trigger('click');
    expect(wrapper.find(".alert").exists()).toBe(true);
  });

  it('click add and have the the method called', () => {
    const mockedStore = createStoreMocks();
    const wrapper = mount(AddNewItem);
    wrapper.setMethods({addItem: myStub});
    wrapper.find('button').trigger('click');
    expect(myStub.called).toBe(true);
  });

});
