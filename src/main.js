import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import Button from "./components/Button.vue";
import CardsOverlay from "./components/CardsOverlay.vue";
import Testimonials from "./components/Testimonial.vue"
import Location from "./components/Location.vue"


const app = createApp(App);
app.component("Button", Button);
app.component("CardsOverlay", CardsOverlay);
app.component("Testimonials", Testimonials);
app.component("Location", Location);

app.use(router).mount("#app");
