<template>
  <nav
    class="tab__bar flex justify-center fixed bottom-0 w-full block lg:hidden"
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
    };
  },
};
</script>

<style lang="scss" scoped>
.tab__bar {
  @apply pt-4 pb-6;
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
