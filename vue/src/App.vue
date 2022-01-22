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

h2 {

  font-family: Nanum DdoBagDdoBag, 'Single Day', cursive, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 69px;
  /* identical to box height */
  
  text-align: center;
  
  color: #51250A;
}

</style>
