<script setup>
import Arrow from '/assets/icons/arrow-right.svg'
import gsap from 'gsap'
import { onMounted } from 'vue'
import ScrollTrigger from 'gsap/ScrollTrigger'
const items = [
  'Исследование целевой аудитории',
  'Интуитивная структура и удобная навигация',
  'Привлекательный и уникальный дизайн',
  'Качественные, продающие тексты',
  'Базовая SEO-оптимизация',
  'Оптимизация скорости загрузки',
  'Адаптивность для мобильных устройств',
  'Настройка аналитики и рекламных инструментов',
  'Высокий уровень безопасности и защиты данных',
]

gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  gsap.from('.guarantees__h2', {
    opacity: 0,
    filter: 'blur(10px)',
    y: 100,
    scrollTrigger: '.guarantees__h2',
    duration: 1,
  })
})
</script>

<template>
  <div class="guarantees section" id="guarantees">
    <h2 class="guarantees__h2 guarantees__h2--pc">
      <div class="container">
        Каждый сайт <br />
        гарантировано получит
      </div>
    </h2>

    <h2 class="guarantees__h2 guarantees__h2--mobile">
      <div class="container">Вы получите</div>
    </h2>
    <ul class="guarantees__list">
      <li class="guarantees__item" v-for="(item, index) in items" :key="index">
        <div class="container">
          <p>{{ item }}</p>
          <div class="guarantees__carousel">
            <div class="guarantees__carousel__wrapper">
              <span
                class="guarantees__carousel__item"
                v-for="n in 3"
                :key="item + n"
              >
                {{ item }}
                <Arrow />
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style>
@import "./guarantees.scss";
</style>
