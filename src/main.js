import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faPlay,
    faPersonRunning,
    faNewspaper,
    faStarHalfStroke,
    faBasketShopping,
    faPeopleGroup,
    faMoneyBills,
    faCirclePlus,
    faXmark,
    faFaceFrown,
    faFaceSmile
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faPlay,
    faPersonRunning,
    faNewspaper,
    faStarHalfStroke,
    faBasketShopping,
    faPeopleGroup,
    faMoneyBills,
    faCirclePlus,
    faXmark,
    faFaceFrown,
    faFaceSmile
)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
