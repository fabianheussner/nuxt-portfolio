<template>
  <div class="list__item flex">
    <div class="list__item-primary">
      <Type variant="body-large">Company name</Type>
    </div>
    <div class="list__item-secondary">
      <Type variant="body-large">/16 - /20</Type>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list__item {
  @apply flex justify-between py-6 border-b border-onBackgroundBorder;
  .list__item-primary {
  }
  .list__item-secondary {
  }
}
</style>
