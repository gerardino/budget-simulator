import { Budget } from 'budget-data-model/bin/model/budget';
import { IScenarioState } from './state';

export interface IScenarioMutations {
  set(state: IScenarioState, param: Budget): void;
}

export const ScenarioMutations: IScenarioMutations = {
  set(state, param) {
    if (param) {
      state.budget = param;
    }
  },
};
