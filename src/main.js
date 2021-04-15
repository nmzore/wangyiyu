import Vue from "vue";
import 'element-ui/lib/theme-chalk/index.css';
import Vant from "vant";
import "vant/lib/index.css";
import App from "./App.vue";
import router from "./router";
import VueCookies from 'vue-cookies'
import ElementUI from "element-ui";

import VueAudio from 'vue-audio-better'
Vue.use(VueAudio)
Vue.use(VueCookies)
Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");