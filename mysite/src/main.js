import { createApp} from 'vue'
import App from './App'
import router from './router/routes'

import mitt from 'mitt'
const emitter = mitt()

const app = createApp(App);

app.config.globalProperties.emitter = emitter
app.use(router).mount("#app");

