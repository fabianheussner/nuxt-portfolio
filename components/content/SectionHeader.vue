<template>
  <div class="section__header wrapper mt-20 mb-10">
    <Type variant="headline-large" class="section__header-title">
      {{ title }}
      <span v-if="counter" class="superscript">{{ counter }}</span>
    </Type>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    counter: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.section__header-title {
  position: relative;
  .superscript {
    position: absolute;
    margin-left: 4px;
    top: 8px;
    @apply text-xl;
  }
}
</style>
