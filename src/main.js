import {
    createApp
} from 'vue';
import {
    Toast,
    options
} from './libs/toastification.js'
import "vue-toastification/dist/index.css";
import './assets/css/font.css';
import './assets/css/style.css';
import './assets/css/tailwind.css';
import App from './App.vue';
import router from './router';
const app = createApp(App);
app.use(router);
app.use(Toast, options);
app.mount('#app');