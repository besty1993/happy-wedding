// https://codesandbox.io/s/nervous-keldysh-87yxg?file=/src/components/KakaoMap.vue

<template>
<div class='container'>
    <h2>Location</h2>
    <div id="content">
        <div id="map"></div>
        <div id="desc">
            <h3>숲속웨딩공원</h3>
            <p>청주 -> 초정 -> 청안 (25분 소요)</p>
            <p>오창 -> 증평 -> 청안 (20분 소요)</p>
            <p>증평IC -> 증평 -> 청안 (15분 소요)</p>
            <p>음성,괴산 -> 청안 (15분 소요)</p>
            <p>증평 -> 청안 (7분 소요)</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Location',
    data() {
        return {
            markerPosition: [36.77293976171279, 127.64764485594283]
        }
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
                position: position
            })
        },
    },
};
</script>


<style>
.content {
  display: flex;
  flex-wrap: wrap;
  padding: 0 10%;     /* min-width: 800px */
}
#map {
    flex: 25%;
    max-width: 25%;
    width: 25%;
    height: 400px;
    display: inline-block;
}

#desc {
    display: inline-block;
    text-align: center;
}
</style>