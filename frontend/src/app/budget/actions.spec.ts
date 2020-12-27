import { ActionContext, Commit, Dispatch } from 'vuex';
import MockAdapter from 'axios-mock-adapter';
import { BudgetDefaultState, IBudgetState } from './state';
import { IState } from '@/app/state';
import { BudgetActions } from './actions';
import { HttpService } from '@/app/shared/services/HttpService/HttpService';

describe('BudgetActions', () => {
  let testContext: ActionContext<IBudgetState, IState>;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: BudgetDefaultState(),
    } as ActionContext<IBudgetState, IState>;

    mockAxios = new MockAdapter(HttpService);
  });

  test('Please write the tests for the actions here', () => {
    // here is an example: https://github.com/vuesion/vuesion/blob/master/src/app/counter/actions.spec.ts
    expect(true).toBeTruthy();
  });
});
