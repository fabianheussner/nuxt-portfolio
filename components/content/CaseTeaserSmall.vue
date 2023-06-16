<template>
  <NuxtLink :to="link" class="case__teaser flex flex-col bg-surface">
    <div class="case__teaser-preview">
      <picture>
        <img :src="imageSource" :alt="imageDescription" />
      </picture>
    </div>
    <div class="case__teaser-body flex-grow p-6 sm:p-8 lg:p-12">
      <Type variant="body-medium" class="mb-4 text-onSurfaceSubdued">
        {{ type }}
      </Type>
      <Type variant="title-small" class="mb-1">{{ title }}</Type>
      <Type variant="subline" class="text-onSurfaceSubdued mb-8 md:mb-12">
        {{ subtitle }}
      </Type>
      <div class="read-more inline-flex items-center">
        <Icon name="arrowright" class="w-8 h-8" />
        <Type variant="label-large" class="discover mr-4">Discover</Type>
      </div>
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
  .case__teaser-preview {
    picture {
      display: block;
      overflow: hidden;
      @apply rounded-2xl;
      transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      img {
        transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .case__teaser-body {
    .discover {
      margin-left: 16px;
      margin-bottom: -48px;
      opacity: 0;
      transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
  }

  &:hover {
    cursor: pointer;

    .case__teaser-preview {
      picture {
        transform: scaleX(0.95) scaleY(0.92);
        @apply rounded-lg;
      }
    }
    .case__teaser-body {
      .discover {
        margin-bottom: 0;
        opacity: 1;
      }
    }
    .case__teaser-preview {
      img {
        transform: scaleX(1.15) scaleY(1.18);
      }
    }
  }
}
</style>
