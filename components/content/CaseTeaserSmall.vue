<template>
  <NuxtLink :to="link" class="case__teaser flex flex-col">
    <div class="case__teaser-preview">
      <img :src="imageSource" :alt="imageDescription" />
    </div>
    <div class="case__teaser-body flex-grow p-6 sm:p-8 lg:p-12 bg-surface">
      <Type variant="body-medium" class="mb-4 text-onSurfaceSubdued">
        {{ type }}
      </Type>
      <Type variant="headline-large">{{ title }}</Type>
      <Type variant="subline" class="text-onSurfaceSubdued mb-8 md:mb-12">
        {{ subtitle }}
      </Type>
      <Icon name="arrowright" class="w-8 h-8 md:w-10 md:h-10" />
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
  .case__teaser-body {
    @apply rounded-b-2xl;

    svg {
      transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
  }
  .case__teaser-preview {
    @apply rounded-t-2xl;
    overflow: hidden;

    img {
      transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:hover {
    cursor: pointer;
    .case__teaser-body {
      svg {
        @apply ml-4;
      }
    }
    .case__teaser-preview {
      img {
        transform: scale(1.1);
      }
    }
  }
}
</style>
