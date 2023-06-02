<template>
  <div
    class="case__intro wrapper mt-8 mb-16 lg:my-16 grid grid-cols-1 lg:grid-cols-2 gap-x-20"
  >
    <div class="case__scope my-4 lg:my-8">
      <Chip v-for="skill in data.skills" :key="skill" class="mb-2">
        {{ skill }}
      </Chip>
    </div>
    <div class="case__details">
      <div class="case__details-table mb-12 lg:mb-16">
        <ListItemTwo
          v-for="detail in data.details"
          :key="detail.primary"
          :primary="detail.primary"
          :secondary="detail.secondary"
        />
      </div>
      <div class="case__details-description">
        <Type variant="headline-small">{{ description }}</Type>
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
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.chip {
  margin-right: 8px;
}
</style>
