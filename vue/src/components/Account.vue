<template>
  <div class="account-container">
    <h2>마음 보내실 곳</h2>

    <div class="account-box">

      <div class="account-unit">
        <Button
          class="btn"
          color="primary"
          type="border"
          iconsvg="fa-caret-down.svg"
          text="신랑측 계좌번호"
          @btn-click="toggleGroomAccount"
        />
        <div v-show="showGroomAccount">
          <AccountItem 
              text="혼주 계좌"
              :name="groom[0].name"
              :bank="groom[0].bank"
              :account="groom[0].account"/>
          <AccountItem 
              text="신랑 계좌"
              :name="groom[1].name"
              :bank="groom[1].bank"
              :account="groom[1].account"/>
        </div>
      </div>


      <div class="account-unit">
        <Button
          class="btn"
          color="primary"
          type="border"
          iconsvg="fa-caret-down.svg"
          text="신랑측 계좌번호"
          @btn-click="toggleBrideAccount"
        />
        <div v-show="showBrideAccount">
          <AccountItem 
              text="신부 계좌"
              :name="bride[0].name"
              :bank="bride[0].bank"
              :account="bride[0].account"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Button from "./Button";
import AccountItem from "./AccountItem";

export default {
  name: "Account",
  components: {
    Button,
    AccountItem,
  },
  data() {
    return {
      showGroomAccount: false,
      showBrideAccount: false,
      groom: [
        {
          name: "양창은",
          bank: "우리",
          account: "1002745899033",
        },
        {
          name: "양선직",
          bank: "",
          account: "",
        },
      ],
      bride: [
        {
          name: "세라오스니",
          bank: "우리",
          account: "1002462804593",
        },
      ],
    };
  },
  methods: {
    toggleGroomAccount() {
      this.showGroomAccount = !this.showGroomAccount;
    },
    toggleBrideAccount() {
      this.showBrideAccount = !this.showBrideAccount;
    },
  },
};
</script>

<style>

.account-container {
  text-align: center;
}

.account-box {
  margin: 0 auto;
  width: 600px;
  height: auto;
  background: rgba(136, 176, 119, 0.07);
  border-radius: 40px;
  padding: 1px 0;
}

.account-unit {
  margin: 30px 0;
}
</style>