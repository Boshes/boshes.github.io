import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faBriefcase, faCode, faEnvelope, faSeedling, faMicrochip, faChartLine, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

Vue.component('vue-fontawesome', FontAwesomeIcon)

library.add(faBriefcase, faCode, faEnvelope, faSeedling, faMicrochip, faChartLine, faSpinner, faGithub, faLinkedin)

Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
})

new Vue({
  render: h => h(App),
}).$mount('#app')
