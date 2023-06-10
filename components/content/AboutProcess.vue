<template>
  <div
    class="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-12 padding__v-large"
  >
    <div class="lg:col-span-5">
      <Type variant="title-small" class="pb-4 pt-2">{{ title }}</Type>
      <Type variant="subline" class="text-onBackgroundSubdued">
        {{ message }}
      </Type>
    </div>
    <div class="lg:col-start-7 lg:col-span-6">
      <Accordion
        v-for="service in data.services"
        :key="service.title"
        :leading="service.counter"
        :primary="service.title"
        :expanded="service.body"
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
    },
  },
};
</script>
