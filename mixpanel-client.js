(function (c, a) {
    window.mixpanel = a;
    var b, d, h, e;

    var loadScript = function() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = ("https:" === document.location.protocol ? "https:" : "http:") +
            '//cdn.mxpnl.com/libs/mixpanel-2.2.min.js';
        var firstScript = document.getElementsByTagName("script")[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    };

    a._i = [];
    a.init = function (b, c, f) {

        loadScript();

        function d(a, b) {
            var c = b.split(".");
            2 == c.length && (a = a[c[0]], b = c[1]);
            a[b] = function () {
                a.push([b].concat(
                Array.prototype.slice.call(arguments, 0)))
            }
        }
        var g = a;
        "undefined" !== typeof f ? g = a[f] = [] : f = "mixpanel";
        g.people = g.people || [];
        h = ['disable', 'track', 'track_pageview', 'track_links',
            'track_forms', 'register', 'register_once', 'unregister', 'identify', 'alias', 'name_tag',
            'set_config', 'people.set', 'people.increment', 'people.track_charge', 'people.append'];
        for (e = 0; e < h.length; e++) d(g, h[e]);
        a._i.push([b, c, f])
    };
    a.__SV = 1.2;
})(document, window.mixpanel || []);
