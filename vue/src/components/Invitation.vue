<template>
  <div class="container">
    <h2>Invitation</h2>
    <pre>{{ text[lang] }}</pre>

    <img src="../assets/icon/invitation_flower.svg" />
  </div>
</template>

<script>
export default {
  name: "Invitation",
  data() {
    return {
      text: {
        kr: `서로 다른 두 사람의 만남이었지만
같이했던 시간들은 서로가 서로에게
꼭 필요한 존재임을 깨닫기에 충분했습니다.

함께 할 때 가장 나다울 수있는 사람과
같은 방향을 바라보며
새로운 여행을 떠나고자합니다.

사랑으로 함께가는 길, 설레는 여정에
소중한 여러분들을 초대합니다.

----------

코로나19의 종식을 예측할 수 없어
결혼식을 예정대로 진행하게 되었습니다.
혹 예식에 참석하지 못하시더라도
새로운 여정을 시작하고자 하는 저희를
축복해주시면 감사하겠습니다.`,
        en: `Dear family and friends,

We hope you and yours are healthy and safe during this time,
and we appreciate all the love and support we’ve received from each of you.

Although the COVID-19 crisis has created much uncertainty,
as of now, we will be proceeding with our wedding on April 10, 2022.

We understand that the situation is in constant flux,
but we decided to proceed the wedding,
since we cannot estimate when the COVID-19 will be over.
We will keep you informed if that should change, however,
so please continue to check out our website for updates.

To our international guests,
we understand it may be difficult or even impossible to travel.
Still, we hope you will be able to join us virtually.

Please also feel free to reach out to us directly with any questions or concerns.

Thank you for your patience and understanding,
and we cannot wait to be together with you in person again come spring!

Love,

Changeun and Sunee`,
        th: "",
        jp: `謹啓

陽春の候 皆様にはお健やかにお過ごしのことと お慶び申し上げます
このたび 私たちは2022年4月10日から 人生を共にすることとなりました

つきましてはその新たな人生の門出の 喜びと感謝の気持ちをお伝えしたく
ささやかなウェディングパーティーを催したいと思います
おいそがしいことと思いますが
二人のスタートを共に祝っていただけたら幸せです
心よりお待ちしております

尚当日会場では ウイルス感染症への対策を徹底して行ってまいります
ご心配なことやご不安なことがございましたらお気兼ねなくご連絡くださいませ

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
    }
  },
};
</script>

<style scoped>
* {
  margin: 50px 0;
}

pre {
  font-family: "Gowun Batang", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
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