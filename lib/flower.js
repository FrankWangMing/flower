var zr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qe = { exports: {} };
var Dd = qe.exports, qa;
function Ud() {
  return qa || (qa = 1, (function(Y, t) {
    (function() {
      var e, s = "4.17.21", a = 200, f = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", d = "Invalid `variable` option passed into `_.template`", p = "__lodash_hash_undefined__", m = 500, x = "__lodash_placeholder__", M = 1, S = 2, A = 4, y = 1, b = 2, T = 1, C = 2, U = 4, W = 8, q = 16, z = 32, F = 64, D = 128, it = 256, et = 512, lt = 30, G = "...", _t = 800, mt = 16, dt = 1, V = 2, kt = 3, Yt = 1 / 0, Ft = 9007199254740991, We = 17976931348623157e292, Wn = NaN, dn = 4294967295, Ka = dn - 1, Za = dn >>> 1, Xa = [
        ["ary", D],
        ["bind", T],
        ["bindKey", C],
        ["curry", W],
        ["curryRight", q],
        ["flip", et],
        ["partial", z],
        ["partialRight", F],
        ["rearg", it]
      ], Vn = "[object Arguments]", Ne = "[object Array]", $a = "[object AsyncFunction]", pe = "[object Boolean]", ge = "[object Date]", Ja = "[object DOMException]", He = "[object Error]", Ye = "[object Function]", cs = "[object GeneratorFunction]", an = "[object Map]", me = "[object Number]", Va = "[object Null]", vn = "[object Object]", as = "[object Promise]", ka = "[object Proxy]", xe = "[object RegExp]", fn = "[object Set]", _e = "[object String]", Ge = "[object Symbol]", Qa = "[object Undefined]", ve = "[object WeakMap]", ja = "[object WeakSet]", Me = "[object ArrayBuffer]", kn = "[object DataView]", Fr = "[object Float32Array]", Br = "[object Float64Array]", Wr = "[object Int8Array]", Nr = "[object Int16Array]", Hr = "[object Int32Array]", Yr = "[object Uint8Array]", Gr = "[object Uint8ClampedArray]", Kr = "[object Uint16Array]", Zr = "[object Uint32Array]", tf = /\b__p \+= '';/g, nf = /\b(__p \+=) '' \+/g, ef = /(__e\(.*?\)|\b__t\)) \+\n'';/g, fs = /&(?:amp|lt|gt|quot|#39);/g, hs = /[&<>"']/g, rf = RegExp(fs.source), sf = RegExp(hs.source), cf = /<%-([\s\S]+?)%>/g, af = /<%([\s\S]+?)%>/g, ls = /<%=([\s\S]+?)%>/g, ff = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, hf = /^\w*$/, lf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Xr = /[\\^$.*+?()[\]{}|]/g, of = RegExp(Xr.source), $r = /^\s+/, uf = /\s/, df = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, pf = /\{\n\/\* \[wrapped with (.+)\] \*/, gf = /,? & /, mf = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, xf = /[()=,{}\[\]\/\s]/, _f = /\\(\\)?/g, vf = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, os = /\w*$/, Mf = /^[-+]0x[0-9a-f]+$/i, wf = /^0b[01]+$/i, yf = /^\[object .+?Constructor\]$/, Af = /^0o[0-7]+$/i, Ef = /^(?:0|[1-9]\d*)$/, Sf = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ke = /($^)/, Tf = /['\n\r\u2028\u2029\\]/g, Ze = "\\ud800-\\udfff", bf = "\\u0300-\\u036f", Lf = "\\ufe20-\\ufe2f", Of = "\\u20d0-\\u20ff", us = bf + Lf + Of, ds = "\\u2700-\\u27bf", ps = "a-z\\xdf-\\xf6\\xf8-\\xff", Rf = "\\xac\\xb1\\xd7\\xf7", If = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Cf = "\\u2000-\\u206f", zf = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", gs = "A-Z\\xc0-\\xd6\\xd8-\\xde", ms = "\\ufe0e\\ufe0f", xs = Rf + If + Cf + zf, Jr = "['’]", Pf = "[" + Ze + "]", _s = "[" + xs + "]", Xe = "[" + us + "]", vs = "\\d+", Df = "[" + ds + "]", Ms = "[" + ps + "]", ws = "[^" + Ze + xs + vs + ds + ps + gs + "]", Vr = "\\ud83c[\\udffb-\\udfff]", Uf = "(?:" + Xe + "|" + Vr + ")", ys = "[^" + Ze + "]", kr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Qr = "[\\ud800-\\udbff][\\udc00-\\udfff]", Qn = "[" + gs + "]", As = "\\u200d", Es = "(?:" + Ms + "|" + ws + ")", qf = "(?:" + Qn + "|" + ws + ")", Ss = "(?:" + Jr + "(?:d|ll|m|re|s|t|ve))?", Ts = "(?:" + Jr + "(?:D|LL|M|RE|S|T|VE))?", bs = Uf + "?", Ls = "[" + ms + "]?", Ff = "(?:" + As + "(?:" + [ys, kr, Qr].join("|") + ")" + Ls + bs + ")*", Bf = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Wf = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Os = Ls + bs + Ff, Nf = "(?:" + [Df, kr, Qr].join("|") + ")" + Os, Hf = "(?:" + [ys + Xe + "?", Xe, kr, Qr, Pf].join("|") + ")", Yf = RegExp(Jr, "g"), Gf = RegExp(Xe, "g"), jr = RegExp(Vr + "(?=" + Vr + ")|" + Hf + Os, "g"), Kf = RegExp([
        Qn + "?" + Ms + "+" + Ss + "(?=" + [_s, Qn, "$"].join("|") + ")",
        qf + "+" + Ts + "(?=" + [_s, Qn + Es, "$"].join("|") + ")",
        Qn + "?" + Es + "+" + Ss,
        Qn + "+" + Ts,
        Wf,
        Bf,
        vs,
        Nf
      ].join("|"), "g"), Zf = RegExp("[" + As + Ze + us + ms + "]"), Xf = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, $f = [
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
      ], Jf = -1, wt = {};
      wt[Fr] = wt[Br] = wt[Wr] = wt[Nr] = wt[Hr] = wt[Yr] = wt[Gr] = wt[Kr] = wt[Zr] = !0, wt[Vn] = wt[Ne] = wt[Me] = wt[pe] = wt[kn] = wt[ge] = wt[He] = wt[Ye] = wt[an] = wt[me] = wt[vn] = wt[xe] = wt[fn] = wt[_e] = wt[ve] = !1;
      var Mt = {};
      Mt[Vn] = Mt[Ne] = Mt[Me] = Mt[kn] = Mt[pe] = Mt[ge] = Mt[Fr] = Mt[Br] = Mt[Wr] = Mt[Nr] = Mt[Hr] = Mt[an] = Mt[me] = Mt[vn] = Mt[xe] = Mt[fn] = Mt[_e] = Mt[Ge] = Mt[Yr] = Mt[Gr] = Mt[Kr] = Mt[Zr] = !0, Mt[He] = Mt[Ye] = Mt[ve] = !1;
      var Vf = {
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
      }, kf = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Qf = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, jf = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, th = parseFloat, nh = parseInt, Rs = typeof zr == "object" && zr && zr.Object === Object && zr, eh = typeof self == "object" && self && self.Object === Object && self, It = Rs || eh || Function("return this")(), ti = t && !t.nodeType && t, Nn = ti && !0 && Y && !Y.nodeType && Y, Is = Nn && Nn.exports === ti, ni = Is && Rs.process, Qt = (function() {
        try {
          var v = Nn && Nn.require && Nn.require("util").types;
          return v || ni && ni.binding && ni.binding("util");
        } catch {
        }
      })(), Cs = Qt && Qt.isArrayBuffer, zs = Qt && Qt.isDate, Ps = Qt && Qt.isMap, Ds = Qt && Qt.isRegExp, Us = Qt && Qt.isSet, qs = Qt && Qt.isTypedArray;
      function Gt(v, L, E) {
        switch (E.length) {
          case 0:
            return v.call(L);
          case 1:
            return v.call(L, E[0]);
          case 2:
            return v.call(L, E[0], E[1]);
          case 3:
            return v.call(L, E[0], E[1], E[2]);
        }
        return v.apply(L, E);
      }
      function rh(v, L, E, B) {
        for (var k = -1, ut = v == null ? 0 : v.length; ++k < ut; ) {
          var bt = v[k];
          L(B, bt, E(bt), v);
        }
        return B;
      }
      function jt(v, L) {
        for (var E = -1, B = v == null ? 0 : v.length; ++E < B && L(v[E], E, v) !== !1; )
          ;
        return v;
      }
      function ih(v, L) {
        for (var E = v == null ? 0 : v.length; E-- && L(v[E], E, v) !== !1; )
          ;
        return v;
      }
      function Fs(v, L) {
        for (var E = -1, B = v == null ? 0 : v.length; ++E < B; )
          if (!L(v[E], E, v))
            return !1;
        return !0;
      }
      function On(v, L) {
        for (var E = -1, B = v == null ? 0 : v.length, k = 0, ut = []; ++E < B; ) {
          var bt = v[E];
          L(bt, E, v) && (ut[k++] = bt);
        }
        return ut;
      }
      function $e(v, L) {
        var E = v == null ? 0 : v.length;
        return !!E && jn(v, L, 0) > -1;
      }
      function ei(v, L, E) {
        for (var B = -1, k = v == null ? 0 : v.length; ++B < k; )
          if (E(L, v[B]))
            return !0;
        return !1;
      }
      function yt(v, L) {
        for (var E = -1, B = v == null ? 0 : v.length, k = Array(B); ++E < B; )
          k[E] = L(v[E], E, v);
        return k;
      }
      function Rn(v, L) {
        for (var E = -1, B = L.length, k = v.length; ++E < B; )
          v[k + E] = L[E];
        return v;
      }
      function ri(v, L, E, B) {
        var k = -1, ut = v == null ? 0 : v.length;
        for (B && ut && (E = v[++k]); ++k < ut; )
          E = L(E, v[k], k, v);
        return E;
      }
      function sh(v, L, E, B) {
        var k = v == null ? 0 : v.length;
        for (B && k && (E = v[--k]); k--; )
          E = L(E, v[k], k, v);
        return E;
      }
      function ii(v, L) {
        for (var E = -1, B = v == null ? 0 : v.length; ++E < B; )
          if (L(v[E], E, v))
            return !0;
        return !1;
      }
      var ch = si("length");
      function ah(v) {
        return v.split("");
      }
      function fh(v) {
        return v.match(mf) || [];
      }
      function Bs(v, L, E) {
        var B;
        return E(v, function(k, ut, bt) {
          if (L(k, ut, bt))
            return B = ut, !1;
        }), B;
      }
      function Je(v, L, E, B) {
        for (var k = v.length, ut = E + (B ? 1 : -1); B ? ut-- : ++ut < k; )
          if (L(v[ut], ut, v))
            return ut;
        return -1;
      }
      function jn(v, L, E) {
        return L === L ? Mh(v, L, E) : Je(v, Ws, E);
      }
      function hh(v, L, E, B) {
        for (var k = E - 1, ut = v.length; ++k < ut; )
          if (B(v[k], L))
            return k;
        return -1;
      }
      function Ws(v) {
        return v !== v;
      }
      function Ns(v, L) {
        var E = v == null ? 0 : v.length;
        return E ? ai(v, L) / E : Wn;
      }
      function si(v) {
        return function(L) {
          return L == null ? e : L[v];
        };
      }
      function ci(v) {
        return function(L) {
          return v == null ? e : v[L];
        };
      }
      function Hs(v, L, E, B, k) {
        return k(v, function(ut, bt, vt) {
          E = B ? (B = !1, ut) : L(E, ut, bt, vt);
        }), E;
      }
      function lh(v, L) {
        var E = v.length;
        for (v.sort(L); E--; )
          v[E] = v[E].value;
        return v;
      }
      function ai(v, L) {
        for (var E, B = -1, k = v.length; ++B < k; ) {
          var ut = L(v[B]);
          ut !== e && (E = E === e ? ut : E + ut);
        }
        return E;
      }
      function fi(v, L) {
        for (var E = -1, B = Array(v); ++E < v; )
          B[E] = L(E);
        return B;
      }
      function oh(v, L) {
        return yt(L, function(E) {
          return [E, v[E]];
        });
      }
      function Ys(v) {
        return v && v.slice(0, Xs(v) + 1).replace($r, "");
      }
      function Kt(v) {
        return function(L) {
          return v(L);
        };
      }
      function hi(v, L) {
        return yt(L, function(E) {
          return v[E];
        });
      }
      function we(v, L) {
        return v.has(L);
      }
      function Gs(v, L) {
        for (var E = -1, B = v.length; ++E < B && jn(L, v[E], 0) > -1; )
          ;
        return E;
      }
      function Ks(v, L) {
        for (var E = v.length; E-- && jn(L, v[E], 0) > -1; )
          ;
        return E;
      }
      function uh(v, L) {
        for (var E = v.length, B = 0; E--; )
          v[E] === L && ++B;
        return B;
      }
      var dh = ci(Vf), ph = ci(kf);
      function gh(v) {
        return "\\" + jf[v];
      }
      function mh(v, L) {
        return v == null ? e : v[L];
      }
      function te(v) {
        return Zf.test(v);
      }
      function xh(v) {
        return Xf.test(v);
      }
      function _h(v) {
        for (var L, E = []; !(L = v.next()).done; )
          E.push(L.value);
        return E;
      }
      function li(v) {
        var L = -1, E = Array(v.size);
        return v.forEach(function(B, k) {
          E[++L] = [k, B];
        }), E;
      }
      function Zs(v, L) {
        return function(E) {
          return v(L(E));
        };
      }
      function In(v, L) {
        for (var E = -1, B = v.length, k = 0, ut = []; ++E < B; ) {
          var bt = v[E];
          (bt === L || bt === x) && (v[E] = x, ut[k++] = E);
        }
        return ut;
      }
      function Ve(v) {
        var L = -1, E = Array(v.size);
        return v.forEach(function(B) {
          E[++L] = B;
        }), E;
      }
      function vh(v) {
        var L = -1, E = Array(v.size);
        return v.forEach(function(B) {
          E[++L] = [B, B];
        }), E;
      }
      function Mh(v, L, E) {
        for (var B = E - 1, k = v.length; ++B < k; )
          if (v[B] === L)
            return B;
        return -1;
      }
      function wh(v, L, E) {
        for (var B = E + 1; B--; )
          if (v[B] === L)
            return B;
        return B;
      }
      function ne(v) {
        return te(v) ? Ah(v) : ch(v);
      }
      function hn(v) {
        return te(v) ? Eh(v) : ah(v);
      }
      function Xs(v) {
        for (var L = v.length; L-- && uf.test(v.charAt(L)); )
          ;
        return L;
      }
      var yh = ci(Qf);
      function Ah(v) {
        for (var L = jr.lastIndex = 0; jr.test(v); )
          ++L;
        return L;
      }
      function Eh(v) {
        return v.match(jr) || [];
      }
      function Sh(v) {
        return v.match(Kf) || [];
      }
      var Th = (function v(L) {
        L = L == null ? It : ee.defaults(It.Object(), L, ee.pick(It, $f));
        var E = L.Array, B = L.Date, k = L.Error, ut = L.Function, bt = L.Math, vt = L.Object, oi = L.RegExp, bh = L.String, tn = L.TypeError, ke = E.prototype, Lh = ut.prototype, re = vt.prototype, Qe = L["__core-js_shared__"], je = Lh.toString, xt = re.hasOwnProperty, Oh = 0, $s = (function() {
          var n = /[^.]+$/.exec(Qe && Qe.keys && Qe.keys.IE_PROTO || "");
          return n ? "Symbol(src)_1." + n : "";
        })(), tr = re.toString, Rh = je.call(vt), Ih = It._, Ch = oi(
          "^" + je.call(xt).replace(Xr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), nr = Is ? L.Buffer : e, Cn = L.Symbol, er = L.Uint8Array, Js = nr ? nr.allocUnsafe : e, rr = Zs(vt.getPrototypeOf, vt), Vs = vt.create, ks = re.propertyIsEnumerable, ir = ke.splice, Qs = Cn ? Cn.isConcatSpreadable : e, ye = Cn ? Cn.iterator : e, Hn = Cn ? Cn.toStringTag : e, sr = (function() {
          try {
            var n = Xn(vt, "defineProperty");
            return n({}, "", {}), n;
          } catch {
          }
        })(), zh = L.clearTimeout !== It.clearTimeout && L.clearTimeout, Ph = B && B.now !== It.Date.now && B.now, Dh = L.setTimeout !== It.setTimeout && L.setTimeout, cr = bt.ceil, ar = bt.floor, ui = vt.getOwnPropertySymbols, Uh = nr ? nr.isBuffer : e, js = L.isFinite, qh = ke.join, Fh = Zs(vt.keys, vt), Lt = bt.max, zt = bt.min, Bh = B.now, Wh = L.parseInt, tc = bt.random, Nh = ke.reverse, di = Xn(L, "DataView"), Ae = Xn(L, "Map"), pi = Xn(L, "Promise"), ie = Xn(L, "Set"), Ee = Xn(L, "WeakMap"), Se = Xn(vt, "create"), fr = Ee && new Ee(), se = {}, Hh = $n(di), Yh = $n(Ae), Gh = $n(pi), Kh = $n(ie), Zh = $n(Ee), hr = Cn ? Cn.prototype : e, Te = hr ? hr.valueOf : e, nc = hr ? hr.toString : e;
        function o(n) {
          if (Et(n) && !j(n) && !(n instanceof ft)) {
            if (n instanceof nn)
              return n;
            if (xt.call(n, "__wrapped__"))
              return ea(n);
          }
          return new nn(n);
        }
        var ce = /* @__PURE__ */ (function() {
          function n() {
          }
          return function(r) {
            if (!At(r))
              return {};
            if (Vs)
              return Vs(r);
            n.prototype = r;
            var i = new n();
            return n.prototype = e, i;
          };
        })();
        function lr() {
        }
        function nn(n, r) {
          this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!r, this.__index__ = 0, this.__values__ = e;
        }
        o.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: cf,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: af,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: ls,
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
            _: o
          }
        }, o.prototype = lr.prototype, o.prototype.constructor = o, nn.prototype = ce(lr.prototype), nn.prototype.constructor = nn;
        function ft(n) {
          this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = dn, this.__views__ = [];
        }
        function Xh() {
          var n = new ft(this.__wrapped__);
          return n.__actions__ = Bt(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Bt(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Bt(this.__views__), n;
        }
        function $h() {
          if (this.__filtered__) {
            var n = new ft(this);
            n.__dir__ = -1, n.__filtered__ = !0;
          } else
            n = this.clone(), n.__dir__ *= -1;
          return n;
        }
        function Jh() {
          var n = this.__wrapped__.value(), r = this.__dir__, i = j(n), c = r < 0, h = i ? n.length : 0, u = al(0, h, this.__views__), g = u.start, _ = u.end, w = _ - g, O = c ? _ : g - 1, R = this.__iteratees__, I = R.length, P = 0, N = zt(w, this.__takeCount__);
          if (!i || !c && h == w && N == w)
            return Sc(n, this.__actions__);
          var Z = [];
          t:
            for (; w-- && P < N; ) {
              O += r;
              for (var rt = -1, X = n[O]; ++rt < I; ) {
                var ct = R[rt], ht = ct.iteratee, $t = ct.type, qt = ht(X);
                if ($t == V)
                  X = qt;
                else if (!qt) {
                  if ($t == dt)
                    continue t;
                  break t;
                }
              }
              Z[P++] = X;
            }
          return Z;
        }
        ft.prototype = ce(lr.prototype), ft.prototype.constructor = ft;
        function Yn(n) {
          var r = -1, i = n == null ? 0 : n.length;
          for (this.clear(); ++r < i; ) {
            var c = n[r];
            this.set(c[0], c[1]);
          }
        }
        function Vh() {
          this.__data__ = Se ? Se(null) : {}, this.size = 0;
        }
        function kh(n) {
          var r = this.has(n) && delete this.__data__[n];
          return this.size -= r ? 1 : 0, r;
        }
        function Qh(n) {
          var r = this.__data__;
          if (Se) {
            var i = r[n];
            return i === p ? e : i;
          }
          return xt.call(r, n) ? r[n] : e;
        }
        function jh(n) {
          var r = this.__data__;
          return Se ? r[n] !== e : xt.call(r, n);
        }
        function t1(n, r) {
          var i = this.__data__;
          return this.size += this.has(n) ? 0 : 1, i[n] = Se && r === e ? p : r, this;
        }
        Yn.prototype.clear = Vh, Yn.prototype.delete = kh, Yn.prototype.get = Qh, Yn.prototype.has = jh, Yn.prototype.set = t1;
        function Mn(n) {
          var r = -1, i = n == null ? 0 : n.length;
          for (this.clear(); ++r < i; ) {
            var c = n[r];
            this.set(c[0], c[1]);
          }
        }
        function n1() {
          this.__data__ = [], this.size = 0;
        }
        function e1(n) {
          var r = this.__data__, i = or(r, n);
          if (i < 0)
            return !1;
          var c = r.length - 1;
          return i == c ? r.pop() : ir.call(r, i, 1), --this.size, !0;
        }
        function r1(n) {
          var r = this.__data__, i = or(r, n);
          return i < 0 ? e : r[i][1];
        }
        function i1(n) {
          return or(this.__data__, n) > -1;
        }
        function s1(n, r) {
          var i = this.__data__, c = or(i, n);
          return c < 0 ? (++this.size, i.push([n, r])) : i[c][1] = r, this;
        }
        Mn.prototype.clear = n1, Mn.prototype.delete = e1, Mn.prototype.get = r1, Mn.prototype.has = i1, Mn.prototype.set = s1;
        function wn(n) {
          var r = -1, i = n == null ? 0 : n.length;
          for (this.clear(); ++r < i; ) {
            var c = n[r];
            this.set(c[0], c[1]);
          }
        }
        function c1() {
          this.size = 0, this.__data__ = {
            hash: new Yn(),
            map: new (Ae || Mn)(),
            string: new Yn()
          };
        }
        function a1(n) {
          var r = Ar(this, n).delete(n);
          return this.size -= r ? 1 : 0, r;
        }
        function f1(n) {
          return Ar(this, n).get(n);
        }
        function h1(n) {
          return Ar(this, n).has(n);
        }
        function l1(n, r) {
          var i = Ar(this, n), c = i.size;
          return i.set(n, r), this.size += i.size == c ? 0 : 1, this;
        }
        wn.prototype.clear = c1, wn.prototype.delete = a1, wn.prototype.get = f1, wn.prototype.has = h1, wn.prototype.set = l1;
        function Gn(n) {
          var r = -1, i = n == null ? 0 : n.length;
          for (this.__data__ = new wn(); ++r < i; )
            this.add(n[r]);
        }
        function o1(n) {
          return this.__data__.set(n, p), this;
        }
        function u1(n) {
          return this.__data__.has(n);
        }
        Gn.prototype.add = Gn.prototype.push = o1, Gn.prototype.has = u1;
        function ln(n) {
          var r = this.__data__ = new Mn(n);
          this.size = r.size;
        }
        function d1() {
          this.__data__ = new Mn(), this.size = 0;
        }
        function p1(n) {
          var r = this.__data__, i = r.delete(n);
          return this.size = r.size, i;
        }
        function g1(n) {
          return this.__data__.get(n);
        }
        function m1(n) {
          return this.__data__.has(n);
        }
        function x1(n, r) {
          var i = this.__data__;
          if (i instanceof Mn) {
            var c = i.__data__;
            if (!Ae || c.length < a - 1)
              return c.push([n, r]), this.size = ++i.size, this;
            i = this.__data__ = new wn(c);
          }
          return i.set(n, r), this.size = i.size, this;
        }
        ln.prototype.clear = d1, ln.prototype.delete = p1, ln.prototype.get = g1, ln.prototype.has = m1, ln.prototype.set = x1;
        function ec(n, r) {
          var i = j(n), c = !i && Jn(n), h = !i && !c && qn(n), u = !i && !c && !h && le(n), g = i || c || h || u, _ = g ? fi(n.length, bh) : [], w = _.length;
          for (var O in n)
            (r || xt.call(n, O)) && !(g && // Safari 9 has enumerable `arguments.length` in strict mode.
            (O == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            h && (O == "offset" || O == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            u && (O == "buffer" || O == "byteLength" || O == "byteOffset") || // Skip index properties.
            Sn(O, w))) && _.push(O);
          return _;
        }
        function rc(n) {
          var r = n.length;
          return r ? n[Si(0, r - 1)] : e;
        }
        function _1(n, r) {
          return Er(Bt(n), Kn(r, 0, n.length));
        }
        function v1(n) {
          return Er(Bt(n));
        }
        function gi(n, r, i) {
          (i !== e && !on(n[r], i) || i === e && !(r in n)) && yn(n, r, i);
        }
        function be(n, r, i) {
          var c = n[r];
          (!(xt.call(n, r) && on(c, i)) || i === e && !(r in n)) && yn(n, r, i);
        }
        function or(n, r) {
          for (var i = n.length; i--; )
            if (on(n[i][0], r))
              return i;
          return -1;
        }
        function M1(n, r, i, c) {
          return zn(n, function(h, u, g) {
            r(c, h, i(h), g);
          }), c;
        }
        function ic(n, r) {
          return n && gn(r, Rt(r), n);
        }
        function w1(n, r) {
          return n && gn(r, Nt(r), n);
        }
        function yn(n, r, i) {
          r == "__proto__" && sr ? sr(n, r, {
            configurable: !0,
            enumerable: !0,
            value: i,
            writable: !0
          }) : n[r] = i;
        }
        function mi(n, r) {
          for (var i = -1, c = r.length, h = E(c), u = n == null; ++i < c; )
            h[i] = u ? e : Vi(n, r[i]);
          return h;
        }
        function Kn(n, r, i) {
          return n === n && (i !== e && (n = n <= i ? n : i), r !== e && (n = n >= r ? n : r)), n;
        }
        function en(n, r, i, c, h, u) {
          var g, _ = r & M, w = r & S, O = r & A;
          if (i && (g = h ? i(n, c, h, u) : i(n)), g !== e)
            return g;
          if (!At(n))
            return n;
          var R = j(n);
          if (R) {
            if (g = hl(n), !_)
              return Bt(n, g);
          } else {
            var I = Pt(n), P = I == Ye || I == cs;
            if (qn(n))
              return Lc(n, _);
            if (I == vn || I == Vn || P && !h) {
              if (g = w || P ? {} : Xc(n), !_)
                return w ? Q1(n, w1(g, n)) : k1(n, ic(g, n));
            } else {
              if (!Mt[I])
                return h ? n : {};
              g = ll(n, I, _);
            }
          }
          u || (u = new ln());
          var N = u.get(n);
          if (N)
            return N;
          u.set(n, g), ya(n) ? n.forEach(function(X) {
            g.add(en(X, r, i, X, n, u));
          }) : Ma(n) && n.forEach(function(X, ct) {
            g.set(ct, en(X, r, i, ct, n, u));
          });
          var Z = O ? w ? Ui : Di : w ? Nt : Rt, rt = R ? e : Z(n);
          return jt(rt || n, function(X, ct) {
            rt && (ct = X, X = n[ct]), be(g, ct, en(X, r, i, ct, n, u));
          }), g;
        }
        function y1(n) {
          var r = Rt(n);
          return function(i) {
            return sc(i, n, r);
          };
        }
        function sc(n, r, i) {
          var c = i.length;
          if (n == null)
            return !c;
          for (n = vt(n); c--; ) {
            var h = i[c], u = r[h], g = n[h];
            if (g === e && !(h in n) || !u(g))
              return !1;
          }
          return !0;
        }
        function cc(n, r, i) {
          if (typeof n != "function")
            throw new tn(l);
          return Pe(function() {
            n.apply(e, i);
          }, r);
        }
        function Le(n, r, i, c) {
          var h = -1, u = $e, g = !0, _ = n.length, w = [], O = r.length;
          if (!_)
            return w;
          i && (r = yt(r, Kt(i))), c ? (u = ei, g = !1) : r.length >= a && (u = we, g = !1, r = new Gn(r));
          t:
            for (; ++h < _; ) {
              var R = n[h], I = i == null ? R : i(R);
              if (R = c || R !== 0 ? R : 0, g && I === I) {
                for (var P = O; P--; )
                  if (r[P] === I)
                    continue t;
                w.push(R);
              } else u(r, I, c) || w.push(R);
            }
          return w;
        }
        var zn = zc(pn), ac = zc(_i, !0);
        function A1(n, r) {
          var i = !0;
          return zn(n, function(c, h, u) {
            return i = !!r(c, h, u), i;
          }), i;
        }
        function ur(n, r, i) {
          for (var c = -1, h = n.length; ++c < h; ) {
            var u = n[c], g = r(u);
            if (g != null && (_ === e ? g === g && !Xt(g) : i(g, _)))
              var _ = g, w = u;
          }
          return w;
        }
        function E1(n, r, i, c) {
          var h = n.length;
          for (i = tt(i), i < 0 && (i = -i > h ? 0 : h + i), c = c === e || c > h ? h : tt(c), c < 0 && (c += h), c = i > c ? 0 : Ea(c); i < c; )
            n[i++] = r;
          return n;
        }
        function fc(n, r) {
          var i = [];
          return zn(n, function(c, h, u) {
            r(c, h, u) && i.push(c);
          }), i;
        }
        function Ct(n, r, i, c, h) {
          var u = -1, g = n.length;
          for (i || (i = ul), h || (h = []); ++u < g; ) {
            var _ = n[u];
            r > 0 && i(_) ? r > 1 ? Ct(_, r - 1, i, c, h) : Rn(h, _) : c || (h[h.length] = _);
          }
          return h;
        }
        var xi = Pc(), hc = Pc(!0);
        function pn(n, r) {
          return n && xi(n, r, Rt);
        }
        function _i(n, r) {
          return n && hc(n, r, Rt);
        }
        function dr(n, r) {
          return On(r, function(i) {
            return Tn(n[i]);
          });
        }
        function Zn(n, r) {
          r = Dn(r, n);
          for (var i = 0, c = r.length; n != null && i < c; )
            n = n[mn(r[i++])];
          return i && i == c ? n : e;
        }
        function lc(n, r, i) {
          var c = r(n);
          return j(n) ? c : Rn(c, i(n));
        }
        function Dt(n) {
          return n == null ? n === e ? Qa : Va : Hn && Hn in vt(n) ? cl(n) : vl(n);
        }
        function vi(n, r) {
          return n > r;
        }
        function S1(n, r) {
          return n != null && xt.call(n, r);
        }
        function T1(n, r) {
          return n != null && r in vt(n);
        }
        function b1(n, r, i) {
          return n >= zt(r, i) && n < Lt(r, i);
        }
        function Mi(n, r, i) {
          for (var c = i ? ei : $e, h = n[0].length, u = n.length, g = u, _ = E(u), w = 1 / 0, O = []; g--; ) {
            var R = n[g];
            g && r && (R = yt(R, Kt(r))), w = zt(R.length, w), _[g] = !i && (r || h >= 120 && R.length >= 120) ? new Gn(g && R) : e;
          }
          R = n[0];
          var I = -1, P = _[0];
          t:
            for (; ++I < h && O.length < w; ) {
              var N = R[I], Z = r ? r(N) : N;
              if (N = i || N !== 0 ? N : 0, !(P ? we(P, Z) : c(O, Z, i))) {
                for (g = u; --g; ) {
                  var rt = _[g];
                  if (!(rt ? we(rt, Z) : c(n[g], Z, i)))
                    continue t;
                }
                P && P.push(Z), O.push(N);
              }
            }
          return O;
        }
        function L1(n, r, i, c) {
          return pn(n, function(h, u, g) {
            r(c, i(h), u, g);
          }), c;
        }
        function Oe(n, r, i) {
          r = Dn(r, n), n = kc(n, r);
          var c = n == null ? n : n[mn(sn(r))];
          return c == null ? e : Gt(c, n, i);
        }
        function oc(n) {
          return Et(n) && Dt(n) == Vn;
        }
        function O1(n) {
          return Et(n) && Dt(n) == Me;
        }
        function R1(n) {
          return Et(n) && Dt(n) == ge;
        }
        function Re(n, r, i, c, h) {
          return n === r ? !0 : n == null || r == null || !Et(n) && !Et(r) ? n !== n && r !== r : I1(n, r, i, c, Re, h);
        }
        function I1(n, r, i, c, h, u) {
          var g = j(n), _ = j(r), w = g ? Ne : Pt(n), O = _ ? Ne : Pt(r);
          w = w == Vn ? vn : w, O = O == Vn ? vn : O;
          var R = w == vn, I = O == vn, P = w == O;
          if (P && qn(n)) {
            if (!qn(r))
              return !1;
            g = !0, R = !1;
          }
          if (P && !R)
            return u || (u = new ln()), g || le(n) ? Gc(n, r, i, c, h, u) : il(n, r, w, i, c, h, u);
          if (!(i & y)) {
            var N = R && xt.call(n, "__wrapped__"), Z = I && xt.call(r, "__wrapped__");
            if (N || Z) {
              var rt = N ? n.value() : n, X = Z ? r.value() : r;
              return u || (u = new ln()), h(rt, X, i, c, u);
            }
          }
          return P ? (u || (u = new ln()), sl(n, r, i, c, h, u)) : !1;
        }
        function C1(n) {
          return Et(n) && Pt(n) == an;
        }
        function wi(n, r, i, c) {
          var h = i.length, u = h, g = !c;
          if (n == null)
            return !u;
          for (n = vt(n); h--; ) {
            var _ = i[h];
            if (g && _[2] ? _[1] !== n[_[0]] : !(_[0] in n))
              return !1;
          }
          for (; ++h < u; ) {
            _ = i[h];
            var w = _[0], O = n[w], R = _[1];
            if (g && _[2]) {
              if (O === e && !(w in n))
                return !1;
            } else {
              var I = new ln();
              if (c)
                var P = c(O, R, w, n, r, I);
              if (!(P === e ? Re(R, O, y | b, c, I) : P))
                return !1;
            }
          }
          return !0;
        }
        function uc(n) {
          if (!At(n) || pl(n))
            return !1;
          var r = Tn(n) ? Ch : yf;
          return r.test($n(n));
        }
        function z1(n) {
          return Et(n) && Dt(n) == xe;
        }
        function P1(n) {
          return Et(n) && Pt(n) == fn;
        }
        function D1(n) {
          return Et(n) && Rr(n.length) && !!wt[Dt(n)];
        }
        function dc(n) {
          return typeof n == "function" ? n : n == null ? Ht : typeof n == "object" ? j(n) ? mc(n[0], n[1]) : gc(n) : Da(n);
        }
        function yi(n) {
          if (!ze(n))
            return Fh(n);
          var r = [];
          for (var i in vt(n))
            xt.call(n, i) && i != "constructor" && r.push(i);
          return r;
        }
        function U1(n) {
          if (!At(n))
            return _l(n);
          var r = ze(n), i = [];
          for (var c in n)
            c == "constructor" && (r || !xt.call(n, c)) || i.push(c);
          return i;
        }
        function Ai(n, r) {
          return n < r;
        }
        function pc(n, r) {
          var i = -1, c = Wt(n) ? E(n.length) : [];
          return zn(n, function(h, u, g) {
            c[++i] = r(h, u, g);
          }), c;
        }
        function gc(n) {
          var r = Fi(n);
          return r.length == 1 && r[0][2] ? Jc(r[0][0], r[0][1]) : function(i) {
            return i === n || wi(i, n, r);
          };
        }
        function mc(n, r) {
          return Wi(n) && $c(r) ? Jc(mn(n), r) : function(i) {
            var c = Vi(i, n);
            return c === e && c === r ? ki(i, n) : Re(r, c, y | b);
          };
        }
        function pr(n, r, i, c, h) {
          n !== r && xi(r, function(u, g) {
            if (h || (h = new ln()), At(u))
              q1(n, r, g, i, pr, c, h);
            else {
              var _ = c ? c(Hi(n, g), u, g + "", n, r, h) : e;
              _ === e && (_ = u), gi(n, g, _);
            }
          }, Nt);
        }
        function q1(n, r, i, c, h, u, g) {
          var _ = Hi(n, i), w = Hi(r, i), O = g.get(w);
          if (O) {
            gi(n, i, O);
            return;
          }
          var R = u ? u(_, w, i + "", n, r, g) : e, I = R === e;
          if (I) {
            var P = j(w), N = !P && qn(w), Z = !P && !N && le(w);
            R = w, P || N || Z ? j(_) ? R = _ : St(_) ? R = Bt(_) : N ? (I = !1, R = Lc(w, !0)) : Z ? (I = !1, R = Oc(w, !0)) : R = [] : De(w) || Jn(w) ? (R = _, Jn(_) ? R = Sa(_) : (!At(_) || Tn(_)) && (R = Xc(w))) : I = !1;
          }
          I && (g.set(w, R), h(R, w, c, u, g), g.delete(w)), gi(n, i, R);
        }
        function xc(n, r) {
          var i = n.length;
          if (i)
            return r += r < 0 ? i : 0, Sn(r, i) ? n[r] : e;
        }
        function _c(n, r, i) {
          r.length ? r = yt(r, function(u) {
            return j(u) ? function(g) {
              return Zn(g, u.length === 1 ? u[0] : u);
            } : u;
          }) : r = [Ht];
          var c = -1;
          r = yt(r, Kt(K()));
          var h = pc(n, function(u, g, _) {
            var w = yt(r, function(O) {
              return O(u);
            });
            return { criteria: w, index: ++c, value: u };
          });
          return lh(h, function(u, g) {
            return V1(u, g, i);
          });
        }
        function F1(n, r) {
          return vc(n, r, function(i, c) {
            return ki(n, c);
          });
        }
        function vc(n, r, i) {
          for (var c = -1, h = r.length, u = {}; ++c < h; ) {
            var g = r[c], _ = Zn(n, g);
            i(_, g) && Ie(u, Dn(g, n), _);
          }
          return u;
        }
        function B1(n) {
          return function(r) {
            return Zn(r, n);
          };
        }
        function Ei(n, r, i, c) {
          var h = c ? hh : jn, u = -1, g = r.length, _ = n;
          for (n === r && (r = Bt(r)), i && (_ = yt(n, Kt(i))); ++u < g; )
            for (var w = 0, O = r[u], R = i ? i(O) : O; (w = h(_, R, w, c)) > -1; )
              _ !== n && ir.call(_, w, 1), ir.call(n, w, 1);
          return n;
        }
        function Mc(n, r) {
          for (var i = n ? r.length : 0, c = i - 1; i--; ) {
            var h = r[i];
            if (i == c || h !== u) {
              var u = h;
              Sn(h) ? ir.call(n, h, 1) : Li(n, h);
            }
          }
          return n;
        }
        function Si(n, r) {
          return n + ar(tc() * (r - n + 1));
        }
        function W1(n, r, i, c) {
          for (var h = -1, u = Lt(cr((r - n) / (i || 1)), 0), g = E(u); u--; )
            g[c ? u : ++h] = n, n += i;
          return g;
        }
        function Ti(n, r) {
          var i = "";
          if (!n || r < 1 || r > Ft)
            return i;
          do
            r % 2 && (i += n), r = ar(r / 2), r && (n += n);
          while (r);
          return i;
        }
        function st(n, r) {
          return Yi(Vc(n, r, Ht), n + "");
        }
        function N1(n) {
          return rc(oe(n));
        }
        function H1(n, r) {
          var i = oe(n);
          return Er(i, Kn(r, 0, i.length));
        }
        function Ie(n, r, i, c) {
          if (!At(n))
            return n;
          r = Dn(r, n);
          for (var h = -1, u = r.length, g = u - 1, _ = n; _ != null && ++h < u; ) {
            var w = mn(r[h]), O = i;
            if (w === "__proto__" || w === "constructor" || w === "prototype")
              return n;
            if (h != g) {
              var R = _[w];
              O = c ? c(R, w, _) : e, O === e && (O = At(R) ? R : Sn(r[h + 1]) ? [] : {});
            }
            be(_, w, O), _ = _[w];
          }
          return n;
        }
        var wc = fr ? function(n, r) {
          return fr.set(n, r), n;
        } : Ht, Y1 = sr ? function(n, r) {
          return sr(n, "toString", {
            configurable: !0,
            enumerable: !1,
            value: ji(r),
            writable: !0
          });
        } : Ht;
        function G1(n) {
          return Er(oe(n));
        }
        function rn(n, r, i) {
          var c = -1, h = n.length;
          r < 0 && (r = -r > h ? 0 : h + r), i = i > h ? h : i, i < 0 && (i += h), h = r > i ? 0 : i - r >>> 0, r >>>= 0;
          for (var u = E(h); ++c < h; )
            u[c] = n[c + r];
          return u;
        }
        function K1(n, r) {
          var i;
          return zn(n, function(c, h, u) {
            return i = r(c, h, u), !i;
          }), !!i;
        }
        function gr(n, r, i) {
          var c = 0, h = n == null ? c : n.length;
          if (typeof r == "number" && r === r && h <= Za) {
            for (; c < h; ) {
              var u = c + h >>> 1, g = n[u];
              g !== null && !Xt(g) && (i ? g <= r : g < r) ? c = u + 1 : h = u;
            }
            return h;
          }
          return bi(n, r, Ht, i);
        }
        function bi(n, r, i, c) {
          var h = 0, u = n == null ? 0 : n.length;
          if (u === 0)
            return 0;
          r = i(r);
          for (var g = r !== r, _ = r === null, w = Xt(r), O = r === e; h < u; ) {
            var R = ar((h + u) / 2), I = i(n[R]), P = I !== e, N = I === null, Z = I === I, rt = Xt(I);
            if (g)
              var X = c || Z;
            else O ? X = Z && (c || P) : _ ? X = Z && P && (c || !N) : w ? X = Z && P && !N && (c || !rt) : N || rt ? X = !1 : X = c ? I <= r : I < r;
            X ? h = R + 1 : u = R;
          }
          return zt(u, Ka);
        }
        function yc(n, r) {
          for (var i = -1, c = n.length, h = 0, u = []; ++i < c; ) {
            var g = n[i], _ = r ? r(g) : g;
            if (!i || !on(_, w)) {
              var w = _;
              u[h++] = g === 0 ? 0 : g;
            }
          }
          return u;
        }
        function Ac(n) {
          return typeof n == "number" ? n : Xt(n) ? Wn : +n;
        }
        function Zt(n) {
          if (typeof n == "string")
            return n;
          if (j(n))
            return yt(n, Zt) + "";
          if (Xt(n))
            return nc ? nc.call(n) : "";
          var r = n + "";
          return r == "0" && 1 / n == -Yt ? "-0" : r;
        }
        function Pn(n, r, i) {
          var c = -1, h = $e, u = n.length, g = !0, _ = [], w = _;
          if (i)
            g = !1, h = ei;
          else if (u >= a) {
            var O = r ? null : el(n);
            if (O)
              return Ve(O);
            g = !1, h = we, w = new Gn();
          } else
            w = r ? [] : _;
          t:
            for (; ++c < u; ) {
              var R = n[c], I = r ? r(R) : R;
              if (R = i || R !== 0 ? R : 0, g && I === I) {
                for (var P = w.length; P--; )
                  if (w[P] === I)
                    continue t;
                r && w.push(I), _.push(R);
              } else h(w, I, i) || (w !== _ && w.push(I), _.push(R));
            }
          return _;
        }
        function Li(n, r) {
          return r = Dn(r, n), n = kc(n, r), n == null || delete n[mn(sn(r))];
        }
        function Ec(n, r, i, c) {
          return Ie(n, r, i(Zn(n, r)), c);
        }
        function mr(n, r, i, c) {
          for (var h = n.length, u = c ? h : -1; (c ? u-- : ++u < h) && r(n[u], u, n); )
            ;
          return i ? rn(n, c ? 0 : u, c ? u + 1 : h) : rn(n, c ? u + 1 : 0, c ? h : u);
        }
        function Sc(n, r) {
          var i = n;
          return i instanceof ft && (i = i.value()), ri(r, function(c, h) {
            return h.func.apply(h.thisArg, Rn([c], h.args));
          }, i);
        }
        function Oi(n, r, i) {
          var c = n.length;
          if (c < 2)
            return c ? Pn(n[0]) : [];
          for (var h = -1, u = E(c); ++h < c; )
            for (var g = n[h], _ = -1; ++_ < c; )
              _ != h && (u[h] = Le(u[h] || g, n[_], r, i));
          return Pn(Ct(u, 1), r, i);
        }
        function Tc(n, r, i) {
          for (var c = -1, h = n.length, u = r.length, g = {}; ++c < h; ) {
            var _ = c < u ? r[c] : e;
            i(g, n[c], _);
          }
          return g;
        }
        function Ri(n) {
          return St(n) ? n : [];
        }
        function Ii(n) {
          return typeof n == "function" ? n : Ht;
        }
        function Dn(n, r) {
          return j(n) ? n : Wi(n, r) ? [n] : na(pt(n));
        }
        var Z1 = st;
        function Un(n, r, i) {
          var c = n.length;
          return i = i === e ? c : i, !r && i >= c ? n : rn(n, r, i);
        }
        var bc = zh || function(n) {
          return It.clearTimeout(n);
        };
        function Lc(n, r) {
          if (r)
            return n.slice();
          var i = n.length, c = Js ? Js(i) : new n.constructor(i);
          return n.copy(c), c;
        }
        function Ci(n) {
          var r = new n.constructor(n.byteLength);
          return new er(r).set(new er(n)), r;
        }
        function X1(n, r) {
          var i = r ? Ci(n.buffer) : n.buffer;
          return new n.constructor(i, n.byteOffset, n.byteLength);
        }
        function $1(n) {
          var r = new n.constructor(n.source, os.exec(n));
          return r.lastIndex = n.lastIndex, r;
        }
        function J1(n) {
          return Te ? vt(Te.call(n)) : {};
        }
        function Oc(n, r) {
          var i = r ? Ci(n.buffer) : n.buffer;
          return new n.constructor(i, n.byteOffset, n.length);
        }
        function Rc(n, r) {
          if (n !== r) {
            var i = n !== e, c = n === null, h = n === n, u = Xt(n), g = r !== e, _ = r === null, w = r === r, O = Xt(r);
            if (!_ && !O && !u && n > r || u && g && w && !_ && !O || c && g && w || !i && w || !h)
              return 1;
            if (!c && !u && !O && n < r || O && i && h && !c && !u || _ && i && h || !g && h || !w)
              return -1;
          }
          return 0;
        }
        function V1(n, r, i) {
          for (var c = -1, h = n.criteria, u = r.criteria, g = h.length, _ = i.length; ++c < g; ) {
            var w = Rc(h[c], u[c]);
            if (w) {
              if (c >= _)
                return w;
              var O = i[c];
              return w * (O == "desc" ? -1 : 1);
            }
          }
          return n.index - r.index;
        }
        function Ic(n, r, i, c) {
          for (var h = -1, u = n.length, g = i.length, _ = -1, w = r.length, O = Lt(u - g, 0), R = E(w + O), I = !c; ++_ < w; )
            R[_] = r[_];
          for (; ++h < g; )
            (I || h < u) && (R[i[h]] = n[h]);
          for (; O--; )
            R[_++] = n[h++];
          return R;
        }
        function Cc(n, r, i, c) {
          for (var h = -1, u = n.length, g = -1, _ = i.length, w = -1, O = r.length, R = Lt(u - _, 0), I = E(R + O), P = !c; ++h < R; )
            I[h] = n[h];
          for (var N = h; ++w < O; )
            I[N + w] = r[w];
          for (; ++g < _; )
            (P || h < u) && (I[N + i[g]] = n[h++]);
          return I;
        }
        function Bt(n, r) {
          var i = -1, c = n.length;
          for (r || (r = E(c)); ++i < c; )
            r[i] = n[i];
          return r;
        }
        function gn(n, r, i, c) {
          var h = !i;
          i || (i = {});
          for (var u = -1, g = r.length; ++u < g; ) {
            var _ = r[u], w = c ? c(i[_], n[_], _, i, n) : e;
            w === e && (w = n[_]), h ? yn(i, _, w) : be(i, _, w);
          }
          return i;
        }
        function k1(n, r) {
          return gn(n, Bi(n), r);
        }
        function Q1(n, r) {
          return gn(n, Kc(n), r);
        }
        function xr(n, r) {
          return function(i, c) {
            var h = j(i) ? rh : M1, u = r ? r() : {};
            return h(i, n, K(c, 2), u);
          };
        }
        function ae(n) {
          return st(function(r, i) {
            var c = -1, h = i.length, u = h > 1 ? i[h - 1] : e, g = h > 2 ? i[2] : e;
            for (u = n.length > 3 && typeof u == "function" ? (h--, u) : e, g && Ut(i[0], i[1], g) && (u = h < 3 ? e : u, h = 1), r = vt(r); ++c < h; ) {
              var _ = i[c];
              _ && n(r, _, c, u);
            }
            return r;
          });
        }
        function zc(n, r) {
          return function(i, c) {
            if (i == null)
              return i;
            if (!Wt(i))
              return n(i, c);
            for (var h = i.length, u = r ? h : -1, g = vt(i); (r ? u-- : ++u < h) && c(g[u], u, g) !== !1; )
              ;
            return i;
          };
        }
        function Pc(n) {
          return function(r, i, c) {
            for (var h = -1, u = vt(r), g = c(r), _ = g.length; _--; ) {
              var w = g[n ? _ : ++h];
              if (i(u[w], w, u) === !1)
                break;
            }
            return r;
          };
        }
        function j1(n, r, i) {
          var c = r & T, h = Ce(n);
          function u() {
            var g = this && this !== It && this instanceof u ? h : n;
            return g.apply(c ? i : this, arguments);
          }
          return u;
        }
        function Dc(n) {
          return function(r) {
            r = pt(r);
            var i = te(r) ? hn(r) : e, c = i ? i[0] : r.charAt(0), h = i ? Un(i, 1).join("") : r.slice(1);
            return c[n]() + h;
          };
        }
        function fe(n) {
          return function(r) {
            return ri(za(Ca(r).replace(Yf, "")), n, "");
          };
        }
        function Ce(n) {
          return function() {
            var r = arguments;
            switch (r.length) {
              case 0:
                return new n();
              case 1:
                return new n(r[0]);
              case 2:
                return new n(r[0], r[1]);
              case 3:
                return new n(r[0], r[1], r[2]);
              case 4:
                return new n(r[0], r[1], r[2], r[3]);
              case 5:
                return new n(r[0], r[1], r[2], r[3], r[4]);
              case 6:
                return new n(r[0], r[1], r[2], r[3], r[4], r[5]);
              case 7:
                return new n(r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
            }
            var i = ce(n.prototype), c = n.apply(i, r);
            return At(c) ? c : i;
          };
        }
        function tl(n, r, i) {
          var c = Ce(n);
          function h() {
            for (var u = arguments.length, g = E(u), _ = u, w = he(h); _--; )
              g[_] = arguments[_];
            var O = u < 3 && g[0] !== w && g[u - 1] !== w ? [] : In(g, w);
            if (u -= O.length, u < i)
              return Wc(
                n,
                r,
                _r,
                h.placeholder,
                e,
                g,
                O,
                e,
                e,
                i - u
              );
            var R = this && this !== It && this instanceof h ? c : n;
            return Gt(R, this, g);
          }
          return h;
        }
        function Uc(n) {
          return function(r, i, c) {
            var h = vt(r);
            if (!Wt(r)) {
              var u = K(i, 3);
              r = Rt(r), i = function(_) {
                return u(h[_], _, h);
              };
            }
            var g = n(r, i, c);
            return g > -1 ? h[u ? r[g] : g] : e;
          };
        }
        function qc(n) {
          return En(function(r) {
            var i = r.length, c = i, h = nn.prototype.thru;
            for (n && r.reverse(); c--; ) {
              var u = r[c];
              if (typeof u != "function")
                throw new tn(l);
              if (h && !g && yr(u) == "wrapper")
                var g = new nn([], !0);
            }
            for (c = g ? c : i; ++c < i; ) {
              u = r[c];
              var _ = yr(u), w = _ == "wrapper" ? qi(u) : e;
              w && Ni(w[0]) && w[1] == (D | W | z | it) && !w[4].length && w[9] == 1 ? g = g[yr(w[0])].apply(g, w[3]) : g = u.length == 1 && Ni(u) ? g[_]() : g.thru(u);
            }
            return function() {
              var O = arguments, R = O[0];
              if (g && O.length == 1 && j(R))
                return g.plant(R).value();
              for (var I = 0, P = i ? r[I].apply(this, O) : R; ++I < i; )
                P = r[I].call(this, P);
              return P;
            };
          });
        }
        function _r(n, r, i, c, h, u, g, _, w, O) {
          var R = r & D, I = r & T, P = r & C, N = r & (W | q), Z = r & et, rt = P ? e : Ce(n);
          function X() {
            for (var ct = arguments.length, ht = E(ct), $t = ct; $t--; )
              ht[$t] = arguments[$t];
            if (N)
              var qt = he(X), Jt = uh(ht, qt);
            if (c && (ht = Ic(ht, c, h, N)), u && (ht = Cc(ht, u, g, N)), ct -= Jt, N && ct < O) {
              var Tt = In(ht, qt);
              return Wc(
                n,
                r,
                _r,
                X.placeholder,
                i,
                ht,
                Tt,
                _,
                w,
                O - ct
              );
            }
            var un = I ? i : this, Ln = P ? un[n] : n;
            return ct = ht.length, _ ? ht = Ml(ht, _) : Z && ct > 1 && ht.reverse(), R && w < ct && (ht.length = w), this && this !== It && this instanceof X && (Ln = rt || Ce(Ln)), Ln.apply(un, ht);
          }
          return X;
        }
        function Fc(n, r) {
          return function(i, c) {
            return L1(i, n, r(c), {});
          };
        }
        function vr(n, r) {
          return function(i, c) {
            var h;
            if (i === e && c === e)
              return r;
            if (i !== e && (h = i), c !== e) {
              if (h === e)
                return c;
              typeof i == "string" || typeof c == "string" ? (i = Zt(i), c = Zt(c)) : (i = Ac(i), c = Ac(c)), h = n(i, c);
            }
            return h;
          };
        }
        function zi(n) {
          return En(function(r) {
            return r = yt(r, Kt(K())), st(function(i) {
              var c = this;
              return n(r, function(h) {
                return Gt(h, c, i);
              });
            });
          });
        }
        function Mr(n, r) {
          r = r === e ? " " : Zt(r);
          var i = r.length;
          if (i < 2)
            return i ? Ti(r, n) : r;
          var c = Ti(r, cr(n / ne(r)));
          return te(r) ? Un(hn(c), 0, n).join("") : c.slice(0, n);
        }
        function nl(n, r, i, c) {
          var h = r & T, u = Ce(n);
          function g() {
            for (var _ = -1, w = arguments.length, O = -1, R = c.length, I = E(R + w), P = this && this !== It && this instanceof g ? u : n; ++O < R; )
              I[O] = c[O];
            for (; w--; )
              I[O++] = arguments[++_];
            return Gt(P, h ? i : this, I);
          }
          return g;
        }
        function Bc(n) {
          return function(r, i, c) {
            return c && typeof c != "number" && Ut(r, i, c) && (i = c = e), r = bn(r), i === e ? (i = r, r = 0) : i = bn(i), c = c === e ? r < i ? 1 : -1 : bn(c), W1(r, i, c, n);
          };
        }
        function wr(n) {
          return function(r, i) {
            return typeof r == "string" && typeof i == "string" || (r = cn(r), i = cn(i)), n(r, i);
          };
        }
        function Wc(n, r, i, c, h, u, g, _, w, O) {
          var R = r & W, I = R ? g : e, P = R ? e : g, N = R ? u : e, Z = R ? e : u;
          r |= R ? z : F, r &= ~(R ? F : z), r & U || (r &= -4);
          var rt = [
            n,
            r,
            h,
            N,
            I,
            Z,
            P,
            _,
            w,
            O
          ], X = i.apply(e, rt);
          return Ni(n) && Qc(X, rt), X.placeholder = c, jc(X, n, r);
        }
        function Pi(n) {
          var r = bt[n];
          return function(i, c) {
            if (i = cn(i), c = c == null ? 0 : zt(tt(c), 292), c && js(i)) {
              var h = (pt(i) + "e").split("e"), u = r(h[0] + "e" + (+h[1] + c));
              return h = (pt(u) + "e").split("e"), +(h[0] + "e" + (+h[1] - c));
            }
            return r(i);
          };
        }
        var el = ie && 1 / Ve(new ie([, -0]))[1] == Yt ? function(n) {
          return new ie(n);
        } : es;
        function Nc(n) {
          return function(r) {
            var i = Pt(r);
            return i == an ? li(r) : i == fn ? vh(r) : oh(r, n(r));
          };
        }
        function An(n, r, i, c, h, u, g, _) {
          var w = r & C;
          if (!w && typeof n != "function")
            throw new tn(l);
          var O = c ? c.length : 0;
          if (O || (r &= -97, c = h = e), g = g === e ? g : Lt(tt(g), 0), _ = _ === e ? _ : tt(_), O -= h ? h.length : 0, r & F) {
            var R = c, I = h;
            c = h = e;
          }
          var P = w ? e : qi(n), N = [
            n,
            r,
            i,
            c,
            h,
            R,
            I,
            u,
            g,
            _
          ];
          if (P && xl(N, P), n = N[0], r = N[1], i = N[2], c = N[3], h = N[4], _ = N[9] = N[9] === e ? w ? 0 : n.length : Lt(N[9] - O, 0), !_ && r & (W | q) && (r &= -25), !r || r == T)
            var Z = j1(n, r, i);
          else r == W || r == q ? Z = tl(n, r, _) : (r == z || r == (T | z)) && !h.length ? Z = nl(n, r, i, c) : Z = _r.apply(e, N);
          var rt = P ? wc : Qc;
          return jc(rt(Z, N), n, r);
        }
        function Hc(n, r, i, c) {
          return n === e || on(n, re[i]) && !xt.call(c, i) ? r : n;
        }
        function Yc(n, r, i, c, h, u) {
          return At(n) && At(r) && (u.set(r, n), pr(n, r, e, Yc, u), u.delete(r)), n;
        }
        function rl(n) {
          return De(n) ? e : n;
        }
        function Gc(n, r, i, c, h, u) {
          var g = i & y, _ = n.length, w = r.length;
          if (_ != w && !(g && w > _))
            return !1;
          var O = u.get(n), R = u.get(r);
          if (O && R)
            return O == r && R == n;
          var I = -1, P = !0, N = i & b ? new Gn() : e;
          for (u.set(n, r), u.set(r, n); ++I < _; ) {
            var Z = n[I], rt = r[I];
            if (c)
              var X = g ? c(rt, Z, I, r, n, u) : c(Z, rt, I, n, r, u);
            if (X !== e) {
              if (X)
                continue;
              P = !1;
              break;
            }
            if (N) {
              if (!ii(r, function(ct, ht) {
                if (!we(N, ht) && (Z === ct || h(Z, ct, i, c, u)))
                  return N.push(ht);
              })) {
                P = !1;
                break;
              }
            } else if (!(Z === rt || h(Z, rt, i, c, u))) {
              P = !1;
              break;
            }
          }
          return u.delete(n), u.delete(r), P;
        }
        function il(n, r, i, c, h, u, g) {
          switch (i) {
            case kn:
              if (n.byteLength != r.byteLength || n.byteOffset != r.byteOffset)
                return !1;
              n = n.buffer, r = r.buffer;
            case Me:
              return !(n.byteLength != r.byteLength || !u(new er(n), new er(r)));
            case pe:
            case ge:
            case me:
              return on(+n, +r);
            case He:
              return n.name == r.name && n.message == r.message;
            case xe:
            case _e:
              return n == r + "";
            case an:
              var _ = li;
            case fn:
              var w = c & y;
              if (_ || (_ = Ve), n.size != r.size && !w)
                return !1;
              var O = g.get(n);
              if (O)
                return O == r;
              c |= b, g.set(n, r);
              var R = Gc(_(n), _(r), c, h, u, g);
              return g.delete(n), R;
            case Ge:
              if (Te)
                return Te.call(n) == Te.call(r);
          }
          return !1;
        }
        function sl(n, r, i, c, h, u) {
          var g = i & y, _ = Di(n), w = _.length, O = Di(r), R = O.length;
          if (w != R && !g)
            return !1;
          for (var I = w; I--; ) {
            var P = _[I];
            if (!(g ? P in r : xt.call(r, P)))
              return !1;
          }
          var N = u.get(n), Z = u.get(r);
          if (N && Z)
            return N == r && Z == n;
          var rt = !0;
          u.set(n, r), u.set(r, n);
          for (var X = g; ++I < w; ) {
            P = _[I];
            var ct = n[P], ht = r[P];
            if (c)
              var $t = g ? c(ht, ct, P, r, n, u) : c(ct, ht, P, n, r, u);
            if (!($t === e ? ct === ht || h(ct, ht, i, c, u) : $t)) {
              rt = !1;
              break;
            }
            X || (X = P == "constructor");
          }
          if (rt && !X) {
            var qt = n.constructor, Jt = r.constructor;
            qt != Jt && "constructor" in n && "constructor" in r && !(typeof qt == "function" && qt instanceof qt && typeof Jt == "function" && Jt instanceof Jt) && (rt = !1);
          }
          return u.delete(n), u.delete(r), rt;
        }
        function En(n) {
          return Yi(Vc(n, e, sa), n + "");
        }
        function Di(n) {
          return lc(n, Rt, Bi);
        }
        function Ui(n) {
          return lc(n, Nt, Kc);
        }
        var qi = fr ? function(n) {
          return fr.get(n);
        } : es;
        function yr(n) {
          for (var r = n.name + "", i = se[r], c = xt.call(se, r) ? i.length : 0; c--; ) {
            var h = i[c], u = h.func;
            if (u == null || u == n)
              return h.name;
          }
          return r;
        }
        function he(n) {
          var r = xt.call(o, "placeholder") ? o : n;
          return r.placeholder;
        }
        function K() {
          var n = o.iteratee || ts;
          return n = n === ts ? dc : n, arguments.length ? n(arguments[0], arguments[1]) : n;
        }
        function Ar(n, r) {
          var i = n.__data__;
          return dl(r) ? i[typeof r == "string" ? "string" : "hash"] : i.map;
        }
        function Fi(n) {
          for (var r = Rt(n), i = r.length; i--; ) {
            var c = r[i], h = n[c];
            r[i] = [c, h, $c(h)];
          }
          return r;
        }
        function Xn(n, r) {
          var i = mh(n, r);
          return uc(i) ? i : e;
        }
        function cl(n) {
          var r = xt.call(n, Hn), i = n[Hn];
          try {
            n[Hn] = e;
            var c = !0;
          } catch {
          }
          var h = tr.call(n);
          return c && (r ? n[Hn] = i : delete n[Hn]), h;
        }
        var Bi = ui ? function(n) {
          return n == null ? [] : (n = vt(n), On(ui(n), function(r) {
            return ks.call(n, r);
          }));
        } : rs, Kc = ui ? function(n) {
          for (var r = []; n; )
            Rn(r, Bi(n)), n = rr(n);
          return r;
        } : rs, Pt = Dt;
        (di && Pt(new di(new ArrayBuffer(1))) != kn || Ae && Pt(new Ae()) != an || pi && Pt(pi.resolve()) != as || ie && Pt(new ie()) != fn || Ee && Pt(new Ee()) != ve) && (Pt = function(n) {
          var r = Dt(n), i = r == vn ? n.constructor : e, c = i ? $n(i) : "";
          if (c)
            switch (c) {
              case Hh:
                return kn;
              case Yh:
                return an;
              case Gh:
                return as;
              case Kh:
                return fn;
              case Zh:
                return ve;
            }
          return r;
        });
        function al(n, r, i) {
          for (var c = -1, h = i.length; ++c < h; ) {
            var u = i[c], g = u.size;
            switch (u.type) {
              case "drop":
                n += g;
                break;
              case "dropRight":
                r -= g;
                break;
              case "take":
                r = zt(r, n + g);
                break;
              case "takeRight":
                n = Lt(n, r - g);
                break;
            }
          }
          return { start: n, end: r };
        }
        function fl(n) {
          var r = n.match(pf);
          return r ? r[1].split(gf) : [];
        }
        function Zc(n, r, i) {
          r = Dn(r, n);
          for (var c = -1, h = r.length, u = !1; ++c < h; ) {
            var g = mn(r[c]);
            if (!(u = n != null && i(n, g)))
              break;
            n = n[g];
          }
          return u || ++c != h ? u : (h = n == null ? 0 : n.length, !!h && Rr(h) && Sn(g, h) && (j(n) || Jn(n)));
        }
        function hl(n) {
          var r = n.length, i = new n.constructor(r);
          return r && typeof n[0] == "string" && xt.call(n, "index") && (i.index = n.index, i.input = n.input), i;
        }
        function Xc(n) {
          return typeof n.constructor == "function" && !ze(n) ? ce(rr(n)) : {};
        }
        function ll(n, r, i) {
          var c = n.constructor;
          switch (r) {
            case Me:
              return Ci(n);
            case pe:
            case ge:
              return new c(+n);
            case kn:
              return X1(n, i);
            case Fr:
            case Br:
            case Wr:
            case Nr:
            case Hr:
            case Yr:
            case Gr:
            case Kr:
            case Zr:
              return Oc(n, i);
            case an:
              return new c();
            case me:
            case _e:
              return new c(n);
            case xe:
              return $1(n);
            case fn:
              return new c();
            case Ge:
              return J1(n);
          }
        }
        function ol(n, r) {
          var i = r.length;
          if (!i)
            return n;
          var c = i - 1;
          return r[c] = (i > 1 ? "& " : "") + r[c], r = r.join(i > 2 ? ", " : " "), n.replace(df, `{
/* [wrapped with ` + r + `] */
`);
        }
        function ul(n) {
          return j(n) || Jn(n) || !!(Qs && n && n[Qs]);
        }
        function Sn(n, r) {
          var i = typeof n;
          return r = r ?? Ft, !!r && (i == "number" || i != "symbol" && Ef.test(n)) && n > -1 && n % 1 == 0 && n < r;
        }
        function Ut(n, r, i) {
          if (!At(i))
            return !1;
          var c = typeof r;
          return (c == "number" ? Wt(i) && Sn(r, i.length) : c == "string" && r in i) ? on(i[r], n) : !1;
        }
        function Wi(n, r) {
          if (j(n))
            return !1;
          var i = typeof n;
          return i == "number" || i == "symbol" || i == "boolean" || n == null || Xt(n) ? !0 : hf.test(n) || !ff.test(n) || r != null && n in vt(r);
        }
        function dl(n) {
          var r = typeof n;
          return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? n !== "__proto__" : n === null;
        }
        function Ni(n) {
          var r = yr(n), i = o[r];
          if (typeof i != "function" || !(r in ft.prototype))
            return !1;
          if (n === i)
            return !0;
          var c = qi(i);
          return !!c && n === c[0];
        }
        function pl(n) {
          return !!$s && $s in n;
        }
        var gl = Qe ? Tn : is;
        function ze(n) {
          var r = n && n.constructor, i = typeof r == "function" && r.prototype || re;
          return n === i;
        }
        function $c(n) {
          return n === n && !At(n);
        }
        function Jc(n, r) {
          return function(i) {
            return i == null ? !1 : i[n] === r && (r !== e || n in vt(i));
          };
        }
        function ml(n) {
          var r = Lr(n, function(c) {
            return i.size === m && i.clear(), c;
          }), i = r.cache;
          return r;
        }
        function xl(n, r) {
          var i = n[1], c = r[1], h = i | c, u = h < (T | C | D), g = c == D && i == W || c == D && i == it && n[7].length <= r[8] || c == (D | it) && r[7].length <= r[8] && i == W;
          if (!(u || g))
            return n;
          c & T && (n[2] = r[2], h |= i & T ? 0 : U);
          var _ = r[3];
          if (_) {
            var w = n[3];
            n[3] = w ? Ic(w, _, r[4]) : _, n[4] = w ? In(n[3], x) : r[4];
          }
          return _ = r[5], _ && (w = n[5], n[5] = w ? Cc(w, _, r[6]) : _, n[6] = w ? In(n[5], x) : r[6]), _ = r[7], _ && (n[7] = _), c & D && (n[8] = n[8] == null ? r[8] : zt(n[8], r[8])), n[9] == null && (n[9] = r[9]), n[0] = r[0], n[1] = h, n;
        }
        function _l(n) {
          var r = [];
          if (n != null)
            for (var i in vt(n))
              r.push(i);
          return r;
        }
        function vl(n) {
          return tr.call(n);
        }
        function Vc(n, r, i) {
          return r = Lt(r === e ? n.length - 1 : r, 0), function() {
            for (var c = arguments, h = -1, u = Lt(c.length - r, 0), g = E(u); ++h < u; )
              g[h] = c[r + h];
            h = -1;
            for (var _ = E(r + 1); ++h < r; )
              _[h] = c[h];
            return _[r] = i(g), Gt(n, this, _);
          };
        }
        function kc(n, r) {
          return r.length < 2 ? n : Zn(n, rn(r, 0, -1));
        }
        function Ml(n, r) {
          for (var i = n.length, c = zt(r.length, i), h = Bt(n); c--; ) {
            var u = r[c];
            n[c] = Sn(u, i) ? h[u] : e;
          }
          return n;
        }
        function Hi(n, r) {
          if (!(r === "constructor" && typeof n[r] == "function") && r != "__proto__")
            return n[r];
        }
        var Qc = ta(wc), Pe = Dh || function(n, r) {
          return It.setTimeout(n, r);
        }, Yi = ta(Y1);
        function jc(n, r, i) {
          var c = r + "";
          return Yi(n, ol(c, wl(fl(c), i)));
        }
        function ta(n) {
          var r = 0, i = 0;
          return function() {
            var c = Bh(), h = mt - (c - i);
            if (i = c, h > 0) {
              if (++r >= _t)
                return arguments[0];
            } else
              r = 0;
            return n.apply(e, arguments);
          };
        }
        function Er(n, r) {
          var i = -1, c = n.length, h = c - 1;
          for (r = r === e ? c : r; ++i < r; ) {
            var u = Si(i, h), g = n[u];
            n[u] = n[i], n[i] = g;
          }
          return n.length = r, n;
        }
        var na = ml(function(n) {
          var r = [];
          return n.charCodeAt(0) === 46 && r.push(""), n.replace(lf, function(i, c, h, u) {
            r.push(h ? u.replace(_f, "$1") : c || i);
          }), r;
        });
        function mn(n) {
          if (typeof n == "string" || Xt(n))
            return n;
          var r = n + "";
          return r == "0" && 1 / n == -Yt ? "-0" : r;
        }
        function $n(n) {
          if (n != null) {
            try {
              return je.call(n);
            } catch {
            }
            try {
              return n + "";
            } catch {
            }
          }
          return "";
        }
        function wl(n, r) {
          return jt(Xa, function(i) {
            var c = "_." + i[0];
            r & i[1] && !$e(n, c) && n.push(c);
          }), n.sort();
        }
        function ea(n) {
          if (n instanceof ft)
            return n.clone();
          var r = new nn(n.__wrapped__, n.__chain__);
          return r.__actions__ = Bt(n.__actions__), r.__index__ = n.__index__, r.__values__ = n.__values__, r;
        }
        function yl(n, r, i) {
          (i ? Ut(n, r, i) : r === e) ? r = 1 : r = Lt(tt(r), 0);
          var c = n == null ? 0 : n.length;
          if (!c || r < 1)
            return [];
          for (var h = 0, u = 0, g = E(cr(c / r)); h < c; )
            g[u++] = rn(n, h, h += r);
          return g;
        }
        function Al(n) {
          for (var r = -1, i = n == null ? 0 : n.length, c = 0, h = []; ++r < i; ) {
            var u = n[r];
            u && (h[c++] = u);
          }
          return h;
        }
        function El() {
          var n = arguments.length;
          if (!n)
            return [];
          for (var r = E(n - 1), i = arguments[0], c = n; c--; )
            r[c - 1] = arguments[c];
          return Rn(j(i) ? Bt(i) : [i], Ct(r, 1));
        }
        var Sl = st(function(n, r) {
          return St(n) ? Le(n, Ct(r, 1, St, !0)) : [];
        }), Tl = st(function(n, r) {
          var i = sn(r);
          return St(i) && (i = e), St(n) ? Le(n, Ct(r, 1, St, !0), K(i, 2)) : [];
        }), bl = st(function(n, r) {
          var i = sn(r);
          return St(i) && (i = e), St(n) ? Le(n, Ct(r, 1, St, !0), e, i) : [];
        });
        function Ll(n, r, i) {
          var c = n == null ? 0 : n.length;
          return c ? (r = i || r === e ? 1 : tt(r), rn(n, r < 0 ? 0 : r, c)) : [];
        }
        function Ol(n, r, i) {
          var c = n == null ? 0 : n.length;
          return c ? (r = i || r === e ? 1 : tt(r), r = c - r, rn(n, 0, r < 0 ? 0 : r)) : [];
        }
        function Rl(n, r) {
          return n && n.length ? mr(n, K(r, 3), !0, !0) : [];
        }
        function Il(n, r) {
          return n && n.length ? mr(n, K(r, 3), !0) : [];
        }
        function Cl(n, r, i, c) {
          var h = n == null ? 0 : n.length;
          return h ? (i && typeof i != "number" && Ut(n, r, i) && (i = 0, c = h), E1(n, r, i, c)) : [];
        }
        function ra(n, r, i) {
          var c = n == null ? 0 : n.length;
          if (!c)
            return -1;
          var h = i == null ? 0 : tt(i);
          return h < 0 && (h = Lt(c + h, 0)), Je(n, K(r, 3), h);
        }
        function ia(n, r, i) {
          var c = n == null ? 0 : n.length;
          if (!c)
            return -1;
          var h = c - 1;
          return i !== e && (h = tt(i), h = i < 0 ? Lt(c + h, 0) : zt(h, c - 1)), Je(n, K(r, 3), h, !0);
        }
        function sa(n) {
          var r = n == null ? 0 : n.length;
          return r ? Ct(n, 1) : [];
        }
        function zl(n) {
          var r = n == null ? 0 : n.length;
          return r ? Ct(n, Yt) : [];
        }
        function Pl(n, r) {
          var i = n == null ? 0 : n.length;
          return i ? (r = r === e ? 1 : tt(r), Ct(n, r)) : [];
        }
        function Dl(n) {
          for (var r = -1, i = n == null ? 0 : n.length, c = {}; ++r < i; ) {
            var h = n[r];
            c[h[0]] = h[1];
          }
          return c;
        }
        function ca(n) {
          return n && n.length ? n[0] : e;
        }
        function Ul(n, r, i) {
          var c = n == null ? 0 : n.length;
          if (!c)
            return -1;
          var h = i == null ? 0 : tt(i);
          return h < 0 && (h = Lt(c + h, 0)), jn(n, r, h);
        }
        function ql(n) {
          var r = n == null ? 0 : n.length;
          return r ? rn(n, 0, -1) : [];
        }
        var Fl = st(function(n) {
          var r = yt(n, Ri);
          return r.length && r[0] === n[0] ? Mi(r) : [];
        }), Bl = st(function(n) {
          var r = sn(n), i = yt(n, Ri);
          return r === sn(i) ? r = e : i.pop(), i.length && i[0] === n[0] ? Mi(i, K(r, 2)) : [];
        }), Wl = st(function(n) {
          var r = sn(n), i = yt(n, Ri);
          return r = typeof r == "function" ? r : e, r && i.pop(), i.length && i[0] === n[0] ? Mi(i, e, r) : [];
        });
        function Nl(n, r) {
          return n == null ? "" : qh.call(n, r);
        }
        function sn(n) {
          var r = n == null ? 0 : n.length;
          return r ? n[r - 1] : e;
        }
        function Hl(n, r, i) {
          var c = n == null ? 0 : n.length;
          if (!c)
            return -1;
          var h = c;
          return i !== e && (h = tt(i), h = h < 0 ? Lt(c + h, 0) : zt(h, c - 1)), r === r ? wh(n, r, h) : Je(n, Ws, h, !0);
        }
        function Yl(n, r) {
          return n && n.length ? xc(n, tt(r)) : e;
        }
        var Gl = st(aa);
        function aa(n, r) {
          return n && n.length && r && r.length ? Ei(n, r) : n;
        }
        function Kl(n, r, i) {
          return n && n.length && r && r.length ? Ei(n, r, K(i, 2)) : n;
        }
        function Zl(n, r, i) {
          return n && n.length && r && r.length ? Ei(n, r, e, i) : n;
        }
        var Xl = En(function(n, r) {
          var i = n == null ? 0 : n.length, c = mi(n, r);
          return Mc(n, yt(r, function(h) {
            return Sn(h, i) ? +h : h;
          }).sort(Rc)), c;
        });
        function $l(n, r) {
          var i = [];
          if (!(n && n.length))
            return i;
          var c = -1, h = [], u = n.length;
          for (r = K(r, 3); ++c < u; ) {
            var g = n[c];
            r(g, c, n) && (i.push(g), h.push(c));
          }
          return Mc(n, h), i;
        }
        function Gi(n) {
          return n == null ? n : Nh.call(n);
        }
        function Jl(n, r, i) {
          var c = n == null ? 0 : n.length;
          return c ? (i && typeof i != "number" && Ut(n, r, i) ? (r = 0, i = c) : (r = r == null ? 0 : tt(r), i = i === e ? c : tt(i)), rn(n, r, i)) : [];
        }
        function Vl(n, r) {
          return gr(n, r);
        }
        function kl(n, r, i) {
          return bi(n, r, K(i, 2));
        }
        function Ql(n, r) {
          var i = n == null ? 0 : n.length;
          if (i) {
            var c = gr(n, r);
            if (c < i && on(n[c], r))
              return c;
          }
          return -1;
        }
        function jl(n, r) {
          return gr(n, r, !0);
        }
        function to(n, r, i) {
          return bi(n, r, K(i, 2), !0);
        }
        function no(n, r) {
          var i = n == null ? 0 : n.length;
          if (i) {
            var c = gr(n, r, !0) - 1;
            if (on(n[c], r))
              return c;
          }
          return -1;
        }
        function eo(n) {
          return n && n.length ? yc(n) : [];
        }
        function ro(n, r) {
          return n && n.length ? yc(n, K(r, 2)) : [];
        }
        function io(n) {
          var r = n == null ? 0 : n.length;
          return r ? rn(n, 1, r) : [];
        }
        function so(n, r, i) {
          return n && n.length ? (r = i || r === e ? 1 : tt(r), rn(n, 0, r < 0 ? 0 : r)) : [];
        }
        function co(n, r, i) {
          var c = n == null ? 0 : n.length;
          return c ? (r = i || r === e ? 1 : tt(r), r = c - r, rn(n, r < 0 ? 0 : r, c)) : [];
        }
        function ao(n, r) {
          return n && n.length ? mr(n, K(r, 3), !1, !0) : [];
        }
        function fo(n, r) {
          return n && n.length ? mr(n, K(r, 3)) : [];
        }
        var ho = st(function(n) {
          return Pn(Ct(n, 1, St, !0));
        }), lo = st(function(n) {
          var r = sn(n);
          return St(r) && (r = e), Pn(Ct(n, 1, St, !0), K(r, 2));
        }), oo = st(function(n) {
          var r = sn(n);
          return r = typeof r == "function" ? r : e, Pn(Ct(n, 1, St, !0), e, r);
        });
        function uo(n) {
          return n && n.length ? Pn(n) : [];
        }
        function po(n, r) {
          return n && n.length ? Pn(n, K(r, 2)) : [];
        }
        function go(n, r) {
          return r = typeof r == "function" ? r : e, n && n.length ? Pn(n, e, r) : [];
        }
        function Ki(n) {
          if (!(n && n.length))
            return [];
          var r = 0;
          return n = On(n, function(i) {
            if (St(i))
              return r = Lt(i.length, r), !0;
          }), fi(r, function(i) {
            return yt(n, si(i));
          });
        }
        function fa(n, r) {
          if (!(n && n.length))
            return [];
          var i = Ki(n);
          return r == null ? i : yt(i, function(c) {
            return Gt(r, e, c);
          });
        }
        var mo = st(function(n, r) {
          return St(n) ? Le(n, r) : [];
        }), xo = st(function(n) {
          return Oi(On(n, St));
        }), _o = st(function(n) {
          var r = sn(n);
          return St(r) && (r = e), Oi(On(n, St), K(r, 2));
        }), vo = st(function(n) {
          var r = sn(n);
          return r = typeof r == "function" ? r : e, Oi(On(n, St), e, r);
        }), Mo = st(Ki);
        function wo(n, r) {
          return Tc(n || [], r || [], be);
        }
        function yo(n, r) {
          return Tc(n || [], r || [], Ie);
        }
        var Ao = st(function(n) {
          var r = n.length, i = r > 1 ? n[r - 1] : e;
          return i = typeof i == "function" ? (n.pop(), i) : e, fa(n, i);
        });
        function ha(n) {
          var r = o(n);
          return r.__chain__ = !0, r;
        }
        function Eo(n, r) {
          return r(n), n;
        }
        function Sr(n, r) {
          return r(n);
        }
        var So = En(function(n) {
          var r = n.length, i = r ? n[0] : 0, c = this.__wrapped__, h = function(u) {
            return mi(u, n);
          };
          return r > 1 || this.__actions__.length || !(c instanceof ft) || !Sn(i) ? this.thru(h) : (c = c.slice(i, +i + (r ? 1 : 0)), c.__actions__.push({
            func: Sr,
            args: [h],
            thisArg: e
          }), new nn(c, this.__chain__).thru(function(u) {
            return r && !u.length && u.push(e), u;
          }));
        });
        function To() {
          return ha(this);
        }
        function bo() {
          return new nn(this.value(), this.__chain__);
        }
        function Lo() {
          this.__values__ === e && (this.__values__ = Aa(this.value()));
          var n = this.__index__ >= this.__values__.length, r = n ? e : this.__values__[this.__index__++];
          return { done: n, value: r };
        }
        function Oo() {
          return this;
        }
        function Ro(n) {
          for (var r, i = this; i instanceof lr; ) {
            var c = ea(i);
            c.__index__ = 0, c.__values__ = e, r ? h.__wrapped__ = c : r = c;
            var h = c;
            i = i.__wrapped__;
          }
          return h.__wrapped__ = n, r;
        }
        function Io() {
          var n = this.__wrapped__;
          if (n instanceof ft) {
            var r = n;
            return this.__actions__.length && (r = new ft(this)), r = r.reverse(), r.__actions__.push({
              func: Sr,
              args: [Gi],
              thisArg: e
            }), new nn(r, this.__chain__);
          }
          return this.thru(Gi);
        }
        function Co() {
          return Sc(this.__wrapped__, this.__actions__);
        }
        var zo = xr(function(n, r, i) {
          xt.call(n, i) ? ++n[i] : yn(n, i, 1);
        });
        function Po(n, r, i) {
          var c = j(n) ? Fs : A1;
          return i && Ut(n, r, i) && (r = e), c(n, K(r, 3));
        }
        function Do(n, r) {
          var i = j(n) ? On : fc;
          return i(n, K(r, 3));
        }
        var Uo = Uc(ra), qo = Uc(ia);
        function Fo(n, r) {
          return Ct(Tr(n, r), 1);
        }
        function Bo(n, r) {
          return Ct(Tr(n, r), Yt);
        }
        function Wo(n, r, i) {
          return i = i === e ? 1 : tt(i), Ct(Tr(n, r), i);
        }
        function la(n, r) {
          var i = j(n) ? jt : zn;
          return i(n, K(r, 3));
        }
        function oa(n, r) {
          var i = j(n) ? ih : ac;
          return i(n, K(r, 3));
        }
        var No = xr(function(n, r, i) {
          xt.call(n, i) ? n[i].push(r) : yn(n, i, [r]);
        });
        function Ho(n, r, i, c) {
          n = Wt(n) ? n : oe(n), i = i && !c ? tt(i) : 0;
          var h = n.length;
          return i < 0 && (i = Lt(h + i, 0)), Ir(n) ? i <= h && n.indexOf(r, i) > -1 : !!h && jn(n, r, i) > -1;
        }
        var Yo = st(function(n, r, i) {
          var c = -1, h = typeof r == "function", u = Wt(n) ? E(n.length) : [];
          return zn(n, function(g) {
            u[++c] = h ? Gt(r, g, i) : Oe(g, r, i);
          }), u;
        }), Go = xr(function(n, r, i) {
          yn(n, i, r);
        });
        function Tr(n, r) {
          var i = j(n) ? yt : pc;
          return i(n, K(r, 3));
        }
        function Ko(n, r, i, c) {
          return n == null ? [] : (j(r) || (r = r == null ? [] : [r]), i = c ? e : i, j(i) || (i = i == null ? [] : [i]), _c(n, r, i));
        }
        var Zo = xr(function(n, r, i) {
          n[i ? 0 : 1].push(r);
        }, function() {
          return [[], []];
        });
        function Xo(n, r, i) {
          var c = j(n) ? ri : Hs, h = arguments.length < 3;
          return c(n, K(r, 4), i, h, zn);
        }
        function $o(n, r, i) {
          var c = j(n) ? sh : Hs, h = arguments.length < 3;
          return c(n, K(r, 4), i, h, ac);
        }
        function Jo(n, r) {
          var i = j(n) ? On : fc;
          return i(n, Or(K(r, 3)));
        }
        function Vo(n) {
          var r = j(n) ? rc : N1;
          return r(n);
        }
        function ko(n, r, i) {
          (i ? Ut(n, r, i) : r === e) ? r = 1 : r = tt(r);
          var c = j(n) ? _1 : H1;
          return c(n, r);
        }
        function Qo(n) {
          var r = j(n) ? v1 : G1;
          return r(n);
        }
        function jo(n) {
          if (n == null)
            return 0;
          if (Wt(n))
            return Ir(n) ? ne(n) : n.length;
          var r = Pt(n);
          return r == an || r == fn ? n.size : yi(n).length;
        }
        function t0(n, r, i) {
          var c = j(n) ? ii : K1;
          return i && Ut(n, r, i) && (r = e), c(n, K(r, 3));
        }
        var n0 = st(function(n, r) {
          if (n == null)
            return [];
          var i = r.length;
          return i > 1 && Ut(n, r[0], r[1]) ? r = [] : i > 2 && Ut(r[0], r[1], r[2]) && (r = [r[0]]), _c(n, Ct(r, 1), []);
        }), br = Ph || function() {
          return It.Date.now();
        };
        function e0(n, r) {
          if (typeof r != "function")
            throw new tn(l);
          return n = tt(n), function() {
            if (--n < 1)
              return r.apply(this, arguments);
          };
        }
        function ua(n, r, i) {
          return r = i ? e : r, r = n && r == null ? n.length : r, An(n, D, e, e, e, e, r);
        }
        function da(n, r) {
          var i;
          if (typeof r != "function")
            throw new tn(l);
          return n = tt(n), function() {
            return --n > 0 && (i = r.apply(this, arguments)), n <= 1 && (r = e), i;
          };
        }
        var Zi = st(function(n, r, i) {
          var c = T;
          if (i.length) {
            var h = In(i, he(Zi));
            c |= z;
          }
          return An(n, c, r, i, h);
        }), pa = st(function(n, r, i) {
          var c = T | C;
          if (i.length) {
            var h = In(i, he(pa));
            c |= z;
          }
          return An(r, c, n, i, h);
        });
        function ga(n, r, i) {
          r = i ? e : r;
          var c = An(n, W, e, e, e, e, e, r);
          return c.placeholder = ga.placeholder, c;
        }
        function ma(n, r, i) {
          r = i ? e : r;
          var c = An(n, q, e, e, e, e, e, r);
          return c.placeholder = ma.placeholder, c;
        }
        function xa(n, r, i) {
          var c, h, u, g, _, w, O = 0, R = !1, I = !1, P = !0;
          if (typeof n != "function")
            throw new tn(l);
          r = cn(r) || 0, At(i) && (R = !!i.leading, I = "maxWait" in i, u = I ? Lt(cn(i.maxWait) || 0, r) : u, P = "trailing" in i ? !!i.trailing : P);
          function N(Tt) {
            var un = c, Ln = h;
            return c = h = e, O = Tt, g = n.apply(Ln, un), g;
          }
          function Z(Tt) {
            return O = Tt, _ = Pe(ct, r), R ? N(Tt) : g;
          }
          function rt(Tt) {
            var un = Tt - w, Ln = Tt - O, Ua = r - un;
            return I ? zt(Ua, u - Ln) : Ua;
          }
          function X(Tt) {
            var un = Tt - w, Ln = Tt - O;
            return w === e || un >= r || un < 0 || I && Ln >= u;
          }
          function ct() {
            var Tt = br();
            if (X(Tt))
              return ht(Tt);
            _ = Pe(ct, rt(Tt));
          }
          function ht(Tt) {
            return _ = e, P && c ? N(Tt) : (c = h = e, g);
          }
          function $t() {
            _ !== e && bc(_), O = 0, c = w = h = _ = e;
          }
          function qt() {
            return _ === e ? g : ht(br());
          }
          function Jt() {
            var Tt = br(), un = X(Tt);
            if (c = arguments, h = this, w = Tt, un) {
              if (_ === e)
                return Z(w);
              if (I)
                return bc(_), _ = Pe(ct, r), N(w);
            }
            return _ === e && (_ = Pe(ct, r)), g;
          }
          return Jt.cancel = $t, Jt.flush = qt, Jt;
        }
        var r0 = st(function(n, r) {
          return cc(n, 1, r);
        }), i0 = st(function(n, r, i) {
          return cc(n, cn(r) || 0, i);
        });
        function s0(n) {
          return An(n, et);
        }
        function Lr(n, r) {
          if (typeof n != "function" || r != null && typeof r != "function")
            throw new tn(l);
          var i = function() {
            var c = arguments, h = r ? r.apply(this, c) : c[0], u = i.cache;
            if (u.has(h))
              return u.get(h);
            var g = n.apply(this, c);
            return i.cache = u.set(h, g) || u, g;
          };
          return i.cache = new (Lr.Cache || wn)(), i;
        }
        Lr.Cache = wn;
        function Or(n) {
          if (typeof n != "function")
            throw new tn(l);
          return function() {
            var r = arguments;
            switch (r.length) {
              case 0:
                return !n.call(this);
              case 1:
                return !n.call(this, r[0]);
              case 2:
                return !n.call(this, r[0], r[1]);
              case 3:
                return !n.call(this, r[0], r[1], r[2]);
            }
            return !n.apply(this, r);
          };
        }
        function c0(n) {
          return da(2, n);
        }
        var a0 = Z1(function(n, r) {
          r = r.length == 1 && j(r[0]) ? yt(r[0], Kt(K())) : yt(Ct(r, 1), Kt(K()));
          var i = r.length;
          return st(function(c) {
            for (var h = -1, u = zt(c.length, i); ++h < u; )
              c[h] = r[h].call(this, c[h]);
            return Gt(n, this, c);
          });
        }), Xi = st(function(n, r) {
          var i = In(r, he(Xi));
          return An(n, z, e, r, i);
        }), _a = st(function(n, r) {
          var i = In(r, he(_a));
          return An(n, F, e, r, i);
        }), f0 = En(function(n, r) {
          return An(n, it, e, e, e, r);
        });
        function h0(n, r) {
          if (typeof n != "function")
            throw new tn(l);
          return r = r === e ? r : tt(r), st(n, r);
        }
        function l0(n, r) {
          if (typeof n != "function")
            throw new tn(l);
          return r = r == null ? 0 : Lt(tt(r), 0), st(function(i) {
            var c = i[r], h = Un(i, 0, r);
            return c && Rn(h, c), Gt(n, this, h);
          });
        }
        function o0(n, r, i) {
          var c = !0, h = !0;
          if (typeof n != "function")
            throw new tn(l);
          return At(i) && (c = "leading" in i ? !!i.leading : c, h = "trailing" in i ? !!i.trailing : h), xa(n, r, {
            leading: c,
            maxWait: r,
            trailing: h
          });
        }
        function u0(n) {
          return ua(n, 1);
        }
        function d0(n, r) {
          return Xi(Ii(r), n);
        }
        function p0() {
          if (!arguments.length)
            return [];
          var n = arguments[0];
          return j(n) ? n : [n];
        }
        function g0(n) {
          return en(n, A);
        }
        function m0(n, r) {
          return r = typeof r == "function" ? r : e, en(n, A, r);
        }
        function x0(n) {
          return en(n, M | A);
        }
        function _0(n, r) {
          return r = typeof r == "function" ? r : e, en(n, M | A, r);
        }
        function v0(n, r) {
          return r == null || sc(n, r, Rt(r));
        }
        function on(n, r) {
          return n === r || n !== n && r !== r;
        }
        var M0 = wr(vi), w0 = wr(function(n, r) {
          return n >= r;
        }), Jn = oc(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? oc : function(n) {
          return Et(n) && xt.call(n, "callee") && !ks.call(n, "callee");
        }, j = E.isArray, y0 = Cs ? Kt(Cs) : O1;
        function Wt(n) {
          return n != null && Rr(n.length) && !Tn(n);
        }
        function St(n) {
          return Et(n) && Wt(n);
        }
        function A0(n) {
          return n === !0 || n === !1 || Et(n) && Dt(n) == pe;
        }
        var qn = Uh || is, E0 = zs ? Kt(zs) : R1;
        function S0(n) {
          return Et(n) && n.nodeType === 1 && !De(n);
        }
        function T0(n) {
          if (n == null)
            return !0;
          if (Wt(n) && (j(n) || typeof n == "string" || typeof n.splice == "function" || qn(n) || le(n) || Jn(n)))
            return !n.length;
          var r = Pt(n);
          if (r == an || r == fn)
            return !n.size;
          if (ze(n))
            return !yi(n).length;
          for (var i in n)
            if (xt.call(n, i))
              return !1;
          return !0;
        }
        function b0(n, r) {
          return Re(n, r);
        }
        function L0(n, r, i) {
          i = typeof i == "function" ? i : e;
          var c = i ? i(n, r) : e;
          return c === e ? Re(n, r, e, i) : !!c;
        }
        function $i(n) {
          if (!Et(n))
            return !1;
          var r = Dt(n);
          return r == He || r == Ja || typeof n.message == "string" && typeof n.name == "string" && !De(n);
        }
        function O0(n) {
          return typeof n == "number" && js(n);
        }
        function Tn(n) {
          if (!At(n))
            return !1;
          var r = Dt(n);
          return r == Ye || r == cs || r == $a || r == ka;
        }
        function va(n) {
          return typeof n == "number" && n == tt(n);
        }
        function Rr(n) {
          return typeof n == "number" && n > -1 && n % 1 == 0 && n <= Ft;
        }
        function At(n) {
          var r = typeof n;
          return n != null && (r == "object" || r == "function");
        }
        function Et(n) {
          return n != null && typeof n == "object";
        }
        var Ma = Ps ? Kt(Ps) : C1;
        function R0(n, r) {
          return n === r || wi(n, r, Fi(r));
        }
        function I0(n, r, i) {
          return i = typeof i == "function" ? i : e, wi(n, r, Fi(r), i);
        }
        function C0(n) {
          return wa(n) && n != +n;
        }
        function z0(n) {
          if (gl(n))
            throw new k(f);
          return uc(n);
        }
        function P0(n) {
          return n === null;
        }
        function D0(n) {
          return n == null;
        }
        function wa(n) {
          return typeof n == "number" || Et(n) && Dt(n) == me;
        }
        function De(n) {
          if (!Et(n) || Dt(n) != vn)
            return !1;
          var r = rr(n);
          if (r === null)
            return !0;
          var i = xt.call(r, "constructor") && r.constructor;
          return typeof i == "function" && i instanceof i && je.call(i) == Rh;
        }
        var Ji = Ds ? Kt(Ds) : z1;
        function U0(n) {
          return va(n) && n >= -Ft && n <= Ft;
        }
        var ya = Us ? Kt(Us) : P1;
        function Ir(n) {
          return typeof n == "string" || !j(n) && Et(n) && Dt(n) == _e;
        }
        function Xt(n) {
          return typeof n == "symbol" || Et(n) && Dt(n) == Ge;
        }
        var le = qs ? Kt(qs) : D1;
        function q0(n) {
          return n === e;
        }
        function F0(n) {
          return Et(n) && Pt(n) == ve;
        }
        function B0(n) {
          return Et(n) && Dt(n) == ja;
        }
        var W0 = wr(Ai), N0 = wr(function(n, r) {
          return n <= r;
        });
        function Aa(n) {
          if (!n)
            return [];
          if (Wt(n))
            return Ir(n) ? hn(n) : Bt(n);
          if (ye && n[ye])
            return _h(n[ye]());
          var r = Pt(n), i = r == an ? li : r == fn ? Ve : oe;
          return i(n);
        }
        function bn(n) {
          if (!n)
            return n === 0 ? n : 0;
          if (n = cn(n), n === Yt || n === -Yt) {
            var r = n < 0 ? -1 : 1;
            return r * We;
          }
          return n === n ? n : 0;
        }
        function tt(n) {
          var r = bn(n), i = r % 1;
          return r === r ? i ? r - i : r : 0;
        }
        function Ea(n) {
          return n ? Kn(tt(n), 0, dn) : 0;
        }
        function cn(n) {
          if (typeof n == "number")
            return n;
          if (Xt(n))
            return Wn;
          if (At(n)) {
            var r = typeof n.valueOf == "function" ? n.valueOf() : n;
            n = At(r) ? r + "" : r;
          }
          if (typeof n != "string")
            return n === 0 ? n : +n;
          n = Ys(n);
          var i = wf.test(n);
          return i || Af.test(n) ? nh(n.slice(2), i ? 2 : 8) : Mf.test(n) ? Wn : +n;
        }
        function Sa(n) {
          return gn(n, Nt(n));
        }
        function H0(n) {
          return n ? Kn(tt(n), -Ft, Ft) : n === 0 ? n : 0;
        }
        function pt(n) {
          return n == null ? "" : Zt(n);
        }
        var Y0 = ae(function(n, r) {
          if (ze(r) || Wt(r)) {
            gn(r, Rt(r), n);
            return;
          }
          for (var i in r)
            xt.call(r, i) && be(n, i, r[i]);
        }), Ta = ae(function(n, r) {
          gn(r, Nt(r), n);
        }), Cr = ae(function(n, r, i, c) {
          gn(r, Nt(r), n, c);
        }), G0 = ae(function(n, r, i, c) {
          gn(r, Rt(r), n, c);
        }), K0 = En(mi);
        function Z0(n, r) {
          var i = ce(n);
          return r == null ? i : ic(i, r);
        }
        var X0 = st(function(n, r) {
          n = vt(n);
          var i = -1, c = r.length, h = c > 2 ? r[2] : e;
          for (h && Ut(r[0], r[1], h) && (c = 1); ++i < c; )
            for (var u = r[i], g = Nt(u), _ = -1, w = g.length; ++_ < w; ) {
              var O = g[_], R = n[O];
              (R === e || on(R, re[O]) && !xt.call(n, O)) && (n[O] = u[O]);
            }
          return n;
        }), $0 = st(function(n) {
          return n.push(e, Yc), Gt(ba, e, n);
        });
        function J0(n, r) {
          return Bs(n, K(r, 3), pn);
        }
        function V0(n, r) {
          return Bs(n, K(r, 3), _i);
        }
        function k0(n, r) {
          return n == null ? n : xi(n, K(r, 3), Nt);
        }
        function Q0(n, r) {
          return n == null ? n : hc(n, K(r, 3), Nt);
        }
        function j0(n, r) {
          return n && pn(n, K(r, 3));
        }
        function tu(n, r) {
          return n && _i(n, K(r, 3));
        }
        function nu(n) {
          return n == null ? [] : dr(n, Rt(n));
        }
        function eu(n) {
          return n == null ? [] : dr(n, Nt(n));
        }
        function Vi(n, r, i) {
          var c = n == null ? e : Zn(n, r);
          return c === e ? i : c;
        }
        function ru(n, r) {
          return n != null && Zc(n, r, S1);
        }
        function ki(n, r) {
          return n != null && Zc(n, r, T1);
        }
        var iu = Fc(function(n, r, i) {
          r != null && typeof r.toString != "function" && (r = tr.call(r)), n[r] = i;
        }, ji(Ht)), su = Fc(function(n, r, i) {
          r != null && typeof r.toString != "function" && (r = tr.call(r)), xt.call(n, r) ? n[r].push(i) : n[r] = [i];
        }, K), cu = st(Oe);
        function Rt(n) {
          return Wt(n) ? ec(n) : yi(n);
        }
        function Nt(n) {
          return Wt(n) ? ec(n, !0) : U1(n);
        }
        function au(n, r) {
          var i = {};
          return r = K(r, 3), pn(n, function(c, h, u) {
            yn(i, r(c, h, u), c);
          }), i;
        }
        function fu(n, r) {
          var i = {};
          return r = K(r, 3), pn(n, function(c, h, u) {
            yn(i, h, r(c, h, u));
          }), i;
        }
        var hu = ae(function(n, r, i) {
          pr(n, r, i);
        }), ba = ae(function(n, r, i, c) {
          pr(n, r, i, c);
        }), lu = En(function(n, r) {
          var i = {};
          if (n == null)
            return i;
          var c = !1;
          r = yt(r, function(u) {
            return u = Dn(u, n), c || (c = u.length > 1), u;
          }), gn(n, Ui(n), i), c && (i = en(i, M | S | A, rl));
          for (var h = r.length; h--; )
            Li(i, r[h]);
          return i;
        });
        function ou(n, r) {
          return La(n, Or(K(r)));
        }
        var uu = En(function(n, r) {
          return n == null ? {} : F1(n, r);
        });
        function La(n, r) {
          if (n == null)
            return {};
          var i = yt(Ui(n), function(c) {
            return [c];
          });
          return r = K(r), vc(n, i, function(c, h) {
            return r(c, h[0]);
          });
        }
        function du(n, r, i) {
          r = Dn(r, n);
          var c = -1, h = r.length;
          for (h || (h = 1, n = e); ++c < h; ) {
            var u = n == null ? e : n[mn(r[c])];
            u === e && (c = h, u = i), n = Tn(u) ? u.call(n) : u;
          }
          return n;
        }
        function pu(n, r, i) {
          return n == null ? n : Ie(n, r, i);
        }
        function gu(n, r, i, c) {
          return c = typeof c == "function" ? c : e, n == null ? n : Ie(n, r, i, c);
        }
        var Oa = Nc(Rt), Ra = Nc(Nt);
        function mu(n, r, i) {
          var c = j(n), h = c || qn(n) || le(n);
          if (r = K(r, 4), i == null) {
            var u = n && n.constructor;
            h ? i = c ? new u() : [] : At(n) ? i = Tn(u) ? ce(rr(n)) : {} : i = {};
          }
          return (h ? jt : pn)(n, function(g, _, w) {
            return r(i, g, _, w);
          }), i;
        }
        function xu(n, r) {
          return n == null ? !0 : Li(n, r);
        }
        function _u(n, r, i) {
          return n == null ? n : Ec(n, r, Ii(i));
        }
        function vu(n, r, i, c) {
          return c = typeof c == "function" ? c : e, n == null ? n : Ec(n, r, Ii(i), c);
        }
        function oe(n) {
          return n == null ? [] : hi(n, Rt(n));
        }
        function Mu(n) {
          return n == null ? [] : hi(n, Nt(n));
        }
        function wu(n, r, i) {
          return i === e && (i = r, r = e), i !== e && (i = cn(i), i = i === i ? i : 0), r !== e && (r = cn(r), r = r === r ? r : 0), Kn(cn(n), r, i);
        }
        function yu(n, r, i) {
          return r = bn(r), i === e ? (i = r, r = 0) : i = bn(i), n = cn(n), b1(n, r, i);
        }
        function Au(n, r, i) {
          if (i && typeof i != "boolean" && Ut(n, r, i) && (r = i = e), i === e && (typeof r == "boolean" ? (i = r, r = e) : typeof n == "boolean" && (i = n, n = e)), n === e && r === e ? (n = 0, r = 1) : (n = bn(n), r === e ? (r = n, n = 0) : r = bn(r)), n > r) {
            var c = n;
            n = r, r = c;
          }
          if (i || n % 1 || r % 1) {
            var h = tc();
            return zt(n + h * (r - n + th("1e-" + ((h + "").length - 1))), r);
          }
          return Si(n, r);
        }
        var Eu = fe(function(n, r, i) {
          return r = r.toLowerCase(), n + (i ? Ia(r) : r);
        });
        function Ia(n) {
          return Qi(pt(n).toLowerCase());
        }
        function Ca(n) {
          return n = pt(n), n && n.replace(Sf, dh).replace(Gf, "");
        }
        function Su(n, r, i) {
          n = pt(n), r = Zt(r);
          var c = n.length;
          i = i === e ? c : Kn(tt(i), 0, c);
          var h = i;
          return i -= r.length, i >= 0 && n.slice(i, h) == r;
        }
        function Tu(n) {
          return n = pt(n), n && sf.test(n) ? n.replace(hs, ph) : n;
        }
        function bu(n) {
          return n = pt(n), n && of.test(n) ? n.replace(Xr, "\\$&") : n;
        }
        var Lu = fe(function(n, r, i) {
          return n + (i ? "-" : "") + r.toLowerCase();
        }), Ou = fe(function(n, r, i) {
          return n + (i ? " " : "") + r.toLowerCase();
        }), Ru = Dc("toLowerCase");
        function Iu(n, r, i) {
          n = pt(n), r = tt(r);
          var c = r ? ne(n) : 0;
          if (!r || c >= r)
            return n;
          var h = (r - c) / 2;
          return Mr(ar(h), i) + n + Mr(cr(h), i);
        }
        function Cu(n, r, i) {
          n = pt(n), r = tt(r);
          var c = r ? ne(n) : 0;
          return r && c < r ? n + Mr(r - c, i) : n;
        }
        function zu(n, r, i) {
          n = pt(n), r = tt(r);
          var c = r ? ne(n) : 0;
          return r && c < r ? Mr(r - c, i) + n : n;
        }
        function Pu(n, r, i) {
          return i || r == null ? r = 0 : r && (r = +r), Wh(pt(n).replace($r, ""), r || 0);
        }
        function Du(n, r, i) {
          return (i ? Ut(n, r, i) : r === e) ? r = 1 : r = tt(r), Ti(pt(n), r);
        }
        function Uu() {
          var n = arguments, r = pt(n[0]);
          return n.length < 3 ? r : r.replace(n[1], n[2]);
        }
        var qu = fe(function(n, r, i) {
          return n + (i ? "_" : "") + r.toLowerCase();
        });
        function Fu(n, r, i) {
          return i && typeof i != "number" && Ut(n, r, i) && (r = i = e), i = i === e ? dn : i >>> 0, i ? (n = pt(n), n && (typeof r == "string" || r != null && !Ji(r)) && (r = Zt(r), !r && te(n)) ? Un(hn(n), 0, i) : n.split(r, i)) : [];
        }
        var Bu = fe(function(n, r, i) {
          return n + (i ? " " : "") + Qi(r);
        });
        function Wu(n, r, i) {
          return n = pt(n), i = i == null ? 0 : Kn(tt(i), 0, n.length), r = Zt(r), n.slice(i, i + r.length) == r;
        }
        function Nu(n, r, i) {
          var c = o.templateSettings;
          i && Ut(n, r, i) && (r = e), n = pt(n), r = Cr({}, r, c, Hc);
          var h = Cr({}, r.imports, c.imports, Hc), u = Rt(h), g = hi(h, u), _, w, O = 0, R = r.interpolate || Ke, I = "__p += '", P = oi(
            (r.escape || Ke).source + "|" + R.source + "|" + (R === ls ? vf : Ke).source + "|" + (r.evaluate || Ke).source + "|$",
            "g"
          ), N = "//# sourceURL=" + (xt.call(r, "sourceURL") ? (r.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Jf + "]") + `
`;
          n.replace(P, function(X, ct, ht, $t, qt, Jt) {
            return ht || (ht = $t), I += n.slice(O, Jt).replace(Tf, gh), ct && (_ = !0, I += `' +
__e(` + ct + `) +
'`), qt && (w = !0, I += `';
` + qt + `;
__p += '`), ht && (I += `' +
((__t = (` + ht + `)) == null ? '' : __t) +
'`), O = Jt + X.length, X;
          }), I += `';
`;
          var Z = xt.call(r, "variable") && r.variable;
          if (!Z)
            I = `with (obj) {
` + I + `
}
`;
          else if (xf.test(Z))
            throw new k(d);
          I = (w ? I.replace(tf, "") : I).replace(nf, "$1").replace(ef, "$1;"), I = "function(" + (Z || "obj") + `) {
` + (Z ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (_ ? ", __e = _.escape" : "") + (w ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + I + `return __p
}`;
          var rt = Pa(function() {
            return ut(u, N + "return " + I).apply(e, g);
          });
          if (rt.source = I, $i(rt))
            throw rt;
          return rt;
        }
        function Hu(n) {
          return pt(n).toLowerCase();
        }
        function Yu(n) {
          return pt(n).toUpperCase();
        }
        function Gu(n, r, i) {
          if (n = pt(n), n && (i || r === e))
            return Ys(n);
          if (!n || !(r = Zt(r)))
            return n;
          var c = hn(n), h = hn(r), u = Gs(c, h), g = Ks(c, h) + 1;
          return Un(c, u, g).join("");
        }
        function Ku(n, r, i) {
          if (n = pt(n), n && (i || r === e))
            return n.slice(0, Xs(n) + 1);
          if (!n || !(r = Zt(r)))
            return n;
          var c = hn(n), h = Ks(c, hn(r)) + 1;
          return Un(c, 0, h).join("");
        }
        function Zu(n, r, i) {
          if (n = pt(n), n && (i || r === e))
            return n.replace($r, "");
          if (!n || !(r = Zt(r)))
            return n;
          var c = hn(n), h = Gs(c, hn(r));
          return Un(c, h).join("");
        }
        function Xu(n, r) {
          var i = lt, c = G;
          if (At(r)) {
            var h = "separator" in r ? r.separator : h;
            i = "length" in r ? tt(r.length) : i, c = "omission" in r ? Zt(r.omission) : c;
          }
          n = pt(n);
          var u = n.length;
          if (te(n)) {
            var g = hn(n);
            u = g.length;
          }
          if (i >= u)
            return n;
          var _ = i - ne(c);
          if (_ < 1)
            return c;
          var w = g ? Un(g, 0, _).join("") : n.slice(0, _);
          if (h === e)
            return w + c;
          if (g && (_ += w.length - _), Ji(h)) {
            if (n.slice(_).search(h)) {
              var O, R = w;
              for (h.global || (h = oi(h.source, pt(os.exec(h)) + "g")), h.lastIndex = 0; O = h.exec(R); )
                var I = O.index;
              w = w.slice(0, I === e ? _ : I);
            }
          } else if (n.indexOf(Zt(h), _) != _) {
            var P = w.lastIndexOf(h);
            P > -1 && (w = w.slice(0, P));
          }
          return w + c;
        }
        function $u(n) {
          return n = pt(n), n && rf.test(n) ? n.replace(fs, yh) : n;
        }
        var Ju = fe(function(n, r, i) {
          return n + (i ? " " : "") + r.toUpperCase();
        }), Qi = Dc("toUpperCase");
        function za(n, r, i) {
          return n = pt(n), r = i ? e : r, r === e ? xh(n) ? Sh(n) : fh(n) : n.match(r) || [];
        }
        var Pa = st(function(n, r) {
          try {
            return Gt(n, e, r);
          } catch (i) {
            return $i(i) ? i : new k(i);
          }
        }), Vu = En(function(n, r) {
          return jt(r, function(i) {
            i = mn(i), yn(n, i, Zi(n[i], n));
          }), n;
        });
        function ku(n) {
          var r = n == null ? 0 : n.length, i = K();
          return n = r ? yt(n, function(c) {
            if (typeof c[1] != "function")
              throw new tn(l);
            return [i(c[0]), c[1]];
          }) : [], st(function(c) {
            for (var h = -1; ++h < r; ) {
              var u = n[h];
              if (Gt(u[0], this, c))
                return Gt(u[1], this, c);
            }
          });
        }
        function Qu(n) {
          return y1(en(n, M));
        }
        function ji(n) {
          return function() {
            return n;
          };
        }
        function ju(n, r) {
          return n == null || n !== n ? r : n;
        }
        var td = qc(), nd = qc(!0);
        function Ht(n) {
          return n;
        }
        function ts(n) {
          return dc(typeof n == "function" ? n : en(n, M));
        }
        function ed(n) {
          return gc(en(n, M));
        }
        function rd(n, r) {
          return mc(n, en(r, M));
        }
        var id = st(function(n, r) {
          return function(i) {
            return Oe(i, n, r);
          };
        }), sd = st(function(n, r) {
          return function(i) {
            return Oe(n, i, r);
          };
        });
        function ns(n, r, i) {
          var c = Rt(r), h = dr(r, c);
          i == null && !(At(r) && (h.length || !c.length)) && (i = r, r = n, n = this, h = dr(r, Rt(r)));
          var u = !(At(i) && "chain" in i) || !!i.chain, g = Tn(n);
          return jt(h, function(_) {
            var w = r[_];
            n[_] = w, g && (n.prototype[_] = function() {
              var O = this.__chain__;
              if (u || O) {
                var R = n(this.__wrapped__), I = R.__actions__ = Bt(this.__actions__);
                return I.push({ func: w, args: arguments, thisArg: n }), R.__chain__ = O, R;
              }
              return w.apply(n, Rn([this.value()], arguments));
            });
          }), n;
        }
        function cd() {
          return It._ === this && (It._ = Ih), this;
        }
        function es() {
        }
        function ad(n) {
          return n = tt(n), st(function(r) {
            return xc(r, n);
          });
        }
        var fd = zi(yt), hd = zi(Fs), ld = zi(ii);
        function Da(n) {
          return Wi(n) ? si(mn(n)) : B1(n);
        }
        function od(n) {
          return function(r) {
            return n == null ? e : Zn(n, r);
          };
        }
        var ud = Bc(), dd = Bc(!0);
        function rs() {
          return [];
        }
        function is() {
          return !1;
        }
        function pd() {
          return {};
        }
        function gd() {
          return "";
        }
        function md() {
          return !0;
        }
        function xd(n, r) {
          if (n = tt(n), n < 1 || n > Ft)
            return [];
          var i = dn, c = zt(n, dn);
          r = K(r), n -= dn;
          for (var h = fi(c, r); ++i < n; )
            r(i);
          return h;
        }
        function _d(n) {
          return j(n) ? yt(n, mn) : Xt(n) ? [n] : Bt(na(pt(n)));
        }
        function vd(n) {
          var r = ++Oh;
          return pt(n) + r;
        }
        var Md = vr(function(n, r) {
          return n + r;
        }, 0), wd = Pi("ceil"), yd = vr(function(n, r) {
          return n / r;
        }, 1), Ad = Pi("floor");
        function Ed(n) {
          return n && n.length ? ur(n, Ht, vi) : e;
        }
        function Sd(n, r) {
          return n && n.length ? ur(n, K(r, 2), vi) : e;
        }
        function Td(n) {
          return Ns(n, Ht);
        }
        function bd(n, r) {
          return Ns(n, K(r, 2));
        }
        function Ld(n) {
          return n && n.length ? ur(n, Ht, Ai) : e;
        }
        function Od(n, r) {
          return n && n.length ? ur(n, K(r, 2), Ai) : e;
        }
        var Rd = vr(function(n, r) {
          return n * r;
        }, 1), Id = Pi("round"), Cd = vr(function(n, r) {
          return n - r;
        }, 0);
        function zd(n) {
          return n && n.length ? ai(n, Ht) : 0;
        }
        function Pd(n, r) {
          return n && n.length ? ai(n, K(r, 2)) : 0;
        }
        return o.after = e0, o.ary = ua, o.assign = Y0, o.assignIn = Ta, o.assignInWith = Cr, o.assignWith = G0, o.at = K0, o.before = da, o.bind = Zi, o.bindAll = Vu, o.bindKey = pa, o.castArray = p0, o.chain = ha, o.chunk = yl, o.compact = Al, o.concat = El, o.cond = ku, o.conforms = Qu, o.constant = ji, o.countBy = zo, o.create = Z0, o.curry = ga, o.curryRight = ma, o.debounce = xa, o.defaults = X0, o.defaultsDeep = $0, o.defer = r0, o.delay = i0, o.difference = Sl, o.differenceBy = Tl, o.differenceWith = bl, o.drop = Ll, o.dropRight = Ol, o.dropRightWhile = Rl, o.dropWhile = Il, o.fill = Cl, o.filter = Do, o.flatMap = Fo, o.flatMapDeep = Bo, o.flatMapDepth = Wo, o.flatten = sa, o.flattenDeep = zl, o.flattenDepth = Pl, o.flip = s0, o.flow = td, o.flowRight = nd, o.fromPairs = Dl, o.functions = nu, o.functionsIn = eu, o.groupBy = No, o.initial = ql, o.intersection = Fl, o.intersectionBy = Bl, o.intersectionWith = Wl, o.invert = iu, o.invertBy = su, o.invokeMap = Yo, o.iteratee = ts, o.keyBy = Go, o.keys = Rt, o.keysIn = Nt, o.map = Tr, o.mapKeys = au, o.mapValues = fu, o.matches = ed, o.matchesProperty = rd, o.memoize = Lr, o.merge = hu, o.mergeWith = ba, o.method = id, o.methodOf = sd, o.mixin = ns, o.negate = Or, o.nthArg = ad, o.omit = lu, o.omitBy = ou, o.once = c0, o.orderBy = Ko, o.over = fd, o.overArgs = a0, o.overEvery = hd, o.overSome = ld, o.partial = Xi, o.partialRight = _a, o.partition = Zo, o.pick = uu, o.pickBy = La, o.property = Da, o.propertyOf = od, o.pull = Gl, o.pullAll = aa, o.pullAllBy = Kl, o.pullAllWith = Zl, o.pullAt = Xl, o.range = ud, o.rangeRight = dd, o.rearg = f0, o.reject = Jo, o.remove = $l, o.rest = h0, o.reverse = Gi, o.sampleSize = ko, o.set = pu, o.setWith = gu, o.shuffle = Qo, o.slice = Jl, o.sortBy = n0, o.sortedUniq = eo, o.sortedUniqBy = ro, o.split = Fu, o.spread = l0, o.tail = io, o.take = so, o.takeRight = co, o.takeRightWhile = ao, o.takeWhile = fo, o.tap = Eo, o.throttle = o0, o.thru = Sr, o.toArray = Aa, o.toPairs = Oa, o.toPairsIn = Ra, o.toPath = _d, o.toPlainObject = Sa, o.transform = mu, o.unary = u0, o.union = ho, o.unionBy = lo, o.unionWith = oo, o.uniq = uo, o.uniqBy = po, o.uniqWith = go, o.unset = xu, o.unzip = Ki, o.unzipWith = fa, o.update = _u, o.updateWith = vu, o.values = oe, o.valuesIn = Mu, o.without = mo, o.words = za, o.wrap = d0, o.xor = xo, o.xorBy = _o, o.xorWith = vo, o.zip = Mo, o.zipObject = wo, o.zipObjectDeep = yo, o.zipWith = Ao, o.entries = Oa, o.entriesIn = Ra, o.extend = Ta, o.extendWith = Cr, ns(o, o), o.add = Md, o.attempt = Pa, o.camelCase = Eu, o.capitalize = Ia, o.ceil = wd, o.clamp = wu, o.clone = g0, o.cloneDeep = x0, o.cloneDeepWith = _0, o.cloneWith = m0, o.conformsTo = v0, o.deburr = Ca, o.defaultTo = ju, o.divide = yd, o.endsWith = Su, o.eq = on, o.escape = Tu, o.escapeRegExp = bu, o.every = Po, o.find = Uo, o.findIndex = ra, o.findKey = J0, o.findLast = qo, o.findLastIndex = ia, o.findLastKey = V0, o.floor = Ad, o.forEach = la, o.forEachRight = oa, o.forIn = k0, o.forInRight = Q0, o.forOwn = j0, o.forOwnRight = tu, o.get = Vi, o.gt = M0, o.gte = w0, o.has = ru, o.hasIn = ki, o.head = ca, o.identity = Ht, o.includes = Ho, o.indexOf = Ul, o.inRange = yu, o.invoke = cu, o.isArguments = Jn, o.isArray = j, o.isArrayBuffer = y0, o.isArrayLike = Wt, o.isArrayLikeObject = St, o.isBoolean = A0, o.isBuffer = qn, o.isDate = E0, o.isElement = S0, o.isEmpty = T0, o.isEqual = b0, o.isEqualWith = L0, o.isError = $i, o.isFinite = O0, o.isFunction = Tn, o.isInteger = va, o.isLength = Rr, o.isMap = Ma, o.isMatch = R0, o.isMatchWith = I0, o.isNaN = C0, o.isNative = z0, o.isNil = D0, o.isNull = P0, o.isNumber = wa, o.isObject = At, o.isObjectLike = Et, o.isPlainObject = De, o.isRegExp = Ji, o.isSafeInteger = U0, o.isSet = ya, o.isString = Ir, o.isSymbol = Xt, o.isTypedArray = le, o.isUndefined = q0, o.isWeakMap = F0, o.isWeakSet = B0, o.join = Nl, o.kebabCase = Lu, o.last = sn, o.lastIndexOf = Hl, o.lowerCase = Ou, o.lowerFirst = Ru, o.lt = W0, o.lte = N0, o.max = Ed, o.maxBy = Sd, o.mean = Td, o.meanBy = bd, o.min = Ld, o.minBy = Od, o.stubArray = rs, o.stubFalse = is, o.stubObject = pd, o.stubString = gd, o.stubTrue = md, o.multiply = Rd, o.nth = Yl, o.noConflict = cd, o.noop = es, o.now = br, o.pad = Iu, o.padEnd = Cu, o.padStart = zu, o.parseInt = Pu, o.random = Au, o.reduce = Xo, o.reduceRight = $o, o.repeat = Du, o.replace = Uu, o.result = du, o.round = Id, o.runInContext = v, o.sample = Vo, o.size = jo, o.snakeCase = qu, o.some = t0, o.sortedIndex = Vl, o.sortedIndexBy = kl, o.sortedIndexOf = Ql, o.sortedLastIndex = jl, o.sortedLastIndexBy = to, o.sortedLastIndexOf = no, o.startCase = Bu, o.startsWith = Wu, o.subtract = Cd, o.sum = zd, o.sumBy = Pd, o.template = Nu, o.times = xd, o.toFinite = bn, o.toInteger = tt, o.toLength = Ea, o.toLower = Hu, o.toNumber = cn, o.toSafeInteger = H0, o.toString = pt, o.toUpper = Yu, o.trim = Gu, o.trimEnd = Ku, o.trimStart = Zu, o.truncate = Xu, o.unescape = $u, o.uniqueId = vd, o.upperCase = Ju, o.upperFirst = Qi, o.each = la, o.eachRight = oa, o.first = ca, ns(o, (function() {
          var n = {};
          return pn(o, function(r, i) {
            xt.call(o.prototype, i) || (n[i] = r);
          }), n;
        })(), { chain: !1 }), o.VERSION = s, jt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
          o[n].placeholder = o;
        }), jt(["drop", "take"], function(n, r) {
          ft.prototype[n] = function(i) {
            i = i === e ? 1 : Lt(tt(i), 0);
            var c = this.__filtered__ && !r ? new ft(this) : this.clone();
            return c.__filtered__ ? c.__takeCount__ = zt(i, c.__takeCount__) : c.__views__.push({
              size: zt(i, dn),
              type: n + (c.__dir__ < 0 ? "Right" : "")
            }), c;
          }, ft.prototype[n + "Right"] = function(i) {
            return this.reverse()[n](i).reverse();
          };
        }), jt(["filter", "map", "takeWhile"], function(n, r) {
          var i = r + 1, c = i == dt || i == kt;
          ft.prototype[n] = function(h) {
            var u = this.clone();
            return u.__iteratees__.push({
              iteratee: K(h, 3),
              type: i
            }), u.__filtered__ = u.__filtered__ || c, u;
          };
        }), jt(["head", "last"], function(n, r) {
          var i = "take" + (r ? "Right" : "");
          ft.prototype[n] = function() {
            return this[i](1).value()[0];
          };
        }), jt(["initial", "tail"], function(n, r) {
          var i = "drop" + (r ? "" : "Right");
          ft.prototype[n] = function() {
            return this.__filtered__ ? new ft(this) : this[i](1);
          };
        }), ft.prototype.compact = function() {
          return this.filter(Ht);
        }, ft.prototype.find = function(n) {
          return this.filter(n).head();
        }, ft.prototype.findLast = function(n) {
          return this.reverse().find(n);
        }, ft.prototype.invokeMap = st(function(n, r) {
          return typeof n == "function" ? new ft(this) : this.map(function(i) {
            return Oe(i, n, r);
          });
        }), ft.prototype.reject = function(n) {
          return this.filter(Or(K(n)));
        }, ft.prototype.slice = function(n, r) {
          n = tt(n);
          var i = this;
          return i.__filtered__ && (n > 0 || r < 0) ? new ft(i) : (n < 0 ? i = i.takeRight(-n) : n && (i = i.drop(n)), r !== e && (r = tt(r), i = r < 0 ? i.dropRight(-r) : i.take(r - n)), i);
        }, ft.prototype.takeRightWhile = function(n) {
          return this.reverse().takeWhile(n).reverse();
        }, ft.prototype.toArray = function() {
          return this.take(dn);
        }, pn(ft.prototype, function(n, r) {
          var i = /^(?:filter|find|map|reject)|While$/.test(r), c = /^(?:head|last)$/.test(r), h = o[c ? "take" + (r == "last" ? "Right" : "") : r], u = c || /^find/.test(r);
          h && (o.prototype[r] = function() {
            var g = this.__wrapped__, _ = c ? [1] : arguments, w = g instanceof ft, O = _[0], R = w || j(g), I = function(ct) {
              var ht = h.apply(o, Rn([ct], _));
              return c && P ? ht[0] : ht;
            };
            R && i && typeof O == "function" && O.length != 1 && (w = R = !1);
            var P = this.__chain__, N = !!this.__actions__.length, Z = u && !P, rt = w && !N;
            if (!u && R) {
              g = rt ? g : new ft(this);
              var X = n.apply(g, _);
              return X.__actions__.push({ func: Sr, args: [I], thisArg: e }), new nn(X, P);
            }
            return Z && rt ? n.apply(this, _) : (X = this.thru(I), Z ? c ? X.value()[0] : X.value() : X);
          });
        }), jt(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
          var r = ke[n], i = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", c = /^(?:pop|shift)$/.test(n);
          o.prototype[n] = function() {
            var h = arguments;
            if (c && !this.__chain__) {
              var u = this.value();
              return r.apply(j(u) ? u : [], h);
            }
            return this[i](function(g) {
              return r.apply(j(g) ? g : [], h);
            });
          };
        }), pn(ft.prototype, function(n, r) {
          var i = o[r];
          if (i) {
            var c = i.name + "";
            xt.call(se, c) || (se[c] = []), se[c].push({ name: r, func: i });
          }
        }), se[_r(e, C).name] = [{
          name: "wrapper",
          func: e
        }], ft.prototype.clone = Xh, ft.prototype.reverse = $h, ft.prototype.value = Jh, o.prototype.at = So, o.prototype.chain = To, o.prototype.commit = bo, o.prototype.next = Lo, o.prototype.plant = Ro, o.prototype.reverse = Io, o.prototype.toJSON = o.prototype.valueOf = o.prototype.value = Co, o.prototype.first = o.prototype.head, ye && (o.prototype[ye] = Oo), o;
      }), ee = Th();
      Nn ? ((Nn.exports = ee)._ = ee, ti._ = ee) : It._ = ee;
    }).call(Dd);
  })(qe, qe.exports)), qe.exports;
}
var qd = Ud();
function Fd(Y) {
  const t = document.createElement("canvas");
  return t.style.display = "block", t.style.width = Y.style.width, t.style.height = Y.style.height, Y.style.position = "relative", t.setAttribute("id", qd.uniqueId("canvas")), Y.append(t), t;
}
class Ha {
  static gl;
}
class Bd {
  canvas;
  gl;
  constructor(t) {
    const e = window.devicePixelRatio || 1, s = Fd(t), a = s.getBoundingClientRect();
    s.width = a.width * e, s.height = a.height * e, this.canvas = s, this.gl = s.getContext("webgl2", {
      stencil: !1
    }), Ha.gl = this.gl;
    const f = /* @__PURE__ */ new Set();
    f.add("OES_element_index_uint"), f.add("OES_vertex_array_object"), f.add("WEBGL_depth_texture"), f.forEach((l) => {
      this.gl.getExtension(l);
    });
  }
  init() {
  }
}
class Wd extends Set {
}
class qr {
  //创建
  create(t) {
  }
  //销毁
  destroy(t) {
  }
  //绑定
  tie(t) {
  }
  //解除绑定
  untie() {
  }
}
class Ya extends qr {
  source;
  shader;
  type;
  constructor(t, e) {
    super(), this.type = e, this.source = t;
  }
  tie(t) {
    this.create(t), this.shaderSource(t, this.source), this.compile(t), t.getShaderParameter(this.shader, t.COMPILE_STATUS) || console.error("Shader compilation error:", t.getShaderInfoLog(this.shader));
  }
  create(t) {
    this.shader = t.createShader({
      0: t.VERTEX_SHADER,
      1: t.FRAGMENT_SHADER
    }[this.type]);
  }
  shaderSource(t, e) {
    t.shaderSource(this.shader, e);
  }
  compile(t) {
    t.compileShader(this.shader);
  }
}
class Nd extends Ya {
  constructor(t) {
    super(
      t,
      1
      /* fragment */
    );
  }
}
class Hd extends Ya {
  constructor(t) {
    super(
      t,
      0
      /* vertex */
    );
  }
}
class Fe extends qr {
  static current;
  VertexShader;
  FragmentShader;
  id;
  gl;
  m_attributeLocations = {};
  m_uniformLocations = {};
  constructor(t, e) {
    super(), this.gl = t;
    for (let s of e)
      s.tie(t), s instanceof Hd && (this.VertexShader = s), s instanceof Nd && (this.FragmentShader = s);
  }
  create(t) {
    this.id = t.createProgram();
  }
  initAttribute(t) {
    const e = t.getProgramParameter(this.id, t.ACTIVE_ATTRIBUTES);
    for (let s = 0; s < e; s++) {
      const f = t.getActiveAttrib(this.id, s).name, l = t.getAttribLocation(this.id, f);
      this.m_attributeLocations[f] = {
        location: l
      };
    }
  }
  initUniform(t) {
    const e = t.getProgramParameter(this.id, t.ACTIVE_UNIFORMS);
    for (let s = 0; s < e; s++) {
      const a = t.getActiveUniform(this.id, s), f = a.name, l = t.getUniformLocation(this.id, f);
      this.m_uniformLocations[f] = {
        location: l,
        type: a.type
      };
    }
  }
  tie(t) {
    this.create(t), this.attach(), this.link(), this.use(), t.getProgramParameter(this.id, t.LINK_STATUS) || console.error("Program link error:", this.gl.getProgramInfoLog(this.id)), this.initAttribute(t), this.initUniform(t);
  }
  attach() {
    this.gl.attachShader(this.id, this.VertexShader.shader), this.gl.attachShader(this.id, this.FragmentShader.shader);
  }
  link() {
    this.gl.linkProgram(this.id);
  }
  use() {
    this.gl.useProgram(this.id), Fe.current = this;
  }
}
let Yd = class extends qr {
  constructor() {
    super();
  }
};
class ss extends Yd {
  constructor() {
    super();
  }
  static default() {
    return new ss();
  }
}
class Gd extends Array {
  constructor() {
    super();
  }
  build(t) {
    this.createQueue(t);
  }
  createQueue(t) {
    const e = [];
    e.push(
      ss.default()
    ), this.forEach((s) => {
      s.material.renderMode && s.geometry.updateDrawMode(s.material.renderMode.mode), e.push(
        new Fe(t, s.material.shader)
      ), this.camera.defaultUniform.forEach((a) => {
        e.push(a);
      }), s.material.state.forEach((a) => {
        e.push(a);
      }), s.material.uniform.forEach((a) => {
        e.push(a);
      }), s.geometry.vbos.forEach(
        (a) => {
          e.push(a);
        }
      ), s.geometry.drawers.forEach(
        (a) => {
          e.push(a);
        }
      );
    }), this.queue = e;
  }
  destroyQueue(t) {
  }
  queue = [];
  render(t) {
    this.destroyQueue(t), this.createQueue(t), t.clearColor(0, 0, 0, 0.5), t.clearDepth(1), t.enable(t.DEPTH_TEST), t.depthFunc(t.LEQUAL), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), this.queue.forEach((s) => {
      s.tie(t);
    });
    const e = t.getError();
    e !== t.NO_ERROR && console.error("WebGL Error:", e);
  }
}
class Kd {
  constructor() {
  }
}
class Zd {
  context;
  setContext(t) {
    this.context = t;
  }
}
class Xd extends Zd {
  constructor() {
    super();
  }
  end() {
  }
  start() {
    this.context.chain.setNext(this.context.cameraChain);
  }
}
class Ga {
  nextHandler;
  setNext(t) {
    return this.nextHandler = t, t;
  }
  mousedown(t) {
    return this.nextHandler ? this.nextHandler.mousedown(t) : null;
  }
  mouseup(t) {
    return this.nextHandler ? this.nextHandler.mouseup(t) : null;
  }
  mousemove(t) {
    return this.nextHandler ? this.nextHandler.mousemove(t) : null;
  }
}
class $d extends Ga {
}
const nt = 1e-6, Fa = new Float32Array([
  1,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  1
]);
class Ot extends Float32Array {
  /**
   * The number of bytes in a {@link Mat3}.
   */
  static BYTE_LENGTH = 9 * Float32Array.BYTES_PER_ELEMENT;
  /**
   * Create a {@link Mat3}.
   */
  constructor(...t) {
    switch (t.length) {
      case 9:
        super(t);
        break;
      case 2:
        super(t[0], t[1], 9);
        break;
      case 1:
        const e = t[0];
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
        super(Fa);
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
    return Ot.str(this);
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
  copy(t) {
    return this.set(t), this;
  }
  /**
   * Set `this` to the identity matrix
   * Equivalent to Mat3.identity(this)
   *
   * @returns `this`
   */
  identity() {
    return this.set(Fa), this;
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
  multiply(t) {
    return Ot.multiply(this, this, t);
  }
  /**
   * Alias for {@link Mat3.multiply}
   */
  mul(t) {
    return this;
  }
  /**
   * Transpose this {@link Mat3}
   * Equivalent to `Mat3.transpose(this, this);`
   *
   * @returns `this`
   */
  transpose() {
    return Ot.transpose(this, this);
  }
  /**
   * Inverts this {@link Mat3}
   * Equivalent to `Mat4.invert(this, this);`
   *
   * @returns `this`
   */
  invert() {
    return Ot.invert(this, this);
  }
  /**
   * Translate this {@link Mat3} by the given vector
   * Equivalent to `Mat3.translate(this, this, v);`
   *
   * @param v - The {@link Vec2} to translate by
   * @returns `this`
   */
  translate(t) {
    return Ot.translate(this, this, t);
  }
  /**
   * Rotates this {@link Mat3} by the given angle around the given axis
   * Equivalent to `Mat3.rotate(this, this, rad);`
   *
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  rotate(t) {
    return Ot.rotate(this, this, t);
  }
  /**
   * Scales this {@link Mat3} by the dimensions in the given vec3 not using vectorization
   * Equivalent to `Mat3.scale(this, this, v);`
   *
   * @param v - The {@link Vec2} to scale the matrix by
   * @returns `this`
   */
  scale(t) {
    return Ot.scale(this, this, t);
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
    return new Ot();
  }
  /**
   * Creates a new {@link Mat3} initialized with values from an existing matrix
   * @category Static
   *
   * @param a - Matrix to clone
   * @returns A new {@link Mat3}
   */
  static clone(t) {
    return new Ot(t);
  }
  /**
   * Copy the values from one {@link Mat3} to another
   * @category Static
   *
   * @param out - The receiving Matrix
   * @param a - Matrix to copy
   * @returns `out`
   */
  static copy(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t;
  }
  /**
   * Create a new {@link Mat3} with the given values
   * @category Static
   *
   * @param values - Matrix components
   * @returns A new {@link Mat3}
   */
  static fromValues(...t) {
    return new Ot(...t);
  }
  /**
   * Set the components of a {@link Mat3} to the given values
   * @category Static
   *
   * @param out - The receiving matrix
   * @param values - Matrix components
   * @returns `out`
   */
  static set(t, ...e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t;
  }
  /**
   * Set a {@link Mat3} to the identity matrix
   * @category Static
   *
   * @param out - The receiving matrix
   * @returns `out`
   */
  static identity(t) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
  }
  /**
   * Transpose the values of a {@link Mat3}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out`
   */
  static transpose(t, e) {
    if (t === e) {
      const s = e[1], a = e[2], f = e[5];
      t[1] = e[3], t[2] = e[6], t[3] = s, t[5] = e[7], t[6] = a, t[7] = f;
    } else
      t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8];
    return t;
  }
  /**
   * Inverts a {@link Mat3}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out`
   */
  static invert(t, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], d = e[4], p = e[5], m = e[6], x = e[7], M = e[8], S = M * d - p * x, A = -M * l + p * m, y = x * l - d * m;
    let b = s * S + a * A + f * y;
    return b ? (b = 1 / b, t[0] = S * b, t[1] = (-M * a + f * x) * b, t[2] = (p * a - f * d) * b, t[3] = A * b, t[4] = (M * s - f * m) * b, t[5] = (-p * s + f * l) * b, t[6] = y * b, t[7] = (-x * s + a * m) * b, t[8] = (d * s - a * l) * b, t) : null;
  }
  /**
   * Calculates the adjugate of a {@link Mat3}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out`
   */
  static adjoint(t, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], d = e[4], p = e[5], m = e[6], x = e[7], M = e[8];
    return t[0] = d * M - p * x, t[1] = f * x - a * M, t[2] = a * p - f * d, t[3] = p * m - l * M, t[4] = s * M - f * m, t[5] = f * l - s * p, t[6] = l * x - d * m, t[7] = a * m - s * x, t[8] = s * d - a * l, t;
  }
  /**
   * Calculates the determinant of a {@link Mat3}
   * @category Static
   *
   * @param a - the source matrix
   * @returns determinant of a
   */
  static determinant(t) {
    const e = t[0], s = t[1], a = t[2], f = t[3], l = t[4], d = t[5], p = t[6], m = t[7], x = t[8];
    return e * (x * l - d * m) + s * (-x * f + d * p) + a * (m * f - l * p);
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
  static add(t, e, s) {
    return t[0] = e[0] + s[0], t[1] = e[1] + s[1], t[2] = e[2] + s[2], t[3] = e[3] + s[3], t[4] = e[4] + s[4], t[5] = e[5] + s[5], t[6] = e[6] + s[6], t[7] = e[7] + s[7], t[8] = e[8] + s[8], t;
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
  static subtract(t, e, s) {
    return t[0] = e[0] - s[0], t[1] = e[1] - s[1], t[2] = e[2] - s[2], t[3] = e[3] - s[3], t[4] = e[4] - s[4], t[5] = e[5] - s[5], t[6] = e[6] - s[6], t[7] = e[7] - s[7], t[8] = e[8] - s[8], t;
  }
  /**
   * Alias for {@link Mat3.subtract}
   * @category Static
   */
  static sub(t, e, s) {
    return t;
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
  static multiply(t, e, s) {
    const a = e[0], f = e[1], l = e[2], d = e[3], p = e[4], m = e[5], x = e[6], M = e[7], S = e[8];
    let A = s[0], y = s[1], b = s[2];
    return t[0] = A * a + y * d + b * x, t[1] = A * f + y * p + b * M, t[2] = A * l + y * m + b * S, A = s[3], y = s[4], b = s[5], t[3] = A * a + y * d + b * x, t[4] = A * f + y * p + b * M, t[5] = A * l + y * m + b * S, A = s[6], y = s[7], b = s[8], t[6] = A * a + y * d + b * x, t[7] = A * f + y * p + b * M, t[8] = A * l + y * m + b * S, t;
  }
  /**
   * Alias for {@link Mat3.multiply}
   * @category Static
   */
  static mul(t, e, s) {
    return t;
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
  static translate(t, e, s) {
    const a = e[0], f = e[1], l = e[2], d = e[3], p = e[4], m = e[5], x = e[6], M = e[7], S = e[8], A = s[0], y = s[1];
    return t[0] = a, t[1] = f, t[2] = l, t[3] = d, t[4] = p, t[5] = m, t[6] = A * a + y * d + x, t[7] = A * f + y * p + M, t[8] = A * l + y * m + S, t;
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
  static rotate(t, e, s) {
    const a = e[0], f = e[1], l = e[2], d = e[3], p = e[4], m = e[5], x = e[6], M = e[7], S = e[8], A = Math.sin(s), y = Math.cos(s);
    return t[0] = y * a + A * d, t[1] = y * f + A * p, t[2] = y * l + A * m, t[3] = y * d - A * a, t[4] = y * p - A * f, t[5] = y * m - A * l, t[6] = x, t[7] = M, t[8] = S, t;
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
  static scale(t, e, s) {
    const a = s[0], f = s[1];
    return t[0] = a * e[0], t[1] = a * e[1], t[2] = a * e[2], t[3] = f * e[3], t[4] = f * e[4], t[5] = f * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t;
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
  static fromTranslation(t, e) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = e[0], t[7] = e[1], t[8] = 1, t;
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
  static fromRotation(t, e) {
    const s = Math.sin(e), a = Math.cos(e);
    return t[0] = a, t[1] = s, t[2] = 0, t[3] = -s, t[4] = a, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
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
  static fromScaling(t, e) {
    return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = e[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
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
  static fromMat2d(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = 0, t[3] = e[2], t[4] = e[3], t[5] = 0, t[6] = e[4], t[7] = e[5], t[8] = 1, t;
  }
  /**
   * Calculates a {@link Mat3} from the given quaternion
   *
   * @param out - {@link Mat3} receiving operation result
   * @param q - {@link Quat} to create matrix from
   * @returns `out`
   */
  static fromQuat(t, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], d = s + s, p = a + a, m = f + f, x = s * d, M = a * d, S = a * p, A = f * d, y = f * p, b = f * m, T = l * d, C = l * p, U = l * m;
    return t[0] = 1 - S - b, t[3] = M - U, t[6] = A + C, t[1] = M + U, t[4] = 1 - x - b, t[7] = y - T, t[2] = A - C, t[5] = y + T, t[8] = 1 - x - S, t;
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
  static fromMat4(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[4], t[4] = e[5], t[5] = e[6], t[6] = e[8], t[7] = e[9], t[8] = e[10], t;
  }
  /**
   * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
   * @category Static
   *
   * @param {mat3} out mat3 receiving operation result
   * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
   * @returns `out`
   */
  static normalFromMat4(t, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], d = e[4], p = e[5], m = e[6], x = e[7], M = e[8], S = e[9], A = e[10], y = e[11], b = e[12], T = e[13], C = e[14], U = e[15], W = s * p - a * d, q = s * m - f * d, z = s * x - l * d, F = a * m - f * p, D = a * x - l * p, it = f * x - l * m, et = M * T - S * b, lt = M * C - A * b, G = M * U - y * b, _t = S * C - A * T, mt = S * U - y * T, dt = A * U - y * C;
    let V = W * dt - q * mt + z * _t + F * G - D * lt + it * et;
    return V ? (V = 1 / V, t[0] = (p * dt - m * mt + x * _t) * V, t[1] = (m * G - d * dt - x * lt) * V, t[2] = (d * mt - p * G + x * et) * V, t[3] = (f * mt - a * dt - l * _t) * V, t[4] = (s * dt - f * G + l * lt) * V, t[5] = (a * G - s * mt - l * et) * V, t[6] = (T * it - C * D + U * F) * V, t[7] = (C * z - b * it - U * q) * V, t[8] = (b * D - T * z + U * W) * V, t) : null;
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
  static projection(t, e, s) {
    return t[0] = 2 / e, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / s, t[5] = 0, t[6] = -1, t[7] = 1, t[8] = 1, t;
  }
  /**
   * Returns Frobenius norm of a {@link Mat3}
   * @category Static
   *
   * @param a - the matrix to calculate Frobenius norm of
   * @returns Frobenius norm
   */
  static frob(t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2] + t[3] * t[3] + t[4] * t[4] + t[5] * t[5] + t[6] * t[6] + t[7] * t[7] + t[8] * t[8]);
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
  static multiplyScalar(t, e, s) {
    return t[0] = e[0] * s, t[1] = e[1] * s, t[2] = e[2] * s, t[3] = e[3] * s, t[4] = e[4] * s, t[5] = e[5] * s, t[6] = e[6] * s, t[7] = e[7] * s, t[8] = e[8] * s, t;
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
  static multiplyScalarAndAdd(t, e, s, a) {
    return t[0] = e[0] + s[0] * a, t[1] = e[1] + s[1] * a, t[2] = e[2] + s[2] * a, t[3] = e[3] + s[3] * a, t[4] = e[4] + s[4] * a, t[5] = e[5] + s[5] * a, t[6] = e[6] + s[6] * a, t[7] = e[7] + s[7] * a, t[8] = e[8] + s[8] * a, t;
  }
  /**
   * Returns whether or not two {@link Mat3}s have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first matrix.
   * @param b - The second matrix.
   * @returns True if the matrices are equal, false otherwise.
   */
  static exactEquals(t, e) {
    return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8];
  }
  /**
   * Returns whether or not two {@link Mat3}s have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first matrix.
   * @param b - The second matrix.
   * @returns True if the matrices are equal, false otherwise.
   */
  static equals(t, e) {
    const s = t[0], a = t[1], f = t[2], l = t[3], d = t[4], p = t[5], m = t[6], x = t[7], M = t[8], S = e[0], A = e[1], y = e[2], b = e[3], T = e[4], C = e[5], U = e[6], W = e[7], q = e[8];
    return Math.abs(s - S) <= nt * Math.max(1, Math.abs(s), Math.abs(S)) && Math.abs(a - A) <= nt * Math.max(1, Math.abs(a), Math.abs(A)) && Math.abs(f - y) <= nt * Math.max(1, Math.abs(f), Math.abs(y)) && Math.abs(l - b) <= nt * Math.max(1, Math.abs(l), Math.abs(b)) && Math.abs(d - T) <= nt * Math.max(1, Math.abs(d), Math.abs(T)) && Math.abs(p - C) <= nt * Math.max(1, Math.abs(p), Math.abs(C)) && Math.abs(m - U) <= nt * Math.max(1, Math.abs(m), Math.abs(U)) && Math.abs(x - W) <= nt * Math.max(1, Math.abs(x), Math.abs(W)) && Math.abs(M - q) <= nt * Math.max(1, Math.abs(M), Math.abs(q));
  }
  /**
   * Returns a string representation of a {@link Mat3}
   * @category Static
   *
   * @param a - matrix to represent as a string
   * @returns string representation of the matrix
   */
  static str(t) {
    return `Mat3(${t.join(", ")})`;
  }
}
Ot.prototype.mul = Ot.prototype.multiply;
Ot.mul = Ot.multiply;
Ot.sub = Ot.subtract;
const Pr = Ot;
class $ extends Float32Array {
  /**
  * The number of bytes in a {@link Vec3}.
  */
  static BYTE_LENGTH = 3 * Float32Array.BYTES_PER_ELEMENT;
  /**
  * Create a {@link Vec3}.
  */
  constructor(...t) {
    switch (t.length) {
      case 3:
        super(t);
        break;
      case 2:
        super(t[0], t[1], 3);
        break;
      case 1: {
        const e = t[0];
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
  set x(t) {
    this[0] = t;
  }
  /**
   * The y component of the vector. Equivalent to `this[1];`
   * @category Vector components
   */
  get y() {
    return this[1];
  }
  set y(t) {
    this[1] = t;
  }
  /**
   * The z component of the vector. Equivalent to `this[2];`
   * @category Vector components
   */
  get z() {
    return this[2];
  }
  set z(t) {
    this[2] = t;
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
  set r(t) {
    this[0] = t;
  }
  /**
   * The g component of the vector. Equivalent to `this[1];`
   * @category Color components
   */
  get g() {
    return this[1];
  }
  set g(t) {
    this[1] = t;
  }
  /**
   * The b component of the vector. Equivalent to `this[2];`
   * @category Color components
   */
  get b() {
    return this[2];
  }
  set b(t) {
    this[2] = t;
  }
  /**
   * The magnitude (length) of this.
   * Equivalent to `Vec3.magnitude(this);`
   *
   * Magnitude is used because the `length` attribute is already defined by
   * `Float32Array` to mean the number of elements in the array.
   */
  get magnitude() {
    const t = this[0], e = this[1], s = this[2];
    return Math.sqrt(t * t + e * e + s * s);
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
    const t = this[0], e = this[1], s = this[2];
    return t * t + e * e + s * s;
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
    return $.str(this);
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
  copy(t) {
    return this.set(t), this;
  }
  /**
   * Adds a {@link Vec3} to `this`.
   * Equivalent to `Vec3.add(this, this, b);`
   *
   * @param b - The vector to add to `this`
   * @returns `this`
   */
  add(t) {
    return this[0] += t[0], this[1] += t[1], this[2] += t[2], this;
  }
  /**
   * Subtracts a {@link Vec3} from `this`.
   * Equivalent to `Vec3.subtract(this, this, b);`
   *
   * @param b - The vector to subtract from `this`
   * @returns `this`
   */
  subtract(t) {
    return this[0] -= t[0], this[1] -= t[1], this[2] -= t[2], this;
  }
  /**
   * Alias for {@link Vec3.subtract}
   */
  sub(t) {
    return this;
  }
  /**
   * Multiplies `this` by a {@link Vec3}.
   * Equivalent to `Vec3.multiply(this, this, b);`
   *
   * @param b - The vector to multiply `this` by
   * @returns `this`
   */
  multiply(t) {
    return this[0] *= t[0], this[1] *= t[1], this[2] *= t[2], this;
  }
  /**
   * Alias for {@link Vec3.multiply}
   */
  mul(t) {
    return this;
  }
  /**
   * Divides `this` by a {@link Vec3}.
   * Equivalent to `Vec3.divide(this, this, b);`
   *
   * @param b - The vector to divide `this` by
   * @returns `this`
   */
  divide(t) {
    return this[0] /= t[0], this[1] /= t[1], this[2] /= t[2], this;
  }
  /**
   * Alias for {@link Vec3.divide}
   */
  div(t) {
    return this;
  }
  /**
   * Scales `this` by a scalar number.
   * Equivalent to `Vec3.scale(this, this, b);`
   *
   * @param b - Amount to scale `this` by
   * @returns `this`
   */
  scale(t) {
    return this[0] *= t, this[1] *= t, this[2] *= t, this;
  }
  /**
   * Calculates `this` scaled by a scalar value then adds the result to `this`.
   * Equivalent to `Vec3.scaleAndAdd(this, this, b, scale);`
   *
   * @param b - The vector to add to `this`
   * @param scale - The amount to scale `b` by before adding
   * @returns `this`
   */
  scaleAndAdd(t, e) {
    return this[0] += t[0] * e, this[1] += t[1] * e, this[2] += t[2] * e, this;
  }
  /**
   * Calculates the euclidian distance between another {@link Vec3} and `this`.
   * Equivalent to `Vec3.distance(this, b);`
   *
   * @param b - The vector to calculate the distance to
   * @returns Distance between `this` and `b`
   */
  distance(t) {
    return $.distance(this, t);
  }
  /**
   * Alias for {@link Vec3.distance}
   */
  dist(t) {
    return 0;
  }
  /**
   * Calculates the squared euclidian distance between another {@link Vec3} and `this`.
   * Equivalent to `Vec3.squaredDistance(this, b);`
   *
   * @param b The vector to calculate the squared distance to
   * @returns Squared distance between `this` and `b`
   */
  squaredDistance(t) {
    return $.squaredDistance(this, t);
  }
  /**
   * Alias for {@link Vec3.squaredDistance}
   */
  sqrDist(t) {
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
  dot(t) {
    return this[0] * t[0] + this[1] * t[1] + this[2] * t[2];
  }
  /**
   * Normalize `this`.
   * Equivalent to `Vec3.normalize(this, this);`
   *
   * @returns `this`
   */
  normalize() {
    return $.normalize(this, this);
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
    return new $();
  }
  /**
   * Creates a new vec3 initialized with values from an existing vector
   * @category Static
   *
   * @param a - vector to clone
   * @returns a new 3D vector
   */
  static clone(t) {
    return new $(t);
  }
  /**
   * Calculates the magnitude (length) of a {@link Vec3}
   * @category Static
   *
   * @param a - Vector to calculate magnitude of
   * @returns Magnitude of a
   */
  static magnitude(t) {
    let e = t[0], s = t[1], a = t[2];
    return Math.sqrt(e * e + s * s + a * a);
  }
  /**
   * Alias for {@link Vec3.magnitude}
   * @category Static
   */
  static mag(t) {
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
  static length(t) {
    return 0;
  }
  /**
   * Alias for {@link Vec3.magnitude}
   * @category Static
   * @deprecated Use {@link Vec3.mag}
   */
  static len(t) {
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
  static fromValues(t, e, s) {
    return new $(t, e, s);
  }
  /**
   * Copy the values from one vec3 to another
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the source vector
   * @returns `out`
   */
  static copy(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
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
  static set(t, e, s, a) {
    return t[0] = e, t[1] = s, t[2] = a, t;
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
  static add(t, e, s) {
    return t[0] = e[0] + s[0], t[1] = e[1] + s[1], t[2] = e[2] + s[2], t;
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
  static subtract(t, e, s) {
    return t[0] = e[0] - s[0], t[1] = e[1] - s[1], t[2] = e[2] - s[2], t;
  }
  /**
   * Alias for {@link Vec3.subtract}
   * @category Static
   */
  static sub(t, e, s) {
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
  static multiply(t, e, s) {
    return t[0] = e[0] * s[0], t[1] = e[1] * s[1], t[2] = e[2] * s[2], t;
  }
  /**
   * Alias for {@link Vec3.multiply}
   * @category Static
   */
  static mul(t, e, s) {
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
  static divide(t, e, s) {
    return t[0] = e[0] / s[0], t[1] = e[1] / s[1], t[2] = e[2] / s[2], t;
  }
  /**
   * Alias for {@link Vec3.divide}
   * @category Static
   */
  static div(t, e, s) {
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
  static ceil(t, e) {
    return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t;
  }
  /**
   * Math.floor the components of a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to floor
   * @returns `out`
   */
  static floor(t, e) {
    return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t;
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
  static min(t, e, s) {
    return t[0] = Math.min(e[0], s[0]), t[1] = Math.min(e[1], s[1]), t[2] = Math.min(e[2], s[2]), t;
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
  static max(t, e, s) {
    return t[0] = Math.max(e[0], s[0]), t[1] = Math.max(e[1], s[1]), t[2] = Math.max(e[2], s[2]), t;
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
  static scale(t, e, s) {
    return t[0] = e[0] * s, t[1] = e[1] * s, t[2] = e[2] * s, t;
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
  static scaleAndAdd(t, e, s, a) {
    return t[0] = e[0] + s[0] * a, t[1] = e[1] + s[1] * a, t[2] = e[2] + s[2] * a, t;
  }
  /**
   * Calculates the euclidian distance between two vec3's
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns distance between a and b
   */
  static distance(t, e) {
    const s = e[0] - t[0], a = e[1] - t[1], f = e[2] - t[2];
    return Math.sqrt(s * s + a * a + f * f);
  }
  /**
   * Alias for {@link Vec3.distance}
   */
  static dist(t, e) {
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
  static squaredDistance(t, e) {
    const s = e[0] - t[0], a = e[1] - t[1], f = e[2] - t[2];
    return s * s + a * a + f * f;
  }
  /**
   * Alias for {@link Vec3.squaredDistance}
   */
  static sqrDist(t, e) {
    return 0;
  }
  /**
   * Calculates the squared length of a vec3
   * @category Static
   *
   * @param a - vector to calculate squared length of
   * @returns squared length of a
   */
  static squaredLength(t) {
    const e = t[0], s = t[1], a = t[2];
    return e * e + s * s + a * a;
  }
  /**
   * Alias for {@link Vec3.squaredLength}
   */
  static sqrLen(t, e) {
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
  static negate(t, e) {
    return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t;
  }
  /**
   * Returns the inverse of the components of a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to invert
   * @returns `out`
   */
  static inverse(t, e) {
    return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t;
  }
  /**
   * Normalize a vec3
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to normalize
   * @returns `out`
   */
  static normalize(t, e) {
    const s = e[0], a = e[1], f = e[2];
    let l = s * s + a * a + f * f;
    return l > 0 && (l = 1 / Math.sqrt(l)), t[0] = e[0] * l, t[1] = e[1] * l, t[2] = e[2] * l, t;
  }
  /**
   * Calculates the dot product of two vec3's
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns dot product of a and b
   */
  static dot(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
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
  static cross(t, e, s) {
    const a = e[0], f = e[1], l = e[2], d = s[0], p = s[1], m = s[2];
    return t[0] = f * m - l * p, t[1] = l * d - a * m, t[2] = a * p - f * d, t;
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
  static lerp(t, e, s, a) {
    const f = e[0], l = e[1], d = e[2];
    return t[0] = f + a * (s[0] - f), t[1] = l + a * (s[1] - l), t[2] = d + a * (s[2] - d), t;
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
  static slerp(t, e, s, a) {
    const f = Math.acos(Math.min(Math.max($.dot(e, s), -1), 1)), l = Math.sin(f), d = Math.sin((1 - a) * f) / l, p = Math.sin(a * f) / l;
    return t[0] = d * e[0] + p * s[0], t[1] = d * e[1] + p * s[1], t[2] = d * e[2] + p * s[2], t;
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
  static hermite(t, e, s, a, f, l) {
    const d = l * l, p = d * (2 * l - 3) + 1, m = d * (l - 2) + l, x = d * (l - 1), M = d * (3 - 2 * l);
    return t[0] = e[0] * p + s[0] * m + a[0] * x + f[0] * M, t[1] = e[1] * p + s[1] * m + a[1] * x + f[1] * M, t[2] = e[2] * p + s[2] * m + a[2] * x + f[2] * M, t;
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
  static bezier(t, e, s, a, f, l) {
    const d = 1 - l, p = d * d, m = l * l, x = p * d, M = 3 * l * p, S = 3 * m * d, A = m * l;
    return t[0] = e[0] * x + s[0] * M + a[0] * S + f[0] * A, t[1] = e[1] * x + s[1] * M + a[1] * S + f[1] * A, t[2] = e[2] * x + s[2] * M + a[2] * S + f[2] * A, t;
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
  static transformMat4(t, e, s) {
    const a = e[0], f = e[1], l = e[2], d = s[3] * a + s[7] * f + s[11] * l + s[15] || 1;
    return t[0] = (s[0] * a + s[4] * f + s[8] * l + s[12]) / d, t[1] = (s[1] * a + s[5] * f + s[9] * l + s[13]) / d, t[2] = (s[2] * a + s[6] * f + s[10] * l + s[14]) / d, t;
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
  static transformMat3(t, e, s) {
    let a = e[0], f = e[1], l = e[2];
    return t[0] = a * s[0] + f * s[3] + l * s[6], t[1] = a * s[1] + f * s[4] + l * s[7], t[2] = a * s[2] + f * s[5] + l * s[8], t;
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
  static transformQuat(t, e, s) {
    const a = s[0], f = s[1], l = s[2], d = s[3] * 2, p = e[0], m = e[1], x = e[2], M = f * x - l * m, S = l * p - a * x, A = a * m - f * p, y = (f * A - l * S) * 2, b = (l * M - a * A) * 2, T = (a * S - f * M) * 2;
    return t[0] = p + M * d + y, t[1] = m + S * d + b, t[2] = x + A * d + T, t;
  }
  /**
   * Rotate a 3D vector around the x-axis
   * @param out - The receiving vec3
   * @param a - The vec3 point to rotate
   * @param b - The origin of the rotation
   * @param rad - The angle of rotation in radians
   * @returns `out`
   */
  static rotateX(t, e, s, a) {
    const f = s[1], l = s[2], d = e[1] - f, p = e[2] - l;
    return t[0] = e[0], t[1] = d * Math.cos(a) - p * Math.sin(a) + f, t[2] = d * Math.sin(a) + p * Math.cos(a) + l, t;
  }
  /**
   * Rotate a 3D vector around the y-axis
   * @param out - The receiving vec3
   * @param a - The vec3 point to rotate
   * @param b - The origin of the rotation
   * @param rad - The angle of rotation in radians
   * @returns `out`
   */
  static rotateY(t, e, s, a) {
    const f = s[0], l = s[2], d = e[0] - f, p = e[2] - l;
    return t[0] = p * Math.sin(a) + d * Math.cos(a) + f, t[1] = e[1], t[2] = p * Math.cos(a) - d * Math.sin(a) + l, t;
  }
  /**
   * Rotate a 3D vector around the z-axis
   * @param out - The receiving vec3
   * @param a - The vec3 point to rotate
   * @param b - The origin of the rotation
   * @param rad - The angle of rotation in radians
   * @returns `out`
   */
  static rotateZ(t, e, s, a) {
    const f = s[0], l = s[1], d = e[0] - f, p = e[1] - l;
    return t[0] = d * Math.cos(a) - p * Math.sin(a) + f, t[1] = d * Math.sin(a) + p * Math.cos(a) + l, t[2] = s[2], t;
  }
  /**
   * Get the angle between two 3D vectors
   * @param a - The first operand
   * @param b - The second operand
   * @returns The angle in radians
   */
  static angle(t, e) {
    const s = t[0], a = t[1], f = t[2], l = e[0], d = e[1], p = e[2], m = Math.sqrt((s * s + a * a + f * f) * (l * l + d * d + p * p)), x = m && $.dot(t, e) / m;
    return Math.acos(Math.min(Math.max(x, -1), 1));
  }
  /**
   * Set the components of a vec3 to zero
   * @category Static
   *
   * @param out - the receiving vector
   * @returns `out`
   */
  static zero(t) {
    return t[0] = 0, t[1] = 0, t[2] = 0, t;
  }
  /**
   * Returns a string representation of a vector
   * @category Static
   *
   * @param a - vector to represent as a string
   * @returns string representation of the vector
   */
  static str(t) {
    return `Vec3(${t.join(", ")})`;
  }
  /**
   * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static exactEquals(t, e) {
    return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
  }
  /**
   * Returns whether or not the vectors have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static equals(t, e) {
    const s = t[0], a = t[1], f = t[2], l = e[0], d = e[1], p = e[2];
    return Math.abs(s - l) <= nt * Math.max(1, Math.abs(s), Math.abs(l)) && Math.abs(a - d) <= nt * Math.max(1, Math.abs(a), Math.abs(d)) && Math.abs(f - p) <= nt * Math.max(1, Math.abs(f), Math.abs(p));
  }
}
$.prototype.sub = $.prototype.subtract;
$.prototype.mul = $.prototype.multiply;
$.prototype.div = $.prototype.divide;
$.prototype.dist = $.prototype.distance;
$.prototype.sqrDist = $.prototype.squaredDistance;
$.sub = $.subtract;
$.mul = $.multiply;
$.div = $.divide;
$.dist = $.distance;
$.sqrDist = $.squaredDistance;
$.sqrLen = $.squaredLength;
$.mag = $.magnitude;
$.length = $.magnitude;
$.len = $.magnitude;
const H = $, Ba = new Float32Array([
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
]);
class ot extends Float32Array {
  /**
   * The number of bytes in a {@link Mat4}.
   */
  static BYTE_LENGTH = 16 * Float32Array.BYTES_PER_ELEMENT;
  /**
   * Create a {@link Mat4}.
   */
  constructor(...t) {
    switch (t.length) {
      case 16:
        super(t);
        break;
      case 2:
        super(t[0], t[1], 16);
        break;
      case 1:
        const e = t[0];
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
        super(Ba);
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
    return ot.str(this);
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
  copy(t) {
    return this.set(t), this;
  }
  /**
   * Set `this` to the identity matrix
   * Equivalent to Mat4.identity(this)
   *
   * @returns `this`
   */
  identity() {
    return this.set(Ba), this;
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
  multiply(t) {
    return ot.multiply(this, this, t);
  }
  /**
   * Alias for {@link Mat4.multiply}
   */
  mul(t) {
    return this;
  }
  /**
   * Transpose this {@link Mat4}
   * Equivalent to `Mat4.transpose(this, this);`
   *
   * @returns `this`
   */
  transpose() {
    return ot.transpose(this, this);
  }
  /**
   * Inverts this {@link Mat4}
   * Equivalent to `Mat4.invert(this, this);`
   *
   * @returns `this`
   */
  invert() {
    return ot.invert(this, this);
  }
  /**
   * Translate this {@link Mat4} by the given vector
   * Equivalent to `Mat4.translate(this, this, v);`
   *
   * @param v - The {@link Vec3} to translate by
   * @returns `this`
   */
  translate(t) {
    return ot.translate(this, this, t);
  }
  /**
   * Rotates this {@link Mat4} by the given angle around the given axis
   * Equivalent to `Mat4.rotate(this, this, rad, axis);`
   *
   * @param rad - the angle to rotate the matrix by
   * @param axis - the axis to rotate around
   * @returns `out`
   */
  rotate(t, e) {
    return ot.rotate(this, this, t, e);
  }
  /**
   * Scales this {@link Mat4} by the dimensions in the given vec3 not using vectorization
   * Equivalent to `Mat4.scale(this, this, v);`
   *
   * @param v - The {@link Vec3} to scale the matrix by
   * @returns `this`
   */
  scale(t) {
    return ot.scale(this, this, t);
  }
  /**
   * Rotates this {@link Mat4} by the given angle around the X axis
   * Equivalent to `Mat4.rotateX(this, this, rad);`
   *
   * @param rad - the angle to rotate the matrix by
   * @returns `this`
   */
  rotateX(t) {
    return ot.rotateX(this, this, t);
  }
  /**
   * Rotates this {@link Mat4} by the given angle around the Y axis
   * Equivalent to `Mat4.rotateY(this, this, rad);`
   *
   * @param rad - the angle to rotate the matrix by
   * @returns `this`
   */
  rotateY(t) {
    return ot.rotateY(this, this, t);
  }
  /**
   * Rotates this {@link Mat4} by the given angle around the Z axis
   * Equivalent to `Mat4.rotateZ(this, this, rad);`
   *
   * @param rad - the angle to rotate the matrix by
   * @returns `this`
   */
  rotateZ(t) {
    return ot.rotateZ(this, this, t);
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
  perspectiveNO(t, e, s, a) {
    return ot.perspectiveNO(this, t, e, s, a);
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
  perspectiveZO(t, e, s, a) {
    return ot.perspectiveZO(this, t, e, s, a);
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
  orthoNO(t, e, s, a, f, l) {
    return ot.orthoNO(this, t, e, s, a, f, l);
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
  orthoZO(t, e, s, a, f, l) {
    return ot.orthoZO(this, t, e, s, a, f, l);
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
    return new ot();
  }
  /**
   * Creates a new {@link Mat4} initialized with values from an existing matrix
   * @category Static
   *
   * @param a - Matrix to clone
   * @returns A new {@link Mat4}
   */
  static clone(t) {
    return new ot(t);
  }
  /**
   * Copy the values from one {@link Mat4} to another
   * @category Static
   *
   * @param out - The receiving Matrix
   * @param a - Matrix to copy
   * @returns `out`
   */
  static copy(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
  }
  /**
   * Create a new mat4 with the given values
   * @category Static
   *
   * @param values - Matrix components
   * @returns A new {@link Mat4}
   */
  static fromValues(...t) {
    return new ot(...t);
  }
  /**
   * Set the components of a mat4 to the given values
   * @category Static
   *
   * @param out - The receiving matrix
   * @param values - Matrix components
   * @returns `out`
   */
  static set(t, ...e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
  }
  /**
   * Set a {@link Mat4} to the identity matrix
   * @category Static
   *
   * @param out - The receiving Matrix
   * @returns `out`
   */
  static identity(t) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
  }
  /**
   * Transpose the values of a {@link Mat4}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out`
   */
  static transpose(t, e) {
    if (t === e) {
      const s = e[1], a = e[2], f = e[3], l = e[6], d = e[7], p = e[11];
      t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = s, t[6] = e[9], t[7] = e[13], t[8] = a, t[9] = l, t[11] = e[14], t[12] = f, t[13] = d, t[14] = p;
    } else
      t[0] = e[0], t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = e[1], t[5] = e[5], t[6] = e[9], t[7] = e[13], t[8] = e[2], t[9] = e[6], t[10] = e[10], t[11] = e[14], t[12] = e[3], t[13] = e[7], t[14] = e[11], t[15] = e[15];
    return t;
  }
  /**
   * Inverts a {@link Mat4}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out`
   */
  static invert(t, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], d = e[4], p = e[5], m = e[6], x = e[7], M = e[8], S = e[9], A = e[10], y = e[11], b = e[12], T = e[13], C = e[14], U = e[15], W = s * p - a * d, q = s * m - f * d, z = s * x - l * d, F = a * m - f * p, D = a * x - l * p, it = f * x - l * m, et = M * T - S * b, lt = M * C - A * b, G = M * U - y * b, _t = S * C - A * T, mt = S * U - y * T, dt = A * U - y * C;
    let V = W * dt - q * mt + z * _t + F * G - D * lt + it * et;
    return V ? (V = 1 / V, t[0] = (p * dt - m * mt + x * _t) * V, t[1] = (f * mt - a * dt - l * _t) * V, t[2] = (T * it - C * D + U * F) * V, t[3] = (A * D - S * it - y * F) * V, t[4] = (m * G - d * dt - x * lt) * V, t[5] = (s * dt - f * G + l * lt) * V, t[6] = (C * z - b * it - U * q) * V, t[7] = (M * it - A * z + y * q) * V, t[8] = (d * mt - p * G + x * et) * V, t[9] = (a * G - s * mt - l * et) * V, t[10] = (b * D - T * z + U * W) * V, t[11] = (S * z - M * D - y * W) * V, t[12] = (p * lt - d * _t - m * et) * V, t[13] = (s * _t - a * lt + f * et) * V, t[14] = (T * q - b * F - C * W) * V, t[15] = (M * F - S * q + A * W) * V, t) : null;
  }
  /**
   * Calculates the adjugate of a {@link Mat4}
   * @category Static
   *
   * @param out - the receiving matrix
   * @param a - the source matrix
   * @returns `out`
   */
  static adjoint(t, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], d = e[4], p = e[5], m = e[6], x = e[7], M = e[8], S = e[9], A = e[10], y = e[11], b = e[12], T = e[13], C = e[14], U = e[15], W = s * p - a * d, q = s * m - f * d, z = s * x - l * d, F = a * m - f * p, D = a * x - l * p, it = f * x - l * m, et = M * T - S * b, lt = M * C - A * b, G = M * U - y * b, _t = S * C - A * T, mt = S * U - y * T, dt = A * U - y * C;
    return t[0] = p * dt - m * mt + x * _t, t[1] = f * mt - a * dt - l * _t, t[2] = T * it - C * D + U * F, t[3] = A * D - S * it - y * F, t[4] = m * G - d * dt - x * lt, t[5] = s * dt - f * G + l * lt, t[6] = C * z - b * it - U * q, t[7] = M * it - A * z + y * q, t[8] = d * mt - p * G + x * et, t[9] = a * G - s * mt - l * et, t[10] = b * D - T * z + U * W, t[11] = S * z - M * D - y * W, t[12] = p * lt - d * _t - m * et, t[13] = s * _t - a * lt + f * et, t[14] = T * q - b * F - C * W, t[15] = M * F - S * q + A * W, t;
  }
  /**
   * Calculates the determinant of a {@link Mat4}
   * @category Static
   *
   * @param a - the source matrix
   * @returns determinant of a
   */
  static determinant(t) {
    const e = t[0], s = t[1], a = t[2], f = t[3], l = t[4], d = t[5], p = t[6], m = t[7], x = t[8], M = t[9], S = t[10], A = t[11], y = t[12], b = t[13], T = t[14], C = t[15], U = e * d - s * l, W = e * p - a * l, q = s * p - a * d, z = x * b - M * y, F = x * T - S * y, D = M * T - S * b, it = e * D - s * F + a * z, et = l * D - d * F + p * z, lt = x * q - M * W + S * U, G = y * q - b * W + T * U;
    return m * it - f * et + C * lt - A * G;
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
  static multiply(t, e, s) {
    const a = e[0], f = e[1], l = e[2], d = e[3], p = e[4], m = e[5], x = e[6], M = e[7], S = e[8], A = e[9], y = e[10], b = e[11], T = e[12], C = e[13], U = e[14], W = e[15];
    let q = s[0], z = s[1], F = s[2], D = s[3];
    return t[0] = q * a + z * p + F * S + D * T, t[1] = q * f + z * m + F * A + D * C, t[2] = q * l + z * x + F * y + D * U, t[3] = q * d + z * M + F * b + D * W, q = s[4], z = s[5], F = s[6], D = s[7], t[4] = q * a + z * p + F * S + D * T, t[5] = q * f + z * m + F * A + D * C, t[6] = q * l + z * x + F * y + D * U, t[7] = q * d + z * M + F * b + D * W, q = s[8], z = s[9], F = s[10], D = s[11], t[8] = q * a + z * p + F * S + D * T, t[9] = q * f + z * m + F * A + D * C, t[10] = q * l + z * x + F * y + D * U, t[11] = q * d + z * M + F * b + D * W, q = s[12], z = s[13], F = s[14], D = s[15], t[12] = q * a + z * p + F * S + D * T, t[13] = q * f + z * m + F * A + D * C, t[14] = q * l + z * x + F * y + D * U, t[15] = q * d + z * M + F * b + D * W, t;
  }
  /**
   * Alias for {@link Mat4.multiply}
   * @category Static
   */
  static mul(t, e, s) {
    return t;
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
  static translate(t, e, s) {
    const a = s[0], f = s[1], l = s[2];
    if (e === t)
      t[12] = e[0] * a + e[4] * f + e[8] * l + e[12], t[13] = e[1] * a + e[5] * f + e[9] * l + e[13], t[14] = e[2] * a + e[6] * f + e[10] * l + e[14], t[15] = e[3] * a + e[7] * f + e[11] * l + e[15];
    else {
      const d = e[0], p = e[1], m = e[2], x = e[3], M = e[4], S = e[5], A = e[6], y = e[7], b = e[8], T = e[9], C = e[10], U = e[11];
      t[0] = d, t[1] = p, t[2] = m, t[3] = x, t[4] = M, t[5] = S, t[6] = A, t[7] = y, t[8] = b, t[9] = T, t[10] = C, t[11] = U, t[12] = d * a + M * f + b * l + e[12], t[13] = p * a + S * f + T * l + e[13], t[14] = m * a + A * f + C * l + e[14], t[15] = x * a + y * f + U * l + e[15];
    }
    return t;
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
  static scale(t, e, s) {
    const a = s[0], f = s[1], l = s[2];
    return t[0] = e[0] * a, t[1] = e[1] * a, t[2] = e[2] * a, t[3] = e[3] * a, t[4] = e[4] * f, t[5] = e[5] * f, t[6] = e[6] * f, t[7] = e[7] * f, t[8] = e[8] * l, t[9] = e[9] * l, t[10] = e[10] * l, t[11] = e[11] * l, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
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
  static rotate(t, e, s, a) {
    let f = a[0], l = a[1], d = a[2], p = Math.sqrt(f * f + l * l + d * d);
    if (p < nt)
      return null;
    p = 1 / p, f *= p, l *= p, d *= p;
    const m = Math.sin(s), x = Math.cos(s), M = 1 - x, S = e[0], A = e[1], y = e[2], b = e[3], T = e[4], C = e[5], U = e[6], W = e[7], q = e[8], z = e[9], F = e[10], D = e[11], it = f * f * M + x, et = l * f * M + d * m, lt = d * f * M - l * m, G = f * l * M - d * m, _t = l * l * M + x, mt = d * l * M + f * m, dt = f * d * M + l * m, V = l * d * M - f * m, kt = d * d * M + x;
    return t[0] = S * it + T * et + q * lt, t[1] = A * it + C * et + z * lt, t[2] = y * it + U * et + F * lt, t[3] = b * it + W * et + D * lt, t[4] = S * G + T * _t + q * mt, t[5] = A * G + C * _t + z * mt, t[6] = y * G + U * _t + F * mt, t[7] = b * G + W * _t + D * mt, t[8] = S * dt + T * V + q * kt, t[9] = A * dt + C * V + z * kt, t[10] = y * dt + U * V + F * kt, t[11] = b * dt + W * V + D * kt, e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t;
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
  static rotateX(t, e, s) {
    let a = Math.sin(s), f = Math.cos(s), l = e[4], d = e[5], p = e[6], m = e[7], x = e[8], M = e[9], S = e[10], A = e[11];
    return e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[4] = l * f + x * a, t[5] = d * f + M * a, t[6] = p * f + S * a, t[7] = m * f + A * a, t[8] = x * f - l * a, t[9] = M * f - d * a, t[10] = S * f - p * a, t[11] = A * f - m * a, t;
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
  static rotateY(t, e, s) {
    let a = Math.sin(s), f = Math.cos(s), l = e[0], d = e[1], p = e[2], m = e[3], x = e[8], M = e[9], S = e[10], A = e[11];
    return e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = l * f - x * a, t[1] = d * f - M * a, t[2] = p * f - S * a, t[3] = m * f - A * a, t[8] = l * a + x * f, t[9] = d * a + M * f, t[10] = p * a + S * f, t[11] = m * a + A * f, t;
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
  static rotateZ(t, e, s) {
    let a = Math.sin(s), f = Math.cos(s), l = e[0], d = e[1], p = e[2], m = e[3], x = e[4], M = e[5], S = e[6], A = e[7];
    return e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = l * f + x * a, t[1] = d * f + M * a, t[2] = p * f + S * a, t[3] = m * f + A * a, t[4] = x * f - l * a, t[5] = M * f - d * a, t[6] = S * f - p * a, t[7] = A * f - m * a, t;
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
  static fromTranslation(t, e) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t;
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
  static fromScaling(t, e) {
    return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
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
  static fromRotation(t, e, s) {
    let a = s[0], f = s[1], l = s[2], d = Math.sqrt(a * a + f * f + l * l);
    if (d < nt)
      return null;
    d = 1 / d, a *= d, f *= d, l *= d;
    const p = Math.sin(e), m = Math.cos(e), x = 1 - m;
    return t[0] = a * a * x + m, t[1] = f * a * x + l * p, t[2] = l * a * x - f * p, t[3] = 0, t[4] = a * f * x - l * p, t[5] = f * f * x + m, t[6] = l * f * x + a * p, t[7] = 0, t[8] = a * l * x + f * p, t[9] = f * l * x - a * p, t[10] = l * l * x + m, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
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
  static fromXRotation(t, e) {
    let s = Math.sin(e), a = Math.cos(e);
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = a, t[6] = s, t[7] = 0, t[8] = 0, t[9] = -s, t[10] = a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
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
  static fromYRotation(t, e) {
    let s = Math.sin(e), a = Math.cos(e);
    return t[0] = a, t[1] = 0, t[2] = -s, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = s, t[9] = 0, t[10] = a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
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
  static fromZRotation(t, e) {
    const s = Math.sin(e), a = Math.cos(e);
    return t[0] = a, t[1] = s, t[2] = 0, t[3] = 0, t[4] = -s, t[5] = a, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
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
  static fromRotationTranslation(t, e, s) {
    const a = e[0], f = e[1], l = e[2], d = e[3], p = a + a, m = f + f, x = l + l, M = a * p, S = a * m, A = a * x, y = f * m, b = f * x, T = l * x, C = d * p, U = d * m, W = d * x;
    return t[0] = 1 - (y + T), t[1] = S + W, t[2] = A - U, t[3] = 0, t[4] = S - W, t[5] = 1 - (M + T), t[6] = b + C, t[7] = 0, t[8] = A + U, t[9] = b - C, t[10] = 1 - (M + y), t[11] = 0, t[12] = s[0], t[13] = s[1], t[14] = s[2], t[15] = 1, t;
  }
  /**
   * Sets a {@link Mat4} from a {@link Quat2}.
   * @category Static
   *
   * @param out - Matrix
   * @param a - Dual Quaternion
   * @returns `out`
   */
  static fromQuat2(t, e) {
    let s = new $();
    const a = -e[0], f = -e[1], l = -e[2], d = e[3], p = e[4], m = e[5], x = e[6], M = e[7];
    let S = a * a + f * f + l * l + d * d;
    return S > 0 ? (s[0] = (p * d + M * a + m * l - x * f) * 2 / S, s[1] = (m * d + M * f + x * a - p * l) * 2 / S, s[2] = (x * d + M * l + p * f - m * a) * 2 / S) : (s[0] = (p * d + M * a + m * l - x * f) * 2, s[1] = (m * d + M * f + x * a - p * l) * 2, s[2] = (x * d + M * l + p * f - m * a) * 2), ot.fromRotationTranslation(t, e, s), t;
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
  static getTranslation(t, e) {
    return t[0] = e[12], t[1] = e[13], t[2] = e[14], t;
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
  static getScaling(t, e) {
    const s = e[0], a = e[1], f = e[2], l = e[4], d = e[5], p = e[6], m = e[8], x = e[9], M = e[10];
    return t[0] = Math.sqrt(s * s + a * a + f * f), t[1] = Math.sqrt(l * l + d * d + p * p), t[2] = Math.sqrt(m * m + x * x + M * M), t;
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
  static getRotation(t, e) {
    ot.getScaling(Dr, e);
    const s = 1 / Dr[0], a = 1 / Dr[1], f = 1 / Dr[2], l = e[0] * s, d = e[1] * a, p = e[2] * f, m = e[4] * s, x = e[5] * a, M = e[6] * f, S = e[8] * s, A = e[9] * a, y = e[10] * f, b = l + x + y;
    let T = 0;
    return b > 0 ? (T = Math.sqrt(b + 1) * 2, t[3] = 0.25 * T, t[0] = (M - A) / T, t[1] = (S - p) / T, t[2] = (d - m) / T) : l > x && l > y ? (T = Math.sqrt(1 + l - x - y) * 2, t[3] = (M - A) / T, t[0] = 0.25 * T, t[1] = (d + m) / T, t[2] = (S + p) / T) : x > y ? (T = Math.sqrt(1 + x - l - y) * 2, t[3] = (S - p) / T, t[0] = (d + m) / T, t[1] = 0.25 * T, t[2] = (M + A) / T) : (T = Math.sqrt(1 + y - l - x) * 2, t[3] = (d - m) / T, t[0] = (S + p) / T, t[1] = (M + A) / T, t[2] = 0.25 * T), t;
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
  static decompose(t, e, s, a) {
    e[0] = a[12], e[1] = a[13], e[2] = a[14];
    const f = a[0], l = a[1], d = a[2], p = a[4], m = a[5], x = a[6], M = a[8], S = a[9], A = a[10];
    s[0] = Math.sqrt(f * f + l * l + d * d), s[1] = Math.sqrt(p * p + m * m + x * x), s[2] = Math.sqrt(M * M + S * S + A * A);
    const y = 1 / s[0], b = 1 / s[1], T = 1 / s[2], C = f * y, U = l * b, W = d * T, q = p * y, z = m * b, F = x * T, D = M * y, it = S * b, et = A * T, lt = C + z + et;
    let G = 0;
    return lt > 0 ? (G = Math.sqrt(lt + 1) * 2, t[3] = 0.25 * G, t[0] = (F - it) / G, t[1] = (D - W) / G, t[2] = (U - q) / G) : C > z && C > et ? (G = Math.sqrt(1 + C - z - et) * 2, t[3] = (F - it) / G, t[0] = 0.25 * G, t[1] = (U + q) / G, t[2] = (D + W) / G) : z > et ? (G = Math.sqrt(1 + z - C - et) * 2, t[3] = (D - W) / G, t[0] = (U + q) / G, t[1] = 0.25 * G, t[2] = (F + it) / G) : (G = Math.sqrt(1 + et - C - z) * 2, t[3] = (U - q) / G, t[0] = (D + W) / G, t[1] = (F + it) / G, t[2] = 0.25 * G), t;
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
  static fromRotationTranslationScale(t, e, s, a) {
    const f = e[0], l = e[1], d = e[2], p = e[3], m = f + f, x = l + l, M = d + d, S = f * m, A = f * x, y = f * M, b = l * x, T = l * M, C = d * M, U = p * m, W = p * x, q = p * M, z = a[0], F = a[1], D = a[2];
    return t[0] = (1 - (b + C)) * z, t[1] = (A + q) * z, t[2] = (y - W) * z, t[3] = 0, t[4] = (A - q) * F, t[5] = (1 - (S + C)) * F, t[6] = (T + U) * F, t[7] = 0, t[8] = (y + W) * D, t[9] = (T - U) * D, t[10] = (1 - (S + b)) * D, t[11] = 0, t[12] = s[0], t[13] = s[1], t[14] = s[2], t[15] = 1, t;
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
  static fromRotationTranslationScaleOrigin(t, e, s, a, f) {
    const l = e[0], d = e[1], p = e[2], m = e[3], x = l + l, M = d + d, S = p + p, A = l * x, y = l * M, b = l * S, T = d * M, C = d * S, U = p * S, W = m * x, q = m * M, z = m * S, F = a[0], D = a[1], it = a[2], et = f[0], lt = f[1], G = f[2], _t = (1 - (T + U)) * F, mt = (y + z) * F, dt = (b - q) * F, V = (y - z) * D, kt = (1 - (A + U)) * D, Yt = (C + W) * D, Ft = (b + q) * it, We = (C - W) * it, Wn = (1 - (A + T)) * it;
    return t[0] = _t, t[1] = mt, t[2] = dt, t[3] = 0, t[4] = V, t[5] = kt, t[6] = Yt, t[7] = 0, t[8] = Ft, t[9] = We, t[10] = Wn, t[11] = 0, t[12] = s[0] + et - (_t * et + V * lt + Ft * G), t[13] = s[1] + lt - (mt * et + kt * lt + We * G), t[14] = s[2] + G - (dt * et + Yt * lt + Wn * G), t[15] = 1, t;
  }
  /**
   * Calculates a 4x4 matrix from the given quaternion
   * @category Static
   *
   * @param out - mat4 receiving operation result
   * @param q - Quaternion to create matrix from
   * @returns `out`
   */
  static fromQuat(t, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], d = s + s, p = a + a, m = f + f, x = s * d, M = a * d, S = a * p, A = f * d, y = f * p, b = f * m, T = l * d, C = l * p, U = l * m;
    return t[0] = 1 - S - b, t[1] = M + U, t[2] = A - C, t[3] = 0, t[4] = M - U, t[5] = 1 - x - b, t[6] = y + T, t[7] = 0, t[8] = A + C, t[9] = y - T, t[10] = 1 - x - S, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
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
  static frustum(t, e, s, a, f, l, d) {
    const p = 1 / (s - e), m = 1 / (f - a), x = 1 / (l - d);
    return t[0] = l * 2 * p, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = l * 2 * m, t[6] = 0, t[7] = 0, t[8] = (s + e) * p, t[9] = (f + a) * m, t[10] = (d + l) * x, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = d * l * 2 * x, t[15] = 0, t;
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
  static perspectiveNO(t, e, s, a, f) {
    const l = 1 / Math.tan(e / 2);
    if (t[0] = l / s, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = l, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = -1, t[12] = 0, t[13] = 0, t[15] = 0, f != null && f !== 1 / 0) {
      const d = 1 / (a - f);
      t[10] = (f + a) * d, t[14] = 2 * f * a * d;
    } else
      t[10] = -1, t[14] = -2 * a;
    return t;
  }
  /**
   * Alias for {@link Mat4.perspectiveNO}
   * @category Static
   * @deprecated Use {@link Mat4.perspectiveNO} or {@link Mat4.perspectiveZO} explicitly
   */
  static perspective(t, e, s, a, f) {
    return t;
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
  static perspectiveZO(t, e, s, a, f) {
    const l = 1 / Math.tan(e / 2);
    if (t[0] = l / s, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = l, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = -1, t[12] = 0, t[13] = 0, t[15] = 0, f != null && f !== 1 / 0) {
      const d = 1 / (a - f);
      t[10] = f * d, t[14] = f * a * d;
    } else
      t[10] = -1, t[14] = -a;
    return t;
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
  static perspectiveFromFieldOfView(t, e, s, a) {
    const f = Math.tan(e.upDegrees * Math.PI / 180), l = Math.tan(e.downDegrees * Math.PI / 180), d = Math.tan(e.leftDegrees * Math.PI / 180), p = Math.tan(e.rightDegrees * Math.PI / 180), m = 2 / (d + p), x = 2 / (f + l);
    return t[0] = m, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = x, t[6] = 0, t[7] = 0, t[8] = -((d - p) * m * 0.5), t[9] = (f - l) * x * 0.5, t[10] = a / (s - a), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = a * s / (s - a), t[15] = 0, t;
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
  static orthoNO(t, e, s, a, f, l, d) {
    const p = 1 / (e - s), m = 1 / (a - f), x = 1 / (l - d);
    return t[0] = -2 * p, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * m, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * x, t[11] = 0, t[12] = (e + s) * p, t[13] = (f + a) * m, t[14] = (d + l) * x, t[15] = 1, t;
  }
  /**
   * Alias for {@link Mat4.orthoNO}
   * @category Static
   * @deprecated Use {@link Mat4.orthoNO} or {@link Mat4.orthoZO} explicitly
   */
  static ortho(t, e, s, a, f, l, d) {
    return t;
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
  static orthoZO(t, e, s, a, f, l, d) {
    const p = 1 / (e - s), m = 1 / (a - f), x = 1 / (l - d);
    return t[0] = -2 * p, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * m, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = x, t[11] = 0, t[12] = (e + s) * p, t[13] = (f + a) * m, t[14] = l * x, t[15] = 1, t;
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
  static lookAt(t, e, s, a) {
    const f = e[0], l = e[1], d = e[2], p = a[0], m = a[1], x = a[2], M = s[0], S = s[1], A = s[2];
    if (Math.abs(f - M) < nt && Math.abs(l - S) < nt && Math.abs(d - A) < nt)
      return ot.identity(t);
    let y = f - M, b = l - S, T = d - A, C = 1 / Math.sqrt(y * y + b * b + T * T);
    y *= C, b *= C, T *= C;
    let U = m * T - x * b, W = x * y - p * T, q = p * b - m * y;
    C = Math.sqrt(U * U + W * W + q * q), C ? (C = 1 / C, U *= C, W *= C, q *= C) : (U = 0, W = 0, q = 0);
    let z = b * q - T * W, F = T * U - y * q, D = y * W - b * U;
    return C = Math.sqrt(z * z + F * F + D * D), C ? (C = 1 / C, z *= C, F *= C, D *= C) : (z = 0, F = 0, D = 0), t[0] = U, t[1] = z, t[2] = y, t[3] = 0, t[4] = W, t[5] = F, t[6] = b, t[7] = 0, t[8] = q, t[9] = D, t[10] = T, t[11] = 0, t[12] = -(U * f + W * l + q * d), t[13] = -(z * f + F * l + D * d), t[14] = -(y * f + b * l + T * d), t[15] = 1, t;
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
  static targetTo(t, e, s, a) {
    const f = e[0], l = e[1], d = e[2], p = a[0], m = a[1], x = a[2];
    let M = f - s[0], S = l - s[1], A = d - s[2], y = M * M + S * S + A * A;
    y > 0 && (y = 1 / Math.sqrt(y), M *= y, S *= y, A *= y);
    let b = m * A - x * S, T = x * M - p * A, C = p * S - m * M;
    return y = b * b + T * T + C * C, y > 0 && (y = 1 / Math.sqrt(y), b *= y, T *= y, C *= y), t[0] = b, t[1] = T, t[2] = C, t[3] = 0, t[4] = S * C - A * T, t[5] = A * b - M * C, t[6] = M * T - S * b, t[7] = 0, t[8] = M, t[9] = S, t[10] = A, t[11] = 0, t[12] = f, t[13] = l, t[14] = d, t[15] = 1, t;
  }
  /**
   * Returns Frobenius norm of a {@link Mat4}
   * @category Static
   *
   * @param a - the matrix to calculate Frobenius norm of
   * @returns Frobenius norm
   */
  static frob(t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2] + t[3] * t[3] + t[4] * t[4] + t[5] * t[5] + t[6] * t[6] + t[7] * t[7] + t[8] * t[8] + t[9] * t[9] + t[10] * t[10] + t[11] * t[11] + t[12] * t[12] + t[13] * t[13] + t[14] * t[14] + t[15] * t[15]);
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
  static add(t, e, s) {
    return t[0] = e[0] + s[0], t[1] = e[1] + s[1], t[2] = e[2] + s[2], t[3] = e[3] + s[3], t[4] = e[4] + s[4], t[5] = e[5] + s[5], t[6] = e[6] + s[6], t[7] = e[7] + s[7], t[8] = e[8] + s[8], t[9] = e[9] + s[9], t[10] = e[10] + s[10], t[11] = e[11] + s[11], t[12] = e[12] + s[12], t[13] = e[13] + s[13], t[14] = e[14] + s[14], t[15] = e[15] + s[15], t;
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
  static subtract(t, e, s) {
    return t[0] = e[0] - s[0], t[1] = e[1] - s[1], t[2] = e[2] - s[2], t[3] = e[3] - s[3], t[4] = e[4] - s[4], t[5] = e[5] - s[5], t[6] = e[6] - s[6], t[7] = e[7] - s[7], t[8] = e[8] - s[8], t[9] = e[9] - s[9], t[10] = e[10] - s[10], t[11] = e[11] - s[11], t[12] = e[12] - s[12], t[13] = e[13] - s[13], t[14] = e[14] - s[14], t[15] = e[15] - s[15], t;
  }
  /**
   * Alias for {@link Mat4.subtract}
   * @category Static
   */
  static sub(t, e, s) {
    return t;
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
  static multiplyScalar(t, e, s) {
    return t[0] = e[0] * s, t[1] = e[1] * s, t[2] = e[2] * s, t[3] = e[3] * s, t[4] = e[4] * s, t[5] = e[5] * s, t[6] = e[6] * s, t[7] = e[7] * s, t[8] = e[8] * s, t[9] = e[9] * s, t[10] = e[10] * s, t[11] = e[11] * s, t[12] = e[12] * s, t[13] = e[13] * s, t[14] = e[14] * s, t[15] = e[15] * s, t;
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
  static multiplyScalarAndAdd(t, e, s, a) {
    return t[0] = e[0] + s[0] * a, t[1] = e[1] + s[1] * a, t[2] = e[2] + s[2] * a, t[3] = e[3] + s[3] * a, t[4] = e[4] + s[4] * a, t[5] = e[5] + s[5] * a, t[6] = e[6] + s[6] * a, t[7] = e[7] + s[7] * a, t[8] = e[8] + s[8] * a, t[9] = e[9] + s[9] * a, t[10] = e[10] + s[10] * a, t[11] = e[11] + s[11] * a, t[12] = e[12] + s[12] * a, t[13] = e[13] + s[13] * a, t[14] = e[14] + s[14] * a, t[15] = e[15] + s[15] * a, t;
  }
  /**
   * Returns whether or not two {@link Mat4}s have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first matrix.
   * @param b - The second matrix.
   * @returns True if the matrices are equal, false otherwise.
   */
  static exactEquals(t, e) {
    return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15];
  }
  /**
   * Returns whether or not two {@link Mat4}s have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first matrix.
   * @param b - The second matrix.
   * @returns True if the matrices are equal, false otherwise.
   */
  static equals(t, e) {
    const s = t[0], a = t[1], f = t[2], l = t[3], d = t[4], p = t[5], m = t[6], x = t[7], M = t[8], S = t[9], A = t[10], y = t[11], b = t[12], T = t[13], C = t[14], U = t[15], W = e[0], q = e[1], z = e[2], F = e[3], D = e[4], it = e[5], et = e[6], lt = e[7], G = e[8], _t = e[9], mt = e[10], dt = e[11], V = e[12], kt = e[13], Yt = e[14], Ft = e[15];
    return Math.abs(s - W) <= nt * Math.max(1, Math.abs(s), Math.abs(W)) && Math.abs(a - q) <= nt * Math.max(1, Math.abs(a), Math.abs(q)) && Math.abs(f - z) <= nt * Math.max(1, Math.abs(f), Math.abs(z)) && Math.abs(l - F) <= nt * Math.max(1, Math.abs(l), Math.abs(F)) && Math.abs(d - D) <= nt * Math.max(1, Math.abs(d), Math.abs(D)) && Math.abs(p - it) <= nt * Math.max(1, Math.abs(p), Math.abs(it)) && Math.abs(m - et) <= nt * Math.max(1, Math.abs(m), Math.abs(et)) && Math.abs(x - lt) <= nt * Math.max(1, Math.abs(x), Math.abs(lt)) && Math.abs(M - G) <= nt * Math.max(1, Math.abs(M), Math.abs(G)) && Math.abs(S - _t) <= nt * Math.max(1, Math.abs(S), Math.abs(_t)) && Math.abs(A - mt) <= nt * Math.max(1, Math.abs(A), Math.abs(mt)) && Math.abs(y - dt) <= nt * Math.max(1, Math.abs(y), Math.abs(dt)) && Math.abs(b - V) <= nt * Math.max(1, Math.abs(b), Math.abs(V)) && Math.abs(T - kt) <= nt * Math.max(1, Math.abs(T), Math.abs(kt)) && Math.abs(C - Yt) <= nt * Math.max(1, Math.abs(C), Math.abs(Yt)) && Math.abs(U - Ft) <= nt * Math.max(1, Math.abs(U), Math.abs(Ft));
  }
  /**
   * Returns a string representation of a {@link Mat4}
   * @category Static
   *
   * @param a - matrix to represent as a string
   * @returns string representation of the matrix
   */
  static str(t) {
    return `Mat4(${t.join(", ")})`;
  }
}
const Dr = new $();
ot.prototype.mul = ot.prototype.multiply;
ot.sub = ot.subtract;
ot.mul = ot.multiply;
ot.perspective = ot.perspectiveNO;
ot.ortho = ot.orthoNO;
const gt = ot;
class J extends Float32Array {
  /**
   * The number of bytes in a {@link Vec4}.
   */
  static BYTE_LENGTH = 4 * Float32Array.BYTES_PER_ELEMENT;
  /**
   * Create a {@link Vec4}.
   */
  constructor(...t) {
    switch (t.length) {
      case 4:
        super(t);
        break;
      case 2:
        super(t[0], t[1], 4);
        break;
      case 1: {
        const e = t[0];
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
  set x(t) {
    this[0] = t;
  }
  /**
   * The y component of the vector. Equivalent to `this[1];`
   * @category Vector components
   */
  get y() {
    return this[1];
  }
  set y(t) {
    this[1] = t;
  }
  /**
   * The z component of the vector. Equivalent to `this[2];`
   * @category Vector components
   */
  get z() {
    return this[2];
  }
  set z(t) {
    this[2] = t;
  }
  /**
   * The w component of the vector. Equivalent to `this[3];`
   * @category Vector components
   */
  get w() {
    return this[3];
  }
  set w(t) {
    this[3] = t;
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
  set r(t) {
    this[0] = t;
  }
  /**
   * The g component of the vector. Equivalent to `this[1];`
   * @category Color components
   */
  get g() {
    return this[1];
  }
  set g(t) {
    this[1] = t;
  }
  /**
   * The b component of the vector. Equivalent to `this[2];`
   * @category Color components
   */
  get b() {
    return this[2];
  }
  set b(t) {
    this[2] = t;
  }
  /**
   * The a component of the vector. Equivalent to `this[3];`
   * @category Color components
   */
  get a() {
    return this[3];
  }
  set a(t) {
    this[3] = t;
  }
  /**
   * The magnitude (length) of this.
   * Equivalent to `Vec4.magnitude(this);`
   *
   * Magnitude is used because the `length` attribute is already defined by
   * `Float32Array` to mean the number of elements in the array.
   */
  get magnitude() {
    const t = this[0], e = this[1], s = this[2], a = this[3];
    return Math.sqrt(t * t + e * e + s * s + a * a);
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
    return J.str(this);
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
  copy(t) {
    return super.set(t), this;
  }
  /**
   * Adds a {@link Vec4} to `this`.
   * Equivalent to `Vec4.add(this, this, b);`
   *
   * @param b - The vector to add to `this`
   * @returns `this`
   */
  add(t) {
    return this[0] += t[0], this[1] += t[1], this[2] += t[2], this[3] += t[3], this;
  }
  /**
   * Subtracts a {@link Vec4} from `this`.
   * Equivalent to `Vec4.subtract(this, this, b);`
   *
   * @param b - The vector to subtract from `this`
   * @returns `this`
   */
  subtract(t) {
    return this[0] -= t[0], this[1] -= t[1], this[2] -= t[2], this[3] -= t[3], this;
  }
  /**
   * Alias for {@link Vec4.subtract}
   */
  sub(t) {
    return this;
  }
  /**
   * Multiplies `this` by a {@link Vec4}.
   * Equivalent to `Vec4.multiply(this, this, b);`
   *
   * @param b - The vector to multiply `this` by
   * @returns `this`
   */
  multiply(t) {
    return this[0] *= t[0], this[1] *= t[1], this[2] *= t[2], this[3] *= t[3], this;
  }
  /**
   * Alias for {@link Vec4.multiply}
   */
  mul(t) {
    return this;
  }
  /**
   * Divides `this` by a {@link Vec4}.
   * Equivalent to `Vec4.divide(this, this, b);`
   *
   * @param b - The vector to divide `this` by
   * @returns `this`
   */
  divide(t) {
    return this[0] /= t[0], this[1] /= t[1], this[2] /= t[2], this[3] /= t[3], this;
  }
  /**
   * Alias for {@link Vec4.divide}
   */
  div(t) {
    return this;
  }
  /**
   * Scales `this` by a scalar number.
   * Equivalent to `Vec4.scale(this, this, b);`
   *
   * @param b - Amount to scale `this` by
   * @returns `this`
   */
  scale(t) {
    return this[0] *= t, this[1] *= t, this[2] *= t, this[3] *= t, this;
  }
  /**
   * Calculates `this` scaled by a scalar value then adds the result to `this`.
   * Equivalent to `Vec4.scaleAndAdd(this, this, b, scale);`
   *
   * @param b - The vector to add to `this`
   * @param scale - The amount to scale `b` by before adding
   * @returns `this`
   */
  scaleAndAdd(t, e) {
    return this[0] += t[0] * e, this[1] += t[1] * e, this[2] += t[2] * e, this[3] += t[3] * e, this;
  }
  /**
   * Calculates the euclidian distance between another {@link Vec4} and `this`.
   * Equivalent to `Vec4.distance(this, b);`
   *
   * @param b - The vector to calculate the distance to
   * @returns Distance between `this` and `b`
   */
  distance(t) {
    return J.distance(this, t);
  }
  /**
   * Alias for {@link Vec4.distance}
   */
  dist(t) {
    return 0;
  }
  /**
   * Calculates the squared euclidian distance between another {@link Vec4} and `this`.
   * Equivalent to `Vec4.squaredDistance(this, b);`
   *
   * @param b The vector to calculate the squared distance to
   * @returns Squared distance between `this` and `b`
   */
  squaredDistance(t) {
    return J.squaredDistance(this, t);
  }
  /**
   * Alias for {@link Vec4.squaredDistance}
   */
  sqrDist(t) {
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
  dot(t) {
    return this[0] * t[0] + this[1] * t[1] + this[2] * t[2] + this[3] * t[3];
  }
  /**
   * Normalize `this`.
   * Equivalent to `Vec4.normalize(this, this);`
   *
   * @returns `this`
   */
  normalize() {
    return J.normalize(this, this);
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
    return new J();
  }
  /**
   * Creates a new {@link Vec4} initialized with values from an existing vector
   * @category Static
   *
   * @param a - vector to clone
   * @returns a new 4D vector
   */
  static clone(t) {
    return new J(t);
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
  static fromValues(t, e, s, a) {
    return new J(t, e, s, a);
  }
  /**
   * Copy the values from one {@link Vec4} to another
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - the source vector
   * @returns `out`
   */
  static copy(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
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
  static set(t, e, s, a, f) {
    return t[0] = e, t[1] = s, t[2] = a, t[3] = f, t;
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
  static add(t, e, s) {
    return t[0] = e[0] + s[0], t[1] = e[1] + s[1], t[2] = e[2] + s[2], t[3] = e[3] + s[3], t;
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
  static subtract(t, e, s) {
    return t[0] = e[0] - s[0], t[1] = e[1] - s[1], t[2] = e[2] - s[2], t[3] = e[3] - s[3], t;
  }
  /**
   * Alias for {@link Vec4.subtract}
   * @category Static
   */
  static sub(t, e, s) {
    return t;
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
  static multiply(t, e, s) {
    return t[0] = e[0] * s[0], t[1] = e[1] * s[1], t[2] = e[2] * s[2], t[3] = e[3] * s[3], t;
  }
  /**
   * Alias for {@link Vec4.multiply}
   * @category Static
   */
  static mul(t, e, s) {
    return t;
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
  static divide(t, e, s) {
    return t[0] = e[0] / s[0], t[1] = e[1] / s[1], t[2] = e[2] / s[2], t[3] = e[3] / s[3], t;
  }
  /**
   * Alias for {@link Vec4.divide}
   * @category Static
   */
  static div(t, e, s) {
    return t;
  }
  /**
   * Math.ceil the components of a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to ceil
   * @returns `out`
   */
  static ceil(t, e) {
    return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t[3] = Math.ceil(e[3]), t;
  }
  /**
   * Math.floor the components of a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to floor
   * @returns `out`
   */
  static floor(t, e) {
    return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t[3] = Math.floor(e[3]), t;
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
  static min(t, e, s) {
    return t[0] = Math.min(e[0], s[0]), t[1] = Math.min(e[1], s[1]), t[2] = Math.min(e[2], s[2]), t[3] = Math.min(e[3], s[3]), t;
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
  static max(t, e, s) {
    return t[0] = Math.max(e[0], s[0]), t[1] = Math.max(e[1], s[1]), t[2] = Math.max(e[2], s[2]), t[3] = Math.max(e[3], s[3]), t;
  }
  /**
   * Math.round the components of a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to round
   * @returns `out`
   */
  static round(t, e) {
    return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t[3] = Math.round(e[3]), t;
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
  static scale(t, e, s) {
    return t[0] = e[0] * s, t[1] = e[1] * s, t[2] = e[2] * s, t[3] = e[3] * s, t;
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
  static scaleAndAdd(t, e, s, a) {
    return t[0] = e[0] + s[0] * a, t[1] = e[1] + s[1] * a, t[2] = e[2] + s[2] * a, t[3] = e[3] + s[3] * a, t;
  }
  /**
   * Calculates the euclidian distance between two {@link Vec4}'s
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns distance between a and b
   */
  static distance(t, e) {
    const s = e[0] - t[0], a = e[1] - t[1], f = e[2] - t[2], l = e[3] - t[3];
    return Math.hypot(s, a, f, l);
  }
  /**
   * Alias for {@link Vec4.distance}
   * @category Static
   */
  static dist(t, e) {
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
  static squaredDistance(t, e) {
    const s = e[0] - t[0], a = e[1] - t[1], f = e[2] - t[2], l = e[3] - t[3];
    return s * s + a * a + f * f + l * l;
  }
  /**
   * Alias for {@link Vec4.squaredDistance}
   * @category Static
   */
  static sqrDist(t, e) {
    return 0;
  }
  /**
   * Calculates the magnitude (length) of a {@link Vec4}
   * @category Static
   *
   * @param a - vector to calculate length of
   * @returns length of `a`
   */
  static magnitude(t) {
    const e = t[0], s = t[1], a = t[2], f = t[3];
    return Math.sqrt(e * e + s * s + a * a + f * f);
  }
  /**
   * Alias for {@link Vec4.magnitude}
   * @category Static
   */
  static mag(t) {
    return 0;
  }
  /**
   * Alias for {@link Vec4.magnitude}
   * @category Static
   * @deprecated Use {@link Vec4.magnitude} to avoid conflicts with builtin `length` methods/attribs
   */
  // @ts-ignore: Length conflicts with Function.length
  static length(t) {
    return 0;
  }
  /**
   * Alias for {@link Vec4.magnitude}
   * @category Static
   * @deprecated Use {@link Vec4.mag}
   */
  static len(t) {
    return 0;
  }
  /**
   * Calculates the squared length of a {@link Vec4}
   * @category Static
   *
   * @param a - vector to calculate squared length of
   * @returns squared length of a
   */
  static squaredLength(t) {
    const e = t[0], s = t[1], a = t[2], f = t[3];
    return e * e + s * s + a * a + f * f;
  }
  /**
   * Alias for {@link Vec4.squaredLength}
   * @category Static
   */
  static sqrLen(t) {
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
  static negate(t, e) {
    return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = -e[3], t;
  }
  /**
   * Returns the inverse of the components of a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to invert
   * @returns `out`
   */
  static inverse(t, e) {
    return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t[3] = 1 / e[3], t;
  }
  /**
   * Normalize a {@link Vec4}
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - vector to normalize
   * @returns `out`
   */
  static normalize(t, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3];
    let d = s * s + a * a + f * f + l * l;
    return d > 0 && (d = 1 / Math.sqrt(d)), t[0] = s * d, t[1] = a * d, t[2] = f * d, t[3] = l * d, t;
  }
  /**
   * Calculates the dot product of two {@link Vec4}'s
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns dot product of a and b
   */
  static dot(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
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
  static cross(t, e, s, a) {
    const f = s[0] * a[1] - s[1] * a[0], l = s[0] * a[2] - s[2] * a[0], d = s[0] * a[3] - s[3] * a[0], p = s[1] * a[2] - s[2] * a[1], m = s[1] * a[3] - s[3] * a[1], x = s[2] * a[3] - s[3] * a[2], M = e[0], S = e[1], A = e[2], y = e[3];
    return t[0] = S * x - A * m + y * p, t[1] = -(M * x) + A * d - y * l, t[2] = M * m - S * d + y * f, t[3] = -(M * p) + S * l - A * f, t;
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
  static lerp(t, e, s, a) {
    const f = e[0], l = e[1], d = e[2], p = e[3];
    return t[0] = f + a * (s[0] - f), t[1] = l + a * (s[1] - l), t[2] = d + a * (s[2] - d), t[3] = p + a * (s[3] - p), t;
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
  static transformMat4(t, e, s) {
    const a = e[0], f = e[1], l = e[2], d = e[3];
    return t[0] = s[0] * a + s[4] * f + s[8] * l + s[12] * d, t[1] = s[1] * a + s[5] * f + s[9] * l + s[13] * d, t[2] = s[2] * a + s[6] * f + s[10] * l + s[14] * d, t[3] = s[3] * a + s[7] * f + s[11] * l + s[15] * d, t;
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
  static transformQuat(t, e, s) {
    const a = e[0], f = e[1], l = e[2], d = s[0], p = s[1], m = s[2], x = s[3], M = x * a + p * l - m * f, S = x * f + m * a - d * l, A = x * l + d * f - p * a, y = -d * a - p * f - m * l;
    return t[0] = M * x + y * -d + S * -m - A * -p, t[1] = S * x + y * -p + A * -d - M * -m, t[2] = A * x + y * -m + M * -p - S * -d, t[3] = e[3], t;
  }
  /**
   * Set the components of a {@link Vec4} to zero
   * @category Static
   *
   * @param out - the receiving vector
   * @returns `out`
   */
  static zero(t) {
    return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t;
  }
  /**
   * Returns a string representation of a {@link Vec4}
   * @category Static
   *
   * @param a - vector to represent as a string
   * @returns string representation of the vector
   */
  static str(t) {
    return `Vec4(${t.join(", ")})`;
  }
  /**
   * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static exactEquals(t, e) {
    return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3];
  }
  /**
   * Returns whether or not the vectors have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns True if the vectors are equal, false otherwise.
   */
  static equals(t, e) {
    const s = t[0], a = t[1], f = t[2], l = t[3], d = e[0], p = e[1], m = e[2], x = e[3];
    return Math.abs(s - d) <= nt * Math.max(1, Math.abs(s), Math.abs(d)) && Math.abs(a - p) <= nt * Math.max(1, Math.abs(a), Math.abs(p)) && Math.abs(f - m) <= nt * Math.max(1, Math.abs(f), Math.abs(m)) && Math.abs(l - x) <= nt * Math.max(1, Math.abs(l), Math.abs(x));
  }
}
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
const Ue = J;
class Q extends Float32Array {
  /**
   * The number of bytes in a {@link Quat}.
   */
  static BYTE_LENGTH = 4 * Float32Array.BYTES_PER_ELEMENT;
  /**
   * Create a {@link Quat}.
   */
  constructor(...t) {
    switch (t.length) {
      case 4:
        super(t);
        break;
      case 2:
        super(t[0], t[1], 4);
        break;
      case 1: {
        const e = t[0];
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
  set x(t) {
    this[0] = t;
  }
  /**
   * The y component of the quaternion. Equivalent to `this[1];`
   * @category Quaternion components
   */
  get y() {
    return this[1];
  }
  set y(t) {
    this[1] = t;
  }
  /**
   * The z component of the quaternion. Equivalent to `this[2];`
   * @category Quaternion components
   */
  get z() {
    return this[2];
  }
  set z(t) {
    this[2] = t;
  }
  /**
   * The w component of the quaternion. Equivalent to `this[3];`
   * @category Quaternion components
   */
  get w() {
    return this[3];
  }
  set w(t) {
    this[3] = t;
  }
  /**
   * The magnitude (length) of this.
   * Equivalent to `Quat.magnitude(this);`
   *
   * Magnitude is used because the `length` attribute is already defined by
   * `Float32Array` to mean the number of elements in the array.
   */
  get magnitude() {
    const t = this[0], e = this[1], s = this[2], a = this[3];
    return Math.sqrt(t * t + e * e + s * s + a * a);
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
    return Q.str(this);
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
  copy(t) {
    return super.set(t), this;
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
  multiply(t) {
    return Q.multiply(this, this, t);
  }
  /**
   * Alias for {@link Quat.multiply}
   */
  mul(t) {
    return this;
  }
  /**
   * Rotates `this` by the given angle about the X axis
   * Equivalent to `Quat.rotateX(this, this, rad);`
   *
   * @param rad - angle (in radians) to rotate
   * @returns `this`
   */
  rotateX(t) {
    return Q.rotateX(this, this, t);
  }
  /**
   * Rotates `this` by the given angle about the Y axis
   * Equivalent to `Quat.rotateY(this, this, rad);`
   *
   * @param rad - angle (in radians) to rotate
   * @returns `this`
   */
  rotateY(t) {
    return Q.rotateY(this, this, t);
  }
  /**
   * Rotates `this` by the given angle about the Z axis
   * Equivalent to `Quat.rotateZ(this, this, rad);`
   *
   * @param rad - angle (in radians) to rotate
   * @returns `this`
   */
  rotateZ(t) {
    return Q.rotateZ(this, this, t);
  }
  /**
   * Inverts `this`
   * Equivalent to `Quat.invert(this, this);`
   *
   * @returns `this`
   */
  invert() {
    return Q.invert(this, this);
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
  scale(t) {
    return this[0] *= t, this[1] *= t, this[2] *= t, this[3] *= t, this;
  }
  /**
   * Calculates the dot product of `this` and another {@link Quat}
   * Equivalent to `Quat.dot(this, b);`
   *
   * @param b - the second operand
   * @returns dot product of `this` and b
   */
  dot(t) {
    return Q.dot(this, t);
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
    return new Q();
  }
  /**
   * Set a quat to the identity quaternion
   * @category Static
   *
   * @param out - the receiving quaternion
   * @returns `out`
   */
  static identity(t) {
    return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
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
  static setAxisAngle(t, e, s) {
    s = s * 0.5;
    const a = Math.sin(s);
    return t[0] = a * e[0], t[1] = a * e[1], t[2] = a * e[2], t[3] = Math.cos(s), t;
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
  static getAxisAngle(t, e) {
    const s = Math.acos(e[3]) * 2, a = Math.sin(s / 2);
    return a > nt ? (t[0] = e[0] / a, t[1] = e[1] / a, t[2] = e[2] / a) : (t[0] = 1, t[1] = 0, t[2] = 0), s;
  }
  /**
   * Gets the angular distance between two unit quaternions
   * @category Static
   *
   * @param  {ReadonlyQuat} a     Origin unit quaternion
   * @param  {ReadonlyQuat} b     Destination unit quaternion
   * @return {Number}     Angle, in radians, between the two quaternions
   */
  static getAngle(t, e) {
    const s = Q.dot(t, e);
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
  static multiply(t, e, s) {
    const a = e[0], f = e[1], l = e[2], d = e[3], p = s[0], m = s[1], x = s[2], M = s[3];
    return t[0] = a * M + d * p + f * x - l * m, t[1] = f * M + d * m + l * p - a * x, t[2] = l * M + d * x + a * m - f * p, t[3] = d * M - a * p - f * m - l * x, t;
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
  static rotateX(t, e, s) {
    s *= 0.5;
    const a = e[0], f = e[1], l = e[2], d = e[3], p = Math.sin(s), m = Math.cos(s);
    return t[0] = a * m + d * p, t[1] = f * m + l * p, t[2] = l * m - f * p, t[3] = d * m - a * p, t;
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
  static rotateY(t, e, s) {
    s *= 0.5;
    const a = e[0], f = e[1], l = e[2], d = e[3], p = Math.sin(s), m = Math.cos(s);
    return t[0] = a * m - l * p, t[1] = f * m + d * p, t[2] = l * m + a * p, t[3] = d * m - f * p, t;
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
  static rotateZ(t, e, s) {
    s *= 0.5;
    const a = e[0], f = e[1], l = e[2], d = e[3], p = Math.sin(s), m = Math.cos(s);
    return t[0] = a * m + f * p, t[1] = f * m - a * p, t[2] = l * m + d * p, t[3] = d * m - l * p, t;
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
  static calculateW(t, e) {
    const s = e[0], a = e[1], f = e[2];
    return t[0] = s, t[1] = a, t[2] = f, t[3] = Math.sqrt(Math.abs(1 - s * s - a * a - f * f)), t;
  }
  /**
   * Calculate the exponential of a unit quaternion.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quat to calculate the exponential of
   * @returns `out`
   */
  static exp(t, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], d = Math.sqrt(s * s + a * a + f * f), p = Math.exp(l), m = d > 0 ? p * Math.sin(d) / d : 0;
    return t[0] = s * m, t[1] = a * m, t[2] = f * m, t[3] = p * Math.cos(d), t;
  }
  /**
   * Calculate the natural logarithm of a unit quaternion.
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - quat to calculate the exponential of
   * @returns `out`
   */
  static ln(t, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], d = Math.sqrt(s * s + a * a + f * f), p = d > 0 ? Math.atan2(d, l) / d : 0;
    return t[0] = s * p, t[1] = a * p, t[2] = f * p, t[3] = 0.5 * Math.log(s * s + a * a + f * f + l * l), t;
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
  static pow(t, e, s) {
    return Q.ln(t, e), Q.scale(t, t, s), Q.exp(t, t), t;
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
  static slerp(t, e, s, a) {
    const f = e[0], l = e[1], d = e[2], p = e[3];
    let m = s[0], x = s[1], M = s[2], S = s[3], A, y, b = f * m + l * x + d * M + p * S;
    if (b < 0 && (b = -b, m = -m, x = -x, M = -M, S = -S), 1 - b > nt) {
      const T = Math.acos(b), C = Math.sin(T);
      A = Math.sin((1 - a) * T) / C, y = Math.sin(a * T) / C;
    } else
      A = 1 - a, y = a;
    return t[0] = A * f + y * m, t[1] = A * l + y * x, t[2] = A * d + y * M, t[3] = A * p + y * S, t;
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
  static invert(t, e) {
    const s = e[0], a = e[1], f = e[2], l = e[3], d = s * s + a * a + f * f + l * l, p = d ? 1 / d : 0;
    return t[0] = -s * p, t[1] = -a * p, t[2] = -f * p, t[3] = l * p, t;
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
  static conjugate(t, e) {
    return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = e[3], t;
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
  static fromMat3(t, e) {
    const s = e[0] + e[4] + e[8];
    let a;
    if (s > 0)
      a = Math.sqrt(s + 1), t[3] = 0.5 * a, a = 0.5 / a, t[0] = (e[5] - e[7]) * a, t[1] = (e[6] - e[2]) * a, t[2] = (e[1] - e[3]) * a;
    else {
      let f = 0;
      e[4] > e[0] && (f = 1), e[8] > e[f * 3 + f] && (f = 2);
      let l = (f + 1) % 3, d = (f + 2) % 3;
      a = Math.sqrt(e[f * 3 + f] - e[l * 3 + l] - e[d * 3 + d] + 1), t[f] = 0.5 * a, a = 0.5 / a, t[3] = (e[l * 3 + d] - e[d * 3 + l]) * a, t[l] = (e[l * 3 + f] + e[f * 3 + l]) * a, t[d] = (e[d * 3 + f] + e[f * 3 + d]) * a;
    }
    return t;
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
  static fromEuler(t, e, s, a) {
    let f = 0.5 * Math.PI / 180;
    e *= f, s *= f, a *= f;
    let l = Math.sin(e), d = Math.cos(e), p = Math.sin(s), m = Math.cos(s), x = Math.sin(a), M = Math.cos(a);
    return t[0] = l * m * M - d * p * x, t[1] = d * p * M + l * m * x, t[2] = d * m * x - l * p * M, t[3] = d * m * M + l * p * x, t;
  }
  /**
   * Returns a string representation of a quatenion
   * @category Static
   *
   * @param a - vector to represent as a string
   * @returns string representation of the vector
   */
  static str(t) {
    return `Quat(${t.join(", ")})`;
  }
  /**
   * Creates a new quat initialized with values from an existing quaternion
   * @category Static
   *
   * @param a - quaternion to clone
   * @returns a new quaternion
   */
  static clone(t) {
    return new Q(t);
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
  static fromValues(t, e, s, a) {
    return new Q(t, e, s, a);
  }
  /**
   * Copy the values from one quat to another
   * @category Static
   *
   * @param out - the receiving quaternion
   * @param a - the source quaternion
   * @returns `out`
   */
  static copy(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
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
  static set(t, e, s, a, f) {
    return t;
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
  static add(t, e, s) {
    return t;
  }
  /**
   * Alias for {@link Quat.multiply}
   * @category Static
   */
  static mul(t, e, s) {
    return t;
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
  static scale(t, e, s) {
    return t[0] = e[0] * s, t[1] = e[1] * s, t[2] = e[2] * s, t[3] = e[3] * s, t;
  }
  /**
   * Calculates the dot product of two quat's
   * @category Static
   *
   * @param a - the first operand
   * @param b - the second operand
   * @returns dot product of a and b
   */
  static dot(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
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
  static lerp(t, e, s, a) {
    return t;
  }
  /**
   * Calculates the magnitude (length) of a {@link Quat}
   * @category Static
   *
   * @param a - quaternion to calculate length of
   * @returns length of `a`
   */
  static magnitude(t) {
    return 0;
  }
  /**
   * Alias for {@link Quat.magnitude}
   * @category Static
   */
  static mag(t) {
    return 0;
  }
  /**
   * Alias for {@link Quat.magnitude}
   * @category Static
   * @deprecated Use {@link Quat.magnitude} to avoid conflicts with builtin `length` methods/attribs
   */
  // @ts-ignore: Length conflicts with Function.length
  static length(t) {
    return 0;
  }
  /**
   * Alias for {@link Quat.magnitude}
   * @category Static
   * @deprecated Use {@link Quat.mag}
   */
  static len(t) {
    return 0;
  }
  /**
   * Calculates the squared length of a {@link Quat}
   * @category Static
   *
   * @param a - quaternion to calculate squared length of
   * @returns squared length of a
   */
  static squaredLength(t) {
    return 0;
  }
  /**
   * Alias for {@link Quat.squaredLength}
   * @category Static
   */
  static sqrLen(t) {
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
  static normalize(t, e) {
    return t;
  }
  /**
   * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first quaternion.
   * @param b - The second quaternion.
   * @returns True if the vectors are equal, false otherwise.
   */
  static exactEquals(t, e) {
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
  static equals(t, e) {
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
  static rotationTo(t, e, s) {
    let a = $.dot(e, s);
    return a < -0.999999 ? ($.cross(_n, Jd, e), $.len(_n) < 1e-6 && $.cross(_n, Vd, e), $.normalize(_n, _n), Q.setAxisAngle(t, _n, Math.PI), t) : a > 0.999999 ? (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t) : ($.cross(_n, e, s), t[0] = _n[0], t[1] = _n[1], t[2] = _n[2], t[3] = 1 + a, Q.normalize(t, t));
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
  static sqlerp(t, e, s, a, f, l) {
    return Q.slerp(Wa, e, f, l), Q.slerp(Na, s, a, l), Q.slerp(t, Wa, Na, 2 * l * (1 - l)), t;
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
  static setAxes(t, e, s, a) {
    return xn[0] = s[0], xn[3] = s[1], xn[6] = s[2], xn[1] = a[0], xn[4] = a[1], xn[7] = a[2], xn[2] = -e[0], xn[5] = -e[1], xn[8] = -e[2], Q.normalize(t, Q.fromMat3(t, xn));
  }
}
const Wa = new Q(), Na = new Q(), xn = new Ot(), _n = new $(), Jd = new $(1, 0, 0), Vd = new $(0, 1, 0);
Q.set = J.set;
Q.add = J.add;
Q.lerp = J.lerp;
Q.normalize = J.normalize;
Q.squaredLength = J.squaredLength;
Q.sqrLen = J.squaredLength;
Q.exactEquals = J.exactEquals;
Q.equals = J.equals;
Q.magnitude = J.magnitude;
Q.prototype.mul = Q.prototype.multiply;
Q.mul = Q.multiply;
Q.mag = Q.magnitude;
Q.length = Q.magnitude;
Q.len = Q.magnitude;
const Ur = Q;
class at extends Float32Array {
  /**
   * The number of bytes in a {@link Vec2}.
   */
  static BYTE_LENGTH = 2 * Float32Array.BYTES_PER_ELEMENT;
  /**
   * Create a {@link Vec2}.
   */
  constructor(...t) {
    switch (t.length) {
      case 2: {
        const e = t[0];
        typeof e == "number" ? super([e, t[1]]) : super(e, t[1], 2);
        break;
      }
      case 1: {
        const e = t[0];
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
  set x(t) {
    this[0] = t;
  }
  /**
   * The y component of the vector. Equivalent to `this[1];`
   * @category Vector components
   */
  get y() {
    return this[1];
  }
  set y(t) {
    this[1] = t;
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
  set r(t) {
    this[0] = t;
  }
  /**
   * The g component of the vector. Equivalent to `this[1];`
   * @category Color components
   */
  get g() {
    return this[1];
  }
  set g(t) {
    this[1] = t;
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
    const t = this[0], e = this[1];
    return t * t + e * e;
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
    return at.str(this);
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
  copy(t) {
    return this.set(t), this;
  }
  // Instead of zero(), use a.fill(0) for instances;
  /**
   * Adds a {@link Vec2} to `this`.
   * Equivalent to `Vec2.add(this, this, b);`
   *
   * @param b - The vector to add to `this`
   * @returns `this`
   */
  add(t) {
    return this[0] += t[0], this[1] += t[1], this;
  }
  /**
   * Subtracts a {@link Vec2} from `this`.
   * Equivalent to `Vec2.subtract(this, this, b);`
   *
   * @param b - The vector to subtract from `this`
   * @returns `this`
   */
  subtract(t) {
    return this[0] -= t[0], this[1] -= t[1], this;
  }
  /**
   * Alias for {@link Vec2.subtract}
   */
  sub(t) {
    return this;
  }
  /**
   * Multiplies `this` by a {@link Vec2}.
   * Equivalent to `Vec2.multiply(this, this, b);`
   *
   * @param b - The vector to multiply `this` by
   * @returns `this`
   */
  multiply(t) {
    return this[0] *= t[0], this[1] *= t[1], this;
  }
  /**
   * Alias for {@link Vec2.multiply}
   */
  mul(t) {
    return this;
  }
  /**
   * Divides `this` by a {@link Vec2}.
   * Equivalent to `Vec2.divide(this, this, b);`
   *
   * @param b - The vector to divide `this` by
   * @returns {Vec2} `this`
   */
  divide(t) {
    return this[0] /= t[0], this[1] /= t[1], this;
  }
  /**
   * Alias for {@link Vec2.divide}
   */
  div(t) {
    return this;
  }
  /**
   * Scales `this` by a scalar number.
   * Equivalent to `Vec2.scale(this, this, b);`
   *
   * @param b - Amount to scale `this` by
   * @returns `this`
   */
  scale(t) {
    return this[0] *= t, this[1] *= t, this;
  }
  /**
   * Calculates `this` scaled by a scalar value then adds the result to `this`.
   * Equivalent to `Vec2.scaleAndAdd(this, this, b, scale);`
   *
   * @param b - The vector to add to `this`
   * @param scale - The amount to scale `b` by before adding
   * @returns `this`
   */
  scaleAndAdd(t, e) {
    return this[0] += t[0] * e, this[1] += t[1] * e, this;
  }
  /**
   * Calculates the euclidian distance between another {@link Vec2} and `this`.
   * Equivalent to `Vec2.distance(this, b);`
   *
   * @param b - The vector to calculate the distance to
   * @returns Distance between `this` and `b`
   */
  distance(t) {
    return at.distance(this, t);
  }
  /**
   * Alias for {@link Vec2.distance}
   */
  dist(t) {
    return 0;
  }
  /**
   * Calculates the squared euclidian distance between another {@link Vec2} and `this`.
   * Equivalent to `Vec2.squaredDistance(this, b);`
   *
   * @param b The vector to calculate the squared distance to
   * @returns Squared distance between `this` and `b`
   */
  squaredDistance(t) {
    return at.squaredDistance(this, t);
  }
  /**
   * Alias for {@link Vec2.squaredDistance}
   */
  sqrDist(t) {
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
  dot(t) {
    return this[0] * t[0] + this[1] * t[1];
  }
  /**
   * Normalize `this`.
   * Equivalent to `Vec2.normalize(this, this);`
   *
   * @returns `this`
   */
  normalize() {
    return at.normalize(this, this);
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
    return new at();
  }
  /**
   * Creates a new {@link Vec2} initialized with values from an existing vector
   * @category Static
   *
   * @param a - Vector to clone
   * @returns A new 2D vector
   */
  static clone(t) {
    return new at(t);
  }
  /**
   * Creates a new {@link Vec2} initialized with the given values
   * @category Static
   *
   * @param x - X component
   * @param y - Y component
   * @returns A new 2D vector
   */
  static fromValues(t, e) {
    return new at(t, e);
  }
  /**
   * Copy the values from one {@link Vec2} to another
   * @category Static
   *
   * @param out - the receiving vector
   * @param a - The source vector
   * @returns `out`
   */
  static copy(t, e) {
    return t[0] = e[0], t[1] = e[1], t;
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
  static set(t, e, s) {
    return t[0] = e, t[1] = s, t;
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
  static add(t, e, s) {
    return t[0] = e[0] + s[0], t[1] = e[1] + s[1], t;
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
  static subtract(t, e, s) {
    return t[0] = e[0] - s[0], t[1] = e[1] - s[1], t;
  }
  /**
   * Alias for {@link Vec2.subtract}
   * @category Static
   */
  static sub(t, e, s) {
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
  static multiply(t, e, s) {
    return t[0] = e[0] * s[0], t[1] = e[1] * s[1], t;
  }
  /**
   * Alias for {@link Vec2.multiply}
   * @category Static
   */
  static mul(t, e, s) {
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
  static divide(t, e, s) {
    return t[0] = e[0] / s[0], t[1] = e[1] / s[1], t;
  }
  /**
   * Alias for {@link Vec2.divide}
   * @category Static
   */
  static div(t, e, s) {
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
  static ceil(t, e) {
    return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t;
  }
  /**
   * Math.floor the components of a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to floor
   * @returns `out`
   */
  static floor(t, e) {
    return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t;
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
  static min(t, e, s) {
    return t[0] = Math.min(e[0], s[0]), t[1] = Math.min(e[1], s[1]), t;
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
  static max(t, e, s) {
    return t[0] = Math.max(e[0], s[0]), t[1] = Math.max(e[1], s[1]), t;
  }
  /**
   * Math.round the components of a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to round
   * @returns `out`
   */
  static round(t, e) {
    return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t;
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
  static scale(t, e, s) {
    return t[0] = e[0] * s, t[1] = e[1] * s, t;
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
  static scaleAndAdd(t, e, s, a) {
    return t[0] = e[0] + s[0] * a, t[1] = e[1] + s[1] * a, t;
  }
  /**
   * Calculates the euclidian distance between two {@link Vec2}s
   * @category Static
   *
   * @param a - The first operand
   * @param b - The second operand
   * @returns distance between `a` and `b`
   */
  static distance(t, e) {
    return Math.hypot(e[0] - t[0], e[1] - t[1]);
  }
  /**
   * Alias for {@link Vec2.distance}
   * @category Static
   */
  static dist(t, e) {
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
  static squaredDistance(t, e) {
    const s = e[0] - t[0], a = e[1] - t[1];
    return s * s + a * a;
  }
  /**
   * Alias for {@link Vec2.distance}
   * @category Static
   */
  static sqrDist(t, e) {
    return 0;
  }
  /**
   * Calculates the magnitude (length) of a {@link Vec2}
   * @category Static
   *
   * @param a - Vector to calculate magnitude of
   * @returns Magnitude of a
   */
  static magnitude(t) {
    let e = t[0], s = t[1];
    return Math.sqrt(e * e + s * s);
  }
  /**
   * Alias for {@link Vec2.magnitude}
   * @category Static
   */
  static mag(t) {
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
  static length(t) {
    return 0;
  }
  /**
   * Alias for {@link Vec2.magnitude}
   * @category Static
   * @deprecated Use {@link Vec2.mag}
   */
  static len(t) {
    return 0;
  }
  /**
   * Calculates the squared length of a {@link Vec2}
   * @category Static
   *
   * @param a - Vector to calculate squared length of
   * @returns Squared length of a
   */
  static squaredLength(t) {
    const e = t[0], s = t[1];
    return e * e + s * s;
  }
  /**
   * Alias for {@link Vec2.squaredLength}
   */
  static sqrLen(t, e) {
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
  static negate(t, e) {
    return t[0] = -e[0], t[1] = -e[1], t;
  }
  /**
   * Returns the inverse of the components of a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to invert
   * @returns `out`
   */
  static inverse(t, e) {
    return t[0] = 1 / e[0], t[1] = 1 / e[1], t;
  }
  /**
   * Normalize a {@link Vec2}
   * @category Static
   *
   * @param out - The receiving vector
   * @param a - Vector to normalize
   * @returns `out`
   */
  static normalize(t, e) {
    const s = e[0], a = e[1];
    let f = s * s + a * a;
    return f > 0 && (f = 1 / Math.sqrt(f)), t[0] = e[0] * f, t[1] = e[1] * f, t;
  }
  /**
   * Calculates the dot product of two {@link Vec2}s
   * @category Static
   *
   * @param a - The first operand
   * @param b - The second operand
   * @returns Dot product of `a` and `b`
   */
  static dot(t, e) {
    return t[0] * e[0] + t[1] * e[1];
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
  static cross(t, e, s) {
    const a = e[0] * s[1] - e[1] * s[0];
    return t[0] = t[1] = 0, t[2] = a, t;
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
  static lerp(t, e, s, a) {
    const f = e[0], l = e[1];
    return t[0] = f + a * (s[0] - f), t[1] = l + a * (s[1] - l), t;
  }
  /**
   * Transforms the {@link Vec2} with a {@link Mat2}
   *
   * @param out - The receiving vector
   * @param a - The vector to transform
   * @param m - Matrix to transform with
   * @returns `out`
   */
  static transformMat2(t, e, s) {
    const a = e[0], f = e[1];
    return t[0] = s[0] * a + s[2] * f, t[1] = s[1] * a + s[3] * f, t;
  }
  /**
   * Transforms the {@link Vec2} with a {@link Mat2d}
   *
   * @param out - The receiving vector
   * @param a - The vector to transform
   * @param m - Matrix to transform with
   * @returns `out`
   */
  static transformMat2d(t, e, s) {
    const a = e[0], f = e[1];
    return t[0] = s[0] * a + s[2] * f + s[4], t[1] = s[1] * a + s[3] * f + s[5], t;
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
  static transformMat3(t, e, s) {
    const a = e[0], f = e[1];
    return t[0] = s[0] * a + s[3] * f + s[6], t[1] = s[1] * a + s[4] * f + s[7], t;
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
  static transformMat4(t, e, s) {
    const a = e[0], f = e[1];
    return t[0] = s[0] * a + s[4] * f + s[12], t[1] = s[1] * a + s[5] * f + s[13], t;
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
  static rotate(t, e, s, a) {
    const f = e[0] - s[0], l = e[1] - s[1], d = Math.sin(a), p = Math.cos(a);
    return t[0] = f * p - l * d + s[0], t[1] = f * d + l * p + s[1], t;
  }
  /**
   * Get the angle between two 2D vectors
   * @category Static
   *
   * @param a - The first operand
   * @param b - The second operand
   * @returns The angle in radians
   */
  static angle(t, e) {
    const s = t[0], a = t[1], f = e[0], l = e[1], d = Math.sqrt(s * s + a * a) * Math.sqrt(f * f + l * l), p = d && (s * f + a * l) / d;
    return Math.acos(Math.min(Math.max(p, -1), 1));
  }
  /**
   * Set the components of a {@link Vec2} to zero
   * @category Static
   *
   * @param out - The receiving vector
   * @returns `out`
   */
  static zero(t) {
    return t[0] = 0, t[1] = 0, t;
  }
  /**
   * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns `true` if the vectors components are ===, `false` otherwise.
   */
  static exactEquals(t, e) {
    return t[0] === e[0] && t[1] === e[1];
  }
  /**
   * Returns whether or not the vectors have approximately the same elements in the same position.
   * @category Static
   *
   * @param a - The first vector.
   * @param b - The second vector.
   * @returns `true` if the vectors are approximately equal, `false` otherwise.
   */
  static equals(t, e) {
    const s = t[0], a = t[1], f = e[0], l = e[1];
    return Math.abs(s - f) <= nt * Math.max(1, Math.abs(s), Math.abs(f)) && Math.abs(a - l) <= nt * Math.max(1, Math.abs(a), Math.abs(l));
  }
  /**
   * Returns a string representation of a vector
   * @category Static
   *
   * @param a - Vector to represent as a string
   * @returns String representation of the vector
   */
  static str(t) {
    return `Vec2(${t.join(", ")})`;
  }
}
at.prototype.sub = at.prototype.subtract;
at.prototype.mul = at.prototype.multiply;
at.prototype.div = at.prototype.divide;
at.prototype.dist = at.prototype.distance;
at.prototype.sqrDist = at.prototype.squaredDistance;
at.sub = at.subtract;
at.mul = at.multiply;
at.div = at.divide;
at.dist = at.distance;
at.sqrDist = at.squaredDistance;
at.sqrLen = at.squaredLength;
at.mag = at.magnitude;
at.length = at.magnitude;
at.len = at.magnitude;
const Fn = at;
class Be extends qr {
  constructor() {
    super();
  }
  name;
  matrix = gt.create();
  location;
  findUniformInfo() {
    return Fe.current.m_uniformLocations[this.name];
  }
  update() {
    Fe.current.gl.uniformMatrix4fv(this.location, !1, this.matrix);
  }
  updateMatrix(t) {
    this.matrix = t;
  }
}
class kd extends Set {
  constructor() {
    super();
  }
}
class Qd extends Be {
  constructor(t) {
    super(), this.modelMatrix = t;
  }
  name = "uNormalMatrix";
  normalMatrix = Pr.create();
  update() {
    const t = this.modelMatrix.matrix, e = Pr.fromMat4(this.normalMatrix, t);
    Pr.invert(e, e), Pr.transpose(e, e);
  }
  tie(t) {
    const e = this.findUniformInfo();
    if (!e) return;
    this.location = e.location, this.update(), t.uniformMatrix3fv(this.location, !1, this.normalMatrix);
  }
}
class Bn extends Be {
  static current;
  defaultUniform;
  constructor(t) {
    super(), this.defaultUniform = t;
    const e = H.fromValues(0, 5, 5), s = H.fromValues(0, 0, 0), a = H.fromValues(0, 1, 0), f = gt.create();
    gt.lookAt(f, e, s, a), this.matrix = f;
  }
  name = "uViewMatrix";
  tie(t) {
    const e = this.findUniformInfo();
    this.location = e.location, this.update();
  }
  pos;
  obr(t) {
    if (!this.pos) return;
    const e = Fn.create();
    Fn.subtract(e, t, this.pos), e[1] = -e[1], this.pos = t;
    const s = [100, 100], a = this.matrix, f = H.fromValues(a[0], a[4], a[8]), l = H.fromValues(a[1], a[5], a[9]), d = H.fromValues(a[2], a[6], a[10]), p = Fn.length(e) / s[1] * Math.PI * 2;
    Fn.normalize(e, e), H.normalize(f, f);
    for (let T = 0; T < f.length; ++T)
      f[T] *= e[0];
    H.normalize(l, l);
    for (let T = 0; T < l.length; ++T)
      l[T] *= e[1];
    const m = H.create();
    H.add(m, m, f), H.add(m, m, l);
    const x = H.clone(d);
    H.cross(x, x, m), H.normalize(x, x);
    const M = Ur.create();
    Ur.setAxisAngle(M, x, p);
    const S = this.defaultUniform.orbitPoint, A = H.clone(S);
    H.negate(A, A);
    const y = gt.create();
    gt.translate(y, y, S);
    const b = gt.create();
    gt.fromQuat(b, M), gt.multiply(y, y, b), gt.translate(y, y, A), gt.multiply(a, a, y), this.matrix = a, this.update();
  }
  wheel(t) {
    if (!this.pos) return;
    const e = Fn.create();
    Fn.subtract(e, t, this.pos), e[1] = -e[1], this.pos = t;
    const s = [100, 100], a = this.matrix, f = H.fromValues(a[0], a[4], a[8]), l = H.fromValues(a[1], a[5], a[9]), d = H.fromValues(a[2], a[6], a[10]), p = Fn.length(e) / s[1] * Math.PI * 2;
    Fn.normalize(e, e), H.normalize(f, f);
    for (let T = 0; T < f.length; ++T)
      f[T] *= e[0];
    H.normalize(l, l);
    for (let T = 0; T < l.length; ++T)
      l[T] *= e[1];
    const m = H.create();
    H.add(m, m, f), H.add(m, m, l);
    const x = H.clone(d);
    H.cross(x, x, m), H.normalize(x, x);
    const M = Ur.create();
    Ur.setAxisAngle(M, x, p);
    const S = this.defaultUniform.orbitPoint, A = H.clone(S);
    H.negate(A, A);
    const y = gt.create();
    gt.translate(y, y, S);
    const b = gt.create();
    gt.fromQuat(b, M), gt.multiply(y, y, b), gt.translate(y, y, A), gt.multiply(a, a, y), this.matrix = a, this.update();
  }
  /**
   * 缩放相机（沿着视线方向移动相机）
   * @param amount 缩放量，正数放大（拉近），负数缩小（拉远）
   */
  zoom(t) {
    const e = this.matrix, s = H.fromValues(e[2], e[6], e[10]);
    H.normalize(s, s);
    const a = gt.create();
    gt.invert(a, e);
    const f = H.fromValues(a[12], a[13], a[14]), l = this.defaultUniform.orbitPoint, d = H.create();
    H.subtract(d, f, l);
    const p = H.length(d), m = 0.5, x = 50;
    let M = p - t * p;
    if (M = Math.max(m, Math.min(x, M)), Math.abs(M - p) < 1e-3)
      return;
    H.normalize(d, d);
    const S = H.create();
    H.scaleAndAdd(S, l, d, M);
    const A = H.fromValues(e[1], e[5], e[9]);
    H.normalize(A, A);
    const y = gt.create();
    gt.lookAt(y, S, l, A), this.matrix = y, this.update();
  }
}
var de;
((Y) => {
  class t {
    static ZOOM_SPEED = 0.1;
    // 缩放速度
    /**
     * 放大（拉近相机）
     */
    static ZoomIn(a) {
      const f = Bn.current;
      if (!f) return;
      const l = a || this.ZOOM_SPEED;
      f.zoom(l);
    }
    /**
     * 缩小（拉远相机）
     */
    static ZoomOut(a) {
      const f = Bn.current;
      if (!f) return;
      const l = a || this.ZOOM_SPEED;
      f.zoom(-l);
    }
    /**
     * 根据滚轮增量缩放
     * @param deltaY 滚轮增量（正值向下，负值向上）
     */
    static ZoomByWheel(a) {
      const f = Bn.current;
      if (!f) return;
      const l = Math.abs(a) * 1e-3;
      a > 0 ? f.zoom(-l) : f.zoom(l);
    }
  }
  Y.Zoom = t;
  class e {
    static update(a) {
      Bn.current.obr(a);
    }
  }
  Y.Rotate = e;
})(de || (de = {}));
const jd = de.Rotate;
class tp extends Ga {
  constructor() {
    super();
  }
  mousedown(t) {
    const e = [t.clientX, t.clientY], s = Bn.current;
    return s.pos = e, null;
  }
  mouseup(t) {
    const e = Bn.current;
    return e.pos = void 0, super.mouseup(t);
  }
  mousemove(t) {
    const e = [t.clientX, t.clientY];
    return jd.update(e), null;
  }
}
class np {
  scene;
  constructor(t) {
    this.scene = t;
  }
  /**
   * 从屏幕坐标创建射线
   * @param screenX 屏幕坐标 X
   * @param screenY 屏幕坐标 Y
   * @param camera 相机对象
   * @returns 射线对象
   */
  setFromCamera(t, e, s) {
    const f = this.scene.context.canvas.getBoundingClientRect(), l = (t - f.left) / f.width * 2 - 1, d = -((e - f.top) / f.height) * 2 + 1, p = s.defaultUniform.projectMatrix.matrix, m = s.defaultUniform.viewMatrix.matrix, x = {
      origin: H.create(),
      direction: H.create()
    }, M = Ue.fromValues(l, d, -1, 1), S = gt.create();
    gt.invert(S, p);
    const A = Ue.create();
    Ue.transformMat4(A, M, S), A[2] = -1, A[3] = 0;
    const y = gt.create();
    gt.invert(y, m);
    const b = Ue.create();
    Ue.transformMat4(b, A, y), H.normalize(x.direction, H.fromValues(b[0], b[1], b[2]));
    const T = H.fromValues(
      -m[12],
      -m[13],
      -m[14]
    );
    return H.copy(x.origin, T), x;
  }
  /**
   * 检测射线与对象的相交
   * @param ray 射线
   * @param objects 要检测的对象数组
   * @returns 相交结果数组，按距离排序
   */
  intersectObjects(t, e) {
    const s = [];
    for (const a of e) {
      const f = this.intersectObject(t, a);
      f && s.push(f);
    }
    return s.sort((a, f) => a.distance - f.distance), s;
  }
  /**
   * 检测射线与单个对象的相交
   * 当前实现：使用包围盒检测（简化版本）
   * TODO: 实现精确的几何体相交检测
   * @param ray 射线
   * @param object 对象
   * @returns 相交结果，如果没有相交则返回 null
   */
  intersectObject(t, e) {
    const s = H.fromValues(0, 0, 0), a = 1, f = H.create();
    H.subtract(f, t.origin, s);
    const l = H.dot(t.direction, t.direction), d = 2 * H.dot(f, t.direction), p = H.dot(f, f) - a * a, m = d * d - 4 * l * p;
    if (m < 0)
      return null;
    const x = Math.sqrt(m), M = (-d - x) / (2 * l), S = (-d + x) / (2 * l);
    let A = M > 0 ? M : S;
    if (A <= 0)
      return null;
    const y = H.create();
    return H.scaleAndAdd(y, t.origin, t.direction, A), {
      object: e,
      distance: A,
      point: y
    };
  }
  /**
   * 获取场景中所有可交互的对象
   * @returns Cell 数组
   */
  getInteractableObjects() {
    return Array.from(this.scene);
  }
}
class ue {
  static instance;
  listeners = /* @__PURE__ */ new Map();
  eventQueue = [];
  isProcessing = !1;
  constructor() {
  }
  /**
   * 获取单例实例
   */
  static getInstance() {
    return ue.instance || (ue.instance = new ue()), ue.instance;
  }
  /**
   * 注册事件监听器
   * @param eventType 事件类型
   * @param handler 事件处理函数
   */
  on(t, e) {
    this.listeners.has(t) || this.listeners.set(t, /* @__PURE__ */ new Set()), this.listeners.get(t).add(e);
  }
  /**
   * 注销事件监听器
   * @param eventType 事件类型
   * @param handler 事件处理函数
   */
  off(t, e) {
    const s = this.listeners.get(t);
    s && s.delete(e);
  }
  /**
   * 触发事件
   * @param event 交互事件
   */
  emit(t) {
    this.eventQueue.push(t), this.isProcessing || this.processEventQueue();
  }
  /**
   * 处理事件队列
   */
  processEventQueue() {
    for (this.isProcessing = !0; this.eventQueue.length > 0; ) {
      const t = this.eventQueue.shift(), e = this.listeners.get(t.type);
      e && e.forEach((s) => {
        try {
          s(t);
        } catch (a) {
          console.error(`Error in event handler for ${t.type}:`, a);
        }
      });
    }
    this.isProcessing = !1;
  }
  /**
   * 一次性监听事件
   * @param eventType 事件类型
   * @param handler 事件处理函数
   */
  once(t, e) {
    const s = (a) => {
      e(a), this.off(t, s);
    };
    this.on(t, s);
  }
  /**
   * 移除所有指定类型的事件监听器
   * @param eventType 事件类型，如果不提供则移除所有
   */
  removeAllListeners(t) {
    t ? this.listeners.delete(t) : this.listeners.clear();
  }
  /**
   * 获取指定事件类型的监听器数量
   * @param eventType 事件类型
   */
  listenerCount(t) {
    const e = this.listeners.get(t);
    return e ? e.size : 0;
  }
}
var Vt = /* @__PURE__ */ ((Y) => (Y.MOUSE_DOWN = "mousedown", Y.MOUSE_UP = "mouseup", Y.MOUSE_MOVE = "mousemove", Y.MOUSE_ENTER = "mouseenter", Y.MOUSE_LEAVE = "mouseleave", Y.MOUSE_WHEEL = "wheel", Y.CLICK = "click", Y.DOUBLE_CLICK = "dblclick", Y.CONTEXT_MENU = "contextmenu", Y.TOUCH_START = "touchstart", Y.TOUCH_END = "touchend", Y.TOUCH_MOVE = "touchmove", Y.KEY_DOWN = "keydown", Y.KEY_UP = "keyup", Y.KEY_PRESS = "keypress", Y))(Vt || {});
class ep {
  scene;
  raycaster;
  eventManager;
  controller;
  constructor(t) {
    this.scene = t, this.raycaster = new np(t), this.eventManager = ue.getInstance(), this.controller = t.controller;
  }
  /**
   * 初始化事件监听
   */
  init() {
    const t = this.scene.context.canvas;
    if (!t) {
      console.warn("Canvas not available, skipping interaction setup");
      return;
    }
    t.addEventListener("mousedown", this.handleMouseDown.bind(this)), t.addEventListener("mouseup", this.handleMouseUp.bind(this)), t.addEventListener("mousemove", this.handleMouseMove.bind(this)), t.addEventListener("wheel", this.handleWheel.bind(this)), t.addEventListener("contextmenu", this.handleContextMenu.bind(this)), t.addEventListener("click", this.handleClick.bind(this)), t.addEventListener("dblclick", this.handleDoubleClick.bind(this)), t.addEventListener("touchstart", this.handleTouchStart.bind(this), { passive: !1 }), t.addEventListener("touchend", this.handleTouchEnd.bind(this), { passive: !1 }), t.addEventListener("touchmove", this.handleTouchMove.bind(this), { passive: !1 }), window.addEventListener("keydown", this.handleKeyDown.bind(this)), window.addEventListener("keyup", this.handleKeyUp.bind(this));
  }
  /**
   * 处理鼠标按下事件
   */
  handleMouseDown(t) {
    const e = this.createInteractionEvent(
      Vt.MOUSE_DOWN,
      t
    );
    this.performRaycast(e), this.eventManager.emit(e), this.controller.chain.mousedown(t), e.hitObject && e.hitObject.emit("mousedown", e), this.scene.render();
  }
  /**
   * 处理鼠标释放事件
   */
  handleMouseUp(t) {
    const e = this.createInteractionEvent(
      Vt.MOUSE_UP,
      t
    );
    this.performRaycast(e), this.eventManager.emit(e), this.controller.chain.mouseup(t), e.hitObject && e.hitObject.emit("mouseup", e);
  }
  /**
   * 处理鼠标移动事件
   */
  handleMouseMove(t) {
    const e = this.createInteractionEvent(
      Vt.MOUSE_MOVE,
      t
    );
    this.performRaycast(e), this.eventManager.emit(e), this.controller.chain.mousemove(t), e.hitObject && e.hitObject.emit("mousemove", e), this.scene.render();
  }
  /**
   * 处理鼠标滚轮事件
   */
  handleWheel(t) {
    const e = this.createInteractionEvent(
      Vt.MOUSE_WHEEL,
      t
    );
    this.eventManager.emit(e), de.Zoom.ZoomByWheel(t.deltaY), this.scene.render(), t.preventDefault();
  }
  /**
   * 处理右键菜单事件
   */
  handleContextMenu(t) {
    const e = this.createInteractionEvent(
      Vt.CONTEXT_MENU,
      t
    );
    this.performRaycast(e), this.eventManager.emit(e), t.preventDefault();
  }
  /**
   * 处理点击事件
   */
  handleClick(t) {
    const e = this.createInteractionEvent(
      Vt.CLICK,
      t
    );
    this.performRaycast(e), this.eventManager.emit(e), e.hitObject && e.hitObject.emit("click", e);
  }
  /**
   * 处理双击事件
   */
  handleDoubleClick(t) {
    const e = this.createInteractionEvent(
      Vt.DOUBLE_CLICK,
      t
    );
    this.performRaycast(e), this.eventManager.emit(e), e.hitObject && e.hitObject.emit("dblclick", e);
  }
  /**
   * 处理触摸开始事件
   */
  handleTouchStart(t) {
    if (t.touches.length === 0) return;
    const e = t.touches[0], s = this.createInteractionEventFromTouch(
      Vt.TOUCH_START,
      t,
      e
    );
    this.performRaycast(s), this.eventManager.emit(s), s.hitObject && s.hitObject.emit("touchstart", s), t.preventDefault();
  }
  /**
   * 处理触摸结束事件
   */
  handleTouchEnd(t) {
    if (t.changedTouches.length === 0) return;
    const e = t.changedTouches[0], s = this.createInteractionEventFromTouch(
      Vt.TOUCH_END,
      t,
      e
    );
    this.performRaycast(s), this.eventManager.emit(s), s.hitObject && s.hitObject.emit("touchend", s);
  }
  /**
   * 处理触摸移动事件
   */
  handleTouchMove(t) {
    if (t.touches.length === 0) return;
    const e = t.touches[0], s = this.createInteractionEventFromTouch(
      Vt.TOUCH_MOVE,
      t,
      e
    );
    this.performRaycast(s), this.eventManager.emit(s), s.hitObject && s.hitObject.emit("touchmove", s), this.scene.render(), t.preventDefault();
  }
  /**
   * 处理键盘按下事件
   */
  handleKeyDown(t) {
    const e = this.createInteractionEvent(
      Vt.KEY_DOWN,
      t
    );
    switch (this.eventManager.emit(e), t.key) {
      case "+":
      case "=":
      case "PageUp":
        de.Zoom.ZoomIn(), this.scene.render(), t.preventDefault();
        break;
      case "-":
      case "_":
      case "PageDown":
        de.Zoom.ZoomOut(), this.scene.render(), t.preventDefault();
        break;
    }
  }
  /**
   * 处理键盘释放事件
   */
  handleKeyUp(t) {
    const e = this.createInteractionEvent(
      Vt.KEY_UP,
      t
    );
    this.eventManager.emit(e);
  }
  /**
   * 执行射线检测
   */
  performRaycast(t) {
    try {
      const e = this.raycaster.setFromCamera(
        t.clientX,
        t.clientY,
        this.scene.camera
      ), s = this.raycaster.getInteractableObjects(), a = this.raycaster.intersectObjects(e, s);
      if (a.length > 0) {
        const f = a[0];
        t.hitObject = f.object, t.hitDistance = f.distance, t.hitPoint = f.point, f.point && (t.worldPosition = H.clone(f.point));
      }
    } catch (e) {
      console.warn("Raycast failed:", e);
    }
  }
  /**
   * 从鼠标事件创建 InteractionEvent
   */
  createInteractionEvent(t, e) {
    const a = this.scene.context.canvas.getBoundingClientRect();
    let f = 0, l = 0, d = 0, p = 0, m;
    return (e instanceof MouseEvent || e instanceof WheelEvent) && (f = e.clientX, l = e.clientY, d = e.clientX - a.left, p = e.clientY - a.top, m = e instanceof MouseEvent ? e.button : void 0), {
      type: t,
      originalEvent: e,
      screenX: d,
      screenY: p,
      clientX: f,
      clientY: l,
      button: m,
      ctrlKey: e.ctrlKey || !1,
      shiftKey: e.shiftKey || !1,
      altKey: e.altKey || !1,
      metaKey: e.metaKey || !1
    };
  }
  /**
   * 从触摸事件创建 InteractionEvent
   */
  createInteractionEventFromTouch(t, e, s) {
    const f = this.scene.context.canvas.getBoundingClientRect();
    return {
      type: t,
      originalEvent: e,
      screenX: s.clientX - f.left,
      screenY: s.clientY - f.top,
      clientX: s.clientX,
      clientY: s.clientY,
      ctrlKey: !1,
      shiftKey: !1,
      altKey: !1,
      metaKey: !1
    };
  }
}
class rp {
  scene;
  chain;
  cameraChain;
  interactionController = null;
  constructor() {
  }
  init(t) {
    this.scene = t, this.chain = new $d(), this.cameraChain = new tp(), this.switchState(
      0
      /* Camera */
    ), this.interactionController = new ep(t), this.interactionController.init();
  }
  switchState(t) {
    t === 0 && this.transitionTo(new Xd());
  }
  /*
  * 状态机切换
  * */
  state;
  transitionTo(t) {
    this.state = t, this.state.setContext(this), this.state.start();
  }
}
class ip extends Be {
  constructor() {
    super();
    const t = this.matrix;
    gt.translate(t, t, [0, 0, 0]), this.matrix = t;
  }
  name = "uModelMatrix";
  tie(t) {
    const e = this.findUniformInfo();
    this.location = e.location, this.update();
  }
}
class sp extends Be {
  constructor() {
    super();
    const t = Ha.gl, e = 45 * Math.PI / 180, s = t.canvas.width / t.canvas.height, a = 0.1, f = 100, l = gt.create();
    gt.perspectiveNO(l, e, s, a, f), this.matrix = l;
  }
  name = "uProjectionMatrix";
  tie(t) {
    this.location = this.findUniformInfo().location, this.update();
  }
}
class cp extends Be {
  name = "uCameraPosition";
  position = H.create();
  viewMatrix;
  constructor(t) {
    super(), this.viewMatrix = t, H.set(this.position, 0, 5, 5);
  }
  update() {
    const t = gt.create();
    gt.invert(t, this.viewMatrix.matrix), H.set(this.position, t[12], t[13], t[14]);
  }
  tie(t) {
    const e = this.findUniformInfo();
    if (!e) return;
    this.location = e.location, this.update(), t.uniform3fv(this.location, this.position);
  }
}
class ap extends kd {
  modelMatrix;
  viewMatrix;
  projectMatrix;
  normalMatrix;
  cameraPosition;
  orbitPoint;
  viewportSize;
  constructor() {
    super(), this.projectMatrix = new sp(), this.viewMatrix = new Bn(this), this.modelMatrix = new ip(), this.normalMatrix = new Qd(this.modelMatrix), this.cameraPosition = new cp(this.viewMatrix), this.orbitPoint = H.create(), this.add(
      this.modelMatrix
    ), this.add(
      this.viewMatrix
    ), this.add(
      this.projectMatrix
    ), this.add(
      this.normalMatrix
    ), this.add(
      this.cameraPosition
    ), Bn.current = this.viewMatrix;
  }
}
class fp {
  defaultUniform;
  scene;
  constructor(t) {
    this.scene = t, this.defaultUniform = new ap();
  }
  update() {
    this.scene.render();
  }
}
class lp extends Gd {
  context;
  constructor() {
    super();
  }
  background = new Kd();
  model = new Wd();
  camera;
  controller = new rp();
  /*
  挂载 dom 节点
  * */
  mount(t) {
    this.context = new Bd(t), this.init();
  }
  /*
  初始化函数
   */
  init() {
    this.camera = new fp(this), this.controller.init(this);
  }
  get gl() {
    return this.context?.gl;
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
  add(t) {
    this.push(t);
  }
  /**
   * 获取场景中所有可交互的对象
   * @returns Cell 数组
   */
  getInteractableObjects() {
    return Array.from(this);
  }
}
export {
  lp as Scene
};
