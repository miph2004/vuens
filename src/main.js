import Vue from "nativescript-vue";
import Vuex from "vuex";
import VueDevtools from "nativescript-vue-devtools";
import { TNSFontIcon, fonticon } from "nativescript-fonticon";
import Navigator from "nativescript-vue-navigator";
import App from "./pages/App";
import routes from "./routes";
import todoStore from "./store";

Vue.registerElement(
  "CardView",
  () => require("@nstudio/nativescript-cardview").CardView
);
Vue.use(Vuex);
Vue.use(Navigator, { routes });

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  fa: "./assets/css/fontawesome.min.css",
  far: "./assets/css/regular.min.css",
  fab: "./assets/css/brands.min.css",
};
TNSFontIcon.loadCss();

Vue.filter("fonticon", fonticon);

if (TNS_ENV !== "production") {
  Vue.use(VueDevtools);
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === "production";

const store = new Vuex.Store(todoStore);

new Vue({
  render: (h) => h(App),
  store,
}).$start();
