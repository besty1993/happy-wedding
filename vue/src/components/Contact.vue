<template>
  <div class="contact-container">
    <h2>Contact</h2>
    <ContactItem :data="groomObj" />
    <ContactItem :data="brideObj" />

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
      showMinorContact: false,
      groomObj: {
        text: {
          kr: "신랑에게 연락하기",
          en: "Contact the Groom",
          th: "asdf",
          jp: "asdf",
        },
        name: {
          kr: "양창은",
          en: "Changeun Yang",
          th: "asdf2",
          jp: "asdf3",
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
          en: "Contact the Bride",
          th: "asdf",
          jp: "asdf",
        },
        name: {
          kr: "세라오스니",
          en: "Sunee Sae-lao",
          th: "asdf2",
          jp: "asdf3",
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
        en: "Contact Parents",
        th: "asdf",
        jp: "asdf"
      },
      groomParentsTxt: {
        kr: "신랑측 혼주",
        en: "Parents of the Groom"
      },
      groomParentsList: [
        {
          text: {
            kr: "아버지",
            en: "Father",
            th: "asdf",
            jp: "asdf",
          },
          name: {
            kr: "양선직",
            en: "Sunjik Yang",
            th: "asdf2",
            jp: "asdf3",
          },
          contacts: [
            {
              key: "phone",
              value: "+82-10-5464-8571",
            },
            {
              key: "sns",
              value: "asdf"
            },
          ]
        },
        {
          text: {
            kr: "어머니",
            en: "Mother",
            th: "asdf",
            jp: "asdf",
          },
          name: {
            kr: "유인숙",
            en: "Insook Yu",
            th: "asdf2",
            jp: "asdf3",
          },
          contacts: [
            {
              key: "phone",
              value: "+82-10-3207-8571",
            },
            {
              key: "sns",
              value: "asdf"
            },
          ]
        },
      ],
      brideParentsTxt: {
        kr: "신부측 혼주",
        en: "Parents of the Bride"
      },
      brideParentsList: [
        {
          text: {
            kr: "아버지",
            en: "Father",
            th: "asdf",
            jp: "asdf",
          },
          name: {
            kr: "세라오쏨퐁",
            en: "asdf1",
            th: "asdf2",
            jp: "asdf3",
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
            th: "asdf",
            jp: "asdf",
          },
          name: {
            kr: "캄푸쏨분",
            en: "asdf1",
            th: "asdf2",
            jp: "asdf3",
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
      this.showMinorContact = !this.showMinorContact;
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
};
</script>

<style scoped>
.contact-container {
  text-align: center;

}

</style>