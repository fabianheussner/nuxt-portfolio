<template>
  <div
    class="stage__about wrapper grid grid-cols-1 lg:grid-cols-12 lg:gap-x-8 py-40 items-center"
  >
    <div class="stage__about-title lg:col-span-6">
      <Type variant="display" class="title mb-8">
        {{ title }}
      </Type>
      <Button variant="primary" to="/" class="mr-4">{{ cta }}</Button>
    </div>
    <div
      class="stage__about-current lg:col-span-6 grid grid-cols-2 gap-x-8 text-onBackgroundSubdued"
    >
      <div class="job">
        <Type variant="body-medium">
          I currently work for<br />
          @{{ employer }}
        </Type>
      </div>
      <div class="details">
        <Type variant="body-medium">
          Hamburg, Germany<br />
          Local time {{ currentTime }}
        </Type>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    cta: {
      type: String,
      required: true,
    },
    employer: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      currentTime: "",
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
  .stage__about-title .title {
  }
  .stage__about-current {
    text-transform: uppercase;
  }
}
</style>
