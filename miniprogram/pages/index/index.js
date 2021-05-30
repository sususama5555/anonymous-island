// miniprogram/pages/index/index.js
const app = getApp()
const baseUrl = getApp().globalData.baseUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    cardList: [],
    maxPageNum: 1,
    pageInfo: {
      page: 1,
      page_size: 5,
    }
  },

  toReview: function (e) {
    wx.navigateTo({
      url: '/pages/review/review?arcID=' + e.currentTarget.dataset.id
    })
  },


  // 重新获取列表
  reGetList: function () {
    this.getMoodsList()
  },

  // 获取列表
  getMoodsList: function () {
    wx.showLoading({
      title: '加载中',
    })
    app.func.ppApi('moods', this.data.pageInfo, 'GET', res => {
      this.setData({
        cardList: this.data.cardList.concat(res.items),
        maxPageNum: res.total_page
      })
      wx.hideLoading()
    })

    // if (pageNum <= maxPageNum) {
    //   app.func.ppApi('moods', {
    //     page: pageNum
    //   }, 'GET', res => {
    //     console.log(pageNum);
    //     maxPageNum = Math.ceil(res.count / 5)
    //     // pageNum === 1 ? cardList = res.results : cardList = cardList.concat(res.results);
    //     // pageNum === 1 ? cardList = res.results : cardList = cardList.concat(res.results);
    //     this.data.cardList = res.results
    //     console.log(this.data.cardList)
    //     this.data.loading = false
    //     wx.hideLoading()
    //
    //     // SB行为
    //     cardList.forEach(function (value) {
    //       wx.request({
    //         url: baseUrl + 'users/' + value.user,
    //         method: 'GET',
    //         success: res => {
    //           value.userName = res.data.fakename;
    //           that.data.loading === true ? wx.hideLoading() : ''
    //           that.setData({
    //             cardList: cardList,
    //             loading: false
    //           })
    //           wx.stopPullDownRefresh()
    //         }
    //       })
    //     })
    //   })
    // }

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.reGetList()
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
    this.setData({
      'pageInfo.page': 1,
      cardList: []
    })
    this.reGetList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.pageInfo.page >= this.data.maxPageNum) {
      return
    }
    this.setData({
      'pageInfo.page': this.data.pageInfo.page + 1,
    })
    this.getMoodsList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})