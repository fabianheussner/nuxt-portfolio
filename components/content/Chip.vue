<template>
  <span
    :class="['chip', chipVariant]"
    class="inline-flex items-center rounded-md"
  >
    <Type variant="label-medium"><slot /></Type>
  </span>
</template>

<script>
export default {
  props: {
    label: String,
    variant: {
      type: String,
      default: 'chip-tag', // New prop with default variant
    },
  },
  computed: {
    chipVariant() {
      return this.variant;
    },
  },
};
</script>

<style lang="scss" scoped>
.chip {
  &.chip-tag {
    @apply bg-surface text-onSurface;
    @apply h-9;
    @apply px-3;
  }
  &.chip-statusError {
    @apply bg-errorContainer text-onErrorContainer;
    @apply h-7;
    @apply px-2;
  }
  &.chip-statusInfo {
    @apply bg-accentBlueContainer text-onAccentBlueContainer;
    @apply h-7;
    @apply px-2;
  }
}
</style>