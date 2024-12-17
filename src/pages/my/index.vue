<template>
  <div class="create">
    <button class="btn" @click="goUserDetailPage">{{ name }}</button>
    <nut-button>{{ name }}</nut-button>
    <nut-date-picker
      v-model="val"
      :min-date="min"
      :max-date="max"
      :three-dimensional="false"
      @confirm="confirm"
    ></nut-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { getBookList } from '@/services/apis/user'
import { ref } from 'vue'

const min = new Date(2020, 0, 1)
const max = new Date(2025, 10, 1)
const val = ref(new Date(2022, 4, 10))
const confirm = ({ selectedValue }) => {
  console.log(selectedValue)
}
const name = ref('张三')
const goUserDetailPage = () => {
  _getBookList()
}
const _getBookList = async () => {
  const res = await getBookList()
  name.value = res.data
}
</script>

<style lang="scss">
.create {
  padding: 0 15px;
  .btn {
    display: inline;
  }
}
</style>
