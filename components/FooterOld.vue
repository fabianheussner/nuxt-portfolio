<template>
  <footer class="footer px-6 pt-8 pb-28 lg:pt-8 lg:pb-8">
    <div class="contact py-40 text-center">
      <Type variant="body-large" class="mb-4 text-onBackgroundVariantSubdued"
        >Don't be a stranger.</Type
      >
      <a
        href="mailto:fabian.heussner@gmx.de?subject=Your subject"
        class="mailto underline-animation"
      >
        <Type variant="display">Drop me a line</Type>
      </a>
    </div>
    <div
      class="bottom-wrapper grid grid-cols-1 md:grid-cols-3 items-center justify-center"
    >
      <div class="copyright column order-3 md:order-1">
        <Type variant="body-small" class="text-onBackgroundVariantSubdued">
          © {{ new Date().getFullYear() }}, Fabian Heussner
        </Type>
      </div>
      <div class="social column order-1 md:order-2">
        <Button variant="outline" to="/" class="mr-4">LinkedIn</Button>
        <Button variant="outline" to="/">Dribbble</Button>
      </div>
      <div class="legal column order-2 md:order-3">
        <NuxtLink to="/" class="inline-block p-4">
          <Type variant="label-small">Privacy Policy</Type>
        </NuxtLink>
        <NuxtLink to="legal/imprint" class="inline-block ml-4 p-4">
          <Type variant="label-small">Imprint</Type>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  @apply bg-backgroundVariant;
  @apply text-onBackgroundVariant;

  .contact {
    .underline-animation {
      display: inline-block;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 3px;
        bottom: -12px;
        left: 0;
        @apply bg-onBackgroundVariant;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }
      &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }

  .column {
    &.copyright {
      @apply text-center md:text-left;
    }
    &.social {
      @apply text-center mb-20 md:mb-0;
    }
    &.legal {
      @apply text-center md:text-right;
    }
  }

  &::before {
    content: "";
    display: block;
    position: relative;
    top: 0;
    width: calc(100% + 48px);
    height: 32px;
    margin-top: -32px;
    margin-left: -24px;
    margin-right: -24px;
    @apply bg-background rounded-b-2xl;
  }
}
</style>
