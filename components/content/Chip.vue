<template>
  <span class="chip inline-block bg-surface text-onSurface rounded-md">
    <Type variant="label-small"><slot /></Type>
  </span>
</template>

<script>
export default {
  props: {
    label: String,
  },
};
</script>

<style lang="scss" scoped>
.chip {
  padding: 5.5px 8px;
}
</style>
