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
        <div id="map"></div>
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
        <vs-button :href="naverLink" target="_blank"> 네이버 지도 </vs-button>
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="1"
        vs-sm="2"
        vs-xs="3"
      >
        <vs-button :href="kakaoLink" target="_blank"> 카카오 지도 </vs-button>
      </vs-col>
    </vs-row>
    <div id="desc">
      <h3>{{ weddingHall.name }}</h3>
      <p>{{ weddingHall.location }}</p>
      <p>{{ weddingHall.phone }}</p>
      <a :href="`tel:${weddingHall.phone}`">
        <img src="../assets/icon/icon_phone.svg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Location",
  data() {
    return {
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
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=dad316381d39b15875b1bc2d41641e4d";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const position = new kakao.maps.LatLng(...this.markerPosition);

      // Generate Map
      const container = document.getElementById("map");
      const options = {
        center: position,
        level: 4,
      };
      this.map = new kakao.maps.Map(container, options);

      // Additional code for marker
      new kakao.maps.Marker({
        map: this.map,
        position: position,
      });
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

#map {
  flex: 10%;
  max-width: 100%;
  /* width: 25%; */
  height: 400px;
  text-align: center;
  /* display: inline-block; */
}

#desc {
  /* display: inline-block; */
  text-align: left;
}

vs-button {
  margin: 10px;
}
</style>