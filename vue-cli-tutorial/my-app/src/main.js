import Vue from "vue";
import App from "./App.vue";
import router from './router';
import axios from 'axios';
import "./components/generic/index";

Vue.config.productionTip = false;

const api = axios.create({
baseURL: "http://localhost:3000/"
});

const axiosPlugin = {
  install(Vue) {
    Vue.prototype.$api = api;
  }
}

Vue.use(axiosPlugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
