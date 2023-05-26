<template>
  <div class="stage__about wrapper grid grid-cols-1 lg:grid-cols-12 py-40">
    <div class="stage__about-title lg:col-span-6">
      <Type variant="display" class="title">
        Hey, I'm Fabian. I help startups and established businesses to grow and
        ideate.
      </Type>
      <Button variant="primary" to="/" class="mr-4">Discover my process</Button>
    </div>
    <div
      class="stage__about-current lg:col-span-5 lg:col-end-13 grid grid-cols-2 gap-x-8 text-onBackgroundSubdued"
    >
      <div class="job">
        <Type variant="body-medium">
          I currently work for<br />
          @Mobimeo GmbH
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
    &::before {
      content: "";
      position: relative;
      display: inline-block;
      margin-right: 16px;
      top: 0.2em;
      width: 1.1em;
      height: 1.1em;
      background-image: url(/img/Avatar.png);
      background-size: cover;
    }
  }
  .stage__about-current {
    text-transform: uppercase;
  }
}
</style>
