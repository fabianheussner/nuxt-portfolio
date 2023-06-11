<template>
  <div
    class="stage__large grid grid-cols-1 md:grid-cols-12 gap-x-8 items-center padding__v-large"
    v-motion-fade-visible
  >
    <div class="stage__large-title md:col-span-6 order-2 md:order-1">
      <Type variant="display" class="mt-6">
        I connect people's needs with aesthetics.
      </Type>
      <Type variant="subline" class="mt-4 mb-12 ml-2 text-onSurfaceSubdued">
        Hey, I'm Fabian and digital Product Designer by heart.
      </Type>
      <Button variant="primary" to="/work" class="mr-4">See work</Button>
      <Button variant="secondary" to="/about">Get to know me</Button>
    </div>
    <div
      class="stage__large-hero md:col-span-6 lg:col-span-5 lg:col-end-13 mx-auto order-1 md:order-2"
    >
      <video autoplay muted loop playsinline>
        <source src="/video/Stage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// video {
//   width: 100%;
//   max-width: 500px;
//   height: auto;
// }
</style>
