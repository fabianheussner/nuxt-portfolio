<template>
  <footer class="footer px-6 pt-8 pb-28 lg:pt-8 lg:pb-8">
    <div class="footer__contact wrapper grid grid-cols-1 md:grid-cols-12 py-40">
      <Type variant="title-large" class="md:col-span-7 footer__contact-title">
        You got something to collaborate on? Then don't be a stranger and drop
        me a line.
      </Type>
    </div>
    <div
      class="bottom-wrapper grid grid-cols-1 md:grid-cols-3 items-center justify-center border-t border-onBackgroundVariantBorder py-4"
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

<style lang="scss" scoped>
.footer {
  @apply bg-backgroundVariant;
  @apply text-onBackgroundVariant;

  .footer__contact {
    .footer__contact-title {
      &::before {
        content: "";
        position: relative;
        display: inline-block;
        margin-right: 0.2em;
        top: 0.1em;
        width: 1em;
        height: 1em;
        background-image: url(/img/Avatar.png);
        background-size: cover;
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
