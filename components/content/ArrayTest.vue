<template>
    <div>
        <Chip v-for="service in services" :key="service">
            {{ service }}
        </Chip>
    </div>
</template>

<script>
    export default {
        props: {
            services: {
                type: Array,
                required: true,
            }
        },
    };
</script>

<style>

</style>