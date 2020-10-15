import { createLocalVue, mount } from '@vue/test-utils';
import Scenario from './Scenario.vue';

const localVue = createLocalVue();

describe('Scenario.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(Scenario, {
      localVue,
    });

    expect(wrapper.text()).toBe('Scenario');
  });
});
