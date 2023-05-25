<template>
  <div class="stage__medium wrapper grid grid-cols-1 lg:grid-cols-2 py-40">
    <div class="lg:col-span-1">
      <Type variant="display" class="stage__medium-title">
        Hey, I'm Fabian. I help startups and established businesses to grow and
        ideate.
      </Type>
      <Button variant="primary" to="/" class="mr-4">Discover my process</Button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.stage__medium {
  .stage__medium-title {
    &::before {
      content: "";
      position: relative;
      display: inline-block;
      margin-right: 16px;
      top: 0.2em;
      width: 1.2em;
      height: 1.2em;
      background-image: url(/img/Avatar.png);
      background-size: cover;
    }
  }
}
</style>
