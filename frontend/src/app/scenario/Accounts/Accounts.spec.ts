import { createLocalVue, mount } from '@vue/test-utils';
import Accounts from './Accounts.vue';

const localVue = createLocalVue();

describe('Accounts.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(Accounts, {
      localVue,
    });

    expect(wrapper.text()).toBe('Accounts');
  });
});
