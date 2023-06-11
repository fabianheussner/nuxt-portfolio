<template>
  <footer class="footer">
    <div
      class="footer__contact wrapper grid grid-cols-1 lg:grid-cols-12 gap-y-16 py-40 items-end"
      v-motion="motionFadeUp"
    >
      <Type variant="title-large" class="footer__contact-title lg:col-span-6">
        Let's talk about opportunities or any idea you may have in mind.
      </Type>
      <div class="footer_contact-button lg:col-span-6">
        <a
          href="mailto:fabian.heussner@gmx.de?subject=Your Subject"
          class="button pl-8 pr-1 rounded-full bg-background text-onBackgroundSubdued text-xl tracking-tight font-medium items-center"
        >
          Say hello…
          <span class="icon">
            <Icon name="plane" class="w-7 h-7" />
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
        <a
          href="https://www.linkedin.com/in/fabian-heussner-91a0a5104/"
          target="_blank"
          class="button__link mr-4"
        >
          LinkedIn
        </a>
        <a
          href="https://dribbble.com/FabianH"
          target="_blank"
          class="button__link"
        >
          Dribbble
        </a>
      </div>
      <div class="legal column order-2 lg:order-3">
        <NuxtLink to="privacy-policy" class="inline-block p-4">
          <Type variant="label-small">Privacy Policy</Type>
        </NuxtLink>
        <NuxtLink to="imprint" class="inline-block ml-4 p-4">
          <Type variant="label-small">Imprint</Type>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script>
import { motionFadeUp } from "./content/scrollmotion.js";

export default {
  data() {
    return {
      motionFadeUp,
    };
  },
};
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
        top: 0.2em;
        width: 1.2em;
        height: 1.2em;
        background-image: url(/img/Avatar.png);
        background-size: cover;
      }
    }

    .footer_contact-button {
      @apply text-center;
      .button {
        justify-content: space-between;
        display: inline-flex;
        line-height: 4rem;
        @apply w-full max-w-xs sm:w-auto;
        span {
          display: inherit;
          width: 3.5rem;
          height: 3.5rem;
          margin-left: 4rem;
          transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          @apply bg-backgroundVariant text-onBackgroundVariant items-center justify-center rounded-full;
        }

        &::before {
          content: "";
          position: absolute;
          display: block;
          margin-left: -4px;
          width: 2px;
          height: 24px;
          opacity: 0;
          @apply bg-onBackground;
        }
        &:hover::before {
          animation: caret 1s infinite;
        }
        &:hover span {
          margin-left: 8rem;
        }

        @keyframes caret {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
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

        a:hover {
          text-decoration: underline;
        }
      }

      .button__link {
        display: inline-block;
        @apply px-6 py-3 rounded-full border border-onBackgroundVariant text-base font-medium tracking-tight text-onBackgroundVariant;
        cursor: pointer;
        transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

        &:hover {
          @apply bg-background text-onBackground;
        }
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
