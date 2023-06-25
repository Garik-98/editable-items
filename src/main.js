import Vue from "vue";
import App from "./components/App";
import VueRouter from "vue-router";
import store from "./state/AppState";
import routes from "./routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

new Vue({
  store: store,
  render: (h) => h(App),
  router
}).$mount("#app");
