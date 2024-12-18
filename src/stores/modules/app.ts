import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const app = ref(3434)

  function increment() {
    app.value++
  }

  return { app, increment }
})
