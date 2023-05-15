<template>
    <component :is="tag" :class="classes">
      <slot />
    </component>
  </template>
  
  <script>
  const tags = {
    display: "h1",
    "title-medium": "h2",
    "title-small": "h3",
    "headline-medium": "h4",
    "headline-small": "h5", 
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
    display: "text-6xl md:text-7xl font-medium tracking-tighter",
    "title-medium": "text-5xl md:text-6xl font-medium tracking-tighter",
    "title-small": "text-4xl md:text-5xl font-medium tracking-tighter",
    "headline-medium": "text-3xl md:text-4xl font-medium tracking-tighter",
    "headline-small": "text-2xl md:text-3xl font-medium tracking-tighter",

    // Global Text Styles
    "body-large": "text-lg tracking-tight",
    "body-medium": "text base tracking-tight",
    "body-small": "text-sm tracking-tight",
    "label-large": "text-lg font-medium tracking-tight",
    "label-medium": "text-base font-medium tracking-tight",
    "label-small": "text-sm font-medium tracking-tight",
    annotation: "text-xs tracking-tight",
  };
  
  export default {
    name: "Type",
    props: {
      variant: {
        type: String,
        required: true,
        // Might not be needed - seems to work without -> check!
        validator: (value) =>
          ["display", 
          "title-medium", 
          "title-small", 
          "headline-medium", 
          "headline-small", 
          "label-large", 
          "label-medium", 
          "label-small", 
          "body-large", 
          "body-medium", 
          "body-small", 
          "annotation"].includes(
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
  