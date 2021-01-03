import { ActionContext, Commit, Dispatch } from 'vuex';
import MockAdapter from 'axios-mock-adapter';
import { ScenarioDefaultState, IScenarioState } from './state';
import { IState } from '@/app/state';
import { ScenarioActions } from './actions';
import { HttpService } from '@/app/shared/services/HttpService/HttpService';

describe('ScenarioActions', () => {
  let testContext: ActionContext<IScenarioState, IState>;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: ScenarioDefaultState(),
    } as ActionContext<IScenarioState, IState>;

    mockAxios = new MockAdapter(HttpService);
  });

  test('Please write the tests for the actions here', () => {
    // here is an example: https://github.com/vuesion/vuesion/blob/master/src/app/counter/actions.spec.ts
    expect(true).toBeFalsy();
  });
});
