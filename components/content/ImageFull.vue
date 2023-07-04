<template>
  <div class="image__full -mx-6 lg:-mx-4" v-motion="motionFadeEnter">
    <nuxt-img
      format="webp"
      :src="source"
      :alt="description"
      class="lg:rounded-2xl"
    />
  </div>
</template>

<script>
import { motionFadeEnter } from "./scrollmotion";

export default {
  props: {
    source: {
      type: String,
      required: true,
    },
    description: {
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

<style lang="scss" scoped>
.image__full img {
  width: 100%;
  height: 100%;
}
</style>
