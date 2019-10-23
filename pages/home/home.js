// pages/home/home.js
// const app = getApp()
// console.log(app.globalData.name)
// console.log(app.globalData.age)

// 注册页面
Page({
  handleGetUserInfo(event) {
    console.log(event)
  },

  // 1.监听页面生命周期
  onLoad() {
    console.log('onLoad')
  },
  onReady() {
    console.log('onReady')

  },
  onShow() {
    console.log('onShow')

  },
  onHide() {
    console.log('onHide')

  },
  onUnload() {
    console.log('onUnload')

  },

  // j监听其他事件
  onPageScroll(obj) {
    console.log(obj)
  },

  // 监听页面滚动到底部
  onReachBottom() {
    console.log('页面到底部')
  },

  // 监听下拉
  onPullDownRefresh() {
    console.log('下拉刷新')
  }

})