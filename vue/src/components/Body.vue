<template>
<div>
    <Invitation />
    <Contact />
    <Gallery />
    <Location />
</div>
</template>

<script>
import Invitation from './Invitation'
import Contact from './Contact'
import Gallery from './Gallery'
import Location from './Location'

export default {
    name: 'Body',
    components: {
        Invitation,
        Contact,
        Gallery,
        Location
    }
}
</script>

<style>
.container {
    margin: 200px 0
}
</style>