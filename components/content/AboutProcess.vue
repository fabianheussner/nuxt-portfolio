<template>
  <div
    id="process"
    class="wrapper grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-12 padding__v-large"
  >
    <div class="lg:col-span-5">
      <Type variant="title-small" class="pb-4 pt-2">{{ title }}</Type>
      <Type variant="body-large" class="text-onBackgroundSubdued">
        {{ message }}
      </Type>
    </div>
    <div class="lg:col-start-7 lg:col-span-6">
      <Accordion
        v-for="service in data.services"
        :key="service.title"
        :count="service.count"
        :title="service.title"
        :body="service.body"
      />
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
    message: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
    },
  },
  // data() {
  //   return {
  //     services: [
  //       {
  //         count: "01",
  //         title: "Design Thinking",
  //         text: "Lorem ipsum dolor sit amet…",
  //       },
  //       {
  //         count: "02",
  //         title: "Research and Validation",
  //         text: "Sed aliquam sodales mi…",
  //       },
  //       {
  //         count: "03",
  //         title: "UX and Wireframes",
  //         text: "Morbi quis nunc diam…",
  //       },
  //       {
  //         count: "04",
  //         title: "Design System Management",
  //         text: "Morbi quis nunc diam…",
  //       },
  //       {
  //         count: "05",
  //         title: "Illustration",
  //         text: "Morbi quis nunc diam…",
  //       },
  //     ],
  //   };
  // },
};
</script>
