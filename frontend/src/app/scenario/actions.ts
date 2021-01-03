import { ActionContext } from 'vuex';
import { IScenarioState } from './state';
import { IState } from '@/app/state';
import { HttpService } from '@/app/shared/services/HttpService/HttpService';

export interface IScenarioActions {
  /**
   * put your action names, parameters and return values here, for example:
   * myAction(context: ActionContext<IScenarioState, IState>, param: any): Promise<any>;
   */
}

export const ScenarioActions: IScenarioActions = {
  /**
   * here comes the implementation of your actions, for example:
   * myAction({ commit }, param) {
   *   commit('MY_MUTATION);
   * }
   */
};
