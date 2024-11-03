<script setup>
import { ref, onMounted } from 'vue';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Настройка плавного скролла через Lenis
const lenis = new Lenis({
  smooth: true,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Опционально для настройки плавности
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Создание ссылок на элементы
const sectionToStop = ref(null);
const h1Ref = ref(null);
const square1 = ref(null);
const square2 = ref(null);
const square3 = ref(null);
const square4 = ref(null);

onMounted(() => {
  // Анимация заголовка
  gsap.from(h1Ref.value, { opacity: 0, y: 30, duration: 1, delay: 1 });

  // Анимация "стопа" и появления фигур
  gsap.timeline({
    scrollTrigger: {
      trigger: sectionToStop.value,
      start: "top top",
      end: "+=400%", // Увеличенное значение для дополнительного пространства
      pin: true,
      scrub: true
    }
  })
    .to(square1.value, { x: 0, opacity: 1, duration: 1 })
    .to(square2.value, { x: 50, opacity: 1, duration: 1 }, "+=.5")
    .to(square3.value, { x: 100, opacity: 1, duration: 1 }, "+=.5")
    .to(square4.value, { x: 150, opacity: 1, duration: 1 }, "+=2")
    .to({}, { duration: 2 });
});

</script>

<template>
  <main>
    <section>
      <h1 ref="h1Ref" class="h1">HELLO </h1>
      <div class="element1">element1</div>
      <div class="element2">element2</div>
      <div class="element3">element3</div>
    </section>
    <section ref="sectionToStop" class="section-to-stop">
      <h1>HELLO </h1>
      <div ref="square1" class="box square1">1</div>
      <div ref="square2" class="box square2">2</div>
      <div ref="square3" class="box square3">3</div>
      <div ref="square4" class="box square4">4</div>
    </section>
    <section class="section2">
      <h1 ref="h1Ref" class="h1">HELLO </h1>
      <div class="element1">element1</div>
      <div class="element2">element2</div>
      <div class="element3">element3</div>
    </section>
  </main>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: blueviolet;
}

.section-to-stop {}
</style>
