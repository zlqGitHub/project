// pages/detail/detail.js
const wxParser = require('../../wxParser/index');
Page({
  data: {
    indicatorDots: true,
    indicatorActiveColor: "#FFF",
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
  },

  //点击导航按钮
  navTo:function(){
    let latitude= parseFloat(this.data.latitude);
    let longitude = parseFloat(this.data.longitude);
    let name = this.data.title;
    wx.openLocation({
      latitude,
      longitude,
      name,
      scale: 18
    })
  },

  //页面加载时获取参数
  onLoad: function (options) {
    // console.log(options.des);
    this.setData({
      img: options.img.split(','),
      title: options.title,
      longitude: options.longitude,
      latitude: options.latitude,
      des: options.des
    });
    // console.log(this.data.img);
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