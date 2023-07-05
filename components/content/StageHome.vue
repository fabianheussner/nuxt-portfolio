<template>
  <div
    class="stage__home grid grid-cols-1 md:grid-cols-12 gap-x-8 items-center md:min-h-[35.5rem] margin__v-large"
    v-motion="motionFadeEnter"
  >
    <div class="stage__home-title md:col-span-6 order-2 md:order-1">
      <Type variant="subline" class="subline mt-6 ml-1 text-onSurfaceSubdued">
        {{ subline }}
      </Type>
      <Type variant="display" class="mt-4 mb-12">
        {{ title }}
      </Type>
      <Button variant="primary" :to="primaryLink" class="mr-4 mb-4 md:mb-0">
        {{ primaryLabel }}
      </Button>
      <Button variant="secondary" :to="secondaryLink">
        {{ secondaryLabel }}
      </Button>
      <!-- Get to know me -->
    </div>
    <div
      class="stage__home-hero md:col-span-6 lg:col-span-5 lg:col-end-13 mx-auto order-1 md:order-2"
    >
      <video autoplay muted loop playsinline>
        <source src="/video/hero-video-s.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
import { motionFadeEnter } from "./scrollmotion.js";

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
      required: true,
    },
    secondaryLabel: {
      type: String,
      required: true,
    },
    primaryLink: {
      type: String,
      required: true,
    },
    secondaryLink: {
      type: String,
      required: true,
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
