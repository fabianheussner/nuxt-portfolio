<template>
  <div :class="containerClass" class="margin__v-large" v-motion="motionFadeUp">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image.source"
      :alt="image.description"
      class="w-full h-full object-cover"
    />
  </div>
</template>

<script>
import { motionFadeUp } from "./scrollmotion";

export default {
  props: {
    images: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      motionFadeUp,
    };
  },
  computed: {
    containerClass() {
      if (this.images.length === 1) {
        return "w-full rounded-2xl overflow-hidden";
      } else if (this.images.length === 2) {
        return "grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden";
      } else {
        return "grid grid-cols-1 lg:grid-cols-3 rounded-2xl overflow-hidden";
      }
    },
  },
};
</script>

<style scoped>
/* Add any additional styles you may need here */
</style>
