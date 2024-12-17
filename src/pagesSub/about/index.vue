<template>
  <div class="create">
    <Counter />
    <div @click="goUserDetailPage">12211</div>
  </div>
</template>

<script lang="ts" setup>
import Taro from '@tarojs/taro'
import Counter from '@/components/Counter.vue'
const goUserDetailPage = () => {
  // Taro.navigateTo({ url: '/pagesSub/about/index' })
  console.log('haha')
}
</script>

<style lang="scss">
.create {
  padding: 0 15px;
}
</style>
