import { createApp} from 'vue'
import App from './App'
import mitt from 'mitt'

import router from './router/routes'

const app = createApp(App);
const emitter = mitt()

app.config.globalProperties.emitter = emitter
app.use(router).mount("#app");

