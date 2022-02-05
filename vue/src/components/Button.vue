<template>
    <button
        @click="onClick()" 
        class="btn btn-one">{{text}}
        <img :src="iconPath()" id="image">
        <!-- <img src="../assets/icon/fa-caret-down.svg">         -->
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        iconsvg: String
    },
    methods: {
        onClick() {
            var img = document.getElementById("image");

            if (img.classList.contains("rotated-image")) {
              img.classList.remove("rotated-image")
              img.classList.add("normal-image")
            }
            else {
              img.classList.add("rotated-image")
              img.classList.remove("normal-image")
            }

            this.$emit('btn-click')
        },
        iconPath() {
            return require('@/assets/icon/'+this.iconsvg)
        }
    },
    
}


</script>

<style scoped>
* {
    display: inline-block;
    text-align: center;
    align-items: center;
    font-style: normal;
    font-weight: normal;
    color: #88B077;

}

.normal-image {
  transition: 0.2s ease-in-out;
  /* -webkit-transform: rotate(180deg);
          transform: rotate(180deg); */
}

.rotated-image {
  transition: 0.2s ease-in-out;
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

/* 
button {
  position: relative;
  outline: none;
  text-decoration: none;
  border-radius: 50px;

  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  height: 60px;
  width: 210px;
  opacity: 1;
  background-color: #ffffff;
  border: 1px solid rgba(22, 76, 167, 0.6); }
  button span {
    color: #164ca7;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.7px; }
  button:hover {
    animation: rotate 0.7s ease-in-out both; }
    button:hover span {
      animation: storm 0.7s ease-in-out both;
      animation-delay: 0.06s; }

@keyframes rotate {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0); }
  25% {
    transform: rotate(3deg) translate3d(0, 0, 0); }
  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0); }
  75% {
    transform: rotate(1deg) translate3d(0, 0, 0); }
  100% {
    transform: rotate(0deg) translate3d(0, 0, 0); } }

@keyframes storm {
  0% {
    transform: translate3d(0, 0, 0) translateZ(0); }
  25% {
    transform: translate3d(4px, 0, 0) translateZ(0); }
  50% {
    transform: translate3d(-3px, 0, 0) translateZ(0); }
  75% {
    transform: translate3d(2px, 0, 0) translateZ(0); }
  100% {
    transform: translate3d(0, 0, 0) translateZ(0); } } */


/* Add this to align vertically */
button > img,
button > span {
  vertical-align: middle;
}
</style>

