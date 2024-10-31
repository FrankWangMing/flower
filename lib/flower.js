var lp = Object.defineProperty;
var ap = (U, b, s) => b in U ? lp(U, b, { enumerable: !0, configurable: !0, writable: !0, value: s }) : U[b] = s;
var Q = (U, b, s) => ap(U, typeof b != "symbol" ? b + "" : b, s);
var ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, er = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
er.exports;
(function(U, b) {
  (function() {
    var s, D = "4.17.21", H = 200, tn = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", X = "Expected a function", fe = "Invalid `variable` option passed into `_.template`", ir = "__lodash_hash_undefined__", hs = 500, se = "__lodash_placeholder__", Xn = 1, Oi = 2, dt = 4, vt = 1, oe = 2, dn = 1, ut = 2, bi = 4, bn = 8, wt = 16, Wn = 32, xt = 64, Un = 128, Mt = 256, ur = 512, gs = 30, _s = "...", ps = 800, ds = 16, Wi = 1, vs = 2, ws = 3, ft = 1 / 0, Jn = 9007199254740991, xs = 17976931348623157e292, le = NaN, Pn = 4294967295, As = Pn - 1, Ss = Pn >>> 1, ms = [
      ["ary", Un],
      ["bind", dn],
      ["bindKey", ut],
      ["curry", bn],
      ["curryRight", wt],
      ["flip", ur],
      ["partial", Wn],
      ["partialRight", xt],
      ["rearg", Mt]
    ], At = "[object Arguments]", ae = "[object Array]", Es = "[object AsyncFunction]", Ut = "[object Boolean]", Dt = "[object Date]", Rs = "[object DOMException]", ce = "[object Error]", he = "[object Function]", Pi = "[object GeneratorFunction]", yn = "[object Map]", Nt = "[object Number]", ys = "[object Null]", Dn = "[object Object]", Bi = "[object Promise]", Is = "[object Proxy]", Gt = "[object RegExp]", In = "[object Set]", Ht = "[object String]", ge = "[object Symbol]", Ts = "[object Undefined]", qt = "[object WeakMap]", Ls = "[object WeakSet]", Kt = "[object ArrayBuffer]", St = "[object DataView]", fr = "[object Float32Array]", sr = "[object Float64Array]", or = "[object Int8Array]", lr = "[object Int16Array]", ar = "[object Int32Array]", cr = "[object Uint8Array]", hr = "[object Uint8ClampedArray]", gr = "[object Uint16Array]", _r = "[object Uint32Array]", Cs = /\b__p \+= '';/g, Os = /\b(__p \+=) '' \+/g, bs = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Fi = /&(?:amp|lt|gt|quot|#39);/g, Mi = /[&<>"']/g, Ws = RegExp(Fi.source), Ps = RegExp(Mi.source), Bs = /<%-([\s\S]+?)%>/g, Fs = /<%([\s\S]+?)%>/g, Ui = /<%=([\s\S]+?)%>/g, Ms = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Us = /^\w*$/, Ds = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, pr = /[\\^$.*+?()[\]{}|]/g, Ns = RegExp(pr.source), dr = /^\s+/, Gs = /\s/, Hs = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, qs = /\{\n\/\* \[wrapped with (.+)\] \*/, Ks = /,? & /, $s = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, zs = /[()=,{}\[\]\/\s]/, Zs = /\\(\\)?/g, Ys = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Di = /\w*$/, Xs = /^[-+]0x[0-9a-f]+$/i, Js = /^0b[01]+$/i, Qs = /^\[object .+?Constructor\]$/, Vs = /^0o[0-7]+$/i, ks = /^(?:0|[1-9]\d*)$/, js = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, _e = /($^)/, no = /['\n\r\u2028\u2029\\]/g, pe = "\\ud800-\\udfff", to = "\\u0300-\\u036f", eo = "\\ufe20-\\ufe2f", ro = "\\u20d0-\\u20ff", Ni = to + eo + ro, Gi = "\\u2700-\\u27bf", Hi = "a-z\\xdf-\\xf6\\xf8-\\xff", io = "\\xac\\xb1\\xd7\\xf7", uo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", fo = "\\u2000-\\u206f", so = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", qi = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ki = "\\ufe0e\\ufe0f", $i = io + uo + fo + so, vr = "['’]", oo = "[" + pe + "]", zi = "[" + $i + "]", de = "[" + Ni + "]", Zi = "\\d+", lo = "[" + Gi + "]", Yi = "[" + Hi + "]", Xi = "[^" + pe + $i + Zi + Gi + Hi + qi + "]", wr = "\\ud83c[\\udffb-\\udfff]", ao = "(?:" + de + "|" + wr + ")", Ji = "[^" + pe + "]", xr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ar = "[\\ud800-\\udbff][\\udc00-\\udfff]", mt = "[" + qi + "]", Qi = "\\u200d", Vi = "(?:" + Yi + "|" + Xi + ")", co = "(?:" + mt + "|" + Xi + ")", ki = "(?:" + vr + "(?:d|ll|m|re|s|t|ve))?", ji = "(?:" + vr + "(?:D|LL|M|RE|S|T|VE))?", nu = ao + "?", tu = "[" + Ki + "]?", ho = "(?:" + Qi + "(?:" + [Ji, xr, Ar].join("|") + ")" + tu + nu + ")*", go = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", _o = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", eu = tu + nu + ho, po = "(?:" + [lo, xr, Ar].join("|") + ")" + eu, vo = "(?:" + [Ji + de + "?", de, xr, Ar, oo].join("|") + ")", wo = RegExp(vr, "g"), xo = RegExp(de, "g"), Sr = RegExp(wr + "(?=" + wr + ")|" + vo + eu, "g"), Ao = RegExp([
      mt + "?" + Yi + "+" + ki + "(?=" + [zi, mt, "$"].join("|") + ")",
      co + "+" + ji + "(?=" + [zi, mt + Vi, "$"].join("|") + ")",
      mt + "?" + Vi + "+" + ki,
      mt + "+" + ji,
      _o,
      go,
      Zi,
      po
    ].join("|"), "g"), So = RegExp("[" + Qi + pe + Ni + Ki + "]"), mo = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Eo = [
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
    ], Ro = -1, N = {};
    N[fr] = N[sr] = N[or] = N[lr] = N[ar] = N[cr] = N[hr] = N[gr] = N[_r] = !0, N[At] = N[ae] = N[Kt] = N[Ut] = N[St] = N[Dt] = N[ce] = N[he] = N[yn] = N[Nt] = N[Dn] = N[Gt] = N[In] = N[Ht] = N[qt] = !1;
    var M = {};
    M[At] = M[ae] = M[Kt] = M[St] = M[Ut] = M[Dt] = M[fr] = M[sr] = M[or] = M[lr] = M[ar] = M[yn] = M[Nt] = M[Dn] = M[Gt] = M[In] = M[Ht] = M[ge] = M[cr] = M[hr] = M[gr] = M[_r] = !0, M[ce] = M[he] = M[qt] = !1;
    var yo = {
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
    }, Io = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, To = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Lo = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Co = parseFloat, Oo = parseInt, ru = typeof ue == "object" && ue && ue.Object === Object && ue, bo = typeof self == "object" && self && self.Object === Object && self, V = ru || bo || Function("return this")(), mr = b && !b.nodeType && b, st = mr && !0 && U && !U.nodeType && U, iu = st && st.exports === mr, Er = iu && ru.process, vn = function() {
      try {
        var a = st && st.require && st.require("util").types;
        return a || Er && Er.binding && Er.binding("util");
      } catch {
      }
    }(), uu = vn && vn.isArrayBuffer, fu = vn && vn.isDate, su = vn && vn.isMap, ou = vn && vn.isRegExp, lu = vn && vn.isSet, au = vn && vn.isTypedArray;
    function an(a, g, h) {
      switch (h.length) {
        case 0:
          return a.call(g);
        case 1:
          return a.call(g, h[0]);
        case 2:
          return a.call(g, h[0], h[1]);
        case 3:
          return a.call(g, h[0], h[1], h[2]);
      }
      return a.apply(g, h);
    }
    function Wo(a, g, h, w) {
      for (var E = -1, W = a == null ? 0 : a.length; ++E < W; ) {
        var Z = a[E];
        g(w, Z, h(Z), a);
      }
      return w;
    }
    function wn(a, g) {
      for (var h = -1, w = a == null ? 0 : a.length; ++h < w && g(a[h], h, a) !== !1; )
        ;
      return a;
    }
    function Po(a, g) {
      for (var h = a == null ? 0 : a.length; h-- && g(a[h], h, a) !== !1; )
        ;
      return a;
    }
    function cu(a, g) {
      for (var h = -1, w = a == null ? 0 : a.length; ++h < w; )
        if (!g(a[h], h, a))
          return !1;
      return !0;
    }
    function Qn(a, g) {
      for (var h = -1, w = a == null ? 0 : a.length, E = 0, W = []; ++h < w; ) {
        var Z = a[h];
        g(Z, h, a) && (W[E++] = Z);
      }
      return W;
    }
    function ve(a, g) {
      var h = a == null ? 0 : a.length;
      return !!h && Et(a, g, 0) > -1;
    }
    function Rr(a, g, h) {
      for (var w = -1, E = a == null ? 0 : a.length; ++w < E; )
        if (h(g, a[w]))
          return !0;
      return !1;
    }
    function G(a, g) {
      for (var h = -1, w = a == null ? 0 : a.length, E = Array(w); ++h < w; )
        E[h] = g(a[h], h, a);
      return E;
    }
    function Vn(a, g) {
      for (var h = -1, w = g.length, E = a.length; ++h < w; )
        a[E + h] = g[h];
      return a;
    }
    function yr(a, g, h, w) {
      var E = -1, W = a == null ? 0 : a.length;
      for (w && W && (h = a[++E]); ++E < W; )
        h = g(h, a[E], E, a);
      return h;
    }
    function Bo(a, g, h, w) {
      var E = a == null ? 0 : a.length;
      for (w && E && (h = a[--E]); E--; )
        h = g(h, a[E], E, a);
      return h;
    }
    function Ir(a, g) {
      for (var h = -1, w = a == null ? 0 : a.length; ++h < w; )
        if (g(a[h], h, a))
          return !0;
      return !1;
    }
    var Fo = Tr("length");
    function Mo(a) {
      return a.split("");
    }
    function Uo(a) {
      return a.match($s) || [];
    }
    function hu(a, g, h) {
      var w;
      return h(a, function(E, W, Z) {
        if (g(E, W, Z))
          return w = W, !1;
      }), w;
    }
    function we(a, g, h, w) {
      for (var E = a.length, W = h + (w ? 1 : -1); w ? W-- : ++W < E; )
        if (g(a[W], W, a))
          return W;
      return -1;
    }
    function Et(a, g, h) {
      return g === g ? Jo(a, g, h) : we(a, gu, h);
    }
    function Do(a, g, h, w) {
      for (var E = h - 1, W = a.length; ++E < W; )
        if (w(a[E], g))
          return E;
      return -1;
    }
    function gu(a) {
      return a !== a;
    }
    function _u(a, g) {
      var h = a == null ? 0 : a.length;
      return h ? Cr(a, g) / h : le;
    }
    function Tr(a) {
      return function(g) {
        return g == null ? s : g[a];
      };
    }
    function Lr(a) {
      return function(g) {
        return a == null ? s : a[g];
      };
    }
    function pu(a, g, h, w, E) {
      return E(a, function(W, Z, F) {
        h = w ? (w = !1, W) : g(h, W, Z, F);
      }), h;
    }
    function No(a, g) {
      var h = a.length;
      for (a.sort(g); h--; )
        a[h] = a[h].value;
      return a;
    }
    function Cr(a, g) {
      for (var h, w = -1, E = a.length; ++w < E; ) {
        var W = g(a[w]);
        W !== s && (h = h === s ? W : h + W);
      }
      return h;
    }
    function Or(a, g) {
      for (var h = -1, w = Array(a); ++h < a; )
        w[h] = g(h);
      return w;
    }
    function Go(a, g) {
      return G(g, function(h) {
        return [h, a[h]];
      });
    }
    function du(a) {
      return a && a.slice(0, Au(a) + 1).replace(dr, "");
    }
    function cn(a) {
      return function(g) {
        return a(g);
      };
    }
    function br(a, g) {
      return G(g, function(h) {
        return a[h];
      });
    }
    function $t(a, g) {
      return a.has(g);
    }
    function vu(a, g) {
      for (var h = -1, w = a.length; ++h < w && Et(g, a[h], 0) > -1; )
        ;
      return h;
    }
    function wu(a, g) {
      for (var h = a.length; h-- && Et(g, a[h], 0) > -1; )
        ;
      return h;
    }
    function Ho(a, g) {
      for (var h = a.length, w = 0; h--; )
        a[h] === g && ++w;
      return w;
    }
    var qo = Lr(yo), Ko = Lr(Io);
    function $o(a) {
      return "\\" + Lo[a];
    }
    function zo(a, g) {
      return a == null ? s : a[g];
    }
    function Rt(a) {
      return So.test(a);
    }
    function Zo(a) {
      return mo.test(a);
    }
    function Yo(a) {
      for (var g, h = []; !(g = a.next()).done; )
        h.push(g.value);
      return h;
    }
    function Wr(a) {
      var g = -1, h = Array(a.size);
      return a.forEach(function(w, E) {
        h[++g] = [E, w];
      }), h;
    }
    function xu(a, g) {
      return function(h) {
        return a(g(h));
      };
    }
    function kn(a, g) {
      for (var h = -1, w = a.length, E = 0, W = []; ++h < w; ) {
        var Z = a[h];
        (Z === g || Z === se) && (a[h] = se, W[E++] = h);
      }
      return W;
    }
    function xe(a) {
      var g = -1, h = Array(a.size);
      return a.forEach(function(w) {
        h[++g] = w;
      }), h;
    }
    function Xo(a) {
      var g = -1, h = Array(a.size);
      return a.forEach(function(w) {
        h[++g] = [w, w];
      }), h;
    }
    function Jo(a, g, h) {
      for (var w = h - 1, E = a.length; ++w < E; )
        if (a[w] === g)
          return w;
      return -1;
    }
    function Qo(a, g, h) {
      for (var w = h + 1; w--; )
        if (a[w] === g)
          return w;
      return w;
    }
    function yt(a) {
      return Rt(a) ? ko(a) : Fo(a);
    }
    function Tn(a) {
      return Rt(a) ? jo(a) : Mo(a);
    }
    function Au(a) {
      for (var g = a.length; g-- && Gs.test(a.charAt(g)); )
        ;
      return g;
    }
    var Vo = Lr(To);
    function ko(a) {
      for (var g = Sr.lastIndex = 0; Sr.test(a); )
        ++g;
      return g;
    }
    function jo(a) {
      return a.match(Sr) || [];
    }
    function nl(a) {
      return a.match(Ao) || [];
    }
    var tl = function a(g) {
      g = g == null ? V : It.defaults(V.Object(), g, It.pick(V, Eo));
      var h = g.Array, w = g.Date, E = g.Error, W = g.Function, Z = g.Math, F = g.Object, Pr = g.RegExp, el = g.String, xn = g.TypeError, Ae = h.prototype, rl = W.prototype, Tt = F.prototype, Se = g["__core-js_shared__"], me = rl.toString, B = Tt.hasOwnProperty, il = 0, Su = function() {
        var n = /[^.]+$/.exec(Se && Se.keys && Se.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), Ee = Tt.toString, ul = me.call(F), fl = V._, sl = Pr(
        "^" + me.call(B).replace(pr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Re = iu ? g.Buffer : s, jn = g.Symbol, ye = g.Uint8Array, mu = Re ? Re.allocUnsafe : s, Ie = xu(F.getPrototypeOf, F), Eu = F.create, Ru = Tt.propertyIsEnumerable, Te = Ae.splice, yu = jn ? jn.isConcatSpreadable : s, zt = jn ? jn.iterator : s, ot = jn ? jn.toStringTag : s, Le = function() {
        try {
          var n = gt(F, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), ol = g.clearTimeout !== V.clearTimeout && g.clearTimeout, ll = w && w.now !== V.Date.now && w.now, al = g.setTimeout !== V.setTimeout && g.setTimeout, Ce = Z.ceil, Oe = Z.floor, Br = F.getOwnPropertySymbols, cl = Re ? Re.isBuffer : s, Iu = g.isFinite, hl = Ae.join, gl = xu(F.keys, F), Y = Z.max, j = Z.min, _l = w.now, pl = g.parseInt, Tu = Z.random, dl = Ae.reverse, Fr = gt(g, "DataView"), Zt = gt(g, "Map"), Mr = gt(g, "Promise"), Lt = gt(g, "Set"), Yt = gt(g, "WeakMap"), Xt = gt(F, "create"), be = Yt && new Yt(), Ct = {}, vl = _t(Fr), wl = _t(Zt), xl = _t(Mr), Al = _t(Lt), Sl = _t(Yt), We = jn ? jn.prototype : s, Jt = We ? We.valueOf : s, Lu = We ? We.toString : s;
      function u(n) {
        if (K(n) && !R(n) && !(n instanceof C)) {
          if (n instanceof An)
            return n;
          if (B.call(n, "__wrapped__"))
            return Of(n);
        }
        return new An(n);
      }
      var Ot = /* @__PURE__ */ function() {
        function n() {
        }
        return function(t) {
          if (!q(t))
            return {};
          if (Eu)
            return Eu(t);
          n.prototype = t;
          var e = new n();
          return n.prototype = s, e;
        };
      }();
      function Pe() {
      }
      function An(n, t) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = s;
      }
      u.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Bs,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Fs,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Ui,
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
      }, u.prototype = Pe.prototype, u.prototype.constructor = u, An.prototype = Ot(Pe.prototype), An.prototype.constructor = An;
      function C(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Pn, this.__views__ = [];
      }
      function ml() {
        var n = new C(this.__wrapped__);
        return n.__actions__ = fn(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = fn(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = fn(this.__views__), n;
      }
      function El() {
        if (this.__filtered__) {
          var n = new C(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function Rl() {
        var n = this.__wrapped__.value(), t = this.__dir__, e = R(n), r = t < 0, i = e ? n.length : 0, f = Ma(0, i, this.__views__), o = f.start, l = f.end, c = l - o, _ = r ? l : o - 1, p = this.__iteratees__, d = p.length, v = 0, x = j(c, this.__takeCount__);
        if (!e || !r && i == c && x == c)
          return ku(n, this.__actions__);
        var S = [];
        n:
          for (; c-- && v < x; ) {
            _ += t;
            for (var I = -1, m = n[_]; ++I < d; ) {
              var L = p[I], O = L.iteratee, _n = L.type, un = O(m);
              if (_n == vs)
                m = un;
              else if (!un) {
                if (_n == Wi)
                  continue n;
                break n;
              }
            }
            S[v++] = m;
          }
        return S;
      }
      C.prototype = Ot(Pe.prototype), C.prototype.constructor = C;
      function lt(n) {
        var t = -1, e = n == null ? 0 : n.length;
        for (this.clear(); ++t < e; ) {
          var r = n[t];
          this.set(r[0], r[1]);
        }
      }
      function yl() {
        this.__data__ = Xt ? Xt(null) : {}, this.size = 0;
      }
      function Il(n) {
        var t = this.has(n) && delete this.__data__[n];
        return this.size -= t ? 1 : 0, t;
      }
      function Tl(n) {
        var t = this.__data__;
        if (Xt) {
          var e = t[n];
          return e === ir ? s : e;
        }
        return B.call(t, n) ? t[n] : s;
      }
      function Ll(n) {
        var t = this.__data__;
        return Xt ? t[n] !== s : B.call(t, n);
      }
      function Cl(n, t) {
        var e = this.__data__;
        return this.size += this.has(n) ? 0 : 1, e[n] = Xt && t === s ? ir : t, this;
      }
      lt.prototype.clear = yl, lt.prototype.delete = Il, lt.prototype.get = Tl, lt.prototype.has = Ll, lt.prototype.set = Cl;
      function Nn(n) {
        var t = -1, e = n == null ? 0 : n.length;
        for (this.clear(); ++t < e; ) {
          var r = n[t];
          this.set(r[0], r[1]);
        }
      }
      function Ol() {
        this.__data__ = [], this.size = 0;
      }
      function bl(n) {
        var t = this.__data__, e = Be(t, n);
        if (e < 0)
          return !1;
        var r = t.length - 1;
        return e == r ? t.pop() : Te.call(t, e, 1), --this.size, !0;
      }
      function Wl(n) {
        var t = this.__data__, e = Be(t, n);
        return e < 0 ? s : t[e][1];
      }
      function Pl(n) {
        return Be(this.__data__, n) > -1;
      }
      function Bl(n, t) {
        var e = this.__data__, r = Be(e, n);
        return r < 0 ? (++this.size, e.push([n, t])) : e[r][1] = t, this;
      }
      Nn.prototype.clear = Ol, Nn.prototype.delete = bl, Nn.prototype.get = Wl, Nn.prototype.has = Pl, Nn.prototype.set = Bl;
      function Gn(n) {
        var t = -1, e = n == null ? 0 : n.length;
        for (this.clear(); ++t < e; ) {
          var r = n[t];
          this.set(r[0], r[1]);
        }
      }
      function Fl() {
        this.size = 0, this.__data__ = {
          hash: new lt(),
          map: new (Zt || Nn)(),
          string: new lt()
        };
      }
      function Ml(n) {
        var t = Ze(this, n).delete(n);
        return this.size -= t ? 1 : 0, t;
      }
      function Ul(n) {
        return Ze(this, n).get(n);
      }
      function Dl(n) {
        return Ze(this, n).has(n);
      }
      function Nl(n, t) {
        var e = Ze(this, n), r = e.size;
        return e.set(n, t), this.size += e.size == r ? 0 : 1, this;
      }
      Gn.prototype.clear = Fl, Gn.prototype.delete = Ml, Gn.prototype.get = Ul, Gn.prototype.has = Dl, Gn.prototype.set = Nl;
      function at(n) {
        var t = -1, e = n == null ? 0 : n.length;
        for (this.__data__ = new Gn(); ++t < e; )
          this.add(n[t]);
      }
      function Gl(n) {
        return this.__data__.set(n, ir), this;
      }
      function Hl(n) {
        return this.__data__.has(n);
      }
      at.prototype.add = at.prototype.push = Gl, at.prototype.has = Hl;
      function Ln(n) {
        var t = this.__data__ = new Nn(n);
        this.size = t.size;
      }
      function ql() {
        this.__data__ = new Nn(), this.size = 0;
      }
      function Kl(n) {
        var t = this.__data__, e = t.delete(n);
        return this.size = t.size, e;
      }
      function $l(n) {
        return this.__data__.get(n);
      }
      function zl(n) {
        return this.__data__.has(n);
      }
      function Zl(n, t) {
        var e = this.__data__;
        if (e instanceof Nn) {
          var r = e.__data__;
          if (!Zt || r.length < H - 1)
            return r.push([n, t]), this.size = ++e.size, this;
          e = this.__data__ = new Gn(r);
        }
        return e.set(n, t), this.size = e.size, this;
      }
      Ln.prototype.clear = ql, Ln.prototype.delete = Kl, Ln.prototype.get = $l, Ln.prototype.has = zl, Ln.prototype.set = Zl;
      function Cu(n, t) {
        var e = R(n), r = !e && pt(n), i = !e && !r && it(n), f = !e && !r && !i && Bt(n), o = e || r || i || f, l = o ? Or(n.length, el) : [], c = l.length;
        for (var _ in n)
          (t || B.call(n, _)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
          (_ == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          i && (_ == "offset" || _ == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          f && (_ == "buffer" || _ == "byteLength" || _ == "byteOffset") || // Skip index properties.
          $n(_, c))) && l.push(_);
        return l;
      }
      function Ou(n) {
        var t = n.length;
        return t ? n[Yr(0, t - 1)] : s;
      }
      function Yl(n, t) {
        return Ye(fn(n), ct(t, 0, n.length));
      }
      function Xl(n) {
        return Ye(fn(n));
      }
      function Ur(n, t, e) {
        (e !== s && !Cn(n[t], e) || e === s && !(t in n)) && Hn(n, t, e);
      }
      function Qt(n, t, e) {
        var r = n[t];
        (!(B.call(n, t) && Cn(r, e)) || e === s && !(t in n)) && Hn(n, t, e);
      }
      function Be(n, t) {
        for (var e = n.length; e--; )
          if (Cn(n[e][0], t))
            return e;
        return -1;
      }
      function Jl(n, t, e, r) {
        return nt(n, function(i, f, o) {
          t(r, i, e(i), o);
        }), r;
      }
      function bu(n, t) {
        return n && Fn(t, J(t), n);
      }
      function Ql(n, t) {
        return n && Fn(t, on(t), n);
      }
      function Hn(n, t, e) {
        t == "__proto__" && Le ? Le(n, t, {
          configurable: !0,
          enumerable: !0,
          value: e,
          writable: !0
        }) : n[t] = e;
      }
      function Dr(n, t) {
        for (var e = -1, r = t.length, i = h(r), f = n == null; ++e < r; )
          i[e] = f ? s : wi(n, t[e]);
        return i;
      }
      function ct(n, t, e) {
        return n === n && (e !== s && (n = n <= e ? n : e), t !== s && (n = n >= t ? n : t)), n;
      }
      function Sn(n, t, e, r, i, f) {
        var o, l = t & Xn, c = t & Oi, _ = t & dt;
        if (e && (o = i ? e(n, r, i, f) : e(n)), o !== s)
          return o;
        if (!q(n))
          return n;
        var p = R(n);
        if (p) {
          if (o = Da(n), !l)
            return fn(n, o);
        } else {
          var d = nn(n), v = d == he || d == Pi;
          if (it(n))
            return tf(n, l);
          if (d == Dn || d == At || v && !i) {
            if (o = c || v ? {} : Sf(n), !l)
              return c ? Ta(n, Ql(o, n)) : Ia(n, bu(o, n));
          } else {
            if (!M[d])
              return i ? n : {};
            o = Na(n, d, l);
          }
        }
        f || (f = new Ln());
        var x = f.get(n);
        if (x)
          return x;
        f.set(n, o), Qf(n) ? n.forEach(function(m) {
          o.add(Sn(m, t, e, m, n, f));
        }) : Xf(n) && n.forEach(function(m, L) {
          o.set(L, Sn(m, t, e, L, n, f));
        });
        var S = _ ? c ? ii : ri : c ? on : J, I = p ? s : S(n);
        return wn(I || n, function(m, L) {
          I && (L = m, m = n[L]), Qt(o, L, Sn(m, t, e, L, n, f));
        }), o;
      }
      function Vl(n) {
        var t = J(n);
        return function(e) {
          return Wu(e, n, t);
        };
      }
      function Wu(n, t, e) {
        var r = e.length;
        if (n == null)
          return !r;
        for (n = F(n); r--; ) {
          var i = e[r], f = t[i], o = n[i];
          if (o === s && !(i in n) || !f(o))
            return !1;
        }
        return !0;
      }
      function Pu(n, t, e) {
        if (typeof n != "function")
          throw new xn(X);
        return re(function() {
          n.apply(s, e);
        }, t);
      }
      function Vt(n, t, e, r) {
        var i = -1, f = ve, o = !0, l = n.length, c = [], _ = t.length;
        if (!l)
          return c;
        e && (t = G(t, cn(e))), r ? (f = Rr, o = !1) : t.length >= H && (f = $t, o = !1, t = new at(t));
        n:
          for (; ++i < l; ) {
            var p = n[i], d = e == null ? p : e(p);
            if (p = r || p !== 0 ? p : 0, o && d === d) {
              for (var v = _; v--; )
                if (t[v] === d)
                  continue n;
              c.push(p);
            } else f(t, d, r) || c.push(p);
          }
        return c;
      }
      var nt = sf(Bn), Bu = sf(Gr, !0);
      function kl(n, t) {
        var e = !0;
        return nt(n, function(r, i, f) {
          return e = !!t(r, i, f), e;
        }), e;
      }
      function Fe(n, t, e) {
        for (var r = -1, i = n.length; ++r < i; ) {
          var f = n[r], o = t(f);
          if (o != null && (l === s ? o === o && !gn(o) : e(o, l)))
            var l = o, c = f;
        }
        return c;
      }
      function jl(n, t, e, r) {
        var i = n.length;
        for (e = y(e), e < 0 && (e = -e > i ? 0 : i + e), r = r === s || r > i ? i : y(r), r < 0 && (r += i), r = e > r ? 0 : kf(r); e < r; )
          n[e++] = t;
        return n;
      }
      function Fu(n, t) {
        var e = [];
        return nt(n, function(r, i, f) {
          t(r, i, f) && e.push(r);
        }), e;
      }
      function k(n, t, e, r, i) {
        var f = -1, o = n.length;
        for (e || (e = Ha), i || (i = []); ++f < o; ) {
          var l = n[f];
          t > 0 && e(l) ? t > 1 ? k(l, t - 1, e, r, i) : Vn(i, l) : r || (i[i.length] = l);
        }
        return i;
      }
      var Nr = of(), Mu = of(!0);
      function Bn(n, t) {
        return n && Nr(n, t, J);
      }
      function Gr(n, t) {
        return n && Mu(n, t, J);
      }
      function Me(n, t) {
        return Qn(t, function(e) {
          return zn(n[e]);
        });
      }
      function ht(n, t) {
        t = et(t, n);
        for (var e = 0, r = t.length; n != null && e < r; )
          n = n[Mn(t[e++])];
        return e && e == r ? n : s;
      }
      function Uu(n, t, e) {
        var r = t(n);
        return R(n) ? r : Vn(r, e(n));
      }
      function en(n) {
        return n == null ? n === s ? Ts : ys : ot && ot in F(n) ? Fa(n) : Xa(n);
      }
      function Hr(n, t) {
        return n > t;
      }
      function na(n, t) {
        return n != null && B.call(n, t);
      }
      function ta(n, t) {
        return n != null && t in F(n);
      }
      function ea(n, t, e) {
        return n >= j(t, e) && n < Y(t, e);
      }
      function qr(n, t, e) {
        for (var r = e ? Rr : ve, i = n[0].length, f = n.length, o = f, l = h(f), c = 1 / 0, _ = []; o--; ) {
          var p = n[o];
          o && t && (p = G(p, cn(t))), c = j(p.length, c), l[o] = !e && (t || i >= 120 && p.length >= 120) ? new at(o && p) : s;
        }
        p = n[0];
        var d = -1, v = l[0];
        n:
          for (; ++d < i && _.length < c; ) {
            var x = p[d], S = t ? t(x) : x;
            if (x = e || x !== 0 ? x : 0, !(v ? $t(v, S) : r(_, S, e))) {
              for (o = f; --o; ) {
                var I = l[o];
                if (!(I ? $t(I, S) : r(n[o], S, e)))
                  continue n;
              }
              v && v.push(S), _.push(x);
            }
          }
        return _;
      }
      function ra(n, t, e, r) {
        return Bn(n, function(i, f, o) {
          t(r, e(i), f, o);
        }), r;
      }
      function kt(n, t, e) {
        t = et(t, n), n = yf(n, t);
        var r = n == null ? n : n[Mn(En(t))];
        return r == null ? s : an(r, n, e);
      }
      function Du(n) {
        return K(n) && en(n) == At;
      }
      function ia(n) {
        return K(n) && en(n) == Kt;
      }
      function ua(n) {
        return K(n) && en(n) == Dt;
      }
      function jt(n, t, e, r, i) {
        return n === t ? !0 : n == null || t == null || !K(n) && !K(t) ? n !== n && t !== t : fa(n, t, e, r, jt, i);
      }
      function fa(n, t, e, r, i, f) {
        var o = R(n), l = R(t), c = o ? ae : nn(n), _ = l ? ae : nn(t);
        c = c == At ? Dn : c, _ = _ == At ? Dn : _;
        var p = c == Dn, d = _ == Dn, v = c == _;
        if (v && it(n)) {
          if (!it(t))
            return !1;
          o = !0, p = !1;
        }
        if (v && !p)
          return f || (f = new Ln()), o || Bt(n) ? wf(n, t, e, r, i, f) : Pa(n, t, c, e, r, i, f);
        if (!(e & vt)) {
          var x = p && B.call(n, "__wrapped__"), S = d && B.call(t, "__wrapped__");
          if (x || S) {
            var I = x ? n.value() : n, m = S ? t.value() : t;
            return f || (f = new Ln()), i(I, m, e, r, f);
          }
        }
        return v ? (f || (f = new Ln()), Ba(n, t, e, r, i, f)) : !1;
      }
      function sa(n) {
        return K(n) && nn(n) == yn;
      }
      function Kr(n, t, e, r) {
        var i = e.length, f = i, o = !r;
        if (n == null)
          return !f;
        for (n = F(n); i--; ) {
          var l = e[i];
          if (o && l[2] ? l[1] !== n[l[0]] : !(l[0] in n))
            return !1;
        }
        for (; ++i < f; ) {
          l = e[i];
          var c = l[0], _ = n[c], p = l[1];
          if (o && l[2]) {
            if (_ === s && !(c in n))
              return !1;
          } else {
            var d = new Ln();
            if (r)
              var v = r(_, p, c, n, t, d);
            if (!(v === s ? jt(p, _, vt | oe, r, d) : v))
              return !1;
          }
        }
        return !0;
      }
      function Nu(n) {
        if (!q(n) || Ka(n))
          return !1;
        var t = zn(n) ? sl : Qs;
        return t.test(_t(n));
      }
      function oa(n) {
        return K(n) && en(n) == Gt;
      }
      function la(n) {
        return K(n) && nn(n) == In;
      }
      function aa(n) {
        return K(n) && je(n.length) && !!N[en(n)];
      }
      function Gu(n) {
        return typeof n == "function" ? n : n == null ? ln : typeof n == "object" ? R(n) ? Ku(n[0], n[1]) : qu(n) : ls(n);
      }
      function $r(n) {
        if (!ee(n))
          return gl(n);
        var t = [];
        for (var e in F(n))
          B.call(n, e) && e != "constructor" && t.push(e);
        return t;
      }
      function ca(n) {
        if (!q(n))
          return Ya(n);
        var t = ee(n), e = [];
        for (var r in n)
          r == "constructor" && (t || !B.call(n, r)) || e.push(r);
        return e;
      }
      function zr(n, t) {
        return n < t;
      }
      function Hu(n, t) {
        var e = -1, r = sn(n) ? h(n.length) : [];
        return nt(n, function(i, f, o) {
          r[++e] = t(i, f, o);
        }), r;
      }
      function qu(n) {
        var t = fi(n);
        return t.length == 1 && t[0][2] ? Ef(t[0][0], t[0][1]) : function(e) {
          return e === n || Kr(e, n, t);
        };
      }
      function Ku(n, t) {
        return oi(n) && mf(t) ? Ef(Mn(n), t) : function(e) {
          var r = wi(e, n);
          return r === s && r === t ? xi(e, n) : jt(t, r, vt | oe);
        };
      }
      function Ue(n, t, e, r, i) {
        n !== t && Nr(t, function(f, o) {
          if (i || (i = new Ln()), q(f))
            ha(n, t, o, e, Ue, r, i);
          else {
            var l = r ? r(ai(n, o), f, o + "", n, t, i) : s;
            l === s && (l = f), Ur(n, o, l);
          }
        }, on);
      }
      function ha(n, t, e, r, i, f, o) {
        var l = ai(n, e), c = ai(t, e), _ = o.get(c);
        if (_) {
          Ur(n, e, _);
          return;
        }
        var p = f ? f(l, c, e + "", n, t, o) : s, d = p === s;
        if (d) {
          var v = R(c), x = !v && it(c), S = !v && !x && Bt(c);
          p = c, v || x || S ? R(l) ? p = l : $(l) ? p = fn(l) : x ? (d = !1, p = tf(c, !0)) : S ? (d = !1, p = ef(c, !0)) : p = [] : ie(c) || pt(c) ? (p = l, pt(l) ? p = jf(l) : (!q(l) || zn(l)) && (p = Sf(c))) : d = !1;
        }
        d && (o.set(c, p), i(p, c, r, f, o), o.delete(c)), Ur(n, e, p);
      }
      function $u(n, t) {
        var e = n.length;
        if (e)
          return t += t < 0 ? e : 0, $n(t, e) ? n[t] : s;
      }
      function zu(n, t, e) {
        t.length ? t = G(t, function(f) {
          return R(f) ? function(o) {
            return ht(o, f.length === 1 ? f[0] : f);
          } : f;
        }) : t = [ln];
        var r = -1;
        t = G(t, cn(A()));
        var i = Hu(n, function(f, o, l) {
          var c = G(t, function(_) {
            return _(f);
          });
          return { criteria: c, index: ++r, value: f };
        });
        return No(i, function(f, o) {
          return ya(f, o, e);
        });
      }
      function ga(n, t) {
        return Zu(n, t, function(e, r) {
          return xi(n, r);
        });
      }
      function Zu(n, t, e) {
        for (var r = -1, i = t.length, f = {}; ++r < i; ) {
          var o = t[r], l = ht(n, o);
          e(l, o) && ne(f, et(o, n), l);
        }
        return f;
      }
      function _a(n) {
        return function(t) {
          return ht(t, n);
        };
      }
      function Zr(n, t, e, r) {
        var i = r ? Do : Et, f = -1, o = t.length, l = n;
        for (n === t && (t = fn(t)), e && (l = G(n, cn(e))); ++f < o; )
          for (var c = 0, _ = t[f], p = e ? e(_) : _; (c = i(l, p, c, r)) > -1; )
            l !== n && Te.call(l, c, 1), Te.call(n, c, 1);
        return n;
      }
      function Yu(n, t) {
        for (var e = n ? t.length : 0, r = e - 1; e--; ) {
          var i = t[e];
          if (e == r || i !== f) {
            var f = i;
            $n(i) ? Te.call(n, i, 1) : Qr(n, i);
          }
        }
        return n;
      }
      function Yr(n, t) {
        return n + Oe(Tu() * (t - n + 1));
      }
      function pa(n, t, e, r) {
        for (var i = -1, f = Y(Ce((t - n) / (e || 1)), 0), o = h(f); f--; )
          o[r ? f : ++i] = n, n += e;
        return o;
      }
      function Xr(n, t) {
        var e = "";
        if (!n || t < 1 || t > Jn)
          return e;
        do
          t % 2 && (e += n), t = Oe(t / 2), t && (n += n);
        while (t);
        return e;
      }
      function T(n, t) {
        return ci(Rf(n, t, ln), n + "");
      }
      function da(n) {
        return Ou(Ft(n));
      }
      function va(n, t) {
        var e = Ft(n);
        return Ye(e, ct(t, 0, e.length));
      }
      function ne(n, t, e, r) {
        if (!q(n))
          return n;
        t = et(t, n);
        for (var i = -1, f = t.length, o = f - 1, l = n; l != null && ++i < f; ) {
          var c = Mn(t[i]), _ = e;
          if (c === "__proto__" || c === "constructor" || c === "prototype")
            return n;
          if (i != o) {
            var p = l[c];
            _ = r ? r(p, c, l) : s, _ === s && (_ = q(p) ? p : $n(t[i + 1]) ? [] : {});
          }
          Qt(l, c, _), l = l[c];
        }
        return n;
      }
      var Xu = be ? function(n, t) {
        return be.set(n, t), n;
      } : ln, wa = Le ? function(n, t) {
        return Le(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Si(t),
          writable: !0
        });
      } : ln;
      function xa(n) {
        return Ye(Ft(n));
      }
      function mn(n, t, e) {
        var r = -1, i = n.length;
        t < 0 && (t = -t > i ? 0 : i + t), e = e > i ? i : e, e < 0 && (e += i), i = t > e ? 0 : e - t >>> 0, t >>>= 0;
        for (var f = h(i); ++r < i; )
          f[r] = n[r + t];
        return f;
      }
      function Aa(n, t) {
        var e;
        return nt(n, function(r, i, f) {
          return e = t(r, i, f), !e;
        }), !!e;
      }
      function De(n, t, e) {
        var r = 0, i = n == null ? r : n.length;
        if (typeof t == "number" && t === t && i <= Ss) {
          for (; r < i; ) {
            var f = r + i >>> 1, o = n[f];
            o !== null && !gn(o) && (e ? o <= t : o < t) ? r = f + 1 : i = f;
          }
          return i;
        }
        return Jr(n, t, ln, e);
      }
      function Jr(n, t, e, r) {
        var i = 0, f = n == null ? 0 : n.length;
        if (f === 0)
          return 0;
        t = e(t);
        for (var o = t !== t, l = t === null, c = gn(t), _ = t === s; i < f; ) {
          var p = Oe((i + f) / 2), d = e(n[p]), v = d !== s, x = d === null, S = d === d, I = gn(d);
          if (o)
            var m = r || S;
          else _ ? m = S && (r || v) : l ? m = S && v && (r || !x) : c ? m = S && v && !x && (r || !I) : x || I ? m = !1 : m = r ? d <= t : d < t;
          m ? i = p + 1 : f = p;
        }
        return j(f, As);
      }
      function Ju(n, t) {
        for (var e = -1, r = n.length, i = 0, f = []; ++e < r; ) {
          var o = n[e], l = t ? t(o) : o;
          if (!e || !Cn(l, c)) {
            var c = l;
            f[i++] = o === 0 ? 0 : o;
          }
        }
        return f;
      }
      function Qu(n) {
        return typeof n == "number" ? n : gn(n) ? le : +n;
      }
      function hn(n) {
        if (typeof n == "string")
          return n;
        if (R(n))
          return G(n, hn) + "";
        if (gn(n))
          return Lu ? Lu.call(n) : "";
        var t = n + "";
        return t == "0" && 1 / n == -ft ? "-0" : t;
      }
      function tt(n, t, e) {
        var r = -1, i = ve, f = n.length, o = !0, l = [], c = l;
        if (e)
          o = !1, i = Rr;
        else if (f >= H) {
          var _ = t ? null : ba(n);
          if (_)
            return xe(_);
          o = !1, i = $t, c = new at();
        } else
          c = t ? [] : l;
        n:
          for (; ++r < f; ) {
            var p = n[r], d = t ? t(p) : p;
            if (p = e || p !== 0 ? p : 0, o && d === d) {
              for (var v = c.length; v--; )
                if (c[v] === d)
                  continue n;
              t && c.push(d), l.push(p);
            } else i(c, d, e) || (c !== l && c.push(d), l.push(p));
          }
        return l;
      }
      function Qr(n, t) {
        return t = et(t, n), n = yf(n, t), n == null || delete n[Mn(En(t))];
      }
      function Vu(n, t, e, r) {
        return ne(n, t, e(ht(n, t)), r);
      }
      function Ne(n, t, e, r) {
        for (var i = n.length, f = r ? i : -1; (r ? f-- : ++f < i) && t(n[f], f, n); )
          ;
        return e ? mn(n, r ? 0 : f, r ? f + 1 : i) : mn(n, r ? f + 1 : 0, r ? i : f);
      }
      function ku(n, t) {
        var e = n;
        return e instanceof C && (e = e.value()), yr(t, function(r, i) {
          return i.func.apply(i.thisArg, Vn([r], i.args));
        }, e);
      }
      function Vr(n, t, e) {
        var r = n.length;
        if (r < 2)
          return r ? tt(n[0]) : [];
        for (var i = -1, f = h(r); ++i < r; )
          for (var o = n[i], l = -1; ++l < r; )
            l != i && (f[i] = Vt(f[i] || o, n[l], t, e));
        return tt(k(f, 1), t, e);
      }
      function ju(n, t, e) {
        for (var r = -1, i = n.length, f = t.length, o = {}; ++r < i; ) {
          var l = r < f ? t[r] : s;
          e(o, n[r], l);
        }
        return o;
      }
      function kr(n) {
        return $(n) ? n : [];
      }
      function jr(n) {
        return typeof n == "function" ? n : ln;
      }
      function et(n, t) {
        return R(n) ? n : oi(n, t) ? [n] : Cf(P(n));
      }
      var Sa = T;
      function rt(n, t, e) {
        var r = n.length;
        return e = e === s ? r : e, !t && e >= r ? n : mn(n, t, e);
      }
      var nf = ol || function(n) {
        return V.clearTimeout(n);
      };
      function tf(n, t) {
        if (t)
          return n.slice();
        var e = n.length, r = mu ? mu(e) : new n.constructor(e);
        return n.copy(r), r;
      }
      function ni(n) {
        var t = new n.constructor(n.byteLength);
        return new ye(t).set(new ye(n)), t;
      }
      function ma(n, t) {
        var e = t ? ni(n.buffer) : n.buffer;
        return new n.constructor(e, n.byteOffset, n.byteLength);
      }
      function Ea(n) {
        var t = new n.constructor(n.source, Di.exec(n));
        return t.lastIndex = n.lastIndex, t;
      }
      function Ra(n) {
        return Jt ? F(Jt.call(n)) : {};
      }
      function ef(n, t) {
        var e = t ? ni(n.buffer) : n.buffer;
        return new n.constructor(e, n.byteOffset, n.length);
      }
      function rf(n, t) {
        if (n !== t) {
          var e = n !== s, r = n === null, i = n === n, f = gn(n), o = t !== s, l = t === null, c = t === t, _ = gn(t);
          if (!l && !_ && !f && n > t || f && o && c && !l && !_ || r && o && c || !e && c || !i)
            return 1;
          if (!r && !f && !_ && n < t || _ && e && i && !r && !f || l && e && i || !o && i || !c)
            return -1;
        }
        return 0;
      }
      function ya(n, t, e) {
        for (var r = -1, i = n.criteria, f = t.criteria, o = i.length, l = e.length; ++r < o; ) {
          var c = rf(i[r], f[r]);
          if (c) {
            if (r >= l)
              return c;
            var _ = e[r];
            return c * (_ == "desc" ? -1 : 1);
          }
        }
        return n.index - t.index;
      }
      function uf(n, t, e, r) {
        for (var i = -1, f = n.length, o = e.length, l = -1, c = t.length, _ = Y(f - o, 0), p = h(c + _), d = !r; ++l < c; )
          p[l] = t[l];
        for (; ++i < o; )
          (d || i < f) && (p[e[i]] = n[i]);
        for (; _--; )
          p[l++] = n[i++];
        return p;
      }
      function ff(n, t, e, r) {
        for (var i = -1, f = n.length, o = -1, l = e.length, c = -1, _ = t.length, p = Y(f - l, 0), d = h(p + _), v = !r; ++i < p; )
          d[i] = n[i];
        for (var x = i; ++c < _; )
          d[x + c] = t[c];
        for (; ++o < l; )
          (v || i < f) && (d[x + e[o]] = n[i++]);
        return d;
      }
      function fn(n, t) {
        var e = -1, r = n.length;
        for (t || (t = h(r)); ++e < r; )
          t[e] = n[e];
        return t;
      }
      function Fn(n, t, e, r) {
        var i = !e;
        e || (e = {});
        for (var f = -1, o = t.length; ++f < o; ) {
          var l = t[f], c = r ? r(e[l], n[l], l, e, n) : s;
          c === s && (c = n[l]), i ? Hn(e, l, c) : Qt(e, l, c);
        }
        return e;
      }
      function Ia(n, t) {
        return Fn(n, si(n), t);
      }
      function Ta(n, t) {
        return Fn(n, xf(n), t);
      }
      function Ge(n, t) {
        return function(e, r) {
          var i = R(e) ? Wo : Jl, f = t ? t() : {};
          return i(e, n, A(r, 2), f);
        };
      }
      function bt(n) {
        return T(function(t, e) {
          var r = -1, i = e.length, f = i > 1 ? e[i - 1] : s, o = i > 2 ? e[2] : s;
          for (f = n.length > 3 && typeof f == "function" ? (i--, f) : s, o && rn(e[0], e[1], o) && (f = i < 3 ? s : f, i = 1), t = F(t); ++r < i; ) {
            var l = e[r];
            l && n(t, l, r, f);
          }
          return t;
        });
      }
      function sf(n, t) {
        return function(e, r) {
          if (e == null)
            return e;
          if (!sn(e))
            return n(e, r);
          for (var i = e.length, f = t ? i : -1, o = F(e); (t ? f-- : ++f < i) && r(o[f], f, o) !== !1; )
            ;
          return e;
        };
      }
      function of(n) {
        return function(t, e, r) {
          for (var i = -1, f = F(t), o = r(t), l = o.length; l--; ) {
            var c = o[n ? l : ++i];
            if (e(f[c], c, f) === !1)
              break;
          }
          return t;
        };
      }
      function La(n, t, e) {
        var r = t & dn, i = te(n);
        function f() {
          var o = this && this !== V && this instanceof f ? i : n;
          return o.apply(r ? e : this, arguments);
        }
        return f;
      }
      function lf(n) {
        return function(t) {
          t = P(t);
          var e = Rt(t) ? Tn(t) : s, r = e ? e[0] : t.charAt(0), i = e ? rt(e, 1).join("") : t.slice(1);
          return r[n]() + i;
        };
      }
      function Wt(n) {
        return function(t) {
          return yr(ss(fs(t).replace(wo, "")), n, "");
        };
      }
      function te(n) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new n();
            case 1:
              return new n(t[0]);
            case 2:
              return new n(t[0], t[1]);
            case 3:
              return new n(t[0], t[1], t[2]);
            case 4:
              return new n(t[0], t[1], t[2], t[3]);
            case 5:
              return new n(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var e = Ot(n.prototype), r = n.apply(e, t);
          return q(r) ? r : e;
        };
      }
      function Ca(n, t, e) {
        var r = te(n);
        function i() {
          for (var f = arguments.length, o = h(f), l = f, c = Pt(i); l--; )
            o[l] = arguments[l];
          var _ = f < 3 && o[0] !== c && o[f - 1] !== c ? [] : kn(o, c);
          if (f -= _.length, f < e)
            return _f(
              n,
              t,
              He,
              i.placeholder,
              s,
              o,
              _,
              s,
              s,
              e - f
            );
          var p = this && this !== V && this instanceof i ? r : n;
          return an(p, this, o);
        }
        return i;
      }
      function af(n) {
        return function(t, e, r) {
          var i = F(t);
          if (!sn(t)) {
            var f = A(e, 3);
            t = J(t), e = function(l) {
              return f(i[l], l, i);
            };
          }
          var o = n(t, e, r);
          return o > -1 ? i[f ? t[o] : o] : s;
        };
      }
      function cf(n) {
        return Kn(function(t) {
          var e = t.length, r = e, i = An.prototype.thru;
          for (n && t.reverse(); r--; ) {
            var f = t[r];
            if (typeof f != "function")
              throw new xn(X);
            if (i && !o && ze(f) == "wrapper")
              var o = new An([], !0);
          }
          for (r = o ? r : e; ++r < e; ) {
            f = t[r];
            var l = ze(f), c = l == "wrapper" ? ui(f) : s;
            c && li(c[0]) && c[1] == (Un | bn | Wn | Mt) && !c[4].length && c[9] == 1 ? o = o[ze(c[0])].apply(o, c[3]) : o = f.length == 1 && li(f) ? o[l]() : o.thru(f);
          }
          return function() {
            var _ = arguments, p = _[0];
            if (o && _.length == 1 && R(p))
              return o.plant(p).value();
            for (var d = 0, v = e ? t[d].apply(this, _) : p; ++d < e; )
              v = t[d].call(this, v);
            return v;
          };
        });
      }
      function He(n, t, e, r, i, f, o, l, c, _) {
        var p = t & Un, d = t & dn, v = t & ut, x = t & (bn | wt), S = t & ur, I = v ? s : te(n);
        function m() {
          for (var L = arguments.length, O = h(L), _n = L; _n--; )
            O[_n] = arguments[_n];
          if (x)
            var un = Pt(m), pn = Ho(O, un);
          if (r && (O = uf(O, r, i, x)), f && (O = ff(O, f, o, x)), L -= pn, x && L < _) {
            var z = kn(O, un);
            return _f(
              n,
              t,
              He,
              m.placeholder,
              e,
              O,
              z,
              l,
              c,
              _ - L
            );
          }
          var On = d ? e : this, Yn = v ? On[n] : n;
          return L = O.length, l ? O = Ja(O, l) : S && L > 1 && O.reverse(), p && c < L && (O.length = c), this && this !== V && this instanceof m && (Yn = I || te(Yn)), Yn.apply(On, O);
        }
        return m;
      }
      function hf(n, t) {
        return function(e, r) {
          return ra(e, n, t(r), {});
        };
      }
      function qe(n, t) {
        return function(e, r) {
          var i;
          if (e === s && r === s)
            return t;
          if (e !== s && (i = e), r !== s) {
            if (i === s)
              return r;
            typeof e == "string" || typeof r == "string" ? (e = hn(e), r = hn(r)) : (e = Qu(e), r = Qu(r)), i = n(e, r);
          }
          return i;
        };
      }
      function ti(n) {
        return Kn(function(t) {
          return t = G(t, cn(A())), T(function(e) {
            var r = this;
            return n(t, function(i) {
              return an(i, r, e);
            });
          });
        });
      }
      function Ke(n, t) {
        t = t === s ? " " : hn(t);
        var e = t.length;
        if (e < 2)
          return e ? Xr(t, n) : t;
        var r = Xr(t, Ce(n / yt(t)));
        return Rt(t) ? rt(Tn(r), 0, n).join("") : r.slice(0, n);
      }
      function Oa(n, t, e, r) {
        var i = t & dn, f = te(n);
        function o() {
          for (var l = -1, c = arguments.length, _ = -1, p = r.length, d = h(p + c), v = this && this !== V && this instanceof o ? f : n; ++_ < p; )
            d[_] = r[_];
          for (; c--; )
            d[_++] = arguments[++l];
          return an(v, i ? e : this, d);
        }
        return o;
      }
      function gf(n) {
        return function(t, e, r) {
          return r && typeof r != "number" && rn(t, e, r) && (e = r = s), t = Zn(t), e === s ? (e = t, t = 0) : e = Zn(e), r = r === s ? t < e ? 1 : -1 : Zn(r), pa(t, e, r, n);
        };
      }
      function $e(n) {
        return function(t, e) {
          return typeof t == "string" && typeof e == "string" || (t = Rn(t), e = Rn(e)), n(t, e);
        };
      }
      function _f(n, t, e, r, i, f, o, l, c, _) {
        var p = t & bn, d = p ? o : s, v = p ? s : o, x = p ? f : s, S = p ? s : f;
        t |= p ? Wn : xt, t &= ~(p ? xt : Wn), t & bi || (t &= ~(dn | ut));
        var I = [
          n,
          t,
          i,
          x,
          d,
          S,
          v,
          l,
          c,
          _
        ], m = e.apply(s, I);
        return li(n) && If(m, I), m.placeholder = r, Tf(m, n, t);
      }
      function ei(n) {
        var t = Z[n];
        return function(e, r) {
          if (e = Rn(e), r = r == null ? 0 : j(y(r), 292), r && Iu(e)) {
            var i = (P(e) + "e").split("e"), f = t(i[0] + "e" + (+i[1] + r));
            return i = (P(f) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
          }
          return t(e);
        };
      }
      var ba = Lt && 1 / xe(new Lt([, -0]))[1] == ft ? function(n) {
        return new Lt(n);
      } : Ri;
      function pf(n) {
        return function(t) {
          var e = nn(t);
          return e == yn ? Wr(t) : e == In ? Xo(t) : Go(t, n(t));
        };
      }
      function qn(n, t, e, r, i, f, o, l) {
        var c = t & ut;
        if (!c && typeof n != "function")
          throw new xn(X);
        var _ = r ? r.length : 0;
        if (_ || (t &= ~(Wn | xt), r = i = s), o = o === s ? o : Y(y(o), 0), l = l === s ? l : y(l), _ -= i ? i.length : 0, t & xt) {
          var p = r, d = i;
          r = i = s;
        }
        var v = c ? s : ui(n), x = [
          n,
          t,
          e,
          r,
          i,
          p,
          d,
          f,
          o,
          l
        ];
        if (v && Za(x, v), n = x[0], t = x[1], e = x[2], r = x[3], i = x[4], l = x[9] = x[9] === s ? c ? 0 : n.length : Y(x[9] - _, 0), !l && t & (bn | wt) && (t &= ~(bn | wt)), !t || t == dn)
          var S = La(n, t, e);
        else t == bn || t == wt ? S = Ca(n, t, l) : (t == Wn || t == (dn | Wn)) && !i.length ? S = Oa(n, t, e, r) : S = He.apply(s, x);
        var I = v ? Xu : If;
        return Tf(I(S, x), n, t);
      }
      function df(n, t, e, r) {
        return n === s || Cn(n, Tt[e]) && !B.call(r, e) ? t : n;
      }
      function vf(n, t, e, r, i, f) {
        return q(n) && q(t) && (f.set(t, n), Ue(n, t, s, vf, f), f.delete(t)), n;
      }
      function Wa(n) {
        return ie(n) ? s : n;
      }
      function wf(n, t, e, r, i, f) {
        var o = e & vt, l = n.length, c = t.length;
        if (l != c && !(o && c > l))
          return !1;
        var _ = f.get(n), p = f.get(t);
        if (_ && p)
          return _ == t && p == n;
        var d = -1, v = !0, x = e & oe ? new at() : s;
        for (f.set(n, t), f.set(t, n); ++d < l; ) {
          var S = n[d], I = t[d];
          if (r)
            var m = o ? r(I, S, d, t, n, f) : r(S, I, d, n, t, f);
          if (m !== s) {
            if (m)
              continue;
            v = !1;
            break;
          }
          if (x) {
            if (!Ir(t, function(L, O) {
              if (!$t(x, O) && (S === L || i(S, L, e, r, f)))
                return x.push(O);
            })) {
              v = !1;
              break;
            }
          } else if (!(S === I || i(S, I, e, r, f))) {
            v = !1;
            break;
          }
        }
        return f.delete(n), f.delete(t), v;
      }
      function Pa(n, t, e, r, i, f, o) {
        switch (e) {
          case St:
            if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset)
              return !1;
            n = n.buffer, t = t.buffer;
          case Kt:
            return !(n.byteLength != t.byteLength || !f(new ye(n), new ye(t)));
          case Ut:
          case Dt:
          case Nt:
            return Cn(+n, +t);
          case ce:
            return n.name == t.name && n.message == t.message;
          case Gt:
          case Ht:
            return n == t + "";
          case yn:
            var l = Wr;
          case In:
            var c = r & vt;
            if (l || (l = xe), n.size != t.size && !c)
              return !1;
            var _ = o.get(n);
            if (_)
              return _ == t;
            r |= oe, o.set(n, t);
            var p = wf(l(n), l(t), r, i, f, o);
            return o.delete(n), p;
          case ge:
            if (Jt)
              return Jt.call(n) == Jt.call(t);
        }
        return !1;
      }
      function Ba(n, t, e, r, i, f) {
        var o = e & vt, l = ri(n), c = l.length, _ = ri(t), p = _.length;
        if (c != p && !o)
          return !1;
        for (var d = c; d--; ) {
          var v = l[d];
          if (!(o ? v in t : B.call(t, v)))
            return !1;
        }
        var x = f.get(n), S = f.get(t);
        if (x && S)
          return x == t && S == n;
        var I = !0;
        f.set(n, t), f.set(t, n);
        for (var m = o; ++d < c; ) {
          v = l[d];
          var L = n[v], O = t[v];
          if (r)
            var _n = o ? r(O, L, v, t, n, f) : r(L, O, v, n, t, f);
          if (!(_n === s ? L === O || i(L, O, e, r, f) : _n)) {
            I = !1;
            break;
          }
          m || (m = v == "constructor");
        }
        if (I && !m) {
          var un = n.constructor, pn = t.constructor;
          un != pn && "constructor" in n && "constructor" in t && !(typeof un == "function" && un instanceof un && typeof pn == "function" && pn instanceof pn) && (I = !1);
        }
        return f.delete(n), f.delete(t), I;
      }
      function Kn(n) {
        return ci(Rf(n, s, Pf), n + "");
      }
      function ri(n) {
        return Uu(n, J, si);
      }
      function ii(n) {
        return Uu(n, on, xf);
      }
      var ui = be ? function(n) {
        return be.get(n);
      } : Ri;
      function ze(n) {
        for (var t = n.name + "", e = Ct[t], r = B.call(Ct, t) ? e.length : 0; r--; ) {
          var i = e[r], f = i.func;
          if (f == null || f == n)
            return i.name;
        }
        return t;
      }
      function Pt(n) {
        var t = B.call(u, "placeholder") ? u : n;
        return t.placeholder;
      }
      function A() {
        var n = u.iteratee || mi;
        return n = n === mi ? Gu : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function Ze(n, t) {
        var e = n.__data__;
        return qa(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
      }
      function fi(n) {
        for (var t = J(n), e = t.length; e--; ) {
          var r = t[e], i = n[r];
          t[e] = [r, i, mf(i)];
        }
        return t;
      }
      function gt(n, t) {
        var e = zo(n, t);
        return Nu(e) ? e : s;
      }
      function Fa(n) {
        var t = B.call(n, ot), e = n[ot];
        try {
          n[ot] = s;
          var r = !0;
        } catch {
        }
        var i = Ee.call(n);
        return r && (t ? n[ot] = e : delete n[ot]), i;
      }
      var si = Br ? function(n) {
        return n == null ? [] : (n = F(n), Qn(Br(n), function(t) {
          return Ru.call(n, t);
        }));
      } : yi, xf = Br ? function(n) {
        for (var t = []; n; )
          Vn(t, si(n)), n = Ie(n);
        return t;
      } : yi, nn = en;
      (Fr && nn(new Fr(new ArrayBuffer(1))) != St || Zt && nn(new Zt()) != yn || Mr && nn(Mr.resolve()) != Bi || Lt && nn(new Lt()) != In || Yt && nn(new Yt()) != qt) && (nn = function(n) {
        var t = en(n), e = t == Dn ? n.constructor : s, r = e ? _t(e) : "";
        if (r)
          switch (r) {
            case vl:
              return St;
            case wl:
              return yn;
            case xl:
              return Bi;
            case Al:
              return In;
            case Sl:
              return qt;
          }
        return t;
      });
      function Ma(n, t, e) {
        for (var r = -1, i = e.length; ++r < i; ) {
          var f = e[r], o = f.size;
          switch (f.type) {
            case "drop":
              n += o;
              break;
            case "dropRight":
              t -= o;
              break;
            case "take":
              t = j(t, n + o);
              break;
            case "takeRight":
              n = Y(n, t - o);
              break;
          }
        }
        return { start: n, end: t };
      }
      function Ua(n) {
        var t = n.match(qs);
        return t ? t[1].split(Ks) : [];
      }
      function Af(n, t, e) {
        t = et(t, n);
        for (var r = -1, i = t.length, f = !1; ++r < i; ) {
          var o = Mn(t[r]);
          if (!(f = n != null && e(n, o)))
            break;
          n = n[o];
        }
        return f || ++r != i ? f : (i = n == null ? 0 : n.length, !!i && je(i) && $n(o, i) && (R(n) || pt(n)));
      }
      function Da(n) {
        var t = n.length, e = new n.constructor(t);
        return t && typeof n[0] == "string" && B.call(n, "index") && (e.index = n.index, e.input = n.input), e;
      }
      function Sf(n) {
        return typeof n.constructor == "function" && !ee(n) ? Ot(Ie(n)) : {};
      }
      function Na(n, t, e) {
        var r = n.constructor;
        switch (t) {
          case Kt:
            return ni(n);
          case Ut:
          case Dt:
            return new r(+n);
          case St:
            return ma(n, e);
          case fr:
          case sr:
          case or:
          case lr:
          case ar:
          case cr:
          case hr:
          case gr:
          case _r:
            return ef(n, e);
          case yn:
            return new r();
          case Nt:
          case Ht:
            return new r(n);
          case Gt:
            return Ea(n);
          case In:
            return new r();
          case ge:
            return Ra(n);
        }
      }
      function Ga(n, t) {
        var e = t.length;
        if (!e)
          return n;
        var r = e - 1;
        return t[r] = (e > 1 ? "& " : "") + t[r], t = t.join(e > 2 ? ", " : " "), n.replace(Hs, `{
/* [wrapped with ` + t + `] */
`);
      }
      function Ha(n) {
        return R(n) || pt(n) || !!(yu && n && n[yu]);
      }
      function $n(n, t) {
        var e = typeof n;
        return t = t ?? Jn, !!t && (e == "number" || e != "symbol" && ks.test(n)) && n > -1 && n % 1 == 0 && n < t;
      }
      function rn(n, t, e) {
        if (!q(e))
          return !1;
        var r = typeof t;
        return (r == "number" ? sn(e) && $n(t, e.length) : r == "string" && t in e) ? Cn(e[t], n) : !1;
      }
      function oi(n, t) {
        if (R(n))
          return !1;
        var e = typeof n;
        return e == "number" || e == "symbol" || e == "boolean" || n == null || gn(n) ? !0 : Us.test(n) || !Ms.test(n) || t != null && n in F(t);
      }
      function qa(n) {
        var t = typeof n;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
      }
      function li(n) {
        var t = ze(n), e = u[t];
        if (typeof e != "function" || !(t in C.prototype))
          return !1;
        if (n === e)
          return !0;
        var r = ui(e);
        return !!r && n === r[0];
      }
      function Ka(n) {
        return !!Su && Su in n;
      }
      var $a = Se ? zn : Ii;
      function ee(n) {
        var t = n && n.constructor, e = typeof t == "function" && t.prototype || Tt;
        return n === e;
      }
      function mf(n) {
        return n === n && !q(n);
      }
      function Ef(n, t) {
        return function(e) {
          return e == null ? !1 : e[n] === t && (t !== s || n in F(e));
        };
      }
      function za(n) {
        var t = Ve(n, function(r) {
          return e.size === hs && e.clear(), r;
        }), e = t.cache;
        return t;
      }
      function Za(n, t) {
        var e = n[1], r = t[1], i = e | r, f = i < (dn | ut | Un), o = r == Un && e == bn || r == Un && e == Mt && n[7].length <= t[8] || r == (Un | Mt) && t[7].length <= t[8] && e == bn;
        if (!(f || o))
          return n;
        r & dn && (n[2] = t[2], i |= e & dn ? 0 : bi);
        var l = t[3];
        if (l) {
          var c = n[3];
          n[3] = c ? uf(c, l, t[4]) : l, n[4] = c ? kn(n[3], se) : t[4];
        }
        return l = t[5], l && (c = n[5], n[5] = c ? ff(c, l, t[6]) : l, n[6] = c ? kn(n[5], se) : t[6]), l = t[7], l && (n[7] = l), r & Un && (n[8] = n[8] == null ? t[8] : j(n[8], t[8])), n[9] == null && (n[9] = t[9]), n[0] = t[0], n[1] = i, n;
      }
      function Ya(n) {
        var t = [];
        if (n != null)
          for (var e in F(n))
            t.push(e);
        return t;
      }
      function Xa(n) {
        return Ee.call(n);
      }
      function Rf(n, t, e) {
        return t = Y(t === s ? n.length - 1 : t, 0), function() {
          for (var r = arguments, i = -1, f = Y(r.length - t, 0), o = h(f); ++i < f; )
            o[i] = r[t + i];
          i = -1;
          for (var l = h(t + 1); ++i < t; )
            l[i] = r[i];
          return l[t] = e(o), an(n, this, l);
        };
      }
      function yf(n, t) {
        return t.length < 2 ? n : ht(n, mn(t, 0, -1));
      }
      function Ja(n, t) {
        for (var e = n.length, r = j(t.length, e), i = fn(n); r--; ) {
          var f = t[r];
          n[r] = $n(f, e) ? i[f] : s;
        }
        return n;
      }
      function ai(n, t) {
        if (!(t === "constructor" && typeof n[t] == "function") && t != "__proto__")
          return n[t];
      }
      var If = Lf(Xu), re = al || function(n, t) {
        return V.setTimeout(n, t);
      }, ci = Lf(wa);
      function Tf(n, t, e) {
        var r = t + "";
        return ci(n, Ga(r, Qa(Ua(r), e)));
      }
      function Lf(n) {
        var t = 0, e = 0;
        return function() {
          var r = _l(), i = ds - (r - e);
          if (e = r, i > 0) {
            if (++t >= ps)
              return arguments[0];
          } else
            t = 0;
          return n.apply(s, arguments);
        };
      }
      function Ye(n, t) {
        var e = -1, r = n.length, i = r - 1;
        for (t = t === s ? r : t; ++e < t; ) {
          var f = Yr(e, i), o = n[f];
          n[f] = n[e], n[e] = o;
        }
        return n.length = t, n;
      }
      var Cf = za(function(n) {
        var t = [];
        return n.charCodeAt(0) === 46 && t.push(""), n.replace(Ds, function(e, r, i, f) {
          t.push(i ? f.replace(Zs, "$1") : r || e);
        }), t;
      });
      function Mn(n) {
        if (typeof n == "string" || gn(n))
          return n;
        var t = n + "";
        return t == "0" && 1 / n == -ft ? "-0" : t;
      }
      function _t(n) {
        if (n != null) {
          try {
            return me.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function Qa(n, t) {
        return wn(ms, function(e) {
          var r = "_." + e[0];
          t & e[1] && !ve(n, r) && n.push(r);
        }), n.sort();
      }
      function Of(n) {
        if (n instanceof C)
          return n.clone();
        var t = new An(n.__wrapped__, n.__chain__);
        return t.__actions__ = fn(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t;
      }
      function Va(n, t, e) {
        (e ? rn(n, t, e) : t === s) ? t = 1 : t = Y(y(t), 0);
        var r = n == null ? 0 : n.length;
        if (!r || t < 1)
          return [];
        for (var i = 0, f = 0, o = h(Ce(r / t)); i < r; )
          o[f++] = mn(n, i, i += t);
        return o;
      }
      function ka(n) {
        for (var t = -1, e = n == null ? 0 : n.length, r = 0, i = []; ++t < e; ) {
          var f = n[t];
          f && (i[r++] = f);
        }
        return i;
      }
      function ja() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var t = h(n - 1), e = arguments[0], r = n; r--; )
          t[r - 1] = arguments[r];
        return Vn(R(e) ? fn(e) : [e], k(t, 1));
      }
      var nc = T(function(n, t) {
        return $(n) ? Vt(n, k(t, 1, $, !0)) : [];
      }), tc = T(function(n, t) {
        var e = En(t);
        return $(e) && (e = s), $(n) ? Vt(n, k(t, 1, $, !0), A(e, 2)) : [];
      }), ec = T(function(n, t) {
        var e = En(t);
        return $(e) && (e = s), $(n) ? Vt(n, k(t, 1, $, !0), s, e) : [];
      });
      function rc(n, t, e) {
        var r = n == null ? 0 : n.length;
        return r ? (t = e || t === s ? 1 : y(t), mn(n, t < 0 ? 0 : t, r)) : [];
      }
      function ic(n, t, e) {
        var r = n == null ? 0 : n.length;
        return r ? (t = e || t === s ? 1 : y(t), t = r - t, mn(n, 0, t < 0 ? 0 : t)) : [];
      }
      function uc(n, t) {
        return n && n.length ? Ne(n, A(t, 3), !0, !0) : [];
      }
      function fc(n, t) {
        return n && n.length ? Ne(n, A(t, 3), !0) : [];
      }
      function sc(n, t, e, r) {
        var i = n == null ? 0 : n.length;
        return i ? (e && typeof e != "number" && rn(n, t, e) && (e = 0, r = i), jl(n, t, e, r)) : [];
      }
      function bf(n, t, e) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = e == null ? 0 : y(e);
        return i < 0 && (i = Y(r + i, 0)), we(n, A(t, 3), i);
      }
      function Wf(n, t, e) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = r - 1;
        return e !== s && (i = y(e), i = e < 0 ? Y(r + i, 0) : j(i, r - 1)), we(n, A(t, 3), i, !0);
      }
      function Pf(n) {
        var t = n == null ? 0 : n.length;
        return t ? k(n, 1) : [];
      }
      function oc(n) {
        var t = n == null ? 0 : n.length;
        return t ? k(n, ft) : [];
      }
      function lc(n, t) {
        var e = n == null ? 0 : n.length;
        return e ? (t = t === s ? 1 : y(t), k(n, t)) : [];
      }
      function ac(n) {
        for (var t = -1, e = n == null ? 0 : n.length, r = {}; ++t < e; ) {
          var i = n[t];
          r[i[0]] = i[1];
        }
        return r;
      }
      function Bf(n) {
        return n && n.length ? n[0] : s;
      }
      function cc(n, t, e) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = e == null ? 0 : y(e);
        return i < 0 && (i = Y(r + i, 0)), Et(n, t, i);
      }
      function hc(n) {
        var t = n == null ? 0 : n.length;
        return t ? mn(n, 0, -1) : [];
      }
      var gc = T(function(n) {
        var t = G(n, kr);
        return t.length && t[0] === n[0] ? qr(t) : [];
      }), _c = T(function(n) {
        var t = En(n), e = G(n, kr);
        return t === En(e) ? t = s : e.pop(), e.length && e[0] === n[0] ? qr(e, A(t, 2)) : [];
      }), pc = T(function(n) {
        var t = En(n), e = G(n, kr);
        return t = typeof t == "function" ? t : s, t && e.pop(), e.length && e[0] === n[0] ? qr(e, s, t) : [];
      });
      function dc(n, t) {
        return n == null ? "" : hl.call(n, t);
      }
      function En(n) {
        var t = n == null ? 0 : n.length;
        return t ? n[t - 1] : s;
      }
      function vc(n, t, e) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = r;
        return e !== s && (i = y(e), i = i < 0 ? Y(r + i, 0) : j(i, r - 1)), t === t ? Qo(n, t, i) : we(n, gu, i, !0);
      }
      function wc(n, t) {
        return n && n.length ? $u(n, y(t)) : s;
      }
      var xc = T(Ff);
      function Ff(n, t) {
        return n && n.length && t && t.length ? Zr(n, t) : n;
      }
      function Ac(n, t, e) {
        return n && n.length && t && t.length ? Zr(n, t, A(e, 2)) : n;
      }
      function Sc(n, t, e) {
        return n && n.length && t && t.length ? Zr(n, t, s, e) : n;
      }
      var mc = Kn(function(n, t) {
        var e = n == null ? 0 : n.length, r = Dr(n, t);
        return Yu(n, G(t, function(i) {
          return $n(i, e) ? +i : i;
        }).sort(rf)), r;
      });
      function Ec(n, t) {
        var e = [];
        if (!(n && n.length))
          return e;
        var r = -1, i = [], f = n.length;
        for (t = A(t, 3); ++r < f; ) {
          var o = n[r];
          t(o, r, n) && (e.push(o), i.push(r));
        }
        return Yu(n, i), e;
      }
      function hi(n) {
        return n == null ? n : dl.call(n);
      }
      function Rc(n, t, e) {
        var r = n == null ? 0 : n.length;
        return r ? (e && typeof e != "number" && rn(n, t, e) ? (t = 0, e = r) : (t = t == null ? 0 : y(t), e = e === s ? r : y(e)), mn(n, t, e)) : [];
      }
      function yc(n, t) {
        return De(n, t);
      }
      function Ic(n, t, e) {
        return Jr(n, t, A(e, 2));
      }
      function Tc(n, t) {
        var e = n == null ? 0 : n.length;
        if (e) {
          var r = De(n, t);
          if (r < e && Cn(n[r], t))
            return r;
        }
        return -1;
      }
      function Lc(n, t) {
        return De(n, t, !0);
      }
      function Cc(n, t, e) {
        return Jr(n, t, A(e, 2), !0);
      }
      function Oc(n, t) {
        var e = n == null ? 0 : n.length;
        if (e) {
          var r = De(n, t, !0) - 1;
          if (Cn(n[r], t))
            return r;
        }
        return -1;
      }
      function bc(n) {
        return n && n.length ? Ju(n) : [];
      }
      function Wc(n, t) {
        return n && n.length ? Ju(n, A(t, 2)) : [];
      }
      function Pc(n) {
        var t = n == null ? 0 : n.length;
        return t ? mn(n, 1, t) : [];
      }
      function Bc(n, t, e) {
        return n && n.length ? (t = e || t === s ? 1 : y(t), mn(n, 0, t < 0 ? 0 : t)) : [];
      }
      function Fc(n, t, e) {
        var r = n == null ? 0 : n.length;
        return r ? (t = e || t === s ? 1 : y(t), t = r - t, mn(n, t < 0 ? 0 : t, r)) : [];
      }
      function Mc(n, t) {
        return n && n.length ? Ne(n, A(t, 3), !1, !0) : [];
      }
      function Uc(n, t) {
        return n && n.length ? Ne(n, A(t, 3)) : [];
      }
      var Dc = T(function(n) {
        return tt(k(n, 1, $, !0));
      }), Nc = T(function(n) {
        var t = En(n);
        return $(t) && (t = s), tt(k(n, 1, $, !0), A(t, 2));
      }), Gc = T(function(n) {
        var t = En(n);
        return t = typeof t == "function" ? t : s, tt(k(n, 1, $, !0), s, t);
      });
      function Hc(n) {
        return n && n.length ? tt(n) : [];
      }
      function qc(n, t) {
        return n && n.length ? tt(n, A(t, 2)) : [];
      }
      function Kc(n, t) {
        return t = typeof t == "function" ? t : s, n && n.length ? tt(n, s, t) : [];
      }
      function gi(n) {
        if (!(n && n.length))
          return [];
        var t = 0;
        return n = Qn(n, function(e) {
          if ($(e))
            return t = Y(e.length, t), !0;
        }), Or(t, function(e) {
          return G(n, Tr(e));
        });
      }
      function Mf(n, t) {
        if (!(n && n.length))
          return [];
        var e = gi(n);
        return t == null ? e : G(e, function(r) {
          return an(t, s, r);
        });
      }
      var $c = T(function(n, t) {
        return $(n) ? Vt(n, t) : [];
      }), zc = T(function(n) {
        return Vr(Qn(n, $));
      }), Zc = T(function(n) {
        var t = En(n);
        return $(t) && (t = s), Vr(Qn(n, $), A(t, 2));
      }), Yc = T(function(n) {
        var t = En(n);
        return t = typeof t == "function" ? t : s, Vr(Qn(n, $), s, t);
      }), Xc = T(gi);
      function Jc(n, t) {
        return ju(n || [], t || [], Qt);
      }
      function Qc(n, t) {
        return ju(n || [], t || [], ne);
      }
      var Vc = T(function(n) {
        var t = n.length, e = t > 1 ? n[t - 1] : s;
        return e = typeof e == "function" ? (n.pop(), e) : s, Mf(n, e);
      });
      function Uf(n) {
        var t = u(n);
        return t.__chain__ = !0, t;
      }
      function kc(n, t) {
        return t(n), n;
      }
      function Xe(n, t) {
        return t(n);
      }
      var jc = Kn(function(n) {
        var t = n.length, e = t ? n[0] : 0, r = this.__wrapped__, i = function(f) {
          return Dr(f, n);
        };
        return t > 1 || this.__actions__.length || !(r instanceof C) || !$n(e) ? this.thru(i) : (r = r.slice(e, +e + (t ? 1 : 0)), r.__actions__.push({
          func: Xe,
          args: [i],
          thisArg: s
        }), new An(r, this.__chain__).thru(function(f) {
          return t && !f.length && f.push(s), f;
        }));
      });
      function nh() {
        return Uf(this);
      }
      function th() {
        return new An(this.value(), this.__chain__);
      }
      function eh() {
        this.__values__ === s && (this.__values__ = Vf(this.value()));
        var n = this.__index__ >= this.__values__.length, t = n ? s : this.__values__[this.__index__++];
        return { done: n, value: t };
      }
      function rh() {
        return this;
      }
      function ih(n) {
        for (var t, e = this; e instanceof Pe; ) {
          var r = Of(e);
          r.__index__ = 0, r.__values__ = s, t ? i.__wrapped__ = r : t = r;
          var i = r;
          e = e.__wrapped__;
        }
        return i.__wrapped__ = n, t;
      }
      function uh() {
        var n = this.__wrapped__;
        if (n instanceof C) {
          var t = n;
          return this.__actions__.length && (t = new C(this)), t = t.reverse(), t.__actions__.push({
            func: Xe,
            args: [hi],
            thisArg: s
          }), new An(t, this.__chain__);
        }
        return this.thru(hi);
      }
      function fh() {
        return ku(this.__wrapped__, this.__actions__);
      }
      var sh = Ge(function(n, t, e) {
        B.call(n, e) ? ++n[e] : Hn(n, e, 1);
      });
      function oh(n, t, e) {
        var r = R(n) ? cu : kl;
        return e && rn(n, t, e) && (t = s), r(n, A(t, 3));
      }
      function lh(n, t) {
        var e = R(n) ? Qn : Fu;
        return e(n, A(t, 3));
      }
      var ah = af(bf), ch = af(Wf);
      function hh(n, t) {
        return k(Je(n, t), 1);
      }
      function gh(n, t) {
        return k(Je(n, t), ft);
      }
      function _h(n, t, e) {
        return e = e === s ? 1 : y(e), k(Je(n, t), e);
      }
      function Df(n, t) {
        var e = R(n) ? wn : nt;
        return e(n, A(t, 3));
      }
      function Nf(n, t) {
        var e = R(n) ? Po : Bu;
        return e(n, A(t, 3));
      }
      var ph = Ge(function(n, t, e) {
        B.call(n, e) ? n[e].push(t) : Hn(n, e, [t]);
      });
      function dh(n, t, e, r) {
        n = sn(n) ? n : Ft(n), e = e && !r ? y(e) : 0;
        var i = n.length;
        return e < 0 && (e = Y(i + e, 0)), nr(n) ? e <= i && n.indexOf(t, e) > -1 : !!i && Et(n, t, e) > -1;
      }
      var vh = T(function(n, t, e) {
        var r = -1, i = typeof t == "function", f = sn(n) ? h(n.length) : [];
        return nt(n, function(o) {
          f[++r] = i ? an(t, o, e) : kt(o, t, e);
        }), f;
      }), wh = Ge(function(n, t, e) {
        Hn(n, e, t);
      });
      function Je(n, t) {
        var e = R(n) ? G : Hu;
        return e(n, A(t, 3));
      }
      function xh(n, t, e, r) {
        return n == null ? [] : (R(t) || (t = t == null ? [] : [t]), e = r ? s : e, R(e) || (e = e == null ? [] : [e]), zu(n, t, e));
      }
      var Ah = Ge(function(n, t, e) {
        n[e ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function Sh(n, t, e) {
        var r = R(n) ? yr : pu, i = arguments.length < 3;
        return r(n, A(t, 4), e, i, nt);
      }
      function mh(n, t, e) {
        var r = R(n) ? Bo : pu, i = arguments.length < 3;
        return r(n, A(t, 4), e, i, Bu);
      }
      function Eh(n, t) {
        var e = R(n) ? Qn : Fu;
        return e(n, ke(A(t, 3)));
      }
      function Rh(n) {
        var t = R(n) ? Ou : da;
        return t(n);
      }
      function yh(n, t, e) {
        (e ? rn(n, t, e) : t === s) ? t = 1 : t = y(t);
        var r = R(n) ? Yl : va;
        return r(n, t);
      }
      function Ih(n) {
        var t = R(n) ? Xl : xa;
        return t(n);
      }
      function Th(n) {
        if (n == null)
          return 0;
        if (sn(n))
          return nr(n) ? yt(n) : n.length;
        var t = nn(n);
        return t == yn || t == In ? n.size : $r(n).length;
      }
      function Lh(n, t, e) {
        var r = R(n) ? Ir : Aa;
        return e && rn(n, t, e) && (t = s), r(n, A(t, 3));
      }
      var Ch = T(function(n, t) {
        if (n == null)
          return [];
        var e = t.length;
        return e > 1 && rn(n, t[0], t[1]) ? t = [] : e > 2 && rn(t[0], t[1], t[2]) && (t = [t[0]]), zu(n, k(t, 1), []);
      }), Qe = ll || function() {
        return V.Date.now();
      };
      function Oh(n, t) {
        if (typeof t != "function")
          throw new xn(X);
        return n = y(n), function() {
          if (--n < 1)
            return t.apply(this, arguments);
        };
      }
      function Gf(n, t, e) {
        return t = e ? s : t, t = n && t == null ? n.length : t, qn(n, Un, s, s, s, s, t);
      }
      function Hf(n, t) {
        var e;
        if (typeof t != "function")
          throw new xn(X);
        return n = y(n), function() {
          return --n > 0 && (e = t.apply(this, arguments)), n <= 1 && (t = s), e;
        };
      }
      var _i = T(function(n, t, e) {
        var r = dn;
        if (e.length) {
          var i = kn(e, Pt(_i));
          r |= Wn;
        }
        return qn(n, r, t, e, i);
      }), qf = T(function(n, t, e) {
        var r = dn | ut;
        if (e.length) {
          var i = kn(e, Pt(qf));
          r |= Wn;
        }
        return qn(t, r, n, e, i);
      });
      function Kf(n, t, e) {
        t = e ? s : t;
        var r = qn(n, bn, s, s, s, s, s, t);
        return r.placeholder = Kf.placeholder, r;
      }
      function $f(n, t, e) {
        t = e ? s : t;
        var r = qn(n, wt, s, s, s, s, s, t);
        return r.placeholder = $f.placeholder, r;
      }
      function zf(n, t, e) {
        var r, i, f, o, l, c, _ = 0, p = !1, d = !1, v = !0;
        if (typeof n != "function")
          throw new xn(X);
        t = Rn(t) || 0, q(e) && (p = !!e.leading, d = "maxWait" in e, f = d ? Y(Rn(e.maxWait) || 0, t) : f, v = "trailing" in e ? !!e.trailing : v);
        function x(z) {
          var On = r, Yn = i;
          return r = i = s, _ = z, o = n.apply(Yn, On), o;
        }
        function S(z) {
          return _ = z, l = re(L, t), p ? x(z) : o;
        }
        function I(z) {
          var On = z - c, Yn = z - _, as = t - On;
          return d ? j(as, f - Yn) : as;
        }
        function m(z) {
          var On = z - c, Yn = z - _;
          return c === s || On >= t || On < 0 || d && Yn >= f;
        }
        function L() {
          var z = Qe();
          if (m(z))
            return O(z);
          l = re(L, I(z));
        }
        function O(z) {
          return l = s, v && r ? x(z) : (r = i = s, o);
        }
        function _n() {
          l !== s && nf(l), _ = 0, r = c = i = l = s;
        }
        function un() {
          return l === s ? o : O(Qe());
        }
        function pn() {
          var z = Qe(), On = m(z);
          if (r = arguments, i = this, c = z, On) {
            if (l === s)
              return S(c);
            if (d)
              return nf(l), l = re(L, t), x(c);
          }
          return l === s && (l = re(L, t)), o;
        }
        return pn.cancel = _n, pn.flush = un, pn;
      }
      var bh = T(function(n, t) {
        return Pu(n, 1, t);
      }), Wh = T(function(n, t, e) {
        return Pu(n, Rn(t) || 0, e);
      });
      function Ph(n) {
        return qn(n, ur);
      }
      function Ve(n, t) {
        if (typeof n != "function" || t != null && typeof t != "function")
          throw new xn(X);
        var e = function() {
          var r = arguments, i = t ? t.apply(this, r) : r[0], f = e.cache;
          if (f.has(i))
            return f.get(i);
          var o = n.apply(this, r);
          return e.cache = f.set(i, o) || f, o;
        };
        return e.cache = new (Ve.Cache || Gn)(), e;
      }
      Ve.Cache = Gn;
      function ke(n) {
        if (typeof n != "function")
          throw new xn(X);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, t[0]);
            case 2:
              return !n.call(this, t[0], t[1]);
            case 3:
              return !n.call(this, t[0], t[1], t[2]);
          }
          return !n.apply(this, t);
        };
      }
      function Bh(n) {
        return Hf(2, n);
      }
      var Fh = Sa(function(n, t) {
        t = t.length == 1 && R(t[0]) ? G(t[0], cn(A())) : G(k(t, 1), cn(A()));
        var e = t.length;
        return T(function(r) {
          for (var i = -1, f = j(r.length, e); ++i < f; )
            r[i] = t[i].call(this, r[i]);
          return an(n, this, r);
        });
      }), pi = T(function(n, t) {
        var e = kn(t, Pt(pi));
        return qn(n, Wn, s, t, e);
      }), Zf = T(function(n, t) {
        var e = kn(t, Pt(Zf));
        return qn(n, xt, s, t, e);
      }), Mh = Kn(function(n, t) {
        return qn(n, Mt, s, s, s, t);
      });
      function Uh(n, t) {
        if (typeof n != "function")
          throw new xn(X);
        return t = t === s ? t : y(t), T(n, t);
      }
      function Dh(n, t) {
        if (typeof n != "function")
          throw new xn(X);
        return t = t == null ? 0 : Y(y(t), 0), T(function(e) {
          var r = e[t], i = rt(e, 0, t);
          return r && Vn(i, r), an(n, this, i);
        });
      }
      function Nh(n, t, e) {
        var r = !0, i = !0;
        if (typeof n != "function")
          throw new xn(X);
        return q(e) && (r = "leading" in e ? !!e.leading : r, i = "trailing" in e ? !!e.trailing : i), zf(n, t, {
          leading: r,
          maxWait: t,
          trailing: i
        });
      }
      function Gh(n) {
        return Gf(n, 1);
      }
      function Hh(n, t) {
        return pi(jr(t), n);
      }
      function qh() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return R(n) ? n : [n];
      }
      function Kh(n) {
        return Sn(n, dt);
      }
      function $h(n, t) {
        return t = typeof t == "function" ? t : s, Sn(n, dt, t);
      }
      function zh(n) {
        return Sn(n, Xn | dt);
      }
      function Zh(n, t) {
        return t = typeof t == "function" ? t : s, Sn(n, Xn | dt, t);
      }
      function Yh(n, t) {
        return t == null || Wu(n, t, J(t));
      }
      function Cn(n, t) {
        return n === t || n !== n && t !== t;
      }
      var Xh = $e(Hr), Jh = $e(function(n, t) {
        return n >= t;
      }), pt = Du(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Du : function(n) {
        return K(n) && B.call(n, "callee") && !Ru.call(n, "callee");
      }, R = h.isArray, Qh = uu ? cn(uu) : ia;
      function sn(n) {
        return n != null && je(n.length) && !zn(n);
      }
      function $(n) {
        return K(n) && sn(n);
      }
      function Vh(n) {
        return n === !0 || n === !1 || K(n) && en(n) == Ut;
      }
      var it = cl || Ii, kh = fu ? cn(fu) : ua;
      function jh(n) {
        return K(n) && n.nodeType === 1 && !ie(n);
      }
      function ng(n) {
        if (n == null)
          return !0;
        if (sn(n) && (R(n) || typeof n == "string" || typeof n.splice == "function" || it(n) || Bt(n) || pt(n)))
          return !n.length;
        var t = nn(n);
        if (t == yn || t == In)
          return !n.size;
        if (ee(n))
          return !$r(n).length;
        for (var e in n)
          if (B.call(n, e))
            return !1;
        return !0;
      }
      function tg(n, t) {
        return jt(n, t);
      }
      function eg(n, t, e) {
        e = typeof e == "function" ? e : s;
        var r = e ? e(n, t) : s;
        return r === s ? jt(n, t, s, e) : !!r;
      }
      function di(n) {
        if (!K(n))
          return !1;
        var t = en(n);
        return t == ce || t == Rs || typeof n.message == "string" && typeof n.name == "string" && !ie(n);
      }
      function rg(n) {
        return typeof n == "number" && Iu(n);
      }
      function zn(n) {
        if (!q(n))
          return !1;
        var t = en(n);
        return t == he || t == Pi || t == Es || t == Is;
      }
      function Yf(n) {
        return typeof n == "number" && n == y(n);
      }
      function je(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= Jn;
      }
      function q(n) {
        var t = typeof n;
        return n != null && (t == "object" || t == "function");
      }
      function K(n) {
        return n != null && typeof n == "object";
      }
      var Xf = su ? cn(su) : sa;
      function ig(n, t) {
        return n === t || Kr(n, t, fi(t));
      }
      function ug(n, t, e) {
        return e = typeof e == "function" ? e : s, Kr(n, t, fi(t), e);
      }
      function fg(n) {
        return Jf(n) && n != +n;
      }
      function sg(n) {
        if ($a(n))
          throw new E(tn);
        return Nu(n);
      }
      function og(n) {
        return n === null;
      }
      function lg(n) {
        return n == null;
      }
      function Jf(n) {
        return typeof n == "number" || K(n) && en(n) == Nt;
      }
      function ie(n) {
        if (!K(n) || en(n) != Dn)
          return !1;
        var t = Ie(n);
        if (t === null)
          return !0;
        var e = B.call(t, "constructor") && t.constructor;
        return typeof e == "function" && e instanceof e && me.call(e) == ul;
      }
      var vi = ou ? cn(ou) : oa;
      function ag(n) {
        return Yf(n) && n >= -Jn && n <= Jn;
      }
      var Qf = lu ? cn(lu) : la;
      function nr(n) {
        return typeof n == "string" || !R(n) && K(n) && en(n) == Ht;
      }
      function gn(n) {
        return typeof n == "symbol" || K(n) && en(n) == ge;
      }
      var Bt = au ? cn(au) : aa;
      function cg(n) {
        return n === s;
      }
      function hg(n) {
        return K(n) && nn(n) == qt;
      }
      function gg(n) {
        return K(n) && en(n) == Ls;
      }
      var _g = $e(zr), pg = $e(function(n, t) {
        return n <= t;
      });
      function Vf(n) {
        if (!n)
          return [];
        if (sn(n))
          return nr(n) ? Tn(n) : fn(n);
        if (zt && n[zt])
          return Yo(n[zt]());
        var t = nn(n), e = t == yn ? Wr : t == In ? xe : Ft;
        return e(n);
      }
      function Zn(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = Rn(n), n === ft || n === -ft) {
          var t = n < 0 ? -1 : 1;
          return t * xs;
        }
        return n === n ? n : 0;
      }
      function y(n) {
        var t = Zn(n), e = t % 1;
        return t === t ? e ? t - e : t : 0;
      }
      function kf(n) {
        return n ? ct(y(n), 0, Pn) : 0;
      }
      function Rn(n) {
        if (typeof n == "number")
          return n;
        if (gn(n))
          return le;
        if (q(n)) {
          var t = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = q(t) ? t + "" : t;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = du(n);
        var e = Js.test(n);
        return e || Vs.test(n) ? Oo(n.slice(2), e ? 2 : 8) : Xs.test(n) ? le : +n;
      }
      function jf(n) {
        return Fn(n, on(n));
      }
      function dg(n) {
        return n ? ct(y(n), -Jn, Jn) : n === 0 ? n : 0;
      }
      function P(n) {
        return n == null ? "" : hn(n);
      }
      var vg = bt(function(n, t) {
        if (ee(t) || sn(t)) {
          Fn(t, J(t), n);
          return;
        }
        for (var e in t)
          B.call(t, e) && Qt(n, e, t[e]);
      }), ns = bt(function(n, t) {
        Fn(t, on(t), n);
      }), tr = bt(function(n, t, e, r) {
        Fn(t, on(t), n, r);
      }), wg = bt(function(n, t, e, r) {
        Fn(t, J(t), n, r);
      }), xg = Kn(Dr);
      function Ag(n, t) {
        var e = Ot(n);
        return t == null ? e : bu(e, t);
      }
      var Sg = T(function(n, t) {
        n = F(n);
        var e = -1, r = t.length, i = r > 2 ? t[2] : s;
        for (i && rn(t[0], t[1], i) && (r = 1); ++e < r; )
          for (var f = t[e], o = on(f), l = -1, c = o.length; ++l < c; ) {
            var _ = o[l], p = n[_];
            (p === s || Cn(p, Tt[_]) && !B.call(n, _)) && (n[_] = f[_]);
          }
        return n;
      }), mg = T(function(n) {
        return n.push(s, vf), an(ts, s, n);
      });
      function Eg(n, t) {
        return hu(n, A(t, 3), Bn);
      }
      function Rg(n, t) {
        return hu(n, A(t, 3), Gr);
      }
      function yg(n, t) {
        return n == null ? n : Nr(n, A(t, 3), on);
      }
      function Ig(n, t) {
        return n == null ? n : Mu(n, A(t, 3), on);
      }
      function Tg(n, t) {
        return n && Bn(n, A(t, 3));
      }
      function Lg(n, t) {
        return n && Gr(n, A(t, 3));
      }
      function Cg(n) {
        return n == null ? [] : Me(n, J(n));
      }
      function Og(n) {
        return n == null ? [] : Me(n, on(n));
      }
      function wi(n, t, e) {
        var r = n == null ? s : ht(n, t);
        return r === s ? e : r;
      }
      function bg(n, t) {
        return n != null && Af(n, t, na);
      }
      function xi(n, t) {
        return n != null && Af(n, t, ta);
      }
      var Wg = hf(function(n, t, e) {
        t != null && typeof t.toString != "function" && (t = Ee.call(t)), n[t] = e;
      }, Si(ln)), Pg = hf(function(n, t, e) {
        t != null && typeof t.toString != "function" && (t = Ee.call(t)), B.call(n, t) ? n[t].push(e) : n[t] = [e];
      }, A), Bg = T(kt);
      function J(n) {
        return sn(n) ? Cu(n) : $r(n);
      }
      function on(n) {
        return sn(n) ? Cu(n, !0) : ca(n);
      }
      function Fg(n, t) {
        var e = {};
        return t = A(t, 3), Bn(n, function(r, i, f) {
          Hn(e, t(r, i, f), r);
        }), e;
      }
      function Mg(n, t) {
        var e = {};
        return t = A(t, 3), Bn(n, function(r, i, f) {
          Hn(e, i, t(r, i, f));
        }), e;
      }
      var Ug = bt(function(n, t, e) {
        Ue(n, t, e);
      }), ts = bt(function(n, t, e, r) {
        Ue(n, t, e, r);
      }), Dg = Kn(function(n, t) {
        var e = {};
        if (n == null)
          return e;
        var r = !1;
        t = G(t, function(f) {
          return f = et(f, n), r || (r = f.length > 1), f;
        }), Fn(n, ii(n), e), r && (e = Sn(e, Xn | Oi | dt, Wa));
        for (var i = t.length; i--; )
          Qr(e, t[i]);
        return e;
      });
      function Ng(n, t) {
        return es(n, ke(A(t)));
      }
      var Gg = Kn(function(n, t) {
        return n == null ? {} : ga(n, t);
      });
      function es(n, t) {
        if (n == null)
          return {};
        var e = G(ii(n), function(r) {
          return [r];
        });
        return t = A(t), Zu(n, e, function(r, i) {
          return t(r, i[0]);
        });
      }
      function Hg(n, t, e) {
        t = et(t, n);
        var r = -1, i = t.length;
        for (i || (i = 1, n = s); ++r < i; ) {
          var f = n == null ? s : n[Mn(t[r])];
          f === s && (r = i, f = e), n = zn(f) ? f.call(n) : f;
        }
        return n;
      }
      function qg(n, t, e) {
        return n == null ? n : ne(n, t, e);
      }
      function Kg(n, t, e, r) {
        return r = typeof r == "function" ? r : s, n == null ? n : ne(n, t, e, r);
      }
      var rs = pf(J), is = pf(on);
      function $g(n, t, e) {
        var r = R(n), i = r || it(n) || Bt(n);
        if (t = A(t, 4), e == null) {
          var f = n && n.constructor;
          i ? e = r ? new f() : [] : q(n) ? e = zn(f) ? Ot(Ie(n)) : {} : e = {};
        }
        return (i ? wn : Bn)(n, function(o, l, c) {
          return t(e, o, l, c);
        }), e;
      }
      function zg(n, t) {
        return n == null ? !0 : Qr(n, t);
      }
      function Zg(n, t, e) {
        return n == null ? n : Vu(n, t, jr(e));
      }
      function Yg(n, t, e, r) {
        return r = typeof r == "function" ? r : s, n == null ? n : Vu(n, t, jr(e), r);
      }
      function Ft(n) {
        return n == null ? [] : br(n, J(n));
      }
      function Xg(n) {
        return n == null ? [] : br(n, on(n));
      }
      function Jg(n, t, e) {
        return e === s && (e = t, t = s), e !== s && (e = Rn(e), e = e === e ? e : 0), t !== s && (t = Rn(t), t = t === t ? t : 0), ct(Rn(n), t, e);
      }
      function Qg(n, t, e) {
        return t = Zn(t), e === s ? (e = t, t = 0) : e = Zn(e), n = Rn(n), ea(n, t, e);
      }
      function Vg(n, t, e) {
        if (e && typeof e != "boolean" && rn(n, t, e) && (t = e = s), e === s && (typeof t == "boolean" ? (e = t, t = s) : typeof n == "boolean" && (e = n, n = s)), n === s && t === s ? (n = 0, t = 1) : (n = Zn(n), t === s ? (t = n, n = 0) : t = Zn(t)), n > t) {
          var r = n;
          n = t, t = r;
        }
        if (e || n % 1 || t % 1) {
          var i = Tu();
          return j(n + i * (t - n + Co("1e-" + ((i + "").length - 1))), t);
        }
        return Yr(n, t);
      }
      var kg = Wt(function(n, t, e) {
        return t = t.toLowerCase(), n + (e ? us(t) : t);
      });
      function us(n) {
        return Ai(P(n).toLowerCase());
      }
      function fs(n) {
        return n = P(n), n && n.replace(js, qo).replace(xo, "");
      }
      function jg(n, t, e) {
        n = P(n), t = hn(t);
        var r = n.length;
        e = e === s ? r : ct(y(e), 0, r);
        var i = e;
        return e -= t.length, e >= 0 && n.slice(e, i) == t;
      }
      function n_(n) {
        return n = P(n), n && Ps.test(n) ? n.replace(Mi, Ko) : n;
      }
      function t_(n) {
        return n = P(n), n && Ns.test(n) ? n.replace(pr, "\\$&") : n;
      }
      var e_ = Wt(function(n, t, e) {
        return n + (e ? "-" : "") + t.toLowerCase();
      }), r_ = Wt(function(n, t, e) {
        return n + (e ? " " : "") + t.toLowerCase();
      }), i_ = lf("toLowerCase");
      function u_(n, t, e) {
        n = P(n), t = y(t);
        var r = t ? yt(n) : 0;
        if (!t || r >= t)
          return n;
        var i = (t - r) / 2;
        return Ke(Oe(i), e) + n + Ke(Ce(i), e);
      }
      function f_(n, t, e) {
        n = P(n), t = y(t);
        var r = t ? yt(n) : 0;
        return t && r < t ? n + Ke(t - r, e) : n;
      }
      function s_(n, t, e) {
        n = P(n), t = y(t);
        var r = t ? yt(n) : 0;
        return t && r < t ? Ke(t - r, e) + n : n;
      }
      function o_(n, t, e) {
        return e || t == null ? t = 0 : t && (t = +t), pl(P(n).replace(dr, ""), t || 0);
      }
      function l_(n, t, e) {
        return (e ? rn(n, t, e) : t === s) ? t = 1 : t = y(t), Xr(P(n), t);
      }
      function a_() {
        var n = arguments, t = P(n[0]);
        return n.length < 3 ? t : t.replace(n[1], n[2]);
      }
      var c_ = Wt(function(n, t, e) {
        return n + (e ? "_" : "") + t.toLowerCase();
      });
      function h_(n, t, e) {
        return e && typeof e != "number" && rn(n, t, e) && (t = e = s), e = e === s ? Pn : e >>> 0, e ? (n = P(n), n && (typeof t == "string" || t != null && !vi(t)) && (t = hn(t), !t && Rt(n)) ? rt(Tn(n), 0, e) : n.split(t, e)) : [];
      }
      var g_ = Wt(function(n, t, e) {
        return n + (e ? " " : "") + Ai(t);
      });
      function __(n, t, e) {
        return n = P(n), e = e == null ? 0 : ct(y(e), 0, n.length), t = hn(t), n.slice(e, e + t.length) == t;
      }
      function p_(n, t, e) {
        var r = u.templateSettings;
        e && rn(n, t, e) && (t = s), n = P(n), t = tr({}, t, r, df);
        var i = tr({}, t.imports, r.imports, df), f = J(i), o = br(i, f), l, c, _ = 0, p = t.interpolate || _e, d = "__p += '", v = Pr(
          (t.escape || _e).source + "|" + p.source + "|" + (p === Ui ? Ys : _e).source + "|" + (t.evaluate || _e).source + "|$",
          "g"
        ), x = "//# sourceURL=" + (B.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ro + "]") + `
`;
        n.replace(v, function(m, L, O, _n, un, pn) {
          return O || (O = _n), d += n.slice(_, pn).replace(no, $o), L && (l = !0, d += `' +
__e(` + L + `) +
'`), un && (c = !0, d += `';
` + un + `;
__p += '`), O && (d += `' +
((__t = (` + O + `)) == null ? '' : __t) +
'`), _ = pn + m.length, m;
        }), d += `';
`;
        var S = B.call(t, "variable") && t.variable;
        if (!S)
          d = `with (obj) {
` + d + `
}
`;
        else if (zs.test(S))
          throw new E(fe);
        d = (c ? d.replace(Cs, "") : d).replace(Os, "$1").replace(bs, "$1;"), d = "function(" + (S || "obj") + `) {
` + (S ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (l ? ", __e = _.escape" : "") + (c ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + d + `return __p
}`;
        var I = os(function() {
          return W(f, x + "return " + d).apply(s, o);
        });
        if (I.source = d, di(I))
          throw I;
        return I;
      }
      function d_(n) {
        return P(n).toLowerCase();
      }
      function v_(n) {
        return P(n).toUpperCase();
      }
      function w_(n, t, e) {
        if (n = P(n), n && (e || t === s))
          return du(n);
        if (!n || !(t = hn(t)))
          return n;
        var r = Tn(n), i = Tn(t), f = vu(r, i), o = wu(r, i) + 1;
        return rt(r, f, o).join("");
      }
      function x_(n, t, e) {
        if (n = P(n), n && (e || t === s))
          return n.slice(0, Au(n) + 1);
        if (!n || !(t = hn(t)))
          return n;
        var r = Tn(n), i = wu(r, Tn(t)) + 1;
        return rt(r, 0, i).join("");
      }
      function A_(n, t, e) {
        if (n = P(n), n && (e || t === s))
          return n.replace(dr, "");
        if (!n || !(t = hn(t)))
          return n;
        var r = Tn(n), i = vu(r, Tn(t));
        return rt(r, i).join("");
      }
      function S_(n, t) {
        var e = gs, r = _s;
        if (q(t)) {
          var i = "separator" in t ? t.separator : i;
          e = "length" in t ? y(t.length) : e, r = "omission" in t ? hn(t.omission) : r;
        }
        n = P(n);
        var f = n.length;
        if (Rt(n)) {
          var o = Tn(n);
          f = o.length;
        }
        if (e >= f)
          return n;
        var l = e - yt(r);
        if (l < 1)
          return r;
        var c = o ? rt(o, 0, l).join("") : n.slice(0, l);
        if (i === s)
          return c + r;
        if (o && (l += c.length - l), vi(i)) {
          if (n.slice(l).search(i)) {
            var _, p = c;
            for (i.global || (i = Pr(i.source, P(Di.exec(i)) + "g")), i.lastIndex = 0; _ = i.exec(p); )
              var d = _.index;
            c = c.slice(0, d === s ? l : d);
          }
        } else if (n.indexOf(hn(i), l) != l) {
          var v = c.lastIndexOf(i);
          v > -1 && (c = c.slice(0, v));
        }
        return c + r;
      }
      function m_(n) {
        return n = P(n), n && Ws.test(n) ? n.replace(Fi, Vo) : n;
      }
      var E_ = Wt(function(n, t, e) {
        return n + (e ? " " : "") + t.toUpperCase();
      }), Ai = lf("toUpperCase");
      function ss(n, t, e) {
        return n = P(n), t = e ? s : t, t === s ? Zo(n) ? nl(n) : Uo(n) : n.match(t) || [];
      }
      var os = T(function(n, t) {
        try {
          return an(n, s, t);
        } catch (e) {
          return di(e) ? e : new E(e);
        }
      }), R_ = Kn(function(n, t) {
        return wn(t, function(e) {
          e = Mn(e), Hn(n, e, _i(n[e], n));
        }), n;
      });
      function y_(n) {
        var t = n == null ? 0 : n.length, e = A();
        return n = t ? G(n, function(r) {
          if (typeof r[1] != "function")
            throw new xn(X);
          return [e(r[0]), r[1]];
        }) : [], T(function(r) {
          for (var i = -1; ++i < t; ) {
            var f = n[i];
            if (an(f[0], this, r))
              return an(f[1], this, r);
          }
        });
      }
      function I_(n) {
        return Vl(Sn(n, Xn));
      }
      function Si(n) {
        return function() {
          return n;
        };
      }
      function T_(n, t) {
        return n == null || n !== n ? t : n;
      }
      var L_ = cf(), C_ = cf(!0);
      function ln(n) {
        return n;
      }
      function mi(n) {
        return Gu(typeof n == "function" ? n : Sn(n, Xn));
      }
      function O_(n) {
        return qu(Sn(n, Xn));
      }
      function b_(n, t) {
        return Ku(n, Sn(t, Xn));
      }
      var W_ = T(function(n, t) {
        return function(e) {
          return kt(e, n, t);
        };
      }), P_ = T(function(n, t) {
        return function(e) {
          return kt(n, e, t);
        };
      });
      function Ei(n, t, e) {
        var r = J(t), i = Me(t, r);
        e == null && !(q(t) && (i.length || !r.length)) && (e = t, t = n, n = this, i = Me(t, J(t)));
        var f = !(q(e) && "chain" in e) || !!e.chain, o = zn(n);
        return wn(i, function(l) {
          var c = t[l];
          n[l] = c, o && (n.prototype[l] = function() {
            var _ = this.__chain__;
            if (f || _) {
              var p = n(this.__wrapped__), d = p.__actions__ = fn(this.__actions__);
              return d.push({ func: c, args: arguments, thisArg: n }), p.__chain__ = _, p;
            }
            return c.apply(n, Vn([this.value()], arguments));
          });
        }), n;
      }
      function B_() {
        return V._ === this && (V._ = fl), this;
      }
      function Ri() {
      }
      function F_(n) {
        return n = y(n), T(function(t) {
          return $u(t, n);
        });
      }
      var M_ = ti(G), U_ = ti(cu), D_ = ti(Ir);
      function ls(n) {
        return oi(n) ? Tr(Mn(n)) : _a(n);
      }
      function N_(n) {
        return function(t) {
          return n == null ? s : ht(n, t);
        };
      }
      var G_ = gf(), H_ = gf(!0);
      function yi() {
        return [];
      }
      function Ii() {
        return !1;
      }
      function q_() {
        return {};
      }
      function K_() {
        return "";
      }
      function $_() {
        return !0;
      }
      function z_(n, t) {
        if (n = y(n), n < 1 || n > Jn)
          return [];
        var e = Pn, r = j(n, Pn);
        t = A(t), n -= Pn;
        for (var i = Or(r, t); ++e < n; )
          t(e);
        return i;
      }
      function Z_(n) {
        return R(n) ? G(n, Mn) : gn(n) ? [n] : fn(Cf(P(n)));
      }
      function Y_(n) {
        var t = ++il;
        return P(n) + t;
      }
      var X_ = qe(function(n, t) {
        return n + t;
      }, 0), J_ = ei("ceil"), Q_ = qe(function(n, t) {
        return n / t;
      }, 1), V_ = ei("floor");
      function k_(n) {
        return n && n.length ? Fe(n, ln, Hr) : s;
      }
      function j_(n, t) {
        return n && n.length ? Fe(n, A(t, 2), Hr) : s;
      }
      function np(n) {
        return _u(n, ln);
      }
      function tp(n, t) {
        return _u(n, A(t, 2));
      }
      function ep(n) {
        return n && n.length ? Fe(n, ln, zr) : s;
      }
      function rp(n, t) {
        return n && n.length ? Fe(n, A(t, 2), zr) : s;
      }
      var ip = qe(function(n, t) {
        return n * t;
      }, 1), up = ei("round"), fp = qe(function(n, t) {
        return n - t;
      }, 0);
      function sp(n) {
        return n && n.length ? Cr(n, ln) : 0;
      }
      function op(n, t) {
        return n && n.length ? Cr(n, A(t, 2)) : 0;
      }
      return u.after = Oh, u.ary = Gf, u.assign = vg, u.assignIn = ns, u.assignInWith = tr, u.assignWith = wg, u.at = xg, u.before = Hf, u.bind = _i, u.bindAll = R_, u.bindKey = qf, u.castArray = qh, u.chain = Uf, u.chunk = Va, u.compact = ka, u.concat = ja, u.cond = y_, u.conforms = I_, u.constant = Si, u.countBy = sh, u.create = Ag, u.curry = Kf, u.curryRight = $f, u.debounce = zf, u.defaults = Sg, u.defaultsDeep = mg, u.defer = bh, u.delay = Wh, u.difference = nc, u.differenceBy = tc, u.differenceWith = ec, u.drop = rc, u.dropRight = ic, u.dropRightWhile = uc, u.dropWhile = fc, u.fill = sc, u.filter = lh, u.flatMap = hh, u.flatMapDeep = gh, u.flatMapDepth = _h, u.flatten = Pf, u.flattenDeep = oc, u.flattenDepth = lc, u.flip = Ph, u.flow = L_, u.flowRight = C_, u.fromPairs = ac, u.functions = Cg, u.functionsIn = Og, u.groupBy = ph, u.initial = hc, u.intersection = gc, u.intersectionBy = _c, u.intersectionWith = pc, u.invert = Wg, u.invertBy = Pg, u.invokeMap = vh, u.iteratee = mi, u.keyBy = wh, u.keys = J, u.keysIn = on, u.map = Je, u.mapKeys = Fg, u.mapValues = Mg, u.matches = O_, u.matchesProperty = b_, u.memoize = Ve, u.merge = Ug, u.mergeWith = ts, u.method = W_, u.methodOf = P_, u.mixin = Ei, u.negate = ke, u.nthArg = F_, u.omit = Dg, u.omitBy = Ng, u.once = Bh, u.orderBy = xh, u.over = M_, u.overArgs = Fh, u.overEvery = U_, u.overSome = D_, u.partial = pi, u.partialRight = Zf, u.partition = Ah, u.pick = Gg, u.pickBy = es, u.property = ls, u.propertyOf = N_, u.pull = xc, u.pullAll = Ff, u.pullAllBy = Ac, u.pullAllWith = Sc, u.pullAt = mc, u.range = G_, u.rangeRight = H_, u.rearg = Mh, u.reject = Eh, u.remove = Ec, u.rest = Uh, u.reverse = hi, u.sampleSize = yh, u.set = qg, u.setWith = Kg, u.shuffle = Ih, u.slice = Rc, u.sortBy = Ch, u.sortedUniq = bc, u.sortedUniqBy = Wc, u.split = h_, u.spread = Dh, u.tail = Pc, u.take = Bc, u.takeRight = Fc, u.takeRightWhile = Mc, u.takeWhile = Uc, u.tap = kc, u.throttle = Nh, u.thru = Xe, u.toArray = Vf, u.toPairs = rs, u.toPairsIn = is, u.toPath = Z_, u.toPlainObject = jf, u.transform = $g, u.unary = Gh, u.union = Dc, u.unionBy = Nc, u.unionWith = Gc, u.uniq = Hc, u.uniqBy = qc, u.uniqWith = Kc, u.unset = zg, u.unzip = gi, u.unzipWith = Mf, u.update = Zg, u.updateWith = Yg, u.values = Ft, u.valuesIn = Xg, u.without = $c, u.words = ss, u.wrap = Hh, u.xor = zc, u.xorBy = Zc, u.xorWith = Yc, u.zip = Xc, u.zipObject = Jc, u.zipObjectDeep = Qc, u.zipWith = Vc, u.entries = rs, u.entriesIn = is, u.extend = ns, u.extendWith = tr, Ei(u, u), u.add = X_, u.attempt = os, u.camelCase = kg, u.capitalize = us, u.ceil = J_, u.clamp = Jg, u.clone = Kh, u.cloneDeep = zh, u.cloneDeepWith = Zh, u.cloneWith = $h, u.conformsTo = Yh, u.deburr = fs, u.defaultTo = T_, u.divide = Q_, u.endsWith = jg, u.eq = Cn, u.escape = n_, u.escapeRegExp = t_, u.every = oh, u.find = ah, u.findIndex = bf, u.findKey = Eg, u.findLast = ch, u.findLastIndex = Wf, u.findLastKey = Rg, u.floor = V_, u.forEach = Df, u.forEachRight = Nf, u.forIn = yg, u.forInRight = Ig, u.forOwn = Tg, u.forOwnRight = Lg, u.get = wi, u.gt = Xh, u.gte = Jh, u.has = bg, u.hasIn = xi, u.head = Bf, u.identity = ln, u.includes = dh, u.indexOf = cc, u.inRange = Qg, u.invoke = Bg, u.isArguments = pt, u.isArray = R, u.isArrayBuffer = Qh, u.isArrayLike = sn, u.isArrayLikeObject = $, u.isBoolean = Vh, u.isBuffer = it, u.isDate = kh, u.isElement = jh, u.isEmpty = ng, u.isEqual = tg, u.isEqualWith = eg, u.isError = di, u.isFinite = rg, u.isFunction = zn, u.isInteger = Yf, u.isLength = je, u.isMap = Xf, u.isMatch = ig, u.isMatchWith = ug, u.isNaN = fg, u.isNative = sg, u.isNil = lg, u.isNull = og, u.isNumber = Jf, u.isObject = q, u.isObjectLike = K, u.isPlainObject = ie, u.isRegExp = vi, u.isSafeInteger = ag, u.isSet = Qf, u.isString = nr, u.isSymbol = gn, u.isTypedArray = Bt, u.isUndefined = cg, u.isWeakMap = hg, u.isWeakSet = gg, u.join = dc, u.kebabCase = e_, u.last = En, u.lastIndexOf = vc, u.lowerCase = r_, u.lowerFirst = i_, u.lt = _g, u.lte = pg, u.max = k_, u.maxBy = j_, u.mean = np, u.meanBy = tp, u.min = ep, u.minBy = rp, u.stubArray = yi, u.stubFalse = Ii, u.stubObject = q_, u.stubString = K_, u.stubTrue = $_, u.multiply = ip, u.nth = wc, u.noConflict = B_, u.noop = Ri, u.now = Qe, u.pad = u_, u.padEnd = f_, u.padStart = s_, u.parseInt = o_, u.random = Vg, u.reduce = Sh, u.reduceRight = mh, u.repeat = l_, u.replace = a_, u.result = Hg, u.round = up, u.runInContext = a, u.sample = Rh, u.size = Th, u.snakeCase = c_, u.some = Lh, u.sortedIndex = yc, u.sortedIndexBy = Ic, u.sortedIndexOf = Tc, u.sortedLastIndex = Lc, u.sortedLastIndexBy = Cc, u.sortedLastIndexOf = Oc, u.startCase = g_, u.startsWith = __, u.subtract = fp, u.sum = sp, u.sumBy = op, u.template = p_, u.times = z_, u.toFinite = Zn, u.toInteger = y, u.toLength = kf, u.toLower = d_, u.toNumber = Rn, u.toSafeInteger = dg, u.toString = P, u.toUpper = v_, u.trim = w_, u.trimEnd = x_, u.trimStart = A_, u.truncate = S_, u.unescape = m_, u.uniqueId = Y_, u.upperCase = E_, u.upperFirst = Ai, u.each = Df, u.eachRight = Nf, u.first = Bf, Ei(u, function() {
        var n = {};
        return Bn(u, function(t, e) {
          B.call(u.prototype, e) || (n[e] = t);
        }), n;
      }(), { chain: !1 }), u.VERSION = D, wn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        u[n].placeholder = u;
      }), wn(["drop", "take"], function(n, t) {
        C.prototype[n] = function(e) {
          e = e === s ? 1 : Y(y(e), 0);
          var r = this.__filtered__ && !t ? new C(this) : this.clone();
          return r.__filtered__ ? r.__takeCount__ = j(e, r.__takeCount__) : r.__views__.push({
            size: j(e, Pn),
            type: n + (r.__dir__ < 0 ? "Right" : "")
          }), r;
        }, C.prototype[n + "Right"] = function(e) {
          return this.reverse()[n](e).reverse();
        };
      }), wn(["filter", "map", "takeWhile"], function(n, t) {
        var e = t + 1, r = e == Wi || e == ws;
        C.prototype[n] = function(i) {
          var f = this.clone();
          return f.__iteratees__.push({
            iteratee: A(i, 3),
            type: e
          }), f.__filtered__ = f.__filtered__ || r, f;
        };
      }), wn(["head", "last"], function(n, t) {
        var e = "take" + (t ? "Right" : "");
        C.prototype[n] = function() {
          return this[e](1).value()[0];
        };
      }), wn(["initial", "tail"], function(n, t) {
        var e = "drop" + (t ? "" : "Right");
        C.prototype[n] = function() {
          return this.__filtered__ ? new C(this) : this[e](1);
        };
      }), C.prototype.compact = function() {
        return this.filter(ln);
      }, C.prototype.find = function(n) {
        return this.filter(n).head();
      }, C.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, C.prototype.invokeMap = T(function(n, t) {
        return typeof n == "function" ? new C(this) : this.map(function(e) {
          return kt(e, n, t);
        });
      }), C.prototype.reject = function(n) {
        return this.filter(ke(A(n)));
      }, C.prototype.slice = function(n, t) {
        n = y(n);
        var e = this;
        return e.__filtered__ && (n > 0 || t < 0) ? new C(e) : (n < 0 ? e = e.takeRight(-n) : n && (e = e.drop(n)), t !== s && (t = y(t), e = t < 0 ? e.dropRight(-t) : e.take(t - n)), e);
      }, C.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, C.prototype.toArray = function() {
        return this.take(Pn);
      }, Bn(C.prototype, function(n, t) {
        var e = /^(?:filter|find|map|reject)|While$/.test(t), r = /^(?:head|last)$/.test(t), i = u[r ? "take" + (t == "last" ? "Right" : "") : t], f = r || /^find/.test(t);
        i && (u.prototype[t] = function() {
          var o = this.__wrapped__, l = r ? [1] : arguments, c = o instanceof C, _ = l[0], p = c || R(o), d = function(L) {
            var O = i.apply(u, Vn([L], l));
            return r && v ? O[0] : O;
          };
          p && e && typeof _ == "function" && _.length != 1 && (c = p = !1);
          var v = this.__chain__, x = !!this.__actions__.length, S = f && !v, I = c && !x;
          if (!f && p) {
            o = I ? o : new C(this);
            var m = n.apply(o, l);
            return m.__actions__.push({ func: Xe, args: [d], thisArg: s }), new An(m, v);
          }
          return S && I ? n.apply(this, l) : (m = this.thru(d), S ? r ? m.value()[0] : m.value() : m);
        });
      }), wn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var t = Ae[n], e = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(n);
        u.prototype[n] = function() {
          var i = arguments;
          if (r && !this.__chain__) {
            var f = this.value();
            return t.apply(R(f) ? f : [], i);
          }
          return this[e](function(o) {
            return t.apply(R(o) ? o : [], i);
          });
        };
      }), Bn(C.prototype, function(n, t) {
        var e = u[t];
        if (e) {
          var r = e.name + "";
          B.call(Ct, r) || (Ct[r] = []), Ct[r].push({ name: t, func: e });
        }
      }), Ct[He(s, ut).name] = [{
        name: "wrapper",
        func: s
      }], C.prototype.clone = ml, C.prototype.reverse = El, C.prototype.value = Rl, u.prototype.at = jc, u.prototype.chain = nh, u.prototype.commit = th, u.prototype.next = eh, u.prototype.plant = ih, u.prototype.reverse = uh, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = fh, u.prototype.first = u.prototype.head, zt && (u.prototype[zt] = rh), u;
    }, It = tl();
    st ? ((st.exports = It)._ = It, mr._ = It) : V._ = It;
  }).call(ue);
})(er, er.exports);
var cp = er.exports;
function hp(U) {
  const b = document.createElement("canvas");
  return b.style.display = "block", b.style.width = U.style.width, b.style.height = U.style.height, U.style.position = "relative", b.setAttribute("id", cp.uniqueId("canvas")), U.append(b), b;
}
class gp {
  constructor(b) {
    Q(this, "canvas");
    Q(this, "gl");
    const s = window.devicePixelRatio || 1, D = hp(b), H = D.getBoundingClientRect();
    D.width = H.width * s, D.height = H.height * s, this.canvas = D, this.gl = D.getContext("webgl2", {
      stencil: !1
    });
    const tn = /* @__PURE__ */ new Set();
    tn.add("OES_element_index_uint"), tn.add("OES_vertex_array_object"), tn.add("WEBGL_depth_texture"), tn.forEach((X) => {
      this.gl.getExtension(X);
    });
  }
  init() {
  }
}
class _p extends Set {
}
class pp {
  constructor() {
  }
}
class Li {
  //创建
  create(b) {
  }
  //销毁
  destroy(b) {
  }
  //绑定
  tie(b) {
  }
  //解除绑定
  untie() {
  }
}
class cs extends Li {
  constructor(s, D) {
    super();
    Q(this, "source");
    Q(this, "shader");
    Q(this, "type");
    this.type = D, this.source = s;
  }
  tie(s) {
    this.create(s), this.shaderSource(s, this.source), this.compile(s);
  }
  create(s) {
    this.shader = s.createShader({
      0: s.VERTEX_SHADER,
      1: s.FRAGMENT_SHADER
    }[this.type]);
  }
  shaderSource(s, D) {
    s.shaderSource(this.shader, D);
  }
  compile(s) {
    s.compileShader(this.shader);
  }
}
class dp extends cs {
  constructor(b) {
    super(
      b,
      1
      /* fragment */
    );
  }
}
class vp extends cs {
  constructor(b) {
    super(
      b,
      0
      /* vertex */
    );
  }
}
const rr = class rr extends Li {
  constructor(s, D) {
    super();
    Q(this, "VertexShader");
    Q(this, "FragmentShader");
    Q(this, "id");
    Q(this, "gl");
    Q(this, "m_attributeLocations", {});
    Q(this, "m_uniformLocations", {});
    this.gl = s;
    for (let H of D)
      H.tie(s), H instanceof vp && (this.VertexShader = H), H instanceof dp && (this.FragmentShader = H);
  }
  create(s) {
    this.id = s.createProgram();
  }
  tie(s) {
    this.create(s), this.attach(), this.link(), this.use();
    const D = s.getProgramParameter(this.id, s.ACTIVE_ATTRIBUTES);
    for (let H = 0; H < D; H++) {
      const X = s.getActiveAttrib(this.id, H).name;
      console.log("name", X);
      const fe = s.getAttribLocation(this.id, X);
      console.log("location", fe), this.m_attributeLocations[X] = {
        location: fe
      };
    }
  }
  attach() {
    this.gl.attachShader(this.id, this.VertexShader.shader), this.gl.attachShader(this.id, this.FragmentShader.shader);
  }
  link() {
    this.gl.linkProgram(this.id);
  }
  use() {
    this.gl.useProgram(this.id), rr.current = this;
  }
};
Q(rr, "current");
let Ti = rr;
class wp extends Li {
  constructor() {
    super();
  }
}
class Ci extends wp {
  constructor() {
    super();
  }
  static default() {
    return new Ci();
  }
}
class xp extends Array {
  constructor() {
    super();
    Q(this, "queue", []);
  }
  build(s) {
    this.createQueue(s);
  }
  createQueue(s) {
    const D = [];
    D.push(
      Ci.default()
    ), this.forEach((H) => {
      console.log("i", H), D.push(
        new Ti(s, H.material.shader)
      ), H.material.state.forEach((tn) => {
        D.push(tn);
      }), H.material.uniform.forEach((tn) => {
        D.push(tn);
      }), H.geometry.vbos.forEach(
        (tn) => {
          D.push(tn);
        }
      ), H.geometry.drawers.forEach(
        (tn) => {
          D.push(tn);
        }
      );
    }), this.queue = D;
  }
  destroyQueue(s) {
  }
  render(s) {
    this.destroyQueue(s), this.createQueue(s), this.queue.forEach((D) => {
      D.tie(s);
    }), console.log(this.queue);
  }
}
class Ap {
  constructor() {
  }
}
class mp extends xp {
  constructor() {
    super();
    Q(this, "context");
    Q(this, "background", new Ap());
    Q(this, "model", new _p());
    Q(this, "camera", new pp());
  }
  /*
  挂载 dom 节点
  * */
  mount(s) {
    console.log(s), this.context = new gp(s), this.init();
  }
  /*
  初始化函数
   */
  init() {
  }
  get gl() {
    var s;
    return (s = this.context) == null ? void 0 : s.gl;
  }
  /*
  构建渲染队列
  */
  build() {
    super.build(this.gl);
  }
  /*执行渲染*/
  render() {
    super.render(this.gl);
  }
  add(s) {
    this.push(s);
  }
}
export {
  mp as Scene
};
