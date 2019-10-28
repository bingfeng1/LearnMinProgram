// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '加载中',
      duration:3000,
      icon:'loading'
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '标题',
      content: '内容',
      success(res){
        console.log(res)
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载中',
    })


    setTimeout(() => {
      wx.hideLoading()
    },1000)
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ['aaaa','ccccccc'],
      success(res){
        console.log(res)
      }
    })
  },
  onShareAppMessage(){
    
  }
})

