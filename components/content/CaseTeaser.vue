<template>
  <NuxtLink
    :to="link"
    class="case__teaser grid grid-cols-1 md:grid-cols-2 my-12"
  >
    <div class="case__teaser-body p-6 md:p-12 bg-surface order-2 md:order-1">
      <Type
        variant="label-large"
        class="text-onSurfaceSubdued mt-2 md:mt-10 mb-2 md:mb-4"
      >
        {{ type }}
      </Type>
      <Type variant="title-small">{{ title }}</Type>
      <Type
        variant="headline-small"
        class="text-onSurfaceSubdued mb-8 md:mb-12"
      >
        {{ subtitle }}
      </Type>
      <Icon name="arrowright" class="w-8 h-8 md:w-10 md:h-10" />
    </div>
    <div class="case__teaser-preview order-1 md:order-2">
      <img :src="imageSource" :alt="imageDescription" />
      <!-- <img src="/img/cases/lightelligence/lightelligence-preview.png" alt="" /> -->
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
    @apply rounded-b-2xl md:rounded-l-2xl  md:rounded-br-none;

    svg {
      @apply hover-long;
    }
  }
  .case__teaser-preview {
    @apply rounded-t-2xl md:rounded-r-2xl md:rounded-tl-none;
    overflow: hidden;

    img {
      @apply hover-long;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:hover {
    cursor: pointer;
    .case__teaser-body {
      svg {
        @apply ml-8;
      }
    }
    .case__teaser-preview {
      img {
        transform: scale(1.25);
      }
    }
  }
}
</style>
