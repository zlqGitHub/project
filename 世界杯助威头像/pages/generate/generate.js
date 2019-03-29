var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./../../api/baseAPI")), t = require("./../../utils/util"), s = getApp();

Page({
    data: {
        value: "",
        poemData: [],
        detailBack: !1,
        needAuthorize: !0,
        avatar: {},
        hideStyle: ""
    },
    onLoad: function(e) {
        var t = this;
        s.getUserInfo(function(e) {
            t.setData({
                user: e
            });
        }), this.setData({
            hideStyle: "hide-style"
        }), setTimeout(function() {
            t.setData({
                hide: !0
            });
        }, 3500), wx.showShareMenu({
            withShareTicket: !0
        }), e.url && this.setData({
            generateUrl: e.url
        }), this.getAd();
    },
    onShareAppMessage: function(e) {
        return {
            title: "生成你的世界杯头像",
            path: "/pages/index/index",
            imageUrl: "../../img/sharebg.png",
            success: function(e) {
                e.shareTickets[0];
            }
        };
    },
    saveToAlbum: function() {
        var e = this;
        wx.getSetting({
            success: function(t) {
                t.authSetting["scope.writePhotosAlbum"] ? e.save() : wx.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function() {
                        e.save();
                    }
                });
            }
        });
    },
    save: function() {
        var e = this;
        wx.getImageInfo({
            src: e.data.generateUrl,
            success: function(e) {
                console.log(e.width), console.log(e.height), wx.saveImageToPhotosAlbum({
                    filePath: e.path,
                    success: function(e) {
                        wx.showModal({
                            title: "",
                            content: "头像已保存到系统相册，快去晒晒吧",
                            confirmText: "好的",
                            showCancel: !1,
                            success: function(e) {}
                        });
                    }
                });
            }
        });
    },
    report: function() {
        console.log("jump"), wx.reportAnalytics("up_ad_click");
    },
    hideAlert: function() {
        this.setData({
            hide: !0
        });
    },
    getAd: function() {
        var s = this;
        (0, t.wxPromisify)(wx.request)({
            url: e.default.getAd(),
            method: "GET"
        }).then(function(e) {
            var t = e.data.data;
            s.setData({
                adUrl: t
            });
        });
    }
});