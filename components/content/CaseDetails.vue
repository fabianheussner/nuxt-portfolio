<template>
  <div
    class="case__details grid grid-cols-1 lg:grid-cols-2 md:gap-x-8 gap-y-8 padding__v-large"
  >
    <div class="case__details-scope lg:mt-6" v-motion="motionFadeUp">
      <Chip v-for="skill in data.skills" :key="skill" class="mb-2">
        {{ skill }}
      </Chip>
    </div>
    <div class="case__details-table">
      <div class="case__details-table mb-12 lg:mb-16" v-motion="motionFadeUp">
        <ListItemTwo
          v-for="detail in data.details"
          :key="detail.primary"
          :primary="detail.primary"
          :secondary="detail.secondary"
        />
      </div>
      <div class="case__details-description" v-motion="motionFadeUp">
        <Type variant="subline">{{ description }}</Type>
      </div>
    </div>
  </div>
</template>

<script>
import { motionFadeUp } from "./scrollmotion";

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      motionFadeUp,
    };
  },
};
</script>

<style lang="scss" scoped>
.chip {
  margin-right: 8px;
}
</style>
