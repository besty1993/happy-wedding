<template>
<div class='container'>
    <h2>Gallery</h2>

    <div class="row">
        <div class="column">
            <img src="../assets/BQ2A4438.jpg">
            <img src="../assets/BQ2A4695.jpg">
            <img src="../assets/BQ2A5039.jpg">
            <img src="../assets/BQ2A5165.jpg">
            <img src="../assets/BQ2A5416.jpg">
            <img src="../assets/BQ2A4438.jpg">
            <img src="../assets/BQ2A4695.jpg">
        </div>
        <div class="column">
            <img src="../assets/BQ2A5039.jpg">
            <img src="../assets/BQ2A5165.jpg">
            <img src="../assets/BQ2A5416.jpg">
            <img src="../assets/BQ2A4438.jpg">
            <img src="../assets/BQ2A4695.jpg">
            <img src="../assets/BQ2A5039.jpg">
        </div>
        <div class="column">
            <img src="../assets/BQ2A5165.jpg">
            <img src="../assets/BQ2A5416.jpg">
            <img src="../assets/BQ2A4438.jpg">
            <img src="../assets/BQ2A4695.jpg">
            <img src="../assets/BQ2A5039.jpg">
            <img src="../assets/BQ2A5165.jpg">
            <img src="../assets/BQ2A5416.jpg">
        </div>
        <div class="column">
            <img src="../assets/BQ2A4438.jpg">
            <img src="../assets/BQ2A4695.jpg">
            <img src="../assets/BQ2A5039.jpg">
            <img src="../assets/BQ2A5165.jpg">
            <img src="../assets/BQ2A5416.jpg">
            <img src="../assets/BQ2A4438.jpg">
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Gallery'
}
</script>

<style>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 10%;     /* min-width: 800px */
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .row {
    padding: 0 10%;
  }
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .row {
    padding: 0 5%;
  }
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>