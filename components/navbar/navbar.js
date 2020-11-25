var app = getApp()
Page({
  data: {
    navbar: ['关注', '推荐', '拼团', '预测'],
    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
})
