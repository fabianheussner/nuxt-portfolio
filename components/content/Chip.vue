<template>
  <span
    class="chip inline-flex h-9 px-3 items-center bg-surface text-onSurface rounded-md"
  >
    <Type variant="label-medium"><slot /></Type>
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
}
</style>
