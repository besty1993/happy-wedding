<template>
    <button 
        @click="onClick()" 
        class="btn">{{text}}
        <img :src="iconPath()">
        <!-- <img src="../assets/icon/fa-caret-down.svg">         -->
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        iconsvg: String
    },
    methods: {
        onClick() {
            this.$emit('btn-click')
        },
        iconPath() {
            return require('@/assets/icon/'+this.iconsvg)
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
