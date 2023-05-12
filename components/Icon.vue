<template>
    <component
      :is="iconComponent"
      role="img"
      class="inline-block fill-current"
      style="height: 24px; width: 24px;"
    />
  </template>
  
  <script>
  import Home from '~/assets/icons/Home.vue';
  import About from '~/assets/icons/About.vue';
  import Work from '~/assets/icons/Work.vue';
  import AboutFilled from '~/assets/icons/AboutFilled.vue';
  // ...
  
  const icons = {
    home: Home,
    about: About,
    work: Work,
    aboutfilled: AboutFilled,
    // ...
  };
  
  export default {
    props: {
      name: {
        type: String,
        required: true,
        validator(value) {
          return Object.prototype.hasOwnProperty.call(icons, value);
        },
      },
    },
  
    computed: {
      iconComponent() {
        return icons[this.name];
      },
    },
  };
  </script>
  