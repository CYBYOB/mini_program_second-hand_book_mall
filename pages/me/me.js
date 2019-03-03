// pages/me/me.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    my_info: {
      src: '../../images/me/my_info/icon.png',
      id: '小螺号'
    },

    my_list: [
      { id: 1, src: '../../images/me/my_list/order.png', title: '我的订单' },
      { id: 2, src: '../../images/me/my_list/address.png', title: '收货地址' },
      // { id: 3, src: '../../images/me/my_list/pay_point.png', title: '我的积分(要取消)' },
      { id: 4, src: '../../images/me/my_list/collect.png', title: '我的收藏' }
    ],
  },

  // 自定义函数
  // 根据点击的的不同 id 进入不同的页面
  f_my_page: function(e) {
    var id = e.target.id;
    // var user_id = app.globalData.user_id; 没必要，全局变量中就可以随便获取 用户id

    switch(id) {
      case '1' :
        // console.log(1); 
        wx.navigateTo({
          url: '../../pages/my_order/my_order',
        });  break;

      case '2':
        wx.navigateTo({
          url: '../../pages/my_address/my_address',
        }); break;

      case '3':
        wx.navigateTo({
          url: '../../pages/my_point/my_point',
        }); break;

      case '4':
        wx.navigateTo({
          url: '../../pages/my_collect/my_collect',
        }); break;
      default:
        break;
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