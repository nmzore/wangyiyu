import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from "vant";
import "vant/lib/index.css";
import App from "./App.vue";
import router from "./router";
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import less from "less";

Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(less);
Vue.use(Element);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
