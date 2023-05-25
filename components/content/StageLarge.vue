<template>
  <div class="stage-large wrapper py-40 grid grid-cols-1 lg:grid-cols-2 gap-20">
    <div class="stage-title">
      <Type variant="body-large" class="ml-2 text-onSurfaceSubdued">
        Fabian Heußner –––––– Senior UX / UI Designer
      </Type>
      <Type variant="display" class="mt-4 mb-12">
        I strive to connect people's needs with aesthetics.
      </Type>
      <Button variant="primary" to="/" class="mr-4">Discover work</Button>
      <Button variant="secondary" to="/about">Get to know me</Button>
    </div>
    <div class="stage-details grid grid-cols-2 mt-20 text-onSurfaceSubdued">
      <div class="job mr-6">
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
.separator {
  // this creates an unfortunate duplicate of the content Oo
  @apply inline-block w-10 mx-4 align-middle;
}
.highlight {
  display: inline-block;
  @apply text-onAccentBlueContainer;
  @apply bg-accentBlueContainer;
  @apply p-4;
  @apply rounded-xl;
}
.highlight:nth-child(2) {
  @apply bg-accentPurpleContainer;
  @apply text-onAccentPurpleContainer;
}
.stage-details {
  text-transform: uppercase;
}
</style>
