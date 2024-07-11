<template>
  <NuxtLink
    :to="url"
    class="pagination grid grid-cols-1 sm:grid-cols-12 rounded-2xl overflow-hidden margin__v-large bg-surface items-center"
    v-motion="motionFadeUp"
  >
    <div class="pagination__body sm:col-span-6 md:col-span-7 my-4 p-6 md:p-12">
      <Type variant="subline" class="text-onSurfaceSubdued mb-2">
        Next project
      </Type>
      <Type variant="title-small" class="mb-4 md:mb-8">{{ caseTitle }}</Type>
      <div class="read-more inline-flex items-center">
        <Icon name="arrowright" class="w-8 h-8" />
        <Type variant="label-large" class="discover mr-4">Proceed</Type>
      </div>
    </div>
    <div class="pagination__preview flex flex-grow sm:col-span-6 md:col-span-5">
      <picture>
        <img :src="imageSource" :alt="imageDescription" />
      </picture>
    </div>
  </NuxtLink>
</template>

<script>
import { motionFadeUp } from "./scrollmotion";

export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    caseTitle: {
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
.pagination {
  .pagination__body {
    .discover {
      margin-left: 16px;
      margin-bottom: -48px;
      opacity: 0;
      transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
  }

  .pagination__preview {
    height: 100%;

    picture {
      @apply block rounded-2xl overflow-hidden;
      transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
    }
  }

  &:hover {
    .discover {
      margin-bottom: 0;
      opacity: 1;
    }

    picture {
      transform: scaleX(0.95) scaleY(0.92);
      @apply rounded-lg;

      img {
        transform: scaleX(1.15) scaleY(1.18);
      }
    }
  }
}
</style>
