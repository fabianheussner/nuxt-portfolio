<template>
  <div
    class="navigation__large sticky top-4 mx-6 my-4 z-50"
    :class="{ scrolled: isScrolled }"
  >
    <div class="relative flex h-16 items-center">
      <div class="navigation__large-logo absolute left-0">
        <NuxtLink to="/">
          <Icon name="logo" />
        </NuxtLink>
      </div>
      <div class="navigation__large-menu mx-auto hidden lg:block">
        <TabBar />
      </div>
      <div class="navigation__large-contact absolute right-0">
        <a
          href="mailto:fabian.heussner@gmx.de?subject=Your Subject"
          class="px-4 py-2 rounded-full border border-onBackground text-base font-medium leading-4 tracking-tight box-border"
        >
          Say hello
        </a>
      </div>
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
      const scrollTop = window.scrollY || window.pageYOffset;
      this.isScrolled = scrollTop > 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation__large {
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
    transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
    a {
      transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      &:hover {
        @apply bg-backgroundVariant text-onBackgroundVariant;
      }
    }
  }
}
</style>
