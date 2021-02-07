<template>
  <div :class="$style.scenario">
    <vue-grid>
      <vue-breadcrumb :items="breadCrumbItems"></vue-breadcrumb>
      <vue-grid-row>
        <vue-grid-item fill>
          <vue-headline level="1">Scenario</vue-headline>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row>
        <vue-grid-item>
          <div>
            <vue-headline level="2">Bank Accounts</vue-headline>
            <banks :datasource="banks"></banks>
          </div>
          <div>
            <vue-headline level="2">Transfers</vue-headline>
            <transfers :datasource="transfers"></transfers>
          </div>
          <div>
            <vue-headline level="2">Excercise Result</vue-headline>
            <banks :datasource="bankResults"></banks>
          </div>
          <!-- TOTALS -->
        </vue-grid-item>
        <vue-grid-item>
          <!-- RIGHT SECTION -->
          <div>
            <vue-headline level="2">Accounts</vue-headline>
            <accounts :datasource="accountGroups"></accounts>
          </div>
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
import VueButton from '@/app/shared/components/VueButton/VueButton.vue';
import VueHeadline from '@/app/shared/components/VueHeadline/VueHeadline.vue';
import Banks from '../Banks/Banks.vue';
import Transfers from '../Transfers/Transfers.vue';
import Accounts from '../Accounts/Accounts.vue';
import { IState } from '@/app/state';

import { ScenarioModule } from '../module';
import { mapState } from 'vuex';
import { Budget } from 'budget-data-model/bin/model/budget';
import { Bank } from 'budget-data-model/bin/model/bank';
import { Transfer } from 'budget-data-model/bin/model/transfer';
import { AccountGroup } from 'budget-data-model/bin/model/account-group';

export default {
  metaInfo: {
    title: 'Scenario',
  },
  components: {
    VueGrid,
    VueBreadcrumb,
    VueGridRow,
    VueGridItem,
    VueButton,
    VueHeadline,
    Banks,
    Transfers,
    Accounts,
  },
  props: ['id'],
  methods: {},
  computed: {
    breadCrumbItems() {
      return [
        { label: this.$t('common.home' /* Home */), href: '/' },
        { label: this.$t('common.Budget' /* Scenario */), href: '/budget' },
        { label: this.$t('common.Scenario' /* Scenario */), href: '#' },
      ];
    },
    ...mapState({
      budget(state: IState): Budget {
        return state.scenario.budget;
      },

      // Returns the banks as an array
      banks(state: IState): Bank[] {
        const {
          scenario: {
            budget: { banks },
          },
        } = state;
        return Object.keys(banks).map((k) => banks[k]);
      },
      transfers(state: IState): Transfer[] {
        const {
          scenario: {
            budget: { transfers },
          },
        } = state;

        return transfers;
      },
      bankResults(state: IState): Bank[] {
        return [];
      },
      accountGroups(state: IState): AccountGroup[] {
        const {
          scenario: {
            budget: { accounts },
          },
        } = state;

        return accounts;
      },
    }),
  },
  beforeCreate() {
    registerModule('scenario', ScenarioModule);
  },
  prefetch: (options: IPreLoad) => {
    registerModule('scenario', ScenarioModule);

    /**
     * This is the function where you can load all the data that is needed
     * to render the page on the server and client side
     *
     * This function always returns a promise that means, if you want to
     * call a vuex action you have to return it, here is an example
     *
     * return options.store.dispatch('fetchScenario', '1');
     *
     * If you need to fetch data from multiple source your can also return
     * a Promise chain or a Promise.all()
     */
    return Promise.resolve();
  },
  mounted() {
    // if (!this.$store.state.scenario.budget) {
    //   console.log(`[scenario.vue] Budget not loaded yet.`);
    //   this.$store.dispatch('select', { id: this.id });
    // }
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.scenario {
  margin-top: $nav-bar-height;
  min-height: 500px;
}

h2 {
  padding-top: 1em;
}
</style>
