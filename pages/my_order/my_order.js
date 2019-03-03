// pages/my_order/my_order.js
// 获取全局变量中的 user_id
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_id: '',
    my_order_list: [],


    // 新的数据
    order_list: [
      {src: '../../images/my_order/good.png',title: '高等数学（下）',status: '正在运输',price: 15.00,num: 1,total_price: 15.00},
      { src: '../../images/my_order/good.png', title: '高等数学（下）', status: '正在运输', price: 15.00, num: 1, total_price: 15.00 },
      { src: '../../images/my_order/good.png', title: '高等数学（下）', status: '正在运输', price: 15.00, num: 1, total_price: 15.00 }
    ],


  },



  // 自定义函数
  // 点击 再来一单
  f_once_again: function(e) {
    wx.showToast({
      title: '再来一单功能未开启',
      icon: 'none',
    })
  },

  // 点击 催单 ，假装催单成功！
  f_reminder: function (e) {
    wx.showToast({
      title: '催单成功！',
    })
  },

  // 点击 评价
  f_evaluate: function (e) {
    wx.showToast({
      title: '评价功能未开启',
      icon: 'none'
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
    // 不加上这个，会出现 ’setData’ 是 undefined 。数据 异步更新问题吧 ？
    var that = this;

    // console.log('用户id' + this.data.user_id)
    wx.request({
      url: 'http://www.520cyb.cn/mini/book_shop/page_my_order.php',
      data: {
        user_id: app.globalData.user_id,
      },
      success(res) {
        console.log('点击 我的订单 进入的搜索结果：')
        console.log(res)
        that.setData({
          my_order_list: res.data
        })
      }
    })
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