<template>
  <div class="case__overview padding__v-large">
    <SectionHeader :title="sectionTitle" :counter="sectionCounter" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
      <CaseTeaserSmall
        v-for="project in data.projects"
        :key="project.title"
        :link="project.link"
        :type="project.type"
        :title="project.title"
        :subtitle="project.subtitle"
        :imageSource="project.imageSource"
        :imageDescription="project.imageDescription"
      />
    </div>
    <Button v-if="cta" variant="primary" to="work" class="mr-4">{{
      cta
    }}</Button>
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
    cta: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
