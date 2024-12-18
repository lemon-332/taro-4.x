import Taro from '@tarojs/taro'

// Locale
const locale = 'APP-LOCALE'
export const getLocale = (): string => Taro.getStorageSync(locale)
export const setLocale = (name: string) => Taro.setStorageSync(locale, name)
