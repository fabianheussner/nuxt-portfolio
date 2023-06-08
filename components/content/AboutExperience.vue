<template>
  <div
    class="work__experience grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12 padding__v-large"
  >
    <div class="lg:col-span-5">
      <Type variant="title-small" class="pb-4 pt-2">{{ title }}</Type>
      <Type variant="body-large" class="text-onBackgroundSubdued">
        {{ message }}
      </Type>
    </div>
    <div class="lg:col-start-7 lg:col-span-6">
      <ListItem
        v-for="employer in data.employers"
        :key="employer.title"
        :primary="employer.position"
        :secondary="employer.company"
        :tertiary="employer.year"
      />
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
    message: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang=""></style>
