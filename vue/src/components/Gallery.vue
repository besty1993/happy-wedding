<template>

<div class='container'>
    <h2>Gallery</h2>

<div>
  </div>
  
    <!-- <div class="row"> -->
    
    <vs-row vs-w="12" class="row">
        <vs-col
                vs-lg="2"
                vs-sm="1"
                vs-xs="1"
        ></vs-col>
        <vs-col 
                vs-lg="2"
                vs-sm="5"
                vs-xs="5"
                class="column">

        <!-- <div class="column hover11"> -->
          <a data-fancybox="gallery" href="https://drive.google.com/uc?id=1Ogz4hmDjCfPZ-UaqHjd4FTK4ps0NRAT9">
            <img src="../assets/thumb/thumbnail-01.jpg"></a>
          <a data-fancybox="gallery" href="https://drive.google.com/uc?id=1wemFdOz-7Z3QR47Yca3AZTnh3U4aGuiw">
            <img src="../assets/thumb/thumbnail-02.jpg"></a>
          <a data-fancybox="gallery" data-src="https://drive.google.com/uc?id=1Hq_0r1uhzEJDJnNgOms6suD3QZwkyN3V">
            <img src="../assets/thumb/thumbnail-03.jpg"></a>
          <a data-fancybox="gallery" data-src="https://drive.google.com/uc?id=1fKPga6k_AXgiaw6jp8LEghBAdBcN_d9g">
            <img src="../assets/thumb/thumbnail-04.jpg"></a>
        <!-- </div> -->
        </vs-col>

        
        <vs-col 
                vs-lg="2"
                vs-sm="5"
                vs-xs="5"
                class="column">
        <!-- <div class="column"> -->

          <a data-fancybox="gallery" data-src="https://drive.google.com/uc?id=1dktXvRu2mWDzpVL6pBEfQquoAe2tBSgK">
            <img src="../assets/thumb/thumbnail-05.jpg"></a>
          <a data-fancybox="gallery" data-src="https://drive.google.com/uc?id=1XPkKTaB19BXAiXidxf0TQL4imYh6YERV">
            <img src="../assets/thumb/thumbnail-06.jpg"></a>
          <a data-fancybox="gallery" data-src="https://drive.google.com/uc?id=12r2iRAMsVoF22D3YCZLACblwzym5dzWz">
            <img src="../assets/thumb/thumbnail-07.jpg"></a>
        <!-- </div> -->
        </vs-col>

        
        <vs-col
                vs-lg="0"
                vs-sm="1"
                vs-xs="1"
                id="empty-column-1"
        ></vs-col>
        <vs-col
                vs-lg="0"
                vs-sm="1"
                vs-xs="1"
                id="empty-column-2"
        ></vs-col>



        <vs-col 
                vs-lg="2"
                vs-sm="5"
                vs-xs="5"
                class="column">
        <!-- <div class="column"> -->
          <a data-fancybox="gallery" data-src="https://drive.google.com/uc?id=1MCF_GulEEmB2vmGQvOqUwaMtiWneHkOt">
            <img src="../assets/thumb/thumbnail-08.jpg"></a>
          <a data-fancybox="gallery" data-src="https://drive.google.com/uc?id=1tfJ_pVlSQfylmfZ_VxCjjFAaFB2WhJN6">
            <img src="../assets/thumb/thumbnail-09.jpg"></a>
          <a data-fancybox="gallery" data-src="https://drive.google.com/uc?id=1KNTzyZ7L717YMJaT8ECXiKxgxGHm2yX2">
            <img src="../assets/thumb/thumbnail-10.jpg"></a>
          <a data-fancybox="gallery" data-src="https://drive.google.com/uc?id=10MR1RYf96tu12Ex6GbuLxhedNTc0oNh3">
            <img src="../assets/thumb/thumbnail-11.jpg"></a>
        <!-- </div> -->
        </vs-col>

        <vs-col 
                vs-lg="2"
                vs-sm="5"
                vs-xs="5"
                class="column">
        <!-- <div class="column"> -->
          <a data-fancybox="gallery" data-src="https://drive.google.com/uc?id=1CphoB_IT2av158w29ALdQ22V040A5ZWc">
            <img src="../assets/thumb/thumbnail-12.jpg"></a>
          <a data-fancybox="gallery" data-src="https://drive.google.com/uc?id=19kQvMxQgCXmABkqhAkkr4-XdHfm24SmW">
            <img src="../assets/thumb/thumbnail-13.jpg"></a>
          <a data-fancybox="gallery" data-src="https://drive.google.com/uc?id=16J2PacPsu8S4L8TsGN0yUdaOg26WjKh2">
            <img src="../assets/thumb/thumbnail-14.jpg"></a>
          <a data-fancybox="gallery" data-src="https://drive.google.com/uc?id=1GRIpwUwOvx58W1iE_AOlqB0tUhBRnC4G">
            <img src="../assets/thumb/thumbnail-15.jpg"></a> 
        <!-- </div> -->
        </vs-col>
        <vs-col
                vs-sm="1"
                vs-xs="1"
        ></vs-col>
    </vs-row>
      <!-- </vs-col>
    </vs-row> -->
    <!-- </div> -->
</div>
</template>

<script>
export default {
    name: 'Gallery'
}

</script>

<style>
.row {
  /* display: flex; */
  /* flex-wrap: wrap; */
  max-width: 100%
  /* padding: 0 20%;     min-width: 800px */
}

/* Create four equal columns that sits next to each other */
.column {
  /* flex: 25%;  */
  display: inline-block;
  width: 100%;
  padding: 0 0.5vw;

}




/* Vuesax lg-0 Bug */
#empty-column-1 {
    display: inline-block!important;
}
#empty-column-2 {
    display: inline-block!important;
}
.vs-lg-0 {
  width: 0px!important;
}
/*  */



.column {
  display: block;
}

.column a {
  display: block;
  width: 100%;
}

.column img {
  margin-top: 1vw;
  vertical-align: middle;
  display: block;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}


/* Opacity #1 */
.hover11 figure img {
	opacity: 1;
	-webkit-transition: .2s ease-in-out;
	transition: .2s ease-in-out;
}
.hover11 figure:hover img {
	opacity: .5;
}

@-webkit-keyframes shine {
	100% {
		left: 125%;
	}
}
@keyframes shine {
	100% {
		left: 125%;
	}
}
/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  /* .row {
    padding: 0 10%;
  } */
  .column {
    /* flex: 50%; */
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  /* .row {
    padding: 0 8vw;
  } */
  .column {
    /* flex: 50%; */
    max-width: 50%;
  }
}
</style>