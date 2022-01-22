<template>
<div>
    <picture>
        <source srcset="../assets/header_mobile.jpg" media="(max-width: 515px)">
        <source srcset="../assets/header_long.jpg">
        <img src="../assets/header_long.jpg" class="responsive">
    </picture>
</div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
}

div > picture {
    width: auto;
    height: 100%;
}
</style>