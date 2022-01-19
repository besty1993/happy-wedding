<template>
<div>
    <Invitation />
    <Contact />
</div>
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

<style>
.container {
    margin: 200px 0
}
</style>