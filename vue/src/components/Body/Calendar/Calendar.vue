<template>
  <div class="container">
    <div id="calendar-container">
      <h2>Wedding Day</h2>
      <v-calendar
        color="green"
        title-position="left"
        trim-weeks
        :from-page="page"
        :attributes="attrs"
      />
    </div>

    <Countdown
      :year="year"
      :month="month"
      :day="day"
      :hour="hour"
      :minute="minute"
    />
  </div>
</template>



<script>
import Countdown from "./Countdown";

export default {
  name: "Calendar",
  components: {
    Countdown,
  },
  data() {
    return {
      year: 2024,
      month: 4,
      day: 10,
      hour: 12,
      minute: 0,
      desc: "Happy Wedding Day",
      color: "green",
    };
  },
  computed: {
    page() {
      return {
        year: this.year,
        month: this.month,
      };
    },
    attrs() {
      const today = new Date();
      const d_day = new Date(this.year, this.month - 1, this.day);

      return [
        {
          dates: today,
          key: "today",
          highlight: {
            color: this.color,
            fillMode: "light",
          },
        },
        {
          dates: d_day,
          key: "d-day",
          highlight: {
            color: this.color,
            fillMode: "solid",
          },
          popover: {
            label: this.desc,
            visibility: "hover-focus",
          },
        },
      ];
    },
  },
};
</script>



<style scoped>
/* Calendar Centerize */
#calendar-container {
  text-align: center;
  margin-bottom: 30px;
}

/* Calendar Size Adjustment */
.vc-day {
  width: 44px; /* default: 34px */
  height: 42px; /* default: 32px */
}
</style>