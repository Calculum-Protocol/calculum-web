import App from "./App.vue";
import piniaPersist from "pinia-plugin-persist";
import router from "./router";
import Vue from "vue";
import vuetify from "./plugins/vuetify";
import { createPinia, PiniaVuePlugin } from "pinia";

Vue.config.productionTip = false;
Vue.use(PiniaVuePlugin);

const pinia = createPinia();
pinia.use(piniaPersist);

new Vue({
  router,
  vuetify,
  pinia,
  render: (h) => h(App)
}).$mount("#app");
