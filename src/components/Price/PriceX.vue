<script setup>
import CircleArrow from '/assets/icons/circle-arrow.svg'
import { ref } from 'vue'

const prices = ref(['100-150к', '150-300к', '300-600к', '600к+'])
const selectedPrice = ref(null)
const interests = ref(['Лендинг', 'Корпоративный'])
const selectedInterest = ref(null)

const selectPrice = price => {
  selectedPrice.value = price
}

function selectInterest(interest) {
  selectedInterest.value = interest
  console.log((selectedInterest.value = interest))
}
</script>

<template>
  <div class="price" id="price">
    <div class="container">
      <h2>
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
          >
            {{ interest }}
          </button>
        </div>
        <div class="form__main">
          <div class="form__input-wrapper">
            <input type="text" name="name" id="name" />
            <label for="name">Имя</label>
          </div>

          <div class="form__input-wrapper">
            <input type="number" name="number" id="number" />
            <label for="number">Номер телефона</label>
          </div>

          <div class="form__input-wrapper">
            <input type="text" name="about" id="about" />
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
          >
            {{ price }}
          </button>
        </div>

        <div class="form__footer">
          <button>Отправить <CircleArrow /></button>
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
