import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCounterStore = defineStore('count', () => {
  const count = ref(3434)

  function increment() {
    count.value++
  }

  return { count, increment }
})
