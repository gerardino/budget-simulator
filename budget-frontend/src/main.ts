import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const VueMaterial = require('vue-material');
import VueMaterial from "vue-material";

Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount("#app");
