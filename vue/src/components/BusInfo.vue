<template>
  <vs-row
    vs-algin="center"
    vs-justify="center"
  >
    <vs-col
      vs-w="5"
      vs-align="center"
      vs-justify="center"
    >
      <h3>서울 -> 예식장</h3>
      <p>장소: 잠실역 4번 출구 방면 롯데월드 제타플렉스점 앞</p>
      <p>시간: 4월 10일 9:00 AM</p>
    </vs-col>

    <vs-col
      vs-w="5"
      vs-align="center"
      vs-justify="center"
    >
      <h3>예식장 -> 서울</h3>
      <p>장소: 숲속웨딩공원 주차장</p>
      <p>시간: 4월 10일 14:00 PM</p>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
    name:"BusInfo",
    props: {
        busLocation: Array,
    }
};
</script>