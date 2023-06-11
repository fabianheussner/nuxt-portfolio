<template>
  <div class="case__overview padding__v-large">
    <SectionHeader
      :title="sectionTitle"
      :counter="sectionCounter"
      v-motion="motionFadeUp"
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
      v-motion="motionFadeUp"
    />
    <Button
      v-if="cta"
      variant="primary"
      to="work"
      class="mr-4"
      v-motion="motionFadeUp"
    >
      {{ cta }}
    </Button>
  </div>
</template>

<script>
import { motionFadeUp } from "./scrollmotion.js";

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
  data() {
    return {
      motionFadeUp,
    };
  },
};
</script>

<style lang="scss" scoped></style>
