const config = require('../../config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dishArray: [
      {
        dishName: "火锅",
        details: "hh",
        video: "http://www.w3school.com.cn//i/movie.mp4",
        audio: { src: "http://qqma.tingge123.com:823/mp3/2015-06-13/1434188181.mp3", poster: "sichuan.jpg", name: "火锅", author: "Dishf5ve" }
      }
    ],
    listName: "分类"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: config.service.getDishById + options.id,
      success: (res) => {
        console.log(res.data);
        this.data.dishArray = res.data[0];
        this.setData(this.data);
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

  },

  videoErrorCallback: function (e) {
    console.log('视频错误信息:' + e.detail.errMsg);
  }
})