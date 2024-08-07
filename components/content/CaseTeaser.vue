<template>
  <NuxtLink
    :to="link"
    class="case__teaser grid grid-cols-1 md:grid-cols-2 mb-8 md:mb-12 bg-surface"
  >
    <div class="case__teaser-body p-6 md:p-12 order-2 md:order-1">
      <div class="labels flex items-center justify-between md:justify-start h-9 mt-2 md:mt-10 mb-2 md:mb-4">
        <Type
        variant="body-medium"
        class="text-onSurfaceSubdued"
        >
        {{ type }}
        </Type>
        <Chip v-if="confidential" variant="chip-statusError" class="ml-6">Confidential</Chip>
      </div>
      <Type variant="title-small" class="mb-1">{{ title }}</Type>
      <Type variant="subline" class="text-onSurfaceSubdued mb-8 md:mb-12">
        {{ subtitle }}
      </Type>
      <div class="read-more inline-flex items-center">
        <Icon name="arrowright" class="w-8 h-8" />
        <Type variant="label-large" class="discover mr-4">Discover</Type>
      </div>
    </div>
    <div class="case__teaser-preview order-1 md:order-2">
      <picture>
        <nuxt-img
          format="webp"
          sizes="sm:100vw md:50vw lg:1440px"
          densities="x1 x2"
          :src="imageSource"
          :alt="imageDescription"
        />
      </picture>
    </div>
  </NuxtLink>
</template>

<script>
import Chip from './Chip.vue'; // New part

export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
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
    confidential: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.case__teaser {
  @apply rounded-2xl overflow-hidden;
  .case__teaser-body {
    .discover {
      margin-left: 16px;
      margin-bottom: -48px;
      opacity: 0;
      transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
  }
  .case__teaser-preview {
    picture {
      @apply block rounded-2xl overflow-hidden;
      width: 100%;
      height: 100%;
      transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
    }
  }

  &:hover {
    cursor: pointer;
    .case__teaser-body {
      .discover {
        margin-bottom: 0;
        opacity: 1;
      }
    }
    .case__teaser-preview {
      picture {
        transform: scaleX(0.95) scaleY(0.92);
        @apply rounded-lg;

        img {
          transform: scaleX(1.15) scaleY(1.18);
        }
      }
    }
  }
}
</style>
