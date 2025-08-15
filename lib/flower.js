var U2 = Object.defineProperty;
var B2 = (V, n, e) => n in V ? U2(V, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : V[n] = e;
var $ = (V, n, e) => B2(V, typeof n != "symbol" ? n + "" : n, e);
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Fr = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Fr.exports;
(function(V, n) {
  (function() {
    var e, s = "4.17.21", a = 200, f = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", p = "Invalid `variable` option passed into `_.template`", g = "__lodash_hash_undefined__", x = 500, v = "__lodash_placeholder__", m = 1, T = 2, A = 4, w = 1, S = 2, R = 1, C = 2, D = 4, W = 8, F = 16, O = 32, U = 64, q = 128, en = 256, nn = 512, hn = 30, H = "...", xn = 800, dn = 16, on = 1, K = 2, nt = 3, Zn = 1 / 0, Wn = 9007199254740991, He = 17976931348623157e292, Zt = NaN, _t = 4294967295, Xa = _t - 1, Qa = _t >>> 1, Ja = [
      ["ary", q],
      ["bind", R],
      ["bindKey", C],
      ["curry", W],
      ["curryRight", F],
      ["flip", nn],
      ["partial", O],
      ["partialRight", U],
      ["rearg", en]
    ], te = "[object Arguments]", Ge = "[object Array]", Va = "[object AsyncFunction]", ve = "[object Boolean]", Me = "[object Date]", ka = "[object DOMException]", Ye = "[object Error]", Ze = "[object Function]", us = "[object GeneratorFunction]", lt = "[object Map]", me = "[object Number]", ja = "[object Null]", Et = "[object Object]", os = "[object Promise]", n1 = "[object Proxy]", ye = "[object RegExp]", ut = "[object Set]", we = "[object String]", $e = "[object Symbol]", t1 = "[object Undefined]", Ae = "[object WeakMap]", e1 = "[object WeakSet]", Ee = "[object ArrayBuffer]", ee = "[object DataView]", Nr = "[object Float32Array]", Hr = "[object Float64Array]", Gr = "[object Int8Array]", Yr = "[object Int16Array]", Zr = "[object Int32Array]", $r = "[object Uint8Array]", Kr = "[object Uint8ClampedArray]", Xr = "[object Uint16Array]", Qr = "[object Uint32Array]", r1 = /\b__p \+= '';/g, i1 = /\b(__p \+=) '' \+/g, s1 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ps = /&(?:amp|lt|gt|quot|#39);/g, gs = /[&<>"']/g, c1 = RegExp(ps.source), a1 = RegExp(gs.source), f1 = /<%-([\s\S]+?)%>/g, h1 = /<%([\s\S]+?)%>/g, ds = /<%=([\s\S]+?)%>/g, l1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, u1 = /^\w*$/, o1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Jr = /[\\^$.*+?()[\]{}|]/g, p1 = RegExp(Jr.source), Vr = /^\s+/, g1 = /\s/, d1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, _1 = /\{\n\/\* \[wrapped with (.+)\] \*/, x1 = /,? & /, v1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, M1 = /[()=,{}\[\]\/\s]/, m1 = /\\(\\)?/g, y1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, _s = /\w*$/, w1 = /^[-+]0x[0-9a-f]+$/i, A1 = /^0b[01]+$/i, E1 = /^\[object .+?Constructor\]$/, S1 = /^0o[0-7]+$/i, T1 = /^(?:0|[1-9]\d*)$/, L1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ke = /($^)/, R1 = /['\n\r\u2028\u2029\\]/g, Xe = "\\ud800-\\udfff", I1 = "\\u0300-\\u036f", z1 = "\\ufe20-\\ufe2f", C1 = "\\u20d0-\\u20ff", xs = I1 + z1 + C1, vs = "\\u2700-\\u27bf", Ms = "a-z\\xdf-\\xf6\\xf8-\\xff", b1 = "\\xac\\xb1\\xd7\\xf7", O1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", P1 = "\\u2000-\\u206f", q1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ms = "A-Z\\xc0-\\xd6\\xd8-\\xde", ys = "\\ufe0e\\ufe0f", ws = b1 + O1 + P1 + q1, kr = "['’]", D1 = "[" + Xe + "]", As = "[" + ws + "]", Qe = "[" + xs + "]", Es = "\\d+", F1 = "[" + vs + "]", Ss = "[" + Ms + "]", Ts = "[^" + Xe + ws + Es + vs + Ms + ms + "]", jr = "\\ud83c[\\udffb-\\udfff]", U1 = "(?:" + Qe + "|" + jr + ")", Ls = "[^" + Xe + "]", ni = "(?:\\ud83c[\\udde6-\\uddff]){2}", ti = "[\\ud800-\\udbff][\\udc00-\\udfff]", re = "[" + ms + "]", Rs = "\\u200d", Is = "(?:" + Ss + "|" + Ts + ")", B1 = "(?:" + re + "|" + Ts + ")", zs = "(?:" + kr + "(?:d|ll|m|re|s|t|ve))?", Cs = "(?:" + kr + "(?:D|LL|M|RE|S|T|VE))?", bs = U1 + "?", Os = "[" + ys + "]?", W1 = "(?:" + Rs + "(?:" + [Ls, ni, ti].join("|") + ")" + Os + bs + ")*", N1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", H1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ps = Os + bs + W1, G1 = "(?:" + [F1, ni, ti].join("|") + ")" + Ps, Y1 = "(?:" + [Ls + Qe + "?", Qe, ni, ti, D1].join("|") + ")", Z1 = RegExp(kr, "g"), $1 = RegExp(Qe, "g"), ei = RegExp(jr + "(?=" + jr + ")|" + Y1 + Ps, "g"), K1 = RegExp([
      re + "?" + Ss + "+" + zs + "(?=" + [As, re, "$"].join("|") + ")",
      B1 + "+" + Cs + "(?=" + [As, re + Is, "$"].join("|") + ")",
      re + "?" + Is + "+" + zs,
      re + "+" + Cs,
      H1,
      N1,
      Es,
      G1
    ].join("|"), "g"), X1 = RegExp("[" + Rs + Xe + xs + ys + "]"), Q1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, J1 = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], V1 = -1, mn = {};
    mn[Nr] = mn[Hr] = mn[Gr] = mn[Yr] = mn[Zr] = mn[$r] = mn[Kr] = mn[Xr] = mn[Qr] = !0, mn[te] = mn[Ge] = mn[Ee] = mn[ve] = mn[ee] = mn[Me] = mn[Ye] = mn[Ze] = mn[lt] = mn[me] = mn[Et] = mn[ye] = mn[ut] = mn[we] = mn[Ae] = !1;
    var Mn = {};
    Mn[te] = Mn[Ge] = Mn[Ee] = Mn[ee] = Mn[ve] = Mn[Me] = Mn[Nr] = Mn[Hr] = Mn[Gr] = Mn[Yr] = Mn[Zr] = Mn[lt] = Mn[me] = Mn[Et] = Mn[ye] = Mn[ut] = Mn[we] = Mn[$e] = Mn[$r] = Mn[Kr] = Mn[Xr] = Mn[Qr] = !0, Mn[Ye] = Mn[Ze] = Mn[Ae] = !1;
    var k1 = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, j1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, nf = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, tf = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, ef = parseFloat, rf = parseInt, qs = typeof We == "object" && We && We.Object === Object && We, sf = typeof self == "object" && self && self.Object === Object && self, On = qs || sf || Function("return this")(), ri = n && !n.nodeType && n, $t = ri && !0 && V && !V.nodeType && V, Ds = $t && $t.exports === ri, ii = Ds && qs.process, tt = function() {
      try {
        var M = $t && $t.require && $t.require("util").types;
        return M || ii && ii.binding && ii.binding("util");
      } catch {
      }
    }(), Fs = tt && tt.isArrayBuffer, Us = tt && tt.isDate, Bs = tt && tt.isMap, Ws = tt && tt.isRegExp, Ns = tt && tt.isSet, Hs = tt && tt.isTypedArray;
    function $n(M, L, E) {
      switch (E.length) {
        case 0:
          return M.call(L);
        case 1:
          return M.call(L, E[0]);
        case 2:
          return M.call(L, E[0], E[1]);
        case 3:
          return M.call(L, E[0], E[1], E[2]);
      }
      return M.apply(L, E);
    }
    function cf(M, L, E, B) {
      for (var X = -1, ln = M == null ? 0 : M.length; ++X < ln; ) {
        var zn = M[X];
        L(B, zn, E(zn), M);
      }
      return B;
    }
    function et(M, L) {
      for (var E = -1, B = M == null ? 0 : M.length; ++E < B && L(M[E], E, M) !== !1; )
        ;
      return M;
    }
    function af(M, L) {
      for (var E = M == null ? 0 : M.length; E-- && L(M[E], E, M) !== !1; )
        ;
      return M;
    }
    function Gs(M, L) {
      for (var E = -1, B = M == null ? 0 : M.length; ++E < B; )
        if (!L(M[E], E, M))
          return !1;
      return !0;
    }
    function qt(M, L) {
      for (var E = -1, B = M == null ? 0 : M.length, X = 0, ln = []; ++E < B; ) {
        var zn = M[E];
        L(zn, E, M) && (ln[X++] = zn);
      }
      return ln;
    }
    function Je(M, L) {
      var E = M == null ? 0 : M.length;
      return !!E && ie(M, L, 0) > -1;
    }
    function si(M, L, E) {
      for (var B = -1, X = M == null ? 0 : M.length; ++B < X; )
        if (E(L, M[B]))
          return !0;
      return !1;
    }
    function yn(M, L) {
      for (var E = -1, B = M == null ? 0 : M.length, X = Array(B); ++E < B; )
        X[E] = L(M[E], E, M);
      return X;
    }
    function Dt(M, L) {
      for (var E = -1, B = L.length, X = M.length; ++E < B; )
        M[X + E] = L[E];
      return M;
    }
    function ci(M, L, E, B) {
      var X = -1, ln = M == null ? 0 : M.length;
      for (B && ln && (E = M[++X]); ++X < ln; )
        E = L(E, M[X], X, M);
      return E;
    }
    function ff(M, L, E, B) {
      var X = M == null ? 0 : M.length;
      for (B && X && (E = M[--X]); X--; )
        E = L(E, M[X], X, M);
      return E;
    }
    function ai(M, L) {
      for (var E = -1, B = M == null ? 0 : M.length; ++E < B; )
        if (L(M[E], E, M))
          return !0;
      return !1;
    }
    var hf = fi("length");
    function lf(M) {
      return M.split("");
    }
    function uf(M) {
      return M.match(v1) || [];
    }
    function Ys(M, L, E) {
      var B;
      return E(M, function(X, ln, zn) {
        if (L(X, ln, zn))
          return B = ln, !1;
      }), B;
    }
    function Ve(M, L, E, B) {
      for (var X = M.length, ln = E + (B ? 1 : -1); B ? ln-- : ++ln < X; )
        if (L(M[ln], ln, M))
          return ln;
      return -1;
    }
    function ie(M, L, E) {
      return L === L ? Af(M, L, E) : Ve(M, Zs, E);
    }
    function of(M, L, E, B) {
      for (var X = E - 1, ln = M.length; ++X < ln; )
        if (B(M[X], L))
          return X;
      return -1;
    }
    function Zs(M) {
      return M !== M;
    }
    function $s(M, L) {
      var E = M == null ? 0 : M.length;
      return E ? li(M, L) / E : Zt;
    }
    function fi(M) {
      return function(L) {
        return L == null ? e : L[M];
      };
    }
    function hi(M) {
      return function(L) {
        return M == null ? e : M[L];
      };
    }
    function Ks(M, L, E, B, X) {
      return X(M, function(ln, zn, vn) {
        E = B ? (B = !1, ln) : L(E, ln, zn, vn);
      }), E;
    }
    function pf(M, L) {
      var E = M.length;
      for (M.sort(L); E--; )
        M[E] = M[E].value;
      return M;
    }
    function li(M, L) {
      for (var E, B = -1, X = M.length; ++B < X; ) {
        var ln = L(M[B]);
        ln !== e && (E = E === e ? ln : E + ln);
      }
      return E;
    }
    function ui(M, L) {
      for (var E = -1, B = Array(M); ++E < M; )
        B[E] = L(E);
      return B;
    }
    function gf(M, L) {
      return yn(L, function(E) {
        return [E, M[E]];
      });
    }
    function Xs(M) {
      return M && M.slice(0, ks(M) + 1).replace(Vr, "");
    }
    function Kn(M) {
      return function(L) {
        return M(L);
      };
    }
    function oi(M, L) {
      return yn(L, function(E) {
        return M[E];
      });
    }
    function Se(M, L) {
      return M.has(L);
    }
    function Qs(M, L) {
      for (var E = -1, B = M.length; ++E < B && ie(L, M[E], 0) > -1; )
        ;
      return E;
    }
    function Js(M, L) {
      for (var E = M.length; E-- && ie(L, M[E], 0) > -1; )
        ;
      return E;
    }
    function df(M, L) {
      for (var E = M.length, B = 0; E--; )
        M[E] === L && ++B;
      return B;
    }
    var _f = hi(k1), xf = hi(j1);
    function vf(M) {
      return "\\" + tf[M];
    }
    function Mf(M, L) {
      return M == null ? e : M[L];
    }
    function se(M) {
      return X1.test(M);
    }
    function mf(M) {
      return Q1.test(M);
    }
    function yf(M) {
      for (var L, E = []; !(L = M.next()).done; )
        E.push(L.value);
      return E;
    }
    function pi(M) {
      var L = -1, E = Array(M.size);
      return M.forEach(function(B, X) {
        E[++L] = [X, B];
      }), E;
    }
    function Vs(M, L) {
      return function(E) {
        return M(L(E));
      };
    }
    function Ft(M, L) {
      for (var E = -1, B = M.length, X = 0, ln = []; ++E < B; ) {
        var zn = M[E];
        (zn === L || zn === v) && (M[E] = v, ln[X++] = E);
      }
      return ln;
    }
    function ke(M) {
      var L = -1, E = Array(M.size);
      return M.forEach(function(B) {
        E[++L] = B;
      }), E;
    }
    function wf(M) {
      var L = -1, E = Array(M.size);
      return M.forEach(function(B) {
        E[++L] = [B, B];
      }), E;
    }
    function Af(M, L, E) {
      for (var B = E - 1, X = M.length; ++B < X; )
        if (M[B] === L)
          return B;
      return -1;
    }
    function Ef(M, L, E) {
      for (var B = E + 1; B--; )
        if (M[B] === L)
          return B;
      return B;
    }
    function ce(M) {
      return se(M) ? Tf(M) : hf(M);
    }
    function ot(M) {
      return se(M) ? Lf(M) : lf(M);
    }
    function ks(M) {
      for (var L = M.length; L-- && g1.test(M.charAt(L)); )
        ;
      return L;
    }
    var Sf = hi(nf);
    function Tf(M) {
      for (var L = ei.lastIndex = 0; ei.test(M); )
        ++L;
      return L;
    }
    function Lf(M) {
      return M.match(ei) || [];
    }
    function Rf(M) {
      return M.match(K1) || [];
    }
    var If = function M(L) {
      L = L == null ? On : ae.defaults(On.Object(), L, ae.pick(On, J1));
      var E = L.Array, B = L.Date, X = L.Error, ln = L.Function, zn = L.Math, vn = L.Object, gi = L.RegExp, zf = L.String, rt = L.TypeError, je = E.prototype, Cf = ln.prototype, fe = vn.prototype, nr = L["__core-js_shared__"], tr = Cf.toString, _n = fe.hasOwnProperty, bf = 0, js = function() {
        var t = /[^.]+$/.exec(nr && nr.keys && nr.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), er = fe.toString, Of = tr.call(vn), Pf = On._, qf = gi(
        "^" + tr.call(_n).replace(Jr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), rr = Ds ? L.Buffer : e, Ut = L.Symbol, ir = L.Uint8Array, nc = rr ? rr.allocUnsafe : e, sr = Vs(vn.getPrototypeOf, vn), tc = vn.create, ec = fe.propertyIsEnumerable, cr = je.splice, rc = Ut ? Ut.isConcatSpreadable : e, Te = Ut ? Ut.iterator : e, Kt = Ut ? Ut.toStringTag : e, ar = function() {
        try {
          var t = kt(vn, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), Df = L.clearTimeout !== On.clearTimeout && L.clearTimeout, Ff = B && B.now !== On.Date.now && B.now, Uf = L.setTimeout !== On.setTimeout && L.setTimeout, fr = zn.ceil, hr = zn.floor, di = vn.getOwnPropertySymbols, Bf = rr ? rr.isBuffer : e, ic = L.isFinite, Wf = je.join, Nf = Vs(vn.keys, vn), Cn = zn.max, qn = zn.min, Hf = B.now, Gf = L.parseInt, sc = zn.random, Yf = je.reverse, _i = kt(L, "DataView"), Le = kt(L, "Map"), xi = kt(L, "Promise"), he = kt(L, "Set"), Re = kt(L, "WeakMap"), Ie = kt(vn, "create"), lr = Re && new Re(), le = {}, Zf = jt(_i), $f = jt(Le), Kf = jt(xi), Xf = jt(he), Qf = jt(Re), ur = Ut ? Ut.prototype : e, ze = ur ? ur.valueOf : e, cc = ur ? ur.toString : e;
      function u(t) {
        if (Tn(t) && !Q(t) && !(t instanceof an)) {
          if (t instanceof it)
            return t;
          if (_n.call(t, "__wrapped__"))
            return aa(t);
        }
        return new it(t);
      }
      var ue = /* @__PURE__ */ function() {
        function t() {
        }
        return function(r) {
          if (!En(r))
            return {};
          if (tc)
            return tc(r);
          t.prototype = r;
          var i = new t();
          return t.prototype = e, i;
        };
      }();
      function or() {
      }
      function it(t, r) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!r, this.__index__ = 0, this.__values__ = e;
      }
      u.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: f1,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: h1,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: ds,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: u
        }
      }, u.prototype = or.prototype, u.prototype.constructor = u, it.prototype = ue(or.prototype), it.prototype.constructor = it;
      function an(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = _t, this.__views__ = [];
      }
      function Jf() {
        var t = new an(this.__wrapped__);
        return t.__actions__ = Nn(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Nn(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Nn(this.__views__), t;
      }
      function Vf() {
        if (this.__filtered__) {
          var t = new an(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function kf() {
        var t = this.__wrapped__.value(), r = this.__dir__, i = Q(t), c = r < 0, h = i ? t.length : 0, o = lh(0, h, this.__views__), d = o.start, _ = o.end, y = _ - d, I = c ? _ : d - 1, z = this.__iteratees__, b = z.length, P = 0, N = qn(y, this.__takeCount__);
        if (!i || !c && h == y && N == y)
          return zc(t, this.__actions__);
        var Y = [];
        n:
          for (; y-- && P < N; ) {
            I += r;
            for (var tn = -1, Z = t[I]; ++tn < b; ) {
              var cn = z[tn], fn = cn.iteratee, Jn = cn.type, Bn = fn(Z);
              if (Jn == K)
                Z = Bn;
              else if (!Bn) {
                if (Jn == on)
                  continue n;
                break n;
              }
            }
            Y[P++] = Z;
          }
        return Y;
      }
      an.prototype = ue(or.prototype), an.prototype.constructor = an;
      function Xt(t) {
        var r = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++r < i; ) {
          var c = t[r];
          this.set(c[0], c[1]);
        }
      }
      function jf() {
        this.__data__ = Ie ? Ie(null) : {}, this.size = 0;
      }
      function n0(t) {
        var r = this.has(t) && delete this.__data__[t];
        return this.size -= r ? 1 : 0, r;
      }
      function t0(t) {
        var r = this.__data__;
        if (Ie) {
          var i = r[t];
          return i === g ? e : i;
        }
        return _n.call(r, t) ? r[t] : e;
      }
      function e0(t) {
        var r = this.__data__;
        return Ie ? r[t] !== e : _n.call(r, t);
      }
      function r0(t, r) {
        var i = this.__data__;
        return this.size += this.has(t) ? 0 : 1, i[t] = Ie && r === e ? g : r, this;
      }
      Xt.prototype.clear = jf, Xt.prototype.delete = n0, Xt.prototype.get = t0, Xt.prototype.has = e0, Xt.prototype.set = r0;
      function St(t) {
        var r = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++r < i; ) {
          var c = t[r];
          this.set(c[0], c[1]);
        }
      }
      function i0() {
        this.__data__ = [], this.size = 0;
      }
      function s0(t) {
        var r = this.__data__, i = pr(r, t);
        if (i < 0)
          return !1;
        var c = r.length - 1;
        return i == c ? r.pop() : cr.call(r, i, 1), --this.size, !0;
      }
      function c0(t) {
        var r = this.__data__, i = pr(r, t);
        return i < 0 ? e : r[i][1];
      }
      function a0(t) {
        return pr(this.__data__, t) > -1;
      }
      function f0(t, r) {
        var i = this.__data__, c = pr(i, t);
        return c < 0 ? (++this.size, i.push([t, r])) : i[c][1] = r, this;
      }
      St.prototype.clear = i0, St.prototype.delete = s0, St.prototype.get = c0, St.prototype.has = a0, St.prototype.set = f0;
      function Tt(t) {
        var r = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++r < i; ) {
          var c = t[r];
          this.set(c[0], c[1]);
        }
      }
      function h0() {
        this.size = 0, this.__data__ = {
          hash: new Xt(),
          map: new (Le || St)(),
          string: new Xt()
        };
      }
      function l0(t) {
        var r = Sr(this, t).delete(t);
        return this.size -= r ? 1 : 0, r;
      }
      function u0(t) {
        return Sr(this, t).get(t);
      }
      function o0(t) {
        return Sr(this, t).has(t);
      }
      function p0(t, r) {
        var i = Sr(this, t), c = i.size;
        return i.set(t, r), this.size += i.size == c ? 0 : 1, this;
      }
      Tt.prototype.clear = h0, Tt.prototype.delete = l0, Tt.prototype.get = u0, Tt.prototype.has = o0, Tt.prototype.set = p0;
      function Qt(t) {
        var r = -1, i = t == null ? 0 : t.length;
        for (this.__data__ = new Tt(); ++r < i; )
          this.add(t[r]);
      }
      function g0(t) {
        return this.__data__.set(t, g), this;
      }
      function d0(t) {
        return this.__data__.has(t);
      }
      Qt.prototype.add = Qt.prototype.push = g0, Qt.prototype.has = d0;
      function pt(t) {
        var r = this.__data__ = new St(t);
        this.size = r.size;
      }
      function _0() {
        this.__data__ = new St(), this.size = 0;
      }
      function x0(t) {
        var r = this.__data__, i = r.delete(t);
        return this.size = r.size, i;
      }
      function v0(t) {
        return this.__data__.get(t);
      }
      function M0(t) {
        return this.__data__.has(t);
      }
      function m0(t, r) {
        var i = this.__data__;
        if (i instanceof St) {
          var c = i.__data__;
          if (!Le || c.length < a - 1)
            return c.push([t, r]), this.size = ++i.size, this;
          i = this.__data__ = new Tt(c);
        }
        return i.set(t, r), this.size = i.size, this;
      }
      pt.prototype.clear = _0, pt.prototype.delete = x0, pt.prototype.get = v0, pt.prototype.has = M0, pt.prototype.set = m0;
      function ac(t, r) {
        var i = Q(t), c = !i && ne(t), h = !i && !c && Gt(t), o = !i && !c && !h && de(t), d = i || c || h || o, _ = d ? ui(t.length, zf) : [], y = _.length;
        for (var I in t)
          (r || _n.call(t, I)) && !(d && // Safari 9 has enumerable `arguments.length` in strict mode.
          (I == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          h && (I == "offset" || I == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          o && (I == "buffer" || I == "byteLength" || I == "byteOffset") || // Skip index properties.
          zt(I, y))) && _.push(I);
        return _;
      }
      function fc(t) {
        var r = t.length;
        return r ? t[Ri(0, r - 1)] : e;
      }
      function y0(t, r) {
        return Tr(Nn(t), Jt(r, 0, t.length));
      }
      function w0(t) {
        return Tr(Nn(t));
      }
      function vi(t, r, i) {
        (i !== e && !gt(t[r], i) || i === e && !(r in t)) && Lt(t, r, i);
      }
      function Ce(t, r, i) {
        var c = t[r];
        (!(_n.call(t, r) && gt(c, i)) || i === e && !(r in t)) && Lt(t, r, i);
      }
      function pr(t, r) {
        for (var i = t.length; i--; )
          if (gt(t[i][0], r))
            return i;
        return -1;
      }
      function A0(t, r, i, c) {
        return Bt(t, function(h, o, d) {
          r(c, h, i(h), d);
        }), c;
      }
      function hc(t, r) {
        return t && vt(r, bn(r), t);
      }
      function E0(t, r) {
        return t && vt(r, Gn(r), t);
      }
      function Lt(t, r, i) {
        r == "__proto__" && ar ? ar(t, r, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : t[r] = i;
      }
      function Mi(t, r) {
        for (var i = -1, c = r.length, h = E(c), o = t == null; ++i < c; )
          h[i] = o ? e : ji(t, r[i]);
        return h;
      }
      function Jt(t, r, i) {
        return t === t && (i !== e && (t = t <= i ? t : i), r !== e && (t = t >= r ? t : r)), t;
      }
      function st(t, r, i, c, h, o) {
        var d, _ = r & m, y = r & T, I = r & A;
        if (i && (d = h ? i(t, c, h, o) : i(t)), d !== e)
          return d;
        if (!En(t))
          return t;
        var z = Q(t);
        if (z) {
          if (d = oh(t), !_)
            return Nn(t, d);
        } else {
          var b = Dn(t), P = b == Ze || b == us;
          if (Gt(t))
            return Oc(t, _);
          if (b == Et || b == te || P && !h) {
            if (d = y || P ? {} : kc(t), !_)
              return y ? th(t, E0(d, t)) : nh(t, hc(d, t));
          } else {
            if (!Mn[b])
              return h ? t : {};
            d = ph(t, b, _);
          }
        }
        o || (o = new pt());
        var N = o.get(t);
        if (N)
          return N;
        o.set(t, d), La(t) ? t.forEach(function(Z) {
          d.add(st(Z, r, i, Z, t, o));
        }) : Sa(t) && t.forEach(function(Z, cn) {
          d.set(cn, st(Z, r, i, cn, t, o));
        });
        var Y = I ? y ? Bi : Ui : y ? Gn : bn, tn = z ? e : Y(t);
        return et(tn || t, function(Z, cn) {
          tn && (cn = Z, Z = t[cn]), Ce(d, cn, st(Z, r, i, cn, t, o));
        }), d;
      }
      function S0(t) {
        var r = bn(t);
        return function(i) {
          return lc(i, t, r);
        };
      }
      function lc(t, r, i) {
        var c = i.length;
        if (t == null)
          return !c;
        for (t = vn(t); c--; ) {
          var h = i[c], o = r[h], d = t[h];
          if (d === e && !(h in t) || !o(d))
            return !1;
        }
        return !0;
      }
      function uc(t, r, i) {
        if (typeof t != "function")
          throw new rt(l);
        return Ue(function() {
          t.apply(e, i);
        }, r);
      }
      function be(t, r, i, c) {
        var h = -1, o = Je, d = !0, _ = t.length, y = [], I = r.length;
        if (!_)
          return y;
        i && (r = yn(r, Kn(i))), c ? (o = si, d = !1) : r.length >= a && (o = Se, d = !1, r = new Qt(r));
        n:
          for (; ++h < _; ) {
            var z = t[h], b = i == null ? z : i(z);
            if (z = c || z !== 0 ? z : 0, d && b === b) {
              for (var P = I; P--; )
                if (r[P] === b)
                  continue n;
              y.push(z);
            } else o(r, b, c) || y.push(z);
          }
        return y;
      }
      var Bt = Uc(xt), oc = Uc(yi, !0);
      function T0(t, r) {
        var i = !0;
        return Bt(t, function(c, h, o) {
          return i = !!r(c, h, o), i;
        }), i;
      }
      function gr(t, r, i) {
        for (var c = -1, h = t.length; ++c < h; ) {
          var o = t[c], d = r(o);
          if (d != null && (_ === e ? d === d && !Qn(d) : i(d, _)))
            var _ = d, y = o;
        }
        return y;
      }
      function L0(t, r, i, c) {
        var h = t.length;
        for (i = k(i), i < 0 && (i = -i > h ? 0 : h + i), c = c === e || c > h ? h : k(c), c < 0 && (c += h), c = i > c ? 0 : Ia(c); i < c; )
          t[i++] = r;
        return t;
      }
      function pc(t, r) {
        var i = [];
        return Bt(t, function(c, h, o) {
          r(c, h, o) && i.push(c);
        }), i;
      }
      function Pn(t, r, i, c, h) {
        var o = -1, d = t.length;
        for (i || (i = dh), h || (h = []); ++o < d; ) {
          var _ = t[o];
          r > 0 && i(_) ? r > 1 ? Pn(_, r - 1, i, c, h) : Dt(h, _) : c || (h[h.length] = _);
        }
        return h;
      }
      var mi = Bc(), gc = Bc(!0);
      function xt(t, r) {
        return t && mi(t, r, bn);
      }
      function yi(t, r) {
        return t && gc(t, r, bn);
      }
      function dr(t, r) {
        return qt(r, function(i) {
          return Ct(t[i]);
        });
      }
      function Vt(t, r) {
        r = Nt(r, t);
        for (var i = 0, c = r.length; t != null && i < c; )
          t = t[Mt(r[i++])];
        return i && i == c ? t : e;
      }
      function dc(t, r, i) {
        var c = r(t);
        return Q(t) ? c : Dt(c, i(t));
      }
      function Fn(t) {
        return t == null ? t === e ? t1 : ja : Kt && Kt in vn(t) ? hh(t) : wh(t);
      }
      function wi(t, r) {
        return t > r;
      }
      function R0(t, r) {
        return t != null && _n.call(t, r);
      }
      function I0(t, r) {
        return t != null && r in vn(t);
      }
      function z0(t, r, i) {
        return t >= qn(r, i) && t < Cn(r, i);
      }
      function Ai(t, r, i) {
        for (var c = i ? si : Je, h = t[0].length, o = t.length, d = o, _ = E(o), y = 1 / 0, I = []; d--; ) {
          var z = t[d];
          d && r && (z = yn(z, Kn(r))), y = qn(z.length, y), _[d] = !i && (r || h >= 120 && z.length >= 120) ? new Qt(d && z) : e;
        }
        z = t[0];
        var b = -1, P = _[0];
        n:
          for (; ++b < h && I.length < y; ) {
            var N = z[b], Y = r ? r(N) : N;
            if (N = i || N !== 0 ? N : 0, !(P ? Se(P, Y) : c(I, Y, i))) {
              for (d = o; --d; ) {
                var tn = _[d];
                if (!(tn ? Se(tn, Y) : c(t[d], Y, i)))
                  continue n;
              }
              P && P.push(Y), I.push(N);
            }
          }
        return I;
      }
      function C0(t, r, i, c) {
        return xt(t, function(h, o, d) {
          r(c, i(h), o, d);
        }), c;
      }
      function Oe(t, r, i) {
        r = Nt(r, t), t = ea(t, r);
        var c = t == null ? t : t[Mt(at(r))];
        return c == null ? e : $n(c, t, i);
      }
      function _c(t) {
        return Tn(t) && Fn(t) == te;
      }
      function b0(t) {
        return Tn(t) && Fn(t) == Ee;
      }
      function O0(t) {
        return Tn(t) && Fn(t) == Me;
      }
      function Pe(t, r, i, c, h) {
        return t === r ? !0 : t == null || r == null || !Tn(t) && !Tn(r) ? t !== t && r !== r : P0(t, r, i, c, Pe, h);
      }
      function P0(t, r, i, c, h, o) {
        var d = Q(t), _ = Q(r), y = d ? Ge : Dn(t), I = _ ? Ge : Dn(r);
        y = y == te ? Et : y, I = I == te ? Et : I;
        var z = y == Et, b = I == Et, P = y == I;
        if (P && Gt(t)) {
          if (!Gt(r))
            return !1;
          d = !0, z = !1;
        }
        if (P && !z)
          return o || (o = new pt()), d || de(t) ? Qc(t, r, i, c, h, o) : ah(t, r, y, i, c, h, o);
        if (!(i & w)) {
          var N = z && _n.call(t, "__wrapped__"), Y = b && _n.call(r, "__wrapped__");
          if (N || Y) {
            var tn = N ? t.value() : t, Z = Y ? r.value() : r;
            return o || (o = new pt()), h(tn, Z, i, c, o);
          }
        }
        return P ? (o || (o = new pt()), fh(t, r, i, c, h, o)) : !1;
      }
      function q0(t) {
        return Tn(t) && Dn(t) == lt;
      }
      function Ei(t, r, i, c) {
        var h = i.length, o = h, d = !c;
        if (t == null)
          return !o;
        for (t = vn(t); h--; ) {
          var _ = i[h];
          if (d && _[2] ? _[1] !== t[_[0]] : !(_[0] in t))
            return !1;
        }
        for (; ++h < o; ) {
          _ = i[h];
          var y = _[0], I = t[y], z = _[1];
          if (d && _[2]) {
            if (I === e && !(y in t))
              return !1;
          } else {
            var b = new pt();
            if (c)
              var P = c(I, z, y, t, r, b);
            if (!(P === e ? Pe(z, I, w | S, c, b) : P))
              return !1;
          }
        }
        return !0;
      }
      function xc(t) {
        if (!En(t) || xh(t))
          return !1;
        var r = Ct(t) ? qf : E1;
        return r.test(jt(t));
      }
      function D0(t) {
        return Tn(t) && Fn(t) == ye;
      }
      function F0(t) {
        return Tn(t) && Dn(t) == ut;
      }
      function U0(t) {
        return Tn(t) && br(t.length) && !!mn[Fn(t)];
      }
      function vc(t) {
        return typeof t == "function" ? t : t == null ? Yn : typeof t == "object" ? Q(t) ? yc(t[0], t[1]) : mc(t) : Wa(t);
      }
      function Si(t) {
        if (!Fe(t))
          return Nf(t);
        var r = [];
        for (var i in vn(t))
          _n.call(t, i) && i != "constructor" && r.push(i);
        return r;
      }
      function B0(t) {
        if (!En(t))
          return yh(t);
        var r = Fe(t), i = [];
        for (var c in t)
          c == "constructor" && (r || !_n.call(t, c)) || i.push(c);
        return i;
      }
      function Ti(t, r) {
        return t < r;
      }
      function Mc(t, r) {
        var i = -1, c = Hn(t) ? E(t.length) : [];
        return Bt(t, function(h, o, d) {
          c[++i] = r(h, o, d);
        }), c;
      }
      function mc(t) {
        var r = Ni(t);
        return r.length == 1 && r[0][2] ? na(r[0][0], r[0][1]) : function(i) {
          return i === t || Ei(i, t, r);
        };
      }
      function yc(t, r) {
        return Gi(t) && jc(r) ? na(Mt(t), r) : function(i) {
          var c = ji(i, t);
          return c === e && c === r ? ns(i, t) : Pe(r, c, w | S);
        };
      }
      function _r(t, r, i, c, h) {
        t !== r && mi(r, function(o, d) {
          if (h || (h = new pt()), En(o))
            W0(t, r, d, i, _r, c, h);
          else {
            var _ = c ? c(Zi(t, d), o, d + "", t, r, h) : e;
            _ === e && (_ = o), vi(t, d, _);
          }
        }, Gn);
      }
      function W0(t, r, i, c, h, o, d) {
        var _ = Zi(t, i), y = Zi(r, i), I = d.get(y);
        if (I) {
          vi(t, i, I);
          return;
        }
        var z = o ? o(_, y, i + "", t, r, d) : e, b = z === e;
        if (b) {
          var P = Q(y), N = !P && Gt(y), Y = !P && !N && de(y);
          z = y, P || N || Y ? Q(_) ? z = _ : Ln(_) ? z = Nn(_) : N ? (b = !1, z = Oc(y, !0)) : Y ? (b = !1, z = Pc(y, !0)) : z = [] : Be(y) || ne(y) ? (z = _, ne(_) ? z = za(_) : (!En(_) || Ct(_)) && (z = kc(y))) : b = !1;
        }
        b && (d.set(y, z), h(z, y, c, o, d), d.delete(y)), vi(t, i, z);
      }
      function wc(t, r) {
        var i = t.length;
        if (i)
          return r += r < 0 ? i : 0, zt(r, i) ? t[r] : e;
      }
      function Ac(t, r, i) {
        r.length ? r = yn(r, function(o) {
          return Q(o) ? function(d) {
            return Vt(d, o.length === 1 ? o[0] : o);
          } : o;
        }) : r = [Yn];
        var c = -1;
        r = yn(r, Kn(G()));
        var h = Mc(t, function(o, d, _) {
          var y = yn(r, function(I) {
            return I(o);
          });
          return { criteria: y, index: ++c, value: o };
        });
        return pf(h, function(o, d) {
          return j0(o, d, i);
        });
      }
      function N0(t, r) {
        return Ec(t, r, function(i, c) {
          return ns(t, c);
        });
      }
      function Ec(t, r, i) {
        for (var c = -1, h = r.length, o = {}; ++c < h; ) {
          var d = r[c], _ = Vt(t, d);
          i(_, d) && qe(o, Nt(d, t), _);
        }
        return o;
      }
      function H0(t) {
        return function(r) {
          return Vt(r, t);
        };
      }
      function Li(t, r, i, c) {
        var h = c ? of : ie, o = -1, d = r.length, _ = t;
        for (t === r && (r = Nn(r)), i && (_ = yn(t, Kn(i))); ++o < d; )
          for (var y = 0, I = r[o], z = i ? i(I) : I; (y = h(_, z, y, c)) > -1; )
            _ !== t && cr.call(_, y, 1), cr.call(t, y, 1);
        return t;
      }
      function Sc(t, r) {
        for (var i = t ? r.length : 0, c = i - 1; i--; ) {
          var h = r[i];
          if (i == c || h !== o) {
            var o = h;
            zt(h) ? cr.call(t, h, 1) : Ci(t, h);
          }
        }
        return t;
      }
      function Ri(t, r) {
        return t + hr(sc() * (r - t + 1));
      }
      function G0(t, r, i, c) {
        for (var h = -1, o = Cn(fr((r - t) / (i || 1)), 0), d = E(o); o--; )
          d[c ? o : ++h] = t, t += i;
        return d;
      }
      function Ii(t, r) {
        var i = "";
        if (!t || r < 1 || r > Wn)
          return i;
        do
          r % 2 && (i += t), r = hr(r / 2), r && (t += t);
        while (r);
        return i;
      }
      function rn(t, r) {
        return $i(ta(t, r, Yn), t + "");
      }
      function Y0(t) {
        return fc(_e(t));
      }
      function Z0(t, r) {
        var i = _e(t);
        return Tr(i, Jt(r, 0, i.length));
      }
      function qe(t, r, i, c) {
        if (!En(t))
          return t;
        r = Nt(r, t);
        for (var h = -1, o = r.length, d = o - 1, _ = t; _ != null && ++h < o; ) {
          var y = Mt(r[h]), I = i;
          if (y === "__proto__" || y === "constructor" || y === "prototype")
            return t;
          if (h != d) {
            var z = _[y];
            I = c ? c(z, y, _) : e, I === e && (I = En(z) ? z : zt(r[h + 1]) ? [] : {});
          }
          Ce(_, y, I), _ = _[y];
        }
        return t;
      }
      var Tc = lr ? function(t, r) {
        return lr.set(t, r), t;
      } : Yn, $0 = ar ? function(t, r) {
        return ar(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: es(r),
          writable: !0
        });
      } : Yn;
      function K0(t) {
        return Tr(_e(t));
      }
      function ct(t, r, i) {
        var c = -1, h = t.length;
        r < 0 && (r = -r > h ? 0 : h + r), i = i > h ? h : i, i < 0 && (i += h), h = r > i ? 0 : i - r >>> 0, r >>>= 0;
        for (var o = E(h); ++c < h; )
          o[c] = t[c + r];
        return o;
      }
      function X0(t, r) {
        var i;
        return Bt(t, function(c, h, o) {
          return i = r(c, h, o), !i;
        }), !!i;
      }
      function xr(t, r, i) {
        var c = 0, h = t == null ? c : t.length;
        if (typeof r == "number" && r === r && h <= Qa) {
          for (; c < h; ) {
            var o = c + h >>> 1, d = t[o];
            d !== null && !Qn(d) && (i ? d <= r : d < r) ? c = o + 1 : h = o;
          }
          return h;
        }
        return zi(t, r, Yn, i);
      }
      function zi(t, r, i, c) {
        var h = 0, o = t == null ? 0 : t.length;
        if (o === 0)
          return 0;
        r = i(r);
        for (var d = r !== r, _ = r === null, y = Qn(r), I = r === e; h < o; ) {
          var z = hr((h + o) / 2), b = i(t[z]), P = b !== e, N = b === null, Y = b === b, tn = Qn(b);
          if (d)
            var Z = c || Y;
          else I ? Z = Y && (c || P) : _ ? Z = Y && P && (c || !N) : y ? Z = Y && P && !N && (c || !tn) : N || tn ? Z = !1 : Z = c ? b <= r : b < r;
          Z ? h = z + 1 : o = z;
        }
        return qn(o, Xa);
      }
      function Lc(t, r) {
        for (var i = -1, c = t.length, h = 0, o = []; ++i < c; ) {
          var d = t[i], _ = r ? r(d) : d;
          if (!i || !gt(_, y)) {
            var y = _;
            o[h++] = d === 0 ? 0 : d;
          }
        }
        return o;
      }
      function Rc(t) {
        return typeof t == "number" ? t : Qn(t) ? Zt : +t;
      }
      function Xn(t) {
        if (typeof t == "string")
          return t;
        if (Q(t))
          return yn(t, Xn) + "";
        if (Qn(t))
          return cc ? cc.call(t) : "";
        var r = t + "";
        return r == "0" && 1 / t == -Zn ? "-0" : r;
      }
      function Wt(t, r, i) {
        var c = -1, h = Je, o = t.length, d = !0, _ = [], y = _;
        if (i)
          d = !1, h = si;
        else if (o >= a) {
          var I = r ? null : sh(t);
          if (I)
            return ke(I);
          d = !1, h = Se, y = new Qt();
        } else
          y = r ? [] : _;
        n:
          for (; ++c < o; ) {
            var z = t[c], b = r ? r(z) : z;
            if (z = i || z !== 0 ? z : 0, d && b === b) {
              for (var P = y.length; P--; )
                if (y[P] === b)
                  continue n;
              r && y.push(b), _.push(z);
            } else h(y, b, i) || (y !== _ && y.push(b), _.push(z));
          }
        return _;
      }
      function Ci(t, r) {
        return r = Nt(r, t), t = ea(t, r), t == null || delete t[Mt(at(r))];
      }
      function Ic(t, r, i, c) {
        return qe(t, r, i(Vt(t, r)), c);
      }
      function vr(t, r, i, c) {
        for (var h = t.length, o = c ? h : -1; (c ? o-- : ++o < h) && r(t[o], o, t); )
          ;
        return i ? ct(t, c ? 0 : o, c ? o + 1 : h) : ct(t, c ? o + 1 : 0, c ? h : o);
      }
      function zc(t, r) {
        var i = t;
        return i instanceof an && (i = i.value()), ci(r, function(c, h) {
          return h.func.apply(h.thisArg, Dt([c], h.args));
        }, i);
      }
      function bi(t, r, i) {
        var c = t.length;
        if (c < 2)
          return c ? Wt(t[0]) : [];
        for (var h = -1, o = E(c); ++h < c; )
          for (var d = t[h], _ = -1; ++_ < c; )
            _ != h && (o[h] = be(o[h] || d, t[_], r, i));
        return Wt(Pn(o, 1), r, i);
      }
      function Cc(t, r, i) {
        for (var c = -1, h = t.length, o = r.length, d = {}; ++c < h; ) {
          var _ = c < o ? r[c] : e;
          i(d, t[c], _);
        }
        return d;
      }
      function Oi(t) {
        return Ln(t) ? t : [];
      }
      function Pi(t) {
        return typeof t == "function" ? t : Yn;
      }
      function Nt(t, r) {
        return Q(t) ? t : Gi(t, r) ? [t] : ca(pn(t));
      }
      var Q0 = rn;
      function Ht(t, r, i) {
        var c = t.length;
        return i = i === e ? c : i, !r && i >= c ? t : ct(t, r, i);
      }
      var bc = Df || function(t) {
        return On.clearTimeout(t);
      };
      function Oc(t, r) {
        if (r)
          return t.slice();
        var i = t.length, c = nc ? nc(i) : new t.constructor(i);
        return t.copy(c), c;
      }
      function qi(t) {
        var r = new t.constructor(t.byteLength);
        return new ir(r).set(new ir(t)), r;
      }
      function J0(t, r) {
        var i = r ? qi(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.byteLength);
      }
      function V0(t) {
        var r = new t.constructor(t.source, _s.exec(t));
        return r.lastIndex = t.lastIndex, r;
      }
      function k0(t) {
        return ze ? vn(ze.call(t)) : {};
      }
      function Pc(t, r) {
        var i = r ? qi(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.length);
      }
      function qc(t, r) {
        if (t !== r) {
          var i = t !== e, c = t === null, h = t === t, o = Qn(t), d = r !== e, _ = r === null, y = r === r, I = Qn(r);
          if (!_ && !I && !o && t > r || o && d && y && !_ && !I || c && d && y || !i && y || !h)
            return 1;
          if (!c && !o && !I && t < r || I && i && h && !c && !o || _ && i && h || !d && h || !y)
            return -1;
        }
        return 0;
      }
      function j0(t, r, i) {
        for (var c = -1, h = t.criteria, o = r.criteria, d = h.length, _ = i.length; ++c < d; ) {
          var y = qc(h[c], o[c]);
          if (y) {
            if (c >= _)
              return y;
            var I = i[c];
            return y * (I == "desc" ? -1 : 1);
          }
        }
        return t.index - r.index;
      }
      function Dc(t, r, i, c) {
        for (var h = -1, o = t.length, d = i.length, _ = -1, y = r.length, I = Cn(o - d, 0), z = E(y + I), b = !c; ++_ < y; )
          z[_] = r[_];
        for (; ++h < d; )
          (b || h < o) && (z[i[h]] = t[h]);
        for (; I--; )
          z[_++] = t[h++];
        return z;
      }
      function Fc(t, r, i, c) {
        for (var h = -1, o = t.length, d = -1, _ = i.length, y = -1, I = r.length, z = Cn(o - _, 0), b = E(z + I), P = !c; ++h < z; )
          b[h] = t[h];
        for (var N = h; ++y < I; )
          b[N + y] = r[y];
        for (; ++d < _; )
          (P || h < o) && (b[N + i[d]] = t[h++]);
        return b;
      }
      function Nn(t, r) {
        var i = -1, c = t.length;
        for (r || (r = E(c)); ++i < c; )
          r[i] = t[i];
        return r;
      }
      function vt(t, r, i, c) {
        var h = !i;
        i || (i = {});
        for (var o = -1, d = r.length; ++o < d; ) {
          var _ = r[o], y = c ? c(i[_], t[_], _, i, t) : e;
          y === e && (y = t[_]), h ? Lt(i, _, y) : Ce(i, _, y);
        }
        return i;
      }
      function nh(t, r) {
        return vt(t, Hi(t), r);
      }
      function th(t, r) {
        return vt(t, Jc(t), r);
      }
      function Mr(t, r) {
        return function(i, c) {
          var h = Q(i) ? cf : A0, o = r ? r() : {};
          return h(i, t, G(c, 2), o);
        };
      }
      function oe(t) {
        return rn(function(r, i) {
          var c = -1, h = i.length, o = h > 1 ? i[h - 1] : e, d = h > 2 ? i[2] : e;
          for (o = t.length > 3 && typeof o == "function" ? (h--, o) : e, d && Un(i[0], i[1], d) && (o = h < 3 ? e : o, h = 1), r = vn(r); ++c < h; ) {
            var _ = i[c];
            _ && t(r, _, c, o);
          }
          return r;
        });
      }
      function Uc(t, r) {
        return function(i, c) {
          if (i == null)
            return i;
          if (!Hn(i))
            return t(i, c);
          for (var h = i.length, o = r ? h : -1, d = vn(i); (r ? o-- : ++o < h) && c(d[o], o, d) !== !1; )
            ;
          return i;
        };
      }
      function Bc(t) {
        return function(r, i, c) {
          for (var h = -1, o = vn(r), d = c(r), _ = d.length; _--; ) {
            var y = d[t ? _ : ++h];
            if (i(o[y], y, o) === !1)
              break;
          }
          return r;
        };
      }
      function eh(t, r, i) {
        var c = r & R, h = De(t);
        function o() {
          var d = this && this !== On && this instanceof o ? h : t;
          return d.apply(c ? i : this, arguments);
        }
        return o;
      }
      function Wc(t) {
        return function(r) {
          r = pn(r);
          var i = se(r) ? ot(r) : e, c = i ? i[0] : r.charAt(0), h = i ? Ht(i, 1).join("") : r.slice(1);
          return c[t]() + h;
        };
      }
      function pe(t) {
        return function(r) {
          return ci(Ua(Fa(r).replace(Z1, "")), t, "");
        };
      }
      function De(t) {
        return function() {
          var r = arguments;
          switch (r.length) {
            case 0:
              return new t();
            case 1:
              return new t(r[0]);
            case 2:
              return new t(r[0], r[1]);
            case 3:
              return new t(r[0], r[1], r[2]);
            case 4:
              return new t(r[0], r[1], r[2], r[3]);
            case 5:
              return new t(r[0], r[1], r[2], r[3], r[4]);
            case 6:
              return new t(r[0], r[1], r[2], r[3], r[4], r[5]);
            case 7:
              return new t(r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
          }
          var i = ue(t.prototype), c = t.apply(i, r);
          return En(c) ? c : i;
        };
      }
      function rh(t, r, i) {
        var c = De(t);
        function h() {
          for (var o = arguments.length, d = E(o), _ = o, y = ge(h); _--; )
            d[_] = arguments[_];
          var I = o < 3 && d[0] !== y && d[o - 1] !== y ? [] : Ft(d, y);
          if (o -= I.length, o < i)
            return Zc(
              t,
              r,
              mr,
              h.placeholder,
              e,
              d,
              I,
              e,
              e,
              i - o
            );
          var z = this && this !== On && this instanceof h ? c : t;
          return $n(z, this, d);
        }
        return h;
      }
      function Nc(t) {
        return function(r, i, c) {
          var h = vn(r);
          if (!Hn(r)) {
            var o = G(i, 3);
            r = bn(r), i = function(_) {
              return o(h[_], _, h);
            };
          }
          var d = t(r, i, c);
          return d > -1 ? h[o ? r[d] : d] : e;
        };
      }
      function Hc(t) {
        return It(function(r) {
          var i = r.length, c = i, h = it.prototype.thru;
          for (t && r.reverse(); c--; ) {
            var o = r[c];
            if (typeof o != "function")
              throw new rt(l);
            if (h && !d && Er(o) == "wrapper")
              var d = new it([], !0);
          }
          for (c = d ? c : i; ++c < i; ) {
            o = r[c];
            var _ = Er(o), y = _ == "wrapper" ? Wi(o) : e;
            y && Yi(y[0]) && y[1] == (q | W | O | en) && !y[4].length && y[9] == 1 ? d = d[Er(y[0])].apply(d, y[3]) : d = o.length == 1 && Yi(o) ? d[_]() : d.thru(o);
          }
          return function() {
            var I = arguments, z = I[0];
            if (d && I.length == 1 && Q(z))
              return d.plant(z).value();
            for (var b = 0, P = i ? r[b].apply(this, I) : z; ++b < i; )
              P = r[b].call(this, P);
            return P;
          };
        });
      }
      function mr(t, r, i, c, h, o, d, _, y, I) {
        var z = r & q, b = r & R, P = r & C, N = r & (W | F), Y = r & nn, tn = P ? e : De(t);
        function Z() {
          for (var cn = arguments.length, fn = E(cn), Jn = cn; Jn--; )
            fn[Jn] = arguments[Jn];
          if (N)
            var Bn = ge(Z), Vn = df(fn, Bn);
          if (c && (fn = Dc(fn, c, h, N)), o && (fn = Fc(fn, o, d, N)), cn -= Vn, N && cn < I) {
            var Rn = Ft(fn, Bn);
            return Zc(
              t,
              r,
              mr,
              Z.placeholder,
              i,
              fn,
              Rn,
              _,
              y,
              I - cn
            );
          }
          var dt = b ? i : this, Ot = P ? dt[t] : t;
          return cn = fn.length, _ ? fn = Ah(fn, _) : Y && cn > 1 && fn.reverse(), z && y < cn && (fn.length = y), this && this !== On && this instanceof Z && (Ot = tn || De(Ot)), Ot.apply(dt, fn);
        }
        return Z;
      }
      function Gc(t, r) {
        return function(i, c) {
          return C0(i, t, r(c), {});
        };
      }
      function yr(t, r) {
        return function(i, c) {
          var h;
          if (i === e && c === e)
            return r;
          if (i !== e && (h = i), c !== e) {
            if (h === e)
              return c;
            typeof i == "string" || typeof c == "string" ? (i = Xn(i), c = Xn(c)) : (i = Rc(i), c = Rc(c)), h = t(i, c);
          }
          return h;
        };
      }
      function Di(t) {
        return It(function(r) {
          return r = yn(r, Kn(G())), rn(function(i) {
            var c = this;
            return t(r, function(h) {
              return $n(h, c, i);
            });
          });
        });
      }
      function wr(t, r) {
        r = r === e ? " " : Xn(r);
        var i = r.length;
        if (i < 2)
          return i ? Ii(r, t) : r;
        var c = Ii(r, fr(t / ce(r)));
        return se(r) ? Ht(ot(c), 0, t).join("") : c.slice(0, t);
      }
      function ih(t, r, i, c) {
        var h = r & R, o = De(t);
        function d() {
          for (var _ = -1, y = arguments.length, I = -1, z = c.length, b = E(z + y), P = this && this !== On && this instanceof d ? o : t; ++I < z; )
            b[I] = c[I];
          for (; y--; )
            b[I++] = arguments[++_];
          return $n(P, h ? i : this, b);
        }
        return d;
      }
      function Yc(t) {
        return function(r, i, c) {
          return c && typeof c != "number" && Un(r, i, c) && (i = c = e), r = bt(r), i === e ? (i = r, r = 0) : i = bt(i), c = c === e ? r < i ? 1 : -1 : bt(c), G0(r, i, c, t);
        };
      }
      function Ar(t) {
        return function(r, i) {
          return typeof r == "string" && typeof i == "string" || (r = ft(r), i = ft(i)), t(r, i);
        };
      }
      function Zc(t, r, i, c, h, o, d, _, y, I) {
        var z = r & W, b = z ? d : e, P = z ? e : d, N = z ? o : e, Y = z ? e : o;
        r |= z ? O : U, r &= ~(z ? U : O), r & D || (r &= ~(R | C));
        var tn = [
          t,
          r,
          h,
          N,
          b,
          Y,
          P,
          _,
          y,
          I
        ], Z = i.apply(e, tn);
        return Yi(t) && ra(Z, tn), Z.placeholder = c, ia(Z, t, r);
      }
      function Fi(t) {
        var r = zn[t];
        return function(i, c) {
          if (i = ft(i), c = c == null ? 0 : qn(k(c), 292), c && ic(i)) {
            var h = (pn(i) + "e").split("e"), o = r(h[0] + "e" + (+h[1] + c));
            return h = (pn(o) + "e").split("e"), +(h[0] + "e" + (+h[1] - c));
          }
          return r(i);
        };
      }
      var sh = he && 1 / ke(new he([, -0]))[1] == Zn ? function(t) {
        return new he(t);
      } : ss;
      function $c(t) {
        return function(r) {
          var i = Dn(r);
          return i == lt ? pi(r) : i == ut ? wf(r) : gf(r, t(r));
        };
      }
      function Rt(t, r, i, c, h, o, d, _) {
        var y = r & C;
        if (!y && typeof t != "function")
          throw new rt(l);
        var I = c ? c.length : 0;
        if (I || (r &= ~(O | U), c = h = e), d = d === e ? d : Cn(k(d), 0), _ = _ === e ? _ : k(_), I -= h ? h.length : 0, r & U) {
          var z = c, b = h;
          c = h = e;
        }
        var P = y ? e : Wi(t), N = [
          t,
          r,
          i,
          c,
          h,
          z,
          b,
          o,
          d,
          _
        ];
        if (P && mh(N, P), t = N[0], r = N[1], i = N[2], c = N[3], h = N[4], _ = N[9] = N[9] === e ? y ? 0 : t.length : Cn(N[9] - I, 0), !_ && r & (W | F) && (r &= ~(W | F)), !r || r == R)
          var Y = eh(t, r, i);
        else r == W || r == F ? Y = rh(t, r, _) : (r == O || r == (R | O)) && !h.length ? Y = ih(t, r, i, c) : Y = mr.apply(e, N);
        var tn = P ? Tc : ra;
        return ia(tn(Y, N), t, r);
      }
      function Kc(t, r, i, c) {
        return t === e || gt(t, fe[i]) && !_n.call(c, i) ? r : t;
      }
      function Xc(t, r, i, c, h, o) {
        return En(t) && En(r) && (o.set(r, t), _r(t, r, e, Xc, o), o.delete(r)), t;
      }
      function ch(t) {
        return Be(t) ? e : t;
      }
      function Qc(t, r, i, c, h, o) {
        var d = i & w, _ = t.length, y = r.length;
        if (_ != y && !(d && y > _))
          return !1;
        var I = o.get(t), z = o.get(r);
        if (I && z)
          return I == r && z == t;
        var b = -1, P = !0, N = i & S ? new Qt() : e;
        for (o.set(t, r), o.set(r, t); ++b < _; ) {
          var Y = t[b], tn = r[b];
          if (c)
            var Z = d ? c(tn, Y, b, r, t, o) : c(Y, tn, b, t, r, o);
          if (Z !== e) {
            if (Z)
              continue;
            P = !1;
            break;
          }
          if (N) {
            if (!ai(r, function(cn, fn) {
              if (!Se(N, fn) && (Y === cn || h(Y, cn, i, c, o)))
                return N.push(fn);
            })) {
              P = !1;
              break;
            }
          } else if (!(Y === tn || h(Y, tn, i, c, o))) {
            P = !1;
            break;
          }
        }
        return o.delete(t), o.delete(r), P;
      }
      function ah(t, r, i, c, h, o, d) {
        switch (i) {
          case ee:
            if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset)
              return !1;
            t = t.buffer, r = r.buffer;
          case Ee:
            return !(t.byteLength != r.byteLength || !o(new ir(t), new ir(r)));
          case ve:
          case Me:
          case me:
            return gt(+t, +r);
          case Ye:
            return t.name == r.name && t.message == r.message;
          case ye:
          case we:
            return t == r + "";
          case lt:
            var _ = pi;
          case ut:
            var y = c & w;
            if (_ || (_ = ke), t.size != r.size && !y)
              return !1;
            var I = d.get(t);
            if (I)
              return I == r;
            c |= S, d.set(t, r);
            var z = Qc(_(t), _(r), c, h, o, d);
            return d.delete(t), z;
          case $e:
            if (ze)
              return ze.call(t) == ze.call(r);
        }
        return !1;
      }
      function fh(t, r, i, c, h, o) {
        var d = i & w, _ = Ui(t), y = _.length, I = Ui(r), z = I.length;
        if (y != z && !d)
          return !1;
        for (var b = y; b--; ) {
          var P = _[b];
          if (!(d ? P in r : _n.call(r, P)))
            return !1;
        }
        var N = o.get(t), Y = o.get(r);
        if (N && Y)
          return N == r && Y == t;
        var tn = !0;
        o.set(t, r), o.set(r, t);
        for (var Z = d; ++b < y; ) {
          P = _[b];
          var cn = t[P], fn = r[P];
          if (c)
            var Jn = d ? c(fn, cn, P, r, t, o) : c(cn, fn, P, t, r, o);
          if (!(Jn === e ? cn === fn || h(cn, fn, i, c, o) : Jn)) {
            tn = !1;
            break;
          }
          Z || (Z = P == "constructor");
        }
        if (tn && !Z) {
          var Bn = t.constructor, Vn = r.constructor;
          Bn != Vn && "constructor" in t && "constructor" in r && !(typeof Bn == "function" && Bn instanceof Bn && typeof Vn == "function" && Vn instanceof Vn) && (tn = !1);
        }
        return o.delete(t), o.delete(r), tn;
      }
      function It(t) {
        return $i(ta(t, e, la), t + "");
      }
      function Ui(t) {
        return dc(t, bn, Hi);
      }
      function Bi(t) {
        return dc(t, Gn, Jc);
      }
      var Wi = lr ? function(t) {
        return lr.get(t);
      } : ss;
      function Er(t) {
        for (var r = t.name + "", i = le[r], c = _n.call(le, r) ? i.length : 0; c--; ) {
          var h = i[c], o = h.func;
          if (o == null || o == t)
            return h.name;
        }
        return r;
      }
      function ge(t) {
        var r = _n.call(u, "placeholder") ? u : t;
        return r.placeholder;
      }
      function G() {
        var t = u.iteratee || rs;
        return t = t === rs ? vc : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Sr(t, r) {
        var i = t.__data__;
        return _h(r) ? i[typeof r == "string" ? "string" : "hash"] : i.map;
      }
      function Ni(t) {
        for (var r = bn(t), i = r.length; i--; ) {
          var c = r[i], h = t[c];
          r[i] = [c, h, jc(h)];
        }
        return r;
      }
      function kt(t, r) {
        var i = Mf(t, r);
        return xc(i) ? i : e;
      }
      function hh(t) {
        var r = _n.call(t, Kt), i = t[Kt];
        try {
          t[Kt] = e;
          var c = !0;
        } catch {
        }
        var h = er.call(t);
        return c && (r ? t[Kt] = i : delete t[Kt]), h;
      }
      var Hi = di ? function(t) {
        return t == null ? [] : (t = vn(t), qt(di(t), function(r) {
          return ec.call(t, r);
        }));
      } : cs, Jc = di ? function(t) {
        for (var r = []; t; )
          Dt(r, Hi(t)), t = sr(t);
        return r;
      } : cs, Dn = Fn;
      (_i && Dn(new _i(new ArrayBuffer(1))) != ee || Le && Dn(new Le()) != lt || xi && Dn(xi.resolve()) != os || he && Dn(new he()) != ut || Re && Dn(new Re()) != Ae) && (Dn = function(t) {
        var r = Fn(t), i = r == Et ? t.constructor : e, c = i ? jt(i) : "";
        if (c)
          switch (c) {
            case Zf:
              return ee;
            case $f:
              return lt;
            case Kf:
              return os;
            case Xf:
              return ut;
            case Qf:
              return Ae;
          }
        return r;
      });
      function lh(t, r, i) {
        for (var c = -1, h = i.length; ++c < h; ) {
          var o = i[c], d = o.size;
          switch (o.type) {
            case "drop":
              t += d;
              break;
            case "dropRight":
              r -= d;
              break;
            case "take":
              r = qn(r, t + d);
              break;
            case "takeRight":
              t = Cn(t, r - d);
              break;
          }
        }
        return { start: t, end: r };
      }
      function uh(t) {
        var r = t.match(_1);
        return r ? r[1].split(x1) : [];
      }
      function Vc(t, r, i) {
        r = Nt(r, t);
        for (var c = -1, h = r.length, o = !1; ++c < h; ) {
          var d = Mt(r[c]);
          if (!(o = t != null && i(t, d)))
            break;
          t = t[d];
        }
        return o || ++c != h ? o : (h = t == null ? 0 : t.length, !!h && br(h) && zt(d, h) && (Q(t) || ne(t)));
      }
      function oh(t) {
        var r = t.length, i = new t.constructor(r);
        return r && typeof t[0] == "string" && _n.call(t, "index") && (i.index = t.index, i.input = t.input), i;
      }
      function kc(t) {
        return typeof t.constructor == "function" && !Fe(t) ? ue(sr(t)) : {};
      }
      function ph(t, r, i) {
        var c = t.constructor;
        switch (r) {
          case Ee:
            return qi(t);
          case ve:
          case Me:
            return new c(+t);
          case ee:
            return J0(t, i);
          case Nr:
          case Hr:
          case Gr:
          case Yr:
          case Zr:
          case $r:
          case Kr:
          case Xr:
          case Qr:
            return Pc(t, i);
          case lt:
            return new c();
          case me:
          case we:
            return new c(t);
          case ye:
            return V0(t);
          case ut:
            return new c();
          case $e:
            return k0(t);
        }
      }
      function gh(t, r) {
        var i = r.length;
        if (!i)
          return t;
        var c = i - 1;
        return r[c] = (i > 1 ? "& " : "") + r[c], r = r.join(i > 2 ? ", " : " "), t.replace(d1, `{
/* [wrapped with ` + r + `] */
`);
      }
      function dh(t) {
        return Q(t) || ne(t) || !!(rc && t && t[rc]);
      }
      function zt(t, r) {
        var i = typeof t;
        return r = r ?? Wn, !!r && (i == "number" || i != "symbol" && T1.test(t)) && t > -1 && t % 1 == 0 && t < r;
      }
      function Un(t, r, i) {
        if (!En(i))
          return !1;
        var c = typeof r;
        return (c == "number" ? Hn(i) && zt(r, i.length) : c == "string" && r in i) ? gt(i[r], t) : !1;
      }
      function Gi(t, r) {
        if (Q(t))
          return !1;
        var i = typeof t;
        return i == "number" || i == "symbol" || i == "boolean" || t == null || Qn(t) ? !0 : u1.test(t) || !l1.test(t) || r != null && t in vn(r);
      }
      function _h(t) {
        var r = typeof t;
        return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
      }
      function Yi(t) {
        var r = Er(t), i = u[r];
        if (typeof i != "function" || !(r in an.prototype))
          return !1;
        if (t === i)
          return !0;
        var c = Wi(i);
        return !!c && t === c[0];
      }
      function xh(t) {
        return !!js && js in t;
      }
      var vh = nr ? Ct : as;
      function Fe(t) {
        var r = t && t.constructor, i = typeof r == "function" && r.prototype || fe;
        return t === i;
      }
      function jc(t) {
        return t === t && !En(t);
      }
      function na(t, r) {
        return function(i) {
          return i == null ? !1 : i[t] === r && (r !== e || t in vn(i));
        };
      }
      function Mh(t) {
        var r = zr(t, function(c) {
          return i.size === x && i.clear(), c;
        }), i = r.cache;
        return r;
      }
      function mh(t, r) {
        var i = t[1], c = r[1], h = i | c, o = h < (R | C | q), d = c == q && i == W || c == q && i == en && t[7].length <= r[8] || c == (q | en) && r[7].length <= r[8] && i == W;
        if (!(o || d))
          return t;
        c & R && (t[2] = r[2], h |= i & R ? 0 : D);
        var _ = r[3];
        if (_) {
          var y = t[3];
          t[3] = y ? Dc(y, _, r[4]) : _, t[4] = y ? Ft(t[3], v) : r[4];
        }
        return _ = r[5], _ && (y = t[5], t[5] = y ? Fc(y, _, r[6]) : _, t[6] = y ? Ft(t[5], v) : r[6]), _ = r[7], _ && (t[7] = _), c & q && (t[8] = t[8] == null ? r[8] : qn(t[8], r[8])), t[9] == null && (t[9] = r[9]), t[0] = r[0], t[1] = h, t;
      }
      function yh(t) {
        var r = [];
        if (t != null)
          for (var i in vn(t))
            r.push(i);
        return r;
      }
      function wh(t) {
        return er.call(t);
      }
      function ta(t, r, i) {
        return r = Cn(r === e ? t.length - 1 : r, 0), function() {
          for (var c = arguments, h = -1, o = Cn(c.length - r, 0), d = E(o); ++h < o; )
            d[h] = c[r + h];
          h = -1;
          for (var _ = E(r + 1); ++h < r; )
            _[h] = c[h];
          return _[r] = i(d), $n(t, this, _);
        };
      }
      function ea(t, r) {
        return r.length < 2 ? t : Vt(t, ct(r, 0, -1));
      }
      function Ah(t, r) {
        for (var i = t.length, c = qn(r.length, i), h = Nn(t); c--; ) {
          var o = r[c];
          t[c] = zt(o, i) ? h[o] : e;
        }
        return t;
      }
      function Zi(t, r) {
        if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__")
          return t[r];
      }
      var ra = sa(Tc), Ue = Uf || function(t, r) {
        return On.setTimeout(t, r);
      }, $i = sa($0);
      function ia(t, r, i) {
        var c = r + "";
        return $i(t, gh(c, Eh(uh(c), i)));
      }
      function sa(t) {
        var r = 0, i = 0;
        return function() {
          var c = Hf(), h = dn - (c - i);
          if (i = c, h > 0) {
            if (++r >= xn)
              return arguments[0];
          } else
            r = 0;
          return t.apply(e, arguments);
        };
      }
      function Tr(t, r) {
        var i = -1, c = t.length, h = c - 1;
        for (r = r === e ? c : r; ++i < r; ) {
          var o = Ri(i, h), d = t[o];
          t[o] = t[i], t[i] = d;
        }
        return t.length = r, t;
      }
      var ca = Mh(function(t) {
        var r = [];
        return t.charCodeAt(0) === 46 && r.push(""), t.replace(o1, function(i, c, h, o) {
          r.push(h ? o.replace(m1, "$1") : c || i);
        }), r;
      });
      function Mt(t) {
        if (typeof t == "string" || Qn(t))
          return t;
        var r = t + "";
        return r == "0" && 1 / t == -Zn ? "-0" : r;
      }
      function jt(t) {
        if (t != null) {
          try {
            return tr.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function Eh(t, r) {
        return et(Ja, function(i) {
          var c = "_." + i[0];
          r & i[1] && !Je(t, c) && t.push(c);
        }), t.sort();
      }
      function aa(t) {
        if (t instanceof an)
          return t.clone();
        var r = new it(t.__wrapped__, t.__chain__);
        return r.__actions__ = Nn(t.__actions__), r.__index__ = t.__index__, r.__values__ = t.__values__, r;
      }
      function Sh(t, r, i) {
        (i ? Un(t, r, i) : r === e) ? r = 1 : r = Cn(k(r), 0);
        var c = t == null ? 0 : t.length;
        if (!c || r < 1)
          return [];
        for (var h = 0, o = 0, d = E(fr(c / r)); h < c; )
          d[o++] = ct(t, h, h += r);
        return d;
      }
      function Th(t) {
        for (var r = -1, i = t == null ? 0 : t.length, c = 0, h = []; ++r < i; ) {
          var o = t[r];
          o && (h[c++] = o);
        }
        return h;
      }
      function Lh() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var r = E(t - 1), i = arguments[0], c = t; c--; )
          r[c - 1] = arguments[c];
        return Dt(Q(i) ? Nn(i) : [i], Pn(r, 1));
      }
      var Rh = rn(function(t, r) {
        return Ln(t) ? be(t, Pn(r, 1, Ln, !0)) : [];
      }), Ih = rn(function(t, r) {
        var i = at(r);
        return Ln(i) && (i = e), Ln(t) ? be(t, Pn(r, 1, Ln, !0), G(i, 2)) : [];
      }), zh = rn(function(t, r) {
        var i = at(r);
        return Ln(i) && (i = e), Ln(t) ? be(t, Pn(r, 1, Ln, !0), e, i) : [];
      });
      function Ch(t, r, i) {
        var c = t == null ? 0 : t.length;
        return c ? (r = i || r === e ? 1 : k(r), ct(t, r < 0 ? 0 : r, c)) : [];
      }
      function bh(t, r, i) {
        var c = t == null ? 0 : t.length;
        return c ? (r = i || r === e ? 1 : k(r), r = c - r, ct(t, 0, r < 0 ? 0 : r)) : [];
      }
      function Oh(t, r) {
        return t && t.length ? vr(t, G(r, 3), !0, !0) : [];
      }
      function Ph(t, r) {
        return t && t.length ? vr(t, G(r, 3), !0) : [];
      }
      function qh(t, r, i, c) {
        var h = t == null ? 0 : t.length;
        return h ? (i && typeof i != "number" && Un(t, r, i) && (i = 0, c = h), L0(t, r, i, c)) : [];
      }
      function fa(t, r, i) {
        var c = t == null ? 0 : t.length;
        if (!c)
          return -1;
        var h = i == null ? 0 : k(i);
        return h < 0 && (h = Cn(c + h, 0)), Ve(t, G(r, 3), h);
      }
      function ha(t, r, i) {
        var c = t == null ? 0 : t.length;
        if (!c)
          return -1;
        var h = c - 1;
        return i !== e && (h = k(i), h = i < 0 ? Cn(c + h, 0) : qn(h, c - 1)), Ve(t, G(r, 3), h, !0);
      }
      function la(t) {
        var r = t == null ? 0 : t.length;
        return r ? Pn(t, 1) : [];
      }
      function Dh(t) {
        var r = t == null ? 0 : t.length;
        return r ? Pn(t, Zn) : [];
      }
      function Fh(t, r) {
        var i = t == null ? 0 : t.length;
        return i ? (r = r === e ? 1 : k(r), Pn(t, r)) : [];
      }
      function Uh(t) {
        for (var r = -1, i = t == null ? 0 : t.length, c = {}; ++r < i; ) {
          var h = t[r];
          c[h[0]] = h[1];
        }
        return c;
      }
      function ua(t) {
        return t && t.length ? t[0] : e;
      }
      function Bh(t, r, i) {
        var c = t == null ? 0 : t.length;
        if (!c)
          return -1;
        var h = i == null ? 0 : k(i);
        return h < 0 && (h = Cn(c + h, 0)), ie(t, r, h);
      }
      function Wh(t) {
        var r = t == null ? 0 : t.length;
        return r ? ct(t, 0, -1) : [];
      }
      var Nh = rn(function(t) {
        var r = yn(t, Oi);
        return r.length && r[0] === t[0] ? Ai(r) : [];
      }), Hh = rn(function(t) {
        var r = at(t), i = yn(t, Oi);
        return r === at(i) ? r = e : i.pop(), i.length && i[0] === t[0] ? Ai(i, G(r, 2)) : [];
      }), Gh = rn(function(t) {
        var r = at(t), i = yn(t, Oi);
        return r = typeof r == "function" ? r : e, r && i.pop(), i.length && i[0] === t[0] ? Ai(i, e, r) : [];
      });
      function Yh(t, r) {
        return t == null ? "" : Wf.call(t, r);
      }
      function at(t) {
        var r = t == null ? 0 : t.length;
        return r ? t[r - 1] : e;
      }
      function Zh(t, r, i) {
        var c = t == null ? 0 : t.length;
        if (!c)
          return -1;
        var h = c;
        return i !== e && (h = k(i), h = h < 0 ? Cn(c + h, 0) : qn(h, c - 1)), r === r ? Ef(t, r, h) : Ve(t, Zs, h, !0);
      }
      function $h(t, r) {
        return t && t.length ? wc(t, k(r)) : e;
      }
      var Kh = rn(oa);
      function oa(t, r) {
        return t && t.length && r && r.length ? Li(t, r) : t;
      }
      function Xh(t, r, i) {
        return t && t.length && r && r.length ? Li(t, r, G(i, 2)) : t;
      }
      function Qh(t, r, i) {
        return t && t.length && r && r.length ? Li(t, r, e, i) : t;
      }
      var Jh = It(function(t, r) {
        var i = t == null ? 0 : t.length, c = Mi(t, r);
        return Sc(t, yn(r, function(h) {
          return zt(h, i) ? +h : h;
        }).sort(qc)), c;
      });
      function Vh(t, r) {
        var i = [];
        if (!(t && t.length))
          return i;
        var c = -1, h = [], o = t.length;
        for (r = G(r, 3); ++c < o; ) {
          var d = t[c];
          r(d, c, t) && (i.push(d), h.push(c));
        }
        return Sc(t, h), i;
      }
      function Ki(t) {
        return t == null ? t : Yf.call(t);
      }
      function kh(t, r, i) {
        var c = t == null ? 0 : t.length;
        return c ? (i && typeof i != "number" && Un(t, r, i) ? (r = 0, i = c) : (r = r == null ? 0 : k(r), i = i === e ? c : k(i)), ct(t, r, i)) : [];
      }
      function jh(t, r) {
        return xr(t, r);
      }
      function nl(t, r, i) {
        return zi(t, r, G(i, 2));
      }
      function tl(t, r) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var c = xr(t, r);
          if (c < i && gt(t[c], r))
            return c;
        }
        return -1;
      }
      function el(t, r) {
        return xr(t, r, !0);
      }
      function rl(t, r, i) {
        return zi(t, r, G(i, 2), !0);
      }
      function il(t, r) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var c = xr(t, r, !0) - 1;
          if (gt(t[c], r))
            return c;
        }
        return -1;
      }
      function sl(t) {
        return t && t.length ? Lc(t) : [];
      }
      function cl(t, r) {
        return t && t.length ? Lc(t, G(r, 2)) : [];
      }
      function al(t) {
        var r = t == null ? 0 : t.length;
        return r ? ct(t, 1, r) : [];
      }
      function fl(t, r, i) {
        return t && t.length ? (r = i || r === e ? 1 : k(r), ct(t, 0, r < 0 ? 0 : r)) : [];
      }
      function hl(t, r, i) {
        var c = t == null ? 0 : t.length;
        return c ? (r = i || r === e ? 1 : k(r), r = c - r, ct(t, r < 0 ? 0 : r, c)) : [];
      }
      function ll(t, r) {
        return t && t.length ? vr(t, G(r, 3), !1, !0) : [];
      }
      function ul(t, r) {
        return t && t.length ? vr(t, G(r, 3)) : [];
      }
      var ol = rn(function(t) {
        return Wt(Pn(t, 1, Ln, !0));
      }), pl = rn(function(t) {
        var r = at(t);
        return Ln(r) && (r = e), Wt(Pn(t, 1, Ln, !0), G(r, 2));
      }), gl = rn(function(t) {
        var r = at(t);
        return r = typeof r == "function" ? r : e, Wt(Pn(t, 1, Ln, !0), e, r);
      });
      function dl(t) {
        return t && t.length ? Wt(t) : [];
      }
      function _l(t, r) {
        return t && t.length ? Wt(t, G(r, 2)) : [];
      }
      function xl(t, r) {
        return r = typeof r == "function" ? r : e, t && t.length ? Wt(t, e, r) : [];
      }
      function Xi(t) {
        if (!(t && t.length))
          return [];
        var r = 0;
        return t = qt(t, function(i) {
          if (Ln(i))
            return r = Cn(i.length, r), !0;
        }), ui(r, function(i) {
          return yn(t, fi(i));
        });
      }
      function pa(t, r) {
        if (!(t && t.length))
          return [];
        var i = Xi(t);
        return r == null ? i : yn(i, function(c) {
          return $n(r, e, c);
        });
      }
      var vl = rn(function(t, r) {
        return Ln(t) ? be(t, r) : [];
      }), Ml = rn(function(t) {
        return bi(qt(t, Ln));
      }), ml = rn(function(t) {
        var r = at(t);
        return Ln(r) && (r = e), bi(qt(t, Ln), G(r, 2));
      }), yl = rn(function(t) {
        var r = at(t);
        return r = typeof r == "function" ? r : e, bi(qt(t, Ln), e, r);
      }), wl = rn(Xi);
      function Al(t, r) {
        return Cc(t || [], r || [], Ce);
      }
      function El(t, r) {
        return Cc(t || [], r || [], qe);
      }
      var Sl = rn(function(t) {
        var r = t.length, i = r > 1 ? t[r - 1] : e;
        return i = typeof i == "function" ? (t.pop(), i) : e, pa(t, i);
      });
      function ga(t) {
        var r = u(t);
        return r.__chain__ = !0, r;
      }
      function Tl(t, r) {
        return r(t), t;
      }
      function Lr(t, r) {
        return r(t);
      }
      var Ll = It(function(t) {
        var r = t.length, i = r ? t[0] : 0, c = this.__wrapped__, h = function(o) {
          return Mi(o, t);
        };
        return r > 1 || this.__actions__.length || !(c instanceof an) || !zt(i) ? this.thru(h) : (c = c.slice(i, +i + (r ? 1 : 0)), c.__actions__.push({
          func: Lr,
          args: [h],
          thisArg: e
        }), new it(c, this.__chain__).thru(function(o) {
          return r && !o.length && o.push(e), o;
        }));
      });
      function Rl() {
        return ga(this);
      }
      function Il() {
        return new it(this.value(), this.__chain__);
      }
      function zl() {
        this.__values__ === e && (this.__values__ = Ra(this.value()));
        var t = this.__index__ >= this.__values__.length, r = t ? e : this.__values__[this.__index__++];
        return { done: t, value: r };
      }
      function Cl() {
        return this;
      }
      function bl(t) {
        for (var r, i = this; i instanceof or; ) {
          var c = aa(i);
          c.__index__ = 0, c.__values__ = e, r ? h.__wrapped__ = c : r = c;
          var h = c;
          i = i.__wrapped__;
        }
        return h.__wrapped__ = t, r;
      }
      function Ol() {
        var t = this.__wrapped__;
        if (t instanceof an) {
          var r = t;
          return this.__actions__.length && (r = new an(this)), r = r.reverse(), r.__actions__.push({
            func: Lr,
            args: [Ki],
            thisArg: e
          }), new it(r, this.__chain__);
        }
        return this.thru(Ki);
      }
      function Pl() {
        return zc(this.__wrapped__, this.__actions__);
      }
      var ql = Mr(function(t, r, i) {
        _n.call(t, i) ? ++t[i] : Lt(t, i, 1);
      });
      function Dl(t, r, i) {
        var c = Q(t) ? Gs : T0;
        return i && Un(t, r, i) && (r = e), c(t, G(r, 3));
      }
      function Fl(t, r) {
        var i = Q(t) ? qt : pc;
        return i(t, G(r, 3));
      }
      var Ul = Nc(fa), Bl = Nc(ha);
      function Wl(t, r) {
        return Pn(Rr(t, r), 1);
      }
      function Nl(t, r) {
        return Pn(Rr(t, r), Zn);
      }
      function Hl(t, r, i) {
        return i = i === e ? 1 : k(i), Pn(Rr(t, r), i);
      }
      function da(t, r) {
        var i = Q(t) ? et : Bt;
        return i(t, G(r, 3));
      }
      function _a(t, r) {
        var i = Q(t) ? af : oc;
        return i(t, G(r, 3));
      }
      var Gl = Mr(function(t, r, i) {
        _n.call(t, i) ? t[i].push(r) : Lt(t, i, [r]);
      });
      function Yl(t, r, i, c) {
        t = Hn(t) ? t : _e(t), i = i && !c ? k(i) : 0;
        var h = t.length;
        return i < 0 && (i = Cn(h + i, 0)), Or(t) ? i <= h && t.indexOf(r, i) > -1 : !!h && ie(t, r, i) > -1;
      }
      var Zl = rn(function(t, r, i) {
        var c = -1, h = typeof r == "function", o = Hn(t) ? E(t.length) : [];
        return Bt(t, function(d) {
          o[++c] = h ? $n(r, d, i) : Oe(d, r, i);
        }), o;
      }), $l = Mr(function(t, r, i) {
        Lt(t, i, r);
      });
      function Rr(t, r) {
        var i = Q(t) ? yn : Mc;
        return i(t, G(r, 3));
      }
      function Kl(t, r, i, c) {
        return t == null ? [] : (Q(r) || (r = r == null ? [] : [r]), i = c ? e : i, Q(i) || (i = i == null ? [] : [i]), Ac(t, r, i));
      }
      var Xl = Mr(function(t, r, i) {
        t[i ? 0 : 1].push(r);
      }, function() {
        return [[], []];
      });
      function Ql(t, r, i) {
        var c = Q(t) ? ci : Ks, h = arguments.length < 3;
        return c(t, G(r, 4), i, h, Bt);
      }
      function Jl(t, r, i) {
        var c = Q(t) ? ff : Ks, h = arguments.length < 3;
        return c(t, G(r, 4), i, h, oc);
      }
      function Vl(t, r) {
        var i = Q(t) ? qt : pc;
        return i(t, Cr(G(r, 3)));
      }
      function kl(t) {
        var r = Q(t) ? fc : Y0;
        return r(t);
      }
      function jl(t, r, i) {
        (i ? Un(t, r, i) : r === e) ? r = 1 : r = k(r);
        var c = Q(t) ? y0 : Z0;
        return c(t, r);
      }
      function nu(t) {
        var r = Q(t) ? w0 : K0;
        return r(t);
      }
      function tu(t) {
        if (t == null)
          return 0;
        if (Hn(t))
          return Or(t) ? ce(t) : t.length;
        var r = Dn(t);
        return r == lt || r == ut ? t.size : Si(t).length;
      }
      function eu(t, r, i) {
        var c = Q(t) ? ai : X0;
        return i && Un(t, r, i) && (r = e), c(t, G(r, 3));
      }
      var ru = rn(function(t, r) {
        if (t == null)
          return [];
        var i = r.length;
        return i > 1 && Un(t, r[0], r[1]) ? r = [] : i > 2 && Un(r[0], r[1], r[2]) && (r = [r[0]]), Ac(t, Pn(r, 1), []);
      }), Ir = Ff || function() {
        return On.Date.now();
      };
      function iu(t, r) {
        if (typeof r != "function")
          throw new rt(l);
        return t = k(t), function() {
          if (--t < 1)
            return r.apply(this, arguments);
        };
      }
      function xa(t, r, i) {
        return r = i ? e : r, r = t && r == null ? t.length : r, Rt(t, q, e, e, e, e, r);
      }
      function va(t, r) {
        var i;
        if (typeof r != "function")
          throw new rt(l);
        return t = k(t), function() {
          return --t > 0 && (i = r.apply(this, arguments)), t <= 1 && (r = e), i;
        };
      }
      var Qi = rn(function(t, r, i) {
        var c = R;
        if (i.length) {
          var h = Ft(i, ge(Qi));
          c |= O;
        }
        return Rt(t, c, r, i, h);
      }), Ma = rn(function(t, r, i) {
        var c = R | C;
        if (i.length) {
          var h = Ft(i, ge(Ma));
          c |= O;
        }
        return Rt(r, c, t, i, h);
      });
      function ma(t, r, i) {
        r = i ? e : r;
        var c = Rt(t, W, e, e, e, e, e, r);
        return c.placeholder = ma.placeholder, c;
      }
      function ya(t, r, i) {
        r = i ? e : r;
        var c = Rt(t, F, e, e, e, e, e, r);
        return c.placeholder = ya.placeholder, c;
      }
      function wa(t, r, i) {
        var c, h, o, d, _, y, I = 0, z = !1, b = !1, P = !0;
        if (typeof t != "function")
          throw new rt(l);
        r = ft(r) || 0, En(i) && (z = !!i.leading, b = "maxWait" in i, o = b ? Cn(ft(i.maxWait) || 0, r) : o, P = "trailing" in i ? !!i.trailing : P);
        function N(Rn) {
          var dt = c, Ot = h;
          return c = h = e, I = Rn, d = t.apply(Ot, dt), d;
        }
        function Y(Rn) {
          return I = Rn, _ = Ue(cn, r), z ? N(Rn) : d;
        }
        function tn(Rn) {
          var dt = Rn - y, Ot = Rn - I, Na = r - dt;
          return b ? qn(Na, o - Ot) : Na;
        }
        function Z(Rn) {
          var dt = Rn - y, Ot = Rn - I;
          return y === e || dt >= r || dt < 0 || b && Ot >= o;
        }
        function cn() {
          var Rn = Ir();
          if (Z(Rn))
            return fn(Rn);
          _ = Ue(cn, tn(Rn));
        }
        function fn(Rn) {
          return _ = e, P && c ? N(Rn) : (c = h = e, d);
        }
        function Jn() {
          _ !== e && bc(_), I = 0, c = y = h = _ = e;
        }
        function Bn() {
          return _ === e ? d : fn(Ir());
        }
        function Vn() {
          var Rn = Ir(), dt = Z(Rn);
          if (c = arguments, h = this, y = Rn, dt) {
            if (_ === e)
              return Y(y);
            if (b)
              return bc(_), _ = Ue(cn, r), N(y);
          }
          return _ === e && (_ = Ue(cn, r)), d;
        }
        return Vn.cancel = Jn, Vn.flush = Bn, Vn;
      }
      var su = rn(function(t, r) {
        return uc(t, 1, r);
      }), cu = rn(function(t, r, i) {
        return uc(t, ft(r) || 0, i);
      });
      function au(t) {
        return Rt(t, nn);
      }
      function zr(t, r) {
        if (typeof t != "function" || r != null && typeof r != "function")
          throw new rt(l);
        var i = function() {
          var c = arguments, h = r ? r.apply(this, c) : c[0], o = i.cache;
          if (o.has(h))
            return o.get(h);
          var d = t.apply(this, c);
          return i.cache = o.set(h, d) || o, d;
        };
        return i.cache = new (zr.Cache || Tt)(), i;
      }
      zr.Cache = Tt;
      function Cr(t) {
        if (typeof t != "function")
          throw new rt(l);
        return function() {
          var r = arguments;
          switch (r.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, r[0]);
            case 2:
              return !t.call(this, r[0], r[1]);
            case 3:
              return !t.call(this, r[0], r[1], r[2]);
          }
          return !t.apply(this, r);
        };
      }
      function fu(t) {
        return va(2, t);
      }
      var hu = Q0(function(t, r) {
        r = r.length == 1 && Q(r[0]) ? yn(r[0], Kn(G())) : yn(Pn(r, 1), Kn(G()));
        var i = r.length;
        return rn(function(c) {
          for (var h = -1, o = qn(c.length, i); ++h < o; )
            c[h] = r[h].call(this, c[h]);
          return $n(t, this, c);
        });
      }), Ji = rn(function(t, r) {
        var i = Ft(r, ge(Ji));
        return Rt(t, O, e, r, i);
      }), Aa = rn(function(t, r) {
        var i = Ft(r, ge(Aa));
        return Rt(t, U, e, r, i);
      }), lu = It(function(t, r) {
        return Rt(t, en, e, e, e, r);
      });
      function uu(t, r) {
        if (typeof t != "function")
          throw new rt(l);
        return r = r === e ? r : k(r), rn(t, r);
      }
      function ou(t, r) {
        if (typeof t != "function")
          throw new rt(l);
        return r = r == null ? 0 : Cn(k(r), 0), rn(function(i) {
          var c = i[r], h = Ht(i, 0, r);
          return c && Dt(h, c), $n(t, this, h);
        });
      }
      function pu(t, r, i) {
        var c = !0, h = !0;
        if (typeof t != "function")
          throw new rt(l);
        return En(i) && (c = "leading" in i ? !!i.leading : c, h = "trailing" in i ? !!i.trailing : h), wa(t, r, {
          leading: c,
          maxWait: r,
          trailing: h
        });
      }
      function gu(t) {
        return xa(t, 1);
      }
      function du(t, r) {
        return Ji(Pi(r), t);
      }
      function _u() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return Q(t) ? t : [t];
      }
      function xu(t) {
        return st(t, A);
      }
      function vu(t, r) {
        return r = typeof r == "function" ? r : e, st(t, A, r);
      }
      function Mu(t) {
        return st(t, m | A);
      }
      function mu(t, r) {
        return r = typeof r == "function" ? r : e, st(t, m | A, r);
      }
      function yu(t, r) {
        return r == null || lc(t, r, bn(r));
      }
      function gt(t, r) {
        return t === r || t !== t && r !== r;
      }
      var wu = Ar(wi), Au = Ar(function(t, r) {
        return t >= r;
      }), ne = _c(/* @__PURE__ */ function() {
        return arguments;
      }()) ? _c : function(t) {
        return Tn(t) && _n.call(t, "callee") && !ec.call(t, "callee");
      }, Q = E.isArray, Eu = Fs ? Kn(Fs) : b0;
      function Hn(t) {
        return t != null && br(t.length) && !Ct(t);
      }
      function Ln(t) {
        return Tn(t) && Hn(t);
      }
      function Su(t) {
        return t === !0 || t === !1 || Tn(t) && Fn(t) == ve;
      }
      var Gt = Bf || as, Tu = Us ? Kn(Us) : O0;
      function Lu(t) {
        return Tn(t) && t.nodeType === 1 && !Be(t);
      }
      function Ru(t) {
        if (t == null)
          return !0;
        if (Hn(t) && (Q(t) || typeof t == "string" || typeof t.splice == "function" || Gt(t) || de(t) || ne(t)))
          return !t.length;
        var r = Dn(t);
        if (r == lt || r == ut)
          return !t.size;
        if (Fe(t))
          return !Si(t).length;
        for (var i in t)
          if (_n.call(t, i))
            return !1;
        return !0;
      }
      function Iu(t, r) {
        return Pe(t, r);
      }
      function zu(t, r, i) {
        i = typeof i == "function" ? i : e;
        var c = i ? i(t, r) : e;
        return c === e ? Pe(t, r, e, i) : !!c;
      }
      function Vi(t) {
        if (!Tn(t))
          return !1;
        var r = Fn(t);
        return r == Ye || r == ka || typeof t.message == "string" && typeof t.name == "string" && !Be(t);
      }
      function Cu(t) {
        return typeof t == "number" && ic(t);
      }
      function Ct(t) {
        if (!En(t))
          return !1;
        var r = Fn(t);
        return r == Ze || r == us || r == Va || r == n1;
      }
      function Ea(t) {
        return typeof t == "number" && t == k(t);
      }
      function br(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Wn;
      }
      function En(t) {
        var r = typeof t;
        return t != null && (r == "object" || r == "function");
      }
      function Tn(t) {
        return t != null && typeof t == "object";
      }
      var Sa = Bs ? Kn(Bs) : q0;
      function bu(t, r) {
        return t === r || Ei(t, r, Ni(r));
      }
      function Ou(t, r, i) {
        return i = typeof i == "function" ? i : e, Ei(t, r, Ni(r), i);
      }
      function Pu(t) {
        return Ta(t) && t != +t;
      }
      function qu(t) {
        if (vh(t))
          throw new X(f);
        return xc(t);
      }
      function Du(t) {
        return t === null;
      }
      function Fu(t) {
        return t == null;
      }
      function Ta(t) {
        return typeof t == "number" || Tn(t) && Fn(t) == me;
      }
      function Be(t) {
        if (!Tn(t) || Fn(t) != Et)
          return !1;
        var r = sr(t);
        if (r === null)
          return !0;
        var i = _n.call(r, "constructor") && r.constructor;
        return typeof i == "function" && i instanceof i && tr.call(i) == Of;
      }
      var ki = Ws ? Kn(Ws) : D0;
      function Uu(t) {
        return Ea(t) && t >= -Wn && t <= Wn;
      }
      var La = Ns ? Kn(Ns) : F0;
      function Or(t) {
        return typeof t == "string" || !Q(t) && Tn(t) && Fn(t) == we;
      }
      function Qn(t) {
        return typeof t == "symbol" || Tn(t) && Fn(t) == $e;
      }
      var de = Hs ? Kn(Hs) : U0;
      function Bu(t) {
        return t === e;
      }
      function Wu(t) {
        return Tn(t) && Dn(t) == Ae;
      }
      function Nu(t) {
        return Tn(t) && Fn(t) == e1;
      }
      var Hu = Ar(Ti), Gu = Ar(function(t, r) {
        return t <= r;
      });
      function Ra(t) {
        if (!t)
          return [];
        if (Hn(t))
          return Or(t) ? ot(t) : Nn(t);
        if (Te && t[Te])
          return yf(t[Te]());
        var r = Dn(t), i = r == lt ? pi : r == ut ? ke : _e;
        return i(t);
      }
      function bt(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = ft(t), t === Zn || t === -Zn) {
          var r = t < 0 ? -1 : 1;
          return r * He;
        }
        return t === t ? t : 0;
      }
      function k(t) {
        var r = bt(t), i = r % 1;
        return r === r ? i ? r - i : r : 0;
      }
      function Ia(t) {
        return t ? Jt(k(t), 0, _t) : 0;
      }
      function ft(t) {
        if (typeof t == "number")
          return t;
        if (Qn(t))
          return Zt;
        if (En(t)) {
          var r = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = En(r) ? r + "" : r;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Xs(t);
        var i = A1.test(t);
        return i || S1.test(t) ? rf(t.slice(2), i ? 2 : 8) : w1.test(t) ? Zt : +t;
      }
      function za(t) {
        return vt(t, Gn(t));
      }
      function Yu(t) {
        return t ? Jt(k(t), -Wn, Wn) : t === 0 ? t : 0;
      }
      function pn(t) {
        return t == null ? "" : Xn(t);
      }
      var Zu = oe(function(t, r) {
        if (Fe(r) || Hn(r)) {
          vt(r, bn(r), t);
          return;
        }
        for (var i in r)
          _n.call(r, i) && Ce(t, i, r[i]);
      }), Ca = oe(function(t, r) {
        vt(r, Gn(r), t);
      }), Pr = oe(function(t, r, i, c) {
        vt(r, Gn(r), t, c);
      }), $u = oe(function(t, r, i, c) {
        vt(r, bn(r), t, c);
      }), Ku = It(Mi);
      function Xu(t, r) {
        var i = ue(t);
        return r == null ? i : hc(i, r);
      }
      var Qu = rn(function(t, r) {
        t = vn(t);
        var i = -1, c = r.length, h = c > 2 ? r[2] : e;
        for (h && Un(r[0], r[1], h) && (c = 1); ++i < c; )
          for (var o = r[i], d = Gn(o), _ = -1, y = d.length; ++_ < y; ) {
            var I = d[_], z = t[I];
            (z === e || gt(z, fe[I]) && !_n.call(t, I)) && (t[I] = o[I]);
          }
        return t;
      }), Ju = rn(function(t) {
        return t.push(e, Xc), $n(ba, e, t);
      });
      function Vu(t, r) {
        return Ys(t, G(r, 3), xt);
      }
      function ku(t, r) {
        return Ys(t, G(r, 3), yi);
      }
      function ju(t, r) {
        return t == null ? t : mi(t, G(r, 3), Gn);
      }
      function no(t, r) {
        return t == null ? t : gc(t, G(r, 3), Gn);
      }
      function to(t, r) {
        return t && xt(t, G(r, 3));
      }
      function eo(t, r) {
        return t && yi(t, G(r, 3));
      }
      function ro(t) {
        return t == null ? [] : dr(t, bn(t));
      }
      function io(t) {
        return t == null ? [] : dr(t, Gn(t));
      }
      function ji(t, r, i) {
        var c = t == null ? e : Vt(t, r);
        return c === e ? i : c;
      }
      function so(t, r) {
        return t != null && Vc(t, r, R0);
      }
      function ns(t, r) {
        return t != null && Vc(t, r, I0);
      }
      var co = Gc(function(t, r, i) {
        r != null && typeof r.toString != "function" && (r = er.call(r)), t[r] = i;
      }, es(Yn)), ao = Gc(function(t, r, i) {
        r != null && typeof r.toString != "function" && (r = er.call(r)), _n.call(t, r) ? t[r].push(i) : t[r] = [i];
      }, G), fo = rn(Oe);
      function bn(t) {
        return Hn(t) ? ac(t) : Si(t);
      }
      function Gn(t) {
        return Hn(t) ? ac(t, !0) : B0(t);
      }
      function ho(t, r) {
        var i = {};
        return r = G(r, 3), xt(t, function(c, h, o) {
          Lt(i, r(c, h, o), c);
        }), i;
      }
      function lo(t, r) {
        var i = {};
        return r = G(r, 3), xt(t, function(c, h, o) {
          Lt(i, h, r(c, h, o));
        }), i;
      }
      var uo = oe(function(t, r, i) {
        _r(t, r, i);
      }), ba = oe(function(t, r, i, c) {
        _r(t, r, i, c);
      }), oo = It(function(t, r) {
        var i = {};
        if (t == null)
          return i;
        var c = !1;
        r = yn(r, function(o) {
          return o = Nt(o, t), c || (c = o.length > 1), o;
        }), vt(t, Bi(t), i), c && (i = st(i, m | T | A, ch));
        for (var h = r.length; h--; )
          Ci(i, r[h]);
        return i;
      });
      function po(t, r) {
        return Oa(t, Cr(G(r)));
      }
      var go = It(function(t, r) {
        return t == null ? {} : N0(t, r);
      });
      function Oa(t, r) {
        if (t == null)
          return {};
        var i = yn(Bi(t), function(c) {
          return [c];
        });
        return r = G(r), Ec(t, i, function(c, h) {
          return r(c, h[0]);
        });
      }
      function _o(t, r, i) {
        r = Nt(r, t);
        var c = -1, h = r.length;
        for (h || (h = 1, t = e); ++c < h; ) {
          var o = t == null ? e : t[Mt(r[c])];
          o === e && (c = h, o = i), t = Ct(o) ? o.call(t) : o;
        }
        return t;
      }
      function xo(t, r, i) {
        return t == null ? t : qe(t, r, i);
      }
      function vo(t, r, i, c) {
        return c = typeof c == "function" ? c : e, t == null ? t : qe(t, r, i, c);
      }
      var Pa = $c(bn), qa = $c(Gn);
      function Mo(t, r, i) {
        var c = Q(t), h = c || Gt(t) || de(t);
        if (r = G(r, 4), i == null) {
          var o = t && t.constructor;
          h ? i = c ? new o() : [] : En(t) ? i = Ct(o) ? ue(sr(t)) : {} : i = {};
        }
        return (h ? et : xt)(t, function(d, _, y) {
          return r(i, d, _, y);
        }), i;
      }
      function mo(t, r) {
        return t == null ? !0 : Ci(t, r);
      }
      function yo(t, r, i) {
        return t == null ? t : Ic(t, r, Pi(i));
      }
      function wo(t, r, i, c) {
        return c = typeof c == "function" ? c : e, t == null ? t : Ic(t, r, Pi(i), c);
      }
      function _e(t) {
        return t == null ? [] : oi(t, bn(t));
      }
      function Ao(t) {
        return t == null ? [] : oi(t, Gn(t));
      }
      function Eo(t, r, i) {
        return i === e && (i = r, r = e), i !== e && (i = ft(i), i = i === i ? i : 0), r !== e && (r = ft(r), r = r === r ? r : 0), Jt(ft(t), r, i);
      }
      function So(t, r, i) {
        return r = bt(r), i === e ? (i = r, r = 0) : i = bt(i), t = ft(t), z0(t, r, i);
      }
      function To(t, r, i) {
        if (i && typeof i != "boolean" && Un(t, r, i) && (r = i = e), i === e && (typeof r == "boolean" ? (i = r, r = e) : typeof t == "boolean" && (i = t, t = e)), t === e && r === e ? (t = 0, r = 1) : (t = bt(t), r === e ? (r = t, t = 0) : r = bt(r)), t > r) {
          var c = t;
          t = r, r = c;
        }
        if (i || t % 1 || r % 1) {
          var h = sc();
          return qn(t + h * (r - t + ef("1e-" + ((h + "").length - 1))), r);
        }
        return Ri(t, r);
      }
      var Lo = pe(function(t, r, i) {
        return r = r.toLowerCase(), t + (i ? Da(r) : r);
      });
      function Da(t) {
        return ts(pn(t).toLowerCase());
      }
      function Fa(t) {
        return t = pn(t), t && t.replace(L1, _f).replace($1, "");
      }
      function Ro(t, r, i) {
        t = pn(t), r = Xn(r);
        var c = t.length;
        i = i === e ? c : Jt(k(i), 0, c);
        var h = i;
        return i -= r.length, i >= 0 && t.slice(i, h) == r;
      }
      function Io(t) {
        return t = pn(t), t && a1.test(t) ? t.replace(gs, xf) : t;
      }
      function zo(t) {
        return t = pn(t), t && p1.test(t) ? t.replace(Jr, "\\$&") : t;
      }
      var Co = pe(function(t, r, i) {
        return t + (i ? "-" : "") + r.toLowerCase();
      }), bo = pe(function(t, r, i) {
        return t + (i ? " " : "") + r.toLowerCase();
      }), Oo = Wc("toLowerCase");
      function Po(t, r, i) {
        t = pn(t), r = k(r);
        var c = r ? ce(t) : 0;
        if (!r || c >= r)
          return t;
        var h = (r - c) / 2;
        return wr(hr(h), i) + t + wr(fr(h), i);
      }
      function qo(t, r, i) {
        t = pn(t), r = k(r);
        var c = r ? ce(t) : 0;
        return r && c < r ? t + wr(r - c, i) : t;
      }
      function Do(t, r, i) {
        t = pn(t), r = k(r);
        var c = r ? ce(t) : 0;
        return r && c < r ? wr(r - c, i) + t : t;
      }
      function Fo(t, r, i) {
        return i || r == null ? r = 0 : r && (r = +r), Gf(pn(t).replace(Vr, ""), r || 0);
      }
      function Uo(t, r, i) {
        return (i ? Un(t, r, i) : r === e) ? r = 1 : r = k(r), Ii(pn(t), r);
      }
      function Bo() {
        var t = arguments, r = pn(t[0]);
        return t.length < 3 ? r : r.replace(t[1], t[2]);
      }
      var Wo = pe(function(t, r, i) {
        return t + (i ? "_" : "") + r.toLowerCase();
      });
      function No(t, r, i) {
        return i && typeof i != "number" && Un(t, r, i) && (r = i = e), i = i === e ? _t : i >>> 0, i ? (t = pn(t), t && (typeof r == "string" || r != null && !ki(r)) && (r = Xn(r), !r && se(t)) ? Ht(ot(t), 0, i) : t.split(r, i)) : [];
      }
      var Ho = pe(function(t, r, i) {
        return t + (i ? " " : "") + ts(r);
      });
      function Go(t, r, i) {
        return t = pn(t), i = i == null ? 0 : Jt(k(i), 0, t.length), r = Xn(r), t.slice(i, i + r.length) == r;
      }
      function Yo(t, r, i) {
        var c = u.templateSettings;
        i && Un(t, r, i) && (r = e), t = pn(t), r = Pr({}, r, c, Kc);
        var h = Pr({}, r.imports, c.imports, Kc), o = bn(h), d = oi(h, o), _, y, I = 0, z = r.interpolate || Ke, b = "__p += '", P = gi(
          (r.escape || Ke).source + "|" + z.source + "|" + (z === ds ? y1 : Ke).source + "|" + (r.evaluate || Ke).source + "|$",
          "g"
        ), N = "//# sourceURL=" + (_n.call(r, "sourceURL") ? (r.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++V1 + "]") + `
`;
        t.replace(P, function(Z, cn, fn, Jn, Bn, Vn) {
          return fn || (fn = Jn), b += t.slice(I, Vn).replace(R1, vf), cn && (_ = !0, b += `' +
__e(` + cn + `) +
'`), Bn && (y = !0, b += `';
` + Bn + `;
__p += '`), fn && (b += `' +
((__t = (` + fn + `)) == null ? '' : __t) +
'`), I = Vn + Z.length, Z;
        }), b += `';
`;
        var Y = _n.call(r, "variable") && r.variable;
        if (!Y)
          b = `with (obj) {
` + b + `
}
`;
        else if (M1.test(Y))
          throw new X(p);
        b = (y ? b.replace(r1, "") : b).replace(i1, "$1").replace(s1, "$1;"), b = "function(" + (Y || "obj") + `) {
` + (Y ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (_ ? ", __e = _.escape" : "") + (y ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + b + `return __p
}`;
        var tn = Ba(function() {
          return ln(o, N + "return " + b).apply(e, d);
        });
        if (tn.source = b, Vi(tn))
          throw tn;
        return tn;
      }
      function Zo(t) {
        return pn(t).toLowerCase();
      }
      function $o(t) {
        return pn(t).toUpperCase();
      }
      function Ko(t, r, i) {
        if (t = pn(t), t && (i || r === e))
          return Xs(t);
        if (!t || !(r = Xn(r)))
          return t;
        var c = ot(t), h = ot(r), o = Qs(c, h), d = Js(c, h) + 1;
        return Ht(c, o, d).join("");
      }
      function Xo(t, r, i) {
        if (t = pn(t), t && (i || r === e))
          return t.slice(0, ks(t) + 1);
        if (!t || !(r = Xn(r)))
          return t;
        var c = ot(t), h = Js(c, ot(r)) + 1;
        return Ht(c, 0, h).join("");
      }
      function Qo(t, r, i) {
        if (t = pn(t), t && (i || r === e))
          return t.replace(Vr, "");
        if (!t || !(r = Xn(r)))
          return t;
        var c = ot(t), h = Qs(c, ot(r));
        return Ht(c, h).join("");
      }
      function Jo(t, r) {
        var i = hn, c = H;
        if (En(r)) {
          var h = "separator" in r ? r.separator : h;
          i = "length" in r ? k(r.length) : i, c = "omission" in r ? Xn(r.omission) : c;
        }
        t = pn(t);
        var o = t.length;
        if (se(t)) {
          var d = ot(t);
          o = d.length;
        }
        if (i >= o)
          return t;
        var _ = i - ce(c);
        if (_ < 1)
          return c;
        var y = d ? Ht(d, 0, _).join("") : t.slice(0, _);
        if (h === e)
          return y + c;
        if (d && (_ += y.length - _), ki(h)) {
          if (t.slice(_).search(h)) {
            var I, z = y;
            for (h.global || (h = gi(h.source, pn(_s.exec(h)) + "g")), h.lastIndex = 0; I = h.exec(z); )
              var b = I.index;
            y = y.slice(0, b === e ? _ : b);
          }
        } else if (t.indexOf(Xn(h), _) != _) {
          var P = y.lastIndexOf(h);
          P > -1 && (y = y.slice(0, P));
        }
        return y + c;
      }
      function Vo(t) {
        return t = pn(t), t && c1.test(t) ? t.replace(ps, Sf) : t;
      }
      var ko = pe(function(t, r, i) {
        return t + (i ? " " : "") + r.toUpperCase();
      }), ts = Wc("toUpperCase");
      function Ua(t, r, i) {
        return t = pn(t), r = i ? e : r, r === e ? mf(t) ? Rf(t) : uf(t) : t.match(r) || [];
      }
      var Ba = rn(function(t, r) {
        try {
          return $n(t, e, r);
        } catch (i) {
          return Vi(i) ? i : new X(i);
        }
      }), jo = It(function(t, r) {
        return et(r, function(i) {
          i = Mt(i), Lt(t, i, Qi(t[i], t));
        }), t;
      });
      function n2(t) {
        var r = t == null ? 0 : t.length, i = G();
        return t = r ? yn(t, function(c) {
          if (typeof c[1] != "function")
            throw new rt(l);
          return [i(c[0]), c[1]];
        }) : [], rn(function(c) {
          for (var h = -1; ++h < r; ) {
            var o = t[h];
            if ($n(o[0], this, c))
              return $n(o[1], this, c);
          }
        });
      }
      function t2(t) {
        return S0(st(t, m));
      }
      function es(t) {
        return function() {
          return t;
        };
      }
      function e2(t, r) {
        return t == null || t !== t ? r : t;
      }
      var r2 = Hc(), i2 = Hc(!0);
      function Yn(t) {
        return t;
      }
      function rs(t) {
        return vc(typeof t == "function" ? t : st(t, m));
      }
      function s2(t) {
        return mc(st(t, m));
      }
      function c2(t, r) {
        return yc(t, st(r, m));
      }
      var a2 = rn(function(t, r) {
        return function(i) {
          return Oe(i, t, r);
        };
      }), f2 = rn(function(t, r) {
        return function(i) {
          return Oe(t, i, r);
        };
      });
      function is(t, r, i) {
        var c = bn(r), h = dr(r, c);
        i == null && !(En(r) && (h.length || !c.length)) && (i = r, r = t, t = this, h = dr(r, bn(r)));
        var o = !(En(i) && "chain" in i) || !!i.chain, d = Ct(t);
        return et(h, function(_) {
          var y = r[_];
          t[_] = y, d && (t.prototype[_] = function() {
            var I = this.__chain__;
            if (o || I) {
              var z = t(this.__wrapped__), b = z.__actions__ = Nn(this.__actions__);
              return b.push({ func: y, args: arguments, thisArg: t }), z.__chain__ = I, z;
            }
            return y.apply(t, Dt([this.value()], arguments));
          });
        }), t;
      }
      function h2() {
        return On._ === this && (On._ = Pf), this;
      }
      function ss() {
      }
      function l2(t) {
        return t = k(t), rn(function(r) {
          return wc(r, t);
        });
      }
      var u2 = Di(yn), o2 = Di(Gs), p2 = Di(ai);
      function Wa(t) {
        return Gi(t) ? fi(Mt(t)) : H0(t);
      }
      function g2(t) {
        return function(r) {
          return t == null ? e : Vt(t, r);
        };
      }
      var d2 = Yc(), _2 = Yc(!0);
      function cs() {
        return [];
      }
      function as() {
        return !1;
      }
      function x2() {
        return {};
      }
      function v2() {
        return "";
      }
      function M2() {
        return !0;
      }
      function m2(t, r) {
        if (t = k(t), t < 1 || t > Wn)
          return [];
        var i = _t, c = qn(t, _t);
        r = G(r), t -= _t;
        for (var h = ui(c, r); ++i < t; )
          r(i);
        return h;
      }
      function y2(t) {
        return Q(t) ? yn(t, Mt) : Qn(t) ? [t] : Nn(ca(pn(t)));
      }
      function w2(t) {
        var r = ++bf;
        return pn(t) + r;
      }
      var A2 = yr(function(t, r) {
        return t + r;
      }, 0), E2 = Fi("ceil"), S2 = yr(function(t, r) {
        return t / r;
      }, 1), T2 = Fi("floor");
      function L2(t) {
        return t && t.length ? gr(t, Yn, wi) : e;
      }
      function R2(t, r) {
        return t && t.length ? gr(t, G(r, 2), wi) : e;
      }
      function I2(t) {
        return $s(t, Yn);
      }
      function z2(t, r) {
        return $s(t, G(r, 2));
      }
      function C2(t) {
        return t && t.length ? gr(t, Yn, Ti) : e;
      }
      function b2(t, r) {
        return t && t.length ? gr(t, G(r, 2), Ti) : e;
      }
      var O2 = yr(function(t, r) {
        return t * r;
      }, 1), P2 = Fi("round"), q2 = yr(function(t, r) {
        return t - r;
      }, 0);
      function D2(t) {
        return t && t.length ? li(t, Yn) : 0;
      }
      function F2(t, r) {
        return t && t.length ? li(t, G(r, 2)) : 0;
      }
      return u.after = iu, u.ary = xa, u.assign = Zu, u.assignIn = Ca, u.assignInWith = Pr, u.assignWith = $u, u.at = Ku, u.before = va, u.bind = Qi, u.bindAll = jo, u.bindKey = Ma, u.castArray = _u, u.chain = ga, u.chunk = Sh, u.compact = Th, u.concat = Lh, u.cond = n2, u.conforms = t2, u.constant = es, u.countBy = ql, u.create = Xu, u.curry = ma, u.curryRight = ya, u.debounce = wa, u.defaults = Qu, u.defaultsDeep = Ju, u.defer = su, u.delay = cu, u.difference = Rh, u.differenceBy = Ih, u.differenceWith = zh, u.drop = Ch, u.dropRight = bh, u.dropRightWhile = Oh, u.dropWhile = Ph, u.fill = qh, u.filter = Fl, u.flatMap = Wl, u.flatMapDeep = Nl, u.flatMapDepth = Hl, u.flatten = la, u.flattenDeep = Dh, u.flattenDepth = Fh, u.flip = au, u.flow = r2, u.flowRight = i2, u.fromPairs = Uh, u.functions = ro, u.functionsIn = io, u.groupBy = Gl, u.initial = Wh, u.intersection = Nh, u.intersectionBy = Hh, u.intersectionWith = Gh, u.invert = co, u.invertBy = ao, u.invokeMap = Zl, u.iteratee = rs, u.keyBy = $l, u.keys = bn, u.keysIn = Gn, u.map = Rr, u.mapKeys = ho, u.mapValues = lo, u.matches = s2, u.matchesProperty = c2, u.memoize = zr, u.merge = uo, u.mergeWith = ba, u.method = a2, u.methodOf = f2, u.mixin = is, u.negate = Cr, u.nthArg = l2, u.omit = oo, u.omitBy = po, u.once = fu, u.orderBy = Kl, u.over = u2, u.overArgs = hu, u.overEvery = o2, u.overSome = p2, u.partial = Ji, u.partialRight = Aa, u.partition = Xl, u.pick = go, u.pickBy = Oa, u.property = Wa, u.propertyOf = g2, u.pull = Kh, u.pullAll = oa, u.pullAllBy = Xh, u.pullAllWith = Qh, u.pullAt = Jh, u.range = d2, u.rangeRight = _2, u.rearg = lu, u.reject = Vl, u.remove = Vh, u.rest = uu, u.reverse = Ki, u.sampleSize = jl, u.set = xo, u.setWith = vo, u.shuffle = nu, u.slice = kh, u.sortBy = ru, u.sortedUniq = sl, u.sortedUniqBy = cl, u.split = No, u.spread = ou, u.tail = al, u.take = fl, u.takeRight = hl, u.takeRightWhile = ll, u.takeWhile = ul, u.tap = Tl, u.throttle = pu, u.thru = Lr, u.toArray = Ra, u.toPairs = Pa, u.toPairsIn = qa, u.toPath = y2, u.toPlainObject = za, u.transform = Mo, u.unary = gu, u.union = ol, u.unionBy = pl, u.unionWith = gl, u.uniq = dl, u.uniqBy = _l, u.uniqWith = xl, u.unset = mo, u.unzip = Xi, u.unzipWith = pa, u.update = yo, u.updateWith = wo, u.values = _e, u.valuesIn = Ao, u.without = vl, u.words = Ua, u.wrap = du, u.xor = Ml, u.xorBy = ml, u.xorWith = yl, u.zip = wl, u.zipObject = Al, u.zipObjectDeep = El, u.zipWith = Sl, u.entries = Pa, u.entriesIn = qa, u.extend = Ca, u.extendWith = Pr, is(u, u), u.add = A2, u.attempt = Ba, u.camelCase = Lo, u.capitalize = Da, u.ceil = E2, u.clamp = Eo, u.clone = xu, u.cloneDeep = Mu, u.cloneDeepWith = mu, u.cloneWith = vu, u.conformsTo = yu, u.deburr = Fa, u.defaultTo = e2, u.divide = S2, u.endsWith = Ro, u.eq = gt, u.escape = Io, u.escapeRegExp = zo, u.every = Dl, u.find = Ul, u.findIndex = fa, u.findKey = Vu, u.findLast = Bl, u.findLastIndex = ha, u.findLastKey = ku, u.floor = T2, u.forEach = da, u.forEachRight = _a, u.forIn = ju, u.forInRight = no, u.forOwn = to, u.forOwnRight = eo, u.get = ji, u.gt = wu, u.gte = Au, u.has = so, u.hasIn = ns, u.head = ua, u.identity = Yn, u.includes = Yl, u.indexOf = Bh, u.inRange = So, u.invoke = fo, u.isArguments = ne, u.isArray = Q, u.isArrayBuffer = Eu, u.isArrayLike = Hn, u.isArrayLikeObject = Ln, u.isBoolean = Su, u.isBuffer = Gt, u.isDate = Tu, u.isElement = Lu, u.isEmpty = Ru, u.isEqual = Iu, u.isEqualWith = zu, u.isError = Vi, u.isFinite = Cu, u.isFunction = Ct, u.isInteger = Ea, u.isLength = br, u.isMap = Sa, u.isMatch = bu, u.isMatchWith = Ou, u.isNaN = Pu, u.isNative = qu, u.isNil = Fu, u.isNull = Du, u.isNumber = Ta, u.isObject = En, u.isObjectLike = Tn, u.isPlainObject = Be, u.isRegExp = ki, u.isSafeInteger = Uu, u.isSet = La, u.isString = Or, u.isSymbol = Qn, u.isTypedArray = de, u.isUndefined = Bu, u.isWeakMap = Wu, u.isWeakSet = Nu, u.join = Yh, u.kebabCase = Co, u.last = at, u.lastIndexOf = Zh, u.lowerCase = bo, u.lowerFirst = Oo, u.lt = Hu, u.lte = Gu, u.max = L2, u.maxBy = R2, u.mean = I2, u.meanBy = z2, u.min = C2, u.minBy = b2, u.stubArray = cs, u.stubFalse = as, u.stubObject = x2, u.stubString = v2, u.stubTrue = M2, u.multiply = O2, u.nth = $h, u.noConflict = h2, u.noop = ss, u.now = Ir, u.pad = Po, u.padEnd = qo, u.padStart = Do, u.parseInt = Fo, u.random = To, u.reduce = Ql, u.reduceRight = Jl, u.repeat = Uo, u.replace = Bo, u.result = _o, u.round = P2, u.runInContext = M, u.sample = kl, u.size = tu, u.snakeCase = Wo, u.some = eu, u.sortedIndex = jh, u.sortedIndexBy = nl, u.sortedIndexOf = tl, u.sortedLastIndex = el, u.sortedLastIndexBy = rl, u.sortedLastIndexOf = il, u.startCase = Ho, u.startsWith = Go, u.subtract = q2, u.sum = D2, u.sumBy = F2, u.template = Yo, u.times = m2, u.toFinite = bt, u.toInteger = k, u.toLength = Ia, u.toLower = Zo, u.toNumber = ft, u.toSafeInteger = Yu, u.toString = pn, u.toUpper = $o, u.trim = Ko, u.trimEnd = Xo, u.trimStart = Qo, u.truncate = Jo, u.unescape = Vo, u.uniqueId = w2, u.upperCase = ko, u.upperFirst = ts, u.each = da, u.eachRight = _a, u.first = ua, is(u, function() {
        var t = {};
        return xt(u, function(r, i) {
          _n.call(u.prototype, i) || (t[i] = r);
        }), t;
      }(), { chain: !1 }), u.VERSION = s, et(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        u[t].placeholder = u;
      }), et(["drop", "take"], function(t, r) {
        an.prototype[t] = function(i) {
          i = i === e ? 1 : Cn(k(i), 0);
          var c = this.__filtered__ && !r ? new an(this) : this.clone();
          return c.__filtered__ ? c.__takeCount__ = qn(i, c.__takeCount__) : c.__views__.push({
            size: qn(i, _t),
            type: t + (c.__dir__ < 0 ? "Right" : "")
          }), c;
        }, an.prototype[t + "Right"] = function(i) {
          return this.reverse()[t](i).reverse();
        };
      }), et(["filter", "map", "takeWhile"], function(t, r) {
        var i = r + 1, c = i == on || i == nt;
        an.prototype[t] = function(h) {
          var o = this.clone();
          return o.__iteratees__.push({
            iteratee: G(h, 3),
            type: i
          }), o.__filtered__ = o.__filtered__ || c, o;
        };
      }), et(["head", "last"], function(t, r) {
        var i = "take" + (r ? "Right" : "");
        an.prototype[t] = function() {
          return this[i](1).value()[0];
        };
      }), et(["initial", "tail"], function(t, r) {
        var i = "drop" + (r ? "" : "Right");
        an.prototype[t] = function() {
          return this.__filtered__ ? new an(this) : this[i](1);
        };
      }), an.prototype.compact = function() {
        return this.filter(Yn);
      }, an.prototype.find = function(t) {
        return this.filter(t).head();
      }, an.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, an.prototype.invokeMap = rn(function(t, r) {
        return typeof t == "function" ? new an(this) : this.map(function(i) {
          return Oe(i, t, r);
        });
      }), an.prototype.reject = function(t) {
        return this.filter(Cr(G(t)));
      }, an.prototype.slice = function(t, r) {
        t = k(t);
        var i = this;
        return i.__filtered__ && (t > 0 || r < 0) ? new an(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), r !== e && (r = k(r), i = r < 0 ? i.dropRight(-r) : i.take(r - t)), i);
      }, an.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, an.prototype.toArray = function() {
        return this.take(_t);
      }, xt(an.prototype, function(t, r) {
        var i = /^(?:filter|find|map|reject)|While$/.test(r), c = /^(?:head|last)$/.test(r), h = u[c ? "take" + (r == "last" ? "Right" : "") : r], o = c || /^find/.test(r);
        h && (u.prototype[r] = function() {
          var d = this.__wrapped__, _ = c ? [1] : arguments, y = d instanceof an, I = _[0], z = y || Q(d), b = function(cn) {
            var fn = h.apply(u, Dt([cn], _));
            return c && P ? fn[0] : fn;
          };
          z && i && typeof I == "function" && I.length != 1 && (y = z = !1);
          var P = this.__chain__, N = !!this.__actions__.length, Y = o && !P, tn = y && !N;
          if (!o && z) {
            d = tn ? d : new an(this);
            var Z = t.apply(d, _);
            return Z.__actions__.push({ func: Lr, args: [b], thisArg: e }), new it(Z, P);
          }
          return Y && tn ? t.apply(this, _) : (Z = this.thru(b), Y ? c ? Z.value()[0] : Z.value() : Z);
        });
      }), et(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var r = je[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", c = /^(?:pop|shift)$/.test(t);
        u.prototype[t] = function() {
          var h = arguments;
          if (c && !this.__chain__) {
            var o = this.value();
            return r.apply(Q(o) ? o : [], h);
          }
          return this[i](function(d) {
            return r.apply(Q(d) ? d : [], h);
          });
        };
      }), xt(an.prototype, function(t, r) {
        var i = u[r];
        if (i) {
          var c = i.name + "";
          _n.call(le, c) || (le[c] = []), le[c].push({ name: r, func: i });
        }
      }), le[mr(e, C).name] = [{
        name: "wrapper",
        func: e
      }], an.prototype.clone = Jf, an.prototype.reverse = Vf, an.prototype.value = kf, u.prototype.at = Ll, u.prototype.chain = Rl, u.prototype.commit = Il, u.prototype.next = zl, u.prototype.plant = bl, u.prototype.reverse = Ol, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = Pl, u.prototype.first = u.prototype.head, Te && (u.prototype[Te] = Cl), u;
    }, ae = If();
    $t ? (($t.exports = ae)._ = ae, ri._ = ae) : On._ = ae;
  }).call(We);
})(Fr, Fr.exports);
var W2 = Fr.exports;
function N2(V) {
  const n = document.createElement("canvas");
  return n.style.display = "block", n.style.width = V.style.width, n.style.height = V.style.height, V.style.position = "relative", n.setAttribute("id", W2.uniqueId("canvas")), V.append(n), n;
}
class Ur {
}
$(Ur, "gl");
class H2 {
  constructor(n) {
    $(this, "canvas");
    $(this, "gl");
    const e = window.devicePixelRatio || 1, s = N2(n), a = s.getBoundingClientRect();
    s.width = a.width * e, s.height = a.height * e, this.canvas = s, this.gl = s.getContext("webgl2", {
      stencil: !1
    }), Ur.gl = this.gl, console.log(Ur.gl);
    const f = /* @__PURE__ */ new Set();
    f.add("OES_element_index_uint"), f.add("OES_vertex_array_object"), f.add("WEBGL_depth_texture"), f.forEach((l) => {
      this.gl.getExtension(l);
    });
  }
  init() {
  }
}
class G2 extends Set {
}
class Wr {
  //创建
  create(n) {
  }
  //销毁
  destroy(n) {
  }
  //绑定
  tie(n) {
  }
  //解除绑定
  untie() {
  }
}
class $a extends Wr {
  constructor(e, s) {
    super();
    $(this, "source");
    $(this, "shader");
    $(this, "type");
    this.type = s, this.source = e;
  }
  tie(e) {
    this.create(e), this.shaderSource(e, this.source), this.compile(e), e.getShaderParameter(this.shader, e.COMPILE_STATUS) || console.error("Shader compilation error:", e.getShaderInfoLog(this.shader));
  }
  create(e) {
    this.shader = e.createShader({
      0: e.VERTEX_SHADER,
      1: e.FRAGMENT_SHADER
    }[this.type]);
  }
  shaderSource(e, s) {
    e.shaderSource(this.shader, s);
  }
  compile(e) {
    e.compileShader(this.shader);
  }
}
class Y2 extends $a {
  constructor(n) {
    super(
      n,
      1
      /* fragment */
    );
  }
}
class Z2 extends $a {
  constructor(n) {
    super(
      n,
      0
      /* vertex */
    );
  }
}
const Br = class Br extends Wr {
  constructor(e, s) {
    super();
    $(this, "VertexShader");
    $(this, "FragmentShader");
    $(this, "id");
    $(this, "gl");
    $(this, "m_attributeLocations", {});
    $(this, "m_uniformLocations", {});
    this.gl = e;
    for (let a of s)
      a.tie(e), a instanceof Z2 && (this.VertexShader = a), a instanceof Y2 && (this.FragmentShader = a);
  }
  create(e) {
    this.id = e.createProgram();
  }
  initAttribute(e) {
    const s = e.getProgramParameter(this.id, e.ACTIVE_ATTRIBUTES);
    for (let a = 0; a < s; a++) {
      const l = e.getActiveAttrib(this.id, a).name;
      console.log("name", l);
      const p = e.getAttribLocation(this.id, l);
      console.log("location", p), this.m_attributeLocations[l] = {
        location: p
      };
    }
  }
  initUniform(e) {
    const s = e.getProgramParameter(this.id, e.ACTIVE_UNIFORMS);
    for (let a = 0; a < s; a++) {
      const f = e.getActiveUniform(this.id, a), l = f.name;
      console.log("name", l);
      const p = e.getUniformLocation(this.id, l);
      console.log("location", p), this.m_uniformLocations[l] = {
        location: p,
        type: f.type
      };
    }
  }
  tie(e) {
    this.create(e), this.attach(), this.link(), this.use(), e.getProgramParameter(this.id, e.LINK_STATUS) || console.error("Program link error:", this.gl.getProgramInfoLog(this.id)), this.initAttribute(e), this.initUniform(e);
  }
  attach() {
    this.gl.attachShader(this.id, this.VertexShader.shader), this.gl.attachShader(this.id, this.FragmentShader.shader);
  }
  link() {
    this.gl.linkProgram(this.id);
  }
  use() {
    this.gl.useProgram(this.id), Br.current = this;
  }
};
$(Br, "current");
let Ne = Br, $2 = class extends Wr {
  constructor() {
    super();
  }
};
class hs extends $2 {
  constructor() {
    super();
  }
  static default() {
    return new hs();
  }
}
class K2 extends Array {
  constructor() {
    super();
    $(this, "queue", []);
  }
  build(e) {
    this.createQueue(e);
  }
  createQueue(e) {
    const s = [];
    s.push(
      hs.default()
    ), this.forEach((a) => {
      s.push(
        new Ne(e, a.material.shader)
      ), this.camera.defaultUniform.forEach((f) => {
        s.push(f);
      }), a.material.state.forEach((f) => {
        s.push(f);
      }), a.material.uniform.forEach((f) => {
        s.push(f);
      }), a.geometry.vbos.forEach(
        (f) => {
          s.push(f);
        }
      ), a.geometry.drawers.forEach(
        (f) => {
          s.push(f);
        }
      );
    }), this.camera.defaultUniform.forEach((a) => {
      console.log(a), s.push(a);
    }), console.log(s), this.queue = s;
  }
  destroyQueue(e) {
  }
  render(e) {
    this.destroyQueue(e), this.createQueue(e), e.clearColor(0, 0, 0, 0.5), e.clearDepth(1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), this.queue.forEach((a) => {
      a.tie(e);
    });
    const s = e.getError();
    s !== e.NO_ERROR && console.error("WebGL Error:", s);
  }
}
class X2 {
  constructor() {
  }
}
class Q2 {
  constructor() {
    $(this, "context");
  }
  setContext(n) {
    this.context = n;
  }
}
class J2 extends Q2 {
  constructor() {
    super();
  }
  end() {
  }
  start() {
    console.log("JJJ"), this.context.chain.setNext(this.context.cameraChain);
  }
}
class Ka {
  constructor() {
    $(this, "nextHandler");
  }
  setNext(n) {
    return this.nextHandler = n, n;
  }
  mousedown(n) {
    return this.nextHandler ? this.nextHandler.mousedown(n) : null;
  }
  mouseup(n) {
    return this.nextHandler ? this.nextHandler.mouseup(n) : null;
  }
  mousemove(n) {
    return this.nextHandler ? this.nextHandler.mousemove(n) : null;
  }
}
class V2 extends Ka {
}
const j = 1e-6, Ha = new Float32Array([
  1,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  1
]), kn = class kn extends Float32Array {
  /**
   * Create a {@link Mat3}.
   */
  constructor(...n) {
    switch (n.length) {
      case 9:
        super(n);
        break;
      case 2:
        super(n[0], n[1], 9);
        break;
      case 1:
        const e = n[0];
        typeof e == "number" ? super([
          e,
          e,
          e,
          e,
          e,
          e,
          e,
          e,
          e
        ]) : super(e, 0, 9);
        break;
      default:
        super(Ha);
        break;
    }
  }
  //============
  // Attributes
  //============
  /**
   * A string representation of `this`
   * Equivalent to `Mat3.str(this);`
   */
  get str() {
    return kn.str(this);
  }
  //===================
  // Instance methods
  //===================
  /**
   * Copy the values from another {@link Mat3} into `this`.
   *
   * @param a the source vector
   * @returns `this`
   */
  copy(n) {
    return this.set(n), this;
  }
  /**
   * Set `this` to the identity matrix
   * Equivalent to Mat3.identity(this)
   *
   * @returns `this`
   */
  identity() {
    return this.set(Ha), this;
  }
  /**
   * Multiplies this {@link Mat3} against another one
   * Equivalent to `Mat3.multiply(this, this, b);`
   *
   * @param out - The receiving Matrix
   * @param a - The first operand
   * @param b - The second operand
   * @returns `this`
   */
  multiply(n) {
    return kn.multiply(this, this, n);
  }
  /**
   * Alias for {@link Mat3.multiply}
   */
  mul(n) {
    return this;
  }
  /**
   * Transpose this {@link Mat3}
   * Equivalent to `Mat3.transpose(this, this);`
   *
   * @returns `this`
   */
  transpose() {
    return kn.transpose(this, this);
  }
  /**
   * Inverts this {@link Mat3}
   * Equivalent to `Mat4.invert(this, this);`
   *
   * @returns `this`
   */
  invert() {
    return kn.invert(this, this);
  }
  /**
   * Translate this {@link Mat3} by the given vector
   * Equivalent to `Mat3.translate(this, this, v);`
   *
   * @param v - The {@link Vec2} to translate by
   * @returns `this`
   */
  translate(n) {
    return kn.translate(this, this, n);
  }
  /**
   * Rotates this {@link Mat3} by the given angle around the given axis
   * Equivalent to `Mat3.rotate(this, this, rad);`
   *
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  rotate(n) {
    return kn.rotate(this, this, n);
  }
  /**
   * Scales this {@link Mat3} by the dimensions in the given vec3 not using vectorization
   * Equivalent to `Mat3.scale(this, this, v);`
   *
   * @param v - The {@link Vec2} to scale the matrix by
   * @returns `this`
   */
  scale(n) {
    return kn.scale(this, this, n);
  }
  //================
  // Static methods
  //================
  /**
   * Creates a new, identity {@link Mat3}
   * @category Static
   *
   * @returns A new {@link Mat3}
   */
  static create() {
    return new kn();
  }
  /**
   * Creates a new {@link Mat3} initialized with values from an existing matrix
   * @category Static
   *
   * @param a - Matrix to clone
   * @returns A new {@link Mat3}
   */
  static clone(n) {
    return new kn(n);
  }
  /**
   * Copy the values from one {@link Mat3} to another
   * @category Static
   *
   * @param out - The receiving Matrix
   * @param a - Matrix to copy
   * @returns `out`
   */
  static copy(n, e) {
    return n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[8] = e[8], n;
  }
  /**
   * Create a new {@link Mat3} with the given values
   * @category Static
   *
   * @param values - Matrix components
   * @returns A new {@link Mat3}
   */
  static fromValues(...n) {
    return new kn(...n);
  }
  /**
   * Set the components of a {@link Mat3} to the given values
   * @category Static
   *
   * @param out - The receiving matrix
   * @param values - Matrix components
   * @returns `out`
   */
  static set(n, ...e) {
    return n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[8] = e[8], n;
  }
  /**
   * Set a {@link Mat3} to the identity matrix
   * @category Static
   *
   * @param out - The receiving matrix
   * @returns `out`
   */
  static identity(n) {
    return n[0] = 1, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 1, n[5] = 0, n[6] = 0, n[7] = 0, n[8] = 1, n;
  }
  /**
   * Transpose the values of a {@link Mat3}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out`
   */
  static transpose(n, e) {
    if (n === e) {
      const s = e[1], a = e[2], f = e[5];
      n[1] = e[3], n[2] = e[6], n[3] = s, n[5] = e[7], n[6] = a, n[7] = f;
    } else
      n[0] = e[0], n[1] = e[3], n[2] = e[6], n[3] = e[1], n[4] = e[4], n[5] = e[7], n[6] = e[2], n[7] = e[5], n[8] = e[8];
    return n;
  }
  /**
   * Inverts a {@link Mat3}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out`
   */
  static invert(n, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], p = e[4], g = e[5], x = e[6], v = e[7], m = e[8], T = m * p - g * v, A = -m * l + g * x, w = v * l - p * x;
    let S = s * T + a * A + f * w;
    return S ? (S = 1 / S, n[0] = T * S, n[1] = (-m * a + f * v) * S, n[2] = (g * a - f * p) * S, n[3] = A * S, n[4] = (m * s - f * x) * S, n[5] = (-g * s + f * l) * S, n[6] = w * S, n[7] = (-v * s + a * x) * S, n[8] = (p * s - a * l) * S, n) : null;
  }
  /**
   * Calculates the adjugate of a {@link Mat3}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out`
   */
  static adjoint(n, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], p = e[4], g = e[5], x = e[6], v = e[7], m = e[8];
    return n[0] = p * m - g * v, n[1] = f * v - a * m, n[2] = a * g - f * p, n[3] = g * x - l * m, n[4] = s * m - f * x, n[5] = f * l - s * g, n[6] = l * v - p * x, n[7] = a * x - s * v, n[8] = s * p - a * l, n;
  }
  /**
   * Calculates the determinant of a {@link Mat3}
   * @category Static
   *
   * @param a - the source matrix
   * @returns determinant of a
   */
  static determinant(n) {
    const e = n[0], s = n[1], a = n[2], f = n[3], l = n[4], p = n[5], g = n[6], x = n[7], v = n[8];
    return e * (v * l - p * x) + s * (-v * f + p * g) + a * (x * f - l * g);
  }
  /**
   * Adds two {@link Mat3}'s
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static add(n, e, s) {
    return n[0] = e[0] + s[0], n[1] = e[1] + s[1], n[2] = e[2] + s[2], n[3] = e[3] + s[3], n[4] = e[4] + s[4], n[5] = e[5] + s[5], n[6] = e[6] + s[6], n[7] = e[7] + s[7], n[8] = e[8] + s[8], n;
  }
  /**
   * Subtracts matrix b from matrix a
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static subtract(n, e, s) {
    return n[0] = e[0] - s[0], n[1] = e[1] - s[1], n[2] = e[2] - s[2], n[3] = e[3] - s[3], n[4] = e[4] - s[4], n[5] = e[5] - s[5], n[6] = e[6] - s[6], n[7] = e[7] - s[7], n[8] = e[8] - s[8], n;
  }
  /**
   * Alias for {@link Mat3.subtract}
   * @category Static
   */
  static sub(n, e, s) {
    return n;
  }
  /**
   * Multiplies two {@link Mat3}s
   * @category Static
   *
   * @param out - The receiving Matrix
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static multiply(n, e, s) {
    const a = e[0], f = e[1], l = e[2], p = e[3], g = e[4], x = e[5], v = e[6], m = e[7], T = e[8];
    let A = s[0], w = s[1], S = s[2];
    return n[0] = A * a + w * p + S * v, n[1] = A * f + w * g + S * m, n[2] = A * l + w * x + S * T, A = s[3], w = s[4], S = s[5], n[3] = A * a + w * p + S * v, n[4] = A * f + w * g + S * m, n[5] = A * l + w * x + S * T, A = s[6], w = s[7], S = s[8], n[6] = A * a + w * p + S * v, n[7] = A * f + w * g + S * m, n[8] = A * l + w * x + S * T, n;
  }
  /**
   * Alias for {@link Mat3.multiply}
   * @category Static
   */
  static mul(n, e, s) {
    return n;
  }
  /**
   * Translate a {@link Mat3} by the given vector
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to translate
   * @param v - vector to translate by
   * @returns `out`
   */
  static translate(n, e, s) {
    const a = e[0], f = e[1], l = e[2], p = e[3], g = e[4], x = e[5], v = e[6], m = e[7], T = e[8], A = s[0], w = s[1];
    return n[0] = a, n[1] = f, n[2] = l, n[3] = p, n[4] = g, n[5] = x, n[6] = A * a + w * p + v, n[7] = A * f + w * g + m, n[8] = A * l + w * x + T, n;
  }
  /**
   * Rotates a {@link Mat3} by the given angle
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to rotate
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static rotate(n, e, s) {
    const a = e[0], f = e[1], l = e[2], p = e[3], g = e[4], x = e[5], v = e[6], m = e[7], T = e[8], A = Math.sin(s), w = Math.cos(s);
    return n[0] = w * a + A * p, n[1] = w * f + A * g, n[2] = w * l + A * x, n[3] = w * p - A * a, n[4] = w * g - A * f, n[5] = w * x - A * l, n[6] = v, n[7] = m, n[8] = T, n;
  }
  /**
   * Scales the {@link Mat3} by the dimensions in the given {@link Vec2}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to scale
   * @param v - the {@link Vec2} to scale the matrix by
   * @returns `out`
   **/
  static scale(n, e, s) {
    const a = s[0], f = s[1];
    return n[0] = a * e[0], n[1] = a * e[1], n[2] = a * e[2], n[3] = f * e[3], n[4] = f * e[4], n[5] = f * e[5], n[6] = e[6], n[7] = e[7], n[8] = e[8], n;
  }
  /**
   * Creates a {@link Mat3} from a vector translation
   * This is equivalent to (but much faster than):
   *
   *     mat3.identity(dest);
   *     mat3.translate(dest, dest, vec);
   * @category Static
   *
   * @param out - {@link Mat3} receiving operation result
   * @param v - Translation vector
   * @returns `out`
   */
  static fromTranslation(n, e) {
    return n[0] = 1, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 1, n[5] = 0, n[6] = e[0], n[7] = e[1], n[8] = 1, n;
  }
  /**
   * Creates a {@link Mat3} from a given angle around a given axis
   * This is equivalent to (but much faster than):
   *
   *     mat3.identity(dest);
   *     mat3.rotate(dest, dest, rad);
   * @category Static
   *
   * @param out - {@link Mat3} receiving operation result
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static fromRotation(n, e) {
    const s = Math.sin(e), a = Math.cos(e);
    return n[0] = a, n[1] = s, n[2] = 0, n[3] = -s, n[4] = a, n[5] = 0, n[6] = 0, n[7] = 0, n[8] = 1, n;
  }
  /**
   * Creates a {@link Mat3} from a vector scaling
   * This is equivalent to (but much faster than):
   *
   *     mat3.identity(dest);
   *     mat3.scale(dest, dest, vec);
   * @category Static
   *
   * @param out - {@link Mat3} receiving operation result
   * @param v - Scaling vector
   * @returns `out`
   */
  static fromScaling(n, e) {
    return n[0] = e[0], n[1] = 0, n[2] = 0, n[3] = 0, n[4] = e[1], n[5] = 0, n[6] = 0, n[7] = 0, n[8] = 1, n;
  }
  /**
   * Copies the upper-left 3x3 values of a {@link Mat2d} into the given
   * {@link Mat3}.
   * @category Static
   *
   * @param out - the receiving 3x3 matrix
   * @param a - the source 2x3 matrix
   * @returns `out`
   */
  static fromMat2d(n, e) {
    return n[0] = e[0], n[1] = e[1], n[2] = 0, n[3] = e[2], n[4] = e[3], n[5] = 0, n[6] = e[4], n[7] = e[5], n[8] = 1, n;
  }
  /**
   * Calculates a {@link Mat3} from the given quaternion
   *
   * @param out - {@link Mat3} receiving operation result
   * @param q - {@link Quat} to create matrix from
   * @returns `out`
   */
  static fromQuat(n, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], p = s + s, g = a + a, x = f + f, v = s * p, m = a * p, T = a * g, A = f * p, w = f * g, S = f * x, R = l * p, C = l * g, D = l * x;
    return n[0] = 1 - T - S, n[3] = m - D, n[6] = A + C, n[1] = m + D, n[4] = 1 - v - S, n[7] = w - R, n[2] = A - C, n[5] = w + R, n[8] = 1 - v - T, n;
  }
  /**
   * Copies the upper-left 3x3 values of a {@link Mat4} into the given
   * {@link Mat3}.
   * @category Static
   *
   * @param out - the receiving 3x3 matrix
   * @param a - the source 4x4 matrix
   * @returns `out`
   */
  static fromMat4(n, e) {
    return n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[4], n[4] = e[5], n[5] = e[6], n[6] = e[8], n[7] = e[9], n[8] = e[10], n;
  }
  /**
   * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
   * @category Static
   *
   * @param {mat3} out mat3 receiving operation result
   * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
   * @returns `out`
   */
  static normalFromMat4(n, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], p = e[4], g = e[5], x = e[6], v = e[7], m = e[8], T = e[9], A = e[10], w = e[11], S = e[12], R = e[13], C = e[14], D = e[15], W = s * g - a * p, F = s * x - f * p, O = s * v - l * p, U = a * x - f * g, q = a * v - l * g, en = f * v - l * x, nn = m * R - T * S, hn = m * C - A * S, H = m * D - w * S, xn = T * C - A * R, dn = T * D - w * R, on = A * D - w * C;
    let K = W * on - F * dn + O * xn + U * H - q * hn + en * nn;
    return K ? (K = 1 / K, n[0] = (g * on - x * dn + v * xn) * K, n[1] = (x * H - p * on - v * hn) * K, n[2] = (p * dn - g * H + v * nn) * K, n[3] = (f * dn - a * on - l * xn) * K, n[4] = (s * on - f * H + l * hn) * K, n[5] = (a * H - s * dn - l * nn) * K, n[6] = (R * en - C * q + D * U) * K, n[7] = (C * O - S * en - D * F) * K, n[8] = (S * q - R * O + D * W) * K, n) : null;
  }
  /**
   * Generates a 2D projection matrix with the given bounds
   * @category Static
   *
   * @param out mat3 frustum matrix will be written into
   * @param width Width of your gl context
   * @param height Height of gl context
   * @returns `out`
   */
  static projection(n, e, s) {
    return n[0] = 2 / e, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = -2 / s, n[5] = 0, n[6] = -1, n[7] = 1, n[8] = 1, n;
  }
  /**
   * Returns Frobenius norm of a {@link Mat3}
   * @category Static
   *
   * @param a - the matrix to calculate Frobenius norm of
   * @returns Frobenius norm
   */
  static frob(n) {
    return Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2] + n[3] * n[3] + n[4] * n[4] + n[5] * n[5] + n[6] * n[6] + n[7] * n[7] + n[8] * n[8]);
  }
  /**
   * Multiply each element of a {@link Mat3} by a scalar.
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to scale
   * @param b - amount to scale the matrix's elements by
   * @returns `out`
   */
  static multiplyScalar(n, e, s) {
    return n[0] = e[0] * s, n[1] = e[1] * s, n[2] = e[2] * s, n[3] = e[3] * s, n[4] = e[4] * s, n[5] = e[5] * s, n[6] = e[6] * s, n[7] = e[7] * s, n[8] = e[8] * s, n;
  }
  /**
   * Adds two {@link Mat3}'s after multiplying each element of the second operand by a scalar value.
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param scale - the amount to scale b's elements by before adding
   * @returns `out`
   */
  static multiplyScalarAndAdd(n, e, s, a) {
    return n[0] = e[0] + s[0] * a, n[1] = e[1] + s[1] * a, n[2] = e[2] + s[2] * a, n[3] = e[3] + s[3] * a, n[4] = e[4] + s[4] * a, n[5] = e[5] + s[5] * a, n[6] = e[6] + s[6] * a, n[7] = e[7] + s[7] * a, n[8] = e[8] + s[8] * a, n;
  }
  /**
   * Returns whether or not two {@link Mat3}s have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first matrix.
   * @param b - The second matrix.
   * @returns True if the matrices are equal, false otherwise.
   */
  static exactEquals(n, e) {
    return n[0] === e[0] && n[1] === e[1] && n[2] === e[2] && n[3] === e[3] && n[4] === e[4] && n[5] === e[5] && n[6] === e[6] && n[7] === e[7] && n[8] === e[8];
  }
  /**
   * Returns whether or not two {@link Mat3}s have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first matrix.
   * @param b - The second matrix.
   * @returns True if the matrices are equal, false otherwise.
   */
  static equals(n, e) {
    const s = n[0], a = n[1], f = n[2], l = n[3], p = n[4], g = n[5], x = n[6], v = n[7], m = n[8], T = e[0], A = e[1], w = e[2], S = e[3], R = e[4], C = e[5], D = e[6], W = e[7], F = e[8];
    return Math.abs(s - T) <= j * Math.max(1, Math.abs(s), Math.abs(T)) && Math.abs(a - A) <= j * Math.max(1, Math.abs(a), Math.abs(A)) && Math.abs(f - w) <= j * Math.max(1, Math.abs(f), Math.abs(w)) && Math.abs(l - S) <= j * Math.max(1, Math.abs(l), Math.abs(S)) && Math.abs(p - R) <= j * Math.max(1, Math.abs(p), Math.abs(R)) && Math.abs(g - C) <= j * Math.max(1, Math.abs(g), Math.abs(C)) && Math.abs(x - D) <= j * Math.max(1, Math.abs(x), Math.abs(D)) && Math.abs(v - W) <= j * Math.max(1, Math.abs(v), Math.abs(W)) && Math.abs(m - F) <= j * Math.max(1, Math.abs(m), Math.abs(F));
  }
  /**
   * Returns a string representation of a {@link Mat3}
   * @category Static
   *
   * @param a - matrix to represent as a string
   * @returns string representation of the matrix
   */
  static str(n) {
    return `Mat3(${n.join(", ")})`;
  }
};
/**
 * The number of bytes in a {@link Mat3}.
 */
