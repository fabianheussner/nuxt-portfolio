<template>
  <div class="accordion">
    <div class="accordion__title" @click="isSelected">
      <Type variant="headline-small">
        <span class="accordion__title-count text-onBackgroundSubdued">
          {{ leading }}
        </span>
        <span class="accordion__title-default">
          {{ primary }}
        </span>
      </Type>
      <Icon
        name="add"
        class="accordion-icon text-onBackgroundSubdued w-5 h-5"
      />
    </div>
    <div class="accordion__content">
      <Type variant="body-large">
        {{ expanded }}
      </Type>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leading: {
      type: String,
      required: true,
    },
    primary: {
      type: String,
      required: true,
    },
    expanded: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      activePanel: null,
    };
  },
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
      @apply inline-block w-8 lg:w-14;
      transition: all 300ms ease-in-out;
    }

    &:hover {
      @apply bg-surface;
    }
    &:hover .accordion__title-count {
      @apply text-onBackground;
    }
  }
  .accordion__content {
    height: 0;
    overflow: hidden;
    transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

    p {
      @apply lg:pl-14 lg:pr-5 pt-4 pb-10;
    }
  }
}
.accordion-icon {
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.active .accordion-icon {
  transform: rotate(135deg);
}
</style>
