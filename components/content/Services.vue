<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-16 bg-surface wrapper rounded-3xl"
  >
    <div
      v-for="service in services"
      :key="service.title"
      class="column my-6 px-4 py-4 border-r border-onBackgroundBorder"
    >
      <Type variant="headline-small" class="mb-2">
        <span class="text-onBackgroundSubdued">
          {{ service.count }}
        </span>
        {{ service.title }}
      </Type>
      <Type variant="body-large">
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
.column:last-child {
  border-right: none;
}
</style>
