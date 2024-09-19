import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app');
