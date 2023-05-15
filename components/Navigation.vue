<template>
    <div class="navigation flex items-center px-8 py-4" :class="{ 'scrolled': isScrolled }">
        <div class="column logo">
            <NuxtLink to="/">
                <Icon name="logo" />
            </NuxtLink>
        </div>
        <div class="column">
            <TabBar />
        </div>
        <div class="column contact">
            <a href="mailto:fabian.heussner@gmx.de?subject=Your Subject" class="px-4 py-2 rounded-full border border-onBackground text-base leading-4 box-border">
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
    window.addEventListener('scroll', this.onScroll);
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },

  methods: {
    onScroll() {
      const el = this.$el;
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isVisible = rect.top + scrollTop < window.innerHeight;
      const isAtTop = window.pageYOffset === 0;
      this.isScrolled = isVisible && !isAtTop;
    },
  },
};
</script>

<style lang="scss" scoped>
    .navigation {
        position: sticky;
        top: 0;
        opacity: 1;
        
        .logo, .tab-bar, .contact {
            opacity: 1;
            transition: all 400ms ease-in-out;
        }

        &.scrolled .logo, &.scrolled .contact {
            opacity: 0;
            pointer-events: none;
            // Disabling interactivity needed or something like display: none
        }
        &.scrolled .tab-bar {
            @apply shadow rounded-full;
        }
    }
    .logo a:hover svg {
            fill: red !important;
    }
    .column {
        flex-grow: 1;
        flex-basis: 0;
        min-width: 0;

        &.logo svg {
          @apply w-10 h-10;
        }

        &.contact {
            text-align: right; 

            a {
              transition: all 200ms ease-in-out;
              &:hover {
                @apply bg-backgroundVariant text-onBackgroundVariant
              }
            }

        }
    }
</style>