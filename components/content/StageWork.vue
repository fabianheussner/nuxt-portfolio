<template>
  <div
    class="stage__work grid grid-cols-1 md:grid-cols-12 md:gap-x-8 items-center md:min-h-[35.5rem] margin__v-large"
    v-motion="motionFadeEnter"
  >
    <div class="stage__work-title md:col-span-6">
      <Type variant="subline" class="mt-6 ml-1 text-onSurfaceSubdued">
        {{ subline }}
      </Type>
      <Type variant="display" class="mt-4 mb-12">
        {{ title }}
      </Type>
      <Button
        v-if="primaryLabel"
        variant="primary"
        :to="primaryLink"
        class="mr-4"
      >
        {{ primaryLabel }}
      </Button>
      <!-- <a href="#cases">Scroll to test</a> -->
    </div>
  </div>
</template>

<script>
import { motionFadeEnter } from "./scrollmotion";

export default {
  props: {
    subline: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    primaryLabel: {
      type: String,
    },
    primaryLink: {
      type: String,
    },
  },
  data() {
    return {
      motionFadeEnter,
    };
  },
};
</script>

<style lang="scss" scoped></style>
