<template>
  <div 
    v-show="lang==='kr'"
    class="container"
    id="account-container"
  >
    <h2>마음 보내실 곳</h2>
    <vs-row vs-justify="center" vs-align="center">
      <vs-col
        vs-lg="6"
        vs-sm="8"
        vs-xs="10"
        vs-justify="center"
        vs-align="center"
        class="account-box"
      >
        <!-- Korean Account -->
        <div v-show="lang==='kr'">
          <vs-row vs-justify="center" vs-align="center">
            <vs-col
              vs-justify="center"
              vs-align="center"
              vs-lg="10"
              vs-sm="10"
              vs-xs="10"
              class="account-unit"
            >
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
                  v-for="(account, idx) in groom"
                  :key="idx"
                  :text="account.type"
                  :name="account.name"
                  :bank="account.bank"
                  :account="account.account"
                />
              </div>
            </vs-col>
          </vs-row>

          <vs-row
            vs-lg="6"
            vs-sm="8"
            vs-xs="10"
            vs-justify="center"
            vs-align="center"
          >
            <vs-col
              vs-justify="center"
              vs-lg="10"
              vs-sm="10"
              vs-xs="10"
              class="account-unit"
            >
              <Button
                class="btn"
                color="primary"
                type="border"
                iconsvg="fa-caret-down.svg"
                text="신부측 계좌번호"
                @btn-click="toggleBrideAccount"
              />
              <div v-show="showBrideAccount">
                <AccountItem
                  v-for="(account, idx) in bride"
                  :key="idx"
                  :text="account.type"
                  :name="account.name"
                  :bank="account.bank"
                  :account="account.account"
                />
              </div>
            </vs-col>
          </vs-row>
        </div>

        <!-- English Gifts -->
        <div v-show="lang==='en'">
        </div>

        <!-- Thai Account -->
        <div v-show="lang==='th'">
        </div>
        
      </vs-col>
    </vs-row>
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
          name: "양선직",
          bank: "하나",
          account: "34591027397207",
          type: "혼주 계좌",
        },
        {
          name: "양창은",
          bank: "우리",
          account: "1002745899033",
          type: "신랑 계좌",
        },
      ],
      bride: [
        {
          name: "세라오스니",
          bank: "우리",
          account: "1002462804593",
          type: "신부 계좌",
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
    }
  },
  computed: {
    lang() {
      var langOptions = ["kr", "en", "th", "jp"];
      var langQuery = this.$route.query.lang;
      if (!langOptions.includes(langQuery)) {
        langQuery = 'kr'
      }
      return langQuery
    },
  },
};
</script>

<style>
.account-container {
  text-align: center;
}

.account-box {
  height: auto;
  background: rgba(136, 176, 119, 0.07);
  border-radius: 40px;
  padding: 1px 0;
}

.account-unit {
  margin: 30px 0;
}
</style>

<style scoped>
h2 {
  font-size: 50px;
}
</style>