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
import Plane from "~/assets/icons/Plane.vue";

import Logo from "~/assets/icons/Logo.vue";

import Leaf from "~/assets/icons/illustrative/Leaf.vue";
import Star from "~/assets/icons/illustrative/Star.vue";
import Waves from "~/assets/icons/illustrative/Waves.vue";
import Signature from "~/assets/icons/illustrative/Signature.vue";
import Location from "~/assets/icons/illustrative/Location.vue";
import Website from "~/assets/icons/illustrative/Website.vue";
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
  plane: Plane,

  logo: Logo,

  leaf: Leaf,
  star: Star,
  waves: Waves,
  signature: Signature,
  location: Location,
  website: Website,
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
