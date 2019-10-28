// pages/detail/detail.js
Page({

  onLoad: function(options) {
    console.log(options)
  },
  onUnload() {
    // 获取首页页面对象
    const pages = getCurrentPages()
    const home = pages[pages.length - 2]

    // 2.调用页面对象的setData
    home.setData({
      title: "将军金甲夜"
    })

  },
  handleBackHome() {
    wx.navigateBack({
      delta: 1
    })
  }
})