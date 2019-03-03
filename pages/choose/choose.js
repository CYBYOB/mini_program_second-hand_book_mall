// pages/choose/choose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page_list: [
      { id: 1, page_name: '首页' },
      { id: 2, page_name: '我的' },
      { id: 3, page_name: '商品详情页' },
      { id: 4, page_name: '订单确认' },
      { id: 5, page_name: '关注' },
      { id: 6, page_name: '日志' },
    ],


  },

  // 自定义函数
  f_page_list_item: function(e) {
    var id = e.target.id;
    switch(id){
      case '1' : wx.switchTab({
        url: '../index/index',
      });
      case '2': wx.switchTab({
        url: '../me/me',
      });
      case '5': wx.switchTab({
        url: '../concern/concern',
      });
      case '3': wx.navigateTo({
        url: '../good/good',
      });
      case '4': wx.navigateTo({
        url: '../order_confirm/order_confirm',
      });
      case '6': wx.navigateTo({
        url: '../logs/logs',
      });

    }
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