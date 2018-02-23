const config = require('../../config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dishArray: [
      {
      materials: [{ name: "火锅底料", quantity: "1包" }, { name: "葱姜蒜", quantity: "少许" }, { name: "花椒辣椒", quantity: "一把" }, { name: "浓汤宝", quantity: "2个" }, { name: "香菇平菇金针菇蒜苗", quantity: "少许" }, { name: "红枣枸杞", quantity: "少许" }, { name: "小番茄", quantity: "三个" }, { name: "八角桂皮香叶", quantity: "少许" }, { name: "可乐", quantity: "一罐" }]
      },
      {
        ways: [{ id: "1", src: "https://img.alicdn.com/imgextra/i4/i2/19529043573624089/T13JbfFhRXXXXXXXXX_!!0-item_pic.jpg", details: "红油火锅：锅中放油，油热之后将葱姜蒜，八角桂皮香叶，火锅底料，辣椒花椒全部放入锅中小火翻炒，约三分钟即可放入锅中加入热水即可。我喜欢在红油火锅内加入一罐可乐，用来提鲜和汤底的甜味，不习惯的可以不加。" }, { id: "2", src: "http://www.cq315.org/Upload/xheditorUpload/month_1301/201301100333519737.jpg", details: "清汤火锅：将香菇平菇切片，金针菇切成两段，蒜苗切成和金针菇相同的长度，然后将以上所有食材和浓汤宝，红枣枸杞的一起放入锅中，加入热水即可，因为浓汤宝有咸味和鲜味，不需放入食盐和其他调料。" }, { id: "3",src: "http://a0.att.hudong.com/04/63/19300001184234130145631379184.jpg", details: "将准备好的食材摆盘就可以了。" }]
      }
    ]
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

  },

  videoErrorCallback: function (e) {
    console.log('视频错误信息:' + e.detail.errMsg);
  }
})