<template>
    <footer class="footer px-8 py-8">
        <div class="contact py-40 text-center">
            <Type variant="body-large" class="mb-4 text-onBackgroundVariantSubdued">Don't be a stranger.</Type>
            <a href="mailto:fabian.heussner@gmx.de?subject=Your subject" class="mailto underline-animation">
                <Type variant="title-medium">Drop me a line</Type>
            </a>
        </div>
        <div class="bottom-wrapper flex items-center justify-center">
            <div class="copyright column">
                <Type variant="body-small" class="text-onBackgroundVariantSubdued">
                    © {{new Date().getFullYear()}}, Fabian Heussner
                </Type>
            </div>
            <div class="social column">
                <Button variant="outline" to="/" class="mr-4">LinkedIn</Button>
                <Button variant="outline" to="/">Dribbble</Button>
            </div>
            <div class="legal column">
                <NuxtLink to="/">Privacy policy</NuxtLink>
                <NuxtLink to="legal/imprint" class="ml-4">Imprint</NuxtLink>
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

        .contact {
            .underline-animation {
                display: inline-block;
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    transform: scaleX(0);
                    height: 3px;
                    bottom: -12px;
                    left: 0;
                    @apply bg-onBackgroundVariant;
                    transform-origin: bottom right;
                    transition: transform 0.25s ease-out;
                }
                &:hover::after {
                    transform: scaleX(1);
                    transform-origin: bottom left;
                }
            }
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
            height: 32px;
            margin-top: -32px;
            margin-left: -32px;
            margin-right: -32px;
            @apply bg-background;
            border-radius: 0 0 32px 32px;
        }
    }
</style>