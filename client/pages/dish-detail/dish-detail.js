Page({

  /**
   * 页面的初始数据
   */
  data: {
    dishArray:[
      {
      dishName:"火锅",
      details:"hh",
      video:"http://www.w3school.com.cn//i/movie.mp4",
      audio: { src: "http://qqma.tingge123.com:823/mp3/2015-06-13/1434188181.mp3", poster:"sichuan.jpg",name:"火锅",author:"Dishf5ve"}
      },
      {
      dishName: "腊肠",
      details: "hh",
      video:"",
      audio: { src: "", poster: "", name: "腊肠", author: "Dishf5ve" }
      },
      {
      dishName: "蛇皮怪",
      details: "hh",
      video:"",
      audio: { src: "", poster: "", name: "蛇皮怪", author: "Dishf5ve" }
      }
    ],
    listName: "分类"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    switch (options.dishName) {
      case "火锅":
        this.data.listName = "火锅";
        this.data.dishArray = this.data.dishArray[0];
        this.setData(this.data);
        break;
      case "腊肠":
        this.data.listName = "腊肠";
        this.data.dishArray = this.data.dishArray[1];
        this.setData(this.data);
        break;
      case "蛇皮怪":
        this.data.listName = "蛇皮怪";
        this.data.dishArray = this.data.dishArray[2];
        this.setData(this.data);
        break;
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