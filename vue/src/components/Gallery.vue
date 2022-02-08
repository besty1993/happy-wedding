<template>
  <div class="container transition">
    <h2>Gallery</h2>
    <vs-row vs-w="12">
      <vs-row 
          vs-lg="8"
          vs-sm="10"
          vs-xs="10"
          vs-justify="center"
          class="row">
        <vs-col
          v-for="(img_col, col_idx) in img_cols"
          :key="col_idx"
          vs-lg="2"
          vs-sm="5"
          vs-xs="5"
          class="column">
          <a
            v-for="(img, img_idx) in img_col"
            :key="img_idx"
            :data-src="img.link"
            data-fancybox="gallery">
            <img :src="img.path" />
          </a>
        </vs-col>
      </vs-row>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      img_cols: [
        [
          {
            link: "https://drive.google.com/uc?id=1Ogz4hmDjCfPZ-UaqHjd4FTK4ps0NRAT9",
            path: require("@/assets/thumb/thumbnail-01.jpg"),
          },
          {
            link: "https://drive.google.com/uc?id=1wemFdOz-7Z3QR47Yca3AZTnh3U4aGuiw",
            path: require("@/assets/thumb/thumbnail-02.jpg"),
          },
          {
            link: "https://drive.google.com/uc?id=1Hq_0r1uhzEJDJnNgOms6suD3QZwkyN3V",
            path: require("@/assets/thumb/thumbnail-03.jpg"),
          },
          {
            link: "https://drive.google.com/uc?id=1fKPga6k_AXgiaw6jp8LEghBAdBcN_d9g",
            path: require("@/assets/thumb/thumbnail-04.jpg"),
          },
        ],
        [
          {
            link: "https://drive.google.com/uc?id=1dktXvRu2mWDzpVL6pBEfQquoAe2tBSgK",
            path: require("@/assets/thumb/thumbnail-05.jpg"),
          },
          {
            link: "https://drive.google.com/uc?id=1XPkKTaB19BXAiXidxf0TQL4imYh6YERV",
            path: require("@/assets/thumb/thumbnail-06.jpg"),
          },
          {
            link: "https://drive.google.com/uc?id=12r2iRAMsVoF22D3YCZLACblwzym5dzWz",
            path: require("@/assets/thumb/thumbnail-07.jpg"),
          },
        ],
        [
          {
            link: "https://drive.google.com/uc?id=1MCF_GulEEmB2vmGQvOqUwaMtiWneHkOt",
            path: require("@/assets/thumb/thumbnail-08.jpg"),
          },
          {
            link: "https://drive.google.com/uc?id=1tfJ_pVlSQfylmfZ_VxCjjFAaFB2WhJN6",
            path: require("@/assets/thumb/thumbnail-09.jpg"),
          },
          {
            link: "https://drive.google.com/uc?id=1KNTzyZ7L717YMJaT8ECXiKxgxGHm2yX2",
            path: require("@/assets/thumb/thumbnail-10.jpg"),
          },
          {
            link: "https://drive.google.com/uc?id=10MR1RYf96tu12Ex6GbuLxhedNTc0oNh3",
            path: require("@/assets/thumb/thumbnail-11.jpg"),
          },
        ],
        [
          {
            link: "https://drive.google.com/uc?id=1CphoB_IT2av158w29ALdQ22V040A5ZWc",
            path: require("@/assets/thumb/thumbnail-12.jpg"),
          },
          {
            link: "https://drive.google.com/uc?id=19kQvMxQgCXmABkqhAkkr4-XdHfm24SmW",
            path: require("@/assets/thumb/thumbnail-13.jpg"),
          },
          {
            link: "https://drive.google.com/uc?id=16J2PacPsu8S4L8TsGN0yUdaOg26WjKh2",
            path: require("@/assets/thumb/thumbnail-14.jpg"),
          },
          {
            link: "https://drive.google.com/uc?id=1GRIpwUwOvx58W1iE_AOlqB0tUhBRnC4G",
            path: require("@/assets/thumb/thumbnail-15.jpg"),
          },
        ],
      ],
    };
  },
};
</script>

<style>
.row {
  /* display: flex; */
  /* flex-wrap: wrap; */
  max-width: 100%;
  /* padding: 0 20%;     min-width: 800px */
}

/* Create four equal columns that sits next to each other */
.column {
  /* flex: 25%;  */
  display: inline-block;
  width: 100%;
  padding: 0 0.5vw;
}

.transition img {
  background: #fff;
  transition: 0.2s ease-out;
}


.transition img:hover{
  -webkit-filter: saturate(1.3) brightness(1.2) contrast(90%) opacity(90%);
  -moz-filter: saturate(1.3) brightness(1.2) contrast(90%) opacity(90%);
  -ms-filter: saturate(1.3) brightness(1.2) contrast(90%) opacity(90%);
  -o-filter: saturate(1.3) brightness(1.2) contrast(90%) opacity(90%);
  filter: saturate(1.3) brightness(1.2) contrast(90%) opacity(90%);
  transition: 0.3s ease-in;
}


/* Vuesax lg-0 Bug */
#empty-column-1 {
  display: inline-block !important;
}
#empty-column-2 {
  display: inline-block !important;
}
.vs-lg-0 {
  width: 0px !important;
}
/*  */

.column {
  display: block;
}

.column a {
  display: block;
  width: 100%;
  cursor: pointer;
}

.column img {
  margin-top: 1vw;
  /* vertical-align: middle; */
  display: block;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}

/* Opacity #1 */
.hover11 figure img {
  opacity: 1;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}
.hover11 figure:hover img {
  opacity: 0.5;
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