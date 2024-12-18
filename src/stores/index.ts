import { createPinia } from 'pinia'
import { useAppStore } from './modules/app'
import { useCounterStore } from './modules/counter'

export const store = createPinia()

const storeObj = {
  count: useCounterStore,
  app: useAppStore
}

export function useStore(key: string) {
  return storeObj[key]()
}
