import { createApp } from 'vue'
import App from './App.vue'
import './styles/reset.css'
import './styles/main.scss'
// LENIS

import 'lenis/dist/lenis.css'
import Lenis from 'lenis'

const lenis = new Lenis({
  smooth: true,
  // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Опционально для настройки плавности
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
// LENIS

createApp(App).mount('#app')
