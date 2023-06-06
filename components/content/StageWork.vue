<template>
  <div
    class="stage__work wrapper grid grid-cols-1 md:grid-cols-12 md:gap-x-8 padding__stage-v-large"
  >
    <div class="stage__work-title md:col-span-6">
      <Type variant="display" class="mb-8">
        {{ title }}
      </Type>
      <Button v-if="cta" variant="primary" to="/" class="mr-4">
        {{ cta }}
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    cta: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
