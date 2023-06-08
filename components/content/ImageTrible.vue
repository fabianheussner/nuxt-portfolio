<template>
  <div class="image__double py-6">
    <div class="mask grid grid-cols-1 md:grid-cols-3">
      <img :src="source1" :alt="description1" />
      <img :src="source2" :alt="description2" />
      <img :src="source3" :alt="description3" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    source1: {
      type: String,
      required: true,
    },
    description1: {
      type: String,
      required: true,
    },
    source2: {
      type: String,
      required: true,
    },
    description2: {
      type: String,
      required: true,
    },
    source3: {
      type: String,
      required: true,
    },
    description3: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.mask {
  @apply rounded-xl lg:rounded-3xl;
  overflow: hidden;
}
</style>
