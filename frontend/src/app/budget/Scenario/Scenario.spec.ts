import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import { i18n } from '@/app/shared/plugins/i18n/i18n';
import Scenario from './Scenario.vue';
import { IBudgetState } from '../state';
import { BudgetModule } from '../module';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Scenario.vue', () => {
  let store: Store<IBudgetState>;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        budget: BudgetModule,
      },
    } as any);
  });

  test('renders component', () => {
    const wrapper = mount<any>(Scenario, {
      store,
      localVue,
      i18n,
      stubs: ['router-link'],
    });

    Scenario.prefetch({});

    expect(wrapper.find('h1').text()).toBe('Scenario');
  });
});
