<template>
  <div :class="$style.accountGroup">
    <vue-headline level="3">{{ title }}</vue-headline>
    <table>
      <thead>
        <tr>
          <th class="name">Account Name</th>
          <th class="state">State</th>
          <th class="amount">Assets</th>
          <th class="amount">Liabilities</th>
        </tr>
      </thead>
      <tbody v-for="account in datasource.accounts">
        <tr>
          <td>{{ account.name }}</td>
          <td>{{ account.state }}</td>
          <td>{{ formatAssetValue(account) }}</td>
          <td>{{ formatLiabilityValue(account) }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">Total</td>
          <td>{{ formatAssetTotal }}</td>
          <td>{{ formatLiabilityTotal }}</td>
        </tr>
        <tr>
          <td colspan="2"></td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script lang="ts">
import VueHeadline from '../../shared/components/VueHeadline/VueHeadline.vue';
import { AccountType, Account } from 'budget-data-model/bin/model/account';

export default {
  name: 'AccountGroup',
  components: { VueHeadline },
  props: ['datasource'],
  data: (): any => ({}),
  computed: {
    title() {
      return this.datasource.name;
    },
    rows() {
      return this.datasource.accounts;
    },
    currency() {
      return this.$store.getters['scenario/currency'](this.datasource.currency);
    },
    assetTotal() {
      return this.datasource.accounts
        .reduce((total, account) => total + (this.assetValue(account)), 0);
    },
    formatAssetTotal() {
      // return this.formatAmount(this.assetTotal);
      return '';
    },
    formatLiabilityTotal() {
      // return this.formatAmount(this.liabilityTotal);
      return '';
    },
    liabilityTotal() {
      return this.formatAmount(this.datasource.accounts
        .reduce((total, account) => total + (this.liabilityValue(account)), 0));
    },
    assetGrandTotal() {
      const difference = this.assetTotal
    }
  },
  methods: {
    formatAmount(amount: number): string {
      const {symbol} = this.currency;
      return amount !== 0 ? `${symbol} ${amount.toFixed(2)}` : '';
    },
    assetValue(account: Account): number {
      return  (account.type === AccountType.Asset) ? account.amount : 0;
    },
    formatAssetValue(account: Account): string {
      return this.formatAmount(this.assetValue(account));
    },

    liabilityValue(account: Account): number {
      return  (account.type === AccountType.Liability) ? account.amount : 0;
    },
    formatLiabilityValue(account: Account): string {
      return this.formatAmount(this.liabilityValue(account));
    }
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.accountGroup {
  // this class is only applied if you add css properties
  table {
    width: $data-table-width;
    th {
      padding: 0.8rem 1.2rem;
    }
    tr {
      border: $data-table-row-border;
      min-width: $data-table-min-width;

      &:hover {
        background: $data-table-row-hover-bg;
        color: $data-table-row-hover-color;
      }
    }
    td {
      border-right: $data-table-row-border;
      padding: $data-table-row-column-padding;

      &:last-child {
        border-right: none;
      }
    }
    margin-bottom: 1em;
  }
}
</style>
