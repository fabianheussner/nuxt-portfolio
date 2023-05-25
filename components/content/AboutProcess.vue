<template>
  <div
    id="process"
    class="wrapper grid grid-cols-1 gap-x-8 lg:grid-cols-12 py-20"
  >
    <div class="lg:col-span-5">
      <Type variant="title-small">My way of getting things done</Type>
      <Type variant="body-large"
        >Fast and transparent, the path to owning a website that will represent
        your brand in the best of light is only 4 weeks away. Standing by the
        Waterfall methodology, I assure a step by step completion of the whole
        process.</Type
      >
    </div>
    <div class="lg:col-start-7 lg:col-span-6">
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
          text: "Lorem ipsum dolor sit amet…",
        },
        {
          count: "02",
          title: "Research and Validation",
          text: "Sed aliquam sodales mi…",
        },
        {
          count: "03",
          title: "UX and Wireframes",
          text: "Morbi quis nunc diam…",
        },
        {
          count: "04",
          title: "Design System Management",
          text: "Morbi quis nunc diam…",
        },
        {
          count: "05",
          title: "Illustration",
          text: "Morbi quis nunc diam…",
        },
      ],
    };
  },
};
</script>
