<template>
  <div class="account-item-container">
    <vs-row
        vs-justify="center"
        vs-align="flex-start"
        vs-w="12">

      <vs-col
          vs-justify="left"
          vs-align="center"
          vs-w="12">
        <h4 class="account-item-context">{{ text }}</h4>
      </vs-col>

      <vs-col
          vs-justify="left"
          vs-align="center"
          vs-w="8">
        <p class="account-item-context">{{ bank }}은행 {{ account }}</p>
        <p class="account-item-context">{{ name }}</p>
      </vs-col>

      <vs-col
          vs-justify="right"
          vs-align="center"
          vs-w="4"
          class="right-align">
        <button @click="copy(account)">복사하기</button>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "AccountItem",
  props: {
    text: String,
    name: String,
    bank: String,
    account: String,
  },
  methods: {
    async copy(txt) {
      await navigator.clipboard.writeText(txt);
      $.toast("계좌번호가 복사되었습니다.")
      // alert("계좌번호가 복사되었습니다.")
    }
  }
};
</script>

<style scoped>
.account-item-container {
  width: 450px;
  margin: auto;
}

.account-item-context {
  display: block;
  text-align: left;
}

h4.account-item-context {
  padding: 10px 0;
}

p.account-item-context {
  margin: 1px 0;
}

.right-align {
  text-align: right;
}

button {
  background-color: #88B077;
  border: none;
  color: white;
  padding: 6px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 20px;
}
</style>