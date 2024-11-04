<script setup>
import CircleArrow from '/assets/icons/circle-arrow.svg'
import gsap from 'gsap'
import { onMounted } from 'vue'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.team__h2', {
    opacity: 0,
    filter: 'blur(10px)',
    y: 100,
    scrollTrigger: '.team__h2',
    duration: 1,
  })

  gsap.from('.team__text', {
    opacity: 0,
    filter: 'blur(10px)',
    x: 1000,

    scrollTrigger: {
      trigger: '.team__wrapper',
      start: 'top 80%',
    },
    duration: 1,
  })

  gsap.from('.team__button', {
    opacity: 0,
    x: 500,

    scrollTrigger: {
      trigger: '.team__wrapper',
      start: 'top 80%',
    },
    duration: 1,
    delay: 0.7,
  })
})
</script>

<template>
  <div class="team" id="team">
    <div class="container">
      <h2 class="team__h2">
        Наша команда создает сайты с нуля, избегая шаблонов и конструкторов.
      </h2>

      <div class="team__wrapper">
        <p class="team__text">
          <span
            ><i></i>Каждый элемент, от дизайна до технической реализации</span
          >, разработан специально для вас. Мы верим, что Ваш бизнес уникален, и
          поэтому заслуживает индивидуального подхода.
        </p>
        <button class="team__button">Связаться с нами <CircleArrow /></button>
      </div>
      <img src="/assets/images/header.png" class="img" alt="" />
    </div>
  </div>
</template>

<style scoped>
@import "./team.scss"
</style>
