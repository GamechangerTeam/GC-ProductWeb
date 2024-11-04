<script setup>
import CircleArrow from '/assets/icons/circle-arrow.svg'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.price__h2', {
    opacity: 0,
    filter: 'blur(10px)',
    y: 100,
    scrollTrigger: '.price__h2',
    duration: 1,
  })

  gsap.from('.price__card', {
    opacity: 0,
    y: 100,
    scrollTrigger: {
      trigger: '.price__cards',
      start: 'top 60%',
    },
    duration: 1,
  })

  gsap.utils.toArray('.price__button--ani').forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: i * 0.1,

      scrollTrigger: {
        trigger: '.form',
        start: 'top 60%',
      },
    })
  })
})

const prices = ref(['100-150к', '150-300к', '300-600к', '600к+'])
const selectedPrice = ref(null)
const interests = ref(['Лендинг', 'Корпоративный'])
const selectedInterest = ref(null)
const formIsValid = ref(false)

const inputAbout = ref('')
const inputName = ref('')
const inputNumber = ref('')

const checkForm = () => {
  if (
    (selectedPrice.value && selectedInterest.value) !== null &&
    (inputName.value && inputNumber.value) !== ''
  ) {
    formIsValid.value = true
  } else {
    formIsValid.value = false
  }
}

const selectPrice = price => {
  selectedPrice.value = price
  checkForm()
  console.log(inputName.value)
}

function selectInterest(interest) {
  selectedInterest.value = interest
  checkForm()
}
</script>

<template>
  <div class="price" id="price">
    <div class="container">
      <h2 class="price__h2">
        <span>Цены, как у фрилансеров </span>
        <br />
        качество, как у профессионалов
      </h2>
      <ul class="price__cards">
        <li class="price__card">
          <p class="price__card__title">Лендинг</p>
          <p class="price__card__price">от 100.000₸</p>
          <p class="price__card__days">до 7 рабочих дней</p>
        </li>

        <li class="price__card">
          <p class="price__card__title">
            Корпоративный <span>(Многостраничник)</span>
          </p>
          <p class="price__card__price">от 150.000₸</p>
          <p class="price__card__days">до 20 рабочих дней</p>
        </li>

        <li class="price__card price__card--text">
          <p class="price__card__title">
            Зачем рисковать с фрилансерами, если можно получить надежный
            результат по доступной цене?
          </p>
        </li>
      </ul>
      <div class="form">
        <div class="form__btns-wrapper">
          <p>Мне интересен</p>
          <button
            v-for="interest in interests"
            :key="interest"
            :class="{ select: interest === selectedInterest }"
            @click="selectInterest(interest)"
            class="price__button--ani"
          >
            {{ interest }}
          </button>
        </div>
        <div class="form__main">
          <div class="form__input-wrapper">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="ㅤ"
              required
              v-model="inputName"
              @input="checkForm"
            />
            <label for="name">Имя</label>
          </div>

          <div class="form__input-wrapper">
            <input
              type="number"
              name="number"
              id="number"
              placeholder="ㅤ"
              required
              v-model="inputNumber"
              @input="checkForm"
            />
            <label for="number">Номер телефона</label>
          </div>

          <div class="form__input-wrapper">
            <input
              type="text"
              name="about"
              id="about"
              placeholder="ㅤ"
              v-model="inputAbout"
            />
            <label for="about">О чем ваш проект?</label>
          </div>
        </div>

        <div class="form__btns-wrapper">
          <p>Бюджет на проект (KZT)</p>
          <button
            v-for="price in prices"
            :key="price"
            @click="selectPrice(price)"
            :class="{ select: selectedPrice === price }"
            class="price__button--ani"
          >
            {{ price }}
          </button>
        </div>

        <div class="form__footer">
          <button :class="{ disabled: !formIsValid }">
            Отправить <CircleArrow />
          </button>
          <p>
            Нажимая кнопку «Отправить», вы соглашаетесь с
            <span>политикой конфиденциальности</span> и условиями
            <span> предоставления услуг </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./price.scss"
</style>
