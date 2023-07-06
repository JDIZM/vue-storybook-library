// root vue app
import Vue from "vue";
import App from "./App.vue";

// using the imported library components
import { VPagination } from "./components";
Vue.component("VPagination", VPagination);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
