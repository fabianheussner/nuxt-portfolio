<template>
  <div
    class="navigation__large flex justify-between items-center px-6 py-4"
    :class="{ scrolled: isScrolled }"
  >
    <div class="navigation__large-logo">
      <NuxtLink to="/">
        <Icon name="logo" />
      </NuxtLink>
    </div>
    <div class="navigation__large-menu mx-auto hidden lg:block">
      <TabBar />
    </div>
    <div class="navigation__large-contact">
      <a
        href="mailto:fabian.heussner@gmx.de?subject=Your Subject"
        class="px-4 py-2 rounded-full border border-onBackground text-base leading-4 box-border"
      >
        Contact
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      this.isScrolled = scrollTop > 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation__large {
  z-index: 9999;
  position: sticky;
  top: 0;

  .navigation__large-menu {
    transition: all 300ms ease-in-out;
  }
  &.scrolled .navigation__large-menu {
    transform: scale(0.9);
    @apply shadow-md rounded-full;
  }

  .navigation__large-logo,
  .navigation__large-contact {
    opacity: 1;
    transition: all 300ms ease-in-out;
  }

  &.scrolled .navigation__large-logo,
  &.scrolled .navigation__large-contact {
    opacity: 0;
    pointer-events: none;
  }

  .navigation__large-logo {
    svg {
      @apply w-10 h-10;
    }
  }

  .navigation__large-contact {
    text-align: right;

    a {
      transition: all 200ms ease-in-out;
      &:hover {
        @apply bg-backgroundVariant text-onBackgroundVariant;
      }
    }
  }
}
</style>
