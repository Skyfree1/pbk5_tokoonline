import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import {
  Quasar, QLayout, QHeader, QToolbar, QToolbarTitle, QFooter,
  QCarousel, QCarouselSlide, QCard, QCardSection, QCardActions,
  QImg, QPageContainer, QBtn, QBadge
} from 'quasar'

import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'

const app = createApp(App)

app.use(router)
app.use(Quasar, {
  components: {
    QLayout, QHeader, QToolbar, QToolbarTitle, QFooter,
    QCarousel, QCarouselSlide, QCard, QCardSection, QCardActions,
    QImg, QPageContainer, QBtn, QBadge
  }
})

app.mount('#app')
