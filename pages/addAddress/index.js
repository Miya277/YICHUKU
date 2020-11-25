var list=null;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  saveAddress: function(e){
    var name = e.detail.value.name;
    var phoneNum = e.detail.value.phoneNum;
    var address = e.detail.value.address;
    
    var arr = wx.getStorageSync('list')||[];
    list={
      name:name,
      phoneNum:phoneNum,
      address:address
    }
    arr.push(list);
    wx.setStorageSync('list', arr);
    wx.navigateBack({
    })
  }
})