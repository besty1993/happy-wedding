<template>
  <div class="parents-contact-container">
    <h3>{{ text }}</h3>
    <ContactItem 
      v-for="(parentObj, idx) in parentsList"
      :key="idx"
      :data="parentObj" />
  </div>
</template>

<script>
import ContactItem from "./ContactItem";

export default {
  name: "ParentsContact",
  components: {
    ContactItem,
  },
  props: {
    text: String,
    parentsList: Array,
  },
};
</script>

<style scoped>
h3 {
  margin: 42px 0;
  /* width: fit-content; */
}
.parents-contact-container {
  /* width: 40%; */
  /* margin: 0 10%; */
  display: inline-block;
}
</style>