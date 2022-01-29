<template>

<div class='container'>
    <h2>Gallery</h2>

<div>
    <!-- <vs-collapse>
     <vs-collapse-item>
       <div slot="header">
         Collapse item
       </div>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eros tortor, non fringilla lectus cursus et. Fusce vel nisi ante. Aliquam sit amet lectus pharetra, luctus mi sed, aliquet felis. Mauris a tortor viverra, ornare tellus in, consectetur leo.
        <br><br>
        Etiam nec nunc nec nisl luctus tincidunt efficitur vitae elit. Vestibulum iaculis nibh commodo neque ultrices lobortis. Cras magna massa, pretium vitae mattis varius, pharetra nec massa. Aliquam ac ex enim. Quisque consequat dui libero, vel blandit lorem porttitor sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam sed lobortis nisl, quis eleifend metus.
     </vs-collapse-item>
     <vs-collapse-item>
       <div slot="header">
         Collapse item 2
       </div>
       Nunc auctor et leo vitae suscipit. Nullam aliquet purus scelerisque enim hendrerit tristique. Maecenas tincidunt dui arcu, a aliquet nisl venenatis vitae. Praesent mauris ligula, porta at maximus ac, rutrum vitae sapien. Donec a sapien id erat dapibus dignissim sodales in est. Donec gravida dapibus sapien at sollicitudin. Maecenas iaculis quam ex,
       <br><br>
       eu aliquam erat sagittis eget. Suspendisse mollis felis nec ipsum vehicula, at posuere libero viverra. Nam hendrerit dapibus eleifend. Aliquam elit nulla, tincidunt pellentesque enim mollis, consectetur placerat enim. Integer condimentum tristique ante et ullamcorper. Mauris placerat pretium ex. Nam aliquam sed tortor sit amet
       <br><br>
       efficitur. Mauris quis faucibus nulla. Pellentesque egestas non ipsum vel maximus.
     </vs-collapse-item>
     <vs-collapse-item disabled >
       <div slot="header">
         Collapse item 3 - Disabled
       </div>
       Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu
     </vs-collapse-item>
     <vs-collapse-item>
       <div slot="header">
         Collapse item 4
       </div>
       Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus nisl. Nunc venenatis tempus finibus.
     </vs-collapse-item>
    </vs-collapse> -->
  </div>
  
    <!-- <div class="row"> -->
    
    <vs-row vs-w="12" class="row">
        <vs-col
                vs-lg="2"
                vs-sm="1"
                vs-xs="1"
        ></vs-col>
        <vs-col 
                vs-lg="2"
                vs-sm="5"
                vs-xs="5"
                class="column">

        <!-- <div class="column hover11"> -->
          <a data-fancybox="gallery" href="https://bit.ly/35AqhRb">
            <img src="../assets/thumb/thumbnail-01.jpg"></a>
          <a data-fancybox="gallery" href="https://bit.ly/32EcwQd">
            <img src="../assets/thumb/thumbnail-02.jpg"></a>
          <a data-fancybox="gallery" data-src="https://bit.ly/3KTaGfF">
            <img src="../assets/thumb/thumbnail-03.jpg"></a>
          <a data-fancybox="gallery" data-src="https://bit.ly/3rgSxkd">
            <img src="../assets/thumb/thumbnail-04.jpg"></a>
        <!-- </div> -->
        </vs-col>

        
        <vs-col 
                vs-lg="2"
                vs-sm="5"
                vs-xs="5"
                class="column">
        <!-- <div class="column"> -->

          <a data-fancybox="gallery" data-src="https://bit.ly/3r8bYeU">
            <img src="../assets/thumb/thumbnail-05.jpg"></a>
          <a data-fancybox="gallery" data-src="https://bit.ly/34eH9MC">
            <img src="../assets/thumb/thumbnail-06.jpg"></a>
          <a data-fancybox="gallery" data-src="https://bit.ly/32DctnC">
            <img src="../assets/thumb/thumbnail-07.jpg"></a>
        <!-- </div> -->
        </vs-col>

        
        <vs-col
                vs-lg="0"
                vs-sm="1"
                vs-xs="1"
                id="empty-column-1"
        ></vs-col>
        <vs-col
                vs-lg="0"
                vs-sm="1"
                vs-xs="1"
                id="empty-column-2"
        ></vs-col>



        <vs-col 
                vs-lg="2"
                vs-sm="5"
                vs-xs="5"
                class="column">
        <!-- <div class="column"> -->
          <a data-fancybox="gallery" data-src="https://bit.ly/3IIZPTt">
            <img src="../assets/thumb/thumbnail-08.jpg"></a>
          <a data-fancybox="gallery" data-src="https://bit.ly/3Hbdliu">
            <img src="../assets/thumb/thumbnail-09.jpg"></a>
          <a data-fancybox="gallery" data-src="https://bit.ly/32C8986">
            <img src="../assets/thumb/thumbnail-10.jpg"></a>
          <a data-fancybox="gallery" data-src="https://bit.ly/3u8cRWK">
            <img src="../assets/thumb/thumbnail-11.jpg"></a>
        <!-- </div> -->
        </vs-col>

        <vs-col 
                vs-lg="2"
                vs-sm="5"
                vs-xs="5"
                class="column">
        <!-- <div class="column"> -->
          <a data-fancybox="gallery" data-src="https://bit.ly/3KMZLUC">
            <img src="../assets/thumb/thumbnail-12.jpg"></a>
          <a data-fancybox="gallery" data-src="https://bit.ly/3r9VK50">
            <img src="../assets/thumb/thumbnail-13.jpg"></a>
          <a data-fancybox="gallery" data-src="https://drive.google.com/uc?id=16J2PacPsu8S4L8TsGN0yUdaOg26WjKh2">
            <img src="../assets/thumb/thumbnail-14.jpg"></a>
          <a data-fancybox="gallery" data-src="https://bit.ly/3u7Cxmn">
            <img src="../assets/thumb/thumbnail-15.jpg"></a> 
        <!-- </div> -->
        </vs-col>
        <vs-col
                vs-sm="1"
                vs-xs="1"
        ></vs-col>
    </vs-row>
      <!-- </vs-col>
    </vs-row> -->
    <!-- </div> -->
</div>
</template>

<script>
export default {
    name: 'Gallery'
}

</script>

<style>
.row {
  /* display: flex; */
  /* flex-wrap: wrap; */
  max-width: 100%
  /* padding: 0 20%;     min-width: 800px */
}

/* Create four equal columns that sits next to each other */
.column {
  /* flex: 25%;  */
  display: inline-block;
  width: 100%;
  padding: 0 0.5vw;

}




/* Vuesax lg-0 Bug */
#empty-column-1 {
    display: inline-block!important;
}
#empty-column-2 {
    display: inline-block!important;
}
.vs-lg-0 {
  width: 0px!important;
}
/*  */



.column {
  display: block;
}

.column a {
  display: block;
  width: 100%;
}

.column img {
  margin-top: 1vw;
  vertical-align: middle;
  display: block;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}


/* Opacity #1 */
.hover11 figure img {
	opacity: 1;
	-webkit-transition: .2s ease-in-out;
	transition: .2s ease-in-out;
}
.hover11 figure:hover img {
	opacity: .5;
}

@-webkit-keyframes shine {
	100% {
		left: 125%;
	}
}
@keyframes shine {
	100% {
		left: 125%;
	}
}
/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  /* .row {
    padding: 0 10%;
  } */
  .column {
    /* flex: 50%; */
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  /* .row {
    padding: 0 8vw;
  } */
  .column {
    /* flex: 50%; */
    max-width: 50%;
  }
}
</style>