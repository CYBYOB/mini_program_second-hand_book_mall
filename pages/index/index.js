//index.js
//获取应用实例
const app = getApp();
// 获取公共函数
const util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll: [
      '../../images/index/scroll/1.png',
      '../../images/index/scroll/2.png',
      '../../images/index/scroll/3.png'
    ],

    academic: [
      { id: 13, src: '../../images/index/academic/1.png', title: '公共书' },
      { id: 14, src: '../../images/index/academic/1.png', title: '通院' },
      { id: 15, src: '../../images/index/academic/1.png', title: '电院' },
      { id: 16, src: '../../images/index/academic/1.png', title: '物光院' },
      { id: 17, src: '../../images/index/academic/2.png', title: '计院' },
      { id: 18, src: '../../images/index/academic/2.png', title: '机电院' },
      { id: 19, src: '../../images/index/academic/2.png', title: '其他' },
      { id: 20, src: '../../images/index/academic/2.png', title: '课外书' },
    ],

    hot_sale_list: [
      { id: 1, src: '../../images/index/hot_sale/1.png', title: '高等数学（上）', price: '15', num_buy: '20' },
      { id: 2, src: '../../images/index/hot_sale/2.png', title: '高等数学（下）', price: '15', num_buy: '20' },
      { id: 3, src: '../../images/index/hot_sale/1.png', title: '大学物理（上）', price: '15', num_buy: '20' },
      { id: 4, src: '../../images/index/hot_sale/2.png', title: '大学物理（下）', price: '15', num_buy: '20' },
      { id: 5, src: '../../images/index/hot_sale/1.png', title: '高等数学（上）', price: '15', num_buy: '20' },
      { id: 6, src: '../../images/index/hot_sale/2.png', title: '大学物理（上）', price: '15', num_buy: '20' }
    ],

  },

  // 自定义函数：
  f_sort_by_academic: function(e) {
    var academic_id = e.target.id;
    // console.log('学院ID：' + e.target.id)
    util.f_page_by_academic(academic_id)
  },

  f_navigate_to_good: function(e) {
    var good_id = e.target.id;
    // console.log('书籍ID：' + e.target.id)
    util.f_navigate_to_good(good_id)
  },

  // 点击了 搜索
  f_search_tap: function(e) {
    wx.navigateTo({
      url: '../search/search',
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