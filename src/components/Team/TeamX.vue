<script setup>
import CircleArrow from '/assets/icons/circle-arrow.svg'
</script>

<template>
  <div class="team" id="team">
    <div class="container">
      <h2>
        Наша команда создает сайты с нуля, избегая шаблонов и конструкторов.
      </h2>

      <div class="team__wrapper">
        <p>
          <span
            ><i></i>Каждый элемент, от дизайна до технической реализации</span
          >, разработан специально для вас. Мы верим, что Ваш бизнес уникален, и
          поэтому заслуживает индивидуального подхода.
        </p>
        <button>Связаться с нами <CircleArrow /></button>
      </div>
      <img src="/assets/images/header.png" class="img" alt="" />
    </div>
  </div>
</template>

<style scoped>
@import "./team.scss"
</style>
