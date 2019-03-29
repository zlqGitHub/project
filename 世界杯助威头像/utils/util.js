var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("q"));

module.exports = {
    wxPromisify: function(t) {
        return function() {
            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return e.default.promise(function(e, o) {
                a.success = function(t) {
                    console.log(t), t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) ? o(t) : t.data && t.data.head && t.data.head.code && (t.data.head.code < 200 || t.data.head.code >= 300) ? o(t) : e(t);
                }, a.fail = function(e) {
                    o(e);
                }, t(a);
            });
        };
    }
};