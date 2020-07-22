//app.js
App({
  globalData:{
    baseUrl:'https://api.ddoudou.xyz/api/',
    StatusBar:'',
    windowHeight:'',
    user:{
      openid:'',
      ava:'',
      fakeName:''
    }
  },

  onLaunch: function () {
    wx.getSystemInfo({
      success: e => {
        console.log(e);
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
        this.globalData.windowHeight = e.windowHeight
      }
    })

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'pangpangbot-xpx3g',
        traceUser: true,
      })
    }

    wx.cloud.callFunction({
      name:'login',
      success:res=>{
        this.globalData.user.openid = res.result.openid
      }
    })
    
    wx.request({
      url: this.globalData.baseUrl+'users/1231312',
      method:'GET',
      success:res=>{
        this.globalData.user.fakeName = res.data.fakename;
      },
      fail:res=>{

      }
    })
  }
})