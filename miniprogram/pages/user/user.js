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
      status:'这个人很懒，什么都没有留下~'
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var user = this.data.user;
    user.fakeName = app.globalData.user.fakeName;
    this.setData({
      user:user
    })
  },

  getUserInfo: function (e) {
    var user = {
      openid:'',
      is_deleted:false,
      username:'',
      fakename:''
    };

    console.log(e.detail)
    user.openid = 1231312;
    user.username = e.detail.userInfo.nickName;
    user.fakename = '胖胖'+ (Math.round(Math.random()*(9999-1000))+1000);

    wx.request({
      url: baseUrl+'users/',
      method: 'POST',
      data: user,
      success: res => {
        console.log(res)
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