<template>
  <component :is="iconComponent" role="img" class="inline-block fill-current" />
</template>

<script>
import Home from "~/assets/icons/Home.vue";
import HomeFilled from "~/assets/icons/HomeFilled.vue";
import About from "~/assets/icons/About.vue";
import AboutFilled from "~/assets/icons/AboutFilled.vue";
import Work from "~/assets/icons/Work.vue";
import WorkFilled from "~/assets/icons/WorkFilled.vue";
import ArrowRight from "~/assets/icons/ArrowRight.vue";
import Add from "~/assets/icons/Add.vue";

import Logo from "~/assets/icons/Logo.vue";

import Leaf from "~/assets/icons/illustrative/Leaf.vue";
import Star from "~/assets/icons/illustrative/Star.vue";
import Waves from "~/assets/icons/illustrative/Waves.vue";
// ...

const icons = {
  home: Home,
  homefilled: HomeFilled,
  about: About,
  aboutfilled: AboutFilled,
  work: Work,
  workfilled: WorkFilled,
  arrowright: ArrowRight,
  add: Add,

  logo: Logo,

  leaf: Leaf,
  star: Star,
  waves: Waves,
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
