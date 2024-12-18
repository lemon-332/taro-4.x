import { createI18n } from 'vue-i18n'

import en from './source/en.json'
import zh from './source/zh.json'

import { setLocale, getLocale } from '@/utils/statusMange'

const messages = {
  en,
  zh
}
function getLanguage() {
  const locale = getLocale()
  if (locale) {
    return locale
  } else {
    // 否则返回ZH
    setLocale('zh')
    return 'zh'
  }
}
const i18n = createI18n({
  locale: getLanguage(),
  messages
})

export default i18n
