// miniprogram/pages/review/review.js
const baseUrl = getApp().globalData.baseUrl
var arcID
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reviewValue:'',
    mood:{},
    review:[]
  },

  // 刷新
  reset:function(){
    this.setData({
      reviewValue:'',
      mood:{},
      review:[]
    })
    this.getMood(arcID);
    this.getReview(arcID);
  },

  // 获取评论内容
  getReview:function(e){
    var review = this.data.review
    wx.request({
      url: baseUrl+'comments/'+e,
      method:"GET",
      success:res=>{
        console.log(res)
        review.push(res.data)
        this.setData({
          review:review
        })
      }
    })
  },

  // 发送评论
  sendReview:function(e){
    var review={};
    review.content = e.detail.value.content;
    review.mood = this.data.mood.id;
    review.user = 12313122;

    wx.request({
      url: baseUrl+'comments/',
      method:'POST',
      data:review,
      success:res=>{
        this.reset()
      }
    })

  },

  // 全屏预览图片
  ViewImage(e) {
    var urls =[]
    urls[0]=e.currentTarget.dataset.url;
    wx.previewImage({
      urls: urls,
      current: e.currentTarget.dataset.url
    });
  },

  // 获取Mood内容
  getMood:function(e){
    // var mood = this.data.mood;
    wx.request({
      url: baseUrl+'moods/'+e,
      method:'GET',
      success:res=>{
        this.setData({
          mood:res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    arcID = options.arcID
    this.getMood(arcID)
    this.getReview(arcID)
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