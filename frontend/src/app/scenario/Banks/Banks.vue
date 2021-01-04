<template>
  <div :class="$style.banks">
    <vue-data-table :header="header" :data="bankList" :show-search="false" :max-rows="datasource.length" />
  </div>
</template>

<script lang="ts">
import { Bank } from 'budget-data-model/bin/model/bank';
import VueDataTable from '@/app/shared/components/VueDataTable/VueDataTable.vue';

export default {
  name: 'Banks',
  components: {
    VueDataTable,
  },
  props: ['datasource'],
  data: (): any => ({
    header: {
      name: {
        title: 'Name',
        sortable: false,
      },
      amount: {
        title: 'Amount',
        sortable: false,
        slot: 'currency'
      },
    },
  }),
  computed: {
    bankList: function() {
      return this.datasource.map(banks => ({
        name: `[${banks.code}] ${banks.name}`,
        amount: `${banks.amount.toFixed(2)} ${banks.currency}`
      }));
    },
  },
  methods: {},

  mounted() {
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.banks {
  // this class is only applied if you add css properties
}
</style>
