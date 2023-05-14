<template>
    <footer class="footer px-8 py-8">
        <div class="contact py-40 text-center">
            <Type variant="body-large">Don't be a stranger</Type>
            <Type variant="headline-medium">Drop me a line</Type>
        </div>
        <div class="bottom-wrapper flex items-center justify-center">
            <div class="copyright column">
                <Type variant="body-small" class="text-onBackgroundVariantSubdued">
                    © {{new Date().getFullYear()}}, Fabian Heussner
                </Type>
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

        &::before {
            content: '';
            display: block;
            position: relative;
            top: 0;
            width: calc(100% + 64px);
            height: 40px;
            margin-top: -32px;
            margin-left: -32px;
            margin-right: -32px;
            @apply bg-background;
            border-radius: 0 0 32px 32px;
        }
    }
</style>