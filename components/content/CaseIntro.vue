<template>
  <div class="case__intro wrapper grid md:grid-cols-12 mt-48 mb-6">
    <div class="case__intro-title md:col-span-8">
      <Type variant="display">
        {{ title }}
      </Type>
    </div>
    <div class="case__intro-year md:col-span-4 text-right">
      <Type variant="headline-large" class="mt-6">
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
