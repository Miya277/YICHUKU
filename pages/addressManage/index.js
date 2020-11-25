Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr = wx.getStorageSync('list')||[];
    this.setData({
      list : arr
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onLoad();
  },
  /**
   * 跳转到添加收货地址页面
   */
  gotoAddInfo:function(){
    wx.navigateTo({
      url: '../addAddress/index',
    })
  },
 edit:function(){
   
 }



})