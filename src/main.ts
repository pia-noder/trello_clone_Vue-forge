import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/base.css";
import "@progress/kendo-theme-default/dist/all.css";

//const isLargeScreen =
const app = createApp(App);
//app.provide() for define media queries conditions
app.use(router);

app.mount("#app");
