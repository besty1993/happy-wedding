// https://codepen.io/AllThingsSmitty/pen/JJavZN

<template>
  <div class="container">
    <h1 id="headline">Countdown to our Wedding</h1>
    <div id="countdown">
      <ul>
        <li><span id="days"></span>Days</li>
        <li><span id="hours"></span>Hours</li>
        <li><span id="minutes"></span>Minutes</li>
        <li><span id="seconds"></span>Seconds</li>
      </ul>
    </div>
    <div id="content" class="emoji">
      <span>🥳</span>
      <span>🎉</span>
      <span>🎂</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Countdown",
  props: {
    year: Number,
    month: Number,
    day: Number,
    hour: Number,
    minute: Number,
  },
  mounted() {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

      const dday = new Date(this.year, this.month-1, this.day, this.hour, this.minute)
      
      const countDown = dday.getTime(),
          x = setInterval(function() {    

            const now = new Date().getTime(),
                  distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
              document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
              document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
              document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
              document.getElementById("headline").innerText = "Happy Wedding!";
              document.getElementById("countdown").style.display = "none";
              document.getElementById("content").style.display = "block";
              clearInterval(x);
            }
            //seconds
          }, 0)
  },
}
</script>

<style scoped>
/* general styling */
:root {
  --smaller: .75;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  margin: 0;
}

body {
  align-items: center;
  background-color: #ffd54f;
  display: flex;
  font-family: -apple-system, 
    BlinkMacSystemFont, 
    "Segoe UI", 
    Roboto, 
    Oxygen-Sans, 
    Ubuntu, 
    Cantarell, 
    "Helvetica Neue", 
    sans-serif;
}

.container {
  color: #333;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-weight: normal;
  letter-spacing: .125rem;
  font-size: 1.2em;
}

li {
  display: inline-block;
  font-size: 1em;
  list-style-type: none;
  padding: 0.9em;

}

li #days{
  color: #88b077;
  font-weight: 700;
}

li span {
  display: block;
  font-size: 2.5rem;
}

.emoji {
  display: none;
  padding: 1rem;
}

.emoji span {
  font-size: 4rem;
  padding: 0 .5rem;
}

@media all and (max-width: 768px) {
  h1 {
    /* Font-size function does not working */
    /* font-size: calc(1.5rem * var(--smaller));*/ 
    font-size: 1.2rem;
  }
  
  li {
    /* Font-size function does not working */
    /* font-size: calc(1.125rem * var(--smaller)); */
    font-size: 1rem;
  }
  
  li span {
    /* Font-size function does not working */
    /* font-size: calc(3.375rem * var(--smaller)); */
    font-size: 1.5rem;
  }
}
</style>