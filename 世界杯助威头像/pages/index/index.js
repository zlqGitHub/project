var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./../../api/baseAPI")), a = require("./../../utils/util"), e = getApp();

Page({
    data: {
        value: "",
        poemData: [],
        detailBack: !1,
        needAuthorize: 0,
        avatar: {
            type: !0
        }
    },
    onLoad: function(t) {
        var a = this;
        wx.showShareMenu({
            withShareTicket: !0
        }), wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] && (console.log(getCurrentPages()), a.setData({
                    needAuthorize: !1
                }));
            }
        }), e.getUserInfo(function(t) {
            var r = a.data.avatar, o = t.headimgurl.split("/");
            o[o.length - 1] = "0", r.url = o.join("/"), a.setData({
                avatar: r,
                user: t
            }), console.log("kasldfkjasdfkslj"), e.markGroupid(), a.getCountryList();
        });
    },
    onShareAppMessage: function(t) {
        return {
            title: "生成你的世界杯头像",
            path: "/pages/index/index",
            imageUrl: "../../img/sharebg.png",
            success: function(t) {
                t.shareTickets[0];
            }
        };
    },
    getCountryList: function() {
        var e = this;
        (0, a.wxPromisify)(wx.request)({
            url: t.default.countrylist(),
            method: "GET",
            data: {
                testGroup: e.data.user.testGroup
            }
        }).then(function(t) {
            var a = t.data.data;
            a[0].select = !0;
            var r = e.data.avatar;
            r.country_background = a[0].country_background, r.country_id = a[0].country_id, 
            e.setData({
                country: a,
                avatar: r,
                selectIndex: 0
            });
        });
    },
    selectCountry: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.country;
        if (!e[a].select) {
            e[this.data.selectIndex].select = !1, e[a].select = !0;
            var r = this.data.avatar;
            r.country_background = e[a].country_background, r.country_id = e[a].country_id, 
            this.setData({
                country: e,
                avatar: r,
                selectIndex: a
            });
        }
    },
    chooseImg: function() {
        var t = this, a = t.data.avatar;
        wx.showActionSheet({
            itemList: [ "用微信头像", "从手机相册选择" ],
            success: function(e) {
                0 === e.tapIndex ? (a.type = !0, t.setData({
                    avatar: a
                })) : wx.chooseImage({
                    count: 1,
                    sizeType: [ "original", "compressed" ],
                    sourceType: [ "album" ],
                    success: function(t) {
                        wx.navigateTo({
                            url: "/pages/cropper/cropper?imgUrl=" + t.tempFilePaths[0]
                        });
                    }
                });
            },
            fail: function(t) {
                console.log(t.errMsg);
            }
        });
    },
    done: function() {
        var a = this;
        wx.showLoading({
            title: "头像生成中...",
            mask: !0
        }), this.data.avatar.img ? (console.log(this.data.avatar.img), wx.uploadFile({
            url: t.default.upload(),
            filePath: a.data.avatar.img,
            name: "img",
            success: function(t) {
                console.log(t), a.generate(t.data);
            },
            fail: function(t) {
                console.log(t), wx.showToast({
                    title: "上传失败",
                    icon: "none",
                    duration: 1e3
                });
            }
        })) : this.generate(this.data.avatar.url);
    },
    generate: function(e) {
        var r = this;
        (0, a.wxPromisify)(wx.request)({
            url: t.default.worldcupavatar(),
            method: "POST",
            data: {
                avatar: e,
                country_id: r.data.avatar.country_id,
                user_id: r.data.user.user_id
            }
        }).then(function(t) {
            var a = t.data.data;
            wx.hideLoading(), wx.navigateTo({
                url: "/pages/generate/generate?url=" + a
            });
        });
    },
    formSubmit: function(e) {
        var r = this;
        console.log("form发生了submit事件，携带数据为：", e), (0, a.wxPromisify)(wx.request)({
            url: t.default.storeformId(),
            method: "POST",
            data: {
                form_id: e.detail.formId,
                user_id: r.data.user.user_id
            }
        }).then(function(t) {
            t.data.data;
        });
    }
});