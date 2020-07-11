// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardList: [{
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
        name: '胖胖',
        createDate: [2020, 1, 1],
        info: '折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！',
        image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
        starTag:'true',
        watchNum:99,
        starNum:88,
        reviewNum:77
      },
      {
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
        name: '胖胖2',
        createDate: [2020, 1, 1],
        info: '折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！',
        watchNum:66,
        starNum:55,
        reviewNum:44
      }
    ]
  },

  toReview:function(){
    wx.navigateTo({
      url: '/pages/review/review?arcID="213"'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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