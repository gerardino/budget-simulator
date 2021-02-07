import { Budget } from 'budget-data-model/bin/model/budget';
import { IBudgetState } from './state';

export interface IBudgetMutations {
  set(state: IBudgetState, budgets: Budget[]): void;
}

export const BudgetMutations: IBudgetMutations = {
  set(state, budgets) {
    return (state.budgets = budgets);
  },
};
