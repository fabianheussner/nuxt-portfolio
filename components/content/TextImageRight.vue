<template>
  <div class="text__image-right wrapper grid grid-cols-1 md:grid-cols-12 my-20">
    <div
      class="text md:col-span-6 lg:col-span-8 bg-surface p-6 lg:p-20 rounded-b-2xl md:rounded-l-2xl md:rounded-r-none order-2 md:order-1"
    >
      <div class="icons flex mb-12">
        <Icon name="star" />
        <Icon name="waves" />
        <Icon name="leaf" />
      </div>
      <Type variant="label-large" class="text-onSurfaceSubdued mb-2">
        {{ label }}
      </Type>
      <Type variant="title-small" class="mb-4">
        {{ title }}
      </Type>
      <Type variant="body-large">
        {{ message }}
      </Type>
    </div>
    <div class="image md:col-span-6 lg:col-span-4 order-1 md:order-2">
      <img
        src="/img/img3.png"
        alt=""
        class="md:h-full rounded-t-2xl md:rounded-r-2xl md:rounded-l-none object-cover"
      />
    </div>
  </div>
</template>

<script>
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