$(kn, "BYTE_LENGTH", 9 * Float32Array.BYTES_PER_ELEMENT);
let Pt = kn;
Pt.prototype.mul = Pt.prototype.multiply;
Pt.mul = Pt.multiply;
Pt.sub = Pt.subtract;
const ht = class ht extends Float32Array {
  /**
  * Create a {@link Vec3}.
  */
  constructor(...n) {
    switch (n.length) {
      case 3:
        super(n);
        break;
      case 2:
        super(n[0], n[1], 3);
        break;
      case 1: {
        const e = n[0];
        typeof e == "number" ? super([e, e, e]) : super(e, 0, 3);
        break;
      }
      default:
        super(3);
        break;
    }
  }
  //============
  // Attributes
  //============
  // Getters and setters to make component access read better.
  // These are likely to be a little bit slower than direct array access.
  /**
   * The x component of the vector. Equivalent to `this[0];`
   * @category Vector components
   */
  get x() {
    return this[0];
  }
  set x(n) {
    this[0] = n;
  }
  /**
   * The y component of the vector. Equivalent to `this[1];`
   * @category Vector components
   */
  get y() {
    return this[1];
  }
  set y(n) {
    this[1] = n;
  }
  /**
   * The z component of the vector. Equivalent to `this[2];`
   * @category Vector components
   */
  get z() {
    return this[2];
  }
  set z(n) {
    this[2] = n;
  }
  // Alternate set of getters and setters in case this is being used to define
  // a color.
  /**
   * The r component of the vector. Equivalent to `this[0];`
   * @category Color components
   */
  get r() {
    return this[0];
  }
  set r(n) {
    this[0] = n;
  }
  /**
   * The g component of the vector. Equivalent to `this[1];`
   * @category Color components
   */
  get g() {
    return this[1];
  }
  set g(n) {
    this[1] = n;
  }
  /**
   * The b component of the vector. Equivalent to `this[2];`
   * @category Color components
   */
  get b() {
    return this[2];
  }
  set b(n) {
    this[2] = n;
  }
  /**
   * The magnitude (length) of this.
   * Equivalent to `Vec3.magnitude(this);`
   *
   * Magnitude is used because the `length` attribute is already defined by
   * `Float32Array` to mean the number of elements in the array.
   */
  get magnitude() {
    const n = this[0], e = this[1], s = this[2];
    return Math.sqrt(n * n + e * e + s * s);
  }
  /**
   * Alias for {@link Vec3.magnitude}
   */
  get mag() {
    return this.magnitude;
  }
  /**
   * The squared magnitude (length) of `this`.
   * Equivalent to `Vec3.squaredMagnitude(this);`
   */
  get squaredMagnitude() {
    const n = this[0], e = this[1], s = this[2];
    return n * n + e * e + s * s;
  }
  /**
   * Alias for {@link Vec3.squaredMagnitude}
   */
  get sqrMag() {
    return this.squaredMagnitude;
  }
  /**
   * A string representation of `this`
   * Equivalent to `Vec3.str(this);`
   */
  get str() {
    return ht.str(this);
  }
  //===================
  // Instances methods
  //===================
  /**
   * Copy the values from another {@link Vec3} into `this`.
   *
   * @param a the source vector
   * @returns `this`
   */
  copy(n) {
    return this.set(n), this;
  }
  /**
   * Adds a {@link Vec3} to `this`.
   * Equivalent to `Vec3.add(this, this, b);`
   *
   * @param b - The vector to add to `this`
   * @returns `this`
   */
  add(n) {
    return this[0] += n[0], this[1] += n[1], this[2] += n[2], this;
  }
  /**
   * Subtracts a {@link Vec3} from `this`.
   * Equivalent to `Vec3.subtract(this, this, b);`
   *
   * @param b - The vector to subtract from `this`
   * @returns `this`
   */
  subtract(n) {
    return this[0] -= n[0], this[1] -= n[1], this[2] -= n[2], this;
  }
  /**
   * Alias for {@link Vec3.subtract}
   */
  sub(n) {
    return this;
  }
  /**
   * Multiplies `this` by a {@link Vec3}.
   * Equivalent to `Vec3.multiply(this, this, b);`
   *
   * @param b - The vector to multiply `this` by
   * @returns `this`
   */
  multiply(n) {
    return this[0] *= n[0], this[1] *= n[1], this[2] *= n[2], this;
  }
  /**
   * Alias for {@link Vec3.multiply}
   */
  mul(n) {
    return this;
  }
  /**
   * Divides `this` by a {@link Vec3}.
   * Equivalent to `Vec3.divide(this, this, b);`
   *
   * @param b - The vector to divide `this` by
   * @returns `this`
   */
  divide(n) {
    return this[0] /= n[0], this[1] /= n[1], this[2] /= n[2], this;
  }
  /**
   * Alias for {@link Vec3.divide}
   */
  div(n) {
    return this;
  }
  /**
   * Scales `this` by a scalar number.
   * Equivalent to `Vec3.scale(this, this, b);`
   *
   * @param b - Amount to scale `this` by
   * @returns `this`
   */
  scale(n) {
    return this[0] *= n, this[1] *= n, this[2] *= n, this;
  }
  /**
   * Calculates `this` scaled by a scalar value then adds the result to `this`.
   * Equivalent to `Vec3.scaleAndAdd(this, this, b, scale);`
   *
   * @param b - The vector to add to `this`
   * @param scale - The amount to scale `b` by before adding
   * @returns `this`
   */
  scaleAndAdd(n, e) {
    return this[0] += n[0] * e, this[1] += n[1] * e, this[2] += n[2] * e, this;
  }
  /**
   * Calculates the euclidian distance between another {@link Vec3} and `this`.
   * Equivalent to `Vec3.distance(this, b);`
   *
   * @param b - The vector to calculate the distance to
   * @returns Distance between `this` and `b`
   */
  distance(n) {
    return ht.distance(this, n);
  }
  /**
   * Alias for {@link Vec3.distance}
   */
  dist(n) {
    return 0;
  }
  /**
   * Calculates the squared euclidian distance between another {@link Vec3} and `this`.
   * Equivalent to `Vec3.squaredDistance(this, b);`
   *
   * @param b The vector to calculate the squared distance to
   * @returns Squared distance between `this` and `b`
   */
  squaredDistance(n) {
    return ht.squaredDistance(this, n);
  }
  /**
   * Alias for {@link Vec3.squaredDistance}
   */
  sqrDist(n) {
    return 0;
  }
  /**
   * Negates the components of `this`.
   * Equivalent to `Vec3.negate(this, this);`
   *
   * @returns `this`
   */
  negate() {
    return this[0] *= -1, this[1] *= -1, this[2] *= -1, this;
  }
  /**
   * Inverts the components of `this`.
   * Equivalent to `Vec3.inverse(this, this);`
   *
   * @returns `this`
   */
  invert() {
    return this[0] = 1 / this[0], this[1] = 1 / this[1], this[2] = 1 / this[2], this;
  }
  /**
   * Calculates the dot product of this and another {@link Vec3}.
   * Equivalent to `Vec3.dot(this, b);`
   *
   * @param b - The second operand
   * @returns Dot product of `this` and `b`
   */
  dot(n) {
    return this[0] * n[0] + this[1] * n[1] + this[2] * n[2];
  }
  /**
   * Normalize `this`.
   * Equivalent to `Vec3.normalize(this, this);`
   *
   * @returns `this`
   */
  normalize() {
    return ht.normalize(this, this);
  }
  //================
  // Static methods
  //================
  /**
   * Creates a new, empty vec3
   * @category Static
   *
   * @returns a new 3D vector
   */
  static create() {
    return new ht();
  }
  /**
   * Creates a new vec3 initialized with values from an existing vector
   * @category Static
   *
   * @param a - vector to clone
   * @returns a new 3D vector
   */
  static clone(n) {
    return new ht(n);
  }
  /**
   * Calculates the magnitude (length) of a {@link Vec3}
   * @category Static
   *
   * @param a - Vector to calculate magnitude of
   * @returns Magnitude of a
   */
  static magnitude(n) {
    let e = n[0], s = n[1], a = n[2];
    return Math.sqrt(e * e + s * s + a * a);
  }
  /**
   * Alias for {@link Vec3.magnitude}
   * @category Static
   */
  static mag(n) {
    return 0;
  }
  /**
   * Alias for {@link Vec3.magnitude}
   * @category Static
   * @deprecated Use {@link Vec3.magnitude} to avoid conflicts with builtin `length` methods/attribs
   *
   * @param a - vector to calculate length of
   * @returns length of a
   */
  // @ts-ignore: Length conflicts with Function.length
  static length(n) {
    return 0;
  }
  /**
   * Alias for {@link Vec3.magnitude}
   * @category Static
   * @deprecated Use {@link Vec3.mag}
   */
  static len(n) {
    return 0;
  }
  /**
   * Creates a new vec3 initialized with the given values
   * @category Static
   *
   * @param x - X component
   * @param y - Y component
   * @param z - Z component
   * @returns a new 3D vector
   */
  static fromValues(n, e, s) {
    return new ht(n, e, s);
  }
  /**
   * Copy the values from one vec3 to another
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the source vector
   * @returns `out`
   */
  static copy(n, e) {
    return n[0] = e[0], n[1] = e[1], n[2] = e[2], n;
  }
  /**
   * Set the components of a vec3 to the given values
   * @category Static
   *
   * @param out - the receiving vector
   * @param x - X component
   * @param y - Y component
   * @param z - Z component
   * @returns `out`
   */
  static set(n, e, s, a) {
    return n[0] = e, n[1] = s, n[2] = a, n;
  }
  /**
   * Adds two {@link Vec3}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static add(n, e, s) {
    return n[0] = e[0] + s[0], n[1] = e[1] + s[1], n[2] = e[2] + s[2], n;
  }
  /**
   * Subtracts vector b from vector a
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static subtract(n, e, s) {
    return n[0] = e[0] - s[0], n[1] = e[1] - s[1], n[2] = e[2] - s[2], n;
  }
  /**
   * Alias for {@link Vec3.subtract}
   * @category Static
   */
  static sub(n, e, s) {
    return [0, 0, 0];
  }
  /**
   * Multiplies two vec3's
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static multiply(n, e, s) {
    return n[0] = e[0] * s[0], n[1] = e[1] * s[1], n[2] = e[2] * s[2], n;
  }
  /**
   * Alias for {@link Vec3.multiply}
   * @category Static
   */
  static mul(n, e, s) {
    return [0, 0, 0];
  }
  /**
   * Divides two vec3's
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static divide(n, e, s) {
    return n[0] = e[0] / s[0], n[1] = e[1] / s[1], n[2] = e[2] / s[2], n;
  }
  /**
   * Alias for {@link Vec3.divide}
   * @category Static
   */
  static div(n, e, s) {
    return [0, 0, 0];
  }
  /**
   * Math.ceil the components of a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to ceil
   * @returns `out`
   */
  static ceil(n, e) {
    return n[0] = Math.ceil(e[0]), n[1] = Math.ceil(e[1]), n[2] = Math.ceil(e[2]), n;
  }
  /**
   * Math.floor the components of a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to floor
   * @returns `out`
   */
  static floor(n, e) {
    return n[0] = Math.floor(e[0]), n[1] = Math.floor(e[1]), n[2] = Math.floor(e[2]), n;
  }
  /**
   * Returns the minimum of two vec3's
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static min(n, e, s) {
    return n[0] = Math.min(e[0], s[0]), n[1] = Math.min(e[1], s[1]), n[2] = Math.min(e[2], s[2]), n;
  }
  /**
   * Returns the maximum of two vec3's
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static max(n, e, s) {
    return n[0] = Math.max(e[0], s[0]), n[1] = Math.max(e[1], s[1]), n[2] = Math.max(e[2], s[2]), n;
  }
  /**
   * symmetric round the components of a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to round
   * @returns `out`
   */
  /*static round(out: Vec3Like, a: Readonly<Vec3Like>): Vec3Like {
    out[0] = glMatrix.round(a[0]);
    out[1] = glMatrix.round(a[1]);
    out[2] = glMatrix.round(a[2]);
    return out;
  }*/
  /**
   * Scales a vec3 by a scalar number
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to scale
   * @param scale - amount to scale the vector by
   * @returns `out`
   */
  static scale(n, e, s) {
    return n[0] = e[0] * s, n[1] = e[1] * s, n[2] = e[2] * s, n;
  }
  /**
   * Adds two vec3's after scaling the second operand by a scalar value
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param scale - the amount to scale b by before adding
   * @returns `out`
   */
  static scaleAndAdd(n, e, s, a) {
    return n[0] = e[0] + s[0] * a, n[1] = e[1] + s[1] * a, n[2] = e[2] + s[2] * a, n;
  }
  /**
   * Calculates the euclidian distance between two vec3's
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns distance between a and b
   */
  static distance(n, e) {
    const s = e[0] - n[0], a = e[1] - n[1], f = e[2] - n[2];
    return Math.sqrt(s * s + a * a + f * f);
  }
  /**
   * Alias for {@link Vec3.distance}
   */
  static dist(n, e) {
    return 0;
  }
  /**
   * Calculates the squared euclidian distance between two vec3's
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns squared distance between a and b
   */
  static squaredDistance(n, e) {
    const s = e[0] - n[0], a = e[1] - n[1], f = e[2] - n[2];
    return s * s + a * a + f * f;
  }
  /**
   * Alias for {@link Vec3.squaredDistance}
   */
  static sqrDist(n, e) {
    return 0;
  }
  /**
   * Calculates the squared length of a vec3
   * @category Static
   *
   * @param a - vector to calculate squared length of
   * @returns squared length of a
   */
  static squaredLength(n) {
    const e = n[0], s = n[1], a = n[2];
    return e * e + s * s + a * a;
  }
  /**
   * Alias for {@link Vec3.squaredLength}
   */
  static sqrLen(n, e) {
    return 0;
  }
  /**
   * Negates the components of a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to negate
   * @returns `out`
   */
  static negate(n, e) {
    return n[0] = -e[0], n[1] = -e[1], n[2] = -e[2], n;
  }
  /**
   * Returns the inverse of the components of a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to invert
   * @returns `out`
   */
  static inverse(n, e) {
    return n[0] = 1 / e[0], n[1] = 1 / e[1], n[2] = 1 / e[2], n;
  }
  /**
   * Normalize a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to normalize
   * @returns `out`
   */
  static normalize(n, e) {
    const s = e[0], a = e[1], f = e[2];
    let l = s * s + a * a + f * f;
    return l > 0 && (l = 1 / Math.sqrt(l)), n[0] = e[0] * l, n[1] = e[1] * l, n[2] = e[2] * l, n;
  }
  /**
   * Calculates the dot product of two vec3's
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns dot product of a and b
   */
  static dot(n, e) {
    return n[0] * e[0] + n[1] * e[1] + n[2] * e[2];
  }
  /**
   * Computes the cross product of two vec3's
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static cross(n, e, s) {
    const a = e[0], f = e[1], l = e[2], p = s[0], g = s[1], x = s[2];
    return n[0] = f * x - l * g, n[1] = l * p - a * x, n[2] = a * g - f * p, n;
  }
  /**
   * Performs a linear interpolation between two vec3's
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param t - interpolation amount, in the range [0-1], between the two inputs
   * @returns `out`
   */
  static lerp(n, e, s, a) {
    const f = e[0], l = e[1], p = e[2];
    return n[0] = f + a * (s[0] - f), n[1] = l + a * (s[1] - l), n[2] = p + a * (s[2] - p), n;
  }
  /**
   * Performs a spherical linear interpolation between two vec3's
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param t - interpolation amount, in the range [0-1], between the two inputs
   * @returns `out`
   */
  static slerp(n, e, s, a) {
    const f = Math.acos(Math.min(Math.max(ht.dot(e, s), -1), 1)), l = Math.sin(f), p = Math.sin((1 - a) * f) / l, g = Math.sin(a * f) / l;
    return n[0] = p * e[0] + g * s[0], n[1] = p * e[1] + g * s[1], n[2] = p * e[2] + g * s[2], n;
  }
  /**
   * Performs a hermite interpolation with two control points
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param c - the third operand
   * @param d - the fourth operand
   * @param t - interpolation amount, in the range [0-1], between the two inputs
   * @returns `out`
   */
  static hermite(n, e, s, a, f, l) {
    const p = l * l, g = p * (2 * l - 3) + 1, x = p * (l - 2) + l, v = p * (l - 1), m = p * (3 - 2 * l);
    return n[0] = e[0] * g + s[0] * x + a[0] * v + f[0] * m, n[1] = e[1] * g + s[1] * x + a[1] * v + f[1] * m, n[2] = e[2] * g + s[2] * x + a[2] * v + f[2] * m, n;
  }
  /**
   * Performs a bezier interpolation with two control points
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param c - the third operand
   * @param d - the fourth operand
   * @param t - interpolation amount, in the range [0-1], between the two inputs
   * @returns `out`
   */
  static bezier(n, e, s, a, f, l) {
    const p = 1 - l, g = p * p, x = l * l, v = g * p, m = 3 * l * g, T = 3 * x * p, A = x * l;
    return n[0] = e[0] * v + s[0] * m + a[0] * T + f[0] * A, n[1] = e[1] * v + s[1] * m + a[1] * T + f[1] * A, n[2] = e[2] * v + s[2] * m + a[2] * T + f[2] * A, n;
  }
  /**
   * Generates a random vector with the given scale
   * @category Static
   *
   * @param out - the receiving vector
   * @param {Number} [scale] Length of the resulting vector. If omitted, a unit vector will be returned
   * @returns `out`
   */
  /*static random(out: Vec3Like, scale) {
      scale = scale === undefined ? 1.0 : scale;
  
      let r = glMatrix.RANDOM() * 2.0 * Math.PI;
      let z = glMatrix.RANDOM() * 2.0 - 1.0;
      let zScale = Math.sqrt(1.0 - z * z) * scale;
  
      out[0] = Math.cos(r) * zScale;
      out[1] = Math.sin(r) * zScale;
      out[2] = z * scale;
      return out;
    }*/
  /**
   * Transforms the vec3 with a mat4.
   * 4th vector component is implicitly '1'
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to transform
   * @param m - matrix to transform with
   * @returns `out`
   */
  static transformMat4(n, e, s) {
    const a = e[0], f = e[1], l = e[2], p = s[3] * a + s[7] * f + s[11] * l + s[15] || 1;
    return n[0] = (s[0] * a + s[4] * f + s[8] * l + s[12]) / p, n[1] = (s[1] * a + s[5] * f + s[9] * l + s[13]) / p, n[2] = (s[2] * a + s[6] * f + s[10] * l + s[14]) / p, n;
  }
  /**
   * Transforms the vec3 with a mat3.
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to transform
   * @param m - the 3x3 matrix to transform with
   * @returns `out`
   */
  static transformMat3(n, e, s) {
    let a = e[0], f = e[1], l = e[2];
    return n[0] = a * s[0] + f * s[3] + l * s[6], n[1] = a * s[1] + f * s[4] + l * s[7], n[2] = a * s[2] + f * s[5] + l * s[8], n;
  }
  /**
   * Transforms the vec3 with a quat
   * Can also be used for dual quaternions. (Multiply it with the real part)
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to transform
   * @param q - quaternion to transform with
   * @returns `out`
   */
  static transformQuat(n, e, s) {
    const a = s[0], f = s[1], l = s[2], p = s[3] * 2, g = e[0], x = e[1], v = e[2], m = f * v - l * x, T = l * g - a * v, A = a * x - f * g, w = (f * A - l * T) * 2, S = (l * m - a * A) * 2, R = (a * T - f * m) * 2;
    return n[0] = g + m * p + w, n[1] = x + T * p + S, n[2] = v + A * p + R, n;
  }
  /**
   * Rotate a 3D vector around the x-axis
   * @param out - The receiving vec3
   * @param a - The vec3 point to rotate
   * @param b - The origin of the rotation
   * @param rad - The angle of rotation in radians
   * @returns `out`
   */
  static rotateX(n, e, s, a) {
    const f = s[1], l = s[2], p = e[1] - f, g = e[2] - l;
    return n[0] = e[0], n[1] = p * Math.cos(a) - g * Math.sin(a) + f, n[2] = p * Math.sin(a) + g * Math.cos(a) + l, n;
  }
  /**
   * Rotate a 3D vector around the y-axis
   * @param out - The receiving vec3
   * @param a - The vec3 point to rotate
   * @param b - The origin of the rotation
   * @param rad - The angle of rotation in radians
   * @returns `out`
   */
  static rotateY(n, e, s, a) {
    const f = s[0], l = s[2], p = e[0] - f, g = e[2] - l;
    return n[0] = g * Math.sin(a) + p * Math.cos(a) + f, n[1] = e[1], n[2] = g * Math.cos(a) - p * Math.sin(a) + l, n;
  }
  /**
   * Rotate a 3D vector around the z-axis
   * @param out - The receiving vec3
   * @param a - The vec3 point to rotate
   * @param b - The origin of the rotation
   * @param rad - The angle of rotation in radians
   * @returns `out`
   */
  static rotateZ(n, e, s, a) {
    const f = s[0], l = s[1], p = e[0] - f, g = e[1] - l;
    return n[0] = p * Math.cos(a) - g * Math.sin(a) + f, n[1] = p * Math.sin(a) + g * Math.cos(a) + l, n[2] = s[2], n;
  }
  /**
   * Get the angle between two 3D vectors
   * @param a - The first operand
   * @param b - The second operand
   * @returns The angle in radians
   */
  static angle(n, e) {
    const s = n[0], a = n[1], f = n[2], l = e[0], p = e[1], g = e[2], x = Math.sqrt((s * s + a * a + f * f) * (l * l + p * p + g * g)), v = x && ht.dot(n, e) / x;
    return Math.acos(Math.min(Math.max(v, -1), 1));
  }
  /**
   * Set the components of a vec3 to zero
   * @category Static
   *
   * @param out - the receiving vector
   * @returns `out`
   */
  static zero(n) {
    return n[0] = 0, n[1] = 0, n[2] = 0, n;
  }
  /**
   * Returns a string representation of a vector
   * @category Static
   *
   * @param a - vector to represent as a string
   * @returns string representation of the vector
   */
  static str(n) {
    return `Vec3(${n.join(", ")})`;
  }
  /**
   * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static exactEquals(n, e) {
    return n[0] === e[0] && n[1] === e[1] && n[2] === e[2];
  }
  /**
   * Returns whether or not the vectors have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static equals(n, e) {
    const s = n[0], a = n[1], f = n[2], l = e[0], p = e[1], g = e[2];
    return Math.abs(s - l) <= j * Math.max(1, Math.abs(s), Math.abs(l)) && Math.abs(a - p) <= j * Math.max(1, Math.abs(a), Math.abs(p)) && Math.abs(f - g) <= j * Math.max(1, Math.abs(f), Math.abs(g));
  }
};
/**
* The number of bytes in a {@link Vec3}.
*/
$(ht, "BYTE_LENGTH", 3 * Float32Array.BYTES_PER_ELEMENT);
let J = ht;
J.prototype.sub = J.prototype.subtract;
J.prototype.mul = J.prototype.multiply;
J.prototype.div = J.prototype.divide;
J.prototype.dist = J.prototype.distance;
J.prototype.sqrDist = J.prototype.squaredDistance;
J.sub = J.subtract;
J.mul = J.multiply;
J.div = J.divide;
J.dist = J.distance;
J.sqrDist = J.squaredDistance;
J.sqrLen = J.squaredLength;
J.mag = J.magnitude;
J.length = J.magnitude;
J.len = J.magnitude;
const gn = J, Ga = new Float32Array([
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  1
]), Sn = class Sn extends Float32Array {
  /**
   * Create a {@link Mat4}.
   */
  constructor(...n) {
    switch (n.length) {
      case 16:
        super(n);
        break;
      case 2:
        super(n[0], n[1], 16);
        break;
      case 1:
        const e = n[0];
        typeof e == "number" ? super([
          e,
          e,
          e,
          e,
          e,
          e,
          e,
          e,
          e,
          e,
          e,
          e,
          e,
          e,
          e,
          e
        ]) : super(e, 0, 16);
        break;
      default:
        super(Ga);
        break;
    }
  }
  //============
  // Attributes
  //============
  /**
   * A string representation of `this`
   * Equivalent to `Mat4.str(this);`
   */
  get str() {
    return Sn.str(this);
  }
  //===================
  // Instance methods
  //===================
  /**
   * Copy the values from another {@link Mat4} into `this`.
   *
   * @param a the source vector
   * @returns `this`
   */
  copy(n) {
    return this.set(n), this;
  }
  /**
   * Set `this` to the identity matrix
   * Equivalent to Mat4.identity(this)
   *
   * @returns `this`
   */
  identity() {
    return this.set(Ga), this;
  }
  /**
   * Multiplies this {@link Mat4} against another one
   * Equivalent to `Mat4.multiply(this, this, b);`
   *
   * @param out - The receiving Matrix
   * @param a - The first operand
   * @param b - The second operand
   * @returns `this`
   */
  multiply(n) {
    return Sn.multiply(this, this, n);
  }
  /**
   * Alias for {@link Mat4.multiply}
   */
  mul(n) {
    return this;
  }
  /**
   * Transpose this {@link Mat4}
   * Equivalent to `Mat4.transpose(this, this);`
   *
   * @returns `this`
   */
  transpose() {
    return Sn.transpose(this, this);
  }
  /**
   * Inverts this {@link Mat4}
   * Equivalent to `Mat4.invert(this, this);`
   *
   * @returns `this`
   */
  invert() {
    return Sn.invert(this, this);
  }
  /**
   * Translate this {@link Mat4} by the given vector
   * Equivalent to `Mat4.translate(this, this, v);`
   *
   * @param v - The {@link Vec3} to translate by
   * @returns `this`
   */
  translate(n) {
    return Sn.translate(this, this, n);
  }
  /**
   * Rotates this {@link Mat4} by the given angle around the given axis
   * Equivalent to `Mat4.rotate(this, this, rad, axis);`
   *
   * @param rad - the angle to rotate the matrix by
   * @param axis - the axis to rotate around
   * @returns `out`
   */
  rotate(n, e) {
    return Sn.rotate(this, this, n, e);
  }
  /**
   * Scales this {@link Mat4} by the dimensions in the given vec3 not using vectorization
   * Equivalent to `Mat4.scale(this, this, v);`
   *
   * @param v - The {@link Vec3} to scale the matrix by
   * @returns `this`
   */
  scale(n) {
    return Sn.scale(this, this, n);
  }
  /**
   * Rotates this {@link Mat4} by the given angle around the X axis
   * Equivalent to `Mat4.rotateX(this, this, rad);`
   *
   * @param rad - the angle to rotate the matrix by
   * @returns `this`
   */
  rotateX(n) {
    return Sn.rotateX(this, this, n);
  }
  /**
   * Rotates this {@link Mat4} by the given angle around the Y axis
   * Equivalent to `Mat4.rotateY(this, this, rad);`
   *
   * @param rad - the angle to rotate the matrix by
   * @returns `this`
   */
  rotateY(n) {
    return Sn.rotateY(this, this, n);
  }
  /**
   * Rotates this {@link Mat4} by the given angle around the Z axis
   * Equivalent to `Mat4.rotateZ(this, this, rad);`
   *
   * @param rad - the angle to rotate the matrix by
   * @returns `this`
   */
  rotateZ(n) {
    return Sn.rotateZ(this, this, n);
  }
  /**
   * Generates a perspective projection matrix with the given bounds.
   * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
   * which matches WebGL/OpenGL's clip volume.
   * Passing null/undefined/no value for far will generate infinite projection matrix.
   * Equivalent to `Mat4.perspectiveNO(this, fovy, aspect, near, far);`
   *
   * @param fovy - Vertical field of view in radians
   * @param aspect - Aspect ratio. typically viewport width/height
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum, can be null or Infinity
   * @returns `this`
   */
  perspectiveNO(n, e, s, a) {
    return Sn.perspectiveNO(this, n, e, s, a);
  }
  /**
   * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
   * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
   * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
   * Passing null/undefined/no value for far will generate infinite projection matrix.
   * Equivalent to `Mat4.perspectiveZO(this, fovy, aspect, near, far);`
   *
   * @param fovy - Vertical field of view in radians
   * @param aspect - Aspect ratio. typically viewport width/height
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum, can be null or Infinity
   * @returns `this`
   */
  perspectiveZO(n, e, s, a) {
    return Sn.perspectiveZO(this, n, e, s, a);
  }
  /**
   * Generates a orthogonal projection matrix with the given bounds.
   * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
   * which matches WebGL/OpenGL's clip volume.
   * Equivalent to `Mat4.orthoNO(this, left, right, bottom, top, near, far);`
   *
   * @param left - Left bound of the frustum
   * @param right - Right bound of the frustum
   * @param bottom - Bottom bound of the frustum
   * @param top - Top bound of the frustum
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum
   * @returns `this`
   */
  orthoNO(n, e, s, a, f, l) {
    return Sn.orthoNO(this, n, e, s, a, f, l);
  }
  /**
   * Generates a orthogonal projection matrix with the given bounds.
   * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
   * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
   * Equivalent to `Mat4.orthoZO(this, left, right, bottom, top, near, far);`
   *
   * @param left - Left bound of the frustum
   * @param right - Right bound of the frustum
   * @param bottom - Bottom bound of the frustum
   * @param top - Top bound of the frustum
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum
   * @returns `this`
   */
  orthoZO(n, e, s, a, f, l) {
    return Sn.orthoZO(this, n, e, s, a, f, l);
  }
  //================
  // Static methods
  //================
  /**
   * Creates a new, identity {@link Mat4}
   * @category Static
   *
   * @returns A new {@link Mat4}
   */
  static create() {
    return new Sn();
  }
  /**
   * Creates a new {@link Mat4} initialized with values from an existing matrix
   * @category Static
   *
   * @param a - Matrix to clone
   * @returns A new {@link Mat4}
   */
  static clone(n) {
    return new Sn(n);
  }
  /**
   * Copy the values from one {@link Mat4} to another
   * @category Static
   *
   * @param out - The receiving Matrix
   * @param a - Matrix to copy
   * @returns `out`
   */
  static copy(n, e) {
    return n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15], n;
  }
  /**
   * Create a new mat4 with the given values
   * @category Static
   *
   * @param values - Matrix components
   * @returns A new {@link Mat4}
   */
  static fromValues(...n) {
    return new Sn(...n);
  }
  /**
   * Set the components of a mat4 to the given values
   * @category Static
   *
   * @param out - The receiving matrix
   * @param values - Matrix components
   * @returns `out`
   */
  static set(n, ...e) {
    return n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15], n;
  }
  /**
   * Set a {@link Mat4} to the identity matrix
   * @category Static
   *
   * @param out - The receiving Matrix
   * @returns `out`
   */
  static identity(n) {
    return n[0] = 1, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = 1, n[6] = 0, n[7] = 0, n[8] = 0, n[9] = 0, n[10] = 1, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n;
  }
  /**
   * Transpose the values of a {@link Mat4}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out`
   */
  static transpose(n, e) {
    if (n === e) {
      const s = e[1], a = e[2], f = e[3], l = e[6], p = e[7], g = e[11];
      n[1] = e[4], n[2] = e[8], n[3] = e[12], n[4] = s, n[6] = e[9], n[7] = e[13], n[8] = a, n[9] = l, n[11] = e[14], n[12] = f, n[13] = p, n[14] = g;
    } else
      n[0] = e[0], n[1] = e[4], n[2] = e[8], n[3] = e[12], n[4] = e[1], n[5] = e[5], n[6] = e[9], n[7] = e[13], n[8] = e[2], n[9] = e[6], n[10] = e[10], n[11] = e[14], n[12] = e[3], n[13] = e[7], n[14] = e[11], n[15] = e[15];
    return n;
  }
  /**
   * Inverts a {@link Mat4}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out`
   */
  static invert(n, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], p = e[4], g = e[5], x = e[6], v = e[7], m = e[8], T = e[9], A = e[10], w = e[11], S = e[12], R = e[13], C = e[14], D = e[15], W = s * g - a * p, F = s * x - f * p, O = s * v - l * p, U = a * x - f * g, q = a * v - l * g, en = f * v - l * x, nn = m * R - T * S, hn = m * C - A * S, H = m * D - w * S, xn = T * C - A * R, dn = T * D - w * R, on = A * D - w * C;
    let K = W * on - F * dn + O * xn + U * H - q * hn + en * nn;
    return K ? (K = 1 / K, n[0] = (g * on - x * dn + v * xn) * K, n[1] = (f * dn - a * on - l * xn) * K, n[2] = (R * en - C * q + D * U) * K, n[3] = (A * q - T * en - w * U) * K, n[4] = (x * H - p * on - v * hn) * K, n[5] = (s * on - f * H + l * hn) * K, n[6] = (C * O - S * en - D * F) * K, n[7] = (m * en - A * O + w * F) * K, n[8] = (p * dn - g * H + v * nn) * K, n[9] = (a * H - s * dn - l * nn) * K, n[10] = (S * q - R * O + D * W) * K, n[11] = (T * O - m * q - w * W) * K, n[12] = (g * hn - p * xn - x * nn) * K, n[13] = (s * xn - a * hn + f * nn) * K, n[14] = (R * F - S * U - C * W) * K, n[15] = (m * U - T * F + A * W) * K, n) : null;
  }
  /**
   * Calculates the adjugate of a {@link Mat4}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out`
   */
  static adjoint(n, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], p = e[4], g = e[5], x = e[6], v = e[7], m = e[8], T = e[9], A = e[10], w = e[11], S = e[12], R = e[13], C = e[14], D = e[15], W = s * g - a * p, F = s * x - f * p, O = s * v - l * p, U = a * x - f * g, q = a * v - l * g, en = f * v - l * x, nn = m * R - T * S, hn = m * C - A * S, H = m * D - w * S, xn = T * C - A * R, dn = T * D - w * R, on = A * D - w * C;
    return n[0] = g * on - x * dn + v * xn, n[1] = f * dn - a * on - l * xn, n[2] = R * en - C * q + D * U, n[3] = A * q - T * en - w * U, n[4] = x * H - p * on - v * hn, n[5] = s * on - f * H + l * hn, n[6] = C * O - S * en - D * F, n[7] = m * en - A * O + w * F, n[8] = p * dn - g * H + v * nn, n[9] = a * H - s * dn - l * nn, n[10] = S * q - R * O + D * W, n[11] = T * O - m * q - w * W, n[12] = g * hn - p * xn - x * nn, n[13] = s * xn - a * hn + f * nn, n[14] = R * F - S * U - C * W, n[15] = m * U - T * F + A * W, n;
  }
  /**
   * Calculates the determinant of a {@link Mat4}
   * @category Static
   *
   * @param a - the source matrix
   * @returns determinant of a
   */
  static determinant(n) {
    const e = n[0], s = n[1], a = n[2], f = n[3], l = n[4], p = n[5], g = n[6], x = n[7], v = n[8], m = n[9], T = n[10], A = n[11], w = n[12], S = n[13], R = n[14], C = n[15], D = e * p - s * l, W = e * g - a * l, F = s * g - a * p, O = v * S - m * w, U = v * R - T * w, q = m * R - T * S, en = e * q - s * U + a * O, nn = l * q - p * U + g * O, hn = v * F - m * W + T * D, H = w * F - S * W + R * D;
    return x * en - f * nn + C * hn - A * H;
  }
  /**
   * Multiplies two {@link Mat4}s
   * @category Static
   *
   * @param out - The receiving Matrix
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static multiply(n, e, s) {
    const a = e[0], f = e[1], l = e[2], p = e[3], g = e[4], x = e[5], v = e[6], m = e[7], T = e[8], A = e[9], w = e[10], S = e[11], R = e[12], C = e[13], D = e[14], W = e[15];
    let F = s[0], O = s[1], U = s[2], q = s[3];
    return n[0] = F * a + O * g + U * T + q * R, n[1] = F * f + O * x + U * A + q * C, n[2] = F * l + O * v + U * w + q * D, n[3] = F * p + O * m + U * S + q * W, F = s[4], O = s[5], U = s[6], q = s[7], n[4] = F * a + O * g + U * T + q * R, n[5] = F * f + O * x + U * A + q * C, n[6] = F * l + O * v + U * w + q * D, n[7] = F * p + O * m + U * S + q * W, F = s[8], O = s[9], U = s[10], q = s[11], n[8] = F * a + O * g + U * T + q * R, n[9] = F * f + O * x + U * A + q * C, n[10] = F * l + O * v + U * w + q * D, n[11] = F * p + O * m + U * S + q * W, F = s[12], O = s[13], U = s[14], q = s[15], n[12] = F * a + O * g + U * T + q * R, n[13] = F * f + O * x + U * A + q * C, n[14] = F * l + O * v + U * w + q * D, n[15] = F * p + O * m + U * S + q * W, n;
  }
  /**
   * Alias for {@link Mat4.multiply}
   * @category Static
   */
  static mul(n, e, s) {
    return n;
  }
  /**
   * Translate a {@link Mat4} by the given vector
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to translate
   * @param v - vector to translate by
   * @returns `out`
   */
  static translate(n, e, s) {
    const a = s[0], f = s[1], l = s[2];
    if (e === n)
      n[12] = e[0] * a + e[4] * f + e[8] * l + e[12], n[13] = e[1] * a + e[5] * f + e[9] * l + e[13], n[14] = e[2] * a + e[6] * f + e[10] * l + e[14], n[15] = e[3] * a + e[7] * f + e[11] * l + e[15];
    else {
      const p = e[0], g = e[1], x = e[2], v = e[3], m = e[4], T = e[5], A = e[6], w = e[7], S = e[8], R = e[9], C = e[10], D = e[11];
      n[0] = p, n[1] = g, n[2] = x, n[3] = v, n[4] = m, n[5] = T, n[6] = A, n[7] = w, n[8] = S, n[9] = R, n[10] = C, n[11] = D, n[12] = p * a + m * f + S * l + e[12], n[13] = g * a + T * f + R * l + e[13], n[14] = x * a + A * f + C * l + e[14], n[15] = v * a + w * f + D * l + e[15];
    }
    return n;
  }
  /**
   * Scales the {@link Mat4} by the dimensions in the given {@link Vec3} not using vectorization
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to scale
   * @param v - the {@link Vec3} to scale the matrix by
   * @returns `out`
   **/
  static scale(n, e, s) {
    const a = s[0], f = s[1], l = s[2];
    return n[0] = e[0] * a, n[1] = e[1] * a, n[2] = e[2] * a, n[3] = e[3] * a, n[4] = e[4] * f, n[5] = e[5] * f, n[6] = e[6] * f, n[7] = e[7] * f, n[8] = e[8] * l, n[9] = e[9] * l, n[10] = e[10] * l, n[11] = e[11] * l, n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15], n;
  }
  /**
   * Rotates a {@link Mat4} by the given angle around the given axis
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to rotate
   * @param rad - the angle to rotate the matrix by
   * @param axis - the axis to rotate around
   * @returns `out`
   */
  static rotate(n, e, s, a) {
    let f = a[0], l = a[1], p = a[2], g = Math.sqrt(f * f + l * l + p * p);
    if (g < j)
      return null;
    g = 1 / g, f *= g, l *= g, p *= g;
    const x = Math.sin(s), v = Math.cos(s), m = 1 - v, T = e[0], A = e[1], w = e[2], S = e[3], R = e[4], C = e[5], D = e[6], W = e[7], F = e[8], O = e[9], U = e[10], q = e[11], en = f * f * m + v, nn = l * f * m + p * x, hn = p * f * m - l * x, H = f * l * m - p * x, xn = l * l * m + v, dn = p * l * m + f * x, on = f * p * m + l * x, K = l * p * m - f * x, nt = p * p * m + v;
    return n[0] = T * en + R * nn + F * hn, n[1] = A * en + C * nn + O * hn, n[2] = w * en + D * nn + U * hn, n[3] = S * en + W * nn + q * hn, n[4] = T * H + R * xn + F * dn, n[5] = A * H + C * xn + O * dn, n[6] = w * H + D * xn + U * dn, n[7] = S * H + W * xn + q * dn, n[8] = T * on + R * K + F * nt, n[9] = A * on + C * K + O * nt, n[10] = w * on + D * K + U * nt, n[11] = S * on + W * K + q * nt, e !== n && (n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
  }
  /**
   * Rotates a matrix by the given angle around the X axis
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to rotate
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static rotateX(n, e, s) {
    let a = Math.sin(s), f = Math.cos(s), l = e[4], p = e[5], g = e[6], x = e[7], v = e[8], m = e[9], T = e[10], A = e[11];
    return e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n[4] = l * f + v * a, n[5] = p * f + m * a, n[6] = g * f + T * a, n[7] = x * f + A * a, n[8] = v * f - l * a, n[9] = m * f - p * a, n[10] = T * f - g * a, n[11] = A * f - x * a, n;
  }
  /**
   * Rotates a matrix by the given angle around the Y axis
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to rotate
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static rotateY(n, e, s) {
    let a = Math.sin(s), f = Math.cos(s), l = e[0], p = e[1], g = e[2], x = e[3], v = e[8], m = e[9], T = e[10], A = e[11];
    return e !== n && (n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n[0] = l * f - v * a, n[1] = p * f - m * a, n[2] = g * f - T * a, n[3] = x * f - A * a, n[8] = l * a + v * f, n[9] = p * a + m * f, n[10] = g * a + T * f, n[11] = x * a + A * f, n;
  }
  /**
   * Rotates a matrix by the given angle around the Z axis
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to rotate
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static rotateZ(n, e, s) {
    let a = Math.sin(s), f = Math.cos(s), l = e[0], p = e[1], g = e[2], x = e[3], v = e[4], m = e[5], T = e[6], A = e[7];
    return e !== n && (n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n[0] = l * f + v * a, n[1] = p * f + m * a, n[2] = g * f + T * a, n[3] = x * f + A * a, n[4] = v * f - l * a, n[5] = m * f - p * a, n[6] = T * f - g * a, n[7] = A * f - x * a, n;
  }
  /**
   * Creates a {@link Mat4} from a vector translation
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest);
   *     mat4.translate(dest, dest, vec);
   * @category Static
   *
   * @param out - {@link Mat4} receiving operation result
   * @param v - Translation vector
   * @returns `out`
   */
  static fromTranslation(n, e) {
    return n[0] = 1, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = 1, n[6] = 0, n[7] = 0, n[8] = 0, n[9] = 0, n[10] = 1, n[11] = 0, n[12] = e[0], n[13] = e[1], n[14] = e[2], n[15] = 1, n;
  }
  /**
   * Creates a {@link Mat4} from a vector scaling
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest);
   *     mat4.scale(dest, dest, vec);
   * @category Static
   *
   * @param out - {@link Mat4} receiving operation result
   * @param v - Scaling vector
   * @returns `out`
   */
  static fromScaling(n, e) {
    return n[0] = e[0], n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = e[1], n[6] = 0, n[7] = 0, n[8] = 0, n[9] = 0, n[10] = e[2], n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n;
  }
  /**
   * Creates a {@link Mat4} from a given angle around a given axis
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest);
   *     mat4.rotate(dest, dest, rad, axis);
   * @category Static
   *
   * @param out - {@link Mat4} receiving operation result
   * @param rad - the angle to rotate the matrix by
   * @param axis - the axis to rotate around
   * @returns `out`
   */
  static fromRotation(n, e, s) {
    let a = s[0], f = s[1], l = s[2], p = Math.sqrt(a * a + f * f + l * l);
    if (p < j)
      return null;
    p = 1 / p, a *= p, f *= p, l *= p;
    const g = Math.sin(e), x = Math.cos(e), v = 1 - x;
    return n[0] = a * a * v + x, n[1] = f * a * v + l * g, n[2] = l * a * v - f * g, n[3] = 0, n[4] = a * f * v - l * g, n[5] = f * f * v + x, n[6] = l * f * v + a * g, n[7] = 0, n[8] = a * l * v + f * g, n[9] = f * l * v - a * g, n[10] = l * l * v + x, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n;
  }
  /**
   * Creates a matrix from the given angle around the X axis
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest);
   *     mat4.rotateX(dest, dest, rad);
   * @category Static
   *
   * @param out - mat4 receiving operation result
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static fromXRotation(n, e) {
    let s = Math.sin(e), a = Math.cos(e);
    return n[0] = 1, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = a, n[6] = s, n[7] = 0, n[8] = 0, n[9] = -s, n[10] = a, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n;
  }
  /**
   * Creates a matrix from the given angle around the Y axis
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest);
   *     mat4.rotateY(dest, dest, rad);
   * @category Static
   *
   * @param out - mat4 receiving operation result
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static fromYRotation(n, e) {
    let s = Math.sin(e), a = Math.cos(e);
    return n[0] = a, n[1] = 0, n[2] = -s, n[3] = 0, n[4] = 0, n[5] = 1, n[6] = 0, n[7] = 0, n[8] = s, n[9] = 0, n[10] = a, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n;
  }
  /**
   * Creates a matrix from the given angle around the Z axis
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest);
   *     mat4.rotateZ(dest, dest, rad);
   * @category Static
   *
   * @param out - mat4 receiving operation result
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  static fromZRotation(n, e) {
    const s = Math.sin(e), a = Math.cos(e);
    return n[0] = a, n[1] = s, n[2] = 0, n[3] = 0, n[4] = -s, n[5] = a, n[6] = 0, n[7] = 0, n[8] = 0, n[9] = 0, n[10] = 1, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n;
  }
  /**
   * Creates a matrix from a quaternion rotation and vector translation
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest);
   *     mat4.translate(dest, vec);
   *     let quatMat = mat4.create();
   *     quat4.toMat4(quat, quatMat);
   *     mat4.multiply(dest, quatMat);
   * @category Static
   *
   * @param out - mat4 receiving operation result
   * @param q - Rotation quaternion
   * @param v - Translation vector
   * @returns `out`
   */
  static fromRotationTranslation(n, e, s) {
    const a = e[0], f = e[1], l = e[2], p = e[3], g = a + a, x = f + f, v = l + l, m = a * g, T = a * x, A = a * v, w = f * x, S = f * v, R = l * v, C = p * g, D = p * x, W = p * v;
    return n[0] = 1 - (w + R), n[1] = T + W, n[2] = A - D, n[3] = 0, n[4] = T - W, n[5] = 1 - (m + R), n[6] = S + C, n[7] = 0, n[8] = A + D, n[9] = S - C, n[10] = 1 - (m + w), n[11] = 0, n[12] = s[0], n[13] = s[1], n[14] = s[2], n[15] = 1, n;
  }
  /**
   * Sets a {@link Mat4} from a {@link Quat2}.
   * @category Static
   *
   * @param out - Matrix
   * @param a - Dual Quaternion
   * @returns `out`
   */
  static fromQuat2(n, e) {
    let s = new J();
    const a = -e[0], f = -e[1], l = -e[2], p = e[3], g = e[4], x = e[5], v = e[6], m = e[7];
    let T = a * a + f * f + l * l + p * p;
    return T > 0 ? (s[0] = (g * p + m * a + x * l - v * f) * 2 / T, s[1] = (x * p + m * f + v * a - g * l) * 2 / T, s[2] = (v * p + m * l + g * f - x * a) * 2 / T) : (s[0] = (g * p + m * a + x * l - v * f) * 2, s[1] = (x * p + m * f + v * a - g * l) * 2, s[2] = (v * p + m * l + g * f - x * a) * 2), Sn.fromRotationTranslation(n, e, s), n;
  }
  /**
   * Returns the translation vector component of a transformation
   * matrix. If a matrix is built with fromRotationTranslation,
   * the returned vector will be the same as the translation vector
   * originally supplied.
   * @category Static
   *
   * @param  {vec3} out Vector to receive translation component
   * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
   * @return {vec3} out
   */
  static getTranslation(n, e) {
    return n[0] = e[12], n[1] = e[13], n[2] = e[14], n;
  }
  /**
   * Returns the scaling factor component of a transformation
   * matrix. If a matrix is built with fromRotationTranslationScale
   * with a normalized Quaternion paramter, the returned vector will be
   * the same as the scaling vector
   * originally supplied.
   * @category Static
   *
   * @param  {vec3} out Vector to receive scaling factor component
   * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
   * @return {vec3} out
   */
  static getScaling(n, e) {
    const s = e[0], a = e[1], f = e[2], l = e[4], p = e[5], g = e[6], x = e[8], v = e[9], m = e[10];
    return n[0] = Math.sqrt(s * s + a * a + f * f), n[1] = Math.sqrt(l * l + p * p + g * g), n[2] = Math.sqrt(x * x + v * v + m * m), n;
  }
  /**
   * Returns a quaternion representing the rotational component
   * of a transformation matrix. If a matrix is built with
   * fromRotationTranslation, the returned quaternion will be the
   * same as the quaternion originally supplied.
   * @category Static
   *
   * @param out - Quaternion to receive the rotation component
   * @param mat - Matrix to be decomposed (input)
   * @return `out`
   */
  static getRotation(n, e) {
    Sn.getScaling(qr, e);
    const s = 1 / qr[0], a = 1 / qr[1], f = 1 / qr[2], l = e[0] * s, p = e[1] * a, g = e[2] * f, x = e[4] * s, v = e[5] * a, m = e[6] * f, T = e[8] * s, A = e[9] * a, w = e[10] * f, S = l + v + w;
    let R = 0;
    return S > 0 ? (R = Math.sqrt(S + 1) * 2, n[3] = 0.25 * R, n[0] = (m - A) / R, n[1] = (T - g) / R, n[2] = (p - x) / R) : l > v && l > w ? (R = Math.sqrt(1 + l - v - w) * 2, n[3] = (m - A) / R, n[0] = 0.25 * R, n[1] = (p + x) / R, n[2] = (T + g) / R) : v > w ? (R = Math.sqrt(1 + v - l - w) * 2, n[3] = (T - g) / R, n[0] = (p + x) / R, n[1] = 0.25 * R, n[2] = (m + A) / R) : (R = Math.sqrt(1 + w - l - v) * 2, n[3] = (p - x) / R, n[0] = (T + g) / R, n[1] = (m + A) / R, n[2] = 0.25 * R), n;
  }
  /**
   * Decomposes a transformation matrix into its rotation, translation
   * and scale components. Returns only the rotation component
   * @category Static
   *
   * @param out_r - Quaternion to receive the rotation component
   * @param out_t - Vector to receive the translation vector
   * @param out_s - Vector to receive the scaling factor
   * @param mat - Matrix to be decomposed (input)
   * @returns `out_r`
   */
  static decompose(n, e, s, a) {
    e[0] = a[12], e[1] = a[13], e[2] = a[14];
    const f = a[0], l = a[1], p = a[2], g = a[4], x = a[5], v = a[6], m = a[8], T = a[9], A = a[10];
    s[0] = Math.sqrt(f * f + l * l + p * p), s[1] = Math.sqrt(g * g + x * x + v * v), s[2] = Math.sqrt(m * m + T * T + A * A);
    const w = 1 / s[0], S = 1 / s[1], R = 1 / s[2], C = f * w, D = l * S, W = p * R, F = g * w, O = x * S, U = v * R, q = m * w, en = T * S, nn = A * R, hn = C + O + nn;
    let H = 0;
    return hn > 0 ? (H = Math.sqrt(hn + 1) * 2, n[3] = 0.25 * H, n[0] = (U - en) / H, n[1] = (q - W) / H, n[2] = (D - F) / H) : C > O && C > nn ? (H = Math.sqrt(1 + C - O - nn) * 2, n[3] = (U - en) / H, n[0] = 0.25 * H, n[1] = (D + F) / H, n[2] = (q + W) / H) : O > nn ? (H = Math.sqrt(1 + O - C - nn) * 2, n[3] = (q - W) / H, n[0] = (D + F) / H, n[1] = 0.25 * H, n[2] = (U + en) / H) : (H = Math.sqrt(1 + nn - C - O) * 2, n[3] = (D - F) / H, n[0] = (q + W) / H, n[1] = (U + en) / H, n[2] = 0.25 * H), n;
  }
  /**
   * Creates a matrix from a quaternion rotation, vector translation and vector scale
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest);
   *     mat4.translate(dest, vec);
   *     let quatMat = mat4.create();
   *     quat4.toMat4(quat, quatMat);
   *     mat4.multiply(dest, quatMat);
   *     mat4.scale(dest, scale);
   * @category Static
   *
   * @param out - mat4 receiving operation result
   * @param q - Rotation quaternion
   * @param v - Translation vector
   * @param s - Scaling vector
   * @returns `out`
   */
  static fromRotationTranslationScale(n, e, s, a) {
    const f = e[0], l = e[1], p = e[2], g = e[3], x = f + f, v = l + l, m = p + p, T = f * x, A = f * v, w = f * m, S = l * v, R = l * m, C = p * m, D = g * x, W = g * v, F = g * m, O = a[0], U = a[1], q = a[2];
    return n[0] = (1 - (S + C)) * O, n[1] = (A + F) * O, n[2] = (w - W) * O, n[3] = 0, n[4] = (A - F) * U, n[5] = (1 - (T + C)) * U, n[6] = (R + D) * U, n[7] = 0, n[8] = (w + W) * q, n[9] = (R - D) * q, n[10] = (1 - (T + S)) * q, n[11] = 0, n[12] = s[0], n[13] = s[1], n[14] = s[2], n[15] = 1, n;
  }
  /**
   * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
   * This is equivalent to (but much faster than):
   *
   *     mat4.identity(dest);
   *     mat4.translate(dest, vec);
   *     mat4.translate(dest, origin);
   *     let quatMat = mat4.create();
   *     quat4.toMat4(quat, quatMat);
   *     mat4.multiply(dest, quatMat);
   *     mat4.scale(dest, scale)
   *     mat4.translate(dest, negativeOrigin);
   * @category Static
   *
   * @param out - mat4 receiving operation result
   * @param q - Rotation quaternion
   * @param v - Translation vector
   * @param s - Scaling vector
   * @param o - The origin vector around which to scale and rotate
   * @returns `out`
   */
  static fromRotationTranslationScaleOrigin(n, e, s, a, f) {
    const l = e[0], p = e[1], g = e[2], x = e[3], v = l + l, m = p + p, T = g + g, A = l * v, w = l * m, S = l * T, R = p * m, C = p * T, D = g * T, W = x * v, F = x * m, O = x * T, U = a[0], q = a[1], en = a[2], nn = f[0], hn = f[1], H = f[2], xn = (1 - (R + D)) * U, dn = (w + O) * U, on = (S - F) * U, K = (w - O) * q, nt = (1 - (A + D)) * q, Zn = (C + W) * q, Wn = (S + F) * en, He = (C - W) * en, Zt = (1 - (A + R)) * en;
    return n[0] = xn, n[1] = dn, n[2] = on, n[3] = 0, n[4] = K, n[5] = nt, n[6] = Zn, n[7] = 0, n[8] = Wn, n[9] = He, n[10] = Zt, n[11] = 0, n[12] = s[0] + nn - (xn * nn + K * hn + Wn * H), n[13] = s[1] + hn - (dn * nn + nt * hn + He * H), n[14] = s[2] + H - (on * nn + Zn * hn + Zt * H), n[15] = 1, n;
  }
  /**
   * Calculates a 4x4 matrix from the given quaternion
   * @category Static
   *
   * @param out - mat4 receiving operation result
   * @param q - Quaternion to create matrix from
   * @returns `out`
   */
  static fromQuat(n, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], p = s + s, g = a + a, x = f + f, v = s * p, m = a * p, T = a * g, A = f * p, w = f * g, S = f * x, R = l * p, C = l * g, D = l * x;
    return n[0] = 1 - T - S, n[1] = m + D, n[2] = A - C, n[3] = 0, n[4] = m - D, n[5] = 1 - v - S, n[6] = w + R, n[7] = 0, n[8] = A + C, n[9] = w - R, n[10] = 1 - v - T, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n;
  }
  /**
   * Generates a frustum matrix with the given bounds
   * @category Static
   *
   * @param out - mat4 frustum matrix will be written into
   * @param left - Left bound of the frustum
   * @param right - Right bound of the frustum
   * @param bottom - Bottom bound of the frustum
   * @param top - Top bound of the frustum
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum
   * @returns `out`
   */
  static frustum(n, e, s, a, f, l, p) {
    const g = 1 / (s - e), x = 1 / (f - a), v = 1 / (l - p);
    return n[0] = l * 2 * g, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = l * 2 * x, n[6] = 0, n[7] = 0, n[8] = (s + e) * g, n[9] = (f + a) * x, n[10] = (p + l) * v, n[11] = -1, n[12] = 0, n[13] = 0, n[14] = p * l * 2 * v, n[15] = 0, n;
  }
  /**
   * Generates a perspective projection matrix with the given bounds.
   * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
   * which matches WebGL/OpenGL's clip volume.
   * Passing null/undefined/no value for far will generate infinite projection matrix.
   * @category Static
   *
   * @param out - mat4 frustum matrix will be written into
   * @param fovy - Vertical field of view in radians
   * @param aspect - Aspect ratio. typically viewport width/height
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum, can be null or Infinity
   * @returns `out`
   */
  static perspectiveNO(n, e, s, a, f) {
    const l = 1 / Math.tan(e / 2);
    if (n[0] = l / s, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = l, n[6] = 0, n[7] = 0, n[8] = 0, n[9] = 0, n[11] = -1, n[12] = 0, n[13] = 0, n[15] = 0, f != null && f !== 1 / 0) {
      const p = 1 / (a - f);
      n[10] = (f + a) * p, n[14] = 2 * f * a * p;
    } else
      n[10] = -1, n[14] = -2 * a;
    return n;
  }
  /**
   * Alias for {@link Mat4.perspectiveNO}
   * @category Static
   * @deprecated Use {@link Mat4.perspectiveNO} or {@link Mat4.perspectiveZO} explicitly
   */
  static perspective(n, e, s, a, f) {
    return n;
  }
  /**
   * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
   * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
   * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
   * Passing null/undefined/no value for far will generate infinite projection matrix.
   * @category Static
   *
   * @param out - mat4 frustum matrix will be written into
   * @param fovy - Vertical field of view in radians
   * @param aspect - Aspect ratio. typically viewport width/height
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum, can be null or Infinity
   * @returns `out`
   */
  static perspectiveZO(n, e, s, a, f) {
    const l = 1 / Math.tan(e / 2);
    if (n[0] = l / s, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = l, n[6] = 0, n[7] = 0, n[8] = 0, n[9] = 0, n[11] = -1, n[12] = 0, n[13] = 0, n[15] = 0, f != null && f !== 1 / 0) {
      const p = 1 / (a - f);
      n[10] = f * p, n[14] = f * a * p;
    } else
      n[10] = -1, n[14] = -a;
    return n;
  }
  /**
   * Generates a perspective projection matrix with the given field of view.
   * This is primarily useful for generating projection matrices to be used
   * with the still experiemental WebVR API.
   * @category Static
   *
   * @param out - mat4 frustum matrix will be written into
   * @param fov - Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum
   * @returns `out`
   * @deprecated
   */
  static perspectiveFromFieldOfView(n, e, s, a) {
    const f = Math.tan(e.upDegrees * Math.PI / 180), l = Math.tan(e.downDegrees * Math.PI / 180), p = Math.tan(e.leftDegrees * Math.PI / 180), g = Math.tan(e.rightDegrees * Math.PI / 180), x = 2 / (p + g), v = 2 / (f + l);
    return n[0] = x, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = v, n[6] = 0, n[7] = 0, n[8] = -((p - g) * x * 0.5), n[9] = (f - l) * v * 0.5, n[10] = a / (s - a), n[11] = -1, n[12] = 0, n[13] = 0, n[14] = a * s / (s - a), n[15] = 0, n;
  }
  /**
   * Generates a orthogonal projection matrix with the given bounds.
   * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
   * which matches WebGL/OpenGL's clip volume.
   * @category Static
   *
   * @param out - mat4 frustum matrix will be written into
   * @param left - Left bound of the frustum
   * @param right - Right bound of the frustum
   * @param bottom - Bottom bound of the frustum
   * @param top - Top bound of the frustum
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum
   * @returns `out`
   */
  static orthoNO(n, e, s, a, f, l, p) {
    const g = 1 / (e - s), x = 1 / (a - f), v = 1 / (l - p);
    return n[0] = -2 * g, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = -2 * x, n[6] = 0, n[7] = 0, n[8] = 0, n[9] = 0, n[10] = 2 * v, n[11] = 0, n[12] = (e + s) * g, n[13] = (f + a) * x, n[14] = (p + l) * v, n[15] = 1, n;
  }
  /**
   * Alias for {@link Mat4.orthoNO}
   * @category Static
   * @deprecated Use {@link Mat4.orthoNO} or {@link Mat4.orthoZO} explicitly
   */
  static ortho(n, e, s, a, f, l, p) {
    return n;
  }
  /**
   * Generates a orthogonal projection matrix with the given bounds.
   * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
   * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
   * @category Static
   *
   * @param out - mat4 frustum matrix will be written into
   * @param left - Left bound of the frustum
   * @param right - Right bound of the frustum
   * @param bottom - Bottom bound of the frustum
   * @param top - Top bound of the frustum
   * @param near - Near bound of the frustum
   * @param far - Far bound of the frustum
   * @returns `out`
   */
  static orthoZO(n, e, s, a, f, l, p) {
    const g = 1 / (e - s), x = 1 / (a - f), v = 1 / (l - p);
    return n[0] = -2 * g, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = -2 * x, n[6] = 0, n[7] = 0, n[8] = 0, n[9] = 0, n[10] = v, n[11] = 0, n[12] = (e + s) * g, n[13] = (f + a) * x, n[14] = l * v, n[15] = 1, n;
  }
  /**
   * Generates a look-at matrix with the given eye position, focal point, and up axis.
   * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
   * @category Static
   *
   * @param out - mat4 frustum matrix will be written into
   * @param eye - Position of the viewer
   * @param center - Point the viewer is looking at
   * @param up - vec3 pointing up
   * @returns `out`
   */
  static lookAt(n, e, s, a) {
    const f = e[0], l = e[1], p = e[2], g = a[0], x = a[1], v = a[2], m = s[0], T = s[1], A = s[2];
    if (Math.abs(f - m) < j && Math.abs(l - T) < j && Math.abs(p - A) < j)
      return Sn.identity(n);
    let w = f - m, S = l - T, R = p - A, C = 1 / Math.sqrt(w * w + S * S + R * R);
    w *= C, S *= C, R *= C;
    let D = x * R - v * S, W = v * w - g * R, F = g * S - x * w;
    C = Math.sqrt(D * D + W * W + F * F), C ? (C = 1 / C, D *= C, W *= C, F *= C) : (D = 0, W = 0, F = 0);
    let O = S * F - R * W, U = R * D - w * F, q = w * W - S * D;
    return C = Math.sqrt(O * O + U * U + q * q), C ? (C = 1 / C, O *= C, U *= C, q *= C) : (O = 0, U = 0, q = 0), n[0] = D, n[1] = O, n[2] = w, n[3] = 0, n[4] = W, n[5] = U, n[6] = S, n[7] = 0, n[8] = F, n[9] = q, n[10] = R, n[11] = 0, n[12] = -(D * f + W * l + F * p), n[13] = -(O * f + U * l + q * p), n[14] = -(w * f + S * l + R * p), n[15] = 1, n;
  }
  /**
   * Generates a matrix that makes something look at something else.
   * @category Static
   *
   * @param out - mat4 frustum matrix will be written into
   * @param eye - Position of the viewer
   * @param target - Point the viewer is looking at
   * @param up - vec3 pointing up
   * @returns `out`
   */
  static targetTo(n, e, s, a) {
    const f = e[0], l = e[1], p = e[2], g = a[0], x = a[1], v = a[2];
    let m = f - s[0], T = l - s[1], A = p - s[2], w = m * m + T * T + A * A;
    w > 0 && (w = 1 / Math.sqrt(w), m *= w, T *= w, A *= w);
    let S = x * A - v * T, R = v * m - g * A, C = g * T - x * m;
    return w = S * S + R * R + C * C, w > 0 && (w = 1 / Math.sqrt(w), S *= w, R *= w, C *= w), n[0] = S, n[1] = R, n[2] = C, n[3] = 0, n[4] = T * C - A * R, n[5] = A * S - m * C, n[6] = m * R - T * S, n[7] = 0, n[8] = m, n[9] = T, n[10] = A, n[11] = 0, n[12] = f, n[13] = l, n[14] = p, n[15] = 1, n;
  }
  /**
   * Returns Frobenius norm of a {@link Mat4}
   * @category Static
   *
   * @param a - the matrix to calculate Frobenius norm of
   * @returns Frobenius norm
   */
  static frob(n) {
    return Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2] + n[3] * n[3] + n[4] * n[4] + n[5] * n[5] + n[6] * n[6] + n[7] * n[7] + n[8] * n[8] + n[9] * n[9] + n[10] * n[10] + n[11] * n[11] + n[12] * n[12] + n[13] * n[13] + n[14] * n[14] + n[15] * n[15]);
  }
  /**
   * Adds two {@link Mat4}'s
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static add(n, e, s) {
    return n[0] = e[0] + s[0], n[1] = e[1] + s[1], n[2] = e[2] + s[2], n[3] = e[3] + s[3], n[4] = e[4] + s[4], n[5] = e[5] + s[5], n[6] = e[6] + s[6], n[7] = e[7] + s[7], n[8] = e[8] + s[8], n[9] = e[9] + s[9], n[10] = e[10] + s[10], n[11] = e[11] + s[11], n[12] = e[12] + s[12], n[13] = e[13] + s[13], n[14] = e[14] + s[14], n[15] = e[15] + s[15], n;
  }
  /**
   * Subtracts matrix b from matrix a
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static subtract(n, e, s) {
    return n[0] = e[0] - s[0], n[1] = e[1] - s[1], n[2] = e[2] - s[2], n[3] = e[3] - s[3], n[4] = e[4] - s[4], n[5] = e[5] - s[5], n[6] = e[6] - s[6], n[7] = e[7] - s[7], n[8] = e[8] - s[8], n[9] = e[9] - s[9], n[10] = e[10] - s[10], n[11] = e[11] - s[11], n[12] = e[12] - s[12], n[13] = e[13] - s[13], n[14] = e[14] - s[14], n[15] = e[15] - s[15], n;
  }
  /**
   * Alias for {@link Mat4.subtract}
   * @category Static
   */
  static sub(n, e, s) {
    return n;
  }
  /**
   * Multiply each element of the matrix by a scalar.
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the matrix to scale
   * @param b - amount to scale the matrix's elements by
   * @returns `out`
   */
  static multiplyScalar(n, e, s) {
    return n[0] = e[0] * s, n[1] = e[1] * s, n[2] = e[2] * s, n[3] = e[3] * s, n[4] = e[4] * s, n[5] = e[5] * s, n[6] = e[6] * s, n[7] = e[7] * s, n[8] = e[8] * s, n[9] = e[9] * s, n[10] = e[10] * s, n[11] = e[11] * s, n[12] = e[12] * s, n[13] = e[13] * s, n[14] = e[14] * s, n[15] = e[15] * s, n;
  }
  /**
   * Adds two mat4's after multiplying each element of the second operand by a scalar value.
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param scale - the amount to scale b's elements by before adding
   * @returns `out`
   */
  static multiplyScalarAndAdd(n, e, s, a) {
    return n[0] = e[0] + s[0] * a, n[1] = e[1] + s[1] * a, n[2] = e[2] + s[2] * a, n[3] = e[3] + s[3] * a, n[4] = e[4] + s[4] * a, n[5] = e[5] + s[5] * a, n[6] = e[6] + s[6] * a, n[7] = e[7] + s[7] * a, n[8] = e[8] + s[8] * a, n[9] = e[9] + s[9] * a, n[10] = e[10] + s[10] * a, n[11] = e[11] + s[11] * a, n[12] = e[12] + s[12] * a, n[13] = e[13] + s[13] * a, n[14] = e[14] + s[14] * a, n[15] = e[15] + s[15] * a, n;
  }
  /**
   * Returns whether or not two {@link Mat4}s have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first matrix.
   * @param b - The second matrix.
   * @returns True if the matrices are equal, false otherwise.
   */
  static exactEquals(n, e) {
    return n[0] === e[0] && n[1] === e[1] && n[2] === e[2] && n[3] === e[3] && n[4] === e[4] && n[5] === e[5] && n[6] === e[6] && n[7] === e[7] && n[8] === e[8] && n[9] === e[9] && n[10] === e[10] && n[11] === e[11] && n[12] === e[12] && n[13] === e[13] && n[14] === e[14] && n[15] === e[15];
  }
  /**
   * Returns whether or not two {@link Mat4}s have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first matrix.
   * @param b - The second matrix.
   * @returns True if the matrices are equal, false otherwise.
   */
  static equals(n, e) {
    const s = n[0], a = n[1], f = n[2], l = n[3], p = n[4], g = n[5], x = n[6], v = n[7], m = n[8], T = n[9], A = n[10], w = n[11], S = n[12], R = n[13], C = n[14], D = n[15], W = e[0], F = e[1], O = e[2], U = e[3], q = e[4], en = e[5], nn = e[6], hn = e[7], H = e[8], xn = e[9], dn = e[10], on = e[11], K = e[12], nt = e[13], Zn = e[14], Wn = e[15];
    return Math.abs(s - W) <= j * Math.max(1, Math.abs(s), Math.abs(W)) && Math.abs(a - F) <= j * Math.max(1, Math.abs(a), Math.abs(F)) && Math.abs(f - O) <= j * Math.max(1, Math.abs(f), Math.abs(O)) && Math.abs(l - U) <= j * Math.max(1, Math.abs(l), Math.abs(U)) && Math.abs(p - q) <= j * Math.max(1, Math.abs(p), Math.abs(q)) && Math.abs(g - en) <= j * Math.max(1, Math.abs(g), Math.abs(en)) && Math.abs(x - nn) <= j * Math.max(1, Math.abs(x), Math.abs(nn)) && Math.abs(v - hn) <= j * Math.max(1, Math.abs(v), Math.abs(hn)) && Math.abs(m - H) <= j * Math.max(1, Math.abs(m), Math.abs(H)) && Math.abs(T - xn) <= j * Math.max(1, Math.abs(T), Math.abs(xn)) && Math.abs(A - dn) <= j * Math.max(1, Math.abs(A), Math.abs(dn)) && Math.abs(w - on) <= j * Math.max(1, Math.abs(w), Math.abs(on)) && Math.abs(S - K) <= j * Math.max(1, Math.abs(S), Math.abs(K)) && Math.abs(R - nt) <= j * Math.max(1, Math.abs(R), Math.abs(nt)) && Math.abs(C - Zn) <= j * Math.max(1, Math.abs(C), Math.abs(Zn)) && Math.abs(D - Wn) <= j * Math.max(1, Math.abs(D), Math.abs(Wn));
  }
  /**
   * Returns a string representation of a {@link Mat4}
   * @category Static
   *
   * @param a - matrix to represent as a string
   * @returns string representation of the matrix
   */
  static str(n) {
    return `Mat4(${n.join(", ")})`;
  }
};
/**
 * The number of bytes in a {@link Mat4}.
 */
