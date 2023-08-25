import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import Button from "./components/Button.vue";
import CardsOverlay from "./components/CardsOverlay.vue";

const app = createApp(App);
app.component("Button", Button);
app.component("CardsOverlay", CardsOverlay);
app.use(router).mount("#app");
