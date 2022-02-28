<template>
  <button @click="onClick()" class="btn">
    {{ text }}
    <img :src="iconPath(iconsvg)" id="image" />
    <!-- <img src="../assets/icon/fa-caret-down.svg">         -->
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    iconsvg: String,
  },
  methods: {
    onClick() {
      var img = document.getElementById("image");

      if (img.classList.contains("rotated-image")) {
        img.classList.remove("rotated-image");
        img.classList.add("normal-image");
      } else {
        img.classList.add("rotated-image");
        img.classList.remove("normal-image");
      }

      this.$emit("btn-click");
    },
    iconPath(icon) {
      return require("@/assets/icon/" + icon);
    },
  },
};
</script>

<style scoped>
button {
  font-size: 14px;
  margin: auto;
  line-height: 39px;
  width: 255px;
  height: 45px;
  border: 2px solid;
  border-radius: 50px;
  background-color: transparent;
  border-color: #88b077;
  color: #88b077;
  display: flex;
  justify-content: center;
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

#image {
  margin-left: 16px;
  margin-right: -8px;
}
.btn {
  cursor: pointer;
  transition: all 0.5s ease 0s;
}

.btn:hover {
  background: rgba(136, 176, 119, 0.1);
  color: #88b077;
}

.btn:hover img {
  transition: 0ms;
  transition-delay: 0ms;
  filter: invert(50%) sepia(0%) saturate(0%) hue-rotate(349deg) brightness(96%)
    contrast(87%);
}
</style>

