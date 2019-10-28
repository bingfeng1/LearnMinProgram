const request = ({url,method="get",data={}})=>{
  let base = "http://localhost:3000";
  url = base + url
  return new Promise((resolve,reject)=>{
    // 发送网络请求
    wx.request({
      url,
      method,
      data,
      success(res){
        resolve(res)
      },
      fail(res){
        reject(res)
      }
    })

  })
}


module.exports = {
  request
}