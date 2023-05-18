<template>
    <div class="image__full wrapper py-6">
        <img :src="source" :alt="description" class="rounded-xl lg:rounded-3xl">
    </div>
</template>

<script>
    export default {
        props: {
            source: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .image__full img {
        width: 100%;
        height: 100%;
    }
</style>