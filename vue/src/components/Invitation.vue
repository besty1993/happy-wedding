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
소중한 여러분들을 초대합니다.`,
        en: `Happy Wedding
O.M.G!!`,
        th: "",
        jp: `asdfghjkl
        `,
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