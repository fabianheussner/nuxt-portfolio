<template>
  <div class="clients padding__v-large">
    <SectionHeader
      :title="sectionTitle"
      :counter="sectionCounter"
      v-motion="motionFadeUp"
    />
    <div class="client__table grid grid-cols-12" v-motion="motionFadeUp">
      <div
        v-for="client in clients"
        :key="client.name"
        class="client__table-logo col-span-6 md:col-span-3 h-24 md:h-40 flex justify-center items-center"
      >
        <nuxt-picture
          format="svg"
          :src="client.logo"
          :alt="client.description"
          class="logo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { motionFadeUp } from "./scrollmotion";

export default {
  props: {
    sectionTitle: {
      type: String,
      required: true,
    },
    sectionCounter: {
      type: String,
    },
  },
  data() {
    return {
      clients: [
        {
          name: "Deutsche Bahn",
          logo: "/logos/client-deutsche-bahn.svg",
          description: "Client Logo - Deutsche Bahn",
        },
        {
          name: "Bundesminiterium",
          logo: "/logos/client-bundesministerium-gesundheit.svg",
          description: "Client Logo - Bundesministerium f. Gesundheit",
        },
        {
          name: "Osram",
          logo: "/logos/client-osram.svg",
          description: "Client Logo - Osram",
        },
        {
          name: "Budni",
          logo: "/logos/client-budni.svg",
          description: "Client Logo - Budni",
        },
        {
          name: "Migros",
          logo: "/logos/client-migros.svg",
          description: "Client Logo - Migros",
        },
        {
          name: "Swatch",
          logo: "/logos/client-swatch.svg",
          description: "Client Logo - Swatch",
        },
        {
          name: "Otelo",
          logo: "/logos/client-otelo.svg",
          description: "Client Logo - Otelo",
        },
        {
          name: "Schwarzkopf",
          logo: "/logos/client-schwarzkopf.svg",
          description: "Client Logo - Schwarzkopf",
        },
      ],

      motionFadeUp,
    };
  },
};
</script>

<style lang="scss" scoped>
.client__table-logo {
  @apply border-r border-b border-onBackgroundBorder;

  .logo {
    transform: scale(0.7);
  }

  &:nth-child(4),
  &:nth-child(8) {
    @apply border-r-0;
  }
  &:nth-child(2),
  &:nth-child(6) {
    @apply border-r-0 md:border-r;
  }
  &:nth-last-child(-n + 2) {
    @apply border-b-0;
  }
  &:nth-last-child(-n + 4) {
    @apply md:border-b-0;
  }
}
</style>
