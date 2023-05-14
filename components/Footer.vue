<template>
    <footer class="footer px-8 py-8">
        <div class="contact py-20 text-center">
            <Type variant="h2">Test type component</Type>
            <p>Don't be a stranger</p>
            <h2>Drop me a line</h2>
        </div>
        <div class="bottom-wrapper flex items-center justify-center">
            <div class="copyright column">
                <p>© {{new Date().getFullYear()}}, Fabian Heussner</p>
            </div>
            <div class="social column">
                <Button variant="outline" to="/">LinkedIn</Button>
                <Button variant="outline" to="/">Dribbble</Button>
            </div>
            <div class="legal column">
                <NuxtLink to="/">Privacy policy</NuxtLink>
                <NuxtLink to="legal/imprint">Imprint</NuxtLink>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .footer {
        @apply bg-backgroundVariant;
        @apply text-onBackgroundVariant;

        .contact p {
            @apply text-onBackgroundVariantSubdued;
        }

        .column {
            flex-grow: 1;
            flex-basis: 0;
            min-width: 0;
            &.social {
                text-align: center;
            }
            &.legal {
                text-align: right;
            }
        }
    }
</style>