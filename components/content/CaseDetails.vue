<template>
    <div class="case-details">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <Chip v-for="skill in skills" :key="skill">
            {{ skill }}
        </Chip>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            skills: {
                type: Array,
                required: true,
            }
        },
    };
</script>

<!-- <style lang="scss" scoped>
    
</style> -->