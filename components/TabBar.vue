<template lang="">
    <nav class="tab-bar">
        <ul class="rounded-full text-base bg-background inline-flex text-center">
            <li><NuxtLink to="/" class="tab rounded-full block p-5">Home</NuxtLink></li>            
            <li><NuxtLink to="work" class="tab rounded-full block p-5">Work</NuxtLink></li>            
            <li><NuxtLink to="about" class="tab rounded-full block p-5 active:bg-accentBlue">About</NuxtLink></li>            
        </ul>
    </nav>
</template>

<script>
    export default {
        props: {
            to: String,
            label: String
        }
    }
</script>

<style lang="scss" scoped>
    .tab-bar ul {
        width: auto;
    }
    .tab {
        width: 200px;
    &.router-link-exact-active {
        @apply bg-surface;
    }
    }
</style>