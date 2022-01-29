import {createApp} from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax3'

import 'vuesax3/dist/vuesax.css' //Vuesax styles
const app = createApp(App)
app.use(Vuesax)

app.mount('#app')