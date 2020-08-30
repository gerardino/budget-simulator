import { Budget } from '../shared/model/budget';
import { budget } from '../shared/factory';
export interface IBudgetState {
  budgets: Budget[];
  budget: Budget | undefined;
}

export const BudgetDefaultState = (): IBudgetState => {
  return {
    /**
     * put your default value here, for example:
     * myAttribute: null,
     */
    budgets: [budget()],
    budget: undefined,
  };
};
