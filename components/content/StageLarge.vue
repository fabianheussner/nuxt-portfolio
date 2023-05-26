<template>
  <div
    class="stage__large wrapper py-28 grid grid-cols-1 lg:grid-cols-12 gap-x-8 items-center"
  >
    <div class="stage__large-title lg:col-span-6 order-last lg:order-first">
      <Type variant="body-large" class="mt-6 ml-2 text-onSurfaceSubdued">
        Fabian Heußner –––––– Senior UX / UI Designer
      </Type>
      <Type variant="display" class="mt-4 mb-12">
        I strive to connect people's needs with aesthetics.
      </Type>
      <Button variant="primary" to="/" class="mr-4">Discover work</Button>
      <Button variant="secondary" to="/about">Get to know me</Button>
    </div>
    <div class="stage__large-hero lg:col-span-5 lg:col-end-13">
      <!-- <img src="/img/hero-4.png" alt="Workflow illustration" /> -->
      <video autoplay muted loop>
        <source src="/video/stage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.separator {
  // this creates an unfortunate duplicate of the content Oo
  @apply inline-block w-10 mx-4 align-middle;
}

.stage-details {
  text-transform: uppercase;
}
</style>
