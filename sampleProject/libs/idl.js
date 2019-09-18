idl = function (e, t) {

    function o() {
        e.json(ee, function (e, t) {
            B.data = X = h(t), c()
        }), O = e.select("body"), R = e.select("#main"), G = e.select("#content"), v("#logo a")
    }

    function p(e) {
        return e === se ? ie : ie + " | " + e[0].toUpperCase() + e.slice(1)
    }

    function d(e) {
        return e === se ? re : e[0].toUpperCase() + e.slice(1)
    }

    function h(e) {
        var t = {};
        return e.papers.forEach(function (e) {
            e && (t[e.web_name] = e)
        }), e.papers.lookup = t, e
    }

    function f() {
        return !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
    }

    function v(t) {
        function a(e) {
            return {x: e.x, y: e.y, fixed: !0, radius: 0}
        }

        function n() {
            var t = e.mouse(this);
            y[0].px = t[0] - h,
                y[0].py = t[1] - v,
                A.resume()
        }

        function s() {
            y[0].px = y[0].py = 1e4, A.resume()
        }

        if (f()) {
            var r = [[-7, 4, 0], [-7, 0, 0], [-7, -2, 0], [-7, -4, 0], [0, 0, 1], [-2, 0, 1], [-4, 0, 1], [0, 2, 1], [0, 4, 1], [0, -2, 1], [0, -4, 1], [-4, -2, 1], [-4, -4, 1], [-2, -4, 1], [3, 4, 2], [3, 2, 2], [3, 0, 2], [3, -2, 2], [3, -4, 2], [5, -4, 2]],
                i = ["i", "d", "l"], o = 25, c = -200, l = 7, p = 1, d = 7 * l + 2 * o, u = 5 * l + 2 * o,
                h = Math.round(o + 3.5 * l), v = Math.round(o + 2 * l), g = r.length, y = r.slice();
            e.select(t).select("img").style("opacity", .1);
            var b = e.select(t).append("svg").attr("width", d).attr("height", u),
                w = b.append("g").attr("transform", "translate(" + h + "," + v + ")"),
                x = w.selectAll("rect").data(y).enter().append("rect").attr("class", function (e) {
                    return "logo-" + i[e[2]]
                }).attr("x", function (e) {
                    return e.x = Math.round(e[0] / 2 * l)
                }).attr("y", function (e) {
                    return e.y = Math.round(e[1] / 2 * -l)
                }).attr("width", l - p).attr("height", l - p);
            y.push.apply(y, y.map(a)), y.unshift(a({x: 1e4, y: 1e4}));
            var k = e.range(g).map(function (e) {
                return {source: e + 1, target: e + g + 1}
            }), A = e.layout.force().gravity(0).charge(function (e, t) {
                return t ? 0 : c
            }).linkDistance(.1).nodes(y).links(k).start().on("tick", function () {
                for (var t = 0, a = e.geom.quadtree(y); t < g; ++t) a.visit(m(y[t + 1]));
                x.attr("x", function (e) {
                    return Math.round(e.x)
                }).attr("y", function (e) {
                    return Math.round(e.y)
                })
            });
            b.on("mousemove", n).on("touchmove", n).on("mouseout", s).on("touchend", s)
        }
    }
    function m(e) {
        var t = e.radius + 16, a = e.x - t, n = e.x + t, s = e.y - t, r = e.y + t;
        return function (t, i, o, c, l) {
            if (t.point && t.point !== e) {
                var p = e.x - t.point.x, d = e.y - t.point.y, u = Math.sqrt(p * p + d * d),
                    h = e.radius + t.point.radius;
                u < h && (u = (u - h) / u * .5, e.x -= p *= u, e.y -= d *= u, t.point.x += p, t.point.y += d)
            }
            return i > n || c < a || o > r || l < s
        }
    }

    var B = {}, K = !0, O = null, R = null, G = null, X = [], $ = {
            navigate: function () {
            }
        },
        Q = "http://idl.cs.washington.edu/", Y = "/", Z = Y + "static/", ee = Z + "lib/data.json", te = !0, ae = !0,
        ne = 250, se = "home", re = "Visualization + Analysis", ie = "UW Interactive Data Lab", oe = 1e3, ce = 5e3;
    ae && "undefined" != typeof window && (!function (e, t, a, n, s, r, i) {
        e.GoogleAnalyticsObject = s, e[s] = e[s] || function () {
            (e[s].q = e[s].q || []).push(arguments)
        }, e[s].l = 1 * new Date, r = t.createElement(a), i = t.getElementsByTagName(a)[0], r.async = 1, r.src = n, i.parentNode.insertBefore(r, i)
    }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-44428446-1", "washington.edu"));
    var le = 0, pe = -1, de = {},
        ue = '<div class="mission"> <a href="/about">  <span class="lead">our mission</span> is to enhance people\'s ability  to <strong>understand and communicate data</strong> through the  design of new <strong>interactive systems</strong> for data  visualization and analysis. </a></div><div class="spotlight"></div><div class="current">  <div class="sidepanel">    <div class="updates"><div class="lead">updates</div></div>    <div class="courses"><div class="lead">courses</div></div>  </div>  <div class="recents"><div class="lead">recent publications<a class="allpubs" href="/papers">(View All Papers)</a></div></div></div>';

    return de.positions = function (e) {
        e.html(fe)
    }, de.bibtex = function (e, t, a) {
        e.html("");
        var s = t.papers.lookup[a[0]];
        null == s && n("Can't find paper: " + a[0]), e.append("div").attr("class", "pub").append("a").attr("class", "title").attr("href", "papers/" + a[0]).text(s.title), e.append("pre").attr("class", "bibtex").text(V(s))
    }, B.init = o, B.router = $, B.template = de, B.prepare = h, B.docTitle = p, B.pageTitle = d, B
}
(d3, Backbone);