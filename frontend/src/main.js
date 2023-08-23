import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faMobile, faClock, faHome, faGithub,faTwitter,faFacebook,faInstagram,faLinkedinIn )

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')


import { faBars, faClock, faHome, faMobile } from "@fortawesome/free-solid-svg-icons";
import {  faFacebook, faGithub,  faInstagram,  faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap"
