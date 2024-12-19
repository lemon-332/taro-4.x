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
          :src="selected === index ? item.selectedIconPath : item.iconPath"
          alt=""
          srcset=""
        />
      </template>
    </nut-tabbar-item>
  </nut-tabbar>
</template>

<script setup>
import Taro from '@tarojs/taro'

import { computed } from 'vue'
import { useStore } from '@/stores'

const app = useStore('app')
const selected = computed(() => app.tabbar)

const list = [
  {
    pagePath: '/pages/create/index',
    selectedIconPath: '../assets/icons/user_selected.png',
    iconPath: '../assets/icons/user_default.png',
    text: '创建'
  },
  {
    pagePath: '/pages/find/index',
    selectedIconPath: '../assets/icons/user_selected.png',
    iconPath: '../assets/icons/user_default.png',
    text: '发现'
  },
  {
    pagePath: '/pages/my/index',
    selectedIconPath: '../assets/icons/user_selected.png',
    iconPath: '../assets/icons/user_default.png',
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
