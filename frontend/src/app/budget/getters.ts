import { Budget } from 'budget-data-model/bin/model/budget';
import { IBudgetState } from './state';

export interface IBudgetGetters {
  /**
   * put your getter names, parameters and return values here, for example:
   * myAction(context: ActionContext<IBudgetState, IState>, param: any): Promise<any>;
   */
}

export const BudgetGetters: IBudgetGetters = {
  /**
   * here comes the implementation of your getters, for example:
   * myGetter(state: IBudgetState) {
   *   return state.myAttribute;
   * }
   */
  currentBudget(state: IBudgetState) {
    return state.budgets.find((b: Budget) => b.id === state.current);
  },
};
