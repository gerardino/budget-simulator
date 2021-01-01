import { budget } from 'budget-data-model/bin/factory';
import { Budget } from 'budget-data-model/bin/model/budget';

export interface IBudgetState {
  budgets: Budget[];
  selected: number | null;
}

export const BudgetDefaultState = (): IBudgetState => {
  return {
    budgets: [budget(), budget(), budget()],
    selected: null,
  };
};
