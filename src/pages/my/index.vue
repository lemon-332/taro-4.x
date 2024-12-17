<template>
  <div class="create">
    <button class="btn" @click="goUserDetailPage">{{ name }}</button>
  </div>
</template>

<script lang="ts" setup>
import { getBookList } from '@/services/apis/user'
import { ref } from 'vue'

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
