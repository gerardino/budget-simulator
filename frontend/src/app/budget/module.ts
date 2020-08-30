import { Module } from 'vuex';
import { IState } from '@/app/state';
import { BudgetDefaultState, IBudgetState } from './state';
import { BudgetActions } from './actions';
import { BudgetGetters } from './getters';
import { BudgetMutations } from './mutations';

export const BudgetModule: Module<IBudgetState, IState> = {
  namespaced: true,
  actions: {
    ...BudgetActions,
  },
  getters: {
    ...BudgetGetters,
  },
  state: {
    ...BudgetDefaultState(),
  },
  mutations: {
    ...BudgetMutations,
  },
};
