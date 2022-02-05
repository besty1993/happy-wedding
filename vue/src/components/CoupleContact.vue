<template>
  <div>
    <div>
      <h4>{{ text }}</h4>
      <p>{{ data.name }}</p>
    </div>

    <div class="space-short">
      <a :href="`tel:${data.phone}`">
        <img src="../assets/icon/icon_phone.svg" />
      </a>
      <a :href="data.messenger" target="_blank">
        <img src="../assets/icon/icon_messenger.svg" />
      </a>
      <a :href="data.line" target="_blank">
        <img src="../assets/icon/icon_line.svg" />
      </a>
      <a :href="data.kakao" target="_blank">
        <img src="../assets/icon/icon_kakaotalk.svg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoupleContact",
  props: {
    text: String,
    data: Object,
  },
};
</script>

<style>
h4 {
  display: inline-block;
  margin: 10px;
}
p {
  display: inline-block;
  margin: 10px;
}
</style>

