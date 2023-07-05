<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>
