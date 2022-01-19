<template>
    <span class="parents-contact-container">
        <h4>{{ text }}</h4>
        <ParentContact
            title="아버지"
            :data="fatherData"
        />
        <ParentContact
            text="어머니"
            :data="motherData"
        />
    </span>
</template>

<script>
import ParentContact from './ParentContact'

export default {
    name: 'ParentsContact',
    components: {
        ParentContact
    },
    props: {
        text: String,
        fatherData: Object,
        motherData: Object
    },
}
</script>

<style scoped>
h4 {
    width: fit-content;
}
.parents-contact-container {
    width: 30%;
    margin: 0 10%;
}
</style>