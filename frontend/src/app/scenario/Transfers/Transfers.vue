<template>
  <div :class="$style.transfers">
    <div class="transfers__transfer-container" v-for="transfer of transferList">
      <finance-table :datasource="transfer.rows" :header="header" />
      <div v-if="transfer.notes">Notes: {{ transfer.notes }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Transfer } from 'budget-data-model/bin/model/transfer';
import FinanceTable from '@/app/shared/components/FinanceTable/FinanceTable.vue';

export default {
  name: 'Transfers',
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
    transferList: function() {
      return this.datasource.map((t: Transfer) => {
        const rows = [];
        const { notes } = t;

        // From
        rows.push(this.calculateTransferRow(t.fromBank, t.fromAmount));
        // To
        rows.push(this.calculateTransferRow(t.toBank, t.toAmount));
        // Exchange rate
        rows.push({
          name: 'Exchange rate',
          amount: `${t.exchangeRate}`,
        });

        return { rows, notes };
      });
    },
  },
  methods: {
    calculateTransferRow(bankName: string, transferAmount: number) {
      const bank = this.$store.getters['scenario/bank'](bankName);
      const currency = this.$store.getters['scenario/currency'](bank.currency);

      const { name } = bank;
      const amount = `${currency.symbol} ${transferAmount.toFixed(2)}`;

      return {
        name,
        amount,
      };
    },
  },
  doSomething() {
    return this.$store;
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.transfers {
  &__transfer-container {
    margin-bottom: 1em;
    padding-bottom: 1em;
  }
}
</style>
