<template>
  <div class="contact-container">
    <h2>Contact</h2>
    <ContactItem :data="groomObj" />
    <ContactItem :data="brideObj" />

    <div v-show="(lang==='kr')||(lang==='th')">
      <Button
        v-model="lang"
        class="btn"
        color="primary"
        type="border"
        iconsvg="fa-caret-down.svg"
        :text="btnTxt[lang]"
        @btn-click="toggleParentsContact"
      />
      <div v-show="showMinorContact">
        <vs-row
          vs-justify="center"
          vs-align="center"
        >
          <vs-col
            vs-justify="center"
            vs-align="center"
            vs-lg="4"
            vs-sm="4"
            vs-xs="8"
          >
            <ParentsContact
              v-model="lang"
              :text="groomParentsTxt[lang]"
              :parentsList="groomParentsList"
            />
          </vs-col>
          <vs-col
            vs-justify="center"
            vs-align="center"
            vs-lg="4"
            vs-sm="4"
            vs-xs="8"
          >
            <ParentsContact
              v-model="lang"
              :text="brideParentsTxt[lang]"
              :parentsList="brideParentsList"
            />
          </vs-col>
        </vs-row>
        <!-- <ParentsContact
            v-model="lang"
            :text="groomParentsTxt[lang]"
            :parentsList="groomParentsList"
        />
        <ParentsContact
            v-model="lang"
            :text="brideParentsTxt[lang]"
            :parentsList="brideParentsList"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import ContactItem from "./ContactItem"
import ParentsContact from "./ParentsContact"
import Button from "./Button";

export default {
  name: "Contact",
  components: {
    ContactItem,
    ParentsContact,
    Button,
  },
  data() {
    return {
      showMinorContactBtn: true,
      showMinorContact: false,
      groomObj: {
        text: {
          kr: "신랑에게 연락하기",
          en: "Groom",
          th: "เจ้าบ่าว",
          jp: "新郎",
        },
        name: {
          kr: "양창은",
          en: "Changeun Yang",
          th: "ชางอึน ยัง",
          jp: "ヤン チャンウン",
        },
        contacts: [
          {
            key: "phone",
            value: "+82-10-7118-8571"
          },
          {
            key: "messenger",
            value: "https://m.me/besty1993",
          },
          {
            key: "line",
            value: "https://line.me/ti/p/1oS8VivYmG#~",
          },
          {
            key: "kakaotalk",
            value: "http://qr.kakao.com/talk/GOK_CkRf2xxUlpP5txKxJfnvbgc-",
          }
        ]
      },
      brideObj: {
        text: {
          kr: "신부에게 연락하기",
          en: "Bride",
          th: "เจ้าสาว",
          jp: "新婦",
        },
        name: {
          kr: "세라오스니",
          en: "Sunee Sae-lao",
          th: "สุนีย์ แซ่เล้า",
          jp: "セーラオ スニー",
        },
        contacts: [
          {
            key: "phone",
            value: "+82-10-2719-8571",
          },
          {
            key: "messenger",
            value: "https://m.me/waldorfxx",
          },
          {
            key: "line",
            value: "https://line.me/ti/p/1f-uwtKqdS#~",
          },
          {
            key: "kakaotalk",
            value: "http://qr.kakao.com/talk/ylX4r.oiQpxVB33way2WwdjJU.s-",
          },
        ]
      },
      btnTxt: {
        kr: "혼주에게 연락하기",
        en: "Parents",
        th: "ญาติผู้ใหญ่",
        jp: "ご両親に連絡"
      },
      groomParentsTxt: {
        kr: "신랑측 혼주",
        en: "Parents of the Groom",
        th: "ครอบครัวเจ้าบ่าว",
        jp: "新郎のご両親",
      },
      groomParentsList: [
        {
          text: {
            kr: "아버지",
            en: "Father",
            th: "พ่อเจ้าบ่าว",
            jp: "父親",
          },
          name: {
            kr: "양선직",
            en: "Sunjik Yang",
            th: "ซนจิก ยัง",
            jp: "ヤン スンジク",
          },
          contacts: [
            {
              key: "phone",
              value: "+82-10-5464-8571",
            },
            {
              key: "sns",
              value: "โซเชียลมีเดีย"
            },
          ]
        },
        {
          text: {
            kr: "어머니",
            en: "Mother",
            th: "แม่เจ้าบ่าว",
            jp: "母親",
          },
          name: {
            kr: "유인숙",
            en: "Insook Yu",
            th: "อินซุก ยู",
            jp: "ユ インスク",
          },
          contacts: [
            {
              key: "phone",
              value: "+82-10-3207-8571",
            },
            {
              key: "sns",
              value: "โซเชียลมีเดีย"
            },
          ]
        },
      ],
      brideParentsTxt: {
        kr: "신부측 혼주",
        en: "Parents of the Bride",
        th: "ครอบครัวเจ้าสาว",
        jp: "新婦のご両親",
      },
      brideParentsList: [
        {
          text: {
            kr: "아버지",
            en: "Father",
            th: "บิดา",
            jp: "父親",
          },
          name: {
            kr: "세라오쏨퐁",
            en: "Somphong Sae-Lao",
            th: "สมพงษ์ แซ่เล้า",
            jp: "セーラオ ソンポン",
          },
          contacts: [
            {
              key: "phone",
              value: "+66-89-798-9751",
            },
            {
              key: "sns",
              value: "https://line.me/ti/p/RpmxB16kqH#~",
            },
          ]
        },
        {
          text: {
            kr: "어머니",
            en: "Mother",
            th: "มารดา",
            jp: "母親",
          },
          name: {
            kr: "캄푸쏨분",
            en: "Somboon Khamphoo",
            th: "สมบุญ คำภู",
            jp: "ソンブン カンプー",
          },
          contacts: [
            {
              key: "phone",
              value: "+66-97-030-9100",
            },
            {
              key: "sns",
              value: "https://line.me/ti/p/sXsY6X7cCp#~",
            },
          ]
        },
      ]
    };
  },
  methods: {
    toggleParentsContact() {
      if (this.showMinorContactBtn) {
        this.showMinorContact = !this.showMinorContact;
      }
      else {
        this.showMinorContact = false;
      }
    },
  },
  computed: {
    lang() {
      var langOptions = ["kr", "en", "th", "jp"];
      var langQuery = this.$route.query.lang;
      if (!langOptions.includes(langQuery)) {
        langQuery = 'kr'
      }
      return langQuery
    }
  },
  mounted() {
    const currentLang = this.lang
    this.showMinorContactBtn = (currentLang==='kr')||(currentLang==='th');
  },
};
</script>

<style scoped>
.contact-container {
  text-align: center;

}

</style>