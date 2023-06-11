<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 padding__v-medium"
    v-motion="motionFadeUp"
  >
    <div class="md:col-span-1 md:col-end-3">
      <Type
        variant="body-medium"
        v-if="$slots.label"
        class="mb-2 text-onBackgroundSubdued"
      >
        <ContentSlot :use="$slots.label" unwrap="p" />
      </Type>
      <Type variant="headline-small" v-if="$slots.headline" class="mb-4">
        <ContentSlot :use="$slots.headline" unwrap="p" />
      </Type>
      <Type variant="body-large" class="md:col-span-1 md:col-end-3">
        <ContentSlot :use="$slots.text" unwrap="p" />
      </Type>
    </div>
  </div>
</template>

<script>
import { motionFadeUp } from "./scrollmotion";

export default {
  data() {
    return {
      motionFadeUp,
    };
  },
};
</script>
