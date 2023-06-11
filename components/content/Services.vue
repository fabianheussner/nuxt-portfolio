<template>
  <div class="service padding__v-medium">
    <SectionHeader
      title="I'm specialized in…"
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :visibleOnce="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 800,
          delay: 100,
        },
      }"
    />
    <div
      class="service__overview grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6"
    >
      <div
        v-for="service in data.services"
        :key="service.title"
        class="service__overview-column pb-6 sm:pb-0 sm:px-6 border-b border-l-0 sm:border-b-0 sm:border-l border-onBackgroundBorder"
        v-motion-custom
      >
        <Type variant="title-small" class="text-surfaceVariant mb-4 sm:mb-8">
          {{ service.count }}
        </Type>
        <Type variant="headline-small" class="mb-2">
          {{ service.title }}
        </Type>
        <Type variant="body-large">
          {{ service.message }}
        </Type>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.service__overview {
  .service__overview-column {
  }
  .service__overview-column:first-child {
  }
  .service__overview-column:last-child {
    border-right: none;
  }
}
</style>
