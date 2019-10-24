// pages/image/image.js
Page({
  data:{
    imgPath:""
  },

  handleChooseAlbum(){
    wx.chooseImage({
      success: (res)=> {
        this.setData({
          imgPath:res.tempFilePaths[0]
        })
      },
    })
  },

  handImageLoad(){
    console.log('图片加载完成')
  }
})