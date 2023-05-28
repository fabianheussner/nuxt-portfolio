<template>
  <div class="list__item grid grid-cols-1 lg:grid-cols-3 gap-x-4 items-center">
    <div class="list__item-primary">
      <Type variant="label-large">{{ primary }}</Type>
    </div>
    <div class="list__item-secondary">
      <Type variant="body-large">{{ secondary }}</Type>
    </div>
    <div class="list__item-tertiary text-onBackgroundSubdued text-right">
      <Type variant="body-small">{{ tertiary }}</Type>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    primary: {
      type: String,
      required: true,
    },
    secondary: {
      type: String,
      required: true,
    },
    tertiary: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.list__item {
  @apply py-6 border-b border-onBackgroundBorder;
  .list__item-primary {
  }
  .list__item-secondary {
  }
}
</style>
