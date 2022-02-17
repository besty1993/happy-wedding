<template>
  <div class="header">
    <div class="lang-menu">
      <form action="" class="lang__form" id="lang__form">
        <i class="ic-globe"></i>
        <select name="langu-select" @change="onChange($event)" id="lang-select">
          <option lang="kr" value="kr">Korean</option>
          <option lang="en" value="en">English</option>
          <option lang="th" value="th">Thai</option>
          <option lang="jp" value="jp">Japanese</option>
        </select>
      </form>
    </div>
  </div>

</template>

<script>
export default {
  name: "Header",
  methods: {
    onChange(event) {
      // Select Language
      const lang = event.target.value;
      this.$router.push({ path: '/', query: { lang: lang }})
    },
    lang() {
      // Parse query : https://stackoverflow.com/questions/35914069/how-can-i-get-query-parameters-from-a-url-in-vue-js
      let uri = window.location.search.substring(1); 
      let params = new URLSearchParams(uri);
      var langQuery = params.get("lang");

      const langOptions = ["kr", "en", "th", "jp"];
      
      if (!langOptions.includes(langQuery)) {
        langQuery = 'kr'
      }

      return langQuery
    },
    initSelector() {
      const currentLanguage = this.lang()
      document.getElementById('lang-select').value=currentLanguage;
    },
  },
  mounted() {
    this.initSelector();
  },
};
</script>

<style scoped>
.header {
  max-width: 100%;
  height: 100vh;
  background-image: url("../assets/img/header_fhd.jpg");
  background-size: auto 100%;
  background-position: center center;
  background-repeat: no-repeat;
}

@media screen and (min-width: 1070px) {
  .header {
    background-size: 100% auto;
    background-position: center top;
    height: 59vw;
  }
}

@media screen and (max-width: 500px) {
  .header {
    background-size: 100% auto;
    background-image: url("../assets/img/header_mobile.jpg");
    background-position: center top;
    height: 220vw;
  }
}
</style>

<style>

.ic-globe {
    width: 24px;
    height: 24px;
    background-image: url("../assets/icon/icon_globe.svg");
    display: inline-block;
    vertical-align: text-top;
    margin-right: 6px;
}

.lang-menu {
  float: right;
  padding: 16px 24px 0 0;

}

select {
  background-color: rgba(255,255,255,.0);
  border: 0px solid #fff;
  transition: 0.3s ease;
}

select:hover{
  background-color: rgba(255,255,255,.2);
  
  border-radius: 20px;
  padding: 0 8px 0 8px;
}

</style>