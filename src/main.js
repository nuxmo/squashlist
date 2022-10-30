import { createApp } from 'vue'
import App from './App.vue'
import './main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faCirclePlay,
    faPersonRunning,
    faNewspaper,
    faStarHalfStroke,
    faBasketShopping,
    faPeopleGroup,
    faMoneyBillWave
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faCirclePlay,
    faPersonRunning,
    faNewspaper,
    faStarHalfStroke,
    faBasketShopping,
    faPeopleGroup,
    faMoneyBillWave
)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
