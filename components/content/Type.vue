<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script>
const tags = {
  display: "h1",
  "title-large": "h2",
  "title-small": "h3",
  "headline-large": "h4",
  "headline-small": "h5",
  subline: "p",
  "body-large": "p",
  "body-medium": "p",
  "body-small": "p",
  "label-large": "p",
  "label-medium": "p",
  "label-small": "p",
  annotation: "p",
};

const sizes = {
  // Responsive Text Styles
  display: "text-5xl lg:text-7xl font-medium leading-none tracking-tighter",
  "title-large":
    "text-4xl lg:text-6xl font-medium leading-tight tracking-tighter",
  "title-small":
    "text-3xl lg:text-5xl font-medium leading-tight tracking-tighter",
  "headline-large":
    "text-2xl lg:text-4xl font-medium leading-snug tracking-tighter",
  "headline-small":
    "text-xl lg:text-3xl font-medium leading-snug tracking-tighter",

  subline: "text-xl lg:text-2xl leading-normal tracking-tighter",

  // Global Text Styles
  "label-large": "text-lg font-medium leading-normal tracking-tight",
  "body-large": "text-lg leading-normal tracking-tight",
  "label-medium": "text-base font-medium leading-normal tracking-tight",
  "body-medium": "text-base leading-normal tracking-tight",
  "label-small": "text-sm font-medium leading-normal tracking-tight",
  "body-small": "text-sm leading-normal tracking-tight",
  annotation: "text-xs leading-normal tracking-tight",
};

export default {
  name: "Type",
  props: {
    variant: {
      type: String,
      required: true,
      // Might not be needed - seems to work without -> check!
      validator: (value) =>
        [
          "display",
          "title-large",
          "title-small",
          "headline-large",
          "headline-small",
          "subline",
          "label-large",
          "label-medium",
          "label-small",
          "body-large",
          "body-medium",
          "body-small",
          "annotation",
        ].includes(value),
    },
    className: {
      type: String,
      default: "",
    },
    as: {
      type: String,
      default: "",
    },
  },
  computed: {
    tag() {
      return this.as || tags[this.variant];
    },
    classes() {
      return `${sizes[this.variant]} ${this.className}`;
    },
  },
};
</script>
