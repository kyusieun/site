import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";
createApp(App).use(router).mount("#app");

// createApp(App).mount("#app");
window.Kakao.init("b43ade7c4e3832897f45cbbeaa0d19d7");