$(Sn, "BYTE_LENGTH", 16 * Float32Array.BYTES_PER_ELEMENT);
let jn = Sn;
const qr = new J();
jn.prototype.mul = jn.prototype.multiply;
jn.sub = jn.subtract;
jn.mul = jn.multiply;
jn.perspective = jn.perspectiveNO;
jn.ortho = jn.orthoNO;
const In = jn, wt = class wt extends Float32Array {
  /**
   * Create a {@link Vec4}.
   */
  constructor(...n) {
    switch (n.length) {
      case 4:
        super(n);
        break;
      case 2:
        super(n[0], n[1], 4);
        break;
      case 1: {
        const e = n[0];
        typeof e == "number" ? super([e, e, e, e]) : super(e, 0, 4);
        break;
      }
      default:
        super(4);
        break;
    }
  }
  //============
  // Attributes
  //============
  // Getters and setters to make component access read better.
  // These are likely to be a little bit slower than direct array access.
  /**
   * The x component of the vector. Equivalent to `this[0];`
   * @category Vector components
   */
  get x() {
    return this[0];
  }
  set x(n) {
    this[0] = n;
  }
  /**
   * The y component of the vector. Equivalent to `this[1];`
   * @category Vector components
   */
  get y() {
    return this[1];
  }
  set y(n) {
    this[1] = n;
  }
  /**
   * The z component of the vector. Equivalent to `this[2];`
   * @category Vector components
   */
  get z() {
    return this[2];
  }
  set z(n) {
    this[2] = n;
  }
  /**
   * The w component of the vector. Equivalent to `this[3];`
   * @category Vector components
   */
  get w() {
    return this[3];
  }
  set w(n) {
    this[3] = n;
  }
  // Alternate set of getters and setters in case this is being used to define
  // a color.
  /**
   * The r component of the vector. Equivalent to `this[0];`
   * @category Color components
   */
  get r() {
    return this[0];
  }
  set r(n) {
    this[0] = n;
  }
  /**
   * The g component of the vector. Equivalent to `this[1];`
   * @category Color components
   */
  get g() {
    return this[1];
  }
  set g(n) {
    this[1] = n;
  }
  /**
   * The b component of the vector. Equivalent to `this[2];`
   * @category Color components
   */
  get b() {
    return this[2];
  }
  set b(n) {
    this[2] = n;
  }
  /**
   * The a component of the vector. Equivalent to `this[3];`
   * @category Color components
   */
  get a() {
    return this[3];
  }
  set a(n) {
    this[3] = n;
  }
  /**
   * The magnitude (length) of this.
   * Equivalent to `Vec4.magnitude(this);`
   *
   * Magnitude is used because the `length` attribute is already defined by
   * `Float32Array` to mean the number of elements in the array.
   */
  get magnitude() {
    const n = this[0], e = this[1], s = this[2], a = this[3];
    return Math.sqrt(n * n + e * e + s * s + a * a);
  }
  /**
   * Alias for {@link Vec4.magnitude}
   */
  get mag() {
    return this.magnitude;
  }
  /**
   * A string representation of `this`
   * Equivalent to `Vec4.str(this);`
   */
  get str() {
    return wt.str(this);
  }
  //===================
  // Instances methods
  //===================
  /**
   * Copy the values from another {@link Vec4} into `this`.
   *
   * @param a the source vector
   * @returns `this`
   */
  copy(n) {
    return super.set(n), this;
  }
  /**
   * Adds a {@link Vec4} to `this`.
   * Equivalent to `Vec4.add(this, this, b);`
   *
   * @param b - The vector to add to `this`
   * @returns `this`
   */
  add(n) {
    return this[0] += n[0], this[1] += n[1], this[2] += n[2], this[3] += n[3], this;
  }
  /**
   * Subtracts a {@link Vec4} from `this`.
   * Equivalent to `Vec4.subtract(this, this, b);`
   *
   * @param b - The vector to subtract from `this`
   * @returns `this`
   */
  subtract(n) {
    return this[0] -= n[0], this[1] -= n[1], this[2] -= n[2], this[3] -= n[3], this;
  }
  /**
   * Alias for {@link Vec4.subtract}
   */
  sub(n) {
    return this;
  }
  /**
   * Multiplies `this` by a {@link Vec4}.
   * Equivalent to `Vec4.multiply(this, this, b);`
   *
   * @param b - The vector to multiply `this` by
   * @returns `this`
   */
  multiply(n) {
    return this[0] *= n[0], this[1] *= n[1], this[2] *= n[2], this[3] *= n[3], this;
  }
  /**
   * Alias for {@link Vec4.multiply}
   */
  mul(n) {
    return this;
  }
  /**
   * Divides `this` by a {@link Vec4}.
   * Equivalent to `Vec4.divide(this, this, b);`
   *
   * @param b - The vector to divide `this` by
   * @returns `this`
   */
  divide(n) {
    return this[0] /= n[0], this[1] /= n[1], this[2] /= n[2], this[3] /= n[3], this;
  }
  /**
   * Alias for {@link Vec4.divide}
   */
  div(n) {
    return this;
  }
  /**
   * Scales `this` by a scalar number.
   * Equivalent to `Vec4.scale(this, this, b);`
   *
   * @param b - Amount to scale `this` by
   * @returns `this`
   */
  scale(n) {
    return this[0] *= n, this[1] *= n, this[2] *= n, this[3] *= n, this;
  }
  /**
   * Calculates `this` scaled by a scalar value then adds the result to `this`.
   * Equivalent to `Vec4.scaleAndAdd(this, this, b, scale);`
   *
   * @param b - The vector to add to `this`
   * @param scale - The amount to scale `b` by before adding
   * @returns `this`
   */
  scaleAndAdd(n, e) {
    return this[0] += n[0] * e, this[1] += n[1] * e, this[2] += n[2] * e, this[3] += n[3] * e, this;
  }
  /**
   * Calculates the euclidian distance between another {@link Vec4} and `this`.
   * Equivalent to `Vec4.distance(this, b);`
   *
   * @param b - The vector to calculate the distance to
   * @returns Distance between `this` and `b`
   */
  distance(n) {
    return wt.distance(this, n);
  }
  /**
   * Alias for {@link Vec4.distance}
   */
  dist(n) {
    return 0;
  }
  /**
   * Calculates the squared euclidian distance between another {@link Vec4} and `this`.
   * Equivalent to `Vec4.squaredDistance(this, b);`
   *
   * @param b The vector to calculate the squared distance to
   * @returns Squared distance between `this` and `b`
   */
  squaredDistance(n) {
    return wt.squaredDistance(this, n);
  }
  /**
   * Alias for {@link Vec4.squaredDistance}
   */
  sqrDist(n) {
    return 0;
  }
  /**
   * Negates the components of `this`.
   * Equivalent to `Vec4.negate(this, this);`
   *
   * @returns `this`
   */
  negate() {
    return this[0] *= -1, this[1] *= -1, this[2] *= -1, this[3] *= -1, this;
  }
  /**
   * Inverts the components of `this`.
   * Equivalent to `Vec4.inverse(this, this);`
   *
   * @returns `this`
   */
  invert() {
    return this[0] = 1 / this[0], this[1] = 1 / this[1], this[2] = 1 / this[2], this[3] = 1 / this[3], this;
  }
  /**
   * Calculates the dot product of this and another {@link Vec4}.
   * Equivalent to `Vec4.dot(this, b);`
   *
   * @param b - The second operand
   * @returns Dot product of `this` and `b`
   */
  dot(n) {
    return this[0] * n[0] + this[1] * n[1] + this[2] * n[2] + this[3] * n[3];
  }
  /**
   * Normalize `this`.
   * Equivalent to `Vec4.normalize(this, this);`
   *
   * @returns `this`
   */
  normalize() {
    return wt.normalize(this, this);
  }
  //===================
  // Static methods
  //===================
  /**
   * Creates a new, empty {@link Vec4}
   * @category Static
   *
   * @returns a new 4D vector
   */
  static create() {
    return new wt();
  }
  /**
   * Creates a new {@link Vec4} initialized with values from an existing vector
   * @category Static
   *
   * @param a - vector to clone
   * @returns a new 4D vector
   */
  static clone(n) {
    return new wt(n);
  }
  /**
   * Creates a new {@link Vec4} initialized with the given values
   * @category Static
   *
   * @param x - X component
   * @param y - Y component
   * @param z - Z component
   * @param w - W component
   * @returns a new 4D vector
   */
  static fromValues(n, e, s, a) {
    return new wt(n, e, s, a);
  }
  /**
   * Copy the values from one {@link Vec4} to another
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the source vector
   * @returns `out`
   */
  static copy(n, e) {
    return n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n;
  }
  /**
   * Set the components of a {@link Vec4} to the given values
   * @category Static
   *
   * @param out - the receiving vector
   * @param x - X component
   * @param y - Y component
   * @param z - Z component
   * @param w - W component
   * @returns `out`
   */
  static set(n, e, s, a, f) {
    return n[0] = e, n[1] = s, n[2] = a, n[3] = f, n;
  }
  /**
   * Adds two {@link Vec4}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static add(n, e, s) {
    return n[0] = e[0] + s[0], n[1] = e[1] + s[1], n[2] = e[2] + s[2], n[3] = e[3] + s[3], n;
  }
  /**
   * Subtracts vector b from vector a
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static subtract(n, e, s) {
    return n[0] = e[0] - s[0], n[1] = e[1] - s[1], n[2] = e[2] - s[2], n[3] = e[3] - s[3], n;
  }
  /**
   * Alias for {@link Vec4.subtract}
   * @category Static
   */
  static sub(n, e, s) {
    return n;
  }
  /**
   * Multiplies two {@link Vec4}'s
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static multiply(n, e, s) {
    return n[0] = e[0] * s[0], n[1] = e[1] * s[1], n[2] = e[2] * s[2], n[3] = e[3] * s[3], n;
  }
  /**
   * Alias for {@link Vec4.multiply}
   * @category Static
   */
  static mul(n, e, s) {
    return n;
  }
  /**
   * Divides two {@link Vec4}'s
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static divide(n, e, s) {
    return n[0] = e[0] / s[0], n[1] = e[1] / s[1], n[2] = e[2] / s[2], n[3] = e[3] / s[3], n;
  }
  /**
   * Alias for {@link Vec4.divide}
   * @category Static
   */
  static div(n, e, s) {
    return n;
  }
  /**
   * Math.ceil the components of a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to ceil
   * @returns `out`
   */
  static ceil(n, e) {
    return n[0] = Math.ceil(e[0]), n[1] = Math.ceil(e[1]), n[2] = Math.ceil(e[2]), n[3] = Math.ceil(e[3]), n;
  }
  /**
   * Math.floor the components of a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to floor
   * @returns `out`
   */
  static floor(n, e) {
    return n[0] = Math.floor(e[0]), n[1] = Math.floor(e[1]), n[2] = Math.floor(e[2]), n[3] = Math.floor(e[3]), n;
  }
  /**
   * Returns the minimum of two {@link Vec4}'s
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static min(n, e, s) {
    return n[0] = Math.min(e[0], s[0]), n[1] = Math.min(e[1], s[1]), n[2] = Math.min(e[2], s[2]), n[3] = Math.min(e[3], s[3]), n;
  }
  /**
   * Returns the maximum of two {@link Vec4}'s
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static max(n, e, s) {
    return n[0] = Math.max(e[0], s[0]), n[1] = Math.max(e[1], s[1]), n[2] = Math.max(e[2], s[2]), n[3] = Math.max(e[3], s[3]), n;
  }
  /**
   * Math.round the components of a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to round
   * @returns `out`
   */
  static round(n, e) {
    return n[0] = Math.round(e[0]), n[1] = Math.round(e[1]), n[2] = Math.round(e[2]), n[3] = Math.round(e[3]), n;
  }
  /**
   * Scales a {@link Vec4} by a scalar number
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to scale
   * @param scale - amount to scale the vector by
   * @returns `out`
   */
  static scale(n, e, s) {
    return n[0] = e[0] * s, n[1] = e[1] * s, n[2] = e[2] * s, n[3] = e[3] * s, n;
  }
  /**
   * Adds two {@link Vec4}'s after scaling the second operand by a scalar value
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param scale - the amount to scale b by before adding
   * @returns `out`
   */
  static scaleAndAdd(n, e, s, a) {
    return n[0] = e[0] + s[0] * a, n[1] = e[1] + s[1] * a, n[2] = e[2] + s[2] * a, n[3] = e[3] + s[3] * a, n;
  }
  /**
   * Calculates the euclidian distance between two {@link Vec4}'s
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns distance between a and b
   */
  static distance(n, e) {
    const s = e[0] - n[0], a = e[1] - n[1], f = e[2] - n[2], l = e[3] - n[3];
    return Math.hypot(s, a, f, l);
  }
  /**
   * Alias for {@link Vec4.distance}
   * @category Static
   */
  static dist(n, e) {
    return 0;
  }
  /**
   * Calculates the squared euclidian distance between two {@link Vec4}'s
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns squared distance between a and b
   */
  static squaredDistance(n, e) {
    const s = e[0] - n[0], a = e[1] - n[1], f = e[2] - n[2], l = e[3] - n[3];
    return s * s + a * a + f * f + l * l;
  }
  /**
   * Alias for {@link Vec4.squaredDistance}
   * @category Static
   */
  static sqrDist(n, e) {
    return 0;
  }
  /**
   * Calculates the magnitude (length) of a {@link Vec4}
   * @category Static
   *
   * @param a - vector to calculate length of
   * @returns length of `a`
   */
  static magnitude(n) {
    const e = n[0], s = n[1], a = n[2], f = n[3];
    return Math.sqrt(e * e + s * s + a * a + f * f);
  }
  /**
   * Alias for {@link Vec4.magnitude}
   * @category Static
   */
  static mag(n) {
    return 0;
  }
  /**
   * Alias for {@link Vec4.magnitude}
   * @category Static
   * @deprecated Use {@link Vec4.magnitude} to avoid conflicts with builtin `length` methods/attribs
   */
  // @ts-ignore: Length conflicts with Function.length
  static length(n) {
    return 0;
  }
  /**
   * Alias for {@link Vec4.magnitude}
   * @category Static
   * @deprecated Use {@link Vec4.mag}
   */
  static len(n) {
    return 0;
  }
  /**
   * Calculates the squared length of a {@link Vec4}
   * @category Static
   *
   * @param a - vector to calculate squared length of
   * @returns squared length of a
   */
  static squaredLength(n) {
    const e = n[0], s = n[1], a = n[2], f = n[3];
    return e * e + s * s + a * a + f * f;
  }
  /**
   * Alias for {@link Vec4.squaredLength}
   * @category Static
   */
  static sqrLen(n) {
    return 0;
  }
  /**
   * Negates the components of a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to negate
   * @returns `out`
   */
  static negate(n, e) {
    return n[0] = -e[0], n[1] = -e[1], n[2] = -e[2], n[3] = -e[3], n;
  }
  /**
   * Returns the inverse of the components of a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to invert
   * @returns `out`
   */
  static inverse(n, e) {
    return n[0] = 1 / e[0], n[1] = 1 / e[1], n[2] = 1 / e[2], n[3] = 1 / e[3], n;
  }
  /**
   * Normalize a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to normalize
   * @returns `out`
   */
  static normalize(n, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3];
    let p = s * s + a * a + f * f + l * l;
    return p > 0 && (p = 1 / Math.sqrt(p)), n[0] = s * p, n[1] = a * p, n[2] = f * p, n[3] = l * p, n;
  }
  /**
   * Calculates the dot product of two {@link Vec4}'s
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns dot product of a and b
   */
  static dot(n, e) {
    return n[0] * e[0] + n[1] * e[1] + n[2] * e[2] + n[3] * e[3];
  }
  /**
   * Returns the cross-product of three vectors in a 4-dimensional space
   * @category Static
   *
   * @param out the receiving vector
   * @param u - the first vector
   * @param v - the second vector
   * @param w - the third vector
   * @returns result
   */
  static cross(n, e, s, a) {
    const f = s[0] * a[1] - s[1] * a[0], l = s[0] * a[2] - s[2] * a[0], p = s[0] * a[3] - s[3] * a[0], g = s[1] * a[2] - s[2] * a[1], x = s[1] * a[3] - s[3] * a[1], v = s[2] * a[3] - s[3] * a[2], m = e[0], T = e[1], A = e[2], w = e[3];
    return n[0] = T * v - A * x + w * g, n[1] = -(m * v) + A * p - w * l, n[2] = m * x - T * p + w * f, n[3] = -(m * g) + T * l - A * f, n;
  }
  /**
   * Performs a linear interpolation between two {@link Vec4}'s
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the first operand
   * @param b - the second operand
   * @param t - interpolation amount, in the range [0-1], between the two inputs
   * @returns `out`
   */
  static lerp(n, e, s, a) {
    const f = e[0], l = e[1], p = e[2], g = e[3];
    return n[0] = f + a * (s[0] - f), n[1] = l + a * (s[1] - l), n[2] = p + a * (s[2] - p), n[3] = g + a * (s[3] - g), n;
  }
  /**
   * Generates a random vector with the given scale
   * @category Static
   *
   * @param out - the receiving vector
   * @param [scale] - Length of the resulting vector. If ommitted, a unit vector will be returned
   * @returns `out`
   */
  /*static random(out: Vec4Like, scale): Vec4Like {
      scale = scale || 1.0;
  
      // Marsaglia, George. Choosing a Point from the Surface of a
      // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
      // http://projecteuclid.org/euclid.aoms/1177692644;
      var v1, v2, v3, v4;
      var s1, s2;
      do {
        v1 = glMatrix.RANDOM() * 2 - 1;
        v2 = glMatrix.RANDOM() * 2 - 1;
        s1 = v1 * v1 + v2 * v2;
      } while (s1 >= 1);
      do {
        v3 = glMatrix.RANDOM() * 2 - 1;
        v4 = glMatrix.RANDOM() * 2 - 1;
        s2 = v3 * v3 + v4 * v4;
      } while (s2 >= 1);
  
      var d = Math.sqrt((1 - s1) / s2);
      out[0] = scale * v1;
      out[1] = scale * v2;
      out[2] = scale * v3 * d;
      out[3] = scale * v4 * d;
      return out;
    }*/
  /**
   * Transforms the {@link Vec4} with a {@link Mat4}.
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to transform
   * @param m - matrix to transform with
   * @returns `out`
   */
  static transformMat4(n, e, s) {
    const a = e[0], f = e[1], l = e[2], p = e[3];
    return n[0] = s[0] * a + s[4] * f + s[8] * l + s[12] * p, n[1] = s[1] * a + s[5] * f + s[9] * l + s[13] * p, n[2] = s[2] * a + s[6] * f + s[10] * l + s[14] * p, n[3] = s[3] * a + s[7] * f + s[11] * l + s[15] * p, n;
  }
  /**
   * Transforms the {@link Vec4} with a {@link Quat}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to transform
   * @param q - quaternion to transform with
   * @returns `out`
   */
  static transformQuat(n, e, s) {
    const a = e[0], f = e[1], l = e[2], p = s[0], g = s[1], x = s[2], v = s[3], m = v * a + g * l - x * f, T = v * f + x * a - p * l, A = v * l + p * f - g * a, w = -p * a - g * f - x * l;
    return n[0] = m * v + w * -p + T * -x - A * -g, n[1] = T * v + w * -g + A * -p - m * -x, n[2] = A * v + w * -x + m * -g - T * -p, n[3] = e[3], n;
  }
  /**
   * Set the components of a {@link Vec4} to zero
   * @category Static
   *
   * @param out - the receiving vector
   * @returns `out`
   */
  static zero(n) {
    return n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0, n;
  }
  /**
   * Returns a string representation of a {@link Vec4}
   * @category Static
   *
   * @param a - vector to represent as a string
   * @returns string representation of the vector
   */
  static str(n) {
    return `Vec4(${n.join(", ")})`;
  }
  /**
   * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static exactEquals(n, e) {
    return n[0] === e[0] && n[1] === e[1] && n[2] === e[2] && n[3] === e[3];
  }
  /**
   * Returns whether or not the vectors have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static equals(n, e) {
    const s = n[0], a = n[1], f = n[2], l = n[3], p = e[0], g = e[1], x = e[2], v = e[3];
    return Math.abs(s - p) <= j * Math.max(1, Math.abs(s), Math.abs(p)) && Math.abs(a - g) <= j * Math.max(1, Math.abs(a), Math.abs(g)) && Math.abs(f - x) <= j * Math.max(1, Math.abs(f), Math.abs(x)) && Math.abs(l - v) <= j * Math.max(1, Math.abs(l), Math.abs(v));
  }
};
/**
 * The number of bytes in a {@link Vec4}.
 */
