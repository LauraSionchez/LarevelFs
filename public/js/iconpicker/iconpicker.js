(()=>{
    "use strict";
    var i = {
        243: (i,l,e)=>{
            e.d(l, {
                Z: ()=>a
            });
            var b = e(645)
              , r = e.n(b)()((function(i) {
                return i[1]
            }
            ));
            r.push([i.id, ".iconpicker-dropdown{visibility:hidden;opacity:0}.iconpicker-dropdown.show{visibility:visible;opacity:1}.iconpicker-dropdown ul{position:absolute;width:250px;height:200px;background:#fff;overflow:scroll;box-shadow:0 0 28px rgba(0,0,0,0.1);padding:1rem;z-index:999;display:flex;flex-wrap:wrap;justify-content:space-between;left:0;list-style:none}.iconpicker-dropdown ul li{width:40px;height:40px;line-height:40px;text-align:center;border:1px solid rgba(178,178,178,0.45098);cursor:pointer;margin-bottom:.25rem}.iconpicker-dropdown ul li.selected{background-color:#007eff;color:#fff}.iconpicker-dropdown ul li.hidden{display:none}\n", ""]);
            const a = r
        }
        ,
        645: i=>{
            i.exports = function(i) {
                var l = [];
                return l.toString = function() {
                    return this.map((function(l) {
                        var e = i(l);
                        return l[2] ? "@media ".concat(l[2], " {").concat(e, "}") : e
                    }
                    )).join("")
                }
                ,
                l.i = function(i, e, b) {
                    "string" == typeof i && (i = [[null, i, ""]]);
                    var r = {};
                    if (b)
                        for (var a = 0; a < this.length; a++) {
                            var t = this[a][0];
                            null != t && (r[t] = !0)
                        }
                    for (var o = 0; o < i.length; o++) {
                        var n = [].concat(i[o]);
                        b && r[n[0]] || (e && (n[2] ? n[2] = "".concat(e, " and ").concat(n[2]) : n[2] = e),
                        l.push(n))
                    }
                }
                ,
                l
            }
        }
        ,
        379: (i,l,e)=>{
            var b, r = function() {
                var i = {};
                return function(l) {
                    if (void 0 === i[l]) {
                        var e = document.querySelector(l);
                        if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement)
                            try {
                                e = e.contentDocument.head
                            } catch (i) {
                                e = null
                            }
                        i[l] = e
                    }
                    return i[l]
                }
            }(), a = [];
            function t(i) {
                for (var l = -1, e = 0; e < a.length; e++)
                    if (a[e].identifier === i) {
                        l = e;
                        break
                    }
                return l
            }
            function o(i, l) {
                for (var e = {}, b = [], r = 0; r < i.length; r++) {
                    var o = i[r]
                      , n = l.base ? o[0] + l.base : o[0]
                      , c = e[n] || 0
                      , s = "".concat(n, " ").concat(c);
                    e[n] = c + 1;
                    var f = t(s)
                      , d = {
                        css: o[1],
                        media: o[2],
                        sourceMap: o[3]
                    };
                    -1 !== f ? (a[f].references++,
                    a[f].updater(d)) : a.push({
                        identifier: s,
                        updater: h(d, l),
                        references: 1
                    }),
                    b.push(s)
                }
                return b
            }
            function n(i) {
                var l = document.createElement("style")
                  , b = i.attributes || {};
                if (void 0 === b.nonce) {
                    var a = e.nc;
                    a && (b.nonce = a)
                }
                if (Object.keys(b).forEach((function(i) {
                    l.setAttribute(i, b[i])
                }
                )),
                "function" == typeof i.insert)
                    i.insert(l);
                else {
                    var t = r(i.insert || "head");
                    if (!t)
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    t.appendChild(l)
                }
                return l
            }
            var c, s = (c = [],
            function(i, l) {
                return c[i] = l,
                c.filter(Boolean).join("\n")
            }
            );
            function f(i, l, e, b) {
                var r = e ? "" : b.media ? "@media ".concat(b.media, " {").concat(b.css, "}") : b.css;
                if (i.styleSheet)
                    i.styleSheet.cssText = s(l, r);
                else {
                    var a = document.createTextNode(r)
                      , t = i.childNodes;
                    t[l] && i.removeChild(t[l]),
                    t.length ? i.insertBefore(a, t[l]) : i.appendChild(a)
                }
            }
            function d(i, l, e) {
                var b = e.css
                  , r = e.media
                  , a = e.sourceMap;
                if (r ? i.setAttribute("media", r) : i.removeAttribute("media"),
                a && "undefined" != typeof btoa && (b += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")),
                i.styleSheet)
                    i.styleSheet.cssText = b;
                else {
                    for (; i.firstChild; )
                        i.removeChild(i.firstChild);
                    i.appendChild(document.createTextNode(b))
                }
            }
            var u = null
              , p = 0;
            function h(i, l) {
                var e, b, r;
                if (l.singleton) {
                    var a = p++;
                    e = u || (u = n(l)),
                    b = f.bind(null, e, a, !1),
                    r = f.bind(null, e, a, !0)
                } else
                    e = n(l),
                    b = d.bind(null, e, l),
                    r = function() {
                        !function(i) {
                            if (null === i.parentNode)
                                return !1;
                            i.parentNode.removeChild(i)
                        }(e)
                    }
                    ;
                return b(i),
                function(l) {
                    if (l) {
                        if (l.css === i.css && l.media === i.media && l.sourceMap === i.sourceMap)
                            return;
                        b(i = l)
                    } else
                        r()
                }
            }
            i.exports = function(i, l) {
                (l = l || {}).singleton || "boolean" == typeof l.singleton || (l.singleton = (void 0 === b && (b = Boolean(window && document && document.all && !window.atob)),
                b));
                var e = o(i = i || [], l);
                return function(i) {
                    if (i = i || [],
                    "[object Array]" === Object.prototype.toString.call(i)) {
                        for (var b = 0; b < e.length; b++) {
                            var r = t(e[b]);
                            a[r].references--
                        }
                        for (var n = o(i, l), c = 0; c < e.length; c++) {
                            var s = t(e[c]);
                            0 === a[s].references && (a[s].updater(),
                            a.splice(s, 1))
                        }
                        e = n
                    }
                }
            }
        }
    }
      , l = {};
    function e(b) {
        if (l[b])
            return l[b].exports;
        var r = l[b] = {
            id: b,
            exports: {}
        };
        return i[b](r, r.exports, e),
        r.exports
    }
    e.n = i=>{
        var l = i && i.__esModule ? ()=>i.default : ()=>i;
        return e.d(l, {
            a: l
        }),
        l
    }
    ,
    e.d = (i,l)=>{
        for (var b in l)
            e.o(l, b) && !e.o(i, b) && Object.defineProperty(i, b, {
                enumerable: !0,
                get: l[b]
            })
    }
    ,
    e.o = (i,l)=>Object.prototype.hasOwnProperty.call(i, l),
    (()=>{
        var i = e(379)
          , l = e.n(i)
          , b = e(243);
        function r(i, l) {
            for (var e = 0; e < l.length; e++) {
                var b = l[e];
                b.enumerable = b.enumerable || !1,
                b.configurable = !0,
                "value"in b && (b.writable = !0),
                Object.defineProperty(i, b.key, b)
            }
        }
        l()(b.Z, {
            insert: "head",
            singleton: !1
        }),
        b.Z.locals;
        var a = function() {
            function i(l, e) {
                var b, r, a, t, o, n, c = this;
                !function(i, l) {
                    if (!(i instanceof l))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i),
                this.el = l,
                this.options = e;
                var s, f = null === (b = null == e ? void 0 : e.hideOnSelect) || void 0 === b || b, d = null !== (r = null == e ? void 0 : e.selectedClass) && void 0 !== r ? r : "selected", u = null !== (a = null == e ? void 0 : e.defaultValue) && void 0 !== a ? a : "", p = null !== (t = null == e ? void 0 : e.icons) && void 0 !== t ? t : ["bi-alarm-fill", "bi-alarm", "bi-align-bottom", "bi-align-center", "bi-align-end", "bi-align-middle", "bi-align-start", "bi-align-top", "bi-alt", "bi-app-indicator", "bi-app", "bi-archive-fill", "bi-archive", "bi-arrow-90deg-down", "bi-arrow-90deg-left", "bi-arrow-90deg-right", "bi-arrow-90deg-up", "bi-arrow-bar-down", "bi-arrow-bar-left", "bi-arrow-bar-right", "bi-arrow-bar-up", "bi-arrow-clockwise", "bi-arrow-counterclockwise", "bi-arrow-down-circle-fill", "bi-arrow-down-circle", "bi-arrow-down-left-circle-fill", "bi-arrow-down-left-circle", "bi-arrow-down-left-square-fill", "bi-arrow-down-left-square", "bi-arrow-down-left", "bi-arrow-down-right-circle-fill", "bi-arrow-down-right-circle", "bi-arrow-down-right-square-fill", "bi-arrow-down-right-square", "bi-arrow-down-right", "bi-arrow-down-short", "bi-arrow-down-square-fill", "bi-arrow-down-square", "bi-arrow-down-up", "bi-arrow-down", "bi-arrow-left-circle-fill", "bi-arrow-left-circle", "bi-arrow-left-right", "bi-arrow-left-short", "bi-arrow-left-square-fill", "bi-arrow-left-square", "bi-arrow-left", "bi-arrow-repeat", "bi-arrow-return-left", "bi-arrow-return-right", "bi-arrow-right-circle-fill", "bi-arrow-right-circle", "bi-arrow-right-short", "bi-arrow-right-square-fill", "bi-arrow-right-square", "bi-arrow-right", "bi-arrow-up-circle-fill", "bi-arrow-up-circle", "bi-arrow-up-left-circle-fill", "bi-arrow-up-left-circle", "bi-arrow-up-left-square-fill", "bi-arrow-up-left-square", "bi-arrow-up-left", "bi-arrow-up-right-circle-fill", "bi-arrow-up-right-circle", "bi-arrow-up-right-square-fill", "bi-arrow-up-right-square", "bi-arrow-up-right", "bi-arrow-up-short", "bi-arrow-up-square-fill", "bi-arrow-up-square", "bi-arrow-up", "bi-arrows-angle-contract", "bi-arrows-angle-expand", "bi-arrows-collapse", "bi-arrows-expand", "bi-arrows-fullscreen", "bi-arrows-move", "bi-aspect-ratio-fill", "bi-aspect-ratio", "bi-asterisk", "bi-at", "bi-award-fill", "bi-award", "bi-back", "bi-backspace-fill", "bi-backspace-reverse-fill", "bi-backspace-reverse", "bi-backspace", "bi-badge-3d-fill", "bi-badge-3d", "bi-badge-4k-fill", "bi-badge-4k", "bi-badge-8k-fill", "bi-badge-8k", "bi-badge-ad-fill", "bi-badge-ad", "bi-badge-ar-fill", "bi-badge-ar", "bi-badge-cc-fill", "bi-badge-cc", "bi-badge-hd-fill", "bi-badge-hd", "bi-badge-tm-fill", "bi-badge-tm", "bi-badge-vo-fill", "bi-badge-vo", "bi-badge-vr-fill", "bi-badge-vr", "bi-badge-wc-fill", "bi-badge-wc", "bi-bag-check-fill", "bi-bag-check", "bi-bag-dash-fill", "bi-bag-dash", "bi-bag-fill", "bi-bag-plus-fill", "bi-bag-plus", "bi-bag-x-fill", "bi-bag-x", "bi-bag", "bi-bar-chart-fill", "bi-bar-chart-line-fill", "bi-bar-chart-line", "bi-bar-chart-steps", "bi-bar-chart", "bi-basket-fill", "bi-basket", "bi-basket2-fill", "bi-basket2", "bi-basket3-fill", "bi-basket3", "bi-battery-charging", "bi-battery-full", "bi-battery-half", "bi-battery", "bi-bell-fill", "bi-bell", "bi-bezier", "bi-bezier2", "bi-bicycle", "bi-binoculars-fill", "bi-binoculars", "bi-blockquote-left", "bi-blockquote-right", "bi-book-fill", "bi-book-half", "bi-book", "bi-bookmark-check-fill", "bi-bookmark-check", "bi-bookmark-dash-fill", "bi-bookmark-dash", "bi-bookmark-fill", "bi-bookmark-heart-fill", "bi-bookmark-heart", "bi-bookmark-plus-fill", "bi-bookmark-plus", "bi-bookmark-star-fill", "bi-bookmark-star", "bi-bookmark-x-fill", "bi-bookmark-x", "bi-bookmark", "bi-bookmarks-fill", "bi-bookmarks", "bi-bookshelf", "bi-bootstrap-fill", "bi-bootstrap-reboot", "bi-bootstrap", "bi-border-all", "bi-border-bottom", "bi-border-center", "bi-border-inner", "bi-border-left", "bi-border-middle", "bi-border-outer", "bi-border-right", "bi-border-style", "bi-border-top", "bi-border-width", "bi-border", "bi-bounding-box-circles", "bi-bounding-box", "bi-box-arrow-down-left", "bi-box-arrow-down-right", "bi-box-arrow-down", "bi-box-arrow-in-down-left", "bi-box-arrow-in-down-right", "bi-box-arrow-in-down", "bi-box-arrow-in-left", "bi-box-arrow-in-right", "bi-box-arrow-in-up-left", "bi-box-arrow-in-up-right", "bi-box-arrow-in-up", "bi-box-arrow-left", "bi-box-arrow-right", "bi-box-arrow-up-left", "bi-box-arrow-up-right", "bi-box-arrow-up", "bi-box-seam", "bi-box", "bi-braces", "bi-bricks", "bi-briefcase-fill", "bi-briefcase", "bi-brightness-alt-high-fill", "bi-brightness-alt-high", "bi-brightness-alt-low-fill", "bi-brightness-alt-low", "bi-brightness-high-fill", "bi-brightness-high", "bi-brightness-low-fill", "bi-brightness-low", "bi-broadcast-pin", "bi-broadcast", "bi-brush-fill", "bi-brush", "bi-bucket-fill", "bi-bucket", "bi-bug-fill", "bi-bug", "bi-building", "bi-bullseye", "bi-calculator-fill", "bi-calculator", "bi-calendar-check-fill", "bi-calendar-check", "bi-calendar-date-fill", "bi-calendar-date", "bi-calendar-day-fill", "bi-calendar-day", "bi-calendar-event-fill", "bi-calendar-event", "bi-calendar-fill", "bi-calendar-minus-fill", "bi-calendar-minus", "bi-calendar-month-fill", "bi-calendar-month", "bi-calendar-plus-fill", "bi-calendar-plus", "bi-calendar-range-fill", "bi-calendar-range", "bi-calendar-week-fill", "bi-calendar-week", "bi-calendar-x-fill", "bi-calendar-x", "bi-calendar", "bi-calendar2-check-fill", "bi-calendar2-check", "bi-calendar2-date-fill", "bi-calendar2-date", "bi-calendar2-day-fill", "bi-calendar2-day", "bi-calendar2-event-fill", "bi-calendar2-event", "bi-calendar2-fill", "bi-calendar2-minus-fill", "bi-calendar2-minus", "bi-calendar2-month-fill", "bi-calendar2-month", "bi-calendar2-plus-fill", "bi-calendar2-plus", "bi-calendar2-range-fill", "bi-calendar2-range", "bi-calendar2-week-fill", "bi-calendar2-week", "bi-calendar2-x-fill", "bi-calendar2-x", "bi-calendar2", "bi-calendar3-event-fill", "bi-calendar3-event", "bi-calendar3-fill", "bi-calendar3-range-fill", "bi-calendar3-range", "bi-calendar3-week-fill", "bi-calendar3-week", "bi-calendar3", "bi-calendar4-event", "bi-calendar4-range", "bi-calendar4-week", "bi-calendar4", "bi-camera-fill", "bi-camera-reels-fill", "bi-camera-reels", "bi-camera-video-fill", "bi-camera-video-off-fill", "bi-camera-video-off", "bi-camera-video", "bi-camera", "bi-camera2", "bi-capslock-fill", "bi-capslock", "bi-card-checklist", "bi-card-heading", "bi-card-image", "bi-card-list", "bi-card-text", "bi-caret-down-fill", "bi-caret-down-square-fill", "bi-caret-down-square", "bi-caret-down", "bi-caret-left-fill", "bi-caret-left-square-fill", "bi-caret-left-square", "bi-caret-left", "bi-caret-right-fill", "bi-caret-right-square-fill", "bi-caret-right-square", "bi-caret-right", "bi-caret-up-fill", "bi-caret-up-square-fill", "bi-caret-up-square", "bi-caret-up", "bi-cart-check-fill", "bi-cart-check", "bi-cart-dash-fill", "bi-cart-dash", "bi-cart-fill", "bi-cart-plus-fill", "bi-cart-plus", "bi-cart-x-fill", "bi-cart-x", "bi-cart", "bi-cart2", "bi-cart3", "bi-cart4", "bi-cash-stack", "bi-cash", "bi-cast", "bi-chat-dots-fill", "bi-chat-dots", "bi-chat-fill", "bi-chat-left-dots-fill", "bi-chat-left-dots", "bi-chat-left-fill", "bi-chat-left-quote-fill", "bi-chat-left-quote", "bi-chat-left-text-fill", "bi-chat-left-text", "bi-chat-left", "bi-chat-quote-fill", "bi-chat-quote", "bi-chat-right-dots-fill", "bi-chat-right-dots", "bi-chat-right-fill", "bi-chat-right-quote-fill", "bi-chat-right-quote", "bi-chat-right-text-fill", "bi-chat-right-text", "bi-chat-right", "bi-chat-square-dots-fill", "bi-chat-square-dots", "bi-chat-square-fill", "bi-chat-square-quote-fill", "bi-chat-square-quote", "bi-chat-square-text-fill", "bi-chat-square-text", "bi-chat-square", "bi-chat-text-fill", "bi-chat-text", "bi-chat", "bi-check-all", "bi-check-circle-fill", "bi-check-circle", "bi-check-square-fill", "bi-check-square", "bi-check", "bi-check2-all", "bi-check2-circle", "bi-check2-square", "bi-check2", "bi-chevron-bar-contract", "bi-chevron-bar-down", "bi-chevron-bar-expand", "bi-chevron-bar-left", "bi-chevron-bar-right", "bi-chevron-bar-up", "bi-chevron-compact-down", "bi-chevron-compact-left", "bi-chevron-compact-right", "bi-chevron-compact-up", "bi-chevron-contract", "bi-chevron-double-down", "bi-chevron-double-left", "bi-chevron-double-right", "bi-chevron-double-up", "bi-chevron-down", "bi-chevron-expand", "bi-chevron-left", "bi-chevron-right", "bi-chevron-up", "bi-circle-fill", "bi-circle-half", "bi-circle-square", "bi-circle", "bi-clipboard-check", "bi-clipboard-data", "bi-clipboard-minus", "bi-clipboard-plus", "bi-clipboard-x", "bi-clipboard", "bi-clock-fill", "bi-clock-history", "bi-clock", "bi-cloud-arrow-down-fill", "bi-cloud-arrow-down", "bi-cloud-arrow-up-fill", "bi-cloud-arrow-up", "bi-cloud-check-fill", "bi-cloud-check", "bi-cloud-download-fill", "bi-cloud-download", "bi-cloud-fill", "bi-cloud-minus-fill", "bi-cloud-minus", "bi-cloud-plus-fill", "bi-cloud-plus", "bi-cloud-slash-fill", "bi-cloud-slash", "bi-cloud-upload-fill", "bi-cloud-upload", "bi-cloud", "bi-code-slash", "bi-code-square", "bi-code", "bi-collection-fill", "bi-collection-play-fill", "bi-collection-play", "bi-collection", "bi-columns-gap", "bi-columns", "bi-command", "bi-compass-fill", "bi-compass", "bi-cone-striped", "bi-cone", "bi-controller", "bi-cpu-fill", "bi-cpu", "bi-credit-card-2-back-fill", "bi-credit-card-2-back", "bi-credit-card-2-front-fill", "bi-credit-card-2-front", "bi-credit-card-fill", "bi-credit-card", "bi-crop", "bi-cup-fill", "bi-cup-straw", "bi-cup", "bi-cursor-fill", "bi-cursor-text", "bi-cursor", "bi-dash-circle-dotted", "bi-dash-circle-fill", "bi-dash-circle", "bi-dash-square-dotted", "bi-dash-square-fill", "bi-dash-square", "bi-dash", "bi-diagram-2-fill", "bi-diagram-2", "bi-diagram-3-fill", "bi-diagram-3", "bi-diamond-fill", "bi-diamond-half", "bi-diamond", "bi-dice-1-fill", "bi-dice-1", "bi-dice-2-fill", "bi-dice-2", "bi-dice-3-fill", "bi-dice-3", "bi-dice-4-fill", "bi-dice-4", "bi-dice-5-fill", "bi-dice-5", "bi-dice-6-fill", "bi-dice-6", "bi-disc-fill", "bi-disc", "bi-discord", "bi-display-fill", "bi-display", "bi-distribute-horizontal", "bi-distribute-vertical", "bi-door-closed-fill", "bi-door-closed", "bi-door-open-fill", "bi-door-open", "bi-dot", "bi-download", "bi-droplet-fill", "bi-droplet-half", "bi-droplet", "bi-earbuds", "bi-easel-fill", "bi-easel", "bi-egg-fill", "bi-egg-fried", "bi-egg", "bi-eject-fill", "bi-eject", "bi-emoji-angry-fill", "bi-emoji-angry", "bi-emoji-dizzy-fill", "bi-emoji-dizzy", "bi-emoji-expressionless-fill", "bi-emoji-expressionless", "bi-emoji-frown-fill", "bi-emoji-frown", "bi-emoji-heart-eyes-fill", "bi-emoji-heart-eyes", "bi-emoji-laughing-fill", "bi-emoji-laughing", "bi-emoji-neutral-fill", "bi-emoji-neutral", "bi-emoji-smile-fill", "bi-emoji-smile-upside-down-fill", "bi-emoji-smile-upside-down", "bi-emoji-smile", "bi-emoji-sunglasses-fill", "bi-emoji-sunglasses", "bi-emoji-wink-fill", "bi-emoji-wink", "bi-envelope-fill", "bi-envelope-open-fill", "bi-envelope-open", "bi-envelope", "bi-eraser-fill", "bi-eraser", "bi-exclamation-circle-fill", "bi-exclamation-circle", "bi-exclamation-diamond-fill", "bi-exclamation-diamond", "bi-exclamation-octagon-fill", "bi-exclamation-octagon", "bi-exclamation-square-fill", "bi-exclamation-square", "bi-exclamation-triangle-fill", "bi-exclamation-triangle", "bi-exclamation", "bi-exclude", "bi-eye-fill", "bi-eye-slash-fill", "bi-eye-slash", "bi-eye", "bi-eyedropper", "bi-eyeglasses", "bi-facebook", "bi-file-arrow-down-fill", "bi-file-arrow-down", "bi-file-arrow-up-fill", "bi-file-arrow-up", "bi-file-bar-graph-fill", "bi-file-bar-graph", "bi-file-binary-fill", "bi-file-binary", "bi-file-break-fill", "bi-file-break", "bi-file-check-fill", "bi-file-check", "bi-file-code-fill", "bi-file-code", "bi-file-diff-fill", "bi-file-diff", "bi-file-earmark-arrow-down-fill", "bi-file-earmark-arrow-down", "bi-file-earmark-arrow-up-fill", "bi-file-earmark-arrow-up", "bi-file-earmark-bar-graph-fill", "bi-file-earmark-bar-graph", "bi-file-earmark-binary-fill", "bi-file-earmark-binary", "bi-file-earmark-break-fill", "bi-file-earmark-break", "bi-file-earmark-check-fill", "bi-file-earmark-check", "bi-file-earmark-code-fill", "bi-file-earmark-code", "bi-file-earmark-diff-fill", "bi-file-earmark-diff", "bi-file-earmark-easel-fill", "bi-file-earmark-easel", "bi-file-earmark-excel-fill", "bi-file-earmark-excel", "bi-file-earmark-fill", "bi-file-earmark-font-fill", "bi-file-earmark-font", "bi-file-earmark-image-fill", "bi-file-earmark-image", "bi-file-earmark-lock-fill", "bi-file-earmark-lock", "bi-file-earmark-lock2-fill", "bi-file-earmark-lock2", "bi-file-earmark-medical-fill", "bi-file-earmark-medical", "bi-file-earmark-minus-fill", "bi-file-earmark-minus", "bi-file-earmark-music-fill", "bi-file-earmark-music", "bi-file-earmark-person-fill", "bi-file-earmark-person", "bi-file-earmark-play-fill", "bi-file-earmark-play", "bi-file-earmark-plus-fill", "bi-file-earmark-plus", "bi-file-earmark-post-fill", "bi-file-earmark-post", "bi-file-earmark-ppt-fill", "bi-file-earmark-ppt", "bi-file-earmark-richtext-fill", "bi-file-earmark-richtext", "bi-file-earmark-ruled-fill", "bi-file-earmark-ruled", "bi-file-earmark-slides-fill", "bi-file-earmark-slides", "bi-file-earmark-spreadsheet-fill", "bi-file-earmark-spreadsheet", "bi-file-earmark-text-fill", "bi-file-earmark-text", "bi-file-earmark-word-fill", "bi-file-earmark-word", "bi-file-earmark-x-fill", "bi-file-earmark-x", "bi-file-earmark-zip-fill", "bi-file-earmark-zip", "bi-file-earmark", "bi-file-easel-fill", "bi-file-easel", "bi-file-excel-fill", "bi-file-excel", "bi-file-fill", "bi-file-font-fill", "bi-file-font", "bi-file-image-fill", "bi-file-image", "bi-file-lock-fill", "bi-file-lock", "bi-file-lock2-fill", "bi-file-lock2", "bi-file-medical-fill", "bi-file-medical", "bi-file-minus-fill", "bi-file-minus", "bi-file-music-fill", "bi-file-music", "bi-file-person-fill", "bi-file-person", "bi-file-play-fill", "bi-file-play", "bi-file-plus-fill", "bi-file-plus", "bi-file-post-fill", "bi-file-post", "bi-file-ppt-fill", "bi-file-ppt", "bi-file-richtext-fill", "bi-file-richtext", "bi-file-ruled-fill", "bi-file-ruled", "bi-file-slides-fill", "bi-file-slides", "bi-file-spreadsheet-fill", "bi-file-spreadsheet", "bi-file-text-fill", "bi-file-text", "bi-file-word-fill", "bi-file-word", "bi-file-x-fill", "bi-file-x", "bi-file-zip-fill", "bi-file-zip", "bi-file", "bi-files-alt", "bi-files", "bi-film", "bi-filter-circle-fill", "bi-filter-circle", "bi-filter-left", "bi-filter-right", "bi-filter-square-fill", "bi-filter-square", "bi-filter", "bi-flag-fill", "bi-flag", "bi-flower1", "bi-flower2", "bi-flower3", "bi-folder-check", "bi-folder-fill", "bi-folder-minus", "bi-folder-plus", "bi-folder-symlink-fill", "bi-folder-symlink", "bi-folder-x", "bi-folder", "bi-folder2-open", "bi-folder2", "bi-fonts", "bi-forward-fill", "bi-forward", "bi-front", "bi-fullscreen-exit", "bi-fullscreen", "bi-funnel-fill", "bi-funnel", "bi-gear-fill", "bi-gear-wide-connected", "bi-gear-wide", "bi-gear", "bi-gem", "bi-geo-alt-fill", "bi-geo-alt", "bi-geo-fill", "bi-geo", "bi-gift-fill", "bi-gift", "bi-github", "bi-globe", "bi-globe2", "bi-google", "bi-graph-down", "bi-graph-up", "bi-grid-1x2-fill", "bi-grid-1x2", "bi-grid-3x2-gap-fill", "bi-grid-3x2-gap", "bi-grid-3x2", "bi-grid-3x3-gap-fill", "bi-grid-3x3-gap", "bi-grid-3x3", "bi-grid-fill", "bi-grid", "bi-grip-horizontal", "bi-grip-vertical", "bi-hammer", "bi-hand-index-fill", "bi-hand-index-thumb-fill", "bi-hand-index-thumb", "bi-hand-index", "bi-hand-thumbs-down-fill", "bi-hand-thumbs-down", "bi-hand-thumbs-up-fill", "bi-hand-thumbs-up", "bi-handbag-fill", "bi-handbag", "bi-hash", "bi-hdd-fill", "bi-hdd-network-fill", "bi-hdd-network", "bi-hdd-rack-fill", "bi-hdd-rack", "bi-hdd-stack-fill", "bi-hdd-stack", "bi-hdd", "bi-headphones", "bi-headset", "bi-heart-fill", "bi-heart-half", "bi-heart", "bi-heptagon-fill", "bi-heptagon-half", "bi-heptagon", "bi-hexagon-fill", "bi-hexagon-half", "bi-hexagon", "bi-hourglass-bottom", "bi-hourglass-split", "bi-hourglass-top", "bi-hourglass", "bi-house-door-fill", "bi-house-door", "bi-house-fill", "bi-house", "bi-hr", "bi-image-alt", "bi-image-fill", "bi-image", "bi-images", "bi-inbox-fill", "bi-inbox", "bi-inboxes-fill", "bi-inboxes", "bi-info-circle-fill", "bi-info-circle", "bi-info-square-fill", "bi-info-square", "bi-info", "bi-input-cursor-text", "bi-input-cursor", "bi-instagram", "bi-intersect", "bi-journal-album", "bi-journal-arrow-down", "bi-journal-arrow-up", "bi-journal-bookmark-fill", "bi-journal-bookmark", "bi-journal-check", "bi-journal-code", "bi-journal-medical", "bi-journal-minus", "bi-journal-plus", "bi-journal-richtext", "bi-journal-text", "bi-journal-x", "bi-journal", "bi-journals", "bi-joystick", "bi-justify-left", "bi-justify-right", "bi-justify", "bi-kanban-fill", "bi-kanban", "bi-key-fill", "bi-key", "bi-keyboard-fill", "bi-keyboard", "bi-ladder", "bi-lamp-fill", "bi-lamp", "bi-laptop-fill", "bi-laptop", "bi-layer-backward", "bi-layer-forward", "bi-layers-fill", "bi-layers-half", "bi-layers", "bi-layout-sidebar-inset-reverse", "bi-layout-sidebar-inset", "bi-layout-sidebar-reverse", "bi-layout-sidebar", "bi-layout-split", "bi-layout-text-sidebar-reverse", "bi-layout-text-sidebar", "bi-layout-text-window-reverse", "bi-layout-text-window", "bi-layout-three-columns", "bi-layout-wtf", "bi-life-preserver", "bi-lightbulb-fill", "bi-lightbulb-off-fill", "bi-lightbulb-off", "bi-lightbulb", "bi-lightning-fill", "bi-lightning", "bi-link-45deg", "bi-link", "bi-linkedin", "bi-list-check", "bi-list-nested", "bi-list-ol", "bi-list-stars", "bi-list-task", "bi-list-ul", "bi-list", "bi-lock-fill", "bi-lock", "bi-mailbox", "bi-mailbox2", "bi-map-fill", "bi-map", "bi-markdown-fill", "bi-markdown", "bi-mask", "bi-megaphone-fill", "bi-megaphone", "bi-menu-app-fill", "bi-menu-app", "bi-menu-button-fill", "bi-menu-button-wide-fill", "bi-menu-button-wide", "bi-menu-button", "bi-menu-down", "bi-menu-up", "bi-mic-fill", "bi-mic-mute-fill", "bi-mic-mute", "bi-mic", "bi-minecart-loaded", "bi-minecart", "bi-moon", "bi-mouse-fill", "bi-mouse", "bi-mouse2-fill", "bi-mouse2", "bi-mouse3-fill", "bi-mouse3", "bi-music-note-beamed", "bi-music-note-list", "bi-music-note", "bi-music-player-fill", "bi-music-player", "bi-newspaper", "bi-node-minus-fill", "bi-node-minus", "bi-node-plus-fill", "bi-node-plus", "bi-nut-fill", "bi-nut", "bi-octagon-fill", "bi-octagon-half", "bi-octagon", "bi-option", "bi-outlet", "bi-paint-bucket", "bi-palette-fill", "bi-palette", "bi-palette2", "bi-paperclip", "bi-paragraph", "bi-patch-check-fill", "bi-patch-check", "bi-patch-exclamation-fill", "bi-patch-exclamation", "bi-patch-minus-fill", "bi-patch-minus", "bi-patch-plus-fill", "bi-patch-plus", "bi-patch-question-fill", "bi-patch-question", "bi-pause-btn-fill", "bi-pause-btn", "bi-pause-circle-fill", "bi-pause-circle", "bi-pause-fill", "bi-pause", "bi-peace-fill", "bi-peace", "bi-pen-fill", "bi-pen", "bi-pencil-fill", "bi-pencil-square", "bi-pencil", "bi-pentagon-fill", "bi-pentagon-half", "bi-pentagon", "bi-people-fill", "bi-people", "bi-percent", "bi-person-badge-fill", "bi-person-badge", "bi-person-bounding-box", "bi-person-check-fill", "bi-person-check", "bi-person-circle", "bi-person-dash-fill", "bi-person-dash", "bi-person-fill", "bi-person-lines-fill", "bi-person-plus-fill", "bi-person-plus", "bi-person-square", "bi-person-x-fill", "bi-person-x", "bi-person", "bi-phone-fill", "bi-phone-landscape-fill", "bi-phone-landscape", "bi-phone-vibrate-fill", "bi-phone-vibrate", "bi-phone", "bi-pie-chart-fill", "bi-pie-chart", "bi-pin-angle-fill", "bi-pin-angle", "bi-pin-fill", "bi-pin", "bi-pip-fill", "bi-pip", "bi-play-btn-fill", "bi-play-btn", "bi-play-circle-fill", "bi-play-circle", "bi-play-fill", "bi-play", "bi-plug-fill", "bi-plug", "bi-plus-circle-dotted", "bi-plus-circle-fill", "bi-plus-circle", "bi-plus-square-dotted", "bi-plus-square-fill", "bi-plus-square", "bi-plus", "bi-power", "bi-printer-fill", "bi-printer", "bi-puzzle-fill", "bi-puzzle", "bi-question-circle-fill", "bi-question-circle", "bi-question-diamond-fill", "bi-question-diamond", "bi-question-octagon-fill", "bi-question-octagon", "bi-question-square-fill", "bi-question-square", "bi-question", "bi-receipt-cutoff", "bi-receipt", "bi-reception-0", "bi-reception-1", "bi-reception-2", "bi-reception-3", "bi-reception-4", "bi-record-btn-fill", "bi-record-btn", "bi-record-circle-fill", "bi-record-circle", "bi-record-fill", "bi-record", "bi-record2-fill", "bi-record2", "bi-reply-all-fill", "bi-reply-all", "bi-reply-fill", "bi-reply", "bi-rss-fill", "bi-rss", "bi-rulers", "bi-save-fill", "bi-save", "bi-save2-fill", "bi-save2", "bi-scissors", "bi-screwdriver", "bi-search", "bi-segmented-nav", "bi-server", "bi-share-fill", "bi-share", "bi-shield-check", "bi-shield-exclamation", "bi-shield-fill-check", "bi-shield-fill-exclamation", "bi-shield-fill-minus", "bi-shield-fill-plus", "bi-shield-fill-x", "bi-shield-fill", "bi-shield-lock-fill", "bi-shield-lock", "bi-shield-minus", "bi-shield-plus", "bi-shield-shaded", "bi-shield-slash-fill", "bi-shield-slash", "bi-shield-x", "bi-shield", "bi-shift-fill", "bi-shift", "bi-shop-window", "bi-shop", "bi-shuffle", "bi-signpost-2-fill", "bi-signpost-2", "bi-signpost-fill", "bi-signpost-split-fill", "bi-signpost-split", "bi-signpost", "bi-sim-fill", "bi-sim", "bi-skip-backward-btn-fill", "bi-skip-backward-btn", "bi-skip-backward-circle-fill", "bi-skip-backward-circle", "bi-skip-backward-fill", "bi-skip-backward", "bi-skip-end-btn-fill", "bi-skip-end-btn", "bi-skip-end-circle-fill", "bi-skip-end-circle", "bi-skip-end-fill", "bi-skip-end", "bi-skip-forward-btn-fill", "bi-skip-forward-btn", "bi-skip-forward-circle-fill", "bi-skip-forward-circle", "bi-skip-forward-fill", "bi-skip-forward", "bi-skip-start-btn-fill", "bi-skip-start-btn", "bi-skip-start-circle-fill", "bi-skip-start-circle", "bi-skip-start-fill", "bi-skip-start", "bi-slack", "bi-slash-circle-fill", "bi-slash-circle", "bi-slash-square-fill", "bi-slash-square", "bi-slash", "bi-sliders", "bi-smartwatch", "bi-sort-alpha-down-alt", "bi-sort-alpha-down", "bi-sort-alpha-up-alt", "bi-sort-alpha-up", "bi-sort-down-alt", "bi-sort-down", "bi-sort-numeric-down-alt", "bi-sort-numeric-down", "bi-sort-numeric-up-alt", "bi-sort-numeric-up", "bi-sort-up-alt", "bi-sort-up", "bi-soundwave", "bi-speaker-fill", "bi-speaker", "bi-speedometer", "bi-speedometer2", "bi-spellcheck", "bi-square-fill", "bi-square-half", "bi-square", "bi-stack", "bi-star-fill", "bi-star-half", "bi-star", "bi-stickies-fill", "bi-stickies", "bi-sticky-fill", "bi-sticky", "bi-stop-btn-fill", "bi-stop-btn", "bi-stop-circle-fill", "bi-stop-circle", "bi-stop-fill", "bi-stop", "bi-stoplights-fill", "bi-stoplights", "bi-stopwatch-fill", "bi-stopwatch", "bi-subtract", "bi-suit-club-fill", "bi-suit-club", "bi-suit-diamond-fill", "bi-suit-diamond", "bi-suit-heart-fill", "bi-suit-heart", "bi-suit-spade-fill", "bi-suit-spade", "bi-sun", "bi-sunglasses", "bi-symmetry-horizontal", "bi-symmetry-vertical", "bi-table", "bi-tablet-fill", "bi-tablet-landscape-fill", "bi-tablet-landscape", "bi-tablet", "bi-tag-fill", "bi-tag", "bi-tags-fill", "bi-tags", "bi-telegram", "bi-telephone-fill", "bi-telephone-forward-fill", "bi-telephone-forward", "bi-telephone-inbound-fill", "bi-telephone-inbound", "bi-telephone-minus-fill", "bi-telephone-minus", "bi-telephone-outbound-fill", "bi-telephone-outbound", "bi-telephone-plus-fill", "bi-telephone-plus", "bi-telephone-x-fill", "bi-telephone-x", "bi-telephone", "bi-terminal-fill", "bi-terminal", "bi-text-center", "bi-text-indent-left", "bi-text-indent-right", "bi-text-left", "bi-text-paragraph", "bi-text-right", "bi-textarea-resize", "bi-textarea-t", "bi-textarea", "bi-thermometer-half", "bi-thermometer", "bi-three-dots-vertical", "bi-three-dots", "bi-toggle-off", "bi-toggle-on", "bi-toggle2-off", "bi-toggle2-on", "bi-toggles", "bi-toggles2", "bi-tools", "bi-trash-fill", "bi-trash", "bi-trash2-fill", "bi-trash2", "bi-tree-fill", "bi-tree", "bi-triangle-fill", "bi-triangle-half", "bi-triangle", "bi-trophy-fill", "bi-trophy", "bi-truck-flatbed", "bi-truck", "bi-tv-fill", "bi-tv", "bi-twitch", "bi-twitter", "bi-type-bold", "bi-type-h1", "bi-type-h2", "bi-type-h3", "bi-type-italic", "bi-type-strikethrough", "bi-type-underline", "bi-type", "bi-ui-checks-grid", "bi-ui-checks", "bi-ui-radios-grid", "bi-ui-radios", "bi-union", "bi-unlock-fill", "bi-unlock", "bi-upc-scan", "bi-upc", "bi-upload", "bi-vector-pen", "bi-view-list", "bi-view-stacked", "bi-vinyl-fill", "bi-vinyl", "bi-voicemail", "bi-volume-down-fill", "bi-volume-down", "bi-volume-mute-fill", "bi-volume-mute", "bi-volume-off-fill", "bi-volume-off", "bi-volume-up-fill", "bi-volume-up", "bi-vr", "bi-wallet-fill", "bi-wallet", "bi-wallet2", "bi-watch", "bi-whatsapp", "bi-wifi-1", "bi-wifi-2", "bi-wifi-off", "bi-wifi", "bi-window-dock", "bi-window-sidebar", "bi-window", "bi-wrench", "bi-x-circle-fill", "bi-x-circle", "bi-x-diamond-fill", "bi-x-diamond", "bi-x-octagon-fill", "bi-x-octagon", "bi-x-square-fill", "bi-x-square", "bi-x", "bi-youtube", "bi-zoom-in", "bi-zoom-out"];
                (null === (o = null == e ? void 0 : e.searchable) || void 0 === o || o) && this.el.addEventListener("keyup", this.search),
                s = "function" == typeof (null == e ? void 0 : e.valueFormat) ? e.valueFormat : function(i) {
                    return "bi ".concat(i)
                }
                ,
                this.el.insertAdjacentHTML("afterend", '\n                <div class="iconpicker-dropdown '.concat(null !== (n = null == e ? void 0 : e.containerClass) && void 0 !== n ? n : "", '">\n                    <ul>\n                        ').concat(p.map((function(i) {
                    return '<li value="'.concat(s(i), '" class="').concat(u === i ? d : "", '"><i class="').concat(s(i), '"></i></li>')
                }
                )).join(""), "\n                    </ul>\n                </div>\n            ")),
                this.el.nextElementSibling.querySelectorAll("li").forEach((function(i) {
                    return i.addEventListener("click", (function(l) {
                        var e, b;
                        null === (e = c.el.nextElementSibling.querySelector("li.selected")) || void 0 === e || e.classList.remove(d),
                        i.classList.add(d);
                        var r = i.getAttribute("value");
                        c.el.value = r,
                        f && c.el.nextElementSibling.classList.remove("show"),
                        null !== (b = c.options) && void 0 !== b && b.showSelectedIn && (c.options.showSelectedIn.innerHTML = '<i class="'.concat(r, '"></i>'))
                    }
                    ))
                }
                )),
                this.el.addEventListener("focusin", this.focusIn.bind(this)),
                this.el.addEventListener("change", this.setIconOnChange.bind(this)),
                this.el.value = s(u),
                this.el.dispatchEvent(new Event("change"))
            }
            var l, e;
            return l = i,
            (e = [{
                key: "search",
                value: function() {
                    for (var i = this.nextElementSibling.getElementsByTagName("li"), l = new RegExp(this.value,"i"), e = 0; e < i.length; e++) {
                        var b = i[e];
                        l.test(b.getAttribute("value")) ? b.classList.remove("hidden") : b.classList.add("hidden")
                    }
                }
            }, {
                key: "setIconOnChange",
                value: function() {
                    var i;
                    null !== (i = this.options) && void 0 !== i && i.showSelectedIn && (this.options.showSelectedIn.innerHTML = '<i class="'.concat(this.el.value, '"></i>'))
                }
            }, {
                key: "focusIn",
                value: function() {
                    var i, l, e, b;
                    null !== (i = this.el.nextElementSibling) && void 0 !== i && null !== (l = i.classList) && void 0 !== l && l.contains("iconpicker-dropdown") && (this.el.nextElementSibling.querySelector("ul").style.top = this.el.offsetHeight + "px",
                    null !== (e = null === (b = this.options) || void 0 === b ? void 0 : b.fade) && void 0 !== e && e && (this.el.nextElementSibling.style.transition = "0.25s ease-in-out"),
                    this.el.nextElementSibling.classList.add("show"))
                }
            }]) && r(l.prototype, e),
            i
        }();
        window.Iconpicker = a,
        document.addEventListener("click", (function(i) {
            document.querySelectorAll(".iconpicker-dropdown").forEach((function(l) {
                l.contains(i.target) || l.previousElementSibling.contains(i.target) || l.classList.remove("show")
            }
            ))
        }
        ))
    }
    )()
}
)();
