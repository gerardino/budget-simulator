import { Module } from 'vuex';
import { IState } from '@/app/state';
import { ScenarioDefaultState, IScenarioState } from './state';
import { ScenarioActions } from './actions';
import { ScenarioGetters } from './getters';
import { ScenarioMutations } from './mutations';

export const ScenarioModule: Module<IScenarioState, IState> = {
  namespaced: true,
  actions: {
    ...ScenarioActions,
  },
  getters: {
    ...ScenarioGetters,
  },
  state: {
    ...ScenarioDefaultState(),
  },
  mutations: {
    ...ScenarioMutations,
  },
};
