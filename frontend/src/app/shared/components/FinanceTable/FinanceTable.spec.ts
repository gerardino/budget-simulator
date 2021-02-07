import { createLocalVue, mount } from '@vue/test-utils';
import FinanceTable from './FinanceTable.vue';

const localVue = createLocalVue();

describe('FinanceTable.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(FinanceTable, {
      localVue,
    });

    expect(wrapper.text()).toBe('FinanceTable');
  });
});
