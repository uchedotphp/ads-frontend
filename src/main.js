import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/app.scss'
import popupStore from "./store/PopupStore";

createApp(App).use(popupStore).use(router).mount("#app");

import 'bootstrap/dist/js/bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";