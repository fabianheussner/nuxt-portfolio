<template>
  <div class="list__item grid grid-cols-2 gap-x-4 items-center">
    <div class="list__item-primary text-onBackgroundSubdued">
      <Type variant="headline-small">{{ primary }}</Type>
    </div>
    <div class="list__item-secondary text-right">
      <Type variant="headline-small">{{ secondary }}</Type>
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
  },
};
</script>

<style lang="scss" scoped>
.list__item {
  @apply py-6 border-b border-onBackgroundBorder;
}
</style>
