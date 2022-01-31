<template>
<div>
    <Invitation />
    <Contact />
    <Gallery />
    <Calendar />
    <Location />
</div>
</template>

<script>
import Invitation from './Invitation'
import Contact from './Contact'
import Gallery from './Gallery'
import Calendar from './Calendar'
import Location from './Location'

export default {
    name: 'Body',
    components: {
        Invitation,
        Contact,
        Gallery,
        Calendar,
        Location
    }
}
</script>

<style>
.container {
    margin: 200px 0
}
</style>