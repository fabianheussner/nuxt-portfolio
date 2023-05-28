<template>
  <div
    class="work__experience wrapper grid grid-cols-1 lg:grid-cols-12 gap-x-8 py-20"
  >
    <div class="lg:col-span-5">
      <Type variant="title-small" class="pb-4 pt-2">Experience</Type>
      <Type variant="body-large" class="text-onBackgroundSubdued"
        >Fast and transparent, the path to owning a website that will represent
        your brand in the best of light is only 4 weeks away.
      </Type>
    </div>
    <div class="lg:col-start-7 lg:col-span-6">
      <ListItem
        v-for="employer in employers"
        :key="employer.title"
        :primary="employer.position"
        :secondary="employer.company"
        :tertiary="employer.year"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employers: [
        {
          position: "Senior UX / UI Designer",
          company: "Mobimeo GmbH",
          year: "09/21 - today",
        },
        {
          position: "Product Designer",
          company: "Cellular GmbH",
          year: "10/20 - 08/21",
        },
        {
          position: "Art Director UX / UI",
          company: "Mutabor AG",
          year: "6/20 - 09/20",
        },
        {
          position: "Interaction Designer",
          company: "Deepblue Networks AG",
          year: "4/16 - 04/20",
        },
        {
          position: "BA Communication Design",
          company: "Fachhochschule Trier",
          year: "4/16 - 04/20",
        },
      ],
    };
  },
};
</script>

<style lang=""></style>
