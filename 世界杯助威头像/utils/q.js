var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, n = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function(n) {
    return void 0 === n ? "undefined" : t(n);
} : function(n) {
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : void 0 === n ? "undefined" : t(n);
};

!function(t) {
    if ("function" == typeof bootstrap) bootstrap("promise", t); else if ("object" === ("undefined" == typeof exports ? "undefined" : n(exports))) module.exports = t(); else if ("function" == typeof define && define.amd) define(t); else if ("undefined" != typeof ses) {
        if (!ses.ok()) return;
        ses.makeQ = t;
    } else Q = t();
}(function() {
    function t(t) {
        return function() {
            return I.apply(t, arguments);
        };
    }
    function e(t) {
        return t === Object(t);
    }
    function r(t) {
        return "[object StopIteration]" === z(t) || t instanceof A;
    }
    function o(t, e) {
        if (E && e.stack && "object" === (void 0 === t ? "undefined" : n(t)) && null !== t && t.stack && -1 === t.stack.indexOf(H)) {
            for (var r = [], o = e; o; o = o.source) o.stack && r.unshift(o.stack);
            r.unshift(t.stack);
            var u = r.join("\n" + H + "\n");
            t.stack = i(u);
        }
    }
    function i(t) {
        for (var n = t.split("\n"), e = [], r = 0; r < n.length; ++r) {
            var o = n[r];
            f(o) || u(o) || !o || e.push(o);
        }
        return e.join("\n");
    }
    function u(t) {
        return -1 !== t.indexOf("(module.js:") || -1 !== t.indexOf("(node.js:");
    }
    function c(t) {
        var n = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);
        if (n) return [ n[1], Number(n[2]) ];
        var e = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t);
        if (e) return [ e[1], Number(e[2]) ];
        var r = /.*@(.+):(\d+)$/.exec(t);
        return r ? [ r[1], Number(r[2]) ] : void 0;
    }
    function f(t) {
        var n = c(t);
        if (!n) return !1;
        var e = n[0], r = n[1];
        return e === P && r >= C && r <= Y;
    }
    function s() {
        if (E) try {
            throw new Error();
        } catch (e) {
            var t = e.stack.split("\n"), n = c(t[0].indexOf("@") > 0 ? t[1] : t[2]);
            if (!n) return;
            return P = n[0], n[1];
        }
    }
    function p(t) {
        return v(t) ? t : m(t) ? S(t) : R(t);
    }
    function a() {
        function t(t) {
            n = t, i.source = t, Q(e, function(n, e) {
                U(function() {
                    t.promiseDispatch.apply(t, e);
                });
            }, void 0), e = void 0, r = void 0;
        }
        var n, e = [], r = [], o = V(a.prototype), i = V(d.prototype);
        if (i.promiseDispatch = function(t, o, i) {
            var u = M(arguments);
            e ? (e.push(u), "when" === o && i[1] && r.push(i[1])) : U(function() {
                n.promiseDispatch.apply(n, u);
            });
        }, i.valueOf = function() {
            if (e) return i;
            var t = h(n);
            return v(t) && (n = t), t;
        }, i.inspect = function() {
            return n ? n.inspect() : {
                state: "pending"
            };
        }, p.longStackSupport && E) try {
            throw new Error();
        } catch (t) {
            i.stack = t.stack.substring(t.stack.indexOf("\n") + 1);
        }
        return o.promise = i, o.resolve = function(e) {
            n || t(p(e));
        }, o.fulfill = function(e) {
            n || t(R(e));
        }, o.reject = function(e) {
            n || t(x(e));
        }, o.notify = function(t) {
            n || Q(r, function(n, e) {
                U(function() {
                    e(t);
                });
            }, void 0);
        }, o;
    }
    function l(t) {
        if ("function" != typeof t) throw new TypeError("resolver must be a function.");
        var n = a();
        try {
            t(n.resolve, n.reject, n.notify);
        } catch (t) {
            n.reject(t);
        }
        return n.promise;
    }
    function d(t, n, e) {
        void 0 === n && (n = function(t) {
            return x(new Error("Promise does not support operation: " + t));
        }), void 0 === e && (e = function() {
            return {
                state: "unknown"
            };
        });
        var r = V(d.prototype);
        if (r.promiseDispatch = function(e, o, i) {
            var u;
            try {
                u = t[o] ? t[o].apply(r, i) : n.call(r, o, i);
            } catch (t) {
                u = x(t);
            }
            e && e(u);
        }, r.inspect = e, e) {
            var o = e();
            "rejected" === o.state && (r.exception = o.reason), r.valueOf = function() {
                var t = e();
                return "pending" === t.state || "rejected" === t.state ? r : t.value;
            };
        }
        return r;
    }
    function y(t, n, e, r) {
        return p(t).then(n, e, r);
    }
    function h(t) {
        if (v(t)) {
            var n = t.inspect();
            if ("fulfilled" === n.state) return n.value;
        }
        return t;
    }
    function v(t) {
        return e(t) && "function" == typeof t.promiseDispatch && "function" == typeof t.inspect;
    }
    function m(t) {
        return e(t) && "function" == typeof t.then;
    }
    function k() {
        !W && "undefined" != typeof window && window.console && console.warn("[Q] Unhandled rejection reasons (should be empty):", J), 
        W = !0;
    }
    function j() {
        for (var t = 0; t < J.length; t++) {
            var n = J[t];
            console.warn("Unhandled rejection reason:", n);
        }
    }
    function w() {
        J.length = 0, K.length = 0, W = !1, X || (X = !0, "undefined" != typeof process && process.on && process.on("exit", j));
    }
    function b(t, n) {
        X && (K.push(t), n && void 0 !== n.stack ? J.push(n.stack) : J.push("(no stack) " + n), 
        k());
    }
    function g(t) {
        if (X) {
            var n = $(K, t);
            -1 !== n && (K.splice(n, 1), J.splice(n, 1));
        }
    }
    function x(t) {
        var n = d({
            when: function(n) {
                return n && g(this), n ? n(t) : this;
            }
        }, function() {
            return this;
        }, function() {
            return {
                state: "rejected",
                reason: t
            };
        });
        return b(n, t), n;
    }
    function R(t) {
        return d({
            when: function() {
                return t;
            },
            get: function(n) {
                return t[n];
            },
            set: function(n, e) {
                t[n] = e;
            },
            delete: function(n) {
                delete t[n];
            },
            post: function(n, e) {
                return null === n || void 0 === n ? t.apply(void 0, e) : t[n].apply(t, e);
            },
            apply: function(n, e) {
                return t.apply(n, e);
            },
            keys: function() {
                return q(t);
            }
        }, void 0, function() {
            return {
                state: "fulfilled",
                value: t
            };
        });
    }
    function S(t) {
        var n = a();
        return U(function() {
            try {
                t.then(n.resolve, n.reject, n.notify);
            } catch (t) {
                n.reject(t);
            }
        }), n.promise;
    }
    function T(t, n, e) {
        return p(t).spread(n, e);
    }
    function O(t, n, e) {
        return p(t).dispatch(n, e);
    }
    function N(t) {
        return y(t, function(t) {
            var n = 0, e = a();
            return Q(t, function(r, o, i) {
                var u;
                v(o) && "fulfilled" === (u = o.inspect()).state ? t[i] = u.value : (++n, y(o, function(r) {
                    t[i] = r, 0 == --n && e.resolve(t);
                }, e.reject, function(t) {
                    e.notify({
                        index: i,
                        value: t
                    });
                }));
            }, void 0), 0 === n && e.resolve(t), e.promise;
        });
    }
    function D(t) {
        return y(t, function(t) {
            return t = B(t, p), y(N(B(t, function(t) {
                return y(t, F, F);
            })), function() {
                return t;
            });
        });
    }
    var E = !1;
    try {
        throw new Error();
    } catch (t) {
        E = !!t.stack;
    }
    var P, A, C = s(), F = function() {}, U = function() {
        function t() {
            for (;n.next; ) {
                var e = (n = n.next).task;
                n.task = void 0;
                var o = n.domain;
                o && (n.domain = void 0, o.enter());
                try {
                    e();
                } catch (n) {
                    if (i) throw o && o.exit(), setTimeout(t, 0), o && o.enter(), n;
                    setTimeout(function() {
                        throw n;
                    }, 0);
                }
                o && o.exit();
            }
            r = !1;
        }
        var n = {
            task: void 0,
            next: null
        }, e = n, r = !1, o = void 0, i = !1;
        if (U = function(t) {
            e = e.next = {
                task: t,
                domain: i && process.domain,
                next: null
            }, r || (r = !0, o());
        }, "undefined" != typeof process && process.nextTick) i = !0, o = function() {
            process.nextTick(t);
        }; else if ("function" == typeof setImmediate) o = "undefined" != typeof window ? setImmediate.bind(window, t) : function() {
            setImmediate(t);
        }; else if ("undefined" != typeof MessageChannel) {
            var u = new MessageChannel();
            u.port1.onmessage = function() {
                o = c, u.port1.onmessage = t, t();
            };
            var c = function() {
                u.port2.postMessage(0);
            };
            o = function() {
                setTimeout(t, 0), c();
            };
        } else o = function() {
            setTimeout(t, 0);
        };
        return U;
    }(), I = Function.call, M = t(Array.prototype.slice), Q = t(Array.prototype.reduce || function(t, n) {
        var e = 0, r = this.length;
        if (1 === arguments.length) for (;;) {
            if (e in this) {
                n = this[e++];
                break;
            }
            if (++e >= r) throw new TypeError();
        }
        for (;e < r; e++) e in this && (n = t(n, this[e], e));
        return n;
    }), $ = t(Array.prototype.indexOf || function(t) {
        for (var n = 0; n < this.length; n++) if (this[n] === t) return n;
        return -1;
    }), B = t(Array.prototype.map || function(t, n) {
        var e = this, r = [];
        return Q(e, function(o, i, u) {
            r.push(t.call(n, i, u, e));
        }, void 0), r;
    }), V = Object.create || function(t) {
        function n() {}
        return n.prototype = t, new n();
    }, L = t(Object.prototype.hasOwnProperty), q = Object.keys || function(t) {
        var n = [];
        for (var e in t) L(t, e) && n.push(e);
        return n;
    }, z = t(Object.prototype.toString);
    A = "undefined" != typeof ReturnValue ? ReturnValue : function(t) {
        this.value = t;
    };
    var G;
    try {
        new Function("(function* (){ yield 1; })"), G = !0;
    } catch (t) {
        G = !1;
    }
    var H = "From previous event:";
    p.resolve = p, p.nextTick = U, p.longStackSupport = !1, p.defer = a, a.prototype.makeNodeResolver = function() {
        var t = this;
        return function(n, e) {
            n ? t.reject(n) : arguments.length > 2 ? t.resolve(M(arguments, 1)) : t.resolve(e);
        };
    }, p.promise = l, p.passByCopy = function(t) {
        return t;
    }, d.prototype.passByCopy = function() {
        return this;
    }, p.join = function(t, n) {
        return p(t).join(n);
    }, d.prototype.join = function(t) {
        return p([ this, t ]).spread(function(t, n) {
            if (t === n) return t;
            throw new Error("Can't join: not the same: " + t + " " + n);
        });
    }, p.race = function(t) {
        return l(function(n, e) {
            for (var r = 0, o = t.length; r < o; r++) p(t[r]).then(n, e);
        });
    }, d.prototype.race = function() {
        return this.then(p.race);
    }, p.makePromise = d, d.prototype.toString = function() {
        return "[object Promise]";
    }, d.prototype.then = function(t, n, e) {
        function r(n) {
            try {
                return "function" == typeof t ? t(n) : n;
            } catch (t) {
                return x(t);
            }
        }
        function i(t) {
            if ("function" == typeof n) {
                o(t, c);
                try {
                    return n(t);
                } catch (t) {
                    return x(t);
                }
            }
            return x(t);
        }
        function u(t) {
            return "function" == typeof e ? e(t) : t;
        }
        var c = this, f = a(), s = !1;
        return U(function() {
            c.promiseDispatch(function(t) {
                s || (s = !0, f.resolve(r(t)));
            }, "when", [ function(t) {
                s || (s = !0, f.resolve(i(t)));
            } ]);
        }), c.promiseDispatch(void 0, "when", [ void 0, function(t) {
            var n, e = !1;
            try {
                n = u(t);
            } catch (t) {
                if (e = !0, !p.onerror) throw t;
                p.onerror(t);
            }
            e || f.notify(n);
        } ]), f.promise;
    }, p.when = y, d.prototype.thenResolve = function(t) {
        return this.then(function() {
            return t;
        });
    }, p.thenResolve = function(t, n) {
        return p(t).thenResolve(n);
    }, d.prototype.thenReject = function(t) {
        return this.then(function() {
            throw t;
        });
    }, p.thenReject = function(t, n) {
        return p(t).thenReject(n);
    }, p.nearer = h, p.isPromise = v, p.isPromiseAlike = m, p.isPending = function(t) {
        return v(t) && "pending" === t.inspect().state;
    }, d.prototype.isPending = function() {
        return "pending" === this.inspect().state;
    }, p.isFulfilled = function(t) {
        return !v(t) || "fulfilled" === t.inspect().state;
    }, d.prototype.isFulfilled = function() {
        return "fulfilled" === this.inspect().state;
    }, p.isRejected = function(t) {
        return v(t) && "rejected" === t.inspect().state;
    }, d.prototype.isRejected = function() {
        return "rejected" === this.inspect().state;
    };
    var J = [], K = [], W = !1, X = !0;
    p.resetUnhandledRejections = w, p.getUnhandledReasons = function() {
        return J.slice();
    }, p.stopUnhandledRejectionTracking = function() {
        w(), "undefined" != typeof process && process.on && process.removeListener("exit", j), 
        X = !1;
    }, w(), p.reject = x, p.fulfill = R, p.master = function(t) {
        return d({
            isDef: function() {}
        }, function(n, e) {
            return O(t, n, e);
        }, function() {
            return p(t).inspect();
        });
    }, p.spread = T, d.prototype.spread = function(t, n) {
        return this.all().then(function(n) {
            return t.apply(void 0, n);
        }, n);
    }, p.async = function(t) {
        return function() {
            function n(t, n) {
                var u;
                if (G) {
                    try {
                        u = e[t](n);
                    } catch (t) {
                        return x(t);
                    }
                    return u.done ? u.value : y(u.value, o, i);
                }
                try {
                    u = e[t](n);
                } catch (t) {
                    return r(t) ? t.value : x(t);
                }
                return y(u, o, i);
            }
            var e = t.apply(this, arguments), o = n.bind(n, "next"), i = n.bind(n, "throw");
            return o();
        };
    }, p.spawn = function(t) {
        p.done(p.async(t)());
    }, p.return = function(t) {
        throw new A(t);
    }, p.promised = function(t) {
        return function() {
            return T([ this, N(arguments) ], function(n, e) {
                return t.apply(n, e);
            });
        };
    }, p.dispatch = O, d.prototype.dispatch = function(t, n) {
        var e = this, r = a();
        return U(function() {
            e.promiseDispatch(r.resolve, t, n);
        }), r.promise;
    }, p.get = function(t, n) {
        return p(t).dispatch("get", [ n ]);
    }, d.prototype.get = function(t) {
        return this.dispatch("get", [ t ]);
    }, p.set = function(t, n, e) {
        return p(t).dispatch("set", [ n, e ]);
    }, d.prototype.set = function(t, n) {
        return this.dispatch("set", [ t, n ]);
    }, p.del = p.delete = function(t, n) {
        return p(t).dispatch("delete", [ n ]);
    }, d.prototype.del = d.prototype.delete = function(t) {
        return this.dispatch("delete", [ t ]);
    }, p.mapply = p.post = function(t, n, e) {
        return p(t).dispatch("post", [ n, e ]);
    }, d.prototype.mapply = d.prototype.post = function(t, n) {
        return this.dispatch("post", [ t, n ]);
    }, p.send = p.mcall = p.invoke = function(t, n) {
        return p(t).dispatch("post", [ n, M(arguments, 2) ]);
    }, d.prototype.send = d.prototype.mcall = d.prototype.invoke = function(t) {
        return this.dispatch("post", [ t, M(arguments, 1) ]);
    }, p.fapply = function(t, n) {
        return p(t).dispatch("apply", [ void 0, n ]);
    }, d.prototype.fapply = function(t) {
        return this.dispatch("apply", [ void 0, t ]);
    }, p.try = p.fcall = function(t) {
        return p(t).dispatch("apply", [ void 0, M(arguments, 1) ]);
    }, d.prototype.fcall = function() {
        return this.dispatch("apply", [ void 0, M(arguments) ]);
    }, p.fbind = function(t) {
        var n = p(t), e = M(arguments, 1);
        return function() {
            return n.dispatch("apply", [ this, e.concat(M(arguments)) ]);
        };
    }, d.prototype.fbind = function() {
        var t = this, n = M(arguments);
        return function() {
            return t.dispatch("apply", [ this, n.concat(M(arguments)) ]);
        };
    }, p.keys = function(t) {
        return p(t).dispatch("keys", []);
    }, d.prototype.keys = function() {
        return this.dispatch("keys", []);
    }, p.all = N, d.prototype.all = function() {
        return N(this);
    }, p.allResolved = function(t, n, e) {
        return function() {
            return "undefined" != typeof console && "function" == typeof console.warn && console.warn(n + " is deprecated, use " + e + " instead.", new Error("").stack), 
            t.apply(t, arguments);
        };
    }(D, "allResolved", "allSettled"), d.prototype.allResolved = function() {
        return D(this);
    }, p.allSettled = function(t) {
        return p(t).allSettled();
    }, d.prototype.allSettled = function() {
        return this.then(function(t) {
            return N(B(t, function(t) {
                function n() {
                    return t.inspect();
                }
                return (t = p(t)).then(n, n);
            }));
        });
    }, p.fail = p.catch = function(t, n) {
        return p(t).then(void 0, n);
    }, d.prototype.fail = d.prototype.catch = function(t) {
        return this.then(void 0, t);
    }, p.progress = function(t, n) {
        return p(t).then(void 0, void 0, n);
    }, d.prototype.progress = function(t) {
        return this.then(void 0, void 0, t);
    }, p.fin = p.finally = function(t, n) {
        return p(t).finally(n);
    }, d.prototype.fin = d.prototype.finally = function(t) {
        return t = p(t), this.then(function(n) {
            return t.fcall().then(function() {
                return n;
            });
        }, function(n) {
            return t.fcall().then(function() {
                throw n;
            });
        });
    }, p.done = function(t, n, e, r) {
        return p(t).done(n, e, r);
    }, d.prototype.done = function(t, e, r) {
        var i = function(t) {
            U(function() {
                if (o(t, u), !p.onerror) throw t;
                p.onerror(t);
            });
        }, u = t || e || r ? this.then(t, e, r) : this;
        "object" === ("undefined" == typeof process ? "undefined" : n(process)) && process && process.domain && (i = process.domain.bind(i)), 
        u.then(void 0, i);
    }, p.timeout = function(t, n, e) {
        return p(t).timeout(n, e);
    }, d.prototype.timeout = function(t, n) {
        var e = a(), r = setTimeout(function() {
            e.reject(new Error(n || "Timed out after " + t + " ms"));
        }, t);
        return this.then(function(t) {
            clearTimeout(r), e.resolve(t);
        }, function(t) {
            clearTimeout(r), e.reject(t);
        }, e.notify), e.promise;
    }, p.delay = function(t, n) {
        return void 0 === n && (n = t, t = void 0), p(t).delay(n);
    }, d.prototype.delay = function(t) {
        return this.then(function(n) {
            var e = a();
            return setTimeout(function() {
                e.resolve(n);
            }, t), e.promise;
        });
    }, p.nfapply = function(t, n) {
        return p(t).nfapply(n);
    }, d.prototype.nfapply = function(t) {
        var n = a(), e = M(t);
        return e.push(n.makeNodeResolver()), this.fapply(e).fail(n.reject), n.promise;
    }, p.nfcall = function(t) {
        var n = M(arguments, 1);
        return p(t).nfapply(n);
    }, d.prototype.nfcall = function() {
        var t = M(arguments), n = a();
        return t.push(n.makeNodeResolver()), this.fapply(t).fail(n.reject), n.promise;
    }, p.nfbind = p.denodeify = function(t) {
        var n = M(arguments, 1);
        return function() {
            var e = n.concat(M(arguments)), r = a();
            return e.push(r.makeNodeResolver()), p(t).fapply(e).fail(r.reject), r.promise;
        };
    }, d.prototype.nfbind = d.prototype.denodeify = function() {
        var t = M(arguments);
        return t.unshift(this), p.denodeify.apply(void 0, t);
    }, p.nbind = function(t, n) {
        var e = M(arguments, 2);
        return function() {
            var r = e.concat(M(arguments)), o = a();
            return r.push(o.makeNodeResolver()), p(function() {
                return t.apply(n, arguments);
            }).fapply(r).fail(o.reject), o.promise;
        };
    }, d.prototype.nbind = function() {
        var t = M(arguments, 0);
        return t.unshift(this), p.nbind.apply(void 0, t);
    }, p.nmapply = p.npost = function(t, n, e) {
        return p(t).npost(n, e);
    }, d.prototype.nmapply = d.prototype.npost = function(t, n) {
        var e = M(n || []), r = a();
        return e.push(r.makeNodeResolver()), this.dispatch("post", [ t, e ]).fail(r.reject), 
        r.promise;
    }, p.nsend = p.nmcall = p.ninvoke = function(t, n) {
        var e = M(arguments, 2), r = a();
        return e.push(r.makeNodeResolver()), p(t).dispatch("post", [ n, e ]).fail(r.reject), 
        r.promise;
    }, d.prototype.nsend = d.prototype.nmcall = d.prototype.ninvoke = function(t) {
        var n = M(arguments, 1), e = a();
        return n.push(e.makeNodeResolver()), this.dispatch("post", [ t, n ]).fail(e.reject), 
        e.promise;
    }, p.nodeify = function(t, n) {
        return p(t).nodeify(n);
    }, d.prototype.nodeify = function(t) {
        if (!t) return this;
        this.then(function(n) {
            U(function() {
                t(null, n);
            });
        }, function(n) {
            U(function() {
                t(n);
            });
        });
    };
    var Y = s();
    return p;
});