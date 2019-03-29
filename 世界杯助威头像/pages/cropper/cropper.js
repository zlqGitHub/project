var o = function(o) {
    return o && o.__esModule ? o : {
        default: o
    };
}(require("./../../utils/we-cropper.min.js")), e = wx.getSystemInfoSync(), t = e.windowWidth, n = e.windowHeight - 50;

Page({
    data: {
        cropperOpt: {
            id: "cropper",
            width: t,
            height: n,
            scale: 2.5,
            zoom: 8,
            cut: {
                x: (t - 300) / 2,
                y: (n - 300) / 2,
                width: 300,
                height: 300
            }
        }
    },
    touchStart: function(o) {
        this.wecropper.touchStart(o);
    },
    touchMove: function(o) {
        this.wecropper.touchMove(o);
    },
    touchEnd: function(o) {
        this.wecropper.touchEnd(o);
    },
    getCropperImage: function() {
        this.wecropper.getCropperImage(function(o) {
            if (o) {
                console.log(o);
                var e = getCurrentPages(), t = e[e.length - 2];
                console.log(t.data);
                var n = t.data.avatar;
                t.setData({
                    detailBack: !0
                }), n.img = o, n.type = !1, t.setData({
                    avatar: n
                }), wx.navigateBack(), wx.getImageInfo({
                    src: o,
                    success: function(o) {
                        console.log(o.width), console.log(o.height);
                    }
                });
            } else console.log("获取图片地址失败，请稍后重试");
        });
    },
    uploadTap: function() {
        var o = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album" ],
            success: function(e) {
                var t = e.tempFilePaths[0];
                o.wecropper.pushOrign(t);
            }
        });
    },
    onLoad: function(e) {
        var t = this.data.cropperOpt;
        t.src = e.imgUrl, new o.default(t).on("ready", function(o) {
            console.log("wecropper is ready for work!");
        }).on("beforeImageLoad", function(o) {
            console.log("before picture loaded, i can do something"), console.log("current canvas context:", o), 
            wx.showToast({
                title: "加载中",
                icon: "loading",
                duration: 2e4
            });
        }).on("imageLoad", function(o) {
            console.log("picture loaded"), console.log("current canvas context:", o), wx.hideToast();
        }).on("beforeDraw", function(o, e) {
            console.log("before canvas draw,i can do something"), console.log("current canvas context:", o);
        }).updateCanvas();
    }
});