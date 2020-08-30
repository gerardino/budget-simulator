import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import { i18n } from '@/app/shared/plugins/i18n/i18n';
import Budget from './Budget.vue';
import { IBudgetState } from '../state';
import { BudgetModule } from '../module';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Budget.vue', () => {
  let store: Store<IBudgetState>;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        budget: BudgetModule,
      },
    } as any);
  });

  test('renders component', () => {
    const wrapper = mount<any>(Budget, {
      store,
      localVue,
      i18n,
      stubs: ['router-link'],
    });

    Budget.prefetch({});

    expect(wrapper.find('h1').text()).toBe('Budget');
  });
});
