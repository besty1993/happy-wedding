<template>
  <div class="parent-contact-item-container">
    <div class="parent-contact-item-box">
      <h4 class="parent-contact-item-item">{{ data.type }}</h4>
      <p class="parent-contact-item-item">{{ data.name }}</p>
    </div>
    <div class="parent-contact-item-box">
      <a :href="`tel:${data.phone}`"
          class="parent-contact-item-item">
        <img src="../assets/icon/icon_phone.svg" />
      </a>
      <a :href="data.sns" target="_blank"
          class="parent-contact-item-item">
        <img src="../assets/icon/icon_messenger.svg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParentContactItem",
  props: {
    data: Object,
  },
};
</script>

<style scoped>
.parent-contact-item-container {
  margin: 32px 0;
}
.parent-contact-item-item {
  width: fit-content;
  display: inline-block;
}
</style>