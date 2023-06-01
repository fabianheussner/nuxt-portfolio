<template>
  <div class="stage__work wrapper grid grid-cols-1 lg:grid-cols-12 my-40">
    <div class="stage__work-title lg:col-span-7">
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
