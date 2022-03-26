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

    <div id="bus_contact">
      <div>
        <p>버스 탑승 인원을 파악하기 위해&nbsp;</p>
        <p>사전에 연락처와 탑승인원을 알려주시기 바랍니다.</p>
      </div>
      <br>
      <p>※ 인솔자 : {{ bus_contact.name }}&nbsp;</p>
      
      <a :href="`tel:${bus_contact.phone}`">
        <span>{{ bus_contact.phone }}</span>
      </a>
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
        departure_time: "4월 10일 09:00 AM",
        departure_location: "잠실역 4번 출구 방면 \n롯데마트 제타플렉스점 앞",
      },
      bus_to_seoul: {
        departure: "예식장",
        arrival: "서울",
        departure_time: "4월 10일 14:00 PM",
        departure_location: "숲속웨딩공원 주차장",
      },
      bus_contact: {
        name: "이덕휘",
        phone: "010-6346-2564",
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

/* Bus Contact & phone effect */
#bus_contact {
  margin: 24px 0;
  display: block;
}
span {
  color: #88B077;
  flex: 1 1 auto;
  /* margin: 10px; */
  padding: 5px;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
}
span:hover {
  color: #88b077;
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
span:hover:after {
  width: 100%;
  left: 0;
}

</style>