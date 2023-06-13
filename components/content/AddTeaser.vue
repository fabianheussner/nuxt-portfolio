<template>
  <div
    class="teaser__add flex flex-grow bg-surface rounded-2xl"
    v-motion="motionFadeUp"
  >
    <a
      href="mailto:fabian.heussner@gmx.de?subject=Your Subject"
      class="teaser__add-frame flex flex-grow items-center m-4 md:m-12 border-2 border-dashed bg-surfaceVariant bg-opacity-50 border-onSurface border-opacity-20 rounded-xl"
    >
      <span class="teaser__add-body px-4 py-8 mx-auto text-center">
        <Icon name="website" class="w-16 h-16 mb-2 text-onSurface" />
        <Type variant="subline" class="mb-8"
          >Add your project to the list.</Type
        >
        <span class="button__link">Add project </span>
      </span>
    </a>
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
.teaser__add-frame {
  transform-origin: center;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: copy;

  .teaser__add-body {
    transform-origin: center;
    transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    .button__link {
      display: inline-block;
      @apply px-8 py-4 rounded-full bg-backgroundVariant text-base font-medium tracking-tight text-onBackgroundVariant;
    }
  }
  &:hover {
    transform: scale(0.98);
    @apply bg-accentBlueContainer border-onAccentBlueContainer border-opacity-30;

    .teaser__add-body {
      transform: scale(1.0204);
      // transform: scale(1.0408);
    }
  }
}
</style>
