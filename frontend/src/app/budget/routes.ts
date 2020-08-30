import { RouteConfig } from 'vue-router/types/router';

export const BudgetRoutes: RouteConfig[] = [
  {
    path: '/budget',
    name: 'budget',
    component: () => import(/* webpackChunkName: "budget" */ './Budget/Budget.vue').then((m: any) => m.default),
  },
  {
    path: '/budget/scenario',
    name: 'scenario',
    component: () => import(/* webpackChunkName: "scenario" */ './Scenario/Scenario.vue').then((m: any) => m.default),
  },
];
