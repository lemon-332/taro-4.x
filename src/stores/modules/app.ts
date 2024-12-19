import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const tabbar = ref(0)

  function changeTabbar(value) {
    tabbar.value = value
  }

  return { tabbar, changeTabbar }
})
