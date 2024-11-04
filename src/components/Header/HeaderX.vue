<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Cross from '/assets/icons/cross.svg'

const sections = [
  { name: 'Главная', link: '#' },
  { name: 'Тарифы', link: '#' },
  { name: 'Что входит', link: '#' },
  { name: 'Этапы работы', link: '#' },
  { name: 'Контакты', link: '#' },
]

const selector = ref(null)
const selectorIsOpen = ref(false)
const activeSection = ref('Главная')
const numberCopied = ref(false)
const screenWidth = ref(window.innerWidth)

const openSelector_desktop = () => {
  if (selector.value.style.maxHeight) {
    selector.value.style.maxHeight = null
    selectorIsOpen.value = false
  } else {
    selector.value.style.maxHeight = `${selector.value.scrollHeight}px`
    selectorIsOpen.value = true
  }
}

const openSelector_tablet = () => {
  selectorIsOpen.value = !selectorIsOpen.value
}

const selectorHandler = () => {
  if (screenWidth.value > 768) {
    openSelector_desktop()
  } else {
    openSelector_tablet()
  }
}

const changeSection = name => {
  activeSection.value = name
  setTimeout(() => {
    selectorHandler()
  }, 300)
}

const copyNumber = () => {
  numberCopied.value = true
  navigator.clipboard.writeText('+7 775 221 4996')
  setTimeout(() => {
    numberCopied.value = false
  }, 1000)
}

function updateScreenWidth() {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth)
})
</script>

<template>
  <header v-if="screenWidth > 768" class="header desktop">
    <div class="container">
      <a href="#" class="header__home">GamechangerWeb</a>
      <div class="header__selector" :class="{ active: selectorIsOpen }">
        <button
          class="header__burger"
          :class="{ active: selectorIsOpen }"
          @click="selectorHandler"
        >
          <p>
            {{ activeSection }}
          </p>
          <div class="header__burger__wrapper">
            <span class="header__burger--top"></span>
            <span class="header__burger--center"></span>
            <span class="header__burger--bottom"></span>
            <Cross />
          </div>
        </button>
        <ul
          ref="selector"
          class="header__selector__list"
          :class="{ active: selectorIsOpen }"
        >
          <li
            v-for="section in sections"
            :key="section.name"
            class="header__selector__item"
            :class="{ active: activeSection === section.name }"
            @click="changeSection(section.name)"
          >
            <a :href="section.link">{{ section.name }}</a>
          </li>
        </ul>
      </div>
      <button
        class="header__number"
        :class="{ active: numberCopied }"
        @click="copyNumber"
      >
        <span class="header__number--num">+7 775 221 4996</span>
        <span class="header__number--copied">Скопировано !</span>
      </button>
    </div>
  </header>

  <header v-else class="header mobile">
    <div class="container">
      <a href="#" class="header__home">GamechangerWeb</a>

      <button
        class="header__burger"
        :class="{ active: selectorIsOpen }"
        @click="selectorHandler"
      >
        <div class="header__burger__wrapper">
          <span class="header__burger--top"></span>
          <span class="header__burger--center"></span>
          <span class="header__burger--bottom"></span>
          <Cross />
        </div>
      </button>

      <div class="header__selector" :class="{ active: selectorIsOpen }">
        <ul ref="selector" class="header__selector__list">
          <li
            v-for="section in sections"
            :key="section.name"
            class="header__selector__item"
            :class="{ active: activeSection === section.name }"
            @click="changeSection(section.name)"
          >
            <a :href="section.link">{{ section.name }}</a>
          </li>
          <li>
            <button
              class="header__number"
              :class="{ active: numberCopied }"
              @click="copyNumber"
            >
              <span class="header__number--num">+7 775 221 4996</span>
              <span class="header__number--copied">Скопировано !</span>
            </button>
          </li>
        </ul>
      </div>

      <span
        class="wave"
        :class="{ active: selectorIsOpen }"
        @click="selectorHandler"
      >
      </span>

      <!-- <svg class="wave" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
        <circle
          :class="{ 'wave--animate': selectorIsOpen }"
          cx="15"
          cy="-10"
          :r="waveRadius"
          @click="selectorHandler"
        />
      </svg> -->
    </div>
  </header>
</template>

<style scoped>
@import "./header.scss"
</style>
