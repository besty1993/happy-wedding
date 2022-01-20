<template>
    <div class="container">
        <h2>Invitation</h2>
        <pre>{{ text }}</pre>

        <img src="../assets/invitation_flower.svg">
    </div>
</template>

<script>
export default {
    name: 'Invitation',
    data() {
        return {
            text:``
        }
    }
}
</script>

<style scoped>
* {
    margin: 50px 0
}

pre {
  font-family: 'Gowun Batang', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 48px;
  text-align: center;
  color: #231F20;
}

img {
  position: flex;
  width: 96.11px;
  height: 85.69px;
  display: block;
  margin-left: auto;
  margin-right: auto;

}
</style>