<template>
    <nav class="tab-bar flex justify-center">
      <ul class="rounded-full text-base bg-surface bg-opacity-90 inline-flex text-center">
        <li v-for="link in links" :key="link.label" class="grow">
          <NuxtLink :to="link.url" class="tab h-16 rounded-full flex items-center justify-center"
            :class="{ 'router-link-exact-active': $route.path === link.url }">
            <Icon :name="$route.path === link.url ? link.activeIcon : link.icon" class="mr-2"/>
            <Type variant="label-medium">
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
          { label: 'Home', url: '/', icon: 'home', activeIcon: 'homefilled' },
          { label: 'Work', url: '/work', icon: 'work', activeIcon: 'workfilled' },
          { label: 'About', url: '/about', icon: 'about', activeIcon: 'aboutfilled' },
        ]
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .tab-bar ul {
    width: 600px;
    backdrop-filter: blur(8px);
    .tab {
      transition: all 200ms ease-in-out;
      &.router-link-exact-active {
        @apply bg-surfaceVariant bg-opacity-60;
        @apply text-onSurfaceVariant;
      }

      &:hover {
        @apply text-onSurfaceSubdued;

        svg path {
          fill: red !important;
        }
      }
      
    }
  }
  </style>
  