import { RouteConfig } from 'vue-router/types/router';

export const ScenarioRoutes: RouteConfig[] = [
  {
    path: '/budget/:id',
    name: 'scenario',
    component: () => import(/* webpackChunkName: "scenario" */ './Scenario/Scenario.vue').then((m: any) => m.default),
    props: true,
  },
];
