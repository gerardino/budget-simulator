import { createLocalVue, mount } from '@vue/test-utils';
import Banks from './Banks.vue';

const localVue = createLocalVue();

describe('Banks.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(Banks, {
      localVue,
    });

    expect(wrapper.text()).toBe('Banks');
  });
});
