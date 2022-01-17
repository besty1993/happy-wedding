<template>
    <h2>Contact</h2>
    <MajorContact />
    <MajorContact />
    <MinorContact />
</template>

<script>
import MajorContact from './MajorContact'
import MinorContact from './MinorContact'

export default {
    name: 'Contact',
    components: {
        MajorContact,
        MinorContact,
    }
}
</script>