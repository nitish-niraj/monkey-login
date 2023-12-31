(function() {
    var t = this;
    t.N2_ = t.N2_ || {
        r: [],
        d: []
    }, t.N2R = t.N2R || function() {
        t.N2_.r.push(arguments)
    }, t.N2D = t.N2D || function() {
        t.N2_.d.push(arguments)
    }
}).call(window), N2D("NextgenmediaSVGPlugin", ["GSAP"], function(t, e) {
    var r = this;
    (r._gsQueue || (r._gsQueue = [])).push(function() {
        "use strict";
        var t = Math.PI / 180,
            e = 180 / Math.PI,
            n = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            o = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            i = /(^[#\.]|[a-y][a-z])/gi,
            a = /[achlmqstvz]/gi,
            s = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
            l = r._gsDefine.globals.TweenLite,
            h = function(t) {
                r.console && console.log(t)
            },
            u = function(e, r) {
                var n, o, i, a, s, l, h = Math.ceil(Math.abs(r) / 90),
                    u = 0,
                    c = [];
                for (e *= t, r *= t, n = r / h, o = 4 / 3 * Math.sin(n / 2) / (1 + Math.cos(n / 2)), l = 0; h > l; l++) i = e + l * n, a = Math.cos(i), s = Math.sin(i), c[u++] = a - o * s, c[u++] = s + o * a, i += n, a = Math.cos(i), s = Math.sin(i), c[u++] = a + o * s, c[u++] = s - o * a, c[u++] = a, c[u++] = s;
                return c
            },
            c = function(r, n, o, i, a, s, l, h, c) {
                if (r !== h || n !== c) {
                    o = Math.abs(o), i = Math.abs(i);
                    var f = a % 360 * t,
                        g = Math.cos(f),
                        p = Math.sin(f),
                        d = (r - h) / 2,
                        v = (n - c) / 2,
                        M = g * d + p * v,
                        b = -p * d + g * v,
                        A = o * o,
                        m = i * i,
                        N = M * M,
                        y = b * b,
                        x = N / A + y / m;
                    x > 1 && (o = Math.sqrt(x) * o, i = Math.sqrt(x) * i, A = o * o, m = i * i);
                    var z = s === l ? -1 : 1,
                        P = (A * m - A * y - m * N) / (A * y + m * N);
                    0 > P && (P = 0);
                    var S = z * Math.sqrt(P),
                        _ = S * (o * b / i),
                        w = S * -(i * M / o),
                        T = (r + h) / 2,
                        G = (n + c) / 2,
                        I = T + (g * _ - p * w),
                        L = G + (p * _ + g * w),
                        Y = (M - _) / o,
                        q = (b - w) / i,
                        C = (-M - _) / o,
                        R = (-b - w) / i,
                        B = Math.sqrt(Y * Y + q * q),
                        V = Y;
                    z = 0 > q ? -1 : 1;
                    var X = z * Math.acos(V / B) * e;
                    B = Math.sqrt((Y * Y + q * q) * (C * C + R * R)), V = Y * C + q * R, z = 0 > Y * R - q * C ? -1 : 1;
                    var D = z * Math.acos(V / B) * e;
                    !l && D > 0 ? D -= 360 : l && 0 > D && (D += 360), D %= 360, X %= 360;
                    var F, j, H, O = u(X, D),
                        Q = g * o,
                        E = p * o,
                        U = p * -i,
                        W = g * i,
                        Z = O.length - 2;
                    for (F = 0; Z > F; F += 2) j = O[F], H = O[F + 1], O[F] = j * Q + H * U + I, O[F + 1] = j * E + H * W + L;
                    return O[O.length - 2] = h, O[O.length - 1] = c, O
                }
            },
            f = function(t) {
                var e, r, o, i, a, l, u, f, g, p, d, v, M, b = (t + "").replace(s, function(t) {
                        var e = +t;
                        return 1e-4 > e && e > -1e-4 ? 0 : e
                    }).match(n) || [],
                    A = [],
                    m = 0,
                    N = 0,
                    y = b.length,
                    x = 2,
                    z = 0;
                if (!t || !isNaN(b[0]) || isNaN(b[1])) return h("ERROR: malformed path data: " + t), A;
                for (e = 0; y > e; e++)
                    if (M = a, isNaN(b[e]) ? (a = b[e].toUpperCase(), l = a !== b[e]) : e--, o = +b[e + 1], i = +b[e + 2], l && (o += m, i += N), 0 === e && (f = o, g = i), "M" === a) u && u.length < 8 && (A.length -= 1, x = 0), m = f = o, N = g = i, u = [o, i], z += x, x = 2, A.push(u), e += 2, a = "L";
                    else if ("C" === a) u || (u = [0, 0]), u[x++] = o, u[x++] = i, l || (m = N = 0), u[x++] = m + 1 * b[e + 3], u[x++] = N + 1 * b[e + 4], u[x++] = m += 1 * b[e + 5], u[x++] = N += 1 * b[e + 6], e += 6;
                else if ("S" === a) "C" === M || "S" === M ? (p = m - u[x - 4], d = N - u[x - 3], u[x++] = m + p, u[x++] = N + d) : (u[x++] = m, u[x++] = N), u[x++] = o, u[x++] = i, l || (m = N = 0), u[x++] = m += 1 * b[e + 3], u[x++] = N += 1 * b[e + 4], e += 4;
                else if ("Q" === a) p = o - m, d = i - N, u[x++] = m + 2 * p / 3, u[x++] = N + 2 * d / 3, l || (m = N = 0), m += 1 * b[e + 3], N += 1 * b[e + 4], p = o - m, d = i - N, u[x++] = m + 2 * p / 3, u[x++] = N + 2 * d / 3, u[x++] = m, u[x++] = N, e += 4;
                else if ("T" === a) p = m - u[x - 4], d = N - u[x - 3], u[x++] = m + p, u[x++] = N + d, p = m + 1.5 * p - o, d = N + 1.5 * d - i, u[x++] = o + 2 * p / 3, u[x++] = i + 2 * d / 3, u[x++] = m = o, u[x++] = N = i, e += 2;
                else if ("H" === a) i = N, u[x++] = m + (o - m) / 3, u[x++] = N + (i - N) / 3, u[x++] = m + 2 * (o - m) / 3, u[x++] = N + 2 * (i - N) / 3, u[x++] = m = o, u[x++] = i, e += 1;
                else if ("V" === a) i = o, o = m, l && (i += N - m), u[x++] = o, u[x++] = N + (i - N) / 3, u[x++] = o, u[x++] = N + 2 * (i - N) / 3, u[x++] = o, u[x++] = N = i, e += 1;
                else if ("L" === a || "Z" === a) "Z" === a && (o = f, i = g, u.closed = !0), ("L" === a || Math.abs(m - o) > .5 || Math.abs(N - i) > .5) && (u[x++] = m + (o - m) / 3, u[x++] = N + (i - N) / 3, u[x++] = m + 2 * (o - m) / 3, u[x++] = N + 2 * (i - N) / 3, u[x++] = o, u[x++] = i, "L" === a && (e += 2)), m = o, N = i;
                else if ("A" === a) {
                    if (v = c(m, N, 1 * b[e + 1], 1 * b[e + 2], 1 * b[e + 3], 1 * b[e + 4], 1 * b[e + 5], (l ? m : 0) + 1 * b[e + 6], (l ? N : 0) + 1 * b[e + 7]))
                        for (r = 0; r < v.length; r++) u[x++] = v[r];
                    m = u[x - 2], N = u[x - 1], e += 7
                } else h("Error: malformed path data: " + t);
                return A.totalPoints = z + x, A
            },
            g = function(t, e) {
                var r, n, o, i, a, s, l, h, u, c, f, g, p, d, v = 0,
                    M = .999999,
                    b = t.length,
                    A = e / ((b - 2) / 6);
                for (p = 2; b > p; p += 6)
                    for (v += A; v > M;) r = t[p - 2], n = t[p - 1], o = t[p], i = t[p + 1], a = t[p + 2], s = t[p + 3], l = t[p + 4], h = t[p + 5], d = 1 / (Math.floor(v) + 1), u = r + (o - r) * d, f = o + (a - o) * d, u += (f - u) * d, f += (a + (l - a) * d - f) * d, c = n + (i - n) * d, g = i + (s - i) * d, c += (g - c) * d, g += (s + (h - s) * d - g) * d, t.splice(p, 4, r + (o - r) * d, n + (i - n) * d, u, c, u + (f - u) * d, c + (g - c) * d, f, g, a + (l - a) * d, s + (h - s) * d), p += 6, b += 6, v--;
                return t
            },
            p = function(t) {
                var e, r, n, o, i = "",
                    a = t.length,
                    s = 100;
                for (r = 0; a > r; r++) {
                    for (o = t[r], i += "M" + o[0] + "," + o[1] + " C", e = o.length, n = 2; e > n; n++) i += (o[n++] * s | 0) / s + "," + (o[n++] * s | 0) / s + " " + (o[n++] * s | 0) / s + "," + (o[n++] * s | 0) / s + " " + (o[n++] * s | 0) / s + "," + (o[n] * s | 0) / s + " ";
                    o.closed && (i += "z")
                }
                return i
            },
            d = function(t) {
                for (var e = [], r = t.length - 1, n = 0; --r > -1;) e[n++] = t[r], e[n++] = t[r + 1], r--;
                for (r = 0; n > r; r++) t[r] = e[r];
                t.reversed = !t.reversed
            },
            v = function(t) {
                var e, r = t.length,
                    n = 0,
                    o = 0;
                for (e = 0; r > e; e++) n += t[e++], o += t[e];
                return [n / (r / 2), o / (r / 2)]
            },
            M = function(t) {
                var e, r, n, o = t.length,
                    i = t[0],
                    a = i,
                    s = t[1],
                    l = s;
                for (n = 6; o > n; n += 6) e = t[n], r = t[n + 1], e > i ? i = e : a > e && (a = e), r > s ? s = r : l > r && (l = r);
                return t.centerX = (i + a) / 2, t.centerY = (s + l) / 2, t.size = (i - a) * (s - l)
            },
            b = function(t) {
                for (var e, r, n, o, i, a = t.length, s = t[0][0], l = s, h = t[0][1], u = h; --a > -1;)
                    for (i = t[a], e = i.length, o = 6; e > o; o += 6) r = i[o], n = i[o + 1], r > s ? s = r : l > r && (l = r), n > h ? h = n : u > n && (u = n);
                return t.centerX = (s + l) / 2, t.centerY = (h + u) / 2, t.size = (s - l) * (h - u)
            },
            A = function(t, e) {
                return e.length - t.length
            },
            m = function(t, e) {
                var r = t.size || M(t),
                    n = e.size || M(e);
                return Math.abs(n - r) < (r + n) / 20 ? e.centerX - t.centerX || e.centerY - t.centerY : n - r
            },
            N = function(t, e) {
                var r, n, o = t.slice(0),
                    i = t.length,
                    a = i - 2;
                for (e = 0 | e, r = 0; i > r; r++) n = (r + e) % a, t[r++] = o[n], t[r] = o[n + 1]
            },
            y = function(t, e, r, n, o) {
                var i, a, s, l, h = t.length,
                    u = 0,
                    c = h - 2;
                for (r *= 6, a = 0; h > a; a += 6) i = (a + r) % c, l = t[i] - (e[a] - n), s = t[i + 1] - (e[a + 1] - o), u += Math.sqrt(s * s + l * l);
                return u
            },
            x = function(t, e, r) {
                var n, o, i, a = t.length,
                    s = v(t),
                    l = v(e),
                    h = l[0] - s[0],
                    u = l[1] - s[1],
                    c = y(t, e, 0, h, u),
                    f = 0;
                for (i = 6; a > i; i += 6) o = y(t, e, i / 6, h, u), c > o && (c = o, f = i);
                if (r)
                    for (n = t.slice(0), d(n), i = 6; a > i; i += 6) o = y(n, e, i / 6, h, u), c > o && (c = o, f = -i);
                return f / 6
            },
            z = function(t, e, r) {
                for (var n, o, i, a, s, l, h = t.length, u = 99999999999, c = 0, f = 0; --h > -1;)
                    for (n = t[h], l = n.length, s = 0; l > s; s += 6) o = n[s] - e, i = n[s + 1] - r, a = Math.sqrt(o * o + i * i), u > a && (u = a, c = n[s], f = n[s + 1]);
                return [c, f]
            },
            P = function(t, e, r, n, o, i) {
                var a, s, l, h, u, c = e.length,
                    f = 0,
                    g = Math.min(t.size || M(t), e[r].size || M(e[r])) * n,
                    p = 999999999999,
                    d = t.centerX + o,
                    v = t.centerY + i;
                for (s = r; c > s && (a = e[s].size || M(e[s]), !(g > a)); s++) l = e[s].centerX - d, h = e[s].centerY - v, u = Math.sqrt(l * l + h * h), p > u && (f = s, p = u);
                return u = e[f], e.splice(f, 1), u
            },
            S = function(t, e, r, n) {
                var o, i, a, s, l, u, c, f = e.length - t.length,
                    p = f > 0 ? e : t,
                    v = f > 0 ? t : e,
                    y = 0,
                    S = "complexity" === n ? A : m,
                    _ = "position" === n ? 0 : "number" == typeof n ? n : .8,
                    w = v.length,
                    T = "object" == typeof r && r.push ? r.slice(0) : [r],
                    G = "reverse" === T[0] || T[0] < 0,
                    I = "log" === r;
                if (v[0]) {
                    if (p.length > 1 && (t.sort(S), e.sort(S), u = p.size || b(p), u = v.size || b(v), u = p.centerX - v.centerX, c = p.centerY - v.centerY, S === m))
                        for (w = 0; w < v.length; w++) p.splice(w, 0, P(v[w], p, w, _, u, c));
                    if (f)
                        for (0 > f && (f = -f), p[0].length > v[0].length && g(v[0], (p[0].length - v[0].length) / 6 | 0), w = v.length; f > y;) s = p[w].size || M(p[w]), a = z(v, p[w].centerX, p[w].centerY), s = a[0], l = a[1], v[w++] = [s, l, s, l, s, l, s, l], v.totalPoints += 8, y++;
                    for (w = 0; w < t.length; w++) o = e[w], i = t[w], f = o.length - i.length, 0 > f ? g(o, -f / 6 | 0) : f > 0 && g(i, f / 6 | 0), G && !i.reversed && d(i), r = T[w] || 0 === T[w] ? T[w] : "auto", r && (i.closed || Math.abs(i[0] - i[i.length - 2]) < .5 && Math.abs(i[1] - i[i.length - 1]) < .5 ? "auto" === r || "log" === r ? (T[w] = r = x(i, o, 0 === w), 0 > r && (G = !0, d(i), r = -r), N(i, 6 * r)) : "reverse" !== r && (w && 0 > r && d(i), N(i, 6 * (0 > r ? -r : r))) : !G && ("auto" === r && Math.abs(o[0] - i[0]) + Math.abs(o[1] - i[1]) + Math.abs(o[o.length - 2] - i[i.length - 2]) + Math.abs(o[o.length - 1] - i[i.length - 1]) > Math.abs(o[0] - i[i.length - 2]) + Math.abs(o[1] - i[i.length - 1]) + Math.abs(o[o.length - 2] - i[0]) + Math.abs(o[o.length - 1] - i[1]) || r % 2) ? (d(i), T[w] = -1, G = !0) : "auto" === r ? T[w] = 0 : "reverse" === r && (T[w] = -1), i.closed !== o.closed && (i.closed = o.closed = !1));
                    return I && h("shapeIndex:[" + T.join(",") + "]"), T
                }
            },
            _ = function(t, e, r, n) {
                var o = f(t[0]),
                    i = f(t[1]);
                S(o, i, e || 0 === e ? e : "auto", r) && (t[0] = p(o), t[1] = p(i), ("log" === n || n === !0) && h('precompile:["' + t[0] + '","' + t[1] + '"]'))
            },
            w = function(t, e, r) {
                return e || r || t || 0 === t ? function(n) {
                    _(n, t, e, r)
                } : _
            },
            T = function(t, e) {
                if (!e) return t;
                var r, n, i, a = t.match(o) || [],
                    s = a.length,
                    l = "";
                for ("reverse" === e ? (n = s - 1, r = -2) : (n = (2 * (parseInt(e, 10) || 0) + 1 + 100 * s) % s, r = 2), i = 0; s > i; i += 2) l += a[n - 1] + "," + a[n] + " ", n = (n + r) % s;
                return l
            },
            G = function(t, e) {
                var r, n, o, i, a, s, l, h = 0,
                    u = parseFloat(t[0]),
                    c = parseFloat(t[1]),
                    f = u + "," + c + " ",
                    g = .999999;
                for (o = t.length, r = .5 * e / (.5 * o - 1), n = 0; o - 2 > n; n += 2) {
                    if (h += r, s = parseFloat(t[n + 2]), l = parseFloat(t[n + 3]), h > g)
                        for (a = 1 / (Math.floor(h) + 1), i = 1; h > g;) f += (u + (s - u) * a * i).toFixed(2) + "," + (c + (l - c) * a * i).toFixed(2) + " ", h--, i++;
                    f += s + "," + l + " ", u = s, c = l
                }
                return f
            },
            I = function(t) {
                var e = t[0].match(o) || [],
                    r = t[1].match(o) || [],
                    n = r.length - e.length;
                n > 0 ? t[0] = G(e, n) : t[1] = G(r, -n)
            },
            L = function(t) {
                return isNaN(t) ? I : function(e) {
                    I(e), e[1] = T(e[1], parseInt(t, 10))
                }
            },
            Y = function(t, e) {
                var n, o = r.document.createElementNS("http://www.w3.org/2000/svg", "path"),
                    i = Array.prototype.slice.call(t.attributes),
                    a = i.length;
                for (e = "," + e + ","; --a > -1;) n = i[a].nodeName.toLowerCase(), -1 === e.indexOf("," + n + ",") && o.setAttributeNS(null, n, i[a].nodeValue);
                return o
            },
            q = function(t, e) {
                var r, n, i, a, s, l, h, u, c, f, g, p, d, v, M, b, A, m, N, y, x, z = t.tagName.toLowerCase(),
                    P = .552284749831;
                return "path" !== z && t.getBBox ? (l = Y(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), "rect" === z ? (a = +t.getAttribute("rx") || 0, s = +t.getAttribute("ry") || 0, n = +t.getAttribute("x") || 0, i = +t.getAttribute("y") || 0, f = (+t.getAttribute("width") || 0) - 2 * a, g = (+t.getAttribute("height") || 0) - 2 * s, a || s ? (p = n + a * (1 - P), d = n + a, v = d + f, M = v + a * P, b = v + a, A = i + s * (1 - P), m = i + s, N = m + g, y = N + s * P, x = N + s, r = "M" + b + "," + m + " V" + N + " C" + [b, y, M, x, v, x, v - (v - d) / 3, x, d + (v - d) / 3, x, d, x, p, x, n, y, n, N, n, N - (N - m) / 3, n, m + (N - m) / 3, n, m, n, A, p, i, d, i, d + (v - d) / 3, i, v - (v - d) / 3, i, v, i, M, i, b, A, b, m].join(",") + "z") : r = "M" + (n + f) + "," + i + " v" + g + " h" + -f + " v" + -g + " h" + f + "z") : "circle" === z || "ellipse" === z ? ("circle" === z ? (a = s = +t.getAttribute("r") || 0, u = a * P) : (a = +t.getAttribute("rx") || 0, s = +t.getAttribute("ry") || 0, u = s * P), n = +t.getAttribute("cx") || 0, i = +t.getAttribute("cy") || 0, h = a * P, r = "M" + (n + a) + "," + i + " C" + [n + a, i + u, n + h, i + s, n, i + s, n - h, i + s, n - a, i + u, n - a, i, n - a, i - u, n - h, i - s, n, i - s, n + h, i - s, n + a, i - u, n + a, i].join(",") + "z") : "line" === z ? r = "M" + (t.getAttribute("x1") || 0) + "," + (t.getAttribute("y1") || 0) + " L" + (t.getAttribute("x2") || 0) + "," + (t.getAttribute("y2") || 0) : ("polyline" === z || "polygon" === z) && (c = (t.getAttribute("points") + "").match(o) || [], n = c.shift(), i = c.shift(), r = "M" + n + "," + i + " L" + c.join(","), "polygon" === z && (r += "," + n + "," + i + "z")), l.setAttribute("d", r), e && t.parentNode && (t.parentNode.insertBefore(l, t), t.parentNode.removeChild(t)), l) : t
            },
            C = function(t, e, r) {
                var n, a, s = "string" == typeof t;
                return (!s || i.test(t) || (t.match(o) || []).length < 3) && (n = s ? l.selector(t) : t && t[0] ? t : [t], n && n[0] ? (n = n[0], a = n.nodeName.toUpperCase(), e && "PATH" !== a && (n = q(n, !1), a = "PATH"), t = n.getAttribute("PATH" === a ? "d" : "points") || "", n === r && (t = n.getAttributeNS(null, "data-original") || t)) : (h("WARNING: invalid morph to: " + t), t = !1)), t
            },
            R = "Use NextgenmediaSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",
            B = r._gsDefine.plugin({
                propName: "morphSVG",
                API: 2,
                global: !0,
                version: "0.8.11",
                init: function(t, e, r, n) {
                    var o, i, s, l, u;
                    return "function" != typeof t.setAttribute ? !1 : ("function" == typeof e && (e = e(n, t)), o = t.nodeName.toUpperCase(), u = "POLYLINE" === o || "POLYGON" === o, "PATH" === o || u ? (i = "PATH" === o ? "d" : "points", ("string" == typeof e || e.getBBox || e[0]) && (e = {
                        shape: e
                    }), l = C(e.shape || e.d || e.points || "", "d" === i, t), u && a.test(l) ? (h("WARNING: a <" + o + "> cannot accept path data. " + R), !1) : (l && (this._target = t, t.getAttributeNS(null, "data-original") || t.setAttributeNS(null, "data-original", t.getAttribute(i)), s = this._addTween(t, "setAttribute", t.getAttribute(i) + "", l + "", "morphSVG", !1, i, "object" == typeof e.precompile ? function(t) {
                        t[0] = e.precompile[0], t[1] = e.precompile[1]
                    } : "d" === i ? w(e.shapeIndex, e.map || B.defaultMap, e.precompile) : L(e.shapeIndex)), s && (this._overwriteProps.push("morphSVG"), s.end = l, s.endProp = i)), !0)) : (h("WARNING: cannot morph a <" + o + "> SVG element. " + R), !1))
                },
                set: function(t) {
                    var e;
                    if (this._super.setRatio.call(this, t), 1 === t)
                        for (e = this._firstPT; e;) e.end && this._target.setAttribute(e.endProp, e.end), e = e._next
                }
            });
        B.pathFilter = _, B.pointsFilter = I, B.subdivideRawBezier = g, B.defaultMap = "size", B.pathDataToRawBezier = function(t) {
            return f(C(t, !0))
        }, B.equalizeSegmentQuantity = S, B.convertToPath = function(t, e) {
            "string" == typeof t && (t = l.selector(t));
            for (var r = t && 0 !== t.length ? t.length && t[0] && t[0].nodeType ? Array.prototype.slice.call(t, 0) : [t] : [], n = r.length; --n > -1;) r[n] = q(r[n], e !== !1);
            return r
        }, B.pathDataToBezier = function(t, e) {
            var r, n, o, i, a, s, h, u, c = f(C(t, !0))[0] || [],
                g = 0;
            if (e = e || {}, u = e.align || e.relative, i = e.matrix || [1, 0, 0, 1, 0, 0], a = e.offsetX || 0, s = e.offsetY || 0, "relative" === u || u === !0 ? (a -= c[0] * i[0] + c[1] * i[2], s -= c[0] * i[1] + c[1] * i[3], g = "+=") : (a += i[4], s += i[5], u && (u = "string" == typeof u ? l.selector(u) : u && u[0] ? u : [u], u && u[0] && (h = u[0].getBBox() || {
                    x: 0,
                    y: 0
                }, a -= h.x, s -= h.y))), r = [], o = c.length, i && "1,0,0,1,0,0" !== i.join(","))
                for (n = 0; o > n; n += 2) r.push({
                    x: g + (c[n] * i[0] + c[n + 1] * i[2] + a),
                    y: g + (c[n] * i[1] + c[n + 1] * i[3] + s)
                });
            else
                for (n = 0; o > n; n += 2) r.push({
                    x: g + (c[n] + a),
                    y: g + (c[n + 1] + s)
                });
            return r
        }
    }), r._gsDefine && r._gsQueue.pop()()
}), N2D("NextgenmediaSVGPlugin");