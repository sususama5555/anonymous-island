// pages/editor/editor.js
let app = getApp()
var mood = {
 is_deleted:false,
 content:'',
 image:'',
 click_counter:0,
 comment_counter:0,
 like_counter:0,
 user:'',     
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  sendArticle:function(e){
    console.log(e)
    var text = e.detail.value.text;

    if(text){
      mood.content = text;
      mood.openid = app.globalData.openid;
      mood.image = this.data.imgList[0];
      console.log(mood.image)

      wx.uploadFile({
        filePath: mood.image,
        name: '12313.jpg',
        url: 'https://api.ddoudou.xyz/api/moods/image',
        formData:mood,
        success:res=>{
          console.log(res)
        }
      })

      // wx.request({
      //   url: 'https://api.ddoudou.xyz/api/my_moods',
      //   method:'POST',
      //   data:mood,
      //   success:res=>{
      //     console.log(res)
      //   }
      // })
    }
    else{
      wx.showModal({
        title:'请检查输入完整性！',
        content:'内容缺失',
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