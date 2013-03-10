(function () {
    var o = !0,
        q = null,
        v = !1;

    function C() {
        return function () {}
    }
    (function (t) {
        function l() {}
        function f() {}
        function E(a, b, e) {
            var g, d = "mixpanel" === e ? t : t[e];
            if (d && !c.isArray(d)) s.error("You have already initialized " + e);
            else return g = new f, g.L(a, b, e), g.people = new l, g.people.L(g), A = A || g.d("debug"), c.e(d) || (g.I.call(g.people, d.people), g.I(d)), g
        }
        function k(a) {
            this.props = {};
            this.da = v;
            this.name = a.cookie_name ? "mp_" + a.cookie_name : "mp_" + a.token + "_mixpanel";
            this.load();
            this.ta(a);
            this.eb(a);
            this.save()
        }
        function F() {
            this.na = "submit"
        }
        function B() {
            this.na = "click"
        }
        function w() {}

        function x() {
            if (!x.Ia) J = x.Ia = o, K = v, c.a(y, function (a) {
                a.xa()
            })
        }
        var I = Array.prototype,
            z = Object.prototype,
            L = I.slice,
            D = z.toString,
            G = z.hasOwnProperty,
            u = window.console,
            M = window.navigator,
            r = window.document,
            n = M.userAgent,
            O = ["__mps", "__mpa", "__mpap", "$people_distinct_id", "__alias"],
            z = t && t.__SV || 0,
            H = window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
            K = !H && -1 == n.indexOf("MSIE"),
            c = {}, A = v,
            P = {
                api_host: ("https:" == r.location.protocol ? "https://" : "http://") + "api.mixpanel.com",
                cross_subdomain_cookie: o,
                cookie_name: "",
                loaded: C(),
                store_google: o,
                save_referrer: o,
                test: v,
                verbose: v,
                img: v,
                track_pageview: o,
                debug: v,
                track_links_timeout: 300,
                cookie_expiration: 365,
                upgrade: v,
                disable_cookie: v,
                ip: o
            }, J = v;
        (function () {
            var a = I.forEach,
                b = I.indexOf,
                e = Array.isArray,
                g = {}, d = c.a = function (b, e, c) {
                    if (b != q) if (a && b.forEach === a) b.forEach(e, c);
                    else if (b.length === +b.length) for (var d = 0, f = b.length; d < f && !(d in b && e.call(c, b[d], d, b) === g); d++);
                    else for (d in b) if (G.call(b, d) && e.call(c, b[d], d, b) === g) break
                };
            c.extend = function (a) {
                d(L.call(arguments, 1), function (b) {
                    for (var e in b) void 0 !== b[e] && (a[e] = b[e])
                });
                return a
            };
            c.isArray = e || function (a) {
                return "[object Array]" === D.call(a)
            };
            c.Qa = function (a) {
                try {
                    return /^\s*\bfunction\b/.test(a)
                } catch (b) {
                    return v
                }
            };
            c.Na = function (a) {
                return !(!a || !G.call(a, "callee"))
            };
            c.p = function (a) {
                return !a ? [] : a.p ? a.p() : c.isArray(a) || c.Na(a) ? L.call(a) : c.gb(a)
            };
            c.gb = function (a) {
                var b = [];
                if (a == q) return b;
                d(a, function (a) {
                    b[b.length] = a
                });
                return b
            };
            c.ib = function (a) {
                return a
            };
            c.ha = function (a, e) {
                var c = v;
                if (a == q) return c;
                if (b && a.indexOf === b) return -1 != a.indexOf(e);
                d(a, function (a) {
                    if (c || (c = a === e)) return g
                });
                return c
            };
            c.h = function (a, b) {
                return -1 !== a.indexOf(b)
            }
        })();
        c.ja = function (a, b) {
            a.prototype = new b;
            a.Za = b.prototype
        };
        c.g = function (a) {
            return a === Object(a) && !c.isArray(a)
        };
        c.Y = function (a) {
            if (c.g(a)) {
                for (var b in a) if (G.call(a, b)) return v;
                return o
            }
            return v
        };
        c.e = function (a) {
            return void 0 === a
        };
        c.ka = function (a) {
            return "[object String]" == D.call(a)
        };
        c.Pa = function (a) {
            return "[object Date]" == D.call(a)
        };
        c.Ra = function (a) {
            return "[object Number]" == D.call(a)
        };
        c.fa = function (a) {
            c.a(a, function (b, e) {
                c.Pa(b) ? a[e] = c.Ja(b) : c.g(b) && (a[e] = c.fa(b))
            });
            return a
        };
        c.Ja = function (a) {
            function b(a) {
                return 10 > a ? "0" + a : a
            }
            return a.getUTCFullYear() + "-" + b(a.getUTCMonth() + 1) + "-" + b(a.getUTCDate()) + "T" + b(a.getUTCHours()) + ":" + b(a.getUTCMinutes()) + ":" + b(a.getUTCSeconds())
        };
        c.B = function (a) {
            var b = {};
            c.a(a, function (a, g) {
                c.ka(a) && 0 < a.length && (b[g] = a)
            });
            return b
        };
        c.truncate = function (a, b) {
            var e;
            "string" === typeof a ? e = a.slice(0, b) : c.isArray(a) ? (e = [], c.a(a, function (a) {
                e.push(c.truncate(a, b))
            })) : c.g(a) ? (e = {}, c.a(a, function (a, d) {
                e[d] = c.truncate(a, b)
            })) : e = a;
            return e
        };
        c.q = function () {
            return function (a) {
                function b(a, c) {
                    var j = "",
                        i = 0,
                        h = i = "",
                        h = 0,
                        f = j,
                        m = [],
                        p = c[a];
                    p && "object" === typeof p && "function" === typeof p.toJSON && (p = p.toJSON(a));
                    switch (typeof p) {
                        case "string":
                            return e(p);
                        case "number":
                            return isFinite(p) ? "" + p : "null";
                        case "boolean":
                        case "null":
                            return "" + p;
                        case "object":
                            if (!p) return "null";
                            j += "    ";
                            m = [];
                            if ("[object Array]" === D.apply(p)) {
                                h = p.length;
                                for (i = 0; i < h; i += 1) m[i] = b(i, p) || "null";
                                return h = 0 === m.length ? "[]" : j ? "[\n" + j + m.join(",\n" + j) +
                                    "\n" + f + "]" : "[" + m.join(",") + "]"
                            }
                            for (i in p) G.call(p, i) && (h = b(i, p)) && m.push(e(i) + (j ? ": " : ":") + h);
                            return h = 0 === m.length ? "{}" : j ? "{" + m.join(",") + "" + f + "}" : "{" + m.join(",") + "}"
                    }
                }
                function e(a) {
                    var b = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        e = {
                            "\u0008": "\\b",
                            "\t": "\\t",
                            "\n": "\\n",
                            "\u000c": "\\f",
                            "\r": "\\r",
                            '"': '\\"',
                            "\\": "\\\\"
                        };
                    b.lastIndex = 0;
                    return b.test(a) ? '"' + a.replace(b, function (a) {
                        var b = e[a];
                        return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"' : '"' + a + '"'
                }
                return b("", {
                    "": a
                })
            }
        }();
        c.D = function () {
            function a() {
                switch (h) {
                    case "t":
                        return d("t"), d("r"), d("u"), d("e"), o;
                    case "f":
                        return d("f"), d("a"), d("l"), d("s"), d("e"), v;
                    case "n":
                        return d("n"), d("u"), d("l"), d("l"), q
                }
                j("Unexpected '" + h + "'")
            }
            function b() {
                for (; h && " " >= h;) d()
            }
            function e() {
                var a, b, e = "",
                    c;
                if ('"' === h) for (; d();) {
                    if ('"' === h) return d(), e;
                    if ("\\" === h) if (d(), "u" === h) {
                        for (b = c = 0; 4 > b; b += 1) {
                            a = parseInt(d(), 16);
                            if (!isFinite(a)) break;
                            c = 16 * c + a
                        }
                        e += String.fromCharCode(c)
                    } else if ("string" === typeof f[h]) e += f[h];
                    else break;
                    else e += h
                }
                j("Bad string")
            }
            function c() {
                var a;
                a = "";
                "-" === h && (a = "-", d("-"));
                for (;
                "0" <= h && "9" >= h;) a += h, d();
                if ("." === h) for (a += "."; d() && "0" <= h && "9" >= h;) a += h;
                if ("e" === h || "E" === h) {
                    a += h;
                    d();
                    if ("-" === h || "+" === h) a += h, d();
                    for (;
                    "0" <= h && "9" >= h;) a += h, d()
                }
                a = +a;
                if (isFinite(a)) return a;
                j("Bad number")
            }
            function d(a) {
                a && a !== h && j("Expected '" + a + "' instead of '" + h + "'");
                h = m.charAt(i);
                i += 1;
                return h
            }
            function j(a) {
                throw {
                    name: "SyntaxError",
                    message: a,
                    hb: i,
                    text: m
                };
            }
            var i, h, f = {
                '"': '"',
                "\\": "\\",
                "/": "/",
                b: "\u0008",
                f: "\u000c",
                n: "\n",
                r: "\r",
                t: "\t"
            }, m, p;
            p = function () {
                b();
                switch (h) {
                    case "{":
                        var i;
                        a: {
                            var f, m = {};
                            if ("{" === h) {
                                d("{");
                                b();
                                if ("}" === h) {
                                    d("}");
                                    i = m;
                                    break a
                                }
                                for (; h;) {
                                    f = e();
                                    b();
                                    d(":");
                                    Object.hasOwnProperty.call(m, f) && j('Duplicate key "' + f + '"');
                                    m[f] = p();
                                    b();
                                    if ("}" === h) {
                                        d("}");
                                        i = m;
                                        break a
                                    }
                                    d(",");
                                    b()
                                }
                            }
                            j("Bad object")
                        }
                        return i;
                    case "[":
                        a: {
                            i = [];
                            if ("[" === h) {
                                d("[");
                                b();
                                if ("]" === h) {
                                    d("]");
                                    f = i;
                                    break a
                                }
                                for (; h;) {
                                    i.push(p());
                                    b();
                                    if ("]" === h) {
                                        d("]");
                                        f = i;
                                        break a
                                    }
                                    d(",");
                                    b()
                                }
                            }
                            j("Bad array")
                        }
                        return f;
                    case '"':
                        return e();
                    case "-":
                        return c();
                    default:
                        return "0" <= h && "9" >= h ? c() : a()
                }
            };
            return function (a) {
                m = a;
                i = 0;
                h = " ";
                a = p();
                b();
                h && j("Syntax error");
                return a
            }
        }();
        c.ca = function (a) {
            var b, e, g, d, j = 0,
                i = 0,
                h = "",
                h = [];
            if (!a) return a;
            a = c.fb(a);
            do b = a.charCodeAt(j++), e = a.charCodeAt(j++), g = a.charCodeAt(j++), d = b << 16 | e << 8 | g, b = d >> 18 & 63, e = d >> 12 & 63, g = d >> 6 & 63, d &= 63, h[i++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e) +
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d);
            while (j < a.length);
            h = h.join("");
            switch (a.length % 3) {
                case 1:
                    h = h.slice(0, -2) + "==";
                    break;
                case 2:
                    h = h.slice(0, -1) + "="
            }
            return h
        };
        c.fb = function (a) {
            var a = (a + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n"),
                b = "",
                e, c, d = 0,
                j;
            e = c = 0;
            d = a.length;
            for (j = 0; j < d; j++) {
                var i = a.charCodeAt(j),
                    h = q;
                128 > i ? c++ : h = 127 < i && 2048 > i ? String.fromCharCode(i >> 6 | 192, i & 63 | 128) : String.fromCharCode(i >> 12 | 224, i >> 6 & 63 | 128, i & 63 | 128);
                h !== q && (c > e && (b += a.substring(e, c)), b += h, e = c = j + 1)
            }
            c > e && (b += a.substring(e, a.length));
            return b
        };
        c.wa = function () {
            function a() {
                function a(b, e) {
                    var c, d = 0;
                    for (c = 0; c < e.length; c++) d |= j[c] << 8 * c;
                    return b ^ d
                }
                var b, c, j = [],
                    i = 0;
                for (b = 0; b < n.length; b++) c = n.charCodeAt(b), j.unshift(c & 255), 4 <= j.length && (i = a(i, j), j = []);
                0 < j.length && (i = a(i, j));
                return i.toString(16)
            }
            function b() {
                for (var a = 1 * new Date, b = 0; a == 1 * new Date;) b++;
                return a.toString(16) + b.toString(16)
            }
            return function () {
                var c = (screen.height * screen.width).toString(16);
                return b() + "-" + Math.random().toString(16).replace(".", "") + "-" + a() + "-" + c + "-" + b()
            }
        }();
        c.Oa = function () {
            return /(google web preview|baiduspider|yandexbot)/i.test(n) ? o : v
        };
        c.va = function (a) {
            var b, e, g, d = [];
            "undefined" === typeof b && (b = "&");
            c.a(a, function (a, b) {
                e = encodeURIComponent(a.toString());
                g = encodeURIComponent(b);
                d[d.length] = g + "=" + e
            });
            return d.join(b)
        };
        c.ga = function (a, b) {
            var b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"),
                c = RegExp("[\\?&]" + b + "=([^&#]*)").exec(a);
            return c === q || c && "string" !== typeof c[1] && c[1].length ? "" : decodeURIComponent(c[1]).replace(/\+/g, " ")
        };
        c.cookie = {
            get: function (a) {
                for (var a = a + "=", b = r.cookie.split(";"), c = 0; c < b.length; c++) {
                    for (var g = b[c];
                    " " == g.charAt(0);) g = g.substring(1, g.length);
                    if (0 == g.indexOf(a)) return decodeURIComponent(g.substring(a.length, g.length))
                }
                return q
            },
            parse: function (a) {
                var b;
                try {
                    b = c.D(c.cookie.get(a)) || {}
                } catch (e) {}
                return b
            },
            set: function (a, b, c, g) {
                var e;
                var d = "",
                    j = "";
                g && (e = (d = (d = r.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i)) ? d[0] : "") ? "; domain=." + d : "", d = e);
                c && (j = new Date, j.setTime(j.getTime() + 864E5 * c), j = "; expires=" + j.toGMTString());
                r.cookie = a + "=" + encodeURIComponent(b) + j + "; path=/" + d
            },
            remove: function (a, b) {
                c.cookie.set(a, "", -1, b)
            }
        };
        c.pa = function () {
            function a(a, g, d) {
                return function (j) {
                    if (j = j || b(window.event)) {
                        var i = o,
                            h;
                        c.Qa(d) && (h = d(j));
                        j = g.call(a, j);
                        if (v === h || v === j) i = v;
                        return i
                    }
                }
            }
            function b(a) {
                if (a) a.preventDefault = b.preventDefault, a.stopPropagation = b.stopPropagation;
                return a
            }
            b.preventDefault = function () {
                this.returnValue = v
            };
            b.stopPropagation = function () {
                this.cancelBubble = o
            };
            return function (b, c, d, j) {
                b ? b.addEventListener && !j ? b.addEventListener(c, d, v) : (c = "on" + c, b[c] = a(b, d, b[c])) : s.error("No valid element provided to register_event")
            }
        }();
        c.Ha = function () {
            function a(a, c) {
                return 0 <= (" " + a.className + " ").replace(b, " ").indexOf(" " + c + " ")
            }
            var b = /[\t\r\n]/g;
            return function (b) {
                if (!r.getElementsByTagName) return [];
                for (var b = b.split(" "), g, d = Array(r), j = 0; j < b.length; j++) if (g = b[j].replace(/^\s+/, "").replace(/\s+$/, ""), -1 < g.indexOf("#")) {
                    g = g.split("#");
                    var i = g[0],
                        d = r.getElementById(g[1]);
                    if (!d || i && d.nodeName.toLowerCase() != i) return [];
                    d = Array(d)
                } else if (-1 < g.indexOf(".")) {
                    g = g.split(".");
                    var i = g[0],
                        h = g[1];
                    i || (i = "*");
                    g = [];
                    for (var f = 0, m = 0; m < d.length; m++) {
                        var p;
                        p = "*" == i ? d[m].all ? d[m].all : d[m].getElementsByTagName("*") : d[m].getElementsByTagName(i);
                        for (var k = 0; k < p.length; k++) g[f++] = p[k]
                    }
                    d = [];
                    for (f = i = 0; f < g.length; f++) g[f].className && c.ka(g[f].className) && a(g[f], h) && (d[i++] = g[f])
                } else if (g.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/)) {
                    var i = RegExp.$1,
                        l = RegExp.$2,
                        h = RegExp.$3,
                        n = RegExp.$4;
                    i || (i = "*");
                    g = [];
                    for (m = f = 0; m < d.length; m++) {
                        p = "*" == i ? d[m].all ? d[m].all : d[m].getElementsByTagName("*") : d[m].getElementsByTagName(i);
                        for (k = 0; k < p.length; k++) g[f++] = p[k]
                    }
                    d = [];
                    i = 0;
                    switch (h) {
                        case "=":
                            h = function (a) {
                                return a.getAttribute(l) == n
                            };
                            break;
                        case "~":
                            h = function (a) {
                                return a.getAttribute(l).match(RegExp("\\b" + n + "\\b"))
                            };
                            break;
                        case "|":
                            h = function (a) {
                                return a.getAttribute(l).match(RegExp("^" + n + "-?"))
                            };
                            break;
                        case "^":
                            h = function (a) {
                                return 0 == a.getAttribute(l).indexOf(n)
                            };
                            break;
                        case "$":
                            h = function (a) {
                                return a.getAttribute(l).lastIndexOf(n) == a.getAttribute(l).length - n.length
                            };
                            break;
                        case "*":
                            h = function (a) {
                                return -1 < a.getAttribute(l).indexOf(n)
                            };
                            break;
                        default:
                            h = function (a) {
                                return a.getAttribute(l)
                            }
                    }
                    d = [];
                    for (f = i = 0; f < g.length; f++) h(g[f]) && (d[i++] = g[f])
                } else {
                    i = g;
                    g = [];
                    for (m = f = 0; m < d.length; m++) {
                        p = d[m].getElementsByTagName(i);
                        for (k = 0; k < p.length; k++) g[f++] = p[k]
                    }
                    d = g
                }
                return d
            }
        }();
        c.info = {
            Ca: function () {
                var a = "",
                    b = {};
                c.a("utm_source utm_medium utm_campaign utm_content utm_term".split(" "),

                function (e) {
                    a = c.ga(r.URL, e);
                    a.length && (b[e] = a)
                });
                return b
            },
            Va: function (a) {
                return 0 === a.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === a.search("https?://(.*)bing.com") ? "bing" : 0 === a.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === a.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : q
            },
            Wa: function (a) {
                var b = c.info.Va(a),
                    e = {};
                if (b !== q) e.$search_engine = b, a = c.ga(a, "yahoo" != b ? "q" : "p"), a.length && (e.mp_keyword = a);
                return e
            },
            R: function () {
                var a = M.vendor || "";
                return window.opera ? c.h(n, "Mini") ? "Opera Mini" : "Opera" :
                    /(BlackBerry|PlayBook|BB10)/i.test(n) ? "BlackBerry" : c.h(n, "Chrome") ? "Chrome" : c.h(a, "Apple") ? c.h(n, "Mobile") ? "Mobile Safari" : "Safari" : c.h(n, "Android") ? "Android Mobile" : c.h(n, "Konqueror") ? "Konqueror" : c.h(n, "Firefox") ? "Firefox" : c.h(n, "MSIE") ? "Internet Explorer" : c.h(n, "Gecko") ? "Mozilla" : ""
            },
            Z: function () {
                return /Windows/i.test(n) ? /Phone/.test(n) ? "Windows Mobile" : "Windows" : /(iPhone|iPad|iPod)/.test(n) ? "iOS" : /Android/.test(n) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(n) ? "BlackBerry" : /Mac/i.test(n) ? "Mac OS X" :
                    /Linux/.test(n) ? "Linux" : ""
            },
            Fa: function () {
                return /iPhone/.test(n) ? "iPhone" : /iPad/.test(n) ? "iPad" : /iPod/.test(n) ? "iPod Touch" : /(BlackBerry|PlayBook|BB10)/i.test(n) ? "BlackBerry" : /Windows Phone/i.test(n) ? "Windows Phone" : /Android/.test(n) ? "Android" : ""
            },
            oa: function (a) {
                a = a.split("/");
                return 3 <= a.length ? a[2] : ""
            },
            A: function () {
                return c.B({
                    $os: c.info.Z(),
                    $browser: c.info.R(),
                    $referrer: r.referrer,
                    $referring_domain: c.info.oa(r.referrer),
                    $device: c.info.Fa(),
                    mp_lib: "web"
                })
            },
            Ua: function () {
                return c.B({
                    $os: c.info.Z(),
                    $browser: c.info.R()
                })
            },
            Ta: function (a) {
                return c.B({
                    mp_page: a,
                    mp_referrer: r.referrer,
                    mp_browser: c.info.R(),
                    mp_platform: c.info.Z()
                })
            }
        };
        var s = {
            log: function () {
                if (A && !c.e(u) && u) try {
                    u.log.apply(u, arguments)
                } catch (a) {
                    c.a(arguments, function (a) {
                        u.log(a)
                    })
                }
            },
            error: function () {
                if (A && !c.e(u) && u) {
                    var a = ["Mixpanel error:"].concat(c.p(arguments));
                    try {
                        u.error.apply(u, a)
                    } catch (b) {
                        c.a(a, function (a) {
                            u.error(a)
                        })
                    }
                }
            },
            S: function () {
                if (!c.e(u) && u) {
                    var a = ["Mixpanel error:"].concat(c.p(arguments));
                    try {
                        u.error.apply(u, a)
                    } catch (b) {
                        c.a(a,

                        function (a) {
                            u.error(a)
                        })
                    }
                }
            }
        };
        w.prototype.w = C();
        w.prototype.U = C();
        w.prototype.Q = C();
        w.prototype.X = function (a) {
            this.la = a;
            return this
        };
        w.prototype.l = function (a, b, e, g) {
            var d = this,
                j = c.Ha(a);
            if (0 == j.length) s.error("The DOM query (" + a + ") returned 0 elements");
            else return c.a(j, function (a) {
                c.pa(a, this.na, function (a) {
                    var c = {}, i = d.w(e, this),
                        j = d.la.d("track_links_timeout");
                    d.U(a, this, c);
                    window.setTimeout(d.ra(g, i, c, o), j);
                    d.la.l(b, i, d.ra(g, i, c))
                })
            }, this), o
        };
        w.prototype.ra = function (a, b, c, g) {
            var g = g || v,
                d = this;
            return function () {
                if (!c.Ba) c.Ba = o, a && a(g, b) === v || d.Q(b, c, g)
            }
        };
        w.prototype.w = function (a, b) {
            return "function" === typeof a ? a(b) : c.extend({}, a)
        };
        c.ja(B, w);
        B.prototype.w = function (a, b) {
            var c = B.Za.w.apply(this, arguments);
            if (b.href) c.url = b.href;
            return c
        };
        B.prototype.U = function (a, b, c) {
            c.ma = 2 === a.which || a.metaKey || "_blank" === b.target;
            c.href = b.href;
            c.ma || a.preventDefault()
        };
        B.prototype.Q = function (a, b) {
            b.ma || setTimeout(function () {
                window.location = b.href
            }, 0)
        };
        c.ja(F, w);
        F.prototype.U = function (a, b, c) {
            c.element = b;
            a.preventDefault()
        };
        F.prototype.Q = function (a, b) {
            setTimeout(function () {
                b.element.submit()
            }, 0)
        };
        k.prototype.A = function () {
            var a = {};
            c.a(this.props, function (b, e) {
                c.ha(O, e) || (a[e] = b)
            });
            return a
        };
        k.prototype.load = function () {
            if (!this.disabled) {
                var a = c.cookie.parse(this.name);
                a && (this.props = c.extend({}, a))
            }
        };
        k.prototype.eb = function (a) {
            var b = a.upgrade,
                e;
            if (b) e = "mp_super_properties", "string" === typeof b && (e = b), b = c.cookie.parse(e), c.cookie.remove(e), c.cookie.remove(e, o), b && (this.props = c.extend(this.props, b.all, b.events));
            if (!a.cookie_name &&
                "mixpanel" !== a.name && (e = "mp_" + a.token + "_" + a.name, b = c.cookie.parse(e))) c.cookie.remove(e), c.cookie.remove(e, o), this.j(b)
        };
        k.prototype.save = function () {
            this.disabled || c.cookie.set(this.name, c.q(this.props), this.V, this.T)
        };
        k.prototype.remove = function () {
            c.cookie.remove(this.name, v);
            c.cookie.remove(this.name, o)
        };
        k.prototype.clear = function () {
            this.remove();
            this.props = {}
        };
        k.prototype.j = function (a, b, e) {
            return c.g(a) ? ("undefined" === typeof b && (b = "None"), this.V = "undefined" === typeof e ? this.ea : e, c.a(a, function (a,
            c) {
                if (!this.props[c] || this.props[c] === b) this.props[c] = a
            }, this), this.save(), o) : v
        };
        k.prototype.o = function (a, b) {
            return c.g(a) ? (this.V = "undefined" === typeof b ? this.ea : b, c.extend(this.props, a), this.save(), o) : v
        };
        k.prototype.C = function (a) {
            a in this.props && (delete this.props[a], this.save())
        };
        k.prototype.cb = function () {
            if (!this.da) this.j(c.info.Ca()), this.da = o
        };
        k.prototype.ua = function (a) {
            this.o(c.info.Wa(a))
        };
        k.prototype.$ = function (a) {
            this.j({
                $initial_referrer: a || "$direct",
                $initial_referring_domain: c.info.oa(a) || "$direct"
            }, "")
        };
        k.prototype.La = function () {
            return c.B({
                $initial_referrer: this.props.$initial_referrer,
                $initial_referring_domain: this.props.$initial_referring_domain
            })
        };
        k.prototype.ta = function (a) {
            this.ea = this.V = a.cookie_expiration;
            this.Ya(a.disable_cookie);
            this.Xa(a.cross_subdomain_cookie)
        };
        k.prototype.Ya = function (a) {
            (this.disabled = a) && this.remove()
        };
        k.prototype.Xa = function (a) {
            if (a !== this.T) this.T = a, this.remove(), this.save()
        };
        k.prototype.Ka = function () {
            return this.T
        };
        k.prototype.k = function (a, b) {
            var e = this.K(a),
                g = b[a],
                d = this.J("$set"),
                j = this.J("$add"),
                i = this.J("$append", []);
            "__mps" === e ? (c.extend(d, g), this.N("$add", g)) : "__mpa" === e ? c.a(g, function (a, b) {
                b in d ? d[b] += a : (b in j || (j[b] = 0), j[b] += a)
            }, this) : "__mpap" === e && i.push(g);
            s.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):");
            s.log(b);
            this.save()
        };
        k.prototype.N = function (a, b) {
            var e = this.v(a);
            c.e(e) || (c.a(b, function (a, b) {
                delete e[b]
            }, this), this.save())
        };
        k.prototype.K = function (a) {
            if ("$set" === a) return "__mps";
            if ("$add" === a) return "__mpa";
            if ("$append" === a) return "__mpap";
            s.error("Invalid queue:", a)
        };
        k.prototype.v = function (a) {
            return this.props[this.K(a)]
        };
        k.prototype.J = function (a, b) {
            var e = this.K(a),
                b = c.e(b) ? {} : b;
            return this.props[e] || (this.props[e] = b)
        };
        f.prototype.X = function (a, b, c) {
            if ("undefined" === typeof c) s.error("You must name your new library: init(token, config, name)");
            else if ("mixpanel" === c) s.error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
            else return a = E(a, b, c), t[c] = a, a.M(), a
        };
        f.prototype.L = function (a, b, e) {
            this.__loaded = o;
            this.config = {};
            this.qa(c.extend({}, P, b, {
                name: e,
                token: a,
                callback_fn: ("mixpanel" === e ? e : "mixpanel." + e) + "._jsc"
            }));
            this._jsc = C();
            this.G = [];
            this.H = [];
            this.F = [];
            this.s = {
                disable_all_events: v,
                identify_called: v
            };
            this.cookie = new k(this.config);
            this.j({
                distinct_id: c.wa()
            }, "")
        };
        f.prototype.M = function () {
            this.d("loaded")(this);
            this.d("track_pageview") && this.sa()
        };
        f.prototype.xa = function () {
            c.a(this.G, function (a) {
                this.P.apply(this, a)
            }, this);
            c.a(this.H, function (a) {
                this.i.apply(this,
                a)
            }, this);
            delete this.G;
            delete this.H
        };
        f.prototype.P = function (a, b) {
            if (this.d("img")) return s.error("You can't use DOM tracking functions with img = true."), v;
            if (!J) return this.G.push([a, b]), v;
            var c = (new a).X(this);
            return c.l.apply(c, b)
        };
        f.prototype.ba = function (a, b) {
            if (c.e(a)) return q;
            if (H) return function (c) {
                a(c, b)
            };
            var e = this._jsc,
                g = "" + Math.floor(1E8 * Math.random()),
                d = this.d("callback_fn") + '["' + g + '"]';
            e[g] = function (c) {
                delete e[g];
                a(c, b)
            };
            return d
        };
        f.prototype.i = function (a, b, e) {
            if (K) this.H.push(arguments);
            else {
                var g = this.d("verbose");
                this.d("test") && (b.test = 1);
                g && (b.verbose = 1);
                this.d("img") && (b.img = 1);
                e && !H && (b.callback = e);
                b.ip = this.d("ip") ? 1 : 0;
                b._ = (new Date).getTime().toString();
                a += "?" + c.va(b);
                if ("img" in b) {
                    var d = r.createElement("img");
                    d.src = a;
                    r.body.appendChild(d)
                } else if (H) {
                    var f = new XMLHttpRequest;
                    f.open("GET", a, o);
                    f.withCredentials = o;
                    f.onreadystatechange = function () {
                        if (4 === f.readyState) if (200 === f.status) e && (g ? e(c.D(f.responseText)) : e(Number(f.responseText)));
                        else {
                            var a = "Bad HTTP status: " + f.status +
                                " " + f.statusText;
                            s.error(a);
                            e && (g ? e({
                                status: 0,
                                error: a
                            }) : e(0))
                        }
                    };
                    f.send(q)
                } else {
                    d = r.createElement("script");
                    d.type = "text/javascript";
                    d.async = o;
                    d.defer = o;
                    d.src = a;
                    var i = r.getElementsByTagName("script")[0];
                    i.parentNode.insertBefore(d, i)
                }
            }
        };
        f.prototype.I = function (a) {
            function b(a, b) {
                c.a(a, function (a) {
                    this[a[0]].apply(this, a.slice(1))
                }, b)
            }
            var e, g = [],
                d = [],
                f = [];
            c.a(a, function (a) {
                a && (e = a[0], "function" === typeof a ? a.call(this) : c.isArray(a) && "alias" === e ? g.push(a) : c.isArray(a) && -1 != e.indexOf("track") && "function" === typeof this[e] ? f.push(a) : d.push(a))
            }, this);
            b(g, this);
            b(d, this);
            b(f, this)
        };
        f.prototype.push = function (a) {
            this.I([a])
        };
        f.prototype.disable = function (a) {
            "undefined" === typeof a ? this.s.Ga = o : this.F = this.F.concat(a)
        };
        f.prototype.l = function (a, b, e) {
            if ("undefined" === typeof a) s.error("No event name provided to mixpanel.track");
            else if (c.Oa() || this.s.Ga || c.ha(this.F, a)) "undefined" !== typeof e && e(0);
            else return b = b || {}, b.token = b.jb || this.d("token"), this.cookie.ua(r.referrer), this.d("store_google") && this.cookie.cb(),
            this.d("save_referrer") && this.cookie.$(r.referrer), b = c.extend({}, c.info.A(), this.cookie.A(), b), a = c.truncate({
                event: a,
                properties: b
            }, 255), b = c.q(a), b = c.ca(b), s.log("MIXPANEL REQUEST:"), s.log(a), this.i(this.d("api_host") + "/track/", {
                data: b
            }, this.ba(e, a)), a
        };
        f.prototype.sa = function (a) {
            if ("undefined" === typeof a) a = r.location.href;
            this.l("mp_page_view", c.info.Ta(a))
        };
        f.prototype.bb = function () {
            return this.P.call(this, B, arguments)
        };
        f.prototype.ab = function () {
            return this.P.call(this, F, arguments)
        };
        f.prototype.o = function (a, b) {
            this.cookie.o(a, b)
        };
        f.prototype.j = function (a, b, c) {
            this.cookie.j(a, b, c)
        };
        f.prototype.C = function (a) {
            this.cookie.C(a)
        };
        f.prototype.O = function (a, b) {
            var c = {};
            c[a] = b;
            this.o(c)
        };
        f.prototype.W = function (a, b, c, g) {
            a != this.m() && a != this.z("__alias") && (this.C("__alias"), this.O("distinct_id", a));
            this.s.Ma = o;
            this.people.za(b, c, g)
        };
        f.prototype.m = function () {
            return this.z("distinct_id")
        };
        f.prototype.Aa = function (a, b) {
            if (a === this.z("$people_distinct_id")) return s.S("Attempting to create alias for existing People user - aborting."), -2;
            var e = this;
            c.e(b) && (b = this.m());
            if (a !== b) return this.O("__alias", a), this.l("$create_alias", {
                alias: a,
                distinct_id: b
            }, function () {
                e.W(a)
            });
            s.error("alias matches current distinct_id - skipping api call.");
            this.W(a);
            return -1
        };
        f.prototype.Sa = function (a) {
            this.O("mp_name_tag", a)
        };
        f.prototype.qa = function (a) {
            c.g(a) && (c.extend(this.config, a), this.cookie && this.cookie.ta(this.config), A = A || this.d("debug"))
        };
        f.prototype.d = function (a) {
            return this.config[a]
        };
        f.prototype.z = function (a) {
            return this.cookie.props[a]
        };
        f.prototype.toString = function () {
            var a = this.d("name");
            "mixpanel" !== a && (a = "mixpanel." + a);
            return a
        };
        l.prototype.L = function (a) {
            this.c = a
        };
        l.prototype.set = function (a, b, e) {
            var g = {}, d = {};
            c.g(a) ? (c.a(a, function (a, b) {
                "$distinct_id" == b || "$token" == b || (d[b] = a)
            }), e = b) : d[a] = b;
            this.u("save_referrer") && this.c.cookie.$(r.referrer);
            d = c.extend({}, c.info.Ua(), this.c.cookie.La(), d);
            g.$set = d;
            return this.i(g, e)
        };
        l.prototype.ia = function (a, b, e) {
            var g = {}, d = {};
            c.g(a) ? (c.a(a, function (a, b) {
                "$distinct_id" == b || "$token" == b || (isNaN(parseFloat(a)) ? s.error("Invalid increment value passed to mixpanel.people.increment - must be a number") : d[b] = a)
            }), e = b) : (c.e(b) && (b = 1), d[a] = b);
            g.$add = d;
            return this.i(g, e)
        };
        l.prototype.append = function (a, b, e) {
            var g = {}, d = {};
            c.g(a) ? (c.a(a, function (a, b) {
                "$distinct_id" == b || "$token" == b || (d[b] = a)
            }), e = b) : d[a] = b;
            g.$append = d;
            return this.i(g, e)
        };
        l.prototype.$a = function (a, b, e) {
            if (!c.Ra(a) && (a = parseFloat(a), isNaN(a))) {
                s.error("Invalid value passed to mixpanel.people.track_charge - must be a number");
                return
            }
            return this.append("$transactions",
            c.extend({
                $amount: a
            }, b), e)
        };
        l.prototype.Da = function (a) {
            return this.set("$transactions", [], a)
        };
        l.prototype.Ea = function () {
            if (this.aa()) return this.i({
                $delete: this.c.m()
            });
            s.error("mixpanel.people.delete_user() requires you to call identify() first")
        };
        l.prototype.toString = function () {
            return this.c.toString() + ".people"
        };
        l.prototype.i = function (a, b) {
            a.$token = this.u("token");
            a.$distinct_id = this.c.m();
            var e = c.fa(a),
                g = c.truncate(e, 255),
                e = c.q(e),
                e = c.ca(e);
            if (!this.aa()) return this.ya(a), c.e(b) || (this.u("verbose") ? b({
                status: -1,
                error: q
            }) : b(-1)), g;
            s.log("MIXPANEL PEOPLE REQUEST:");
            s.log(g);
            this.c.i(this.u("api_host") + "/engage/", {
                data: e
            }, this.c.ba(b, g));
            return g
        };
        l.prototype.u = function (a) {
            return this.c.d(a)
        };
        l.prototype.aa = function () {
            return this.c.s.Ma === o
        };
        l.prototype.ya = function (a) {
            "$set" in a ? this.c.cookie.k("$set", a) : "$add" in a ? this.c.cookie.k("$add", a) : "$append" in a ? this.c.cookie.k("$append", a) : s.error("Invalid call to _enqueue():", a)
        };
        l.prototype.za = function (a, b, e) {
            var g = this,
                d = c.extend({}, this.c.cookie.v("$set")),
                f = c.extend({}, this.c.cookie.v("$add")),
                i = this.c.cookie.v("$append");
            !c.e(d) && c.g(d) && !c.Y(d) && (g.c.cookie.N("$set", d), this.set(d, function (b, e) {
                0 == b && g.c.cookie.k("$set", d);
                c.e(a) || a(b, e)
            }));
            !c.e(f) && c.g(f) && !c.Y(f) && (g.c.cookie.N("$add", f), this.ia(f, function (a, d) {
                0 == a && g.c.cookie.k("$add", f);
                c.e(b) || b(a, d)
            }));
            if (!c.e(i) && c.isArray(i) && i.length) for (var h = i.length - 1; 0 <= h; h--) {
                var k = i.pop();
                g.append(k, function (a, b) {
                    0 == a && g.c.cookie.k("$append", k);
                    c.e(e) || e(a, b)
                })
            }
        };
        c.toArray = c.p;
        c.isObject = c.g;
        c.JSONEncode = c.q;
        c.JSONDecode = c.D;
        c.isEmptyObject = c.Y;
        f.prototype.init = f.prototype.X;
        f.prototype.disable = f.prototype.disable;
        f.prototype.track = f.prototype.l;
        f.prototype.track_links = f.prototype.bb;
        f.prototype.track_forms = f.prototype.ab;
        f.prototype.track_pageview = f.prototype.sa;
        f.prototype.register = f.prototype.o;
        f.prototype.register_once = f.prototype.j;
        f.prototype.unregister = f.prototype.C;
        f.prototype.identify = f.prototype.W;
        f.prototype.alias = f.prototype.Aa;
        f.prototype.name_tag = f.prototype.Sa;
        f.prototype.set_config = f.prototype.qa;
        f.prototype.get_config = f.prototype.d;
        f.prototype.get_property = f.prototype.z;
        f.prototype.get_distinct_id = f.prototype.m;
        f.prototype.toString = f.prototype.toString;
        k.prototype.properties = k.prototype.A;
        k.prototype.update_search_keyword = k.prototype.ua;
        k.prototype.update_referrer_info = k.prototype.$;
        k.prototype.get_cross_subdomain = k.prototype.Ka;
        k.prototype.clear = k.prototype.clear;
        l.prototype.set = l.prototype.set;
        l.prototype.increment = l.prototype.ia;
        l.prototype.append = l.prototype.append;
        l.prototype.track_charge = l.prototype.$a;
        l.prototype.clear_charges = l.prototype.Da;
        l.prototype.delete_user = l.prototype.Ea;
        l.prototype.toString = l.prototype.toString;
        if (c.e(t)) s.S("'mixpanel' object not initialized. Ensure you are using the latest version of the Mixpanel JS Library along with the snippet we provide.");
        else if (t.__loaded || t.config && t.cookie) s.error("Mixpanel library has already been downloaded at least once.");
        else if (1.1 > z) s.S("Version mismatch; please ensure you're using the latest version of the Mixpanel code snippet.");
        else {
            var y = {};
            c.a(t._i, function (a) {
                var b;
                a && c.isArray(a) && (b = a[a.length - 1], a = E.apply(this, a), y[b] = a)
            });
            var Q = function () {
                c.a(y, function (a, b) {
                    "mixpanel" !== b && (t[b] = a)
                });
                t._ = c
            };
            t.init = function (a, b, c) {
                c ? t[c] || (t[c] = y[c] = E(a, b, c), t[c].M()) : (c = t, y.mixpanel ? c = y.mixpanel : a && (c = E(a, b, "mixpanel")), window.mixpanel = t = c, Q())
            };
            t.init();
            c.a(y, function (a) {
                a.M()
            });
            if (r.addEventListener) "complete" == r.readyState ? x() : r.addEventListener("DOMContentLoaded", x, v);
            else if (r.attachEvent) {
                r.attachEvent("onreadystatechange",
                x);
                z = v;
                try {
                    z = window.frameElement == q
                } catch (R) {}
                if (r.documentElement.doScroll && z) {
                    var N = function () {
                        try {
                            r.documentElement.doScroll("left")
                        } catch (a) {
                            setTimeout(N, 1);
                            return
                        }
                        x()
                    };
                    N()
                }
            }
            c.pa(window, "load", x, o)
        }
    })(window.mixpanel);
})();