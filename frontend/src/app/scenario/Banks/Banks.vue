<template>
  <div :class="$style.banks">
    <finance-table :header="header" :datasource="bankList" />
  </div>
</template>

<script lang="ts">
import { Bank } from 'budget-data-model/bin/model/bank';
import FinanceTable from '@/app/shared/components/FinanceTable/FinanceTable.vue';

export default {
  name: 'Banks',
  components: { FinanceTable },
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
        slot: 'currency',
      },
    },
  }),
  computed: {
    bankList: function() {
      return this.datasource.map((bank) => {
        const currency = this.$store.getters['scenario/currency'](bank.currency);
        return {
          name: `[${bank.code}] ${bank.name}`,
          amount: `${currency.symbol} ${bank.amount.toFixed(2)}`,
        };
      });
    },
  },
  methods: {},

  mounted() {},
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.banks {
  // this class is only applied if you add css properties
}
thead {
  th {
    background-color: $brand-bg-color-variant;
  }
}
</style>
