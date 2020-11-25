var app = getApp()
Page({
  data: {
    navbar: ['首页','关注', '拼团', '拍卖','捐赠'],
    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
})