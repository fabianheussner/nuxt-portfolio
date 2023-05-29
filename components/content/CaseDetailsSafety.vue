<template>
  <div
    class="case__intro wrapper my-20 grid grid-cols-1 lg:grid-cols-2 gap-x-20"
  >
    <div class="case__title">
      <Chip v-for="skill in skills" :key="skill">
        {{ skill }}
      </Chip>
    </div>
    <div class="case__details">
      <div class="case__details-table">
        <ListItemTwo
          v-for="content in contents"
          :key="content"
          :primary="content.primary"
          :secondary="content.secondary"
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
    skills: {
      type: Array,
      required: true,
    },
    contents: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  //   data() {
  //     return {
  //       details: [
  //         {
  //           label: "Client",
  //           value: "Test name",
  //         },
  //         {
  //           label: "Credits",
  //           value: "Mobimeo GmbH",
  //         },
  //         {
  //           label: "What",
  //           value: "Mobile App",
  //         },
  //         {
  //           label: "When",
  //           value: "21-22",
  //         },
  //       ],
  //     };
  //   },
};
</script>

<style lang="scss" scoped>
.chip {
  margin-right: 8px;
}
</style>
