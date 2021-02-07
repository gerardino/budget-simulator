import { createLocalVue, mount } from '@vue/test-utils';
import AccountGroup from './AccountGroup.vue';

const localVue = createLocalVue();

describe('AccountGroup.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(AccountGroup, {
      localVue,
    });

    expect(wrapper.text()).toBe('AccountGroup');
  });
});
