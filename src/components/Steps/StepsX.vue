<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
// gsap.registerPlugin(DrawSVGPlugin)
const stepsText = [
  {
    title: 'Исследуем ваших потребителей',
    text: 'Мы анализируем ваших клиентов, чтобы строить структуру и тексты, которые действительно резонируют. Такой подход создаёт сайт, вызывающий доверие и привлекающий нужных людей.',
  },
  {
    title: 'Черновые варианты сайта',
    text: 'Разрабатываем черновые макеты, чтобы вы наглядно видели расположение ключевых элементов. Это помогает выбрать оптимальный вариант для вашего бизнеса.',
  },
  {
    title: 'Создание',
    text: 'Тексты раскрывают уникальность вашего продукта. Мы создаём их продающими и эмоциональными, чтобы клиенты видели настоящую ценность предложения.',
  },
  {
    title: 'Базовая SEO-оптимизация',
    text: 'Сайт будет виден для поисковых систем с первого дня. Мы оптимизируем главные элементы, чтобы вы могли быстро занять своё место в поиске и привлекать органический трафик.',
  },
  {
    title: 'Подключение аналитики и рекламы',
    text: 'Настраиваем аналитические и рекламные инструменты, чтобы вы всегда знали, как сайт работает на ваши цели. Это помогает контролировать эффективность и управлять продвижением.',
  },
  {
    title: 'Техническое сопровождение',
    text: 'В течение первых 14 дней после сдачи сайта обеспечим полное и техническое сопровождение.',
  },
]

const animationDuration = 3

onMounted(() => {
  // gsap.from('.draw-me', { duration: 1, drawSVG: 0 })
  const mainTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.steps__container',
      start: 'top 50px',
      end: '+=1000%',
      pin: true,
      scrub: true,
    },
  })

  const path = document.querySelector('.draw-path')
  const pathLength = path.getTotalLength() // Получаем общую длину пути

  // Устанавливаем начальные значения для stroke-dasharray и stroke-dashoffset
  gsap.set(path, {
    strokeDasharray: pathLength,
    strokeDashoffset: pathLength,
  })

  // Анимация рисования линии
  gsap.to(path, {
    strokeDashoffset: 0, // Отрисовываем путь
    duration: 1,
    ease: 'power2.out',
  })

  for (let i = 1; i <= 6; i++) {
    if (i !== 6) {
      mainTimeline
        .to(`.steps__item-${i}`, {
          left: `${50 + i - 1}%`,
          bottom: `${-10 + i * 10}`,

          opacity: 1,
          duration: animationDuration,
        })
        .to(
          `.steps__text-${i}`,
          { opacity: 1, duration: animationDuration },
          '+=.5',
        )
        .to({}, { duration: animationDuration })
        .to(`.steps__text-${i}`, {
          opacity: 0,
          duration: animationDuration,
        })
        .to(
          `.steps__item-${i}`,
          {
            left: `${50 + i - 1}%`,
            bottom: `${-10 + i * 10}`,
            opacity: 0.1,
            duration: animationDuration,
          },
          '-=0.5',
        )
    } else {
      mainTimeline
        .to('.steps__item-6', {
          left: '55%',
          bottom: 50,
          opacity: 1,
          duration: animationDuration,
        })
        .to(
          '.steps__text-6',
          { opacity: 1, duration: animationDuration },
          '+=.5',
        )
        .to({}, { duration: animationDuration + 1 })
    }
  }

  gsap.from('.steps__h2', {
    opacity: 0,
    filter: 'blur(10px)',
    y: 100,
    scrollTrigger: '.steps__h2',
    duration: 1,
  })
})
</script>

