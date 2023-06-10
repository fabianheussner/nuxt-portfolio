<template>
  <div
    class="list__item grid grid-cols-12 gap-x-4 items-center"
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 1000,
        delay: 300,
      },
    }"
  >
    <div class="col-span-8 md:grid md:grid-cols-2 gap-x-4">
      <div class="list__item-primary md:col-span-1">
        <Type variant="label-large">{{ primary }}</Type>
      </div>
      <div class="list__item-secondary md:col-span-1">
        <Type variant="body-large">{{ secondary }}</Type>
      </div>
    </div>
    <div class="col-span-4">
      <div class="list__item-tertiary text-onBackgroundSubdued text-right">
        <Type variant="body-small">{{ tertiary }}</Type>
      </div>
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
