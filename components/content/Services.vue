<template>
  <SectionHeader title="I'm specialized in…" />
  <div
    class="service__overview wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 pt-6 pb-28"
  >
    <div
      v-for="service in data.services"
      :key="service.title"
      class="service__overview-column pb-6 sm:pb-0 sm:px-6 border-b border-l-0 sm:border-b-0 sm:border-l border-onBackgroundBorder"
    >
      <Type variant="title-small" class="text-surfaceVariant mb-8">
        {{ service.count }}
      </Type>
      <Type variant="headline-small" class="mb-2">
        {{ service.title }}
      </Type>
      <Type variant="body-medium">
        {{ service.message }}
        <!-- <ContentSlot :use="$slots[service.title]" unwrap="p" /> -->
      </Type>
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
  // data() {
  //   return {
  //     services: [
  //       {
  //         title: "Experience Design",
  //         count: "01",
  //         message:
  //           "Lorem ipsum dolor sit amet consectetur. Turpis suscipit arcu diam odio porttitor.",
  //       },
  //       {
  //         title: "Interface Design",
  //         count: "02",
  //         message:
  //           "Lorem ipsum dolor sit amet consectetur. Turpis suscipit arcu diam odio porttitor.",
  //       },
  //       {
  //         title: "UX Writing",
  //         count: "03",
  //         message:
  //           "Lorem ipsum dolor sit amet consectetur. Turpis suscipit arcu diam odio porttitor.",
  //       },
  //       {
  //         title: "Design Systems",
  //         count: "04",
  //         message:
  //           "Lorem ipsum dolor sit amet consectetur. Turpis suscipit arcu diam odio porttitor.",
  //       },
  //     ],
  //   };
  // },
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
