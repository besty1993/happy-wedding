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
button {
  margin-top: 3vh;
  width: 233px;
  height: 45px;

  border: 2px solid;
  box-sizing: border-box;
  border-radius: 50px;
  border: blue;
}

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
  -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
}

.rotated-image {
  transition: 0.2s ease-in-out;
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}



/* Add this to align vertically */
button > img,
button > span {
  vertical-align: middle;
}
</style>

