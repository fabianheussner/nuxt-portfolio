<template>
    <div class="pagination wrapper">
        <NuxtLink to="/" class="mask grid grid-cols-1 md:grid-cols-2">
            <div class="pagination__title bg-surface px-4 md:px-12 py-10 md:py-20">
                <Type variant="body-large" class="text-onSurfaceSubdued mb-2">Next project</Type>
                <Type variant="title-small" class="mb-4 md:mb-8">Check in and out</Type>
                <Icon name="arrowright" class="w-8 h-8 md:w-12 md:h-12"/>
            </div>
            <div class="pagination__cover">
                <img src="/img/img2.png" alt="" />
            </div>
        </NuxtLink>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .pagination {    
        .mask {
            @apply rounded-lg lg:rounded-2xl;
            overflow: hidden;
            
            &:hover img {
                transform: scale(1.2);
            }
            &:hover .pagination__title svg {
                margin-left: 24px;
            }
            .pagination__title svg {
                transition: all .5s ease;
            }
            .pagination__cover {
                overflow: hidden;
                
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform .5s ease;
                }
            }
        }
    }
</style>