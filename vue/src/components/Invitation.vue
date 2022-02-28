<template>
  <div class="container">
    <h2>Invitation</h2>
    <pre :style="'font-size:'+text_font_size[lang]">{{ text[lang] }}</pre>

    <img src="../assets/icon/invitation_flower.svg" />
  </div>
</template>

<script>
export default {
  name: "Invitation",
  data() {
    return {
      text_font_size: {
        'kr': '15px',
        'th': '14px',
        'en': '14px',
        'jp': '14px',
      },
      text: {
        kr: `서로 다른 두 사람의 만남이었지만
같이했던 시간들은 서로가 서로에게
꼭 필요한 존재임을 깨닫기에 충분했습니다.

함께 할 때 가장 나다울 수있는 사람과
같은 방향을 바라보며
새로운 여행을 떠나고자합니다.

사랑으로 함께가는 길, 설레는 여정에
소중한 여러분들을 초대합니다.

-

코로나19의 종식을 예측할 수 없어
결혼식을 예정대로 진행하게 되었습니다.
혹 예식에 참석하지 못하시더라도
새로운 여정을 시작하고자 하는 저희를
축복해주시면 감사하겠습니다.`,
        en: `When you realise you want to
spend the rest of your life with someone, 
you want it to start as soon as possible.

Taking their first step to eternity,
we would love to have you join us
as we begin our Happily Ever After.

To our international guests,
We do understand what is happening in the world.
Also your safety and comfort is our highest priority.
Sadly, we are unable to share this day in person
with all of our friends and family.
We would love for you to join us virtually and
witness the celebration of our marriage.

We hope that you'll celebrate
in your heart with best wishes from afar,
please stay well and know that
you are always in our thoughts.

Changeun and Kate(Sunee)`,
        th: `บางครั้งท้องฟ้าที่เราว่าสวยงาม 
อาจจะสวยงามมากยิ่งขึ้น ตอนที่มีใครอีกคนมานั่งดูด้วยกัน
เราสองคนได้ค้นพบความสวยงามของการมีใครอีกคนอยู่ข้าง ๆ 
และได้ตัดสินใจร่วมกันสร้างการเดินทางครั้งใหม่ที่แสนวิเศษ

หวังว่าทุกๆ คนจะสามารถร่วมยินดี
และอวยพรไปกับเราในวันสำคัญที่จะถึงนี้
แต่ด้วยสถานการณ์ในขณะนี้เป็นอุปสรรคอย่างมาก
แม้การเข้าร่วมงานจะเป็นเรื่องยากลำบาก
แต่พวกเราก็ยังมีความเชื่อว่าทุกคนจะ
สามารถร่วมสร้างความทรงจำไปกับเราได้ไม่ทางใดก็ทางหนึ่ง

พวกเราขอขอบคุณทุกคนที่ร่วมอวยพร
สนับสนุน และเป็นส่วนหนึ่งในชีวิตของพวกเรา
พวกเราหวังว่าเราจะได้เจอกันอีกครั้งเมื่อสถานการณ์เบาบางลง
ในวันที่ทุกคนสามารถกลับไปใช้ชีวิตในแบบปกติสุขได้เช่นเดิม`,
        jp: `謹啓

陽春の候
皆様にはお健やかにお過ごしのことと
お慶び申し上げます
このたび 私たちは2022年4月10日から
人生を共にすることとなりました

つきましてはその新たな人生の門出の
喜びと感謝の気持ちをお伝えしたく
ささやかなウェディングパーティーを催したいと思います
お忙しいことだと思いますが
二人のスタートを共に祝っていただけたら幸いです
心よりお待ちしております

尚当日会場では ウイルス感染症への対策を
徹底的におこなってまいります
ご心配なことやご不安なことがございましたら
お気兼ねなくご連絡くださいませ

謹白`,
      }
    };
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

<style scoped>
* {
  margin: 50px 0;
}

pre {
  font-family: 'Gowun Batang','Single Day', serif;
  font-style: normal;
  font-weight: normal;
  /* font-size: 2vh; Deafult: 18px */
  line-height: 48px;
  text-align: center;
  color: #231f20;
}

img {
  position: flex;
  width: 96.11px;
  height: 85.69px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style> 