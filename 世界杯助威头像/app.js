var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./api/baseAPI")), t = require("./utils/util");

App({
    onLaunch: function(e) {
        var t = wx.getStorageSync("logs") || [];
        t.unshift(Date.now()), wx.setStorageSync("logs", t);
    },
    onShow: function(e) {
        wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userInfo"] ? console.log(getCurrentPages()) : setTimeout(function() {
                    console.log(getCurrentPages());
                    var e = getCurrentPages()[0], t = "";
                    Object.keys(e.options).map(function(a) {
                        t += a + "=" + e.options[a] + "&";
                    }), console.log("/pages/authSetting/auth?page=" + e.route + "&params=" + t), wx.redirectTo({
                        url: "/pages/authSetting/auth?page=" + e.route + "&" + t
                    });
                }, 500);
            }
        });
        var t = this;
        1044 == e.scene && (console.log("1044"), t.globalData.shareTicket = e.shareTicket), 
        wx.getSystemInfo({
            success: function(e) {
                -1 != e.model.indexOf("iPhone X") && (t.globalData.isIpx = !0);
            },
            fail: function(e) {
                console.log("fail");
            }
        });
    },
    onHide: function() {
        console.log("APP HIDE"), this.globalData.shareTicket = null;
    },
    getPageData: function(e) {
        return this.globalData[e];
    },
    setPageData: function(e, t) {
        this.globalData[e] = t;
    },
    getUserInfo: function(a) {
        var o = this;
        this.globalData.userInfo ? "function" == typeof a && a(this.globalData.userInfo) : wx.getSetting({
            success: function(n) {
                n.authSetting["scope.userInfo"] ? (0, t.wxPromisify)(wx.login)().then(function(a) {
                    var o = a.code;
                    return (0, t.wxPromisify)(wx.request)({
                        url: e.default.sessionKey(o)
                    });
                }).then(function(e) {
                    var a = e.data.data;
                    return o.globalData.sessionKey = a, (0, t.wxPromisify)(wx.getUserInfo)();
                }).then(function(a) {
                    var n = a.encryptedData, s = a.iv;
                    return (0, t.wxPromisify)(wx.request)({
                        url: e.default.login(),
                        method: "POST",
                        data: {
                            session_key: o.globalData.sessionKey,
                            encryptedData: n,
                            iv: s
                        }
                    });
                }).then(function(e) {
                    var t = e.data.data;
                    return console.log("comefrom play user"), o.globalData.userInfo = t, "function" == typeof a && a(o.globalData.userInfo), 
                    null;
                }) : (0, t.wxPromisify)(wx.login)().then(function(a) {
                    var o = a.code;
                    return (0, t.wxPromisify)(wx.request)({
                        url: e.default.sessionKey(o)
                    }), null;
                });
            }
        });
    },
    markGroupid: function() {
        var a = this;
        wx.getShareInfo({
            shareTicket: a.globalData.shareTicket,
            success: function(o) {
                o.encryptedData && o.iv && (0, t.wxPromisify)(wx.request)({
                    url: e.default.group(),
                    method: "POST",
                    data: {
                        user_id: a.globalData.userInfo.user_id,
                        session_key: a.globalData.sessionKey,
                        encryptedData: o.encryptedData,
                        iv: o.iv
                    }
                }).then(function(e) {
                    var t = e.data.data;
                    a.globalData.groupId = t.getGroupId;
                });
            },
            fail: function(e) {
                a.globalData.groupId = void 0;
            }
        });
    },
    globalData: {
        userInfo: null,
        groupId: null,
        shareTicket: null,
        isIpx: null
    }
}), exports.app = App;