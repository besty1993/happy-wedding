<template>
  <vs-row 
      vs-justify="center"
      class="row">
    <vs-col
        vs-lg="8"
        vs-sm="10"
        vs-xs="10">
      <div class="video-container">
        <!-- <iframe 
            class="video"
            src="https://drive.google.com/file/d/1-u-4-CluvQSHHrtwEoSdb4R57-HARyui/preview"
            allow="autoplay">
        </iframe> -->
        <iframe 
            class="video"
            src="https://www.dropbox.com/s/5k7u0bhvoo6ingk/Wedding_VIDEO_KAteChangeun.mp4?dl=0&raw=1"
            allowfullscreen
            controls controlsList="nodownload">
        </iframe>
        <!-- <iframe
            class="video"
            src="https://onedrive.live.com/embed?cid=54CB340473703CAF&resid=54CB340473703CAF%2110595&authkey=AKwj8uFj-aW6x-s" 
            scrolling="no"
            allowfullscreen>
        </iframe> -->
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: "Video",

}
</script>

<style scoped>

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 99.89%;
  height: 100%;
  border: 0;
}
</style>


