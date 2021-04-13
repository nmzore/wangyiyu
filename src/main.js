import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
import App from "./App.vue";
import router from "./router";
import Element from "element-ui";
import less from 'less';


Vue.use(Vant);
Vue.use(less);
Vue.use(Element);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
