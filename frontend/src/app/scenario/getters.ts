import { Bank } from 'budget-data-model/bin/model/bank';
import { Currency } from 'budget-data-model/bin/model/currency';
import { IScenarioState } from './state';

export interface IScenarioGetters {
  bank(state: IScenarioState): any;
  currency(state: IScenarioState): any;
  currencyForBank(state: IScenarioState): any;
}

export const ScenarioGetters: IScenarioGetters = {
  bank: (state) => (code: string): Bank => state.budget.banks[code],
  currency: (state) => (code: string): Currency => state.budget.currencies[code],
  currencyForBank: (state) => (code: string): Currency => state.budget.currencies[state.budget.banks[code].currency],
};
