Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = "development" === JSON.parse('{"NODE_ENV":"development"}').NODE_ENV ? "https://dev-worldcup.beautifulreading.com" : "https://recitation.beautifulreading.com", e = {};

e.sessionKey = function(e) {
    return t + "/getsessionkey?code=" + e;
}, e.login = function() {
    return t + "/login";
}, e.worldcupavatar = function() {
    return t + "/worldcupavatar";
}, e.upload = function() {
    return t + "/upload";
}, e.countrylist = function() {
    return t + "/countrylist";
}, e.group = function() {
    return t + "/markgroup";
}, e.getAd = function() {
    return t + "/getAd";
}, e.storeformId = function() {
    return t + "/storeformid";
}, exports.default = e;