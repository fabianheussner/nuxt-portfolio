<template>
    <div class="pagination wrapper">
        <NuxtLink to="/" class="mask grid grid-cols-1 md:grid-cols-2">
            <div class="pagination__title bg-surface px-12 py-20">
                <Type variant="body-large" class="text-onSurfaceSubdued">Next project</Type>
                <Type variant="title-small">Check in and out</Type>
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
            &:hover .pagination__title {
                @apply bg-surfaceVariant text-onSurfaceVariant;
            }
            .pagination__title {
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