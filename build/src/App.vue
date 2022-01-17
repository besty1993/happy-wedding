<template>
<div>
  <Header />
  <Body />
  <Footer />
</div>
</template>

<script>
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Body,
    Footer,
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