$(wt, "BYTE_LENGTH", 4 * Float32Array.BYTES_PER_ELEMENT);
let sn = wt;
sn.prototype.sub = sn.prototype.subtract;
sn.prototype.mul = sn.prototype.multiply;
sn.prototype.div = sn.prototype.divide;
sn.prototype.dist = sn.prototype.distance;
sn.prototype.sqrDist = sn.prototype.squaredDistance;
sn.sub = sn.subtract;
sn.mul = sn.multiply;
sn.div = sn.divide;
sn.dist = sn.distance;
sn.sqrDist = sn.squaredDistance;
sn.sqrLen = sn.squaredLength;
sn.mag = sn.magnitude;
sn.length = sn.magnitude;
sn.len = sn.magnitude;
const wn = class wn extends Float32Array {
  /**
   * Create a {@link Quat}.
   */
  constructor(...n) {
    switch (n.length) {
      case 4:
        super(n);
        break;
      case 2:
        super(n[0], n[1], 4);
        break;
      case 1: {
        const e = n[0];
        typeof e == "number" ? super([e, e, e, e]) : super(e, 0, 4);
        break;
      }
      default:
        super(4), this[3] = 1;
        break;
    }
  }
  //============
  // Attributes
  //============
  // Getters and setters to make component access read better.
  // These are likely to be a little bit slower than direct array access.
  /**
   * The x component of the quaternion. Equivalent to `this[0];`
   * @category Quaternion components
   */
  get x() {
    return this[0];
  }
  set x(n) {
    this[0] = n;
  }
  /**
   * The y component of the quaternion. Equivalent to `this[1];`
   * @category Quaternion components
   */
  get y() {
    return this[1];
  }
  set y(n) {
    this[1] = n;
  }
  /**
   * The z component of the quaternion. Equivalent to `this[2];`
   * @category Quaternion components
   */
  get z() {
    return this[2];
  }
  set z(n) {
    this[2] = n;
  }
  /**
   * The w component of the quaternion. Equivalent to `this[3];`
   * @category Quaternion components
   */
  get w() {
    return this[3];
  }
  set w(n) {
    this[3] = n;
  }
  /**
   * The magnitude (length) of this.
   * Equivalent to `Quat.magnitude(this);`
   *
   * Magnitude is used because the `length` attribute is already defined by
   * `Float32Array` to mean the number of elements in the array.
   */
  get magnitude() {
    const n = this[0], e = this[1], s = this[2], a = this[3];
    return Math.sqrt(n * n + e * e + s * s + a * a);
  }
  /**
   * Alias for {@link Quat.magnitude}
   */
  get mag() {
    return this.magnitude;
  }
  /**
   * A string representation of `this`
   * Equivalent to `Quat.str(this);`
   */
  get str() {
    return wn.str(this);
  }
  //===================
  // Instances methods
  //===================
  /**
   * Copy the values from another {@link Quat} into `this`.
   *
   * @param a the source quaternion
   * @returns `this`
   */
  copy(n) {
    return super.set(n), this;
  }
  /**
   * Set `this` to the identity quaternion
   * Equivalent to Quat.identity(this)
   *
   * @returns `this`
   */
  identity() {
    return this[0] = 0, this[1] = 0, this[2] = 0, this[3] = 1, this;
  }
  /**
   * Multiplies `this` by a {@link Quat}.
   * Equivalent to `Quat.multiply(this, this, b);`
   *
   * @param b - The vector to multiply `this` by
   * @returns `this`
   */
  multiply(n) {
    return wn.multiply(this, this, n);
  }
  /**
   * Alias for {@link Quat.multiply}
   */
  mul(n) {
    return this;
  }
  /**
   * Rotates `this` by the given angle about the X axis
   * Equivalent to `Quat.rotateX(this, this, rad);`
   *
   * @param rad - angle (in radians) to rotate
   * @returns `this`
   */
  rotateX(n) {
    return wn.rotateX(this, this, n);
  }
  /**
   * Rotates `this` by the given angle about the Y axis
   * Equivalent to `Quat.rotateY(this, this, rad);`
   *
   * @param rad - angle (in radians) to rotate
   * @returns `this`
   */
  rotateY(n) {
    return wn.rotateY(this, this, n);
  }
  /**
   * Rotates `this` by the given angle about the Z axis
   * Equivalent to `Quat.rotateZ(this, this, rad);`
   *
   * @param rad - angle (in radians) to rotate
   * @returns `this`
   */
  rotateZ(n) {
    return wn.rotateZ(this, this, n);
  }
  /**
   * Inverts `this`
   * Equivalent to `Quat.invert(this, this);`
   *
   * @returns `this`
   */
  invert() {
    return wn.invert(this, this);
  }
  /**
   * Scales `this` by a scalar number
   * Equivalent to `Quat.scale(this, this, scale);`
   *
   * @param out - the receiving vector
   * @param a - the vector to scale
   * @param scale - amount to scale the vector by
   * @returns `this`
   */
  scale(n) {
    return this[0] *= n, this[1] *= n, this[2] *= n, this[3] *= n, this;
  }
  /**
   * Calculates the dot product of `this` and another {@link Quat}
   * Equivalent to `Quat.dot(this, b);`
   *
   * @param b - the second operand
   * @returns dot product of `this` and b
   */
  dot(n) {
    return wn.dot(this, n);
  }
  //===================
  // Static methods
  //===================
  /**
   * Creates a new identity quat
   * @category Static
   *
   * @returns a new quaternion
   */
  static create() {
    return new wn();
  }
  /**
   * Set a quat to the identity quaternion
   * @category Static
   *
   * @param out - the receiving quaternion
   * @returns `out`
   */
  static identity(n) {
    return n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1, n;
  }
  /**
   * Sets a quat from the given angle and rotation axis,
   * then returns it.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param axis - the axis around which to rotate
   * @param rad - the angle in radians
   * @returns `out`
   **/
  static setAxisAngle(n, e, s) {
    s = s * 0.5;
    const a = Math.sin(s);
    return n[0] = a * e[0], n[1] = a * e[1], n[2] = a * e[2], n[3] = Math.cos(s), n;
  }
  /**
   * Gets the rotation axis and angle for a given
   *  quaternion. If a quaternion is created with
   *  setAxisAngle, this method will return the same
   *  values as providied in the original parameter list
   *  OR functionally equivalent values.
   * Example: The quaternion formed by axis [0, 0, 1] and
   *  angle -90 is the same as the quaternion formed by
   *  [0, 0, 1] and 270. This method favors the latter.
   * @category Static
   *
   * @param out_axis - Vector receiving the axis of rotation
   * @param q - Quaternion to be decomposed
   * @return Angle, in radians, of the rotation
   */
  static getAxisAngle(n, e) {
    const s = Math.acos(e[3]) * 2, a = Math.sin(s / 2);
    return a > j ? (n[0] = e[0] / a, n[1] = e[1] / a, n[2] = e[2] / a) : (n[0] = 1, n[1] = 0, n[2] = 0), s;
  }
  /**
   * Gets the angular distance between two unit quaternions
   * @category Static
   *
   * @param  {ReadonlyQuat} a     Origin unit quaternion
   * @param  {ReadonlyQuat} b     Destination unit quaternion
   * @return {Number}     Angle, in radians, between the two quaternions
   */
  static getAngle(n, e) {
    const s = wn.dot(n, e);
    return Math.acos(2 * s * s - 1);
  }
  /**
   * Multiplies two quat's
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static multiply(n, e, s) {
    const a = e[0], f = e[1], l = e[2], p = e[3], g = s[0], x = s[1], v = s[2], m = s[3];
    return n[0] = a * m + p * g + f * v - l * x, n[1] = f * m + p * x + l * g - a * v, n[2] = l * m + p * v + a * x - f * g, n[3] = p * m - a * g - f * x - l * v, n;
  }
  /**
   * Rotates a quaternion by the given angle about the X axis
   * @category Static
   *
   * @param out - quat receiving operation result
   * @param a - quat to rotate
   * @param rad - angle (in radians) to rotate
   * @returns `out`
   */
  static rotateX(n, e, s) {
    s *= 0.5;
    const a = e[0], f = e[1], l = e[2], p = e[3], g = Math.sin(s), x = Math.cos(s);
    return n[0] = a * x + p * g, n[1] = f * x + l * g, n[2] = l * x - f * g, n[3] = p * x - a * g, n;
  }
  /**
   * Rotates a quaternion by the given angle about the Y axis
   * @category Static
   *
   * @param out - quat receiving operation result
   * @param a - quat to rotate
   * @param rad - angle (in radians) to rotate
   * @returns `out`
   */
  static rotateY(n, e, s) {
    s *= 0.5;
    const a = e[0], f = e[1], l = e[2], p = e[3], g = Math.sin(s), x = Math.cos(s);
    return n[0] = a * x - l * g, n[1] = f * x + p * g, n[2] = l * x + a * g, n[3] = p * x - f * g, n;
  }
  /**
   * Rotates a quaternion by the given angle about the Z axis
   * @category Static
   *
   * @param out - quat receiving operation result
   * @param a - quat to rotate
   * @param rad - angle (in radians) to rotate
   * @returns `out`
   */
  static rotateZ(n, e, s) {
    s *= 0.5;
    const a = e[0], f = e[1], l = e[2], p = e[3], g = Math.sin(s), x = Math.cos(s);
    return n[0] = a * x + f * g, n[1] = f * x - a * g, n[2] = l * x + p * g, n[3] = p * x - l * g, n;
  }
  /**
   * Calculates the W component of a quat from the X, Y, and Z components.
   * Assumes that quaternion is 1 unit in length.
   * Any existing W component will be ignored.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quat to calculate W component of
   * @returns `out`
   */
  static calculateW(n, e) {
    const s = e[0], a = e[1], f = e[2];
    return n[0] = s, n[1] = a, n[2] = f, n[3] = Math.sqrt(Math.abs(1 - s * s - a * a - f * f)), n;
  }
  /**
   * Calculate the exponential of a unit quaternion.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quat to calculate the exponential of
   * @returns `out`
   */
  static exp(n, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], p = Math.sqrt(s * s + a * a + f * f), g = Math.exp(l), x = p > 0 ? g * Math.sin(p) / p : 0;
    return n[0] = s * x, n[1] = a * x, n[2] = f * x, n[3] = g * Math.cos(p), n;
  }
  /**
   * Calculate the natural logarithm of a unit quaternion.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quat to calculate the exponential of
   * @returns `out`
   */
  static ln(n, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], p = Math.sqrt(s * s + a * a + f * f), g = p > 0 ? Math.atan2(p, l) / p : 0;
    return n[0] = s * g, n[1] = a * g, n[2] = f * g, n[3] = 0.5 * Math.log(s * s + a * a + f * f + l * l), n;
  }
  /**
   * Calculate the scalar power of a unit quaternion.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quat to calculate the exponential of
   * @param b - amount to scale the quaternion by
   * @returns `out`
   */
  static pow(n, e, s) {
    return wn.ln(n, e), wn.scale(n, n, s), wn.exp(n, n), n;
  }
  /**
   * Performs a spherical linear interpolation between two quat
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - the first operand
   * @param b - the second operand
   * @param t - interpolation amount, in the range [0-1], between the two inputs
   * @returns `out`
   */
  static slerp(n, e, s, a) {
    const f = e[0], l = e[1], p = e[2], g = e[3];
    let x = s[0], v = s[1], m = s[2], T = s[3], A, w, S = f * x + l * v + p * m + g * T;
    if (S < 0 && (S = -S, x = -x, v = -v, m = -m, T = -T), 1 - S > j) {
      const R = Math.acos(S), C = Math.sin(R);
      A = Math.sin((1 - a) * R) / C, w = Math.sin(a * R) / C;
    } else
      A = 1 - a, w = a;
    return n[0] = A * f + w * x, n[1] = A * l + w * v, n[2] = A * p + w * m, n[3] = A * g + w * T, n;
  }
  /**
   * Generates a random unit quaternion
   * @category Static
   *
   * @param out - the receiving quaternion
   * @returns `out`
   */
  /*static random(out: QuatLike): QuatLike {
      // Implementation of http://planning.cs.uiuc.edu/node198.html
      // TODO: Calling random 3 times is probably not the fastest solution
      let u1 = glMatrix.RANDOM();
      let u2 = glMatrix.RANDOM();
      let u3 = glMatrix.RANDOM();
  
      let sqrt1MinusU1 = Math.sqrt(1 - u1);
      let sqrtU1 = Math.sqrt(u1);
  
      out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
      out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
      out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
      out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
      return out;
    }*/
  /**
   * Calculates the inverse of a quat
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quat to calculate inverse of
   * @returns `out`
   */
  static invert(n, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], p = s * s + a * a + f * f + l * l, g = p ? 1 / p : 0;
    return n[0] = -s * g, n[1] = -a * g, n[2] = -f * g, n[3] = l * g, n;
  }
  /**
   * Calculates the conjugate of a quat
   * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quat to calculate conjugate of
   * @returns `out`
   */
  static conjugate(n, e) {
    return n[0] = -e[0], n[1] = -e[1], n[2] = -e[2], n[3] = e[3], n;
  }
  /**
   * Creates a quaternion from the given 3x3 rotation matrix.
   *
   * NOTE: The resultant quaternion is not normalized, so you should be sure
   * to renormalize the quaternion yourself where necessary.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param m - rotation matrix
   * @returns `out`
   */
  static fromMat3(n, e) {
    const s = e[0] + e[4] + e[8];
    let a;
    if (s > 0)
      a = Math.sqrt(s + 1), n[3] = 0.5 * a, a = 0.5 / a, n[0] = (e[5] - e[7]) * a, n[1] = (e[6] - e[2]) * a, n[2] = (e[1] - e[3]) * a;
    else {
      let f = 0;
      e[4] > e[0] && (f = 1), e[8] > e[f * 3 + f] && (f = 2);
      let l = (f + 1) % 3, p = (f + 2) % 3;
      a = Math.sqrt(e[f * 3 + f] - e[l * 3 + l] - e[p * 3 + p] + 1), n[f] = 0.5 * a, a = 0.5 / a, n[3] = (e[l * 3 + p] - e[p * 3 + l]) * a, n[l] = (e[l * 3 + f] + e[f * 3 + l]) * a, n[p] = (e[p * 3 + f] + e[f * 3 + p]) * a;
    }
    return n;
  }
  /**
   * Creates a quaternion from the given euler angle x, y, z.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param x - Angle to rotate around X axis in degrees.
   * @param y - Angle to rotate around Y axis in degrees.
   * @param z - Angle to rotate around Z axis in degrees.
   * @returns `out`
   */
  static fromEuler(n, e, s, a) {
    let f = 0.5 * Math.PI / 180;
    e *= f, s *= f, a *= f;
    let l = Math.sin(e), p = Math.cos(e), g = Math.sin(s), x = Math.cos(s), v = Math.sin(a), m = Math.cos(a);
    return n[0] = l * x * m - p * g * v, n[1] = p * g * m + l * x * v, n[2] = p * x * v - l * g * m, n[3] = p * x * m + l * g * v, n;
  }
  /**
   * Returns a string representation of a quatenion
   * @category Static
   *
   * @param a - vector to represent as a string
   * @returns string representation of the vector
   */
  static str(n) {
    return `Quat(${n.join(", ")})`;
  }
  /**
   * Creates a new quat initialized with values from an existing quaternion
   * @category Static
   *
   * @param a - quaternion to clone
   * @returns a new quaternion
   */
  static clone(n) {
    return new wn(n);
  }
  /**
   * Creates a new quat initialized with the given values
   * @category Static
   *
   * @param x - X component
   * @param y - Y component
   * @param z - Z component
   * @param w - W component
   * @returns a new quaternion
   */
  static fromValues(n, e, s, a) {
    return new wn(n, e, s, a);
  }
  /**
   * Copy the values from one quat to another
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - the source quaternion
   * @returns `out`
   */
  static copy(n, e) {
    return n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n;
  }
  /**
   * Set the components of a {@link Quat} to the given values
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param x - X component
   * @param y - Y component
   * @param z - Z component
   * @param w - W component
   * @returns `out`
   */
  static set(n, e, s, a, f) {
    return n;
  }
  /**
   * Adds two {@link Quat}'s
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - the first operand
   * @param b - the second operand
   * @returns `out`
   */
  static add(n, e, s) {
    return n;
  }
  /**
   * Alias for {@link Quat.multiply}
   * @category Static
   */
  static mul(n, e, s) {
    return n;
  }
  /**
   * Scales a quat by a scalar number
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the vector to scale
   * @param b - amount to scale the vector by
   * @returns `out`
   */
  static scale(n, e, s) {
    return n[0] = e[0] * s, n[1] = e[1] * s, n[2] = e[2] * s, n[3] = e[3] * s, n;
  }
  /**
   * Calculates the dot product of two quat's
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns dot product of a and b
   */
  static dot(n, e) {
    return n[0] * e[0] + n[1] * e[1] + n[2] * e[2] + n[3] * e[3];
  }
  /**
   * Performs a linear interpolation between two quat's
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - the first operand
   * @param b - the second operand
   * @param t - interpolation amount, in the range [0-1], between the two inputs
   * @returns `out`
   */
  static lerp(n, e, s, a) {
    return n;
  }
  /**
   * Calculates the magnitude (length) of a {@link Quat}
   * @category Static
   *
   * @param a - quaternion to calculate length of
   * @returns length of `a`
   */
  static magnitude(n) {
    return 0;
  }
  /**
   * Alias for {@link Quat.magnitude}
   * @category Static
   */
  static mag(n) {
    return 0;
  }
  /**
   * Alias for {@link Quat.magnitude}
   * @category Static
   * @deprecated Use {@link Quat.magnitude} to avoid conflicts with builtin `length` methods/attribs
   */
  // @ts-ignore: Length conflicts with Function.length
  static length(n) {
    return 0;
  }
  /**
   * Alias for {@link Quat.magnitude}
   * @category Static
   * @deprecated Use {@link Quat.mag}
   */
  static len(n) {
    return 0;
  }
  /**
   * Calculates the squared length of a {@link Quat}
   * @category Static
   *
   * @param a - quaternion to calculate squared length of
   * @returns squared length of a
   */
  static squaredLength(n) {
    return 0;
  }
  /**
   * Alias for {@link Quat.squaredLength}
   * @category Static
   */
  static sqrLen(n) {
    return 0;
  }
  /**
   * Normalize a {@link Quat}
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quaternion to normalize
   * @returns `out`
   */
  static normalize(n, e) {
    return n;
  }
  /**
   * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first quaternion.
   * @param b - The second quaternion.
   * @returns True if the vectors are equal, false otherwise.
   */
  static exactEquals(n, e) {
    return !1;
  }
  /**
   * Returns whether or not the quaternions have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static equals(n, e) {
    return !1;
  }
  /**
   * Sets a quaternion to represent the shortest rotation from one
   * vector to another.
   *
   * Both vectors are assumed to be unit length.
   * @category Static
   *
   * @param out - the receiving quaternion.
   * @param a - the initial vector
   * @param b - the destination vector
   * @returns `out`
   */
  static rotationTo(n, e, s) {
    let a = J.dot(e, s);
    return a < -0.999999 ? (J.cross(yt, k2, e), J.len(yt) < 1e-6 && J.cross(yt, j2, e), J.normalize(yt, yt), wn.setAxisAngle(n, yt, Math.PI), n) : a > 0.999999 ? (n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1, n) : (J.cross(yt, e, s), n[0] = yt[0], n[1] = yt[1], n[2] = yt[2], n[3] = 1 + a, wn.normalize(n, n));
  }
  /**
   * Performs a spherical linear interpolation with two control points
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - the first operand
   * @param b - the second operand
   * @param c - the third operand
   * @param d - the fourth operand
   * @param t - interpolation amount, in the range [0-1], between the two inputs
   * @returns `out`
   */
  static sqlerp(n, e, s, a, f, l) {
    return wn.slerp(Ya, e, f, l), wn.slerp(Za, s, a, l), wn.slerp(n, Ya, Za, 2 * l * (1 - l)), n;
  }
  /**
   * Sets the specified quaternion with values corresponding to the given
   * axes. Each axis is a vec3 and is expected to be unit length and
   * perpendicular to all other specified axes.
   * @category Static
   *
   * @param out - The receiving quaternion
   * @param view - the vector representing the viewing direction
   * @param right - the vector representing the local "right" direction
   * @param up - the vector representing the local "up" direction
   * @returns `out`
   */
  static setAxes(n, e, s, a) {
    return mt[0] = s[0], mt[3] = s[1], mt[6] = s[2], mt[1] = a[0], mt[4] = a[1], mt[7] = a[2], mt[2] = -e[0], mt[5] = -e[1], mt[8] = -e[2], wn.normalize(n, wn.fromMat3(n, mt));
  }
};
/**
 * The number of bytes in a {@link Quat}.
 */
