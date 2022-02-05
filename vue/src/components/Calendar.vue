<template>
<<<<<<< HEAD
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
=======
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
>>>>>>> 6ed76eabf3053a43b45fdaaeea7d846cc8a94188
</template>



<script>
export default {
  name: "Calendar",
  data() {
    return {
      year: 2022,
      month: 4,
      day: 10,
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

<<<<<<< HEAD
            return [
                {
                    dates: today,
                    key: 'today',
                    highlight: {
                        color: this.color,
                        fillMode: 'light',
                    },
                },
                {
                    dates: d_day,
                    key: 'd-day',
                    highlight: {
                        color: this.color,
                        fillMode: 'solid'
                    },
                    popover: {
                        label: this.desc,
                        visibility: "hover-focus",
                    }
                },
            ]
        }
    }
}
=======
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
            visibility: "focus",
          },
        },
      ];
    },
  },
};
>>>>>>> 6ed76eabf3053a43b45fdaaeea7d846cc8a94188
</script>



<style scoped>
/* Calendar Centerize */
#calendar-container {
  text-align: center;
}
v-calendar {
  display: inline-block;
}
</style>

<style>
/* Calendar Size Adjustment */
.vc-day {
  width: 51px; /* default: 34px */
  height: 48px; /* default: 32px */
}
</style>