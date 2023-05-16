<template>
  <div>
    <p>Received authorization code: {{ code }}</p>
    <button @click="sendCode">Send code to backend</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    sendCode() {
      const code = this.$route.query.code; // 인가 코드 값을 할당하세요

      const url = `http://ec2-3-39-206-176.ap-northeast-2.compute.amazonaws.com:8080/oauth2/login/kakao/${code}`;

      axios
        .post(url)
        .then((response) => {
          console.log(response);
          console.log(code);
        })
        .catch((error) => {
          console.log(error);
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
