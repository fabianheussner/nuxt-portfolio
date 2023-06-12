<template>
  <div
    class="teaser__add flex flex-grow bg-surface rounded-2xl"
    v-motion="motionFadeUp"
  >
    <div
      class="teaser__add-frame flex flex-grow items-center m-4 md:m-12 border-2 border-dashed border-onSurfaceBorder rounded-xl"
    >
      <div class="teaser__add-body px-4 py-8 mx-auto text-center">
        <Icon name="website" class="w-16 h-16 mb-2 text-onSurfaceBorder" />
        <Type variant="subline" class="mb-8"
          >Add your project to the list.</Type
        >
        <a
          href="mailto:fabian.heussner@gmx.de?subject=Your Subject"
          class="button__link"
          >Add project</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { motionFadeUp } from "./scrollmotion";

export default {
  data() {
    return {
      motionFadeUp,
    };
  },
};
</script>

<style lang="scss" scoped>
.button__link {
  display: inline-block;
  @apply px-8 py-4 rounded-full border bg-backgroundVariant text-base font-medium tracking-tight text-onBackgroundVariant;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    @apply bg-onBackgroundVariantBorder text-onBackgroundVariant;
  }
}
</style>
