<template>
  <div :class="$style.accounts">
    <div v-for="group in datasource">
      <account-group :datasource="group" />
    </div>
  </div>
</template>

<script lang="ts">
import AccountGroup from '../AccountGroup/AccountGroup.vue';

export default {
  name: 'Accounts',
  components: { AccountGroup },
  props: ['datasource'],
  // data: (): any => ({}),
  // computed: {},
  // methods: {},
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.accounts {
  // this class is only applied if you add css properties
}
</style>
