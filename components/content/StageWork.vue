<template>
  <div
    class="stage__work grid grid-cols-1 md:grid-cols-12 md:gap-x-8 padding__stage-v-large"
    v-motion="motionFadeEnter"
  >
    <div class="stage__work-title md:col-span-6">
      <Type variant="subline" class="mt-6 ml-1 text-onSurfaceSubdued">
        {{ subline }}
      </Type>
      <Type variant="display" class="mt-4 mb-12">
        {{ title }}
        <!-- Ich übersetze Absichten in Schnittstellen -->
      </Type>
      <Button v-if="cta" variant="primary" to="/" class="mr-4">
        {{ cta }}
      </Button>
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
    cta: {
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
