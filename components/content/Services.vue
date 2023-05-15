<template>
    <div class="grid grid-cols-4 mx-8 my-16">
        <div v-for="service in services" :key="service.title" class="column px-4 border-r border-onBackgroundBorder">
            <Type variant="headline-small" class="mb-4">
                <span class="text-onBackgroundSubdued">
                    {{ service.count }}
                </span> {{ service.title }}
            </Type>
            <Type variant="label-large">
                Überall dieselbe alte Leier. Das Layout ist fertig, 
                der Text lässt auf sich warten. Damit das Layout nun 
                nicht nackt im Raume steht.
            </Type>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                services: [
                    { title: 'Research', count: '01' },
                    { title: 'UX', count: '02' },
                    { title: 'UI', count: '03' },
                    { title: 'Illustration', count: '04' },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .column:last-child {
        border-right: none;
    }
</style>