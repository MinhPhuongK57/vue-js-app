// ✅ Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// ✅ Bootstrap JS (rất quan trọng)
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// ✅ Font Awesome nếu dùng icon
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "./App.vue";
// main.js
import { createApp } from "vue";

createApp(App).mount("#app");
