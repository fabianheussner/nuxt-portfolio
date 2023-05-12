<template>
    <NuxtLink to={{props.link}} class="rounded-full p-5 bg-accentBlue inline-block">
        {{label}}
    </NuxtLink>
</template>
<script>
export default {
    props: {
        link: String,
        label: String,
    }
}
</script>
<style lang="">
    
</style>