// miniprogram/pages/user/user.js
const app = getApp()
const baseUrl = app.globalData.baseUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      openid:'openid',
      fakeName:'',
      ava:'',
      fakeAva: '',
      status:'这个人很懒，什么都没有留下~'
    },
    userInfo: app.globalData.userInfo,
    hasUserInfo: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var user = this.data.user;
    // user.fakeName = app.globalData.user.fakeName;
    // this.setData({
    //   user: user
    // })
    // if (wx.getUserProfile) {
    //   this.setData({
    //     canIUseGetUserProfile: true
    //   })
    // }
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        app.globalData.userInfo = res.userInfo
      },
      fail: (res) => {
        console.log(res)
      }
    })
  },

  getUserInfo: function (e) {
    console.log(e)
    var user = {
      openid:'',
      username:'',
      fakename:''
    };
    user.openid = app.globalData.user.openid + (Math.round(Math.random()*(9999-1000))+1000)
    user.ava = app.globalData.user.ava
    user.username = e.detail.userInfo.nickName;
    user.fakename = '胖胖'+ (Math.round(Math.random()*(9999-1000))+1000);

    wx.request({
      url: baseUrl+'users/',
      method: 'POST',
      data: user,
      success: res => {
        app.getUserInfo()
        this.setData({
          'user.fakename': res.fakename,
          'user.ava': e.detail.userInfo.avatarUrl
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})