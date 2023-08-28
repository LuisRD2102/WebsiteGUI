import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import Button from "./components/Button.vue";
import CardsOverlay from "./components/CardsOverlay.vue";
import Testimonials from "./components/Testimonial.vue"
import Location from "./components/Location.vue"
import Tooltip from "./components/Tooltip.vue"
import BarChart from "./components/BarChart.vue";



const app = createApp(App);
app.component("Button", Button);
app.component("CardsOverlay", CardsOverlay);
app.component("Testimonials", Testimonials);
app.component("Location", Location);
app.component("Tooltip", Tooltip);
app.component("BarChart", BarChart);

app.use(router).mount("#app");
