<template>
  <div class="image__full -ml-6 lg:-ml-0 -mr-6 lg:-mr-0">
    <img :src="source" :alt="description" class="lg:rounded-2xl" />
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.image__full img {
  width: 100%;
  height: 100%;
}
</style>
