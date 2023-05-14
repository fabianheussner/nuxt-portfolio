<template>
    <component :is="tag" :class="classes">
      <slot />
    </component>
  </template>
  
  <script>
  const tags = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    body: "p",
    "body-small": "p",
    small: "span"
  };
  
  const sizes = {
    // Responsive Text Styles
    h1: "text-5xl font-medium sm:text-4xl tracking-tighter",
    h2: "text-4xl font-medium sm:text-3xl",
    h3: "text-3xl font-medium sm:text-2xl",
    h4: "text-2xl font-medium sm:text-1xl",
    h5: "text-xl font-medium sm:text-lg",
    body: "text-lg sm:text-md",
    "body-small": "text-md sm:text-sm",
    small: "text-sm sm:text-xs",

    // Global Text Styles
    "body-large": "text-lg tracking-tight",
    "body-medium": "text base tracking-tight",
    "body-small": "text-sm tracking-tight",
    "label-large": "text-lg font-medium tracking-tight",
    "label-medium": "text-base font-medium tracking-tight",
    "label-small": "text-sm font-medium tracking-tight",
    "annotation": "text-xs tracking-tight",
  };
  
  export default {
    name: "Type",
    props: {
      variant: {
        type: String,
        required: true,
        validator: (value) =>
          ["h1", "h2", "h3", "h4", "h5", "body", "body-small", "small"].includes(
            value
          )
      },
      className: {
        type: String,
        default: ""
      },
      as: {
        type: String,
        default: ""
      }
    },
    computed: {
      tag() {
        return this.as || tags[this.variant];
      },
      classes() {
        return `${sizes[this.variant]} ${this.className}`;
      }
    }
  };
  </script>
  