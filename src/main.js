// root vue app
import Vue from "vue";
import App from "./App.vue";

// using the imported library components
import { VButton } from "./components";
Vue.component("VButton", VButton);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