<template>
  <div class="steps">
    <div class="container steps__container">
      <h2 class="steps__h2">
        <span> Подстроим проект и процессы так,</span>
        чтобы максимально учесть время, приоритеты и бюджеты бизнеса.
      </h2>

      <div class="wrap">
        <div class="steps__item steps__item--invisible">
          <svg
            width="719"
            height="454"
            viewBox="0 0 719 454"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_94_119)">
              <path
                d="M2.50049 195C3.48347 195.491 288.583 361.701 436.01 447.143C441.095 450.09 448.079 453.346 453.933 452.825C460.613 452.231 464.962 449.323 470.77 445.969L709.871 307.916C712.622 306.328 715.54 303.848 717.062 301.061C717.608 300.06 717.508 299.427 717.524 298.287L717.911 270.891C717.998 264.708 717.487 257.439 712.043 254.508L277.543 3.50764C269.543 -0.492362 261.543 1.17431 258.543 2.50764C184.385 44.9895 43.8136 125.595 11.3268 144.5C6.67361 147.208 4.59381 152.195 3.87433 157.531C2.63996 166.684 0.794779 181.535 0.501287 190.5C0.45829 192.493 1.50049 194.5 2.50049 195Z"
                fill="#000D00"
                fill-opacity="0.24"
              />
              <path
                d="M2.50049 195C3.48347 195.491 288.583 361.701 436.01 447.143C441.095 450.09 448.079 453.346 453.933 452.825C460.613 452.231 464.962 449.323 470.77 445.969L709.871 307.916C712.622 306.328 715.54 303.848 717.062 301.061C717.608 300.06 717.508 299.427 717.524 298.287L717.911 270.891C717.998 264.708 717.487 257.439 712.043 254.508L277.543 3.50764C269.543 -0.492362 261.543 1.17431 258.543 2.50764C184.385 44.9895 43.8136 125.595 11.3268 144.5C6.67361 147.208 4.59381 152.195 3.87433 157.531C2.63996 166.684 0.794779 181.535 0.501287 190.5C0.45829 192.493 1.50049 194.5 2.50049 195Z"
                stroke="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_94_119"
                x="-20"
                y="-19.5"
                width="758.419"
                height="492.881"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_94_119"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_94_119"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <div class="steps__text">
            <h3>Исследуем ваших потребителей</h3>
            <p>
              Мы анализируем ваших клиентов, чтобы строить структуру и тексты,
              которые действительно резонируют. Такой подход создаёт сайт,
              вызывающий доверие и привлекающий нужных людей.
            </p>
          </div>
        </div>
        <div
          class="steps__item"
          v-for="(item, index) in stepsText"
          :key="index"
          :class="`steps__item-${index + 1}`"
        >
          <svg
            width="719"
            height="454"
            viewBox="0 0 719 454"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="steps__item__card"
          >
            <g filter="url(#filter0_b_94_119)">
              <path
                d="M2.50049 195C3.48347 195.491 288.583 361.701 436.01 447.143C441.095 450.09 448.079 453.346 453.933 452.825C460.613 452.231 464.962 449.323 470.77 445.969L709.871 307.916C712.622 306.328 715.54 303.848 717.062 301.061C717.608 300.06 717.508 299.427 717.524 298.287L717.911 270.891C717.998 264.708 717.487 257.439 712.043 254.508L277.543 3.50764C269.543 -0.492362 261.543 1.17431 258.543 2.50764C184.385 44.9895 43.8136 125.595 11.3268 144.5C6.67361 147.208 4.59381 152.195 3.87433 157.531C2.63996 166.684 0.794779 181.535 0.501287 190.5C0.45829 192.493 1.50049 194.5 2.50049 195Z"
                fill="#000D00"
                fill-opacity="0.24"
              />
              <path
                d="M2.50049 195C3.48347 195.491 288.583 361.701 436.01 447.143C441.095 450.09 448.079 453.346 453.933 452.825C460.613 452.231 464.962 449.323 470.77 445.969L709.871 307.916C712.622 306.328 715.54 303.848 717.062 301.061C717.608 300.06 717.508 299.427 717.524 298.287L717.911 270.891C717.998 264.708 717.487 257.439 712.043 254.508L277.543 3.50764C269.543 -0.492362 261.543 1.17431 258.543 2.50764C184.385 44.9895 43.8136 125.595 11.3268 144.5C6.67361 147.208 4.59381 152.195 3.87433 157.531C2.63996 166.684 0.794779 181.535 0.501287 190.5C0.45829 192.493 1.50049 194.5 2.50049 195Z"
                stroke="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_94_119"
                x="-20"
                y="-19.5"
                width="758.419"
                height="492.881"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_94_119"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_94_119"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <div class="steps__text" :class="`steps__text-${index + 1}`">
            <h3>{{ item.title }}</h3>
            <p>
              {{ item.text }}
            </p>
            <svg
              width="218"
              height="291"
              viewBox="0 0 218 291"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="steps__item__line"
              :class="`steps__item__line-${index + 1}`"
            >
              <circle
                cx="204.663"
                cy="36.6627"
                r="9.41667"
                transform="rotate(26.9625 204.663 36.6627)"
                fill="white"
                fill-opacity="0.12"
              />
              <circle
                cx="204.665"
                cy="36.6629"
                r="8.23958"
                transform="rotate(26.9625 204.665 36.6629)"
                fill="white"
              />
              <path
                d="M204.977 35.8959L200.896 36.0231L201.023 40.1036L205.104 39.9764L204.977 35.8959ZM0.636015 252.658C0.446933 252.859 0.4568 253.176 0.658057 253.365C0.8593 253.554 1.17574 253.544 1.36482 253.343L0.636015 252.658ZM202.636 37.6574L0.636015 252.658L1.36482 253.343L203.364 38.3421L202.636 37.6574Z"
                stroke="white"
                fill="none"
                class="draw-path"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./steps.scss";
.draw-path {
  stroke-width: 1; /* Толщина линии */
  stroke-linecap: round; /* Скругленные концы */
}
</style>
