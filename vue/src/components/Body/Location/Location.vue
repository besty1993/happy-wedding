// https://codesandbox.io/s/nervous-keldysh-87yxg?file=/src/components/KakaoMap.vue

<template>
  <div class="container">
    <h2>Location</h2>
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-lg="2" vs-sm="1" vs-xs="0"></vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="8"
        vs-sm="10"
        vs-xs="12"
      >
        <Map :marker_pos="markerPosition"/>
      </vs-col>
    </vs-row>
    <vs-row vs-w="12">
      <vs-col vs-type="flex" vs-lg="5" vs-sm="4" vs-xs="3"> </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="1"
        vs-sm="2"
        vs-xs="3"
      >
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="1"
        vs-sm="2"
        vs-xs="3"
      >
      </vs-col>
    </vs-row>

    <div id="desc">
      <h3>{{ weddingHall.name[lang] }}</h3>
      <pre>{{ weddingHall.location[lang] }}</pre>
      <a :href="`tel:${weddingHall.phone[lang]}`">
        <img class="material-icons" :src="iconPath('icon_phone.svg')" />
        <span class="material-icons">{{ weddingHall.phone[lang] }}</span>
      </a>
    </div>

    <!-- <svg class="ic-line" width="1" height="176" viewBox="0 0 1 176" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0.5" y1="2.18557e-08" x2="0.499992" y2="176" stroke="#CBCBCB"/>
    </svg> -->

    

    
    <div id="outer">
      <a class="btn__small" :href="naverLink" target="_blank">
        <img :src="iconPath('icon_map_noline.svg')" />{{naverBtnTxt[lang]}}
      </a>

      <a class="btn__small" :href="kakaoLink" target="_blank">
        <img :src="iconPath('icon_map_noline.svg')" />{{kakaoBtnTxt[lang]}}
      </a>
    </div>

    <BusInfo />
  </div>
</template>

<script>
import BusInfo from "./BusInfo"

import Map from "@/components/Util/Map"

export default {
  name: "Location",
  components: {
    Map,
    BusInfo,
  },
  data() {
    return {
      showBusInfo: false,
      markerPosition: [36.77293976171279, 127.64764485594283],
      naverBtnTxt: {
        kr: "네이버 지도",
        en: "Naver Map",
        th: "Naver Map",
        jp: "ネイバーマップ"
      },
      kakaoBtnTxt: {
        kr: "카카오 지도",
        en: "Kakao Map",
        th: "Kakao Map",
        jp: "カカオマップ",
      },
      naverLink: "http://naver.me/5mYh9PwT",
      kakaoLink: "https://place.map.kakao.com/17702466",
      weddingHall: {
        name: {
          kr: "숲속웨딩공원",
          en: "Forest Wedding Park",
          th: "Forest Wedding Park",
          jp: "Forest Wedding Park",
        },
        location: {
          kr: "충북 괴산군 청안면 청안읍내로1길 81-15",
          en: `81-15, Cheonganeumnae-ro 1-gil, Cheongan-myeon,
Goesan-gun, Chungcheongbuk-do`,
          th: `81-15, ชองอันอึมแนโร 1-กิล, ช็องอันมยอน,
กอซานกุน, ชุงชองบุกโด`,
          jp: `81-15, Cheonganeumnae-ro 1-gil, Cheongan-myeon,
Goesan-gun, Chungcheongbuk-do`,
        },
        phone: {
          kr: "043-838-1919",
          en: "+82-43-838-1919",
          th: "+82-43-838-1919",
          jp: "+82-43-838-1919",
        },
      },
    }
  },
  methods: {
    iconPath(icon) {
      return require("@/assets/icon/" + icon);
    },
    // toggleBusInfo() {
    //   this.showBusInfo = !this.showBusInfo;
    // },
  },
  computed: {
    lang() {
      var langOptions = ["kr", "en", "th", "jp"];
      var langQuery = this.$route.query.lang;
      if (!langOptions.includes(langQuery)) {
        langQuery = 'kr'
      }
      return langQuery
    }
  },
};
</script>


<style scoped>

h3, p{
  text-align: center;
  margin: 18px 0px;
}
.content {
  display: flex;
  flex-wrap: wrap;
  padding: 0 10%; /* min-width: 800px */
}

#desc {
  /* display: inline-block; */
  text-align: center;
}

#desc a {
  color: #88B077;
  display: block;
}

#outer {
  width: 100%;
  text-align: center;
  vertical-align: middle;
}

.btn__small {
  cursor: pointer;
  transition: all 0.5s ease 0s;
  margin: 24px 18px 24px 18px;
  line-height: auto;
  padding: 4px 16px 4px 16px;
  text-align: center;
  border: 2px solid;
  border-radius: 20px;
  border-color: #88b077;
  background-color: #88b077;
  color: #fff;
  display: inline-block;
}

.btn__small img {
  border: 2px #000;
  vertical-align: baseline;
  margin-right: 8px;
  width: auto;
  height: auto;
}

/* .ic-line{

  float: right;
  margin-right: 50%;
} */
a img {
  width: 24px;
  height: 24px;
}

a span:hover {
  color: #88b077;
}

.btn__small:hover {
  background: rgba(136, 176, 119, 0.1);
  color: #88b077;
}

.btn__small:hover img {
  transition: 0ms;
  transition-delay: 0ms;
  filter: invert(50%) sepia(0%) saturate(0%) hue-rotate(349deg) brightness(96%)
    contrast(87%);
}

.material-icons {
  vertical-align: middle;
}

span {
  flex: 1 1 auto;
  /* margin: 10px; */
  padding: 5px;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
}
span:after {
  position: absolute;
  transition: 0.3s;
  content: "";
  width: 0;
  left: 50%;
  bottom: 0;
  height: 3px;
  background: #88b077;
}
span:nth-of-type(2):after {
  left: 0;
}
span:nth-of-type(3):after {
  right: 0;
  left: auto;
}
span:nth-of-type(4):after {
  left: 0;
  bottom: auto;
  top: -3px;
  width: 100%;
}
span:nth-of-type(5):after {
  height: 120%;
  left: -10%;
  transform: skewX(15deg);
  z-index: -1;
}
span:hover:after {
  width: 100%;
  left: 0;
}
</style>