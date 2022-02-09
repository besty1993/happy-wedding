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

    <div id="outer">
      <a class="btn map-btn" :href="naverLink" target="_blank">
        <img :src="iconPath('icon_map_noline.svg')" />네이버 지도
      </a>

      <a class="btn map-btn" :href="kakaoLink" target="_blank">
        <img :src="iconPath('icon_map_noline.svg')" />카카오 지도
      </a>
    </div>

    <div id="desc">
      <h3>{{ weddingHall.name }}</h3>
      <p>{{ weddingHall.location }}</p>
      <a :href="`tel:${weddingHall.phone}`">
        <img class="material-icons" src="../assets/icon/icon_phone.svg" />
        <span class="material-icons">{{ weddingHall.phone }}</span>
      </a>
    </div>


    <Button
      class="btn"
      color="primary"
      type="border"
      iconsvg="fa-caret-down.svg"
      text="하객버스 안내"
      @btn-click="toggleBusInfo"
    />

    <div v-show="showBusInfo">
      <BusInfo />
    </div>
  </div>
</template>

<script>
import Map from "./Map"
import Button from "./Button"
import BusInfo from "./BusInfo"

export default {
  name: "Location",
  components: {
    Map,
    Button,
    BusInfo,
  },
  data() {
    return {
      showBusInfo: false,
      markerPosition: [36.77293976171279, 127.64764485594283],
      naverLink: "http://naver.me/5mYh9PwT",
      kakaoLink: "https://place.map.kakao.com/17702466",
      weddingHall: {
        name: "숲속웨딩공원",
        location: "충북 괴산군 청안면 청안읍내로1길 81-15",
        phone: "043-838-1919",
      },
    };
  },
  methods: {
    iconPath(icon) {
      return require("@/assets/icon/" + icon);
    },
    toggleBusInfo() {
      this.showBusInfo = !this.showBusInfo;
    },
  },
};
</script>


<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  padding: 0 10%; /* min-width: 800px */
}

#desc {
  /* display: inline-block; */
  text-align: center;
}

#outer {
  width: 100%;
  text-align: center;
}

.map-btn {
  margin: auto;
  line-height: auto;
  width: 150px;
  height: 36px;
  border: 2px solid;
  border-radius: 20px;
  border-color: #88b077;
  background-color: #88b077;
  color: #fff;
  display: inline-block;
}

.btn {
  margin: 32px 12px 32px 12px;
  cursor: pointer;
  transition: all 0.5s ease 0s;
}

.btn img {
  margin-right: 8px;
  width: 16px;
  height: 16px;
}

a img {
  width: 24px;
  height: 24px;
}

a span:hover {
  color: #88b077;
}

.btn:hover {
  background: rgba(136, 176, 119, 0.1);
  color: #88b077;
}

.btn:hover img {
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
  margin: 10px;
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