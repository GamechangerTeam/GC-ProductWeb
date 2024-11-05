<script setup>
import CircleArrow from '/assets/icons/circle-arrow.svg'
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.createSite__h2', {
    opacity: 0,
    filter: 'blur(10px)',
    y: 100,
    scrollTrigger: '.createSite__h2',
    duration: 1,
  })
  gsap.from('.createSite__btn', {
    opacity: 0,
    x: 500,
    scrollTrigger: {
      trigger: '.createSite__h2',
      start: 'top 60%',
    },
    duration: 1,
  })
})
</script>

<template>
  <div class="createSite" id="createSite">
    <div class="container">
      <h2 class="createSite__h2">
        <span> Обычные сайты — это не про вас. </span>
        <br class="show_on_laptop" />
        Создайте сайт, <br class="hide_on_laptop" />
        который действительно <br class="hide_on_laptop" />
        отражает ваш бизнес
      </h2>
      <button class="createSite__btn">Заказать <CircleArrow /></button>
    </div>
  </div>
</template>

<style scoped>
@import "./createsite.scss"
</style>
