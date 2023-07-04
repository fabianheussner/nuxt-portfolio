<template>
  <!-- class="lg:-mx-4" -->
  <div
    :class="[containerClass, presetClass]"
    :style="{ background }"
    v-motion="motionFadeIn"
  >
    <nuxt-img
      format="webp"
      densities="x1 x2"
      v-for="(image, index) in images"
      :key="index"
      :src="image.source"
      :alt="image.description"
      class="w-full h-full object-cover"
    />
  </div>
</template>

<script>
import { motionFadeIn } from "./scrollmotion";

export default {
  props: {
    images: {
      type: Object,
      required: true,
    },
    preset: {
      type: String,
      default: "standalone",
    },
    background: {
      type: String, // Assuming you want to accept a string value for the color
      default: "transparent", // Set a default value if needed
    },
  },
  data() {
    return {
      motionFadeIn,
    };
  },
  computed: {
    containerClass() {
      if (this.images.length === 1) {
        return "grid grid-cols-1";
      } else if (this.images.length === 2) {
        return "grid grid-cols-1 lg:grid-cols-2";
      } else if (this.images.length === 3) {
        return "grid grid-cols-1 lg:grid-cols-3";
      } else {
        return "grid grid-cols-2 lg:grid-cols-4";
      }
    },
    presetClass() {
      switch (this.preset) {
        case "top":
          return "mt-12 md:mt-16 lg:mt-20 rounded-t-lg lg:rounded-t-2xl overflow-hidden";
        case "bottom":
          return "mb-12 md:mb-16 lg:mb-20 rounded-b-lg lg:rounded-b-2xl overflow-hidden";
        case "center":
          return "m-0 rounded-none";
        case "standalone":
          return "my-12 md:my-16 lg:my-20 rounded-lg lg:rounded-2xl overflow-hidden";
        default:
          return "";
      }
    },
  },
};
</script>

<style scoped>
/* Add any additional styles you may need here */
</style>
