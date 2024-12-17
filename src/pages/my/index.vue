<template>
  <div class="create">
    <button class="btn" @click="goUserDetailPage">关于跳转</button>
  </div>
</template>

<script lang="ts" setup>
import Taro from '@tarojs/taro'
const goUserDetailPage = () => {
  Taro.navigateTo({ url: '/pagesSub/about/index' })
}
</script>

<style lang="scss">
.create {
  padding: 0 15px;
  .btn{
    display: inline;
  }
}
</style>
