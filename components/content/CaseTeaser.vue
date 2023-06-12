<template>
  <NuxtLink
    :to="link"
    class="case__teaser grid grid-cols-1 md:grid-cols-2 mb-8 md:mb-12 bg-surface"
  >
    <div class="case__teaser-body p-6 md:p-12 order-2 md:order-1">
      <Type
        variant="body-medium"
        class="text-onSurfaceSubdued mt-2 md:mt-10 mb-2 md:mb-4"
      >
        {{ type }}
      </Type>
      <Type variant="title-small">{{ title }}</Type>
      <Type variant="subline" class="text-onSurfaceSubdued mb-8 md:mb-12">
        {{ subtitle }}
      </Type>
      <div class="read-more inline-flex items-center">
        <Icon name="arrowright" class="w-6 h-6 md:w-8 md:h-8" />
        <Type variant="label-large" class="discover mr-4">Discover</Type>
      </div>
    </div>
    <div class="case__teaser-preview order-1 md:order-2">
      <picture>
        <img :src="imageSource" :alt="imageDescription" />
      </picture>
    </div>
  </NuxtLink>
</template>

<script>
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
      transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        object-fit: cover;
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
