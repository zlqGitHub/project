Page({
    data: {},
    onLoad: function(a) {
        var e = "";
        a.page && (e = "/" + a.page + "?"), console.log(getCurrentPages()), a.params && (this.data.params = a.params), 
        Object.keys(a).filter(function(a) {
            return "page" != a;
        }).map(function(o) {
            console.log(o), e += o + "=" + a[o] + "&";
        }), this.data.url = e, console.log(e);
    },
    bindGetUserInfo: function(a) {
        var e = this;
        wx.reLaunch({
            url: e.data.url
        }), console.log("fafasdf");
    }
});