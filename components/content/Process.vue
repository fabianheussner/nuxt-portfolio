<template>
  <div class="wrapper grid grid-cols-2">
    <div class="column">
      <Type variant="title-small">I can support you with</Type>
    </div>
    <div class="column">
      <Accordion :services="services" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          count: "01",
          title: "Design Thinking",
          text: `Lorem ipsum dolor sit amet…`,
        },
        {
          count: "02",
          title: "Research",
          text: `Sed aliquam sodales mi...`,
        },
        {
          count: "03",
          title: "UX and Wireframes",
          text: `Morbi quis nunc diam...`,
        },
      ],
    };
  },
};
</script>
