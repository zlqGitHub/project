import config from "./config";

//根据tableID来查询简介数据
let searchIntro = function(cb){
  let oTable = new wx.BaaS.TableObject(config.TABLEID.taiLi_intro);
  let query = new wx.BaaS.Query();
  oTable.find().then(res => {
    cb(res);
  },err => {
    console.log("数据查询失败");
  });
}
//根据内容库id来获取内容
let searchContent = function(cb){
  let contentGroupID = config.CONTENTGROUPID.talLi_content;
  let richTextID = config.CONTENTGROUPID.richTextID;

  let MyContentGroup = new wx.BaaS.ContentGroup(contentGroupID)
  MyContentGroup.getContent(richTextID).then(res => {
    cb(res);
  }, err => {
    console.log("内容获取失败");
  })
}


//根据tableID来查询简介数据
let searchInfo = function (cb) {
  let oTable = new wx.BaaS.TableObject(config.TABLEID.taiLi_info);
  let query = new wx.BaaS.Query();
  oTable.limit(1000).offset(0).find().then(res => {
    cb(res);
  }, err => {
    console.log("数据查询失败");
  });
}

module.exports = {
  searchIntro,
  searchContent,
  searchInfo
}