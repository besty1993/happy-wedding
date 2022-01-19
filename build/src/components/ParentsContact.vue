<template>
    <div>
        <h4>{{ text }}</h4>
        <ParentContact
            title="아버지"
            :data="fatherData"
        />
        <ParentContact
            text="어머니"
            :data="motherData"
        />
    </div>
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
