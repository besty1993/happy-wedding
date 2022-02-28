<template>
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Body from "@/components/Body/Body";
import Footer from "@/components/Footer/Footer";

export default {
  name: "App",
  components: {
    Header,
    Body,
    Footer,
  },
};
</script>

<style>
/*@import './assets/styles/yourstyles.css';*/

.container {
  text-align: center;
}

* {
  font-family: 'Gowun Batang', serif;
  font-style: normal;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scrollbar-width: 0;
}

*::-webkit-scrollbar {
  background-color: transparent;
  border-radius: 20px;
  width: 10px;
}

*::-webkit-scrollbar-thumb {
  background-color: rgb(209, 209, 209);
  border-radius: 20px;
}

h2 {
  font-family: Nanum DdoBagDdoBag, "Single Day", cursive, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 69px;
  /* identical to box height */

  text-align: center;
  margin: 50px;

  color: #51250a; 
}

h3{
  font-size: 18px;
  color: #231F20;
}
</style>
