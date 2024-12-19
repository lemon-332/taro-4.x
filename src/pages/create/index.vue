<template>
  <nut-swiper
    :init-page="2"
    :auto-play="3000"
    pagination-visible
    pagination-color="#426543"
    pagination-unselected-color="#808080"
  >
    <nut-swiper-item
      v-for="(item, index) in list"
      :key="index"
      style="height: 150px"
    >
      <img
        :src="item"
        alt=""
        style="height: 100%; width: 100%"
        draggable="false"
      />
    </nut-swiper-item>
  </nut-swiper>
  <nut-cell>
    <nut-ecard
      v-model="money"
      :data-list="dataList"
      @input-change="inputChange"
      @change="change"
      @change-step="changeStep"
    ></nut-ecard>
  </nut-cell>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const list = ref([
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
])
const dataList = ref([
  {
    price: 10
  },
  {
    price: 20
  },
  {
    price: 30
  },
  {
    price: 40
  }
])
const money = ref(10)
const inputChange = (val: number) => {
  money.value = val
}
const change = (item: any) => {
  money.value = item.price
}
const changeStep = (num: number, price: number) => {
  const val = price * num
  money.value = val
}
</script>

<style lang="scss"></style>
