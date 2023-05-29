<template><div v-if="isLoading">로그인 중입니다</div></template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isLoading: true, // 초기값은 로딩 중임을 나타냅니다.
    };
  },
  mounted() {
    this.sendCode();
  },
  methods: {
    sendCode() {
      const code = this.$route.query.code; // 인가 코드 값을 할당하세요

      const url = `https://moassu.com:443/oauth2/login/kakao/${code}`;

      axios
        .post(url)
        .then((response) => {
          //성공
          console.log(response);
          console.log(code);
          // 로딩 완료 처리
          this.isLoading = false;
          // 메인 화면으로 리디렉션
          this.$router.push("/");
        })
        .catch((error) => {
          //실패
          console.log(error);
          console.log(code);
        });
    },
  },
  computed: {
    code() {
      return this.$route.query.code;
    },
  },
};
</script>
