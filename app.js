const {
  request
} = require('/service/network.js')
const {
  TOKEN
} = require('./constant')
App({
  globalData: {
    token: ""
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    // 先从缓存中获取值
    // const token = wx.getStorageSync(TOKEN)
    // // 2.判断token是否有值
    // if (token) {
    //   //验证token是否过期

    // } else {
    //   this.login()
    // }


  },
  check_token(token){
    
  },
  login() {
    wx.login({
      success({
        code
      }) {
        let param = {
          url: "/login",
          method: 'post',
          data: {
            code
          }
        }
        request(param)
          .then(res => {
            const token = res.data.token

            this.globalData.token = token;
            wx.setStorage({
              key: TOKEN,
              data: token,
            })

          })

      }
    })
  }

})