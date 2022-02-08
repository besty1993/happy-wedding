<template>
  <div class="contact-item-container">
    <div class="contact-item-box">
      <h4>{{ data.text }}</h4>
      <p>{{ data.name }}</p>
    </div>

    <div class="space-short">
      <span
          v-for="(contact, idx) in data.contacts"
          :key="idx">
        <a 
            v-if="contact.key=='phone'"
            :href="`tel:${contact.value}`">
          <img :src="getIconPath(contact.key)" />
        </a>
        <a 
            v-else
            :href="contact.value"
            target="_blank">
          <img :src="getIconPath(contact.key)" />
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactItem",
  props: {
    data: Object,
  },
  methods: {
    getIconPath: function(iconType) {
      return require('../assets/icon/icon_'+iconType+'.svg')
    }
  }
};
</script>

<style scoped>
h4 {
  display: inline-block;
  margin: 16px;
  margin-left: 0px;
}
p {
  display: inline-block;
  margin: 16px;
  margin-right: 16px;
}

a {
  margin: 8px;
}

.contact-item-container {
  margin-bottom: 32px;
}

.contact-item-box {
  margin: 16px 0;
}
</style>

