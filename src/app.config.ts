export default {
  pages: ['pages/create/index', 'pages/find/index', 'pages/my/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  subPackages: [
    {
      root: 'pagesSub/about',
      pages: ['index']
    }
  ],
  tabBar: {
    color: '#7A7E83',
    selectedColor: '#d81e06',
    borderStyle: 'black',
    backgroundColor: '#fff',
    custom: true,
    list: [
      {
        pagePath: 'pages/create/index',
        text: '创建'
      },
      {
        pagePath: 'pages/find/index',
        text: '发现'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的'
      }
    ]
  },
  usingComponents: {}
}
