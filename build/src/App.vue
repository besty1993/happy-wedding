<template>
  <Header />
  <Body />
</template>

<script>
import Header from './components/Header'
import Body from './components/Body'

export default {
  name: 'App',
  components: {
    Header,
    Body
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

</style>
