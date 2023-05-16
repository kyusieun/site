<template>
  <div>
    <p>Received authorization code: {{ $route.params.code }}</p>
    <button @click="sendCode">Send code to backend</button>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  props: ["code"],
  // methods: {
  //   sendCode() {
  //     // Make an HTTP request to your backend API with the code
  //     // For example, using Axios:
  //     axios
  //       .post("/api/auth/kakao", { code: this.code })
  //       .then((response) => {

  //       })
  //       .catch((error) => {

  //       });
  //   },
  // },
};
</script>
