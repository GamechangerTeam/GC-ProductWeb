<script setup>
import Arrow from '/assets/icons/arrow-right.svg'
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
</script>

<template>
  <div class="guarantees" id="guarantees">
    <h2>
      <div class="container">
        Каждый сайт <br />
        гарантировано получит
      </div>
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
