const baseUrl = 'https://api.ddoudou.xyz/api/'
const apiList={
  moods:'moods/',
  comments:'comments/',
  users:'users/'
}

function getData(apiName,data,type,func){
    wx.request({
      url: baseUrl+apiList[apiName],
      data:data,
      method:type,
      success:res=>{
        return typeof func== "function" && func(res.data)
      },
      fail:function(){
        reject:('网络错误')
        wx.showToast({
          icon:'none',
          title: '网络错误',
        })
      }
    })
}

module.exports={
  ppApi:getData
}