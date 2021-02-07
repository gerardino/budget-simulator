<template>
  <div :class="$style.financeTable">
    <div v-if="datasource && datasource.length">
      <vue-data-table :header="header" :data="datasource" :show-search="false" :max-rows="datasource.length" />
    </div>
    <div v-else>No data here.</div>
  </div>
</template>

<script lang="ts">
import VueDataTable from '@/app/shared/components/VueDataTable/VueDataTable.vue';

export default {
  name: 'FinanceTable',
  components: { VueDataTable },
  props: ['datasource', 'header'],
  data: (): any => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.financeTable {
  thead {
    th {
      background-color: $brand-bg-color-variant;
      &:last-child {
        text-align: right;
        width: 10em;
      }
    }
  }

  td:last-child {
    text-align: right;
  }
}
</style>
