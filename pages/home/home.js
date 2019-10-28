// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'ddd'
  },
  handlePushDetail(){
    wx.navigateTo({
      url: '/pages/detail/detail?title=叩叩叩',
    })
  }
})