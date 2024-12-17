import { createPinia } from 'pinia'
import { useAppStore } from './app'
import { useCounterStore } from './counter'

export const store = createPinia()

const storeObj = {
  count: useCounterStore,
  app: useAppStore
}

export function useStore(key: string) {
  return storeObj[key]()
}
