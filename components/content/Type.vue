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
    h1: "text-5xl font-medium sm:text-4xl tracking-tighter",
    h2: "text-4xl font-medium sm:text-3xl",
    h3: "text-3xl font-medium sm:text-2xl",
    h4: "text-2xl font-medium sm:text-1xl",
    h5: "text-xl font-medium sm:text-lg",
    body: "text-lg sm:text-md",
    "body-small": "text-md sm:text-sm",
    small: "text-sm sm:text-xs"
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
  