import "./assets/main.css"
import "vfonts/Inter.css"

import { createApp } from "vue"
import { createPinia } from "pinia"
import { i18n } from "./utils/i18n/i18nService.js"

import App from "./App.vue"
import router from "./router"

import screenSizeService from "./utils/screen/screenSizeService"

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(screenSizeService) // Listen to screen size globaly

app.mount("#app")
