import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/app.scss'
import popupStore from "./store/PopupStore";

createApp(App)
    .use(popupStore)
    .mount('#app');

import 'bootstrap/dist/js/bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";