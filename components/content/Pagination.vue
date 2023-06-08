<template>
  <div class="pagination">
    <NuxtLink :to="url" class="mask grid grid-cols-1 md:grid-cols-2">
      <div class="pagination__title bg-surface px-4 md:px-12 py-10 md:py-20">
        <Type variant="body-large" class="text-onSurfaceSubdued mb-2"
          >Next project</Type
        >
        <Type variant="title-small" class="mb-4 md:mb-8">{{ caseTitle }}</Type>
        <Icon name="arrowright" class="w-8 h-8 md:w-12 md:h-12" />
      </div>
      <div class="pagination__cover">
        <img :src="imageSource" :alt="imageDescription" />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
.pagination {
  .mask {
    @apply rounded-lg lg:rounded-2xl;
    overflow: hidden;

    &:hover img {
      transform: scale(1.2);
    }
    &:hover .pagination__title svg {
      margin-left: 24px;
    }
    .pagination__title svg {
      transition: all 0.5s ease;
    }
    .pagination__cover {
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
    }
  }
}
</style>
