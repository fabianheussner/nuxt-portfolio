<template>
  <nav class="tab__bar flex justify-center">
    <ul class="rounded-full text-base bg-surface inline-flex text-center">
      <li v-for="link in links" :key="link.label" class="grow">
        <NuxtLink
          :to="link.url"
          class="tab h-16 rounded-full flex items-center justify-center text-onSurfaceSubdued"
          :class="{ 'router-link-exact-active': $route.path === link.url }"
        >
          <Icon
            :name="$route.path === link.url ? link.activeIcon : link.icon"
            class="mr-2"
          />
          <Type variant="label-medium">
            {{ link.label }}
          </Type>
          <Badge
            v-if="link.label === 'Work' && $route.path !== link.url"
            class="badge__counter"
          />
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
.tab__bar ul {
  width: 600px;
  .tab {
    position: relative;
    transition: all 200ms ease-in-out;
    &.router-link-exact-active,
    &.router-link-active {
      @apply bg-surfaceVariant text-onSurfaceVariant;
    }

    &:hover {
      @apply text-onSurface;
    }

    // svg {
    //   @apply w-5 h-5;
    // }

    .badge__counter {
      position: absolute;
      top: 16px;
      right: 40px;
    }
  }
}
</style>
