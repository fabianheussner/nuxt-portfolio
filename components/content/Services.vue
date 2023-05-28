<template>
  <div
    class="service__overview wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-12"
  >
    <div
      v-for="service in services"
      :key="service.title"
      class="service__overview-column p-4 border-r border-onBackgroundBorder"
    >
      <Type variant="headline-small" class="mb-2">
        <span class="text-onBackgroundSubdued">
          {{ service.count }}
        </span>
        {{ service.title }}
      </Type>
      <Type variant="body-medium">
        <ContentSlot :use="$slots[service.title]" unwrap="p" />
      </Type>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { title: "Research", count: "01" },
        { title: "UX", count: "02" },
        { title: "UI", count: "03" },
        { title: "Illustration", count: "04" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.service__overview {
  .service__overview-column {
    position: relative;
    left: -16px;
  }
  .service__overview-column:first-child {
  }
  .service__overview-column:last-child {
    border-right: none;
  }
}
</style>
