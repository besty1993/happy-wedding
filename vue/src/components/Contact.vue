<template>
  <div class="contact-container">
    <h2>Contact</h2>
    <ContactItem :data="groomObj" />
    <ContactItem :data="brideObj" />

    <Button
      class="btn"
      color="primary"
      type="border"
      iconsvg="fa-caret-down.svg"
      text="혼주분께 연락하기"
      @btn-click="toggleParentsContact"
    />

    <div v-show="showMinorContact">
      <ParentsContact
          text="신랑측 혼주"
          :parentsList="groomParentsList"
      />
      <ParentsContact
          text="신부측 혼주"
          :parentsList="brideParentsList"
      />
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
        text: "신랑에게 연락하기",
        name: "양창은",
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
        text: "신부에게 연락하기",
        name:  "세라오스니",
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
      groomParentsList: [
        {
          text: "아버지",
          name: "양선직",
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
          text: "어머니",
          name: "유인숙",
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
      brideParentsList: [
        {
          text: "아버지",
          name: "세라오 쏨퐁",
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
          text: "어머니",
          name: "캄푸 쏨분",
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
};
</script>

<style scoped>
.contact-container {
  text-align: center;

}

</style>