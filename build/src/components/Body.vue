<template>
    <Invitation />
    <Contact />
</template>

<script>
import Invitation from './Invitation'
import Contact from './Contact'

export default {
    name: 'Body',
    components: {
        Invitation,
        Contact,
    }
}
</script>