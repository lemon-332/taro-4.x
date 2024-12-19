<template>
  <nut-tabbar v-model="selected">
    <nut-tabbar-item
      v-for="(item, index) in list"
      :key="index"
      :tab-title="item.text"
      @click="switchTab(index, item.pagePath)"
    >
      <template #icon>
        <img
          :src="selected === index ? user_selected : user_default"
          alt=""
          srcset=""
        />
      </template>
    </nut-tabbar-item>
  </nut-tabbar>
</template>

<script setup>
import Taro from '@tarojs/taro'

import user_default from '@/assets/icons/user_default.png'
import user_selected from '@/assets/icons/user_selected.png'

import { computed } from 'vue'
import { useStore } from '@/stores'

const app = useStore('app')
const selected = computed(() => app.tabbar)

const list = [
  {
    pagePath: '/pages/create/index',
    text: '创建'
  },
  {
    pagePath: '/pages/find/index',
    text: '发现'
  },
  {
    pagePath: '/pages/my/index',
    text: '我的'
  }
]

const switchTab = (index, url) => {
  setSelected(index)
  Taro.switchTab({ url })
}

const setSelected = (index) => {
  app.changeTabbar(index)
}
</script>

<style lang="scss"></style>
