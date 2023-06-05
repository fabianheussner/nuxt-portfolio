<template>
  <footer class="footer">
    <div
      class="footer__contact wrapper grid grid-cols-1 lg:grid-cols-12 py-40 items-end"
    >
      <Type
        variant="title-large"
        class="footer__contact-title lg:col-span-6 mb-8 lg:mb-0"
      >
        Let’s talk about a job, collaboration or any idea you may have in mind.
      </Type>
      <div class="footer_contact-button lg:col-span-6">
        <a
          href=""
          class="button pl-8 pr-1 rounded-full bg-background text-onBackground text-xl tracking-tight font-medium items-center"
        >
          Say hello…
          <span class="icon">
            <Icon name="plane" />
          </span>
        </a>
      </div>
    </div>
    <div
      class="bottom-wrapper grid grid-cols-1 lg:grid-cols-3 items-center justify-center border-t border-onBackgroundVariantBorder"
    >
      <div class="copyright column order-3 lg:order-1">
        <Type variant="body-small" class="text-onBackgroundVariantSubdued">
          © {{ new Date().getFullYear() }}, Fabian Heussner
        </Type>
      </div>
      <div class="social column order-1 lg:order-2">
        <Button variant="outline" to="/" class="mr-4">LinkedIn</Button>
        <Button variant="outline" to="/">Dribbble</Button>
      </div>
      <div class="legal column order-2 lg:order-3">
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

    .footer_contact-button {
      @apply text-left lg:text-right;
      .button {
        display: inline-flex;
        line-height: 4rem;
        span {
          display: inherit;
          width: 3.5rem;
          height: 3.5rem;
          margin-left: 5rem;
          transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          @apply bg-backgroundVariant text-onBackgroundVariant items-center justify-center rounded-full;
        }
        &:hover span {
          margin-left: 4rem;
        }
      }
    }
  }

  .bottom-wrapper {
    @apply px-6 pt-8 pb-28 lg:py-8;
    .column {
      &.copyright {
        @apply text-center lg:text-left;
      }
      &.social {
        @apply text-center mb-20 lg:mb-0;
      }
      &.legal {
        @apply text-center lg:text-right;
      }
    }
  }

  &::before {
    content: "";
    display: block;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1rem;
    @apply bg-background rounded-b-2xl;
  }
}
</style>
