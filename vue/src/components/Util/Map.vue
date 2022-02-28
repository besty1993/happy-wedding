<template>
  <div id="map"/>
</template>

<script>
export default {
  name: "Map",
  props: {
    marker_pos: Array,
  },
  methods: {
    initMap() {
      const position = new kakao.maps.LatLng(...this.marker_pos);

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
};
</script>

<style>
#map {
  flex: 10%;
  max-width: 100%;
  /* width: 25%; */
  height: 400px;
  text-align: center;
  /* display: inline-block; */
}
</style>