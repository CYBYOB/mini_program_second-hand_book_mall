// pages/good/good.js
// 获取小程序实例，方便访问全局变量
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // good: {
    //   id: '',
    //   src: '',
    //   now_price: -1,
    //   pre_price: -1,
    //   sale_num: -1,
    //   name: ''
    // },
    // 从上一个页面传来页面 书籍id
    good_id: 1,
    // 查询返回一个 good 对象
    good: {},
    
    other_image: '../../images/good/other/other_image.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('商品id:')
    console.log(options.good_id)
    var that = this;

    //设置商品的 id ,方便调用 onShow 函数时能传参进去，进行相关的数据库查询  
    that.setData({
      good_id: options.good_id,
    })

  },

  // 自定义函数
  // php中的mysql操作中有些问题 （返回的结果集？？！！）
  f_collect: function(good_id) {
    // console.log('当前收藏的书籍id为：')
    // console.log(good_id)
    // console.log(app.globalData.user_id)
    // console.log(this.data.good_id)

    wx.request({
      url: 'http://www.520cyb.cn/mini/book_shop/f_collect.php',
      data: {
        good_id: this.data.good_id,
        user_id: app.globalData.user_id,
      },
      success(res) {
        console.log(res)
        console.log(res.data)

        // 数据已存在 或者 服务器炸了
        if(res.data == '-1') {
          wx.showToast({
            title: '收藏失败，可能已存在！',
            icon: 'none'
          })
        } else if(res.data == '0') {
          wx.showToast({
            title: '收藏成功！',
          })
        }
      }
    })
  },

  f_contact_collect_buy: function(e) {
    switch(e.target.id) {
      case 'bottom_1':
        wx.navigateTo({
          url: '../../pages/contact/contact',
        }); break;
      case 'bottom_2':
        this.f_collect(this.data.good.id); break; 
      case 'bottom_3':
        // 节约代码量
        var good = JSON.stringify(this.data.good)
        wx.navigateTo({
          url: '../../pages/order_confirm/order_confirm?good=' + good
        })
        break;
      default:
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
    // 不加上这个，会出现 ’setData’ 是 undefined 。数据 异步更新问题吧 ？
    var that = this;

    // console.log('书籍id' + this.data.good.id)
    wx.request({
      url: 'http://www.520cyb.cn/mini/book_shop/page_by_good_id.php',
      data: {
        good_id: this.data.good_id,
      },
      success(res) {
        console.log('点击书籍封面进入的搜索结果：')
        console.log(res)
        console.log(res.data)

        that.setData({
          good: res.data[0]
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