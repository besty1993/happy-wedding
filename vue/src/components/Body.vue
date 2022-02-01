<template>
<div>
    <Invitation />
    <Contact />
    <Gallery />
    <Calendar />
    <Location />
    <Donation />
</div>
</template>

<script>
import Invitation from './Invitation'
import Contact from './Contact'
import Gallery from './Gallery'
import Calendar from './Calendar'
import Location from './Location'
import Donation from './Donation'

export default {
    name: 'Body',
    components: {
        Invitation,
        Contact,
        Gallery,
        Calendar,
        Location,
        Donation,
    }
}
</script>

<style>
.container {
    margin: 200px 0
}
</style>