<template>
    <div></div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
div {
    max-width: 100%;
    height: 100vh;
    background-image: url("../assets/header.jpg");
    background-size: auto 100%;
    background-position: center center;
    background-repeat:no-repeat;
}

@media screen and (min-width: 1070px) {
    div {
        background-size: 100% auto;
        background-position: center top;
        height: 75vw;
    }
}

@media screen and (max-width: 500px) {
    div {
        background-size: 100% auto;
    background-image: url("../assets/header_mobile.jpg");
        height: 220vw;
    }
}
</style>