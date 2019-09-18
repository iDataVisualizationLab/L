idl = function (e, t) {
    // function a() {
    //     if (window.ga) {
    //         var e = t.history.getFragment();
    //         /^\//.test(e) || (e = "/" + e), /\/$/.test(e) || (e += "/"), ga("send", {hitType: "pageview", page: e})
    //     }
    // }
    //
    // function n(e) {
    //     console && console.error("IDL", e)
    // }

    // function s(e) {
    //     var t = this.getAttribute("href"), a = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    //     null == t || a || r(t) || ($.navigate(t, {trigger: !0}), e.preventDefault && e.preventDefault())
    // }

    // function r(e) {
    //     return 0 === e.indexOf("http") || e.indexOf(".") > 0
    // }

    // function i(t) {
    //     e.select(t || "body").selectAll("a:not(.at)").classed("at", !0).on("click", function () {
    //         s.call(this, e.event)
    //     })
    // }

    function o() {
        e.json(ee, function (e, t) {
            B.data = X = h(t), c()
        }), O = e.select("body"), R = e.select("#main"), G = e.select("#content"), v("#logo a")
    }

    // function c() {
    //     var e = t.Router.extend({
    //         routes: {
    //             "": se,
    //             "about(/)": "about",
    //             "papers(/)": "papers",
    //             "papers/:param(/)": "papers",
    //             "people(/)": "people",
    //             "positions(/)": "positions",
    //             "jobs(/)": "positions",
    //             "bibtex/:param(/)": "bibtex"
    //         }
    //     });
    //     $ = (new e).on("route", l), t.history.start({pushState: te, root: Y})
    // }

    // function l(e, t) {
    //     function n() {
    //         try {
    //             u(e), a(), O.node().scrollTop = 0, de[e](G, X, t), i()
    //         } catch (e) {
    //             G.html("ERROR!"), console.log(e.stack)
    //         }
    //     }
    //
    //     return K ? (K = !1, void n()) : void R.transition().duration(ne).style("opacity", 1e-6).each("end", function () {
    //         n(), R.transition().duration(ne).style("opacity", 1)
    //     })
    // }
    //
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

    // function u(t) {
    //     e.select("#title").text(d(t)), document.title = p(t)
    // }


    // Seems like collision function is here
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

    // function g(e, t) {
    //     return e = e.pub_date, t = t.pub_date, e < t ? 1 : e > t ? -1 : 0
    // }

    // function y(e, t) {
    //     return e < t ? -1 : e > t ? 1 : 0
    // }

    // function b(e, t) {
    //     return y(e.status, t.status) || y(e.lastname, t.lastname)
    // }

    // function w(e) {
    //     if (!e.links) return null;
    //     var t, a, n, s = e.links.length;
    //     for (t = 0; t < s; ++t) if (n = e.links[t].link || "", a = n.indexOf("vimeo.com/"), a > 0) return n.slice(a + 10);
    //     return null
    // }

    // function x(e, t) {
    //     e.appendChild(document.createTextNode(t))
    // }

    // function k(t, a) {
    //     a = a.filter(function (e) {
    //         switch (e.status) {
    //             case"0F":
    //                 e.type = "Members";
    //                 break;
    //             case"2S":
    //                 e.type = "Members";
    //                 break;
    //             case"4A":
    //                 e.type = "Alumni";
    //                 break;
    //             default:
    //                 return !1
    //         }
    //         return !0
    //     });
    //     var n = e.nest().key(function (e) {
    //         return e.type
    //     }).sortKeys(y).sortValues(b).entries(a), s = n.pop().values;
    //     s.splice(6, 0, {image: Z + "images/logo/idl-290.png"}), S(t, s);
    //     var r = t.selectAll("div.people").data(n).enter().append("div").attr("class", "people");
    //     r.append("div").attr("class", "heading").text(function (e) {
    //         return e.key
    //     }), r.append("div").attr("class", "list").selectAll("div.person").data(function (e) {
    //         return e.values
    //     }).enter().append("div").each(function (t) {
    //         var a = e.select(this);
    //         t.url && (a = a.append("a").attr("href", t.url)), a.text(t.name)
    //     })
    // }

    // function A(t) {
    //     t.name && e.select(document.body).select(".members .group").html("").each(function () {
    //         j.call(this, t)
    //     })
    // }

    // function D(t) {
    //     t && !t.name || e.select(document.body).select(".members .group").html("").append("img").attr("src", function (e) {
    //         return e.image
    //     })
    // }

    // function j(t) {
    //     var a = e.select(this);
    //     a.append("div").attr("class", "name").text(t.name), a.append("div").attr("class", "affiliation").text(t.position + ", " + t.org), a.append("div").attr("class", "interests").text(t.interests)
    // }

    // function S(e, t) {
    //     e.append("div").attr("class", "members").selectAll("div").data(t).enter().append("div").attr("class", function (e) {
    //         return e.name ? "person" : "group"
    //     }).on("mouseover", A).on("mouseout", D), D();
    //     var a = e.selectAll("div.person");
    //     a.append("div").attr("class", "nickname").text(function (e) {
    //         return e.nickname
    //     }), a.append("a").attr("href", function (e) {
    //         return e.url
    //     }).append("img").attr("src", function (e) {
    //         return Z + e.image
    //     })
    // }

    // function _(t, a) {
    //     var n = e.nest().key(function (e) {
    //             return e.year
    //         }).sortKeys(function (e, t) {
    //             return t - e
    //         }).sortValues(g).entries(a),
    //         s = t.selectAll("div.papers").data(n).enter().append("div").attr("class", "papers");
    //     s.append("div").attr("class", "heading").text(function (e) {
    //         return e.key
    //     }), s.selectAll("div.paper").data(function (e) {
    //         return e.values
    //     }).enter().append("div").each(M)
    // }

    // function C(e, t) {
    //     e.append("div").attr("class", "pub").datum(t).each(z)
    // }

    // function T() {
    //     e.select(this).append("a").attr("href", function (e) {
    //         return "/papers/" + e.web_name
    //     }).append("img").attr("src", function (e) {
    //         return Z + e.thumbnail
    //     })
    // }

    // function z(t) {
    //     var a = e.select(this).each(P).each(W);
    //     if (t.figure) {
    //         var n = a.append("div").attr("class", "figure");
    //         n.append("img").attr("src", Z + t.figure), n.append("div").attr("class", "caption").text(t.caption)
    //     }
    //     if (t.abstract) {
    //         var s = a.append("div").attr("class", "abstract");
    //         s.append("div").attr("class", "heading").text("Abstract"), s.append("div").attr("class", "text").html(t.abstract)
    //     }
    //     var r = a.append("div").attr("class", "materials");
    //     r.append("div").attr("class", "heading").text("Materials"), r.each(function (e, t) {
    //         I.call(this, e, t, !0)
    //     });
    //     var i = a.append("div").attr("class", "citation");
    //     i.append("div").attr("class", "heading").text("Citation"), i.append("div").each(M);
    //     var o = w(t);
    //     if (o) {
    //         var c = a.append("div").attr("class", "video");
    //         c.append("div").attr("class", "heading").text("Video"), c.append("iframe").attr("class", "player").attr("src", "//player.vimeo.com/video/" + o).attr("width", 630).attr("height", 354).attr("frameborder", 0).attr("webkitallowfullscreen", 1).attr("mozallowfullscreen", 1).attr("allowfullscreen", 1)
    //     }
    // }
    //
    // function P(t) {
    //     e.select(this).append("div").attr("class", "title").append("a").attr("href", "/papers/" + t.web_name).text(t.title)
    // }

    // function W(t) {
    //     var a = e.select(this), n = a.append("div").attr("class", "authors"), s = n.node();
    //     t.authors.forEach(function (e, t) {
    //         t > 0 && x(s, ", ");
    //         var a = B.data.people[e], r = n.append("span").attr("class", "author");
    //         a.url && (r = r.append("a").attr("href", a.url)), r.text(a.name)
    //     })
    // }

    // function E(t) {
    //     var a, n = e.select(this), s = n.append("div").attr("class", "venue"), r = s.node();
    //     s.append("span").attr("class", "journal").text(B.data.venues[t.venue_id].name), null != t.volume && (x(r, ", "), a = t.volume + (null != t.issue ? "(" + t.issue + ")" : ""), s.append("span").attr("class", "volume").text(a)), null != t.start_page && (x(r, ", "), a = t.start_page + (null != t.end_page ? "-" + t.end_page : ""), s.append("span").attr("class", "pages").text("pp. " + a)), x(r, ", "), s.append("span").attr("class", "year").text(t.year)
    // }

    // function I(t, a, n) {
    //     var s = 0, r = " | ", i = e.select(this).append("div").attr("class", "links");
    //     t.pdf && (i.append("a").attr("href", Y + t.pdf).attr("class", "link").text("PDF"), s += 1), (t.links || []).forEach(function (e) {
    //         s && x(i.node(), r), i.append("a").attr("href", e.link || Y + e.file).attr("class", "link").text(e.name), s += 1
    //     }), n && (s && x(i.node(), r), i.append("a").datum(t).attr("class", "link").attr("href", "/bibtex/" + t.web_name).text("BibTeX"), s += 1), t.note && (s && x(i.node(), r), i.append("span").attr("class", "note").text(t.note))
    // }

    // function M(t) {
    //     var a = e.select(this).attr("class", "paper");
    //     a.append("div").datum(t).attr("class", "thumbnail").each(T), a.append("div").datum(t).attr("class", "entry").each(P).each(W).each(E).each(I)
    // }

    // function q(e, t) {
    //     var a = e.selectAll("div.recent").data(t).enter().append("div").attr("class", "recent");
    //     a.append("div").attr("class", "event").text(function (e) {
    //         return e.desc
    //     }), a.selectAll("div.recent").data(function (e) {
    //         var t = e.venues.reduce(function (e, t) {
    //             return e[t] = 1, e
    //         }, {});
    //         return B.data.papers.filter(function (a) {
    //             return t[a.venue_id] && a.year == e.year
    //         }).sort(g)
    //     }).enter().append("div").each(M)
    // }

    // function N(e, t) {
    //     var a = [0, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    //         n = e.selectAll("div.update").data(t).enter().append("div").attr("class", "update");
    //     n.append("div").attr("class", "date").text(function (e) {
    //         var t = e.pub_date.split("-");
    //         return t[2] + " " + a[+t[1]] + " " + t[0]
    //     }), n.append("div").attr("class", "news").html(function (e) {
    //         return e.text
    //     })
    // }

    // function H(t, a) {
    //     var n = e.nest().key(function (e) {
    //         return e.level
    //     }).sortValues(function (e, t) {
    //         return e = e.name, t = t.name, e < t ? -1 : e > t ? 1 : 0
    //     }).entries(a), s = t.selectAll("div.course").data(n).enter().append("div").attr("class", "course");
    //     s.append("div").attr("class", "level").text(function (e) {
    //         return e.key
    //     }), s.selectAll("div.class").data(function (e) {
    //         return e.values
    //     }).enter().append("div").attr("class", "class").append("a").attr("href", function (e) {
    //         return e.url
    //     }).text(function (e) {
    //         return e.name
    //     })
    // }

    // function L(e, t) {
    //     var a = e.selectAll("a").data(t).enter().append("a").attr("class", function (e, t) {
    //         return "spot" + t + (t === le ? " active" : "")
    //     }).attr("href", function (e) {
    //         return Y + "papers/" + e.paper
    //     });
    //     a.append("img").attr("src", function (e) {
    //         return Z + e.image
    //     }), a.append("div").html(function (e) {
    //         return e.title
    //     }), "undefined" != typeof window && pe === -1 && (pe = setInterval(U, ce))
    // }

    // function U() {
    //     var t = e.select(document.body).select(".spotlight");
    //     return t.empty() ? (clearInterval(pe), void (pe = -1)) : (t.select(".spot" + le).style("opacity", 1).transition().duration(oe).style("opacity", 0).each("end", function () {
    //         e.select(this).classed("active", !1)
    //     }), le = (le + 1) % t.selectAll("a").size(), void t.select(".spot" + le).classed("active", !0).style("opacity", 0).transition().delay(oe / 2).duration(oe).style("opacity", 1))
    // }
    //
    // function V(e) {
    //     var t = B.data.venues[e.venue_id], a = "J" == t.type ? "journal" : "booktitle",
    //         n = (e.editors || "").replace("&", "AND"), s = (e.start_page || "") + (e.end_page ? "--" + e.end_page : ""),
    //         r = e.authors.map(function (e) {
    //             return B.data.people[e].name
    //         }).join(" AND "), i = "J" == t.type ? "article" : "B" == t.type ? "incollection" : "inproceedings";
    //     return "@" + i + "{" + e.year + "-" + e.web_name + ",\n" + F("title", J(e.title)) + F("author", J(r)) + F(a, J(t.name)) + F("year", e.year) + F("volume", e.volume) + F("number", e.issue) + F("editor", n) + F("pages", s) + F("publisher", e.publisher) + F("location", e.location) + F("url", Q + "papers/" + e.web_name) + "}"
    // }

    // function F(e, t) {
    //     return t ? " " + e + " = {" + t + "},\n" : ""
    // }

    // function J(e) {
    //     return e ? e.replace("&", "\\&").replace("%", "\\%").replace(/\u00E9/, "\\'{e}").replace(/\u00C7/, "\\c{C}").replace(/\u011F/, "\\u{g}") : ""
    // }

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
    // de.home = function (e, t) {
    //     e.html(ue), L(e.select(".spotlight"), t.spotlight), N(e.select(".updates"), t.update), q(e.select(".recents"), t.recent), H(e.select(".courses"), t.course)
    // };
    // var he = '<div class="about"><div class="quote">  Nothing &mdash; not the careful logic of mathematics, not statistical models   and theories, not the awesome arithmetic power of modern computers &mdash;   nothing can substitute here for the flexibility of the informed human   mind... Accordingly, both [analysis] approaches and techniques need to   be structured so as to facilitate human involvement and intervention.  &nbsp; &nbsp; &ndash; John W. Tukey &amp; Martin B. Wilk,   Data Analysis &amp; Statistics, 1966</div><div class="para"> The mission of the Interactive Data Lab is to enhance people\'s ability to <strong>understand and communicate data</strong> through the design of new <strong>interactive systems</strong> for data visualization and analysis. We study the perceptual, cognitive and social factors affecting data analysis  in order to improve the efficiency and scale at which expert analysts work, and to lower barriers for non-experts.</div><div class="para"> Motivating questions include: How might we enable users to transform and integrate data with minimal programming? How can we support expressive and effective visualization designs? Can we build systems to query and visualize massive data sets at interactive rates? How might we enable domain experts to guide machine learning methods to produce better models?</div><div class="para"> Advances in computing and statistics provide new opportunities for data-driven discovery. However, breakthroughs in science and industry ultimately lie with the ability of empowered investigators to pursue questions, uncover domain-specific patterns, identify errors, and assess model outputs. Though voiced nearly 50 years ago, the sentiments of Tukey &amp; Wilk  ring true today: <em>to facilitate effective human involvement at all stages  of data analysis</em> remains a grand challenge. </div><div class="right"><img src="/static/images/about/migration.png"/></div><div class="lead">background</div><div class="para"> The UW Interactive Data Lab began its life as the <a class="b" href="http://vis.stanford.edu">Stanford Visualization Group</a>, founded in the late 1990s by <a href="http://graphics.stanford.edu/~hanrahan/">Prof. Pat Hanrahan</a>. Early Stanford projects included the <a class="b" href="http://www.graphics.stanford.edu/projects/polaris/">Polaris</a> system, now commercialized as <a class="b" href="http://www.tableausoftware.com/">Tableau Software</a>.</div><div class="para"> In 2009, <a href="http://jheer.org">Prof. Jeffrey Heer</a> joined the Stanford faculty and assumed leadership of the group. Notable projects include popular visualization systems such as <a class="b" href="/papers/d3">D3.js</a> and <a class="b" href="/papers/protovis">Protovis</a> (led by Ph.D. student <a href="http://bost.ocks.org/mike/">Mike Bostock</a>), new <a class="b" href="/papers/termite/">text</a> <a class="b" href="/papers/topic-model-diagnostics/">visualization</a> and <a class="b" href="/papers/ptm/">language</a> <a class="b" href="/papers/interactive-translation/">translation</a> techniques (with the <a href="http://nlp.stanford.edu/">Stanford NLP Group</a>), and interactive data transformation tools such as <a class="b" href="http://vis.stanford.edu/wrangler">Data Wrangler</a> (led by Ph.D. student <a href="http://skandel.us/">Sean Kandel</a>,  with a cast of characters including <a href="http://db.cs.berkeley.edu/jmh/">Prof. Joe Hellerstein</a> at UC Berkeley). Data Wrangler and related work are now being commercialized by our start-up company <a class="b" href="http://trifacta.com">Trifacta</a>.</div><div class="para"> In 2013, Prof. Heer and team moved to the <a class="b" href="http://uw.edu">University of Washington</a> to become the UW Interactive Data Lab. The new name is meant to better reflect our focus on supporting the full life-cycle of data science work. From 2015-2018, Prof. Jessica Hullman helped direct the group.</div><div class="para"> Our ongoing projects include new <a class="b" href="/papers/vega-lite/">languages</a>, <a class="b" href="/papers/graphscape/">theoretical models</a>, <a class="b" href="/papers/voyager2/">exploratory analysis tools</a>, and <a class="b" href="/papers/lyra/">design tools</a> for interactive visualization, techniques for  <a class="b" href="/papers/uncertainty-palettes/">representing</a> <a class="b" href="/papers/hops-trends/">uncertainty</a>, and <a class="b" href="/papers/quantitative-color/">perceptual</a> <a class="b" href="/papers/latency/">experiments</a> to assess how well visualizations work.</div>';
    // de.about = function (e) {
    //     e.html(he)
    // }, de.people = function (e, t) {
    //     var a = e.html("").append("div").attr("class", "article");
    //     k(a, t.people)
    // }, de.papers = function (e, t, a) {
    //     var s = e.html("").append("div").attr("class", "article");
    //     if (0 === a.length) _(s, t.papers); else {
    //         var r = t.papers.lookup[a[0]];
    //         null == r ? n("Can't find paper: " + a[0]) : C(s, r)
    //     }
    // };
    // var fe = '<div class="about"><div class="lead">Want to transform how the world works with data?</div><div class="para"> Come work with the lab responsible for <a class="b" href="https://vega.github.io/vega">Vega</a> and <a class="b" href="https://vega.github.io/vega-lite">Vega-Lite</a>, <a class="b" href="http://idl.cs.washington.edu/projects/lyra">Lyra</a>, <a class="b" href="http://vis.stanford.edu/wrangler">Data Wrangler</a>, and <a class="b" href="http://trifacta.com">Trifacta</a>. We\'re looking for talented researchers passionate about data visualization and interactive data analysis tools. For more details about our current projects, please <a class="b" href="http://idl.cs.washington.edu/papers">view our recent papers</a> or <a class="b" href="https://twitter.com/uwdata">follow us on Twitter</a>.</div><div class="lead">post-doc positions</div><div class="para"> We currently have filled all available post-doc positions. Please check back next academic year for possible openings. Candidates with an interest in visualization and a strong tie to the natural or social sciences should also consider applying for a <a class="b" href="http://escience.washington.edu/what-we-do/data-science-research-positions-university-washington">Data Science Post-Doctoral Fellowship</a>.</div><div class="lead">phd positions</div><div class="para"> Want to pursue a PhD, working on visualization &amp; data science projects? The Interactive Data Lab is part of the <a class="b" href="http://cs.washington.edu">UW Computer Science &amp; Engineering (CSE)</a> department. Interested applicants should apply to the <a class="b" href="https://www.cs.washington.edu/prospective_students/grad">CSE PhD program</a>. We receive many requests to discuss admissions, unfortunately more than we can possibly service. If you are interested in joining the group, please apply directly to CSE, and note your interest in IDL in your application materials.</div><div class="para"> The CSE PhD program is highly competitive. Successful applicants typically have strong foundations in computer science, compelling letters of recommendation from mentors deeply familiar with their work, and demonstrated research potential &mdash; often in the form of prior research projects and publications, though impactful software or design projects are also of interest. Applications are reviewed by a committee of faculty members, and decisions are not made by any single person.</div><div class="lead">other opportunities</div><div class="para"> If Computer Science &amp; Engineering is not the right fit for you, there are other exciting opportunities across campus. For example, both the <a class="b" href="http://ischool.washington.edu">UW School of Information</a> and the <a class="b" href="http://hcde.washington.edu">Human-Centered Design &amp; Engineering</a> department have faculty members conducting data science and visualization research.</div>';
    return de.positions = function (e) {
        e.html(fe)
    }, de.bibtex = function (e, t, a) {
        e.html("");
        var s = t.papers.lookup[a[0]];
        null == s && n("Can't find paper: " + a[0]), e.append("div").attr("class", "pub").append("a").attr("class", "title").attr("href", "papers/" + a[0]).text(s.title), e.append("pre").attr("class", "bibtex").text(V(s))
    }, B.init = o, B.router = $, B.template = de, B.prepare = h, B.docTitle = p, B.pageTitle = d, B
}
(d3, Backbone);
