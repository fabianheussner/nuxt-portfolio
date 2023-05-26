<template>
  <div class="accordion" v-for="service in services" :key="service.title">
    <div class="accordion__title" @click="isSelected">
      <Type variant="headline-small">
        <span class="accordion__title-count text-onBackgroundSubdued">
          {{ service.count }}
        </span>
        <span class="accordion__title-default">
          {{ service.title }}
        </span>
      </Type>
      <Icon
        name="add"
        class="accordion-icon text-onBackgroundSubdued w-5 h-5"
      />
    </div>
    <div class="accordion__content">
      <Type variant="body-large">
        {{ service.text }}
      </Type>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activePanel: null,
    };
  },
  mounted() {},
  methods: {
    isSelected(event) {
      const target = event.currentTarget; // Use currentTarget instead of target

      const nextNode = target.nextElementSibling;
      if (target.matches(".active")) {
        target.classList.remove("active");
        if (nextNode) {
          nextNode.style.height = 0;
        }
      } else {
        this.panelReset();
        target.classList.add("active");
        if (nextNode) {
          nextNode.style.height = nextNode.scrollHeight + "px";
        }
      }
    },
    panelReset() {
      const allHandles = [...document.querySelectorAll(".accordion__title")];
      allHandles.forEach((handle) => {
        handle.classList.remove("active");
        handle.nextElementSibling.style.height = 0;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  @apply border-b border-onBackgroundBorder;

  .accordion__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    @apply py-5 cursor-pointer;
    transition: all 300ms ease-in-out;

    .accordion__title-count {
      @apply inline-block w-14;
      transition: all 300ms ease-in-out;
    }

    &.active {
    }

    &:hover {
      @apply bg-background;
      transform: scaleX(1.02);
    }
    // &:hover .accordion__title-count {
    //   @apply text-onBackground;
    // }
  }
  .accordion__content {
    height: 0;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    p {
      @apply px-14 pt-4 pb-10;
    }
  }
}
.accordion-icon {
  transition: all 0.3s ease-in-out;
}
.active .accordion-icon {
  transform: rotate(135deg);
}
</style>
