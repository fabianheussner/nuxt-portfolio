<template>
  <SectionHeader :title="sectionTitle" :counter="sectionCounter" />
  <div class="case__overview wrapper mb-10 md:mb-40">
    <CaseTeaser
      v-for="project in data.projects"
      :key="project.title"
      :link="project.link"
      :type="project.type"
      :title="project.title"
      :subtitle="project.subtitle"
      :imageSource="project.imageSource"
      :imageDescription="project.imageDescription"
    />
    <Button variant="primary" to="/" class="mr-4">Discover all</Button>
  </div>
</template>

<script>
export default {
  props: {
    sectionTitle: {
      type: String,
      required: true,
    },
    sectionCounter: {
      type: String,
    },
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
