<template>
  <div class="case__intro grid md:grid-cols-12 mt-20 md:mt-48 mb-10 md:mb-12">
    <div class="case__intro-title md:col-span-8 order-2 md:order-1">
      <Type variant="display">
        {{ title }}
      </Type>
    </div>
    <div
      class="case__intro-year md:col-span-4 md:text-right order-1 md:order-2"
    >
      <Type variant="headline-large" class="mb-2 md:mt-6 md:mb-0">
        {{ year }}
      </Type>
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
    year: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
