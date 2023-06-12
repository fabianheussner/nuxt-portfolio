<template>
  <div
    class="text__image-right grid grid-cols-1 md:grid-cols-12 margin__v-large bg-surface rounded-2xl overflow-hidden"
    v-motion="motionFadeUp"
  >
    <div
      class="text md:col-span-6 lg:col-span-6 my-8 p-6 lg:p-12 order-2 md:order-1"
    >
      <div class="icons flex mb-6 md:mb-10">
        <Icon name="star" />
        <Icon name="waves" />
        <Icon name="leaf" />
      </div>
      <Type variant="body-medium" class="text-onSurfaceSubdued mb-2">
        {{ label }}
      </Type>
      <Type variant="title-small" class="mb-4">
        {{ title }}
      </Type>
      <Type variant="body-large">
        {{ message }}
      </Type>
    </div>
    <div class="image md:col-span-6 lg:col-span-6 order-1 md:order-2">
      <img
        :src="imageSource"
        :alt="imageDescription"
        class="md:h-full object-cover"
      />
    </div>
  </div>
</template>

<script>
import { motionFadeUp } from "./scrollmotion.js";

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    imageSource: {
      type: String,
      required: true,
    },
    imageDescription: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      motionFadeUp,
    };
  },
};
</script>

<style lang="scss" scoped>
.text__image-right {
  .icons {
    svg {
      @apply mr-2 w-8 h-8;
    }
  }

  .image {
    img {
      min-height: 320px;
    }
  }
}
</style>
