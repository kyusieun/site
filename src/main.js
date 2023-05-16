import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";
createApp(App).use(router).mount("#app");

// createApp(App).mount("#app");
window.Kakao.init("3b666133f33102bfed3844b9623b5028");
