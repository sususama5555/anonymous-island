// pages/editor/editor.js
const app = getApp()
const baseUrl = app.globalData.baseUrl
var mood = {
 content:'',
 user:12313122     
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textContent:'',
    imgList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  resetContent:function(){
    this.setData({
      imgList:[],
      textContent:''
    })
  },

  sendArticle:function(e){
    var text = e.detail.value.text;

    if(text){
      mood.content = text;
      wx.uploadFile({
        filePath: this.data.imgList[0],
        name: 'image',
        url: baseUrl+'moods/',
        formData:mood,
        header:{
          "content-Type":"multipart/form-data",
        },
        success:res=>{
          wx.showToast({
            title: '发布成功',
            icon: 'success',
            duration: 2000
          })
          this.resetContent()
        }
      })
    }
    else{
      wx.showModal({
        title:'请检查输入完整性！',
        content:'内容缺失',
        showCancel:false
      })
    }
  },
  ChooseImage() {
    wx.chooseImage({
      count: 1, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '提示',
      content: '确定要删除这张照片吗',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
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