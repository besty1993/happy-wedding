<template>
  <div class="bus-info-item-container">
    <h3>&#9702; {{departure}} &#10140; {{arrival}}</h3>

    <div>
      &nbsp;&nbsp;
      <p>시간 :</p>
      &nbsp;
      <pre>{{departure_time}}</pre>
    </div>

    <div>
      &nbsp;&nbsp;
      <p>장소 :</p>
      &nbsp;
      <pre>{{departure_location}}</pre>
    </div>

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
  text-align: left;
}

p,pre {
  display: inline-block;
  vertical-align: top;
}

</style>