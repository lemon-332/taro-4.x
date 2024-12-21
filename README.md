# 使用 Taro4.0 + Vue3 开发微信小程序
## 前言
微信小程序是以微信为运行环境的一种应用，其实质是 `Hybrid` 技术的应用，Hybrid App 即混合模式移动应用，因此与 `H5` 类似，但又比 H5 拥有很多原生的能力，例如调用位置信息和摄像头等。

小程序的开发方式与 H5 十分相似，用的也是  `JavaScript`、`HTML`、`CSS`  语言。

因此，小程序开发可以说是一名前端工程师必须要掌握的技能。

原生小程序开发有一定的学习成本，现如今市面上有很多开发小程序的第三方多端框架，如果不是追求极致性能和稳定，还是不要用原生小程序开发了，开发效率太低。

第三方多端框架中，`taro` 和 `uni-app` 的使用度是最广的，一般来说，做技术选型时，团队用 `react`，就用 taro，团队用 `vue`，就用 uni-app，两者之间没有什么优劣之分，都挺好用的。

可直接访问本项目 github 地址 clone 使用。

## 目标功能
+ 集成 vue3，使用 `script setup` 语法开发
+ 集成 `Typescript`
+ 代码检查和格式优化
+ 全局状态管理 `pinia`
+ 小程序分包配置
+ 样式封装，自定义tabbar，使用nutui
+ http 方法封装
+ i18n国际化
+ ui使用京东的nutui

## 主要技术栈
+ Taro4
+ Vue3
+ TypeScript
+ NutUi
+ Pinia

vue3 刚发布时，由于没有合适的 ui 框架支持，我学习 vue3 的热情直接被劝退了。直到现在，类似于[ quasar](http://www.quasarchs.com/introduction-to-quasar[/)、[element-plus](https://element-plus.gitee.io/zh-CN/component/button.html)、[ant-design-vue](https://next.antdv.com/docs/vue/migration-v3-cn) 等优秀框架陆续支持 vue3，并且许多 vue3 项目被用到了生产环境中，才发现大家是把 vue3 真的用起来了。

[NutUI](https://nutui.jd.com/#/intro) 是京东风格的移动端组件库，它支持使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。

我是从 [Taro 文档](http://taro-docs.jd.com/taro/docs/vue3) 知道 NutUI 的，taro 官方推荐使用 NutUI 开发，他们似乎也都是来自京东同一个开发团队，我抱着试一试的心态上手使用，配置简单，使用体验还不错。

[Pinia](https://pinia.vuejs.org/introduction.html) 是一个用于 Vue 的状态管理库，类似 Vuex, 是 Vue 的另一种状态管理方案，支持 Vue2 和 Vue3。

这次尝试使用 Pinia，用起来确实很舒服，符合直觉，易于学习 ，有点类似于 [recoil](https://recoiljs.org/zh-hans/docs/introduction/getting-started)，但没有 recoil 那么多的概念和 API，主体非常精简，极易上手。[Pinia 快速入门](https://juejin.cn/post/6986847203885056036)

## vscode 需安装插件
+ Eslint
+ Prettier
+ Vue-Offical

> 项目里配置了一些推荐的插件，本人觉得挺好用的，大家可以装着
>

![](https://cdn.nlark.com/yuque/0/2024/png/38936915/1734577174113-bb9cb648-97f1-4f4b-bfe8-5d1706c32287.png)





## 项目运行
### 1.安装依赖
```plain
# 本项目运行的node环境是 v22.8.0，pnpm 9.9.0
pnpm i
```

### 2.如果运行在h5端
```plain
pnpm run dev:h5
```

### 3.如果运行微信小程序 
```plain
## 如果运行在mac端
pnpm run dev:weapp:mac

## 如果运行在win端
pnpm run dev:weapp:win
```

> 运行成功之后，可以下载[微信小程序开发工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，当然首先要去[微信小程序公众平台](https://mp.weixin.qq.com/?token=&lang=zh_CN)申请一个appid，之后就可以通过小程序开发工具，打开项目运行时候生成的dist目录的文件，这时就可以动态的开发啦
>



### 总结
至此，终于完成了 Taro + Vue3 的项目搭建，可直接访问项目 [github 地址](https://github.com/lemon-332/taro-4.x) clone 使用，有一些配置细节本文无法一一列举，就在项目中去发掘吧！

如果我的文章能帮助到你，就去 star 一下吧，[项目地址](https://github.com/lemon-332/taro-4.x)



