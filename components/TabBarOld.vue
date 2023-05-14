<template>
    <nav class="tab-bar flex justify-center">
        <ul class="rounded-full text-base bg-background inline-flex text-center">
            <li v-for="link in links" :key="link.label" class="grow">
                <NuxtLink :to="link.url" class="tab h-16 px-4 py-5 rounded-full block align-center">
                    <Icon :name="link.icon" />
                    {{ link.label }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                links: [
                    { label: 'Home', url: '/', icon: 'home' },
                    { label: 'Work', url: '/work', icon: 'work' },
                    { label: 'About', url: '/about', icon: 'about' },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tab-bar ul {
        width: 600px;
        .tab {
            &.router-link-exact-active {
                @apply bg-surface;
            }
        }
    }
</style>