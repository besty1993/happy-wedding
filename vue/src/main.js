import {createApp} from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax3'
import VCalendar from 'v-calendar'

import 'vuesax3/dist/vuesax.css' //Vuesax styles
import 'v-calendar/dist/style.css'

const app = createApp(App)
app.use(Vuesax)
app.use(VCalendar, {})

app.mount('#app')