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
      <Type variant="label-large" class="text-onSurfaceSubdued mb-2"
        >Besides work…
      </Type>
      <Type variant="title-small" class="mb-4"
        >I love cycling, vietnamese coconut coffee and plants.
      </Type>
      <Type variant="body-large">
        Outside of work you can often meet me on my road bike in the greater
        Hamburg area or even crossing the Alps. I draw inspiration and strength
        primarily from nature, my love for mountaineering and the photography of
        impressive architecture.
      </Type>
    </div>
    <div class="image md:col-span-6 lg:col-span-4 order-1 md:order-2">
      <img
        src="/img/img3.png"
        alt=""
        class="h-full rounded-t-2xl md:rounded-r-2xl md:rounded-l-none object-cover"
      />
    </div>
  </div>
</template>

<script>
export default {};
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
      min-height: 400px;
    }
  }
}
</style>
