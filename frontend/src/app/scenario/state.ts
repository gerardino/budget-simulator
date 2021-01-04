import { budget } from 'budget-data-model/bin/factory/budget';
import { Budget } from 'budget-data-model/bin/model/budget';

export interface IScenarioState {
  budget?: Budget;
}

export const ScenarioDefaultState = (): IScenarioState => {
  return {
    budget: budget(),
  };
};
