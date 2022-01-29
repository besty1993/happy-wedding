<template>
    <vs-button 
        @click="onClick()" 
        class="btn">{{text}}
    </vs-button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String
    },
    methods: {
        onClick() {
            this.$emit('btn-click')
        }
    },
}
</script>

<style scoped>
* {
    display: inline-block;
    text-align: center;
}
</style>
