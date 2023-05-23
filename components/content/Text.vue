<template>
  <div class="wrapper grid grid-cols-1 md:grid-cols-2 py-20">
    <Type
      variant="headline-small"
      class="md:col-span-1 md:col-end-3"
      v-if="$slots.headline"
    >
      <ContentSlot :use="$slots.headline" unwrap="p" />
    </Type>
    <Type variant="body-large" class="md:col-span-1 md:col-end-3">
      <ContentSlot :use="$slots.text" unwrap="p" />
    </Type>
  </div>
</template>
