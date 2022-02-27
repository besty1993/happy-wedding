<template>
  <div 
    v-show="['kr','en','th'].includes(lang)"
    class="container"
    id="account-container"
  >
    <h2>{{accountTitle[lang]}}</h2>
    <vs-row vs-justify="center" vs-align="center">
      <vs-col
        vs-lg="4"
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
              vs-lg="8"
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
                  v-for="(account, idx) in groomKr"
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
              vs-lg="8"
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
                  v-for="(account, idx) in brideKr"
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
          <pre class="accountdesc">{{accountText[lang]}}</pre>
        </div>

        <!-- Thai Account -->
        <div v-show="lang==='th'">
          <pre class="accountdesc">{{accountText[lang]}}</pre>

          <vs-row
            vs-lg="6"
            vs-sm="8"
            vs-xs="10"
            vs-justify="center"
            vs-align="center"
          >
            <vs-col
              vs-justify="center"
              vs-lg="8"
              vs-sm="10"
              vs-xs="10"
              class="account-unit"
            >
              <Button
                class="btn"
                color="primary"
                type="border"
                iconsvg="fa-caret-down.svg"
                :text="btnTxt[lang]"
                @btn-click="toggleBrideAccount"
              />
              <div v-show="showBrideAccount">
                <AccountItem
                  v-for="(account, idx) in brideTh"
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
      accountTitle: {
        kr: "마음 보내실 곳",
        en: "A little note on Gifts",
        th: "A little note on Gifts",
      },
      btnTxt: {
        kr: "신부측 계좌번호",
        th: "ข้อมูลบัญชี",
      },
      groomKr: [
        {
          name: "양선직",
          bank: "하나은행",
          account: "34591027397207",
          type: "혼주 계좌",
        },
        {
          name: "양창은",
          bank: "우리은행",
          account: "1002745899033",
          type: "신랑 계좌",
        },
      ],
      brideKr: [
        {
          name: "세라오스니",
          bank: "우리은행",
          account: "1002462804593",
          type: "신부 계좌",
        },
      ],
      brideTh: [
        {
          name: "Sunee Sae-Lao",
          bank: "KBANK",
          account: "772-2288-37-2",
          type: "Account"
        }
      ],
      accountText: {
        en: `We really hope that you can join us
on our special day. Due to unforeseen 
circumstances, you'll make our memories
complete in every single way.

If it is your wish to bless us with a gift,
gift of cash towards our honeymoon
would be very much appreciated.
However if you would prefer a gift, 
please feel free to surprise us
in your own special way.

♡`,
        th: `สำหรับคนที่อยากมอบของขวัญ 
ท่านสามารถส่งข้อความส่วนตัว
เพื่อขอที่อยู่ที่ไทย หรือเกาหลีได้ 
หรือสามารถโอนเงินมาได้
ตามเลขบัญชีด้านล่างนี้

ขอบคุณสำหรับการเป็นส่วนหนึ่งในชีวิต
และร่วมสร้างความทรงจำที่งดงาม
ในวันสำคัญของพวกเรา`
      }
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

.accountdesc{
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>

<style scoped>
h2 {
  font-size: 50px;
}
</style>