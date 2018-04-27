import {shallow} from '@vue/test-utils'
import ResetStore from "../../src/components/ResetStore.vue";

describe('ResetStore', () => {
  it('creates a Restore button visible', () => {
    const wrapper = shallow(ResetStore, {
      propsData: {
        visible: true
      }
    });
    expect(wrapper.find('.btn').exists()).toBe(true);
  });

  it('creates a Restore button hidden', () => {
    const wrapper = shallow(ResetStore, {
      propsData: {
        visible: false
      }
    });
    expect(wrapper.find('.btn').exists()).toBe(false);
  });

});
