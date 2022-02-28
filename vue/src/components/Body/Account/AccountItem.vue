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
          vs-w="9">
        <p class="account-item-context">{{ bank }} {{ account }}</p>
        <p class="account-item-context">{{ name }}</p>
      </vs-col>

      <vs-col
          vs-justify="right"
          vs-align="center"
          vs-w="3"
          class="right-align">
        <button @click="copy(account)">Copy</button>
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
    copy(text) {

      function selectElementText(element) {
        if (document.selection) {
          var range = document.body.createTextRange();
          range.moveToElementText(element);
          range.select();
        } else if (window.getSelection) {
          var range2 = document.createRange();
          range2.selectNode(element);
          window.getSelection().removeAllRanges();
          window.getSelection().addRange(range2);
        }
      }

      try {
        var element = document.createElement('DIV');
        element.textContent = text;
        document.body.appendChild(element);
        selectElementText(element);
        document.execCommand('copy');
        element.remove();

        alert("계좌번호를 복사하였습니다. \nThe account number has been copied.\nบันทึกหมายเลขบัญชีแล้ว");
      } catch {
        alert("계좌번호 복사에 실패하였습니다.\nSorry, you cannot copy the account number now. \nไม่สามารถบันทึกหมายเลขบัญชีได้ในขณะนี้");
      }
    },
  },
};
</script>

<style scoped>
.account-item-container {
  /* width: 450px; */
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
  padding: 6px 16px 6px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 20px;
}
</style>