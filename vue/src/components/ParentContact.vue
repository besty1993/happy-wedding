<template>
  <div class="parents-contact-container">
    <h4>{{ text }}</h4>
    <ParentContactItem title="아버지" :data="fatherData" />
    <ParentContactItem text="어머니" :data="motherData" />
  </div>
</template>

<script>
import ParentContactItem from "./ParentContactItem";

export default {
  name: "ParentContact",
  components: {
    ParentContactItem,
  },
  props: {
    text: String,
    fatherData: Object,
    motherData: Object,
  },
};
</script>

<style scoped>
h4 {
  width: fit-content;
}
.parents-contact-container {
  width: 30%;
  margin: 0 10%;
  display: inline-block;
}
</style>