$(wn, "BYTE_LENGTH", 4 * Float32Array.BYTES_PER_ELEMENT);
let An = wn;
const Ya = new An(), Za = new An(), mt = new Pt(), yt = new J(), k2 = new J(1, 0, 0), j2 = new J(0, 1, 0);
An.set = sn.set;
An.add = sn.add;
An.lerp = sn.lerp;
An.normalize = sn.normalize;
An.squaredLength = sn.squaredLength;
An.sqrLen = sn.squaredLength;
An.exactEquals = sn.exactEquals;
An.equals = sn.equals;
An.magnitude = sn.magnitude;
An.prototype.mul = An.prototype.multiply;
An.mul = An.multiply;
An.mag = An.magnitude;
An.length = An.magnitude;
An.len = An.magnitude;
const Dr = An, At = class At extends Float32Array {
  /**
   * Create a {@link Vec2}.
   */
  constructor(...n) {
    switch (n.length) {
      case 2: {
        const e = n[0];
        typeof e == "number" ? super([e, n[1]]) : super(e, n[1], 2);
        break;
      }
      case 1: {
        const e = n[0];
        typeof e == "number" ? super([e, e]) : super(e, 0, 2);
        break;
      }
      default:
        super(2);
        break;
    }
  }
  //============
  // Attributes
  //============
  // Getters and setters to make component access read better.
  // These are likely to be a little bit slower than direct array access.
  /**
   * The x component of the vector. Equivalent to `this[0];`
   * @category Vector components
   */
  get x() {
    return this[0];
  }
  set x(n) {
    this[0] = n;
  }
  /**
   * The y component of the vector. Equivalent to `this[1];`
   * @category Vector components
   */
  get y() {
    return this[1];
  }
  set y(n) {
    this[1] = n;
  }
  // Alternate set of getters and setters in case this is being used to define
  // a color.
  /**
   * The r component of the vector. Equivalent to `this[0];`
   * @category Color components
   */
  get r() {
    return this[0];
  }
  set r(n) {
    this[0] = n;
  }
  /**
   * The g component of the vector. Equivalent to `this[1];`
   * @category Color components
   */
  get g() {
    return this[1];
  }
  set g(n) {
    this[1] = n;
  }
  /**
   * The magnitude (length) of this.
   * Equivalent to `Vec2.magnitude(this);`
   *
   * Magnitude is used because the `length` attribute is already defined by
   * `Float32Array` to mean the number of elements in the array.
   */
  get magnitude() {
    return Math.hypot(this[0], this[1]);
  }
  /**
   * Alias for {@link Vec2.magnitude}
   */
  get mag() {
    return this.magnitude;
  }
  /**
   * The squared magnitude (length) of `this`.
   * Equivalent to `Vec2.squaredMagnitude(this);`
   */
  get squaredMagnitude() {
    const n = this[0], e = this[1];
    return n * n + e * e;
  }
  /**
   * Alias for {@link Vec2.squaredMagnitude}
   */
  get sqrMag() {
    return this.squaredMagnitude;
  }
  /**
   * A string representation of `this`
   * Equivalent to `Vec2.str(this);`
   */
  get str() {
    return At.str(this);
  }
  //===================
  // Instances methods
  //===================
  /**
   * Copy the values from another {@link Vec2} into `this`.
   *
   * @param a the source vector
   * @returns `this`
   */
  copy(n) {
    return this.set(n), this;
  }
  // Instead of zero(), use a.fill(0) for instances;
  /**
   * Adds a {@link Vec2} to `this`.
   * Equivalent to `Vec2.add(this, this, b);`
   *
   * @param b - The vector to add to `this`
   * @returns `this`
   */
  add(n) {
    return this[0] += n[0], this[1] += n[1], this;
  }
  /**
   * Subtracts a {@link Vec2} from `this`.
   * Equivalent to `Vec2.subtract(this, this, b);`
   *
   * @param b - The vector to subtract from `this`
   * @returns `this`
   */
  subtract(n) {
    return this[0] -= n[0], this[1] -= n[1], this;
  }
  /**
   * Alias for {@link Vec2.subtract}
   */
  sub(n) {
    return this;
  }
  /**
   * Multiplies `this` by a {@link Vec2}.
   * Equivalent to `Vec2.multiply(this, this, b);`
   *
   * @param b - The vector to multiply `this` by
   * @returns `this`
   */
  multiply(n) {
    return this[0] *= n[0], this[1] *= n[1], this;
  }
  /**
   * Alias for {@link Vec2.multiply}
   */
  mul(n) {
    return this;
  }
  /**
   * Divides `this` by a {@link Vec2}.
   * Equivalent to `Vec2.divide(this, this, b);`
   *
   * @param b - The vector to divide `this` by
   * @returns {Vec2} `this`
   */
  divide(n) {
    return this[0] /= n[0], this[1] /= n[1], this;
  }
  /**
   * Alias for {@link Vec2.divide}
   */
  div(n) {
    return this;
  }
  /**
   * Scales `this` by a scalar number.
   * Equivalent to `Vec2.scale(this, this, b);`
   *
   * @param b - Amount to scale `this` by
   * @returns `this`
   */
  scale(n) {
    return this[0] *= n, this[1] *= n, this;
  }
  /**
   * Calculates `this` scaled by a scalar value then adds the result to `this`.
   * Equivalent to `Vec2.scaleAndAdd(this, this, b, scale);`
   *
   * @param b - The vector to add to `this`
   * @param scale - The amount to scale `b` by before adding
   * @returns `this`
   */
  scaleAndAdd(n, e) {
    return this[0] += n[0] * e, this[1] += n[1] * e, this;
  }
  /**
   * Calculates the euclidian distance between another {@link Vec2} and `this`.
   * Equivalent to `Vec2.distance(this, b);`
   *
   * @param b - The vector to calculate the distance to
   * @returns Distance between `this` and `b`
   */
  distance(n) {
    return At.distance(this, n);
  }
  /**
   * Alias for {@link Vec2.distance}
   */
  dist(n) {
    return 0;
  }
  /**
   * Calculates the squared euclidian distance between another {@link Vec2} and `this`.
   * Equivalent to `Vec2.squaredDistance(this, b);`
   *
   * @param b The vector to calculate the squared distance to
   * @returns Squared distance between `this` and `b`
   */
  squaredDistance(n) {
    return At.squaredDistance(this, n);
  }
  /**
   * Alias for {@link Vec2.squaredDistance}
   */
  sqrDist(n) {
    return 0;
  }
  /**
   * Negates the components of `this`.
   * Equivalent to `Vec2.negate(this, this);`
   *
   * @returns `this`
   */
  negate() {
    return this[0] *= -1, this[1] *= -1, this;
  }
  /**
   * Inverts the components of `this`.
   * Equivalent to `Vec2.inverse(this, this);`
   *
   * @returns `this`
   */
  invert() {
    return this[0] = 1 / this[0], this[1] = 1 / this[1], this;
  }
  /**
   * Calculates the dot product of this and another {@link Vec2}.
   * Equivalent to `Vec2.dot(this, b);`
   *
   * @param b - The second operand
   * @returns Dot product of `this` and `b`
   */
  dot(n) {
    return this[0] * n[0] + this[1] * n[1];
  }
  /**
   * Normalize `this`.
   * Equivalent to `Vec2.normalize(this, this);`
   *
   * @returns `this`
   */
  normalize() {
    return At.normalize(this, this);
  }
  //================
  // Static methods
  //================
  /**
   * Creates a new, empty {@link Vec2}
   * @category Static
   *
   * @returns A new 2D vector
   */
  static create() {
    return new At();
  }
  /**
   * Creates a new {@link Vec2} initialized with values from an existing vector
   * @category Static
   *
   * @param a - Vector to clone
   * @returns A new 2D vector
   */
  static clone(n) {
    return new At(n);
  }
  /**
   * Creates a new {@link Vec2} initialized with the given values
   * @category Static
   *
   * @param x - X component
   * @param y - Y component
   * @returns A new 2D vector
   */
  static fromValues(n, e) {
    return new At(n, e);
  }
  /**
   * Copy the values from one {@link Vec2} to another
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - The source vector
   * @returns `out`
   */
  static copy(n, e) {
    return n[0] = e[0], n[1] = e[1], n;
  }
  /**
   * Set the components of a {@link Vec2} to the given values
   * @category Static
   *
   * @param out - The receiving vector
   * @param x - X component
   * @param y - Y component
   * @returns `out`
   */
  static set(n, e, s) {
    return n[0] = e, n[1] = s, n;
  }
  /**
   * Adds two {@link Vec2}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static add(n, e, s) {
    return n[0] = e[0] + s[0], n[1] = e[1] + s[1], n;
  }
  /**
   * Subtracts vector b from vector a
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static subtract(n, e, s) {
    return n[0] = e[0] - s[0], n[1] = e[1] - s[1], n;
  }
  /**
   * Alias for {@link Vec2.subtract}
   * @category Static
   */
  static sub(n, e, s) {
    return [0, 0];
  }
  /**
   * Multiplies two {@link Vec2}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static multiply(n, e, s) {
    return n[0] = e[0] * s[0], n[1] = e[1] * s[1], n;
  }
  /**
   * Alias for {@link Vec2.multiply}
   * @category Static
   */
  static mul(n, e, s) {
    return [0, 0];
  }
  /**
   * Divides two {@link Vec2}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static divide(n, e, s) {
    return n[0] = e[0] / s[0], n[1] = e[1] / s[1], n;
  }
  /**
   * Alias for {@link Vec2.divide}
   * @category Static
   */
  static div(n, e, s) {
    return [0, 0];
  }
  /**
   * Math.ceil the components of a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to ceil
   * @returns `out`
   */
  static ceil(n, e) {
    return n[0] = Math.ceil(e[0]), n[1] = Math.ceil(e[1]), n;
  }
  /**
   * Math.floor the components of a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to floor
   * @returns `out`
   */
  static floor(n, e) {
    return n[0] = Math.floor(e[0]), n[1] = Math.floor(e[1]), n;
  }
  /**
   * Returns the minimum of two {@link Vec2}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static min(n, e, s) {
    return n[0] = Math.min(e[0], s[0]), n[1] = Math.min(e[1], s[1]), n;
  }
  /**
   * Returns the maximum of two {@link Vec2}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static max(n, e, s) {
    return n[0] = Math.max(e[0], s[0]), n[1] = Math.max(e[1], s[1]), n;
  }
  /**
   * Math.round the components of a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to round
   * @returns `out`
   */
  static round(n, e) {
    return n[0] = Math.round(e[0]), n[1] = Math.round(e[1]), n;
  }
  /**
   * Scales a {@link Vec2} by a scalar number
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The vector to scale
   * @param b - Amount to scale the vector by
   * @returns `out`
   */
  static scale(n, e, s) {
    return n[0] = e[0] * s, n[1] = e[1] * s, n;
  }
  /**
   * Adds two Vec2's after scaling the second operand by a scalar value
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @param scale - The amount to scale b by before adding
   * @returns `out`
   */
  static scaleAndAdd(n, e, s, a) {
    return n[0] = e[0] + s[0] * a, n[1] = e[1] + s[1] * a, n;
  }
  /**
   * Calculates the euclidian distance between two {@link Vec2}s
   * @category Static
   *
   * @param a - The first operand
   * @param b - The second operand
   * @returns distance between `a` and `b`
   */
  static distance(n, e) {
    return Math.hypot(e[0] - n[0], e[1] - n[1]);
  }
  /**
   * Alias for {@link Vec2.distance}
   * @category Static
   */
  static dist(n, e) {
    return 0;
  }
  /**
   * Calculates the squared euclidian distance between two {@link Vec2}s
   * @category Static
   *
   * @param a - The first operand
   * @param b - The second operand
   * @returns Squared distance between `a` and `b`
   */
  static squaredDistance(n, e) {
    const s = e[0] - n[0], a = e[1] - n[1];
    return s * s + a * a;
  }
  /**
   * Alias for {@link Vec2.distance}
   * @category Static
   */
  static sqrDist(n, e) {
    return 0;
  }
  /**
   * Calculates the magnitude (length) of a {@link Vec2}
   * @category Static
   *
   * @param a - Vector to calculate magnitude of
   * @returns Magnitude of a
   */
  static magnitude(n) {
    let e = n[0], s = n[1];
    return Math.sqrt(e * e + s * s);
  }
  /**
   * Alias for {@link Vec2.magnitude}
   * @category Static
   */
  static mag(n) {
    return 0;
  }
  /**
   * Alias for {@link Vec2.magnitude}
   * @category Static
   * @deprecated Use {@link Vec2.magnitude} to avoid conflicts with builtin `length` methods/attribs
   *
   * @param a - vector to calculate length of
   * @returns length of a
   */
  // @ts-ignore: Length conflicts with Function.length
  static length(n) {
    return 0;
  }
  /**
   * Alias for {@link Vec2.magnitude}
   * @category Static
   * @deprecated Use {@link Vec2.mag}
   */
  static len(n) {
    return 0;
  }
  /**
   * Calculates the squared length of a {@link Vec2}
   * @category Static
   *
   * @param a - Vector to calculate squared length of
   * @returns Squared length of a
   */
  static squaredLength(n) {
    const e = n[0], s = n[1];
    return e * e + s * s;
  }
  /**
   * Alias for {@link Vec2.squaredLength}
   */
  static sqrLen(n, e) {
    return 0;
  }
  /**
   * Negates the components of a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to negate
   * @returns `out`
   */
  static negate(n, e) {
    return n[0] = -e[0], n[1] = -e[1], n;
  }
  /**
   * Returns the inverse of the components of a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to invert
   * @returns `out`
   */
  static inverse(n, e) {
    return n[0] = 1 / e[0], n[1] = 1 / e[1], n;
  }
  /**
   * Normalize a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to normalize
   * @returns `out`
   */
  static normalize(n, e) {
    const s = e[0], a = e[1];
    let f = s * s + a * a;
    return f > 0 && (f = 1 / Math.sqrt(f)), n[0] = e[0] * f, n[1] = e[1] * f, n;
  }
  /**
   * Calculates the dot product of two {@link Vec2}s
   * @category Static
   *
   * @param a - The first operand
   * @param b - The second operand
   * @returns Dot product of `a` and `b`
   */
  static dot(n, e) {
    return n[0] * e[0] + n[1] * e[1];
  }
  /**
   * Computes the cross product of two {@link Vec2}s
   * Note that the cross product must by definition produce a 3D vector.
   * For this reason there is also not instance equivalent for this function.
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @returns `out`
   */
  static cross(n, e, s) {
    const a = e[0] * s[1] - e[1] * s[0];
    return n[0] = n[1] = 0, n[2] = a, n;
  }
  /**
   * Performs a linear interpolation between two {@link Vec2}s
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - The first operand
   * @param b - The second operand
   * @param t - Interpolation amount, in the range [0-1], between the two inputs
   * @returns `out`
   */
  static lerp(n, e, s, a) {
    const f = e[0], l = e[1];
    return n[0] = f + a * (s[0] - f), n[1] = l + a * (s[1] - l), n;
  }
  /**
   * Transforms the {@link Vec2} with a {@link Mat2}
   *
   * @param out - The receiving vector
   * @param a - The vector to transform
   * @param m - Matrix to transform with
   * @returns `out`
   */
  static transformMat2(n, e, s) {
    const a = e[0], f = e[1];
    return n[0] = s[0] * a + s[2] * f, n[1] = s[1] * a + s[3] * f, n;
  }
  /**
   * Transforms the {@link Vec2} with a {@link Mat2d}
   *
   * @param out - The receiving vector
   * @param a - The vector to transform
   * @param m - Matrix to transform with
   * @returns `out`
   */
  static transformMat2d(n, e, s) {
    const a = e[0], f = e[1];
    return n[0] = s[0] * a + s[2] * f + s[4], n[1] = s[1] * a + s[3] * f + s[5], n;
  }
  /**
   * Transforms the {@link Vec2} with a {@link Mat3}
   * 3rd vector component is implicitly '1'
   *
   * @param out - The receiving vector
   * @param a - The vector to transform
   * @param m - Matrix to transform with
   * @returns `out`
   */
  static transformMat3(n, e, s) {
    const a = e[0], f = e[1];
    return n[0] = s[0] * a + s[3] * f + s[6], n[1] = s[1] * a + s[4] * f + s[7], n;
  }
  /**
   * Transforms the {@link Vec2} with a {@link Mat4}
   * 3rd vector component is implicitly '0'
   * 4th vector component is implicitly '1'
   *
   * @param out - The receiving vector
   * @param a - The vector to transform
   * @param m - Matrix to transform with
   * @returns `out`
   */
  static transformMat4(n, e, s) {
    const a = e[0], f = e[1];
    return n[0] = s[0] * a + s[4] * f + s[12], n[1] = s[1] * a + s[5] * f + s[13], n;
  }
  /**
   * Rotate a 2D vector
   * @category Static
   *
   * @param out - The receiving {@link Vec2}
   * @param a - The {@link Vec2} point to rotate
   * @param b - The origin of the rotation
   * @param rad - The angle of rotation in radians
   * @returns `out`
   */
  static rotate(n, e, s, a) {
    const f = e[0] - s[0], l = e[1] - s[1], p = Math.sin(a), g = Math.cos(a);
    return n[0] = f * g - l * p + s[0], n[1] = f * p + l * g + s[1], n;
  }
  /**
   * Get the angle between two 2D vectors
   * @category Static
   *
   * @param a - The first operand
   * @param b - The second operand
   * @returns The angle in radians
   */
  static angle(n, e) {
    const s = n[0], a = n[1], f = e[0], l = e[1], p = Math.sqrt(s * s + a * a) * Math.sqrt(f * f + l * l), g = p && (s * f + a * l) / p;
    return Math.acos(Math.min(Math.max(g, -1), 1));
  }
  /**
   * Set the components of a {@link Vec2} to zero
   * @category Static
   *
   * @param out - The receiving vector
   * @returns `out`
   */
  static zero(n) {
    return n[0] = 0, n[1] = 0, n;
  }
  /**
   * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns `true` if the vectors components are ===, `false` otherwise.
   */
  static exactEquals(n, e) {
    return n[0] === e[0] && n[1] === e[1];
  }
  /**
   * Returns whether or not the vectors have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns `true` if the vectors are approximately equal, `false` otherwise.
   */
  static equals(n, e) {
    const s = n[0], a = n[1], f = e[0], l = e[1];
    return Math.abs(s - f) <= j * Math.max(1, Math.abs(s), Math.abs(f)) && Math.abs(a - l) <= j * Math.max(1, Math.abs(a), Math.abs(l));
  }
  /**
   * Returns a string representation of a vector
   * @category Static
   *
   * @param a - Vector to represent as a string
   * @returns String representation of the vector
   */
  static str(n) {
    return `Vec2(${n.join(", ")})`;
  }
};
/**
 * The number of bytes in a {@link Vec2}.
 */
