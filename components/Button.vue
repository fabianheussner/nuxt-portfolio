<template>
  <nuxt-link :to="to" :class="['button', `button-${variant}`]">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "primary",
      validator: (value) => {
        return ["primary", "secondary"].includes(value);
      },
    },
    to: {
      type: String,
      default: "/",
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  @apply px-6 py-3;
  @apply rounded-full;
  @apply text-base;
  @apply tracking-tight;
  @apply font-medium;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}

.button-primary {
  @apply bg-backgroundVariant;
  @apply text-onBackgroundVariant;

  &:hover {
    @apply bg-onBackgroundVariantBorder;
    @apply text-onBackgroundVariant;
  }
}

.button-secondary {
  @apply bg-surface;
  @apply text-onSurface;

  &:hover {
    @apply bg-surfaceVariant;
    @apply text-onSurfaceVariant;
  }
}
</style>
