import {createApp} from 'vue'
import App from '../vue/App.vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import '../styles/main.css'
import BackgroundColorPicker from '../vue/components/BackgroundColorPicker.vue'

createApp(App)
    .component('BackgroundColorPicker', BackgroundColorPicker)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app')
