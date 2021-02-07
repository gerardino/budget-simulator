import { ActionContext } from 'vuex';
import { IBudgetState } from './state';
import { IState } from '@/app/state';
import { HttpService } from '@/app/shared/services/HttpService/HttpService';

export interface IBudgetActions {
  /**
   * put your action names, parameters and return values here, for example:
   * myAction(context: ActionContext<IBudgetState, IState>, param: any): Promise<any>;
   */
  loadBudgets(context: ActionContext<IBudgetState, IState>): Promise<void>;
}

export const BudgetActions: IBudgetActions = {
  /**
   * here comes the implementation of your actions, for example:
   * myAction({ commit }, param) {
   *   commit('MY_MUTATION);
   * }
   */
  async loadBudgets({ commit, state }) {
    commit('budgets/set', import('./samples/jan-2021'));
  },
};
