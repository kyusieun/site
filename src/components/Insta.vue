<template>
  <div>
    <img src="./assets/kakao_login_large_narrow.png" @click="loginWithKakao" />
  </div>
</template>

<script
  src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
  integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx"
  crossorigin="anonymous"
></script>

<script>
export default {
  methods: {
    async loginWithKakao() {
      if (!(await this.isKakaoInitialized())) {
        // SDK 로드
        Kakao.init("YOUR_APP_KEY");
      }
      Kakao.Auth.authorize({
        redirectUri: "YOUR_REDIRECT_URI",
      });
    },
    isKakaoInitialized() {
      return new Promise((resolve) => {
        if (Kakao.isInitialized()) {
          resolve(true);
        } else {
          window.kakaoAsyncInit = () => {
            Kakao.isInitialized() ? resolve(true) : resolve(false);
          };
        }
      });
    },
  },
  mounted() {
    // SDK 로드
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js";
    script.async = true;
    script.onload = () => {
      Kakao.init("YOUR_APP_KEY");
      window.kakaoAsyncInit && window.kakaoAsyncInit();
    };
    document.head.appendChild(script);
  },
};
</script>
