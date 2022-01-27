<template>
<div class='container'>
    <h2>Gallery</h2>

    <div class="row">
        <div class="column">
            <img src="../assets/thumbnail-01.jpg">
            <img src="../assets/thumbnail-02.jpg">
            <img src="../assets/thumbnail-03.jpg">
            <img src="../assets/thumbnail-04.jpg">
        </div>
        <div class="column">
            <img src="../assets/thumbnail-05.jpg">
            <img src="../assets/thumbnail-06.jpg">
            <img src="../assets/thumbnail-07.jpg">
        </div>
        <div class="column">
            <img src="../assets/thumbnail-08.jpg">
            <img src="../assets/thumbnail-09.jpg">
            <img src="../assets/thumbnail-10.jpg">
            <img src="../assets/thumbnail-11.jpg">
        </div>
        <div class="column">
            <img src="../assets/thumbnail-12.jpg">
            <img src="../assets/thumbnail-13.jpg">
            <img src="../assets/thumbnail-14.jpg">
            <img src="../assets/thumbnail-15.jpg">
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
  padding: 0 25%;     /* min-width: 800px */
  border-style: solid;
  border-color: black;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
  border-style: solid;
  border-color: coral;

}

.column img {
  border-style: solid;
  border-color: blue;
  margin-top: 8px;
  vertical-align: middle;
  display: block;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
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
    flex: 50%;
    max-width: 50%;
  }
}
</style>