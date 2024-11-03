<script setup>
import CircleText from '/assets/icons/circle-text.svg'
import Arrow from '/assets/icons/arrow.svg'
</script>

<template>
  <div class="hero" id="hero">
    <div class="container">
      <h1>
        Разрабатываем <br />
        сайты, которые <br />
        говорят за вас.
      </h1>
      <p>
        Индивидуальный подход, эффектный <br />
        дизайн и продуманная стратегия.
      </p>
      <div class="hero__btn-wrapper">
        <button class="hero__contact-us">
          <CircleText class="text" />
          <Arrow class="arrow" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./hero.scss"
</style>
