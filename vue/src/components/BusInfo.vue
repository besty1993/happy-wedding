<template>
  <div v-show="lang==='kr'">
    <h3 class="bus_title">하객버스 안내</h3>

    <div
      v-for="(busObj, idx) in [bus_to_weddinghall, bus_to_seoul]"
      :key="idx"
      class="bus_info"
    >
      <BusInfoItem
        :departure="busObj['departure']"
        :arrival="busObj['arrival']"
        :departure_time="busObj['departure_time']"
        :departure_location="busObj['departure_location']"
      />
    </div>

  </div>
</template>

<script>
import BusInfoItem from './BusInfoItem'

export default {
  name:"BusInfo",
  components: {
    BusInfoItem
  },
  data() {
    return {
      rentalBusBtnTxt: {
        kr: "하객버스 안내",
        en: "Rental Bus Info.",
        th: "ข้อมูลรถรับส่ง",
        jp: "貸切バスのご案内",
      },
      bus_to_weddinghall: {
        departure: "서울",
        arrival: "예식장",
        departure_time: "4월 10일 9:00 AM",
        departure_location: "잠실역 4번 출구 방면 \n롯데마트 제타플렉스점 앞",
      },
      bus_to_seoul: {
        departure: "예식장",
        arrival: "서울",
        departure_time: "4월 10일 14:00 PM",
        departure_location: "숲속웨딩공원 주차장",
      },
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
    }
  },
};
</script>

<style scoped>
/* .bus_title {
  margin-bottom: 16px;
} */

h3, p{
  text-align: center;
}

.vs-col {
  vertical-align:t;
}

.bus_info {
  width: 250px;
  display: inline-block;
  margin: 15px 10px 0px;
}
</style>