<template>
  <div id="header" class="kr_header">
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
      // this.changeHeader(lang);
      this.$router.push({ path: '/', query: { lang: lang }})
    },
    // lang() {
    //   var langOptions = ["kr", "en", "th", "jp"];
    //   var langQuery = this.$route.query.lang;
    //   if (!langOptions.includes(langQuery)) {
    //     langQuery = 'kr'
    //   }
    //   return langQuery
    // },
    // lang() {
    //   // Parse query : https://stackoverflow.com/questions/35914069/how-can-i-get-query-parameters-from-a-url-in-vue-js
    //   let uri = window.location.search.substring(1); 
    //   let params = new URLSearchParams(uri);
    //   var langQuery = params.get("lang");

    //   const langOptions = ["kr", "en", "th", "jp"];
      
    //   if (!langOptions.includes(langQuery)) {
    //     langQuery = 'kr'
    //   }

    //   return langQuery
    // },
    initSelector() {
      const currentLanguage = this.lang
      document.getElementById('lang-select').value=currentLanguage;
    },
    changeHeader(lang) {
      // Header change by language
      // const currentLanguage = this.lang
      var headerElement = document.getElementById("header");

      if (lang === 'kr') {
        headerElement.classList.add('kr_header')
        headerElement.classList.remove('en_header')
      }
      else {
        headerElement.classList.add('en_header')
        headerElement.classList.remove('kr_header')
      }
    }
  },
  computed: {
    lang() {
      var langOptions = ["kr", "en", "th", "jp"];
      var langQuery = this.$route.query.lang;
      if (!langOptions.includes(langQuery)) {
        langQuery = 'kr'
      }
      return langQuery
    },
  },
  mounted() {
    this.initSelector();
    this.changeHeader(this.lang);
  },
  watch: {
    '$route' () {
      this.initSelector();
      this.changeHeader(this.lang);
    }
  }
};
</script>

<style scoped>
#header {
  max-width: 100%;
  height: 100vh;
  background-size: auto 100%;
  background-position: center center;
  background-repeat: no-repeat;
}
.kr_header {
  background-image: url("../assets/img/header_fhd.jpg");
}
.en_header {
  background-image: url("../assets/img/header_fhd_EN.jpg");
}

@media screen and (min-width: 1070px) {
  #header {
    background-size: 100% auto;
    background-position: center top;
    height: 59vw;
  }
  .kr_header {
    background-image: url("../assets/img/header_fhd.jpg");
  }
  .en_header {
    background-image: url("../assets/img/header_fhd_EN.jpg");
  }
}

@media screen and (max-width: 500px) {
  #header {
    background-size: 100% auto;
    background-image: url("../assets/img/header_mobile.jpg");
    background-position: center top;
    height: 220vw;
  }
  .kr_header {
    background-image: url("../assets/img/header_mobile.jpg");
  }
  .en_header {
    background-image: url("../assets/img/header_mobile_EN.jpg");
  }
}
</style>

<style>

/* Init Select */
select {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
  text-transform: none;
}

#lang-select {
  color: #231F20;
  font-size: 12px;
  vertical-align: 10%;
}

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