$(At, "BYTE_LENGTH", 2 * Float32Array.BYTES_PER_ELEMENT);
let un = At;
un.prototype.sub = un.prototype.subtract;
un.prototype.mul = un.prototype.multiply;
un.prototype.div = un.prototype.divide;
un.prototype.dist = un.prototype.distance;
un.prototype.sqrDist = un.prototype.squaredDistance;
un.sub = un.subtract;
un.mul = un.multiply;
un.div = un.divide;
un.dist = un.distance;
un.sqrDist = un.squaredDistance;
un.sqrLen = un.squaredLength;
un.mag = un.magnitude;
un.length = un.magnitude;
un.len = un.magnitude;
const Yt = un;
class ls extends Wr {
  constructor() {
    super();
    $(this, "name");
    $(this, "matrix", In.create());
    $(this, "location");
  }
  findUniformInfo() {
    return Ne.current.m_uniformLocations[this.name];
  }
  update() {
    Ne.current.gl.uniformMatrix4fv(this.location, !1, this.matrix);
  }
  updateMatrix(e) {
    this.matrix = e;
  }
}
class np extends Set {
  constructor() {
    super();
  }
}
class xe extends ls {
  constructor(e) {
    super();
    $(this, "defaultUniform");
    $(this, "name", "uViewMatrix");
    $(this, "pos");
    this.defaultUniform = e;
    const s = gn.fromValues(0, 5, 5), a = gn.fromValues(0, 0, 0), f = gn.fromValues(0, 1, 0), l = In.create();
    In.lookAt(l, s, a, f), this.matrix = l;
  }
  tie(e) {
    const s = this.findUniformInfo();
    this.location = s.location, this.update();
  }
  obr(e) {
    if (!this.pos) return;
    const s = Yt.create();
    Yt.subtract(s, e, this.pos), s[1] = -s[1], this.pos = e;
    const a = [100, 100], f = this.matrix, l = gn.fromValues(f[0], f[4], f[8]), p = gn.fromValues(f[1], f[5], f[9]), g = gn.fromValues(f[2], f[6], f[10]), x = Yt.length(s) / a[1] * Math.PI * 2;
    Yt.normalize(s, s), gn.normalize(l, l);
    for (let C = 0; C < l.length; ++C)
      l[C] *= s[0];
    gn.normalize(p, p);
    for (let C = 0; C < p.length; ++C)
      p[C] *= s[1];
    const v = gn.create();
    gn.add(v, v, l), gn.add(v, v, p);
    const m = gn.clone(g);
    gn.cross(m, m, v), gn.normalize(m, m);
    const T = Dr.create();
    Dr.setAxisAngle(T, m, x);
    const A = this.defaultUniform.orbitPoint, w = gn.clone(A);
    gn.negate(w, w);
    const S = In.create();
    In.translate(S, S, A);
    const R = In.create();
    In.fromQuat(R, T), In.multiply(S, S, R), In.translate(S, S, w), In.multiply(f, f, S), this.matrix = f, this.update();
  }
  wheel(e) {
    if (!this.pos) return;
    const s = Yt.create();
    Yt.subtract(s, e, this.pos), s[1] = -s[1], this.pos = e;
    const a = [100, 100], f = this.matrix, l = gn.fromValues(f[0], f[4], f[8]), p = gn.fromValues(f[1], f[5], f[9]), g = gn.fromValues(f[2], f[6], f[10]), x = Yt.length(s) / a[1] * Math.PI * 2;
    Yt.normalize(s, s), gn.normalize(l, l);
    for (let C = 0; C < l.length; ++C)
      l[C] *= s[0];
    gn.normalize(p, p);
    for (let C = 0; C < p.length; ++C)
      p[C] *= s[1];
    const v = gn.create();
    gn.add(v, v, l), gn.add(v, v, p);
    const m = gn.clone(g);
    gn.cross(m, m, v), gn.normalize(m, m);
    const T = Dr.create();
    Dr.setAxisAngle(T, m, x);
    const A = this.defaultUniform.orbitPoint, w = gn.clone(A);
    gn.negate(w, w);
    const S = In.create();
    In.translate(S, S, A);
    const R = In.create();
    In.fromQuat(R, T), In.multiply(S, S, R), In.translate(S, S, w), In.multiply(f, f, S), this.matrix = f, this.update();
  }
}
$(xe, "current");
var fs;
((V) => {
  class n {
    static ZoomIn() {
    }
    static ZoomOut() {
    }
  }
  V.Zoom = n;
  class e {
    static update(a) {
      xe.current.obr(a);
    }
  }
  V.Rotate = e;
})(fs || (fs = {}));
const tp = fs.Rotate;
class ep extends Ka {
  constructor() {
    super();
    $(this, "m");
  }
  mousedown(e) {
    console.log(e);
    const s = [e.clientX, e.clientY], a = xe.current;
    return a.pos = s, null;
  }
  mouseup(e) {
    const s = xe.current;
    return s.pos = void 0, super.mouseup(e);
  }
  mousemove(e) {
    const s = [e.clientX, e.clientY];
    return tp.update(s), null;
  }
}
class rp {
  constructor() {
    $(this, "scene");
    $(this, "chain");
    $(this, "cameraChain");
    /*
    * 状态机切换
    * */
    $(this, "state");
  }
  init(n) {
    this.scene = n, this.chain = new V2(), this.cameraChain = new ep(), this.switchState(
      0
      /* Camera */
    ), n.context.canvas.addEventListener("mousedown", (e) => {
      console.log(e), this.chain.mousedown(e), n.render(), e.button == 2 && e.preventDefault();
    }), n.context.canvas.addEventListener("mouseup", (e) => {
      console.log(e), this.chain.mouseup(e);
    }), n.context.canvas.addEventListener("mousemove", (e) => {
      this.chain.mousemove(e), n.render();
    });
  }
  switchState(n) {
    switch (n) {
      case 0:
        this.transitionTo(new J2());
        break;
    }
  }
  transitionTo(n) {
    this.state = n, this.state.setContext(this), this.state.start();
  }
}
class ip extends ls {
  constructor() {
    super();
    $(this, "name", "uModelMatrix");
    const e = this.matrix;
    In.translate(e, e, [0, 0, 0]), this.matrix = e;
  }
  tie(e) {
    const s = this.findUniformInfo();
    this.location = s.location, this.update();
  }
}
class sp extends ls {
  constructor() {
    super();
    $(this, "name", "uProjectionMatrix");
    const e = Ur.gl, s = 45 * Math.PI / 180, a = e.canvas.width / e.canvas.height, f = 0.1, l = 1e3, p = In.create();
    In.perspectiveNO(p, s, a, f, l), this.matrix = p;
  }
  tie(e) {
    this.location = this.findUniformInfo().location, this.update();
  }
}
class cp extends np {
  constructor() {
    super();
    $(this, "modelMatrix");
    $(this, "viewMatrix");
    $(this, "projectMatrix");
    $(this, "orbitPoint");
    $(this, "viewportSize");
    this.projectMatrix = new sp(), this.viewMatrix = new xe(this), this.modelMatrix = new ip(), this.orbitPoint = gn.create(), this.add(
      this.modelMatrix
    ), this.add(
      this.viewMatrix
    ), this.add(
      this.projectMatrix
    ), xe.current = this.viewMatrix;
  }
}
class ap {
  constructor(n) {
    $(this, "defaultUniform");
    $(this, "scene");
    this.scene = n, this.defaultUniform = new cp();
  }
  update() {
    this.scene.render();
  }
}
class lp extends K2 {
  constructor() {
    super();
    $(this, "context");
    $(this, "background", new X2());
    $(this, "model", new G2());
    $(this, "camera");
    $(this, "controller", new rp());
  }
  /*
  挂载 dom 节点
  * */
  mount(e) {
    console.log(e), this.context = new H2(e), this.init();
  }
  /*
  初始化函数
   */
  init() {
    this.camera = new ap(this), this.controller.init(this);
  }
  get gl() {
    var e;
    return (e = this.context) == null ? void 0 : e.gl;
  }
  /*
  构建渲染队列
  */
  build() {
    super.build(this.gl);
  }
  /*执行渲染*/
  render() {
    console.log("render"), super.render(this.gl);
  }
  add(e) {
    this.push(e);
  }
}
export {
  lp as Scene
};
