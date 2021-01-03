<template>
  <div :class="$style.budget">
    <vue-grid>
      <vue-breadcrumb :items="breadCrumbItems"></vue-breadcrumb>
      <vue-grid-row>
        <vue-grid-item fill>
          <vue-headline level="1">Budgets</vue-headline>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row>
        <vue-grid-item v-for="budget in budgets" :key="budget.id">
          <vue-card>
            <vue-card-header :title="budget.name" />
            <vue-card-body>
              <p>From {{ budget.from }}</p>
              <p>To {{ budget.to }}</p>
            </vue-card-body>
            <vue-card-footer>
              <vue-button color="primary" @click="goToScenario(budget.id)">Open</vue-button>
            </vue-card-footer>
          </vue-card>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import { registerModule } from '@/app/store';
import { IPreLoad } from '@/server/isomorphic';
import VueGrid from '@/app/shared/components/VueGrid/VueGrid.vue';
import VueBreadcrumb from '@components/VueBreadcrumb/VueBreadcrumb.vue';
import VueGridRow from '@/app/shared/components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@/app/shared/components/VueGridItem/VueGridItem.vue';
import VueHeadline from '@/app/shared/components/VueHeadline/VueHeadline.vue';
import { IState } from '@/app/state';
import VueButton from '@components/VueButton/VueButton.vue';

import { BudgetModule } from '../module';
import { mapState } from 'vuex';
import { IBudgetState } from '../state';
import { Budget } from 'budget-data-model/bin/model/budget';
import VueCard from '../../shared/components/VueCard/VueCard.vue';
import VueCardHeader from '../../shared/components/VueCard/VueCardHeader/VueCardHeader.vue';
import VueCardBody from '../../shared/components/VueCard/VueCardBody/VueCardBody.vue';
import VueCardFooter from '../../shared/components/VueCard/VueCardFooter/VueCardFooter.vue';

export default {
  metaInfo: {
    title: 'Budget',
  },
  components: {
    VueGrid,
    VueBreadcrumb,
    VueGridRow,
    VueGridItem,
    VueHeadline,
    VueCard,
    VueCardBody,
    VueCardHeader,
    VueCardFooter,
    VueButton,
  },
  methods: {
    goToScenario(id: number) {
      this.$store.dispatch('select', { id });
    },
  },
  computed: {
    breadCrumbItems() {
      return [
        { label: this.$t('common.home' /* Home */), href: '/' },
        { label: this.$t('common.Budget' /* Budget */), href: '/budget' },
      ];
    },
    ...mapState({
      budgets(state: IState): Budget[] {
        return state.budget.budgets;
      },
    }),
  },
  beforeCreate() {
    registerModule('budget', BudgetModule);
  },
  prefetch: (options: IPreLoad) => {
    registerModule('budget', BudgetModule);

    /**
     * This is the function where you can load all the data that is needed
     * to render the page on the server and client side
     *
     * This function always returns a promise that means, if you want to
     * call a vuex action you have to return it, here is an example
     *
     * return options.store.dispatch('fetchBudget', '1');
     *
     * If you need to fetch data from multiple source your can also return
     * a Promise chain or a Promise.all()
     */
    return Promise.resolve();
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.budget {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
</style>
