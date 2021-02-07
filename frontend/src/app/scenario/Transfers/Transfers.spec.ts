import { createLocalVue, mount } from '@vue/test-utils';
import Transfers from './Transfers.vue';

const localVue = createLocalVue();

describe('Transfers.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(Transfers, {
      localVue,
    });

    expect(wrapper.text()).toBe('Transfers');
  });
});
