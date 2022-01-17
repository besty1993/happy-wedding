<template>
    <picture>
        <source srcset="../assets/header_mobile.jpg" media="(max-width: 515px)">
        <source srcset="../assets/header_long.jpg">
        <img src="../assets/header_long.jpg" class="responsive">
    </picture>
</template>

<script>
export default {
    name: 'Header'
}
</script>