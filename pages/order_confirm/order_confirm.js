// pages/order_confirm/order_confirm.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    good_id: '-1',

    // 从服务器获取到的当前用户的 最新地址
    delivery_info: {
      name: '王二',
      phone: '12345678',
      address: '西安电子科技大学老综合楼二楼xx书店'
    },

    // 从上一个页面传来的 good 详细信息
    good: {},
    // 购买数量默认为 1 ，可通过 按钮进行增减
    good_num: 1,


    // 购物车形式进入的 订单确认页面
    // good_list: [
    //   {src: '../../images/order_confirm/good/good_image.png',title: '高等数学（上）',price: '15',num: 1},
    // ],
  },


  // 自定义函数
  // 编辑收货人 名字
  f_name_input: function(e) {
    this.setData({
      'delivery_info.name': e.detail.value
    })
  },

  // 编辑收货人 电话
  f_phone_input: function (e) {
    this.setData({
      'delivery_info.phone': e.detail.value
    })
  },

  // 编辑收货人 地址
  f_address_input: function (e) {
    this.setData({
      'delivery_info.address': e.detail.value
    })

    // console.log(this.data.delivery_info)
  },

  // 购买数量 -- 
  f_minus_click: function(e) {
    // 不能再 -- 了
    if(this.data.good_num == 1)
      return;
    
    this.setData({
      good_num: this.data.good_num - 1
    })
  },

  // 购买数量 ++ 
  f_add_click: function (e) {
    this.setData({
      good_num: this.data.good_num + 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("从上一个页面接受到的参数：")
    console.log(JSON.parse(options.good))
    this.setData({
      good: JSON.parse(options.good)
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
    var that = this;
    // 向服务器发起请求，获得当前用户的 最新地址 
    wx.request({
      url: 'https://www.520cyb.cn/mini/book_shop/order_comfirm_address.php',
      data: {
        user_id: app.globalData.user_id
      },
      success(res) {
        console.log(res)
        console.log(res.data)

        that.setData({
          delivery_info: res.data[0]
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