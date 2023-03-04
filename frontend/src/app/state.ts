import { AppDefaultState, IAppState } from './app/state';
import { AuthDefaultState, IAuthState } from './shared/modules/auth/state';
import { ICounterState } from './example/counter/state';
import { IBudgetState } from './budget/state';
import { IScenarioState } from './scenario/state';

export interface IState {
  [key: string]: any;

  app?: IAppState;
  auth?: IAuthState;
  // What's this for?
  // counter?: ICounterState;
  budget?: IBudgetState;
  scenario?: IScenarioState;
}

export const DefaultState: IState = {
  app: {
    ...AppDefaultState(),
    ...AuthDefaultState(),
  },
};
