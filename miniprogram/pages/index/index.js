// miniprogram/pages/index/index.js
const baseUrl = getApp().globalData.baseUrl
var pageNum = 1
var maxPageNum = 1
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading:true,
    cardList: [],
  },

  toReview: function (e) {
    wx.navigateTo({
      url: '/pages/review/review?arcID=' + e.currentTarget.dataset.id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    this.getMoodsList(pageNum)
  },
  
  getMoodsList: function (pageNum) {
    var cardList = this.data.cardList;
    var that = this;
    if (pageNum <= maxPageNum) {
      wx.request({
        url: baseUrl + 'moods/',
        method: 'GET',
        data: {
          page: pageNum
        },
        success: res => {
          console.log(res);
          maxPageNum = Math.ceil(res.data.count / 5)
          cardList = cardList.concat(res.data.results);
          cardList.forEach(function (value) {
            wx.request({
              url: baseUrl + 'users/' + value.user,
              method: 'GET',
              success: res => {
                value.userName = res.data.fakename;
                that.setData({
                  cardList: cardList,
                  loading:false
                })
                
                wx.hideLoading()
              }
            })
          })
        }
      })
    }

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
    pageNum++;
    this.getMoodsList(pageNum)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})