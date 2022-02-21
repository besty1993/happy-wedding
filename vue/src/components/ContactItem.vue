<template>
  <div class="contact-item-container">
    <div class="contact-item-box">
      <h4>{{ data.text[lang] }}</h4>
      <p>{{ data.name[lang] }}</p>
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
  },
  computed: {
    lang() {
      // Parse query : https://stackoverflow.com/questions/35914069/how-can-i-get-query-parameters-from-a-url-in-vue-js
      let uri = window.location.search.substring(1); 
      let params = new URLSearchParams(uri);
      var langQuery = params.get("lang");

      const langOptions = ["kr", "en", "th", "jp"];
      
      if (!langOptions.includes(langQuery)) {
        langQuery = 'kr'
      }

      return langQuery
    },
  },
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

