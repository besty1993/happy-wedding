<template>
  <div class="container">
    <span>
      <img id="double_quote_1" src="@/assets/icon/double_quote_1.svg" />
      <p class="text">{{quote}}</p>
      <img id="double_quote_2" src="@/assets/icon/double_quote_2.svg" />
    </span>
    <img class="separator" src="@/assets/icon/quote_separator.svg" />
    <p id="reference">{{reference}}</p>
  </div>
</template>

<script>
export default {
  name: "Quote",
  data() {
    return {
      quote: "How lucky I am to have something that makes saying goodbye so hard.",
      reference: "A.A. Milne, 'Winnie The Pooh.’"
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
}

#double_quote_1 {
  padding-bottom: 25px;
  padding-right: 10px;
  vertical-align: center;
}
#double_quote_2 {
  padding-top: 50px;
  padding-left: 10px;
  vertical-align: top;
}

p {
  width: fit-content;
  display: inline-block;
  vertical-align: center;
}

.separator {
  display: block;
  margin: 5px auto 30px auto ;
}

.text {
  font-size: 18px;
}

#reference{
  font-size: 16px;
}
</style>

