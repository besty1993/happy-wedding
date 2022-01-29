<template>
<div class='container'>
    <h2>Gallery</h2>

    <div class="row">
        <div class="column">
            
          <a data-fancybox="gallery" href="https://bit.ly/35AqhRb">
            <img src="../assets/thumb/thumbnail-01.jpg"></a>
          <a data-fancybox="gallery" href="https://bit.ly/32EcwQd">
            <img src="../assets/thumb/thumbnail-02.jpg"></a>
          <a data-fancybox="gallery" data-src="https://bit.ly/3KTaGfF">
            <img src="../assets/thumb/thumbnail-03.jpg"></a>
          <a data-fancybox="gallery" data-src="https://bit.ly/3rgSxkd">
            <img src="../assets/thumb/thumbnail-04.jpg"></a>
        </div>

        <div class="column">
          <a data-fancybox="gallery" data-src="https://bit.ly/3r8bYeU">
            <img src="../assets/thumb/thumbnail-05.jpg"></a>
          <a data-fancybox="gallery" data-src="https://bit.ly/34eH9MC">
            <img src="../assets/thumb/thumbnail-06.jpg"></a>
          <a data-fancybox="gallery" data-src="https://bit.ly/32DctnC">
            <img src="../assets/thumb/thumbnail-07.jpg"></a>
        </div>

        <div class="column">
          <a data-fancybox="gallery" data-src="https://bit.ly/3IIZPTt">
            <img src="../assets/thumb/thumbnail-08.jpg"></a>
          <a data-fancybox="gallery" data-src="https://bit.ly/3Hbdliu">
            <img src="../assets/thumb/thumbnail-09.jpg"></a>
          <a data-fancybox="gallery" data-src="https://bit.ly/32C8986">
            <img src="../assets/thumb/thumbnail-10.jpg"></a>
          <a data-fancybox="gallery" data-src="https://bit.ly/3u8cRWK">
            <img src="../assets/thumb/thumbnail-11.jpg"></a>
        </div>

        <div class="column">
          <a data-fancybox="gallery" data-src="https://bit.ly/3KMZLUC">
            <img src="../assets/thumb/thumbnail-12.jpg"></a>
          <a data-fancybox="gallery" data-src="https://bit.ly/3r9VK50">
            <img src="../assets/thumb/thumbnail-13.jpg"></a>
          <a data-fancybox="gallery" data-src="https://bit.ly/3g24d3R">
            <img src="../assets/thumb/thumbnail-14.jpg"></a>
          <a data-fancybox="gallery" data-src="https://bit.ly/3u7Cxmn">
            <img src="../assets/thumb/thumbnail-15.jpg"></a> 
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
  padding: 0 20%;     /* min-width: 800px */
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 12px;

}

.column img {
  margin-top: 24px;
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