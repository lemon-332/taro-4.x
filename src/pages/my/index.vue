<template>
  <div class="create">
    <nut-button @click="handelLocale">切换语言</nut-button>
    {{ $t('common.confirm') }}
  </div>
</template>

<script lang="ts" setup>
import { setLocale, getLocale } from '@/utils/statusMange'
import Taro from '@tarojs/taro'

const handelLocale = () => {
  Taro.showModal({
    title: '提示',
    content: '切换语言需要重新进入小程序，是否确认切换',
    success: function (res) {
      if (res.confirm) {
        setLocale(getLocale() === 'zh' ? 'en' : 'zh')
        Taro.exitMiniProgram()
      }
    }
  })
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
