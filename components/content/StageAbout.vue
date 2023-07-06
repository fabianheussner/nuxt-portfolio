<template>
  <div
    class="stage__about grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 items-center md:min-h-[35.5rem] margin__v-large"
    v-motion="motionFadeEnter"
  >
    <div class="stage__about-title md:col-span-6">
      <Type variant="subline" class="mt-6 ml-1 text-onSurfaceSubdued">
        {{ subline }}
      </Type>
      <Type variant="display" class="mt-4 mb-12">
        {{ title }}
      </Type>
      <Button
        v-if="primaryLabel"
        variant="primary"
        :to="primaryLink"
        class="mr-4"
      >
        {{ primaryLabel }}
      </Button>
    </div>
    <div
      class="stage__about-current md:col-span-6 grid grid-cols-2 gap-x-4 text-onBackgroundSubdued"
    >
      <div class="job">
        <Type variant="body-small" class="md:inline-block md:float-right">
          I currently work for<br />
          @{{ employer }}
        </Type>
      </div>
      <div class="details">
        <Type variant="body-small" class="md:inline-block md:float-right">
          Hamburg, Germany<br />
          Local time {{ currentTime }}
        </Type>
      </div>
    </div>
  </div>
</template>

<script>
import { motionFadeEnter } from "./scrollmotion";

export default {
  props: {
    subline: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    primaryLabel: {
      type: String,
    },
    primaryLink: {
      type: String,
    },
    employer: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      currentTime: "",
      motionFadeEnter,
    };
  },
  created() {
    this.updateTime(); // Call the function immediately
    setInterval(this.updateTime, 1000); // Update time every second
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Berlin",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.stage__about {
  .stage__about-current {
    text-transform: uppercase;
  }
}
</style>
