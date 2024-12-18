import { createApp } from 'vue'
import { store } from '@/stores'

import i18n from '@/locales'

import './app.scss'

const App = createApp({
  onShow(options) {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(store)
App.use(i18n)

export default App
