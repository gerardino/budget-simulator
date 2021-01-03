import { ActionContext } from 'vuex';
import { IState } from '@/app/state';
import { router } from '@/app/router';
import { HttpService } from '@/app/shared/services/HttpService/HttpService';

interface SelectActionParameter {
  id: number;
}

export interface IStoreActions {
  select(context: ActionContext<IState, IState>, param: SelectActionParameter): Promise<void>;
}

export const StoreActions: IStoreActions = {
  async select({ commit, state }, { id }) {
    if (id && state.budget.budgets) {
      const budget = state.budget.budgets.find((b) => (b.id = id));
      if (budget) {
        commit('scenario/set', budget);
        router.push({ name: 'scenario', params: { id } as any });
      }
    }
  },
};
