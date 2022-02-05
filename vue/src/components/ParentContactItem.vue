<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  name: "ParentContactItem",
  props: {
    text: String,
    data: Object,
  },
};
</script>

<style scoped>
* {
  width: fit-content;
  display: block;
}
</style>