<template></template>

<script>
import axios from "axios";
export default {
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
          console.log(response);
          console.log(code);
        })
        .catch((error) => {
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
