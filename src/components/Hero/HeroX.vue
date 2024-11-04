<script setup>
import CircleText from '/assets/icons/circle-text.svg'
import Arrow from '/assets/icons/arrow.svg'
</script>

<template>
  <div class="hero" id="hero">
    <div class="container">
      <h1>
        <span> Разрабатываем </span>
        <br />
        <span> сайты, </span>
        <span> которые </span>
        <br />
        <span> говорят </span>
        <span> за </span>
        <span> вас </span>
        <span> . </span>
      </h1>
      <p>
        Индивидуальный подход, эффектный <br />
        дизайн и продуманная стратегия.
      </p>
      <div class="hero__btn-wrapper">
        <button class="hero__contact-us">
          <CircleText class="hero__contact-us__text" />
          <Arrow class="hero__contact-us__arrow" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./hero.scss"
</style>
