<template>
  <div
    class="stage__work wrapper grid grid-cols-1 md:grid-cols-12 md:gap-x-8 py-20 md:py-40"
  >
    <div class="stage__work-title md:col-span-6">
      <Type variant="display">
        <slot />
      </Type>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
