import { Bank } from 'budget-data-model/bin/model/bank';
import { Currency } from 'budget-data-model/bin/model/currency';
import { IScenarioState } from './state';

export interface IScenarioGetters {
  currency(state: IScenarioState, code: string): Currency;
}

export const ScenarioGetters: IScenarioGetters = {
  currency(state, code) {
    return state.budget.currencies[code];
  },
};
