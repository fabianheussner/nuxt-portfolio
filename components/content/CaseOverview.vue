<template>
  <div class="case__overview padding__v-large">
    <SectionHeader
      :title="sectionTitle"
      :counter="sectionCounter"
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
    <Button
      v-if="cta"
      variant="primary"
      to="work"
      class="mr-4"
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
    >
      {{ cta }}
    </Button>
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
