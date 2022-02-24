<template>
  <div class="bus-info-item-container">
    <h3>&#9702; {{departure}} &#10140; {{arrival}}</h3>

    <vs-row vs-align="top" vs-justify="top">
      <vs-col vs-w="12" vs-align="top" vs-justify="top">
        <p>시간 : </p>
        <pre>{{departure_time}}</pre>
      </vs-col>
      <!-- <vs-col vs-w="3">시간 : </vs-col>
      <vs-col vs-w="9">
        <pre>{{departure_time}}</pre>
      </vs-col> -->
    </vs-row>

    <vs-row vs-align="top" vs-justify="top">
      <vs-col vs-w="12" vs-align="top">
        <p>장소 : </p>
        <pre>{{departure_location}}</pre>
      </vs-col>
      <!-- <vs-col vs-w="3">장소 : </vs-col>
      <vs-col vs-w="9">
        <pre>{{departure_location}}</pre>
      </vs-col> -->
    </vs-row>

    <!-- <p>시간 : {{departure_time}}</p>
    <p>장소 : {{departure_location}}</p> -->
    <!-- <p><br></p> -->
  </div>
</template>

<script>
export default {
  name:"BusInfoItem",
  props: {
    departure: String,
    arrival: String,
    departure_time: String,
    departure_location: String,
  }
}
</script>

<style>
.bus-info-item-container {
  margin: 20px 10px;
}

p,pre {
  display: inline-block;
}

</style>