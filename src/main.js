import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import ElementUI from "element-ui";

/* CSS */
import "./assets/css/hepsiemlak.css";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/hepsiemlakresponsive.css";

Vue.config.productionTip = false;
Vue.use(axios);
Vue.use(ElementUI);
const axiosInstance = axios.create({
  baseURL: "https://nonchalant-fang.glitch.me/",
});

Vue.prototype.$axios = axiosInstance;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
