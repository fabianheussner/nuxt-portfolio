<template>
  <div class="accordion" v-for="service in services" :key="service.title">
    <!-- <h5 class="accordion__title" @click="makeActive">
      {{ service.title }}
    </h5> -->
    <div class="accordion__title" @click="makeActive">
      <Type variant="headline-small">
        <span class="highlight text-onBackgroundSubdued">
          {{ service.count }}
        </span>
        {{ service.title }}
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
    makeActive(event) {
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
}
.accordion__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: 0;
  border-radius: 3px;
  @apply py-4 px-4;
}
.accordion__title.active {
}
.accordion__title:hover {
}
.accordion__content {
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
.accordion__content p {
  padding: 20px;
  margin-block: 5px 0;
  border-radius: 3px;
  text-align: start;
}
.accordion-icon {
  transition: all 0.3s ease-in-out;
}
.active .accordion-icon {
  transform: rotate(135deg);
}
</style>
