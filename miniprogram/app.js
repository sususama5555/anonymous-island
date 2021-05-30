//app.js
const api = require('./utils/api.js')

App({
  globalData:{
    // baseUrl:'https://api.notspr.com/api/',
    baseUrl:'http://127.0.0.1:8000/api/',
    StatusBar:'',
    windowHeight:'',
    user:{
      openid:'11',
      ava:'',
      fakeName:''
    },
    userInfo: {},
  },

  func:{
    ppApi:api.ppApi,
  },

  onLaunch: function () {
    wx.getSystemInfo({
      success: e => {
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
        env: 'cloud1-7ghl2kdt625331d2',
        traceUser: true,
      })
    }

    wx.cloud.callFunction({
      name:'login',
      success:res=>{
        this.globalData.user.openid = res.result.openid
        this.globalData.user.ava = res.result.ava
        // this.getUserInfo()
      }
    })


  },

  getUserInfo() {
    wx.request({
      url: this.globalData.baseUrl + `users/${this.globalData.user.openid}/`,
      method:'GET',
      success:res=>{
        this.globalData.user.fakeName = res.data.fakename;
        console.log(res)
      },
      fail:res=>{
        console.log(res)
      }
    })
  }
})