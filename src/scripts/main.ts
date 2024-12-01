import {createApp} from 'vue'
import App from '../vue/App.vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import '../styles/main.css'

createApp(App)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app')
