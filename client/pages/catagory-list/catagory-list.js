// pages/catagory-list/catagory-list.js
const config = require('../../config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dishNum: 10,
    cataArray: [],
    listName: "分类",
    imageUrls: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: config.service.getCatagoryList,
      success: (res) => {
        this.data.cataArray = res.data;
        this.setData(this.data);
      },
      fail: () => {
        wx.showToast({
          title: '网络错误',
          icon: 'none'
        })
      }
    });
    wx.request({
      url: config.service.getAdvertise,
      success: (res) => {
        var result = res.data;
        for (let c of result) {
          this.data.imageUrls.push(c.imageUrl);
        }
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

  }
})