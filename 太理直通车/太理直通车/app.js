App({
  onLaunch() {
    // 引入 SDK
    require('./utils/sdk-v1.5.0')
    // 初始化 SDK
    let clientID = 'ff94b0c26adcd8e7363f'
    wx.BaaS.init(clientID)
  },
  globalData: {
    activeCategoryIndex: 0,
    isIphoneX:false
  }
})