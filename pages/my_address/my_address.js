// pages/my_address/my_address.js
// 获取app实例，方便读取里面全局变量中的 user_id
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_id: '',
    my_address_list: [],

    // 新的数据
    address_list: [
      { src: '../../images/my_address/icon_1.png', name: '1王二', phone: 112345678, address: '1西安电子科技大学海棠宿舍楼23333', default_text: ' 默认 ' },
      { src: '../../images/my_address/icon_2.png', name: '2王二', phone: 212345678, address: '2西安电子科技大学海棠宿舍楼23333', default_text: '' },
      { src: '../../images/my_address/icon_3.png', name: '3王二', phone: 312345678, address: '3西安电子科技大学海棠宿舍楼23333', default_text: '' },
    ]
  },


  // 自定义函数
  // 编辑选中的收货地址
  f_edit_address: function(e) {
    // console.log(e)
    var address_info = this.data.address_list[e.target.id];

    wx.navigateTo({
      url: '../edit_address/edit_address?address_info=' + JSON.stringify(address_info),
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
      url: 'http://www.520cyb.cn/mini/book_shop/page_my_address.php',
      data: {
        user_id: app.globalData.user_id,
      },
      success(res) {
        console.log('点击 我的订单 进入的搜索结果：')
        console.log(res)
        that.setData({
          my_address_list: res.data
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