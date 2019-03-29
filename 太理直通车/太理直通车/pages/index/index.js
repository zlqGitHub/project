var app = getApp();
Page({
  data: {
    
  },

  //点击简介按钮
  introBtn:function(){
    wx.navigateTo({
      url: '../introduce/introduce',
    })
  },
  //点击逛逛理工按钮
  watchBtn:function(){
    wx.navigateTo({
      url: '../navService/navService',
    })
  },
   //判断手机型号
  onShow: function () {
    let that = this;
    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
        if (res.model.match(/iPhone/)){
          app.globalData.isIphoneX = true;
        }
      },
    })  
  },
  onLoad:function(){
    let isIphoneX = getApp().globalData.isIphoneX;
    this.setData({
      isIphoneX
    });
  },

  //用户点击分享按钮
  onShareAppMessage: function () {
    return {     //自定义转发分享内容
      title: '太理直通车',
      path: '/pages/index/index',
      imageUrl: 'https://cloud-minapp-18590.cloud.ifanrusercontent.com/1h1LRfb1N1IAsFrt.jpg'
    }
  }
})
