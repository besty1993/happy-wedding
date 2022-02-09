<template>
  <div class="header">
    <nav>
      <div class="logo">
        <a href="#"><img src=""></a>
      </div>

      <div class="lang-menu">
                  <div class="selected-lang">
                      English
                  </div>
                  <ul>
                      <li>
                          <a href="#" class="de">German</a>
                      </li>
                      <li>
                          <a href="" class="en">English</a>
                      </li>
                      <li>
                          <a href="" class="fr">French</a>
                      </li>
                      <li>
                          <a href="" class="ar">Arabic</a>
                      </li>
                  </ul>
                  
              </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
div header{
  max-width: 100%;
  height: 100vh;
  background-image: url("../assets/img/header_fhd.jpg");
  background-size: auto 100%;
  background-position: center center;
  background-repeat: no-repeat;
}

@media screen and (min-width: 1070px) {
  div header{
    background-size: 100% auto;
    background-position: center top;
    height: 59vw;
  }
}

@media screen and (max-width: 500px) {
  div header{
    background-size: 100% auto;
    background-image: url("../assets/img/header_mobile.jpg");
    background-position: center top;
    height: 220vw;
  }
}
</style>

<style>


.logo {
    width: auto;
}

.logo img {
    width: auto;
    background-image: url("../assets/icon/icon_globe.svg");
    background-repeat: no-repeat;
    background-size: cover;
    
}

.lang-menu {
    width: auto;
    text-align: right;
    font-weight: bold;
    margin-top: 25px;
    position: relative;
}
.lang-menu .selected-lang {
    display: flex;   
    justify-content: space-between;
    line-height: 2;
    cursor: pointer;
}
.lang-menu .selected-lang:before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 32px;
    background-image: url(https://www.countryflags.io/us/flat/32.png);
    background-size: contain;
    background-repeat: no-repeat;
}

.lang-menu ul {
    margin: 0;
    padding: 0;
    display: none;
    background-color: #fff;
    border: 1px solid #f8f8f8;
    position: absolute;
    top: 45px;
    right: 0px;
    width: 125px;
    border-radius: 5px;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
}


.lang-menu ul li {
    list-style: none;
    text-align: left;
    display: flex;
    justify-content: space-between;
}

.lang-menu ul li a {
    text-decoration: none;
    width: 125px;
    padding: 5px 10px;
    display: block;
}

.lang-menu ul li:hover {
    background-color: #f2f2f2;
}

.lang-menu ul li a:before {
    content: '';
    display: inline-block;
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin-right: 10px;
    background-size: contain;
    background-repeat: no-repeat;
}

.de:before {
    background-image: url(https://www.countryflags.io/de/flat/32.png);
}

.en:before {
    background-image: url(https://www.countryflags.io/us/flat/32.png);
}
.fr:before {
    background-image: url(https://www.countryflags.io/fr/flat/32.png);
}

.ar:before {
    background-image: url(https://www.countryflags.io/ae/flat/32.png);
}


.lang-menu:hover ul {
    display: block;
}
</style>