// pages/navService/navService.js
import tools from "../../utils/tools.js";
var app = getApp();
Page({
  data: {
    campus: ["迎西校区", "虎峪校区", "明向校区"],    //太理共三个校区
    compareTypes: ["出入门","景点","院系","教学楼","图书馆","宿舍","餐厅","运动场","医院","银行","服务"],  //比较类型，便于判断选择marker图标
    yxCampusTypes: ["出入门", "景点", "院系", "教学楼", "宿舍", "餐厅", "图书馆", "运动场", "医院", "服务"],    //迎西校区
    hyCampusTypes: ["出入门", "景点", "院系", "教学楼", "宿舍", "餐厅","图书馆","运动场"],   //虎峪校区
    mxCampusTypes: ["出入门", "景点","院系", "教学楼", "宿舍", "餐厅","图书馆", "运动场", "服务"],   //明向校区

    yxCampus: [],        //迎西校区内容
    hyCampus: [],         //虎峪校区内容
    mxCampus: [],         //明向校区内容

    nowCampus: [],      //当前显示的校区内容
    nowTypes: [],              //当前显示的校区类型
    index: 0,      //默认为0，即迎西校区 (通过0 1 2选择校区)
    activeCategory: '出入门',   //当前激活校区的分类
    activeCategoryIndex: 0,   //当前激活的类型对应的index索引，默认为0
    scrollLeft: 0,//横向滚动条位置，默认为0
    nowShow: [],       //通过激活的分类进行显示当前的内容

    coreLongitude: '',//中心经度
    coreLatitude: '',//中心纬度
    scale: 16,//缩放级别
    markers: [],//标记点
    activeMarkerIndex: '',   //当前激活标记点对应的index
    isSpread: true, //底部可滚动视图区域是否显示，true表示展开，false表示收缩

    isShow:true,  //底部滚动区是否显示
    isIphoneX:false,  //手机信号
  },

  //切换底部图片的显示与否
  changeHeight:function(){
    this.setData({
      isShow: !this.data.isShow
    })
  },

  //地图上点击markerTap按钮
  markerTap:function(e){
    let markerId = e.markerId;
    let markers = this.data.markers;
    let nowShow = this.data.nowShow;
    let activeCategoryIndex = this.data.activeCategoryIndex;
    let activeCategory = this.data.activeCategory;
    //通过activeCategory在compareTypes找到 对应的index
    let activeIndex;
    this.data.compareTypes.forEach((item,index) => {
      if(item == activeCategory){
        activeIndex = index;
        console.log(index);
      }
    });
    markers.forEach((item) => {
      if (item.id == markerId) {
        item.iconPath = "../../resources/images/" + activeIndex + "selected.png";
      }
      else {
        item.iconPath = "../../resources/images/" + activeIndex + ".png";
      }
    })
    this.setData({
      activeMarkerIndex: markerId,
      markers
    })
    nowShow.forEach((item, index) => {
      if (index == markerId) {
        this.setData({
          scrollLeft: 141 * index
        })
      }
    })
  },

  //切换校区  点击下拉框选择楼层
  bindPickerChange(e) {
    // console.log(e.detail.value);   
    this.setData({
      index: e.detail.value,
      activeCategoryIndex:0
    });
    this.changeCampus(e.detail.value);
  },

  //切换校区函数
  changeCampus: function (index) {
    //更新当前校区显示的内容，即修改 nowCampus 数组的值
    let campus = [];
    if(index == 0){
      campus = this.data.yxCampus;
      this.setData({
        coreLongitude: '112.522562',  
        coreLatitude: '37.861382',
        nowTypes:this.data.yxCampusTypes,
        activeCategory:'出入门'
      });
    }
    else if(index == 1){
      campus = this.data.hyCampus;
      this.setData({
        coreLongitude: '112.523483',  
        coreLatitude: '37.853078',
        nowTypes: this.data.hyCampusTypes,
        activeCategory: '出入门'
      });
    }
    else{
      campus = this.data.mxCampus;
      this.setData({
        coreLongitude: '112.720872',  
        coreLatitude: '37.748937',
        nowTypes: this.data.mxCampusTypes,
        activeCategory: '出入门'
      });
    }

    // console.log(this.data.nowCampus);
    //切换后默认显示第一个分类的内容
    this.getNowCategory(campus,this.data.activeCategory);
  },

  //切换分类事件
  categoryChange: function (e) {
    // console.log(e.currentTarget.dataset.index);
    let activeCategoryIndex = e.currentTarget.dataset.index;
    this.setData({
      activeMarkerIndex: '',
      activeCategoryIndex
    });
    let activeCategory = e.currentTarget.dataset.cate;   //当前选中的类型
    //通过index的值进行更新校区类型的内容
    if (this.data.index == 0){
      this.getNowCategory(this.data.yxCampus,activeCategory);
    }
    else if (this.data.index == 1) {
      this.getNowCategory(this.data.hyCampus, activeCategory);
    }
    else{
      this.getNowCategory(this.data.mxCampus,activeCategory);
    }
    //更新当前激活类型
    this.setData({
      activeCategory
    })
    
  },

  //查询当前校区指定分类下的信息(通过分类在nowCampus数组中查找)，更新nowShow数组
  getNowCategory:function(campus,type){
    let nowShow = [];
    //遍历campus数组
    for(var i = 0 ; i < campus.length ; i++){
      if(campus[i].type == type){
        nowShow.push(campus[i]);
      }
    }
    //更新nowShow数组
    this.setData({
      nowShow
    });
    this.upDateMarker(nowShow);
  },

  //更新当前显示信息的marker
  upDateMarker:function(nowShow){
    let markers = [];
    let activeIndex;
    let activeCategoryIndex = this.data.activeCategoryIndex;
    let type = nowShow[0].type;  //通过类型确定图标
    this.data.compareTypes.forEach((item, index) => {
      if (item == type) {
        activeIndex = index;
      }
    });
    nowShow.forEach((item, index) => {
      let marker = {};
      marker = {
        id: index,
        longitude: item.longitude,
        latitude: item.latitude,
        iconPath: '../../resources/images/' + activeIndex + '.png',
        width: 32,
        height: 40
      }
      markers.push(marker);
    });
    this.setData({
      markers
    });
  },

  //加载页面内容:将学校信息从表中取出，并将主、新校区分开，默认当前显示的为主校区
  onLoad: function (options) {
    let isIphoneX = app.globalData.isIphoneX;
    this.setData({
      isIphoneX
    });
    console.log(isIphoneX);
    let that = this;
    let result = [];    //查表的结果
    
    wx.getStorage({
      key: 'key',
      success: function(res) {
        that.setIndexShow(res.data);
      },
      fail:function(){
        tools.searchInfo(res => {
          result = res.data.objects;
          that.setIndexShow(result);
          wx.setStorage({
            key: 'key',
            data: result
          })
        });
      }
    })

  },

  //设置当前显示
  setIndexShow: function(result){
    let yxCampus = [];   //存放迎西校区内容
    let hyCampus = [];
    let mxCampus = [];
    let nowShow = [];    //存放当前显示校区类型的内容
    for (var i = 0; i < result.length; i++) {
      if (result[i].campus == "迎西校区") {
        yxCampus.push(result[i]);     //将迎西校区的内容保存   
      }
      else if (result[i].campus == "虎峪校区") {
        hyCampus.push(result[i]);
      }
      else {
        mxCampus.push(result[i]);
      }
    }
    //更新data中yxCampus、hyCampus、mxCampus
    this.setData({
      yxCampus,
      hyCampus,
      mxCampus
    });
    //默认显示迎西校区的内容，并显示第一个种类的信息
    this.changeCampus(0);  //0表示选择迎西校区 
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