import tools from "../../utils/tools";
const wxParser = require('../../wxParser/index');
Page({
  data: {
    indicatorDots: true,
    indicatorActiveColor:"#FFF",
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular:true,

    imgUrls: [],    
    poster: '',
    name: '太原理工大学',
    author: '小燕',
    src: '',

    showTop:true,  //回到顶部按钮显示与隐藏

  },

  //点击畅游校园按钮
  mapNav:function(){
    wx.navigateTo({
      url: '../navService/navService',
    })
  },

  //页面滚动时触发
  onPageScroll:function(e){
    //console.log(e.scrollTop);   //当前页面的高度
    if (e.scrollTop >= 400){
      this.setData({
        showTop:false
      });
    }
    else{
      this.setData({
        showTop: true
      });
    }
  },
  
  //点击回到顶部按钮
  goTop:function(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },

  //加载页面内容
  onLoad: function (options) {
    const innerAudioContext = wx.createInnerAudioContext()
    // innerAudioContext.autoplay = true
    innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
    let that = this;
    let html;

    tools.searchIntro(res => {
      let introInfo = res.data.objects[0];
      // console.log(introInfo);
      this.setData({
        imgUrls: introInfo.imgs,      //设置轮播图
        poster: introInfo.poster,      //设置音频封面的图片资源地址
        src: introInfo.src             //设置要播放音频的资源地址
      });

    });
    tools.searchContent(res => {
      // console.log(res.data.content);
      html = res.data.content;
      wxParser.parse({
        bind: 'richText',
        html: html,
        target: that,
        enablePreviewImage: false, // 禁用图片预览功能
      })
      this.setData({
        content: html    //设置简介内容
      });
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