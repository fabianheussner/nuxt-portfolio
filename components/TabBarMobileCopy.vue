<template>
  <client-only>
    <nav
      class="tab__bar flex justify-center fixed bottom-0 w-full"
      v-show="shouldShowTabBar"
    >
      <ul class="rounded-full text-base inline-flex text-center max-w-sm">
        <li v-for="link in links" :key="link.label" class="grow">
          <NuxtLink
            :to="link.url"
            class="tab h-14 rounded-full flex items-center justify-center text-onSurfaceSubdued"
            :class="{ 'router-link-exact-active': $route.path === link.url }"
          >
            <Icon
              :name="$route.path === link.url ? link.activeIcon : link.icon"
            />
            <Type variant="label-small">
              {{ link.label }}
            </Type>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          label: "Home",
          url: "/",
          icon: "home",
          activeIcon: "homefilled",
        },
        {
          label: "Work",
          url: "/work",
          icon: "work",
          activeIcon: "workfilled",
        },
        {
          label: "About",
          url: "/about",
          icon: "about",
          activeIcon: "aboutfilled",
        },
      ],
      scrollPosition: 0,
    };
  },
  mounted() {
    this.$refs.clientScroll.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$refs.clientScroll.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = this.$refs.clientScroll.scrollTop;
    },
  },
  computed: {
    shouldShowTabBar() {
      return this.scrollPosition <= this.$refs.clientScroll.scrollTop;
    },
  },
};
</script>

<style lang="scss" scoped>
.tab__bar {
  @apply p-4;
  ul {
    @apply mx-auto bg-background shadow-md;
    width: 100%;
    display: flex;
    .tab {
      flex-direction: column;
      width: 100%;
      flex: 1 1 0px;
      transition: all 200ms ease-in-out;

      &.router-link-exact-active {
        @apply bg-surface text-onSurface;
      }

      &:hover {
        @apply text-onSurface;
      }

      svg {
        @apply w-5 h-5;
      }
    }
  }
}
</style>
