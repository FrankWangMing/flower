var Dr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Fe = { exports: {} };
var Bp = Fe.exports, Ba;
function Wp() {
  return Ba || (Ba = 1, (function(C, t) {
    (function() {
      var e, s = "4.17.21", c = 200, h = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", f = "Expected a function", p = "Invalid `variable` option passed into `_.template`", d = "__lodash_hash_undefined__", m = 500, x = "__lodash_placeholder__", M = 1, E = 2, T = 4, w = 1, b = 2, S = 1, P = 2, q = 4, N = 8, F = 16, z = 32, B = 64, D = 128, it = 256, et = 512, lt = 30, K = "...", vt = 800, mt = 16, dt = 1, V = 2, Qt = 3, Ht = 1 / 0, Ft = 9007199254740991, He = 17976931348623157e292, Nn = NaN, pn = 4294967295, $a = pn - 1, Va = pn >>> 1, Qa = [
        ["ary", D],
        ["bind", S],
        ["bindKey", P],
        ["curry", N],
        ["curryRight", F],
        ["flip", et],
        ["partial", z],
        ["partialRight", B],
        ["rearg", it]
      ], Qn = "[object Arguments]", Ke = "[object Array]", Ja = "[object AsyncFunction]", ge = "[object Boolean]", me = "[object Date]", ja = "[object DOMException]", Ye = "[object Error]", Ge = "[object Function]", hs = "[object GeneratorFunction]", an = "[object Map]", xe = "[object Number]", th = "[object Null]", _n = "[object Object]", os = "[object Promise]", nh = "[object Proxy]", ve = "[object RegExp]", hn = "[object Set]", _e = "[object String]", Ze = "[object Symbol]", eh = "[object Undefined]", Me = "[object WeakMap]", rh = "[object WeakSet]", ye = "[object ArrayBuffer]", Jn = "[object DataView]", Wr = "[object Float32Array]", Nr = "[object Float64Array]", kr = "[object Int8Array]", Hr = "[object Int16Array]", Kr = "[object Int32Array]", Yr = "[object Uint8Array]", Gr = "[object Uint8ClampedArray]", Zr = "[object Uint16Array]", Xr = "[object Uint32Array]", ih = /\b__p \+= '';/g, sh = /\b(__p \+=) '' \+/g, ch = /(__e\(.*?\)|\b__t\)) \+\n'';/g, fs = /&(?:amp|lt|gt|quot|#39);/g, ls = /[&<>"']/g, ah = RegExp(fs.source), hh = RegExp(ls.source), oh = /<%-([\s\S]+?)%>/g, fh = /<%([\s\S]+?)%>/g, us = /<%=([\s\S]+?)%>/g, lh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, uh = /^\w*$/, ph = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, $r = /[\\^$.*+?()[\]{}|]/g, dh = RegExp($r.source), Vr = /^\s+/, gh = /\s/, mh = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, xh = /\{\n\/\* \[wrapped with (.+)\] \*/, vh = /,? & /, _h = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Mh = /[()=,{}\[\]\/\s]/, yh = /\\(\\)?/g, wh = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ps = /\w*$/, Th = /^[-+]0x[0-9a-f]+$/i, Ah = /^0b[01]+$/i, Eh = /^\[object .+?Constructor\]$/, Sh = /^0o[0-7]+$/i, bh = /^(?:0|[1-9]\d*)$/, Ch = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Xe = /($^)/, Rh = /['\n\r\u2028\u2029\\]/g, $e = "\\ud800-\\udfff", Lh = "\\u0300-\\u036f", Ih = "\\ufe20-\\ufe2f", Oh = "\\u20d0-\\u20ff", ds = Lh + Ih + Oh, gs = "\\u2700-\\u27bf", ms = "a-z\\xdf-\\xf6\\xf8-\\xff", Ph = "\\xac\\xb1\\xd7\\xf7", zh = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Uh = "\\u2000-\\u206f", Dh = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", xs = "A-Z\\xc0-\\xd6\\xd8-\\xde", vs = "\\ufe0e\\ufe0f", _s = Ph + zh + Uh + Dh, Qr = "['’]", qh = "[" + $e + "]", Ms = "[" + _s + "]", Ve = "[" + ds + "]", ys = "\\d+", Fh = "[" + gs + "]", ws = "[" + ms + "]", Ts = "[^" + $e + _s + ys + gs + ms + xs + "]", Jr = "\\ud83c[\\udffb-\\udfff]", Bh = "(?:" + Ve + "|" + Jr + ")", As = "[^" + $e + "]", jr = "(?:\\ud83c[\\udde6-\\uddff]){2}", ti = "[\\ud800-\\udbff][\\udc00-\\udfff]", jn = "[" + xs + "]", Es = "\\u200d", Ss = "(?:" + ws + "|" + Ts + ")", Wh = "(?:" + jn + "|" + Ts + ")", bs = "(?:" + Qr + "(?:d|ll|m|re|s|t|ve))?", Cs = "(?:" + Qr + "(?:D|LL|M|RE|S|T|VE))?", Rs = Bh + "?", Ls = "[" + vs + "]?", Nh = "(?:" + Es + "(?:" + [As, jr, ti].join("|") + ")" + Ls + Rs + ")*", kh = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Hh = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Is = Ls + Rs + Nh, Kh = "(?:" + [Fh, jr, ti].join("|") + ")" + Is, Yh = "(?:" + [As + Ve + "?", Ve, jr, ti, qh].join("|") + ")", Gh = RegExp(Qr, "g"), Zh = RegExp(Ve, "g"), ni = RegExp(Jr + "(?=" + Jr + ")|" + Yh + Is, "g"), Xh = RegExp([
        jn + "?" + ws + "+" + bs + "(?=" + [Ms, jn, "$"].join("|") + ")",
        Wh + "+" + Cs + "(?=" + [Ms, jn + Ss, "$"].join("|") + ")",
        jn + "?" + Ss + "+" + bs,
        jn + "+" + Cs,
        Hh,
        kh,
        ys,
        Kh
      ].join("|"), "g"), $h = RegExp("[" + Es + $e + ds + vs + "]"), Vh = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Qh = [
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
      ], Jh = -1, yt = {};
      yt[Wr] = yt[Nr] = yt[kr] = yt[Hr] = yt[Kr] = yt[Yr] = yt[Gr] = yt[Zr] = yt[Xr] = !0, yt[Qn] = yt[Ke] = yt[ye] = yt[ge] = yt[Jn] = yt[me] = yt[Ye] = yt[Ge] = yt[an] = yt[xe] = yt[_n] = yt[ve] = yt[hn] = yt[_e] = yt[Me] = !1;
      var Mt = {};
      Mt[Qn] = Mt[Ke] = Mt[ye] = Mt[Jn] = Mt[ge] = Mt[me] = Mt[Wr] = Mt[Nr] = Mt[kr] = Mt[Hr] = Mt[Kr] = Mt[an] = Mt[xe] = Mt[_n] = Mt[ve] = Mt[hn] = Mt[_e] = Mt[Ze] = Mt[Yr] = Mt[Gr] = Mt[Zr] = Mt[Xr] = !0, Mt[Ye] = Mt[Ge] = Mt[Me] = !1;
      var jh = {
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
      }, to = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, no = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, eo = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, ro = parseFloat, io = parseInt, Os = typeof Dr == "object" && Dr && Dr.Object === Object && Dr, so = typeof self == "object" && self && self.Object === Object && self, It = Os || so || Function("return this")(), ei = t && !t.nodeType && t, kn = ei && !0 && C && !C.nodeType && C, Ps = kn && kn.exports === ei, ri = Ps && Os.process, Jt = (function() {
        try {
          var _ = kn && kn.require && kn.require("util").types;
          return _ || ri && ri.binding && ri.binding("util");
        } catch {
        }
      })(), zs = Jt && Jt.isArrayBuffer, Us = Jt && Jt.isDate, Ds = Jt && Jt.isMap, qs = Jt && Jt.isRegExp, Fs = Jt && Jt.isSet, Bs = Jt && Jt.isTypedArray;
      function Kt(_, R, A) {
        switch (A.length) {
          case 0:
            return _.call(R);
          case 1:
            return _.call(R, A[0]);
          case 2:
            return _.call(R, A[0], A[1]);
          case 3:
            return _.call(R, A[0], A[1], A[2]);
        }
        return _.apply(R, A);
      }
      function co(_, R, A, W) {
        for (var Q = -1, pt = _ == null ? 0 : _.length; ++Q < pt; ) {
          var bt = _[Q];
          R(W, bt, A(bt), _);
        }
        return W;
      }
      function jt(_, R) {
        for (var A = -1, W = _ == null ? 0 : _.length; ++A < W && R(_[A], A, _) !== !1; )
          ;
        return _;
      }
      function ao(_, R) {
        for (var A = _ == null ? 0 : _.length; A-- && R(_[A], A, _) !== !1; )
          ;
        return _;
      }
      function Ws(_, R) {
        for (var A = -1, W = _ == null ? 0 : _.length; ++A < W; )
          if (!R(_[A], A, _))
            return !1;
        return !0;
      }
      function Rn(_, R) {
        for (var A = -1, W = _ == null ? 0 : _.length, Q = 0, pt = []; ++A < W; ) {
          var bt = _[A];
          R(bt, A, _) && (pt[Q++] = bt);
        }
        return pt;
      }
      function Qe(_, R) {
        var A = _ == null ? 0 : _.length;
        return !!A && te(_, R, 0) > -1;
      }
      function ii(_, R, A) {
        for (var W = -1, Q = _ == null ? 0 : _.length; ++W < Q; )
          if (A(R, _[W]))
            return !0;
        return !1;
      }
      function wt(_, R) {
        for (var A = -1, W = _ == null ? 0 : _.length, Q = Array(W); ++A < W; )
          Q[A] = R(_[A], A, _);
        return Q;
      }
      function Ln(_, R) {
        for (var A = -1, W = R.length, Q = _.length; ++A < W; )
          _[Q + A] = R[A];
        return _;
      }
      function si(_, R, A, W) {
        var Q = -1, pt = _ == null ? 0 : _.length;
        for (W && pt && (A = _[++Q]); ++Q < pt; )
          A = R(A, _[Q], Q, _);
        return A;
      }
      function ho(_, R, A, W) {
        var Q = _ == null ? 0 : _.length;
        for (W && Q && (A = _[--Q]); Q--; )
          A = R(A, _[Q], Q, _);
        return A;
      }
      function ci(_, R) {
        for (var A = -1, W = _ == null ? 0 : _.length; ++A < W; )
          if (R(_[A], A, _))
            return !0;
        return !1;
      }
      var oo = ai("length");
      function fo(_) {
        return _.split("");
      }
      function lo(_) {
        return _.match(_h) || [];
      }
      function Ns(_, R, A) {
        var W;
        return A(_, function(Q, pt, bt) {
          if (R(Q, pt, bt))
            return W = pt, !1;
        }), W;
      }
      function Je(_, R, A, W) {
        for (var Q = _.length, pt = A + (W ? 1 : -1); W ? pt-- : ++pt < Q; )
          if (R(_[pt], pt, _))
            return pt;
        return -1;
      }
      function te(_, R, A) {
        return R === R ? Ao(_, R, A) : Je(_, ks, A);
      }
      function uo(_, R, A, W) {
        for (var Q = A - 1, pt = _.length; ++Q < pt; )
          if (W(_[Q], R))
            return Q;
        return -1;
      }
      function ks(_) {
        return _ !== _;
      }
      function Hs(_, R) {
        var A = _ == null ? 0 : _.length;
        return A ? oi(_, R) / A : Nn;
      }
      function ai(_) {
        return function(R) {
          return R == null ? e : R[_];
        };
      }
      function hi(_) {
        return function(R) {
          return _ == null ? e : _[R];
        };
      }
      function Ks(_, R, A, W, Q) {
        return Q(_, function(pt, bt, _t) {
          A = W ? (W = !1, pt) : R(A, pt, bt, _t);
        }), A;
      }
      function po(_, R) {
        var A = _.length;
        for (_.sort(R); A--; )
          _[A] = _[A].value;
        return _;
      }
      function oi(_, R) {
        for (var A, W = -1, Q = _.length; ++W < Q; ) {
          var pt = R(_[W]);
          pt !== e && (A = A === e ? pt : A + pt);
        }
        return A;
      }
      function fi(_, R) {
        for (var A = -1, W = Array(_); ++A < _; )
          W[A] = R(A);
        return W;
      }
      function go(_, R) {
        return wt(R, function(A) {
          return [A, _[A]];
        });
      }
      function Ys(_) {
        return _ && _.slice(0, $s(_) + 1).replace(Vr, "");
      }
      function Yt(_) {
        return function(R) {
          return _(R);
        };
      }
      function li(_, R) {
        return wt(R, function(A) {
          return _[A];
        });
      }
      function we(_, R) {
        return _.has(R);
      }
      function Gs(_, R) {
        for (var A = -1, W = _.length; ++A < W && te(R, _[A], 0) > -1; )
          ;
        return A;
      }
      function Zs(_, R) {
        for (var A = _.length; A-- && te(R, _[A], 0) > -1; )
          ;
        return A;
      }
      function mo(_, R) {
        for (var A = _.length, W = 0; A--; )
          _[A] === R && ++W;
        return W;
      }
      var xo = hi(jh), vo = hi(to);
      function _o(_) {
        return "\\" + eo[_];
      }
      function Mo(_, R) {
        return _ == null ? e : _[R];
      }
      function ne(_) {
        return $h.test(_);
      }
      function yo(_) {
        return Vh.test(_);
      }
      function wo(_) {
        for (var R, A = []; !(R = _.next()).done; )
          A.push(R.value);
        return A;
      }
      function ui(_) {
        var R = -1, A = Array(_.size);
        return _.forEach(function(W, Q) {
          A[++R] = [Q, W];
        }), A;
      }
      function Xs(_, R) {
        return function(A) {
          return _(R(A));
        };
      }
      function In(_, R) {
        for (var A = -1, W = _.length, Q = 0, pt = []; ++A < W; ) {
          var bt = _[A];
          (bt === R || bt === x) && (_[A] = x, pt[Q++] = A);
        }
        return pt;
      }
      function je(_) {
        var R = -1, A = Array(_.size);
        return _.forEach(function(W) {
          A[++R] = W;
        }), A;
      }
      function To(_) {
        var R = -1, A = Array(_.size);
        return _.forEach(function(W) {
          A[++R] = [W, W];
        }), A;
      }
      function Ao(_, R, A) {
        for (var W = A - 1, Q = _.length; ++W < Q; )
          if (_[W] === R)
            return W;
        return -1;
      }
      function Eo(_, R, A) {
        for (var W = A + 1; W--; )
          if (_[W] === R)
            return W;
        return W;
      }
      function ee(_) {
        return ne(_) ? bo(_) : oo(_);
      }
      function on(_) {
        return ne(_) ? Co(_) : fo(_);
      }
      function $s(_) {
        for (var R = _.length; R-- && gh.test(_.charAt(R)); )
          ;
        return R;
      }
      var So = hi(no);
      function bo(_) {
        for (var R = ni.lastIndex = 0; ni.test(_); )
          ++R;
        return R;
      }
      function Co(_) {
        return _.match(ni) || [];
      }
      function Ro(_) {
        return _.match(Xh) || [];
      }
      var Lo = (function _(R) {
        R = R == null ? It : re.defaults(It.Object(), R, re.pick(It, Qh));
        var A = R.Array, W = R.Date, Q = R.Error, pt = R.Function, bt = R.Math, _t = R.Object, pi = R.RegExp, Io = R.String, tn = R.TypeError, tr = A.prototype, Oo = pt.prototype, ie = _t.prototype, nr = R["__core-js_shared__"], er = Oo.toString, xt = ie.hasOwnProperty, Po = 0, Vs = (function() {
          var n = /[^.]+$/.exec(nr && nr.keys && nr.keys.IE_PROTO || "");
          return n ? "Symbol(src)_1." + n : "";
        })(), rr = ie.toString, zo = er.call(_t), Uo = It._, Do = pi(
          "^" + er.call(xt).replace($r, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), ir = Ps ? R.Buffer : e, On = R.Symbol, sr = R.Uint8Array, Qs = ir ? ir.allocUnsafe : e, cr = Xs(_t.getPrototypeOf, _t), Js = _t.create, js = ie.propertyIsEnumerable, ar = tr.splice, tc = On ? On.isConcatSpreadable : e, Te = On ? On.iterator : e, Hn = On ? On.toStringTag : e, hr = (function() {
          try {
            var n = Xn(_t, "defineProperty");
            return n({}, "", {}), n;
          } catch {
          }
        })(), qo = R.clearTimeout !== It.clearTimeout && R.clearTimeout, Fo = W && W.now !== It.Date.now && W.now, Bo = R.setTimeout !== It.setTimeout && R.setTimeout, or = bt.ceil, fr = bt.floor, di = _t.getOwnPropertySymbols, Wo = ir ? ir.isBuffer : e, nc = R.isFinite, No = tr.join, ko = Xs(_t.keys, _t), Ct = bt.max, Pt = bt.min, Ho = W.now, Ko = R.parseInt, ec = bt.random, Yo = tr.reverse, gi = Xn(R, "DataView"), Ae = Xn(R, "Map"), mi = Xn(R, "Promise"), se = Xn(R, "Set"), Ee = Xn(R, "WeakMap"), Se = Xn(_t, "create"), lr = Ee && new Ee(), ce = {}, Go = $n(gi), Zo = $n(Ae), Xo = $n(mi), $o = $n(se), Vo = $n(Ee), ur = On ? On.prototype : e, be = ur ? ur.valueOf : e, rc = ur ? ur.toString : e;
        function l(n) {
          if (At(n) && !j(n) && !(n instanceof ot)) {
            if (n instanceof nn)
              return n;
            if (xt.call(n, "__wrapped__"))
              return ia(n);
          }
          return new nn(n);
        }
        var ae = /* @__PURE__ */ (function() {
          function n() {
          }
          return function(r) {
            if (!Tt(r))
              return {};
            if (Js)
              return Js(r);
            n.prototype = r;
            var i = new n();
            return n.prototype = e, i;
          };
        })();
        function pr() {
        }
        function nn(n, r) {
          this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!r, this.__index__ = 0, this.__values__ = e;
        }
        l.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: oh,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: fh,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: us,
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
            _: l
          }
        }, l.prototype = pr.prototype, l.prototype.constructor = l, nn.prototype = ae(pr.prototype), nn.prototype.constructor = nn;
        function ot(n) {
          this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = pn, this.__views__ = [];
        }
        function Qo() {
          var n = new ot(this.__wrapped__);
          return n.__actions__ = Bt(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Bt(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Bt(this.__views__), n;
        }
        function Jo() {
          if (this.__filtered__) {
            var n = new ot(this);
            n.__dir__ = -1, n.__filtered__ = !0;
          } else
            n = this.clone(), n.__dir__ *= -1;
          return n;
        }
        function jo() {
          var n = this.__wrapped__.value(), r = this.__dir__, i = j(n), a = r < 0, o = i ? n.length : 0, u = ul(0, o, this.__views__), g = u.start, v = u.end, y = v - g, L = a ? v : g - 1, I = this.__iteratees__, O = I.length, U = 0, k = Pt(y, this.__takeCount__);
          if (!i || !a && o == y && k == y)
            return bc(n, this.__actions__);
          var G = [];
          t:
            for (; y-- && U < k; ) {
              L += r;
              for (var rt = -1, Z = n[L]; ++rt < O; ) {
                var at = I[rt], ft = at.iteratee, Xt = at.type, qt = ft(Z);
                if (Xt == V)
                  Z = qt;
                else if (!qt) {
                  if (Xt == dt)
                    continue t;
                  break t;
                }
              }
              G[U++] = Z;
            }
          return G;
        }
        ot.prototype = ae(pr.prototype), ot.prototype.constructor = ot;
        function Kn(n) {
          var r = -1, i = n == null ? 0 : n.length;
          for (this.clear(); ++r < i; ) {
            var a = n[r];
            this.set(a[0], a[1]);
          }
        }
        function tf() {
          this.__data__ = Se ? Se(null) : {}, this.size = 0;
        }
        function nf(n) {
          var r = this.has(n) && delete this.__data__[n];
          return this.size -= r ? 1 : 0, r;
        }
        function ef(n) {
          var r = this.__data__;
          if (Se) {
            var i = r[n];
            return i === d ? e : i;
          }
          return xt.call(r, n) ? r[n] : e;
        }
        function rf(n) {
          var r = this.__data__;
          return Se ? r[n] !== e : xt.call(r, n);
        }
        function sf(n, r) {
          var i = this.__data__;
          return this.size += this.has(n) ? 0 : 1, i[n] = Se && r === e ? d : r, this;
        }
        Kn.prototype.clear = tf, Kn.prototype.delete = nf, Kn.prototype.get = ef, Kn.prototype.has = rf, Kn.prototype.set = sf;
        function Mn(n) {
          var r = -1, i = n == null ? 0 : n.length;
          for (this.clear(); ++r < i; ) {
            var a = n[r];
            this.set(a[0], a[1]);
          }
        }
        function cf() {
          this.__data__ = [], this.size = 0;
        }
        function af(n) {
          var r = this.__data__, i = dr(r, n);
          if (i < 0)
            return !1;
          var a = r.length - 1;
          return i == a ? r.pop() : ar.call(r, i, 1), --this.size, !0;
        }
        function hf(n) {
          var r = this.__data__, i = dr(r, n);
          return i < 0 ? e : r[i][1];
        }
        function of(n) {
          return dr(this.__data__, n) > -1;
        }
        function ff(n, r) {
          var i = this.__data__, a = dr(i, n);
          return a < 0 ? (++this.size, i.push([n, r])) : i[a][1] = r, this;
        }
        Mn.prototype.clear = cf, Mn.prototype.delete = af, Mn.prototype.get = hf, Mn.prototype.has = of, Mn.prototype.set = ff;
        function yn(n) {
          var r = -1, i = n == null ? 0 : n.length;
          for (this.clear(); ++r < i; ) {
            var a = n[r];
            this.set(a[0], a[1]);
          }
        }
        function lf() {
          this.size = 0, this.__data__ = {
            hash: new Kn(),
            map: new (Ae || Mn)(),
            string: new Kn()
          };
        }
        function uf(n) {
          var r = Sr(this, n).delete(n);
          return this.size -= r ? 1 : 0, r;
        }
        function pf(n) {
          return Sr(this, n).get(n);
        }
        function df(n) {
          return Sr(this, n).has(n);
        }
        function gf(n, r) {
          var i = Sr(this, n), a = i.size;
          return i.set(n, r), this.size += i.size == a ? 0 : 1, this;
        }
        yn.prototype.clear = lf, yn.prototype.delete = uf, yn.prototype.get = pf, yn.prototype.has = df, yn.prototype.set = gf;
        function Yn(n) {
          var r = -1, i = n == null ? 0 : n.length;
          for (this.__data__ = new yn(); ++r < i; )
            this.add(n[r]);
        }
        function mf(n) {
          return this.__data__.set(n, d), this;
        }
        function xf(n) {
          return this.__data__.has(n);
        }
        Yn.prototype.add = Yn.prototype.push = mf, Yn.prototype.has = xf;
        function fn(n) {
          var r = this.__data__ = new Mn(n);
          this.size = r.size;
        }
        function vf() {
          this.__data__ = new Mn(), this.size = 0;
        }
        function _f(n) {
          var r = this.__data__, i = r.delete(n);
          return this.size = r.size, i;
        }
        function Mf(n) {
          return this.__data__.get(n);
        }
        function yf(n) {
          return this.__data__.has(n);
        }
        function wf(n, r) {
          var i = this.__data__;
          if (i instanceof Mn) {
            var a = i.__data__;
            if (!Ae || a.length < c - 1)
              return a.push([n, r]), this.size = ++i.size, this;
            i = this.__data__ = new yn(a);
          }
          return i.set(n, r), this.size = i.size, this;
        }
        fn.prototype.clear = vf, fn.prototype.delete = _f, fn.prototype.get = Mf, fn.prototype.has = yf, fn.prototype.set = wf;
        function ic(n, r) {
          var i = j(n), a = !i && Vn(n), o = !i && !a && qn(n), u = !i && !a && !o && le(n), g = i || a || o || u, v = g ? fi(n.length, Io) : [], y = v.length;
          for (var L in n)
            (r || xt.call(n, L)) && !(g && // Safari 9 has enumerable `arguments.length` in strict mode.
            (L == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            o && (L == "offset" || L == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            u && (L == "buffer" || L == "byteLength" || L == "byteOffset") || // Skip index properties.
            En(L, y))) && v.push(L);
          return v;
        }
        function sc(n) {
          var r = n.length;
          return r ? n[bi(0, r - 1)] : e;
        }
        function Tf(n, r) {
          return br(Bt(n), Gn(r, 0, n.length));
        }
        function Af(n) {
          return br(Bt(n));
        }
        function xi(n, r, i) {
          (i !== e && !ln(n[r], i) || i === e && !(r in n)) && wn(n, r, i);
        }
        function Ce(n, r, i) {
          var a = n[r];
          (!(xt.call(n, r) && ln(a, i)) || i === e && !(r in n)) && wn(n, r, i);
        }
        function dr(n, r) {
          for (var i = n.length; i--; )
            if (ln(n[i][0], r))
              return i;
          return -1;
        }
        function Ef(n, r, i, a) {
          return Pn(n, function(o, u, g) {
            r(a, o, i(o), g);
          }), a;
        }
        function cc(n, r) {
          return n && gn(r, Lt(r), n);
        }
        function Sf(n, r) {
          return n && gn(r, Nt(r), n);
        }
        function wn(n, r, i) {
          r == "__proto__" && hr ? hr(n, r, {
            configurable: !0,
            enumerable: !0,
            value: i,
            writable: !0
          }) : n[r] = i;
        }
        function vi(n, r) {
          for (var i = -1, a = r.length, o = A(a), u = n == null; ++i < a; )
            o[i] = u ? e : Ji(n, r[i]);
          return o;
        }
        function Gn(n, r, i) {
          return n === n && (i !== e && (n = n <= i ? n : i), r !== e && (n = n >= r ? n : r)), n;
        }
        function en(n, r, i, a, o, u) {
          var g, v = r & M, y = r & E, L = r & T;
          if (i && (g = o ? i(n, a, o, u) : i(n)), g !== e)
            return g;
          if (!Tt(n))
            return n;
          var I = j(n);
          if (I) {
            if (g = dl(n), !v)
              return Bt(n, g);
          } else {
            var O = zt(n), U = O == Ge || O == hs;
            if (qn(n))
              return Lc(n, v);
            if (O == _n || O == Qn || U && !o) {
              if (g = y || U ? {} : $c(n), !v)
                return y ? rl(n, Sf(g, n)) : el(n, cc(g, n));
            } else {
              if (!Mt[O])
                return o ? n : {};
              g = gl(n, O, v);
            }
          }
          u || (u = new fn());
          var k = u.get(n);
          if (k)
            return k;
          u.set(n, g), Aa(n) ? n.forEach(function(Z) {
            g.add(en(Z, r, i, Z, n, u));
          }) : wa(n) && n.forEach(function(Z, at) {
            g.set(at, en(Z, r, i, at, n, u));
          });
          var G = L ? y ? Fi : qi : y ? Nt : Lt, rt = I ? e : G(n);
          return jt(rt || n, function(Z, at) {
            rt && (at = Z, Z = n[at]), Ce(g, at, en(Z, r, i, at, n, u));
          }), g;
        }
        function bf(n) {
          var r = Lt(n);
          return function(i) {
            return ac(i, n, r);
          };
        }
        function ac(n, r, i) {
          var a = i.length;
          if (n == null)
            return !a;
          for (n = _t(n); a--; ) {
            var o = i[a], u = r[o], g = n[o];
            if (g === e && !(o in n) || !u(g))
              return !1;
          }
          return !0;
        }
        function hc(n, r, i) {
          if (typeof n != "function")
            throw new tn(f);
          return Ue(function() {
            n.apply(e, i);
          }, r);
        }
        function Re(n, r, i, a) {
          var o = -1, u = Qe, g = !0, v = n.length, y = [], L = r.length;
          if (!v)
            return y;
          i && (r = wt(r, Yt(i))), a ? (u = ii, g = !1) : r.length >= c && (u = we, g = !1, r = new Yn(r));
          t:
            for (; ++o < v; ) {
              var I = n[o], O = i == null ? I : i(I);
              if (I = a || I !== 0 ? I : 0, g && O === O) {
                for (var U = L; U--; )
                  if (r[U] === O)
                    continue t;
                y.push(I);
              } else u(r, O, a) || y.push(I);
            }
          return y;
        }
        var Pn = Uc(dn), oc = Uc(Mi, !0);
        function Cf(n, r) {
          var i = !0;
          return Pn(n, function(a, o, u) {
            return i = !!r(a, o, u), i;
          }), i;
        }
        function gr(n, r, i) {
          for (var a = -1, o = n.length; ++a < o; ) {
            var u = n[a], g = r(u);
            if (g != null && (v === e ? g === g && !Zt(g) : i(g, v)))
              var v = g, y = u;
          }
          return y;
        }
        function Rf(n, r, i, a) {
          var o = n.length;
          for (i = tt(i), i < 0 && (i = -i > o ? 0 : o + i), a = a === e || a > o ? o : tt(a), a < 0 && (a += o), a = i > a ? 0 : Sa(a); i < a; )
            n[i++] = r;
          return n;
        }
        function fc(n, r) {
          var i = [];
          return Pn(n, function(a, o, u) {
            r(a, o, u) && i.push(a);
          }), i;
        }
        function Ot(n, r, i, a, o) {
          var u = -1, g = n.length;
          for (i || (i = xl), o || (o = []); ++u < g; ) {
            var v = n[u];
            r > 0 && i(v) ? r > 1 ? Ot(v, r - 1, i, a, o) : Ln(o, v) : a || (o[o.length] = v);
          }
          return o;
        }
        var _i = Dc(), lc = Dc(!0);
        function dn(n, r) {
          return n && _i(n, r, Lt);
        }
        function Mi(n, r) {
          return n && lc(n, r, Lt);
        }
        function mr(n, r) {
          return Rn(r, function(i) {
            return Sn(n[i]);
          });
        }
        function Zn(n, r) {
          r = Un(r, n);
          for (var i = 0, a = r.length; n != null && i < a; )
            n = n[mn(r[i++])];
          return i && i == a ? n : e;
        }
        function uc(n, r, i) {
          var a = r(n);
          return j(n) ? a : Ln(a, i(n));
        }
        function Ut(n) {
          return n == null ? n === e ? eh : th : Hn && Hn in _t(n) ? ll(n) : Al(n);
        }
        function yi(n, r) {
          return n > r;
        }
        function Lf(n, r) {
          return n != null && xt.call(n, r);
        }
        function If(n, r) {
          return n != null && r in _t(n);
        }
        function Of(n, r, i) {
          return n >= Pt(r, i) && n < Ct(r, i);
        }
        function wi(n, r, i) {
          for (var a = i ? ii : Qe, o = n[0].length, u = n.length, g = u, v = A(u), y = 1 / 0, L = []; g--; ) {
            var I = n[g];
            g && r && (I = wt(I, Yt(r))), y = Pt(I.length, y), v[g] = !i && (r || o >= 120 && I.length >= 120) ? new Yn(g && I) : e;
          }
          I = n[0];
          var O = -1, U = v[0];
          t:
            for (; ++O < o && L.length < y; ) {
              var k = I[O], G = r ? r(k) : k;
              if (k = i || k !== 0 ? k : 0, !(U ? we(U, G) : a(L, G, i))) {
                for (g = u; --g; ) {
                  var rt = v[g];
                  if (!(rt ? we(rt, G) : a(n[g], G, i)))
                    continue t;
                }
                U && U.push(G), L.push(k);
              }
            }
          return L;
        }
        function Pf(n, r, i, a) {
          return dn(n, function(o, u, g) {
            r(a, i(o), u, g);
          }), a;
        }
        function Le(n, r, i) {
          r = Un(r, n), n = jc(n, r);
          var a = n == null ? n : n[mn(sn(r))];
          return a == null ? e : Kt(a, n, i);
        }
        function pc(n) {
          return At(n) && Ut(n) == Qn;
        }
        function zf(n) {
          return At(n) && Ut(n) == ye;
        }
        function Uf(n) {
          return At(n) && Ut(n) == me;
        }
        function Ie(n, r, i, a, o) {
          return n === r ? !0 : n == null || r == null || !At(n) && !At(r) ? n !== n && r !== r : Df(n, r, i, a, Ie, o);
        }
        function Df(n, r, i, a, o, u) {
          var g = j(n), v = j(r), y = g ? Ke : zt(n), L = v ? Ke : zt(r);
          y = y == Qn ? _n : y, L = L == Qn ? _n : L;
          var I = y == _n, O = L == _n, U = y == L;
          if (U && qn(n)) {
            if (!qn(r))
              return !1;
            g = !0, I = !1;
          }
          if (U && !I)
            return u || (u = new fn()), g || le(n) ? Gc(n, r, i, a, o, u) : ol(n, r, y, i, a, o, u);
          if (!(i & w)) {
            var k = I && xt.call(n, "__wrapped__"), G = O && xt.call(r, "__wrapped__");
            if (k || G) {
              var rt = k ? n.value() : n, Z = G ? r.value() : r;
              return u || (u = new fn()), o(rt, Z, i, a, u);
            }
          }
          return U ? (u || (u = new fn()), fl(n, r, i, a, o, u)) : !1;
        }
        function qf(n) {
          return At(n) && zt(n) == an;
        }
        function Ti(n, r, i, a) {
          var o = i.length, u = o, g = !a;
          if (n == null)
            return !u;
          for (n = _t(n); o--; ) {
            var v = i[o];
            if (g && v[2] ? v[1] !== n[v[0]] : !(v[0] in n))
              return !1;
          }
          for (; ++o < u; ) {
            v = i[o];
            var y = v[0], L = n[y], I = v[1];
            if (g && v[2]) {
              if (L === e && !(y in n))
                return !1;
            } else {
              var O = new fn();
              if (a)
                var U = a(L, I, y, n, r, O);
              if (!(U === e ? Ie(I, L, w | b, a, O) : U))
                return !1;
            }
          }
          return !0;
        }
        function dc(n) {
          if (!Tt(n) || _l(n))
            return !1;
          var r = Sn(n) ? Do : Eh;
          return r.test($n(n));
        }
        function Ff(n) {
          return At(n) && Ut(n) == ve;
        }
        function Bf(n) {
          return At(n) && zt(n) == hn;
        }
        function Wf(n) {
          return At(n) && Pr(n.length) && !!yt[Ut(n)];
        }
        function gc(n) {
          return typeof n == "function" ? n : n == null ? kt : typeof n == "object" ? j(n) ? vc(n[0], n[1]) : xc(n) : qa(n);
        }
        function Ai(n) {
          if (!ze(n))
            return ko(n);
          var r = [];
          for (var i in _t(n))
            xt.call(n, i) && i != "constructor" && r.push(i);
          return r;
        }
        function Nf(n) {
          if (!Tt(n))
            return Tl(n);
          var r = ze(n), i = [];
          for (var a in n)
            a == "constructor" && (r || !xt.call(n, a)) || i.push(a);
          return i;
        }
        function Ei(n, r) {
          return n < r;
        }
        function mc(n, r) {
          var i = -1, a = Wt(n) ? A(n.length) : [];
          return Pn(n, function(o, u, g) {
            a[++i] = r(o, u, g);
          }), a;
        }
        function xc(n) {
          var r = Wi(n);
          return r.length == 1 && r[0][2] ? Qc(r[0][0], r[0][1]) : function(i) {
            return i === n || Ti(i, n, r);
          };
        }
        function vc(n, r) {
          return ki(n) && Vc(r) ? Qc(mn(n), r) : function(i) {
            var a = Ji(i, n);
            return a === e && a === r ? ji(i, n) : Ie(r, a, w | b);
          };
        }
        function xr(n, r, i, a, o) {
          n !== r && _i(r, function(u, g) {
            if (o || (o = new fn()), Tt(u))
              kf(n, r, g, i, xr, a, o);
            else {
              var v = a ? a(Ki(n, g), u, g + "", n, r, o) : e;
              v === e && (v = u), xi(n, g, v);
            }
          }, Nt);
        }
        function kf(n, r, i, a, o, u, g) {
          var v = Ki(n, i), y = Ki(r, i), L = g.get(y);
          if (L) {
            xi(n, i, L);
            return;
          }
          var I = u ? u(v, y, i + "", n, r, g) : e, O = I === e;
          if (O) {
            var U = j(y), k = !U && qn(y), G = !U && !k && le(y);
            I = y, U || k || G ? j(v) ? I = v : Et(v) ? I = Bt(v) : k ? (O = !1, I = Lc(y, !0)) : G ? (O = !1, I = Ic(y, !0)) : I = [] : De(y) || Vn(y) ? (I = v, Vn(v) ? I = ba(v) : (!Tt(v) || Sn(v)) && (I = $c(y))) : O = !1;
          }
          O && (g.set(y, I), o(I, y, a, u, g), g.delete(y)), xi(n, i, I);
        }
        function _c(n, r) {
          var i = n.length;
          if (i)
            return r += r < 0 ? i : 0, En(r, i) ? n[r] : e;
        }
        function Mc(n, r, i) {
          r.length ? r = wt(r, function(u) {
            return j(u) ? function(g) {
              return Zn(g, u.length === 1 ? u[0] : u);
            } : u;
          }) : r = [kt];
          var a = -1;
          r = wt(r, Yt(Y()));
          var o = mc(n, function(u, g, v) {
            var y = wt(r, function(L) {
              return L(u);
            });
            return { criteria: y, index: ++a, value: u };
          });
          return po(o, function(u, g) {
            return nl(u, g, i);
          });
        }
        function Hf(n, r) {
          return yc(n, r, function(i, a) {
            return ji(n, a);
          });
        }
        function yc(n, r, i) {
          for (var a = -1, o = r.length, u = {}; ++a < o; ) {
            var g = r[a], v = Zn(n, g);
            i(v, g) && Oe(u, Un(g, n), v);
          }
          return u;
        }
        function Kf(n) {
          return function(r) {
            return Zn(r, n);
          };
        }
        function Si(n, r, i, a) {
          var o = a ? uo : te, u = -1, g = r.length, v = n;
          for (n === r && (r = Bt(r)), i && (v = wt(n, Yt(i))); ++u < g; )
            for (var y = 0, L = r[u], I = i ? i(L) : L; (y = o(v, I, y, a)) > -1; )
              v !== n && ar.call(v, y, 1), ar.call(n, y, 1);
          return n;
        }
        function wc(n, r) {
          for (var i = n ? r.length : 0, a = i - 1; i--; ) {
            var o = r[i];
            if (i == a || o !== u) {
              var u = o;
              En(o) ? ar.call(n, o, 1) : Li(n, o);
            }
          }
          return n;
        }
        function bi(n, r) {
          return n + fr(ec() * (r - n + 1));
        }
        function Yf(n, r, i, a) {
          for (var o = -1, u = Ct(or((r - n) / (i || 1)), 0), g = A(u); u--; )
            g[a ? u : ++o] = n, n += i;
          return g;
        }
        function Ci(n, r) {
          var i = "";
          if (!n || r < 1 || r > Ft)
            return i;
          do
            r % 2 && (i += n), r = fr(r / 2), r && (n += n);
          while (r);
          return i;
        }
        function st(n, r) {
          return Yi(Jc(n, r, kt), n + "");
        }
        function Gf(n) {
          return sc(ue(n));
        }
        function Zf(n, r) {
          var i = ue(n);
          return br(i, Gn(r, 0, i.length));
        }
        function Oe(n, r, i, a) {
          if (!Tt(n))
            return n;
          r = Un(r, n);
          for (var o = -1, u = r.length, g = u - 1, v = n; v != null && ++o < u; ) {
            var y = mn(r[o]), L = i;
            if (y === "__proto__" || y === "constructor" || y === "prototype")
              return n;
            if (o != g) {
              var I = v[y];
              L = a ? a(I, y, v) : e, L === e && (L = Tt(I) ? I : En(r[o + 1]) ? [] : {});
            }
            Ce(v, y, L), v = v[y];
          }
          return n;
        }
        var Tc = lr ? function(n, r) {
          return lr.set(n, r), n;
        } : kt, Xf = hr ? function(n, r) {
          return hr(n, "toString", {
            configurable: !0,
            enumerable: !1,
            value: ns(r),
            writable: !0
          });
        } : kt;
        function $f(n) {
          return br(ue(n));
        }
        function rn(n, r, i) {
          var a = -1, o = n.length;
          r < 0 && (r = -r > o ? 0 : o + r), i = i > o ? o : i, i < 0 && (i += o), o = r > i ? 0 : i - r >>> 0, r >>>= 0;
          for (var u = A(o); ++a < o; )
            u[a] = n[a + r];
          return u;
        }
        function Vf(n, r) {
          var i;
          return Pn(n, function(a, o, u) {
            return i = r(a, o, u), !i;
          }), !!i;
        }
        function vr(n, r, i) {
          var a = 0, o = n == null ? a : n.length;
          if (typeof r == "number" && r === r && o <= Va) {
            for (; a < o; ) {
              var u = a + o >>> 1, g = n[u];
              g !== null && !Zt(g) && (i ? g <= r : g < r) ? a = u + 1 : o = u;
            }
            return o;
          }
          return Ri(n, r, kt, i);
        }
        function Ri(n, r, i, a) {
          var o = 0, u = n == null ? 0 : n.length;
          if (u === 0)
            return 0;
          r = i(r);
          for (var g = r !== r, v = r === null, y = Zt(r), L = r === e; o < u; ) {
            var I = fr((o + u) / 2), O = i(n[I]), U = O !== e, k = O === null, G = O === O, rt = Zt(O);
            if (g)
              var Z = a || G;
            else L ? Z = G && (a || U) : v ? Z = G && U && (a || !k) : y ? Z = G && U && !k && (a || !rt) : k || rt ? Z = !1 : Z = a ? O <= r : O < r;
            Z ? o = I + 1 : u = I;
          }
          return Pt(u, $a);
        }
        function Ac(n, r) {
          for (var i = -1, a = n.length, o = 0, u = []; ++i < a; ) {
            var g = n[i], v = r ? r(g) : g;
            if (!i || !ln(v, y)) {
              var y = v;
              u[o++] = g === 0 ? 0 : g;
            }
          }
          return u;
        }
        function Ec(n) {
          return typeof n == "number" ? n : Zt(n) ? Nn : +n;
        }
        function Gt(n) {
          if (typeof n == "string")
            return n;
          if (j(n))
            return wt(n, Gt) + "";
          if (Zt(n))
            return rc ? rc.call(n) : "";
          var r = n + "";
          return r == "0" && 1 / n == -Ht ? "-0" : r;
        }
        function zn(n, r, i) {
          var a = -1, o = Qe, u = n.length, g = !0, v = [], y = v;
          if (i)
            g = !1, o = ii;
          else if (u >= c) {
            var L = r ? null : al(n);
            if (L)
              return je(L);
            g = !1, o = we, y = new Yn();
          } else
            y = r ? [] : v;
          t:
            for (; ++a < u; ) {
              var I = n[a], O = r ? r(I) : I;
              if (I = i || I !== 0 ? I : 0, g && O === O) {
                for (var U = y.length; U--; )
                  if (y[U] === O)
                    continue t;
                r && y.push(O), v.push(I);
              } else o(y, O, i) || (y !== v && y.push(O), v.push(I));
            }
          return v;
        }
        function Li(n, r) {
          return r = Un(r, n), n = jc(n, r), n == null || delete n[mn(sn(r))];
        }
        function Sc(n, r, i, a) {
          return Oe(n, r, i(Zn(n, r)), a);
        }
        function _r(n, r, i, a) {
          for (var o = n.length, u = a ? o : -1; (a ? u-- : ++u < o) && r(n[u], u, n); )
            ;
          return i ? rn(n, a ? 0 : u, a ? u + 1 : o) : rn(n, a ? u + 1 : 0, a ? o : u);
        }
        function bc(n, r) {
          var i = n;
          return i instanceof ot && (i = i.value()), si(r, function(a, o) {
            return o.func.apply(o.thisArg, Ln([a], o.args));
          }, i);
        }
        function Ii(n, r, i) {
          var a = n.length;
          if (a < 2)
            return a ? zn(n[0]) : [];
          for (var o = -1, u = A(a); ++o < a; )
            for (var g = n[o], v = -1; ++v < a; )
              v != o && (u[o] = Re(u[o] || g, n[v], r, i));
          return zn(Ot(u, 1), r, i);
        }
        function Cc(n, r, i) {
          for (var a = -1, o = n.length, u = r.length, g = {}; ++a < o; ) {
            var v = a < u ? r[a] : e;
            i(g, n[a], v);
          }
          return g;
        }
        function Oi(n) {
          return Et(n) ? n : [];
        }
        function Pi(n) {
          return typeof n == "function" ? n : kt;
        }
        function Un(n, r) {
          return j(n) ? n : ki(n, r) ? [n] : ra(gt(n));
        }
        var Qf = st;
        function Dn(n, r, i) {
          var a = n.length;
          return i = i === e ? a : i, !r && i >= a ? n : rn(n, r, i);
        }
        var Rc = qo || function(n) {
          return It.clearTimeout(n);
        };
        function Lc(n, r) {
          if (r)
            return n.slice();
          var i = n.length, a = Qs ? Qs(i) : new n.constructor(i);
          return n.copy(a), a;
        }
        function zi(n) {
          var r = new n.constructor(n.byteLength);
          return new sr(r).set(new sr(n)), r;
        }
        function Jf(n, r) {
          var i = r ? zi(n.buffer) : n.buffer;
          return new n.constructor(i, n.byteOffset, n.byteLength);
        }
        function jf(n) {
          var r = new n.constructor(n.source, ps.exec(n));
          return r.lastIndex = n.lastIndex, r;
        }
        function tl(n) {
          return be ? _t(be.call(n)) : {};
        }
        function Ic(n, r) {
          var i = r ? zi(n.buffer) : n.buffer;
          return new n.constructor(i, n.byteOffset, n.length);
        }
        function Oc(n, r) {
          if (n !== r) {
            var i = n !== e, a = n === null, o = n === n, u = Zt(n), g = r !== e, v = r === null, y = r === r, L = Zt(r);
            if (!v && !L && !u && n > r || u && g && y && !v && !L || a && g && y || !i && y || !o)
              return 1;
            if (!a && !u && !L && n < r || L && i && o && !a && !u || v && i && o || !g && o || !y)
              return -1;
          }
          return 0;
        }
        function nl(n, r, i) {
          for (var a = -1, o = n.criteria, u = r.criteria, g = o.length, v = i.length; ++a < g; ) {
            var y = Oc(o[a], u[a]);
            if (y) {
              if (a >= v)
                return y;
              var L = i[a];
              return y * (L == "desc" ? -1 : 1);
            }
          }
          return n.index - r.index;
        }
        function Pc(n, r, i, a) {
          for (var o = -1, u = n.length, g = i.length, v = -1, y = r.length, L = Ct(u - g, 0), I = A(y + L), O = !a; ++v < y; )
            I[v] = r[v];
          for (; ++o < g; )
            (O || o < u) && (I[i[o]] = n[o]);
          for (; L--; )
            I[v++] = n[o++];
          return I;
        }
        function zc(n, r, i, a) {
          for (var o = -1, u = n.length, g = -1, v = i.length, y = -1, L = r.length, I = Ct(u - v, 0), O = A(I + L), U = !a; ++o < I; )
            O[o] = n[o];
          for (var k = o; ++y < L; )
            O[k + y] = r[y];
          for (; ++g < v; )
            (U || o < u) && (O[k + i[g]] = n[o++]);
          return O;
        }
        function Bt(n, r) {
          var i = -1, a = n.length;
          for (r || (r = A(a)); ++i < a; )
            r[i] = n[i];
          return r;
        }
        function gn(n, r, i, a) {
          var o = !i;
          i || (i = {});
          for (var u = -1, g = r.length; ++u < g; ) {
            var v = r[u], y = a ? a(i[v], n[v], v, i, n) : e;
            y === e && (y = n[v]), o ? wn(i, v, y) : Ce(i, v, y);
          }
          return i;
        }
        function el(n, r) {
          return gn(n, Ni(n), r);
        }
        function rl(n, r) {
          return gn(n, Zc(n), r);
        }
        function Mr(n, r) {
          return function(i, a) {
            var o = j(i) ? co : Ef, u = r ? r() : {};
            return o(i, n, Y(a, 2), u);
          };
        }
        function he(n) {
          return st(function(r, i) {
            var a = -1, o = i.length, u = o > 1 ? i[o - 1] : e, g = o > 2 ? i[2] : e;
            for (u = n.length > 3 && typeof u == "function" ? (o--, u) : e, g && Dt(i[0], i[1], g) && (u = o < 3 ? e : u, o = 1), r = _t(r); ++a < o; ) {
              var v = i[a];
              v && n(r, v, a, u);
            }
            return r;
          });
        }
        function Uc(n, r) {
          return function(i, a) {
            if (i == null)
              return i;
            if (!Wt(i))
              return n(i, a);
            for (var o = i.length, u = r ? o : -1, g = _t(i); (r ? u-- : ++u < o) && a(g[u], u, g) !== !1; )
              ;
            return i;
          };
        }
        function Dc(n) {
          return function(r, i, a) {
            for (var o = -1, u = _t(r), g = a(r), v = g.length; v--; ) {
              var y = g[n ? v : ++o];
              if (i(u[y], y, u) === !1)
                break;
            }
            return r;
          };
        }
        function il(n, r, i) {
          var a = r & S, o = Pe(n);
          function u() {
            var g = this && this !== It && this instanceof u ? o : n;
            return g.apply(a ? i : this, arguments);
          }
          return u;
        }
        function qc(n) {
          return function(r) {
            r = gt(r);
            var i = ne(r) ? on(r) : e, a = i ? i[0] : r.charAt(0), o = i ? Dn(i, 1).join("") : r.slice(1);
            return a[n]() + o;
          };
        }
        function oe(n) {
          return function(r) {
            return si(Ua(za(r).replace(Gh, "")), n, "");
          };
        }
        function Pe(n) {
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
            var i = ae(n.prototype), a = n.apply(i, r);
            return Tt(a) ? a : i;
          };
        }
        function sl(n, r, i) {
          var a = Pe(n);
          function o() {
            for (var u = arguments.length, g = A(u), v = u, y = fe(o); v--; )
              g[v] = arguments[v];
            var L = u < 3 && g[0] !== y && g[u - 1] !== y ? [] : In(g, y);
            if (u -= L.length, u < i)
              return kc(
                n,
                r,
                yr,
                o.placeholder,
                e,
                g,
                L,
                e,
                e,
                i - u
              );
            var I = this && this !== It && this instanceof o ? a : n;
            return Kt(I, this, g);
          }
          return o;
        }
        function Fc(n) {
          return function(r, i, a) {
            var o = _t(r);
            if (!Wt(r)) {
              var u = Y(i, 3);
              r = Lt(r), i = function(v) {
                return u(o[v], v, o);
              };
            }
            var g = n(r, i, a);
            return g > -1 ? o[u ? r[g] : g] : e;
          };
        }
        function Bc(n) {
          return An(function(r) {
            var i = r.length, a = i, o = nn.prototype.thru;
            for (n && r.reverse(); a--; ) {
              var u = r[a];
              if (typeof u != "function")
                throw new tn(f);
              if (o && !g && Er(u) == "wrapper")
                var g = new nn([], !0);
            }
            for (a = g ? a : i; ++a < i; ) {
              u = r[a];
              var v = Er(u), y = v == "wrapper" ? Bi(u) : e;
              y && Hi(y[0]) && y[1] == (D | N | z | it) && !y[4].length && y[9] == 1 ? g = g[Er(y[0])].apply(g, y[3]) : g = u.length == 1 && Hi(u) ? g[v]() : g.thru(u);
            }
            return function() {
              var L = arguments, I = L[0];
              if (g && L.length == 1 && j(I))
                return g.plant(I).value();
              for (var O = 0, U = i ? r[O].apply(this, L) : I; ++O < i; )
                U = r[O].call(this, U);
              return U;
            };
          });
        }
        function yr(n, r, i, a, o, u, g, v, y, L) {
          var I = r & D, O = r & S, U = r & P, k = r & (N | F), G = r & et, rt = U ? e : Pe(n);
          function Z() {
            for (var at = arguments.length, ft = A(at), Xt = at; Xt--; )
              ft[Xt] = arguments[Xt];
            if (k)
              var qt = fe(Z), $t = mo(ft, qt);
            if (a && (ft = Pc(ft, a, o, k)), u && (ft = zc(ft, u, g, k)), at -= $t, k && at < L) {
              var St = In(ft, qt);
              return kc(
                n,
                r,
                yr,
                Z.placeholder,
                i,
                ft,
                St,
                v,
                y,
                L - at
              );
            }
            var un = O ? i : this, Cn = U ? un[n] : n;
            return at = ft.length, v ? ft = El(ft, v) : G && at > 1 && ft.reverse(), I && y < at && (ft.length = y), this && this !== It && this instanceof Z && (Cn = rt || Pe(Cn)), Cn.apply(un, ft);
          }
          return Z;
        }
        function Wc(n, r) {
          return function(i, a) {
            return Pf(i, n, r(a), {});
          };
        }
        function wr(n, r) {
          return function(i, a) {
            var o;
            if (i === e && a === e)
              return r;
            if (i !== e && (o = i), a !== e) {
              if (o === e)
                return a;
              typeof i == "string" || typeof a == "string" ? (i = Gt(i), a = Gt(a)) : (i = Ec(i), a = Ec(a)), o = n(i, a);
            }
            return o;
          };
        }
        function Ui(n) {
          return An(function(r) {
            return r = wt(r, Yt(Y())), st(function(i) {
              var a = this;
              return n(r, function(o) {
                return Kt(o, a, i);
              });
            });
          });
        }
        function Tr(n, r) {
          r = r === e ? " " : Gt(r);
          var i = r.length;
          if (i < 2)
            return i ? Ci(r, n) : r;
          var a = Ci(r, or(n / ee(r)));
          return ne(r) ? Dn(on(a), 0, n).join("") : a.slice(0, n);
        }
        function cl(n, r, i, a) {
          var o = r & S, u = Pe(n);
          function g() {
            for (var v = -1, y = arguments.length, L = -1, I = a.length, O = A(I + y), U = this && this !== It && this instanceof g ? u : n; ++L < I; )
              O[L] = a[L];
            for (; y--; )
              O[L++] = arguments[++v];
            return Kt(U, o ? i : this, O);
          }
          return g;
        }
        function Nc(n) {
          return function(r, i, a) {
            return a && typeof a != "number" && Dt(r, i, a) && (i = a = e), r = bn(r), i === e ? (i = r, r = 0) : i = bn(i), a = a === e ? r < i ? 1 : -1 : bn(a), Yf(r, i, a, n);
          };
        }
        function Ar(n) {
          return function(r, i) {
            return typeof r == "string" && typeof i == "string" || (r = cn(r), i = cn(i)), n(r, i);
          };
        }
        function kc(n, r, i, a, o, u, g, v, y, L) {
          var I = r & N, O = I ? g : e, U = I ? e : g, k = I ? u : e, G = I ? e : u;
          r |= I ? z : B, r &= ~(I ? B : z), r & q || (r &= -4);
          var rt = [
            n,
            r,
            o,
            k,
            O,
            G,
            U,
            v,
            y,
            L
          ], Z = i.apply(e, rt);
          return Hi(n) && ta(Z, rt), Z.placeholder = a, na(Z, n, r);
        }
        function Di(n) {
          var r = bt[n];
          return function(i, a) {
            if (i = cn(i), a = a == null ? 0 : Pt(tt(a), 292), a && nc(i)) {
              var o = (gt(i) + "e").split("e"), u = r(o[0] + "e" + (+o[1] + a));
              return o = (gt(u) + "e").split("e"), +(o[0] + "e" + (+o[1] - a));
            }
            return r(i);
          };
        }
        var al = se && 1 / je(new se([, -0]))[1] == Ht ? function(n) {
          return new se(n);
        } : is;
        function Hc(n) {
          return function(r) {
            var i = zt(r);
            return i == an ? ui(r) : i == hn ? To(r) : go(r, n(r));
          };
        }
        function Tn(n, r, i, a, o, u, g, v) {
          var y = r & P;
          if (!y && typeof n != "function")
            throw new tn(f);
          var L = a ? a.length : 0;
          if (L || (r &= -97, a = o = e), g = g === e ? g : Ct(tt(g), 0), v = v === e ? v : tt(v), L -= o ? o.length : 0, r & B) {
            var I = a, O = o;
            a = o = e;
          }
          var U = y ? e : Bi(n), k = [
            n,
            r,
            i,
            a,
            o,
            I,
            O,
            u,
            g,
            v
          ];
          if (U && wl(k, U), n = k[0], r = k[1], i = k[2], a = k[3], o = k[4], v = k[9] = k[9] === e ? y ? 0 : n.length : Ct(k[9] - L, 0), !v && r & (N | F) && (r &= -25), !r || r == S)
            var G = il(n, r, i);
          else r == N || r == F ? G = sl(n, r, v) : (r == z || r == (S | z)) && !o.length ? G = cl(n, r, i, a) : G = yr.apply(e, k);
          var rt = U ? Tc : ta;
          return na(rt(G, k), n, r);
        }
        function Kc(n, r, i, a) {
          return n === e || ln(n, ie[i]) && !xt.call(a, i) ? r : n;
        }
        function Yc(n, r, i, a, o, u) {
          return Tt(n) && Tt(r) && (u.set(r, n), xr(n, r, e, Yc, u), u.delete(r)), n;
        }
        function hl(n) {
          return De(n) ? e : n;
        }
        function Gc(n, r, i, a, o, u) {
          var g = i & w, v = n.length, y = r.length;
          if (v != y && !(g && y > v))
            return !1;
          var L = u.get(n), I = u.get(r);
          if (L && I)
            return L == r && I == n;
          var O = -1, U = !0, k = i & b ? new Yn() : e;
          for (u.set(n, r), u.set(r, n); ++O < v; ) {
            var G = n[O], rt = r[O];
            if (a)
              var Z = g ? a(rt, G, O, r, n, u) : a(G, rt, O, n, r, u);
            if (Z !== e) {
              if (Z)
                continue;
              U = !1;
              break;
            }
            if (k) {
              if (!ci(r, function(at, ft) {
                if (!we(k, ft) && (G === at || o(G, at, i, a, u)))
                  return k.push(ft);
              })) {
                U = !1;
                break;
              }
            } else if (!(G === rt || o(G, rt, i, a, u))) {
              U = !1;
              break;
            }
          }
          return u.delete(n), u.delete(r), U;
        }
        function ol(n, r, i, a, o, u, g) {
          switch (i) {
            case Jn:
              if (n.byteLength != r.byteLength || n.byteOffset != r.byteOffset)
                return !1;
              n = n.buffer, r = r.buffer;
            case ye:
              return !(n.byteLength != r.byteLength || !u(new sr(n), new sr(r)));
            case ge:
            case me:
            case xe:
              return ln(+n, +r);
            case Ye:
              return n.name == r.name && n.message == r.message;
            case ve:
            case _e:
              return n == r + "";
            case an:
              var v = ui;
            case hn:
              var y = a & w;
              if (v || (v = je), n.size != r.size && !y)
                return !1;
              var L = g.get(n);
              if (L)
                return L == r;
              a |= b, g.set(n, r);
              var I = Gc(v(n), v(r), a, o, u, g);
              return g.delete(n), I;
            case Ze:
              if (be)
                return be.call(n) == be.call(r);
          }
          return !1;
        }
        function fl(n, r, i, a, o, u) {
          var g = i & w, v = qi(n), y = v.length, L = qi(r), I = L.length;
          if (y != I && !g)
            return !1;
          for (var O = y; O--; ) {
            var U = v[O];
            if (!(g ? U in r : xt.call(r, U)))
              return !1;
          }
          var k = u.get(n), G = u.get(r);
          if (k && G)
            return k == r && G == n;
          var rt = !0;
          u.set(n, r), u.set(r, n);
          for (var Z = g; ++O < y; ) {
            U = v[O];
            var at = n[U], ft = r[U];
            if (a)
              var Xt = g ? a(ft, at, U, r, n, u) : a(at, ft, U, n, r, u);
            if (!(Xt === e ? at === ft || o(at, ft, i, a, u) : Xt)) {
              rt = !1;
              break;
            }
            Z || (Z = U == "constructor");
          }
          if (rt && !Z) {
            var qt = n.constructor, $t = r.constructor;
            qt != $t && "constructor" in n && "constructor" in r && !(typeof qt == "function" && qt instanceof qt && typeof $t == "function" && $t instanceof $t) && (rt = !1);
          }
          return u.delete(n), u.delete(r), rt;
        }
        function An(n) {
          return Yi(Jc(n, e, aa), n + "");
        }
        function qi(n) {
          return uc(n, Lt, Ni);
        }
        function Fi(n) {
          return uc(n, Nt, Zc);
        }
        var Bi = lr ? function(n) {
          return lr.get(n);
        } : is;
        function Er(n) {
          for (var r = n.name + "", i = ce[r], a = xt.call(ce, r) ? i.length : 0; a--; ) {
            var o = i[a], u = o.func;
            if (u == null || u == n)
              return o.name;
          }
          return r;
        }
        function fe(n) {
          var r = xt.call(l, "placeholder") ? l : n;
          return r.placeholder;
        }
        function Y() {
          var n = l.iteratee || es;
          return n = n === es ? gc : n, arguments.length ? n(arguments[0], arguments[1]) : n;
        }
        function Sr(n, r) {
          var i = n.__data__;
          return vl(r) ? i[typeof r == "string" ? "string" : "hash"] : i.map;
        }
        function Wi(n) {
          for (var r = Lt(n), i = r.length; i--; ) {
            var a = r[i], o = n[a];
            r[i] = [a, o, Vc(o)];
          }
          return r;
        }
        function Xn(n, r) {
          var i = Mo(n, r);
          return dc(i) ? i : e;
        }
        function ll(n) {
          var r = xt.call(n, Hn), i = n[Hn];
          try {
            n[Hn] = e;
            var a = !0;
          } catch {
          }
          var o = rr.call(n);
          return a && (r ? n[Hn] = i : delete n[Hn]), o;
        }
        var Ni = di ? function(n) {
          return n == null ? [] : (n = _t(n), Rn(di(n), function(r) {
            return js.call(n, r);
          }));
        } : ss, Zc = di ? function(n) {
          for (var r = []; n; )
            Ln(r, Ni(n)), n = cr(n);
          return r;
        } : ss, zt = Ut;
        (gi && zt(new gi(new ArrayBuffer(1))) != Jn || Ae && zt(new Ae()) != an || mi && zt(mi.resolve()) != os || se && zt(new se()) != hn || Ee && zt(new Ee()) != Me) && (zt = function(n) {
          var r = Ut(n), i = r == _n ? n.constructor : e, a = i ? $n(i) : "";
          if (a)
            switch (a) {
              case Go:
                return Jn;
              case Zo:
                return an;
              case Xo:
                return os;
              case $o:
                return hn;
              case Vo:
                return Me;
            }
          return r;
        });
        function ul(n, r, i) {
          for (var a = -1, o = i.length; ++a < o; ) {
            var u = i[a], g = u.size;
            switch (u.type) {
              case "drop":
                n += g;
                break;
              case "dropRight":
                r -= g;
                break;
              case "take":
                r = Pt(r, n + g);
                break;
              case "takeRight":
                n = Ct(n, r - g);
                break;
            }
          }
          return { start: n, end: r };
        }
        function pl(n) {
          var r = n.match(xh);
          return r ? r[1].split(vh) : [];
        }
        function Xc(n, r, i) {
          r = Un(r, n);
          for (var a = -1, o = r.length, u = !1; ++a < o; ) {
            var g = mn(r[a]);
            if (!(u = n != null && i(n, g)))
              break;
            n = n[g];
          }
          return u || ++a != o ? u : (o = n == null ? 0 : n.length, !!o && Pr(o) && En(g, o) && (j(n) || Vn(n)));
        }
        function dl(n) {
          var r = n.length, i = new n.constructor(r);
          return r && typeof n[0] == "string" && xt.call(n, "index") && (i.index = n.index, i.input = n.input), i;
        }
        function $c(n) {
          return typeof n.constructor == "function" && !ze(n) ? ae(cr(n)) : {};
        }
        function gl(n, r, i) {
          var a = n.constructor;
          switch (r) {
            case ye:
              return zi(n);
            case ge:
            case me:
              return new a(+n);
            case Jn:
              return Jf(n, i);
            case Wr:
            case Nr:
            case kr:
            case Hr:
            case Kr:
            case Yr:
            case Gr:
            case Zr:
            case Xr:
              return Ic(n, i);
            case an:
              return new a();
            case xe:
            case _e:
              return new a(n);
            case ve:
              return jf(n);
            case hn:
              return new a();
            case Ze:
              return tl(n);
          }
        }
        function ml(n, r) {
          var i = r.length;
          if (!i)
            return n;
          var a = i - 1;
          return r[a] = (i > 1 ? "& " : "") + r[a], r = r.join(i > 2 ? ", " : " "), n.replace(mh, `{
/* [wrapped with ` + r + `] */
`);
        }
        function xl(n) {
          return j(n) || Vn(n) || !!(tc && n && n[tc]);
        }
        function En(n, r) {
          var i = typeof n;
          return r = r ?? Ft, !!r && (i == "number" || i != "symbol" && bh.test(n)) && n > -1 && n % 1 == 0 && n < r;
        }
        function Dt(n, r, i) {
          if (!Tt(i))
            return !1;
          var a = typeof r;
          return (a == "number" ? Wt(i) && En(r, i.length) : a == "string" && r in i) ? ln(i[r], n) : !1;
        }
        function ki(n, r) {
          if (j(n))
            return !1;
          var i = typeof n;
          return i == "number" || i == "symbol" || i == "boolean" || n == null || Zt(n) ? !0 : uh.test(n) || !lh.test(n) || r != null && n in _t(r);
        }
        function vl(n) {
          var r = typeof n;
          return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? n !== "__proto__" : n === null;
        }
        function Hi(n) {
          var r = Er(n), i = l[r];
          if (typeof i != "function" || !(r in ot.prototype))
            return !1;
          if (n === i)
            return !0;
          var a = Bi(i);
          return !!a && n === a[0];
        }
        function _l(n) {
          return !!Vs && Vs in n;
        }
        var Ml = nr ? Sn : cs;
        function ze(n) {
          var r = n && n.constructor, i = typeof r == "function" && r.prototype || ie;
          return n === i;
        }
        function Vc(n) {
          return n === n && !Tt(n);
        }
        function Qc(n, r) {
          return function(i) {
            return i == null ? !1 : i[n] === r && (r !== e || n in _t(i));
          };
        }
        function yl(n) {
          var r = Ir(n, function(a) {
            return i.size === m && i.clear(), a;
          }), i = r.cache;
          return r;
        }
        function wl(n, r) {
          var i = n[1], a = r[1], o = i | a, u = o < (S | P | D), g = a == D && i == N || a == D && i == it && n[7].length <= r[8] || a == (D | it) && r[7].length <= r[8] && i == N;
          if (!(u || g))
            return n;
          a & S && (n[2] = r[2], o |= i & S ? 0 : q);
          var v = r[3];
          if (v) {
            var y = n[3];
            n[3] = y ? Pc(y, v, r[4]) : v, n[4] = y ? In(n[3], x) : r[4];
          }
          return v = r[5], v && (y = n[5], n[5] = y ? zc(y, v, r[6]) : v, n[6] = y ? In(n[5], x) : r[6]), v = r[7], v && (n[7] = v), a & D && (n[8] = n[8] == null ? r[8] : Pt(n[8], r[8])), n[9] == null && (n[9] = r[9]), n[0] = r[0], n[1] = o, n;
        }
        function Tl(n) {
          var r = [];
          if (n != null)
            for (var i in _t(n))
              r.push(i);
          return r;
        }
        function Al(n) {
          return rr.call(n);
        }
        function Jc(n, r, i) {
          return r = Ct(r === e ? n.length - 1 : r, 0), function() {
            for (var a = arguments, o = -1, u = Ct(a.length - r, 0), g = A(u); ++o < u; )
              g[o] = a[r + o];
            o = -1;
            for (var v = A(r + 1); ++o < r; )
              v[o] = a[o];
            return v[r] = i(g), Kt(n, this, v);
          };
        }
        function jc(n, r) {
          return r.length < 2 ? n : Zn(n, rn(r, 0, -1));
        }
        function El(n, r) {
          for (var i = n.length, a = Pt(r.length, i), o = Bt(n); a--; ) {
            var u = r[a];
            n[a] = En(u, i) ? o[u] : e;
          }
          return n;
        }
        function Ki(n, r) {
          if (!(r === "constructor" && typeof n[r] == "function") && r != "__proto__")
            return n[r];
        }
        var ta = ea(Tc), Ue = Bo || function(n, r) {
          return It.setTimeout(n, r);
        }, Yi = ea(Xf);
        function na(n, r, i) {
          var a = r + "";
          return Yi(n, ml(a, Sl(pl(a), i)));
        }
        function ea(n) {
          var r = 0, i = 0;
          return function() {
            var a = Ho(), o = mt - (a - i);
            if (i = a, o > 0) {
              if (++r >= vt)
                return arguments[0];
            } else
              r = 0;
            return n.apply(e, arguments);
          };
        }
        function br(n, r) {
          var i = -1, a = n.length, o = a - 1;
          for (r = r === e ? a : r; ++i < r; ) {
            var u = bi(i, o), g = n[u];
            n[u] = n[i], n[i] = g;
          }
          return n.length = r, n;
        }
        var ra = yl(function(n) {
          var r = [];
          return n.charCodeAt(0) === 46 && r.push(""), n.replace(ph, function(i, a, o, u) {
            r.push(o ? u.replace(yh, "$1") : a || i);
          }), r;
        });
        function mn(n) {
          if (typeof n == "string" || Zt(n))
            return n;
          var r = n + "";
          return r == "0" && 1 / n == -Ht ? "-0" : r;
        }
        function $n(n) {
          if (n != null) {
            try {
              return er.call(n);
            } catch {
            }
            try {
              return n + "";
            } catch {
            }
          }
          return "";
        }
        function Sl(n, r) {
          return jt(Qa, function(i) {
            var a = "_." + i[0];
            r & i[1] && !Qe(n, a) && n.push(a);
          }), n.sort();
        }
        function ia(n) {
          if (n instanceof ot)
            return n.clone();
          var r = new nn(n.__wrapped__, n.__chain__);
          return r.__actions__ = Bt(n.__actions__), r.__index__ = n.__index__, r.__values__ = n.__values__, r;
        }
        function bl(n, r, i) {
          (i ? Dt(n, r, i) : r === e) ? r = 1 : r = Ct(tt(r), 0);
          var a = n == null ? 0 : n.length;
          if (!a || r < 1)
            return [];
          for (var o = 0, u = 0, g = A(or(a / r)); o < a; )
            g[u++] = rn(n, o, o += r);
          return g;
        }
        function Cl(n) {
          for (var r = -1, i = n == null ? 0 : n.length, a = 0, o = []; ++r < i; ) {
            var u = n[r];
            u && (o[a++] = u);
          }
          return o;
        }
        function Rl() {
          var n = arguments.length;
          if (!n)
            return [];
          for (var r = A(n - 1), i = arguments[0], a = n; a--; )
            r[a - 1] = arguments[a];
          return Ln(j(i) ? Bt(i) : [i], Ot(r, 1));
        }
        var Ll = st(function(n, r) {
          return Et(n) ? Re(n, Ot(r, 1, Et, !0)) : [];
        }), Il = st(function(n, r) {
          var i = sn(r);
          return Et(i) && (i = e), Et(n) ? Re(n, Ot(r, 1, Et, !0), Y(i, 2)) : [];
        }), Ol = st(function(n, r) {
          var i = sn(r);
          return Et(i) && (i = e), Et(n) ? Re(n, Ot(r, 1, Et, !0), e, i) : [];
        });
        function Pl(n, r, i) {
          var a = n == null ? 0 : n.length;
          return a ? (r = i || r === e ? 1 : tt(r), rn(n, r < 0 ? 0 : r, a)) : [];
        }
        function zl(n, r, i) {
          var a = n == null ? 0 : n.length;
          return a ? (r = i || r === e ? 1 : tt(r), r = a - r, rn(n, 0, r < 0 ? 0 : r)) : [];
        }
        function Ul(n, r) {
          return n && n.length ? _r(n, Y(r, 3), !0, !0) : [];
        }
        function Dl(n, r) {
          return n && n.length ? _r(n, Y(r, 3), !0) : [];
        }
        function ql(n, r, i, a) {
          var o = n == null ? 0 : n.length;
          return o ? (i && typeof i != "number" && Dt(n, r, i) && (i = 0, a = o), Rf(n, r, i, a)) : [];
        }
        function sa(n, r, i) {
          var a = n == null ? 0 : n.length;
          if (!a)
            return -1;
          var o = i == null ? 0 : tt(i);
          return o < 0 && (o = Ct(a + o, 0)), Je(n, Y(r, 3), o);
        }
        function ca(n, r, i) {
          var a = n == null ? 0 : n.length;
          if (!a)
            return -1;
          var o = a - 1;
          return i !== e && (o = tt(i), o = i < 0 ? Ct(a + o, 0) : Pt(o, a - 1)), Je(n, Y(r, 3), o, !0);
        }
        function aa(n) {
          var r = n == null ? 0 : n.length;
          return r ? Ot(n, 1) : [];
        }
        function Fl(n) {
          var r = n == null ? 0 : n.length;
          return r ? Ot(n, Ht) : [];
        }
        function Bl(n, r) {
          var i = n == null ? 0 : n.length;
          return i ? (r = r === e ? 1 : tt(r), Ot(n, r)) : [];
        }
        function Wl(n) {
          for (var r = -1, i = n == null ? 0 : n.length, a = {}; ++r < i; ) {
            var o = n[r];
            a[o[0]] = o[1];
          }
          return a;
        }
        function ha(n) {
          return n && n.length ? n[0] : e;
        }
        function Nl(n, r, i) {
          var a = n == null ? 0 : n.length;
          if (!a)
            return -1;
          var o = i == null ? 0 : tt(i);
          return o < 0 && (o = Ct(a + o, 0)), te(n, r, o);
        }
        function kl(n) {
          var r = n == null ? 0 : n.length;
          return r ? rn(n, 0, -1) : [];
        }
        var Hl = st(function(n) {
          var r = wt(n, Oi);
          return r.length && r[0] === n[0] ? wi(r) : [];
        }), Kl = st(function(n) {
          var r = sn(n), i = wt(n, Oi);
          return r === sn(i) ? r = e : i.pop(), i.length && i[0] === n[0] ? wi(i, Y(r, 2)) : [];
        }), Yl = st(function(n) {
          var r = sn(n), i = wt(n, Oi);
          return r = typeof r == "function" ? r : e, r && i.pop(), i.length && i[0] === n[0] ? wi(i, e, r) : [];
        });
        function Gl(n, r) {
          return n == null ? "" : No.call(n, r);
        }
        function sn(n) {
          var r = n == null ? 0 : n.length;
          return r ? n[r - 1] : e;
        }
        function Zl(n, r, i) {
          var a = n == null ? 0 : n.length;
          if (!a)
            return -1;
          var o = a;
          return i !== e && (o = tt(i), o = o < 0 ? Ct(a + o, 0) : Pt(o, a - 1)), r === r ? Eo(n, r, o) : Je(n, ks, o, !0);
        }
        function Xl(n, r) {
          return n && n.length ? _c(n, tt(r)) : e;
        }
        var $l = st(oa);
        function oa(n, r) {
          return n && n.length && r && r.length ? Si(n, r) : n;
        }
        function Vl(n, r, i) {
          return n && n.length && r && r.length ? Si(n, r, Y(i, 2)) : n;
        }
        function Ql(n, r, i) {
          return n && n.length && r && r.length ? Si(n, r, e, i) : n;
        }
        var Jl = An(function(n, r) {
          var i = n == null ? 0 : n.length, a = vi(n, r);
          return wc(n, wt(r, function(o) {
            return En(o, i) ? +o : o;
          }).sort(Oc)), a;
        });
        function jl(n, r) {
          var i = [];
          if (!(n && n.length))
            return i;
          var a = -1, o = [], u = n.length;
          for (r = Y(r, 3); ++a < u; ) {
            var g = n[a];
            r(g, a, n) && (i.push(g), o.push(a));
          }
          return wc(n, o), i;
        }
        function Gi(n) {
          return n == null ? n : Yo.call(n);
        }
        function t1(n, r, i) {
          var a = n == null ? 0 : n.length;
          return a ? (i && typeof i != "number" && Dt(n, r, i) ? (r = 0, i = a) : (r = r == null ? 0 : tt(r), i = i === e ? a : tt(i)), rn(n, r, i)) : [];
        }
        function n1(n, r) {
          return vr(n, r);
        }
        function e1(n, r, i) {
          return Ri(n, r, Y(i, 2));
        }
        function r1(n, r) {
          var i = n == null ? 0 : n.length;
          if (i) {
            var a = vr(n, r);
            if (a < i && ln(n[a], r))
              return a;
          }
          return -1;
        }
        function i1(n, r) {
          return vr(n, r, !0);
        }
        function s1(n, r, i) {
          return Ri(n, r, Y(i, 2), !0);
        }
        function c1(n, r) {
          var i = n == null ? 0 : n.length;
          if (i) {
            var a = vr(n, r, !0) - 1;
            if (ln(n[a], r))
              return a;
          }
          return -1;
        }
        function a1(n) {
          return n && n.length ? Ac(n) : [];
        }
        function h1(n, r) {
          return n && n.length ? Ac(n, Y(r, 2)) : [];
        }
        function o1(n) {
          var r = n == null ? 0 : n.length;
          return r ? rn(n, 1, r) : [];
        }
        function f1(n, r, i) {
          return n && n.length ? (r = i || r === e ? 1 : tt(r), rn(n, 0, r < 0 ? 0 : r)) : [];
        }
        function l1(n, r, i) {
          var a = n == null ? 0 : n.length;
          return a ? (r = i || r === e ? 1 : tt(r), r = a - r, rn(n, r < 0 ? 0 : r, a)) : [];
        }
        function u1(n, r) {
          return n && n.length ? _r(n, Y(r, 3), !1, !0) : [];
        }
        function p1(n, r) {
          return n && n.length ? _r(n, Y(r, 3)) : [];
        }
        var d1 = st(function(n) {
          return zn(Ot(n, 1, Et, !0));
        }), g1 = st(function(n) {
          var r = sn(n);
          return Et(r) && (r = e), zn(Ot(n, 1, Et, !0), Y(r, 2));
        }), m1 = st(function(n) {
          var r = sn(n);
          return r = typeof r == "function" ? r : e, zn(Ot(n, 1, Et, !0), e, r);
        });
        function x1(n) {
          return n && n.length ? zn(n) : [];
        }
        function v1(n, r) {
          return n && n.length ? zn(n, Y(r, 2)) : [];
        }
        function _1(n, r) {
          return r = typeof r == "function" ? r : e, n && n.length ? zn(n, e, r) : [];
        }
        function Zi(n) {
          if (!(n && n.length))
            return [];
          var r = 0;
          return n = Rn(n, function(i) {
            if (Et(i))
              return r = Ct(i.length, r), !0;
          }), fi(r, function(i) {
            return wt(n, ai(i));
          });
        }
        function fa(n, r) {
          if (!(n && n.length))
            return [];
          var i = Zi(n);
          return r == null ? i : wt(i, function(a) {
            return Kt(r, e, a);
          });
        }
        var M1 = st(function(n, r) {
          return Et(n) ? Re(n, r) : [];
        }), y1 = st(function(n) {
          return Ii(Rn(n, Et));
        }), w1 = st(function(n) {
          var r = sn(n);
          return Et(r) && (r = e), Ii(Rn(n, Et), Y(r, 2));
        }), T1 = st(function(n) {
          var r = sn(n);
          return r = typeof r == "function" ? r : e, Ii(Rn(n, Et), e, r);
        }), A1 = st(Zi);
        function E1(n, r) {
          return Cc(n || [], r || [], Ce);
        }
        function S1(n, r) {
          return Cc(n || [], r || [], Oe);
        }
        var b1 = st(function(n) {
          var r = n.length, i = r > 1 ? n[r - 1] : e;
          return i = typeof i == "function" ? (n.pop(), i) : e, fa(n, i);
        });
        function la(n) {
          var r = l(n);
          return r.__chain__ = !0, r;
        }
        function C1(n, r) {
          return r(n), n;
        }
        function Cr(n, r) {
          return r(n);
        }
        var R1 = An(function(n) {
          var r = n.length, i = r ? n[0] : 0, a = this.__wrapped__, o = function(u) {
            return vi(u, n);
          };
          return r > 1 || this.__actions__.length || !(a instanceof ot) || !En(i) ? this.thru(o) : (a = a.slice(i, +i + (r ? 1 : 0)), a.__actions__.push({
            func: Cr,
            args: [o],
            thisArg: e
          }), new nn(a, this.__chain__).thru(function(u) {
            return r && !u.length && u.push(e), u;
          }));
        });
        function L1() {
          return la(this);
        }
        function I1() {
          return new nn(this.value(), this.__chain__);
        }
        function O1() {
          this.__values__ === e && (this.__values__ = Ea(this.value()));
          var n = this.__index__ >= this.__values__.length, r = n ? e : this.__values__[this.__index__++];
          return { done: n, value: r };
        }
        function P1() {
          return this;
        }
        function z1(n) {
          for (var r, i = this; i instanceof pr; ) {
            var a = ia(i);
            a.__index__ = 0, a.__values__ = e, r ? o.__wrapped__ = a : r = a;
            var o = a;
            i = i.__wrapped__;
          }
          return o.__wrapped__ = n, r;
        }
        function U1() {
          var n = this.__wrapped__;
          if (n instanceof ot) {
            var r = n;
            return this.__actions__.length && (r = new ot(this)), r = r.reverse(), r.__actions__.push({
              func: Cr,
              args: [Gi],
              thisArg: e
            }), new nn(r, this.__chain__);
          }
          return this.thru(Gi);
        }
        function D1() {
          return bc(this.__wrapped__, this.__actions__);
        }
        var q1 = Mr(function(n, r, i) {
          xt.call(n, i) ? ++n[i] : wn(n, i, 1);
        });
        function F1(n, r, i) {
          var a = j(n) ? Ws : Cf;
          return i && Dt(n, r, i) && (r = e), a(n, Y(r, 3));
        }
        function B1(n, r) {
          var i = j(n) ? Rn : fc;
          return i(n, Y(r, 3));
        }
        var W1 = Fc(sa), N1 = Fc(ca);
        function k1(n, r) {
          return Ot(Rr(n, r), 1);
        }
        function H1(n, r) {
          return Ot(Rr(n, r), Ht);
        }
        function K1(n, r, i) {
          return i = i === e ? 1 : tt(i), Ot(Rr(n, r), i);
        }
        function ua(n, r) {
          var i = j(n) ? jt : Pn;
          return i(n, Y(r, 3));
        }
        function pa(n, r) {
          var i = j(n) ? ao : oc;
          return i(n, Y(r, 3));
        }
        var Y1 = Mr(function(n, r, i) {
          xt.call(n, i) ? n[i].push(r) : wn(n, i, [r]);
        });
        function G1(n, r, i, a) {
          n = Wt(n) ? n : ue(n), i = i && !a ? tt(i) : 0;
          var o = n.length;
          return i < 0 && (i = Ct(o + i, 0)), zr(n) ? i <= o && n.indexOf(r, i) > -1 : !!o && te(n, r, i) > -1;
        }
        var Z1 = st(function(n, r, i) {
          var a = -1, o = typeof r == "function", u = Wt(n) ? A(n.length) : [];
          return Pn(n, function(g) {
            u[++a] = o ? Kt(r, g, i) : Le(g, r, i);
          }), u;
        }), X1 = Mr(function(n, r, i) {
          wn(n, i, r);
        });
        function Rr(n, r) {
          var i = j(n) ? wt : mc;
          return i(n, Y(r, 3));
        }
        function $1(n, r, i, a) {
          return n == null ? [] : (j(r) || (r = r == null ? [] : [r]), i = a ? e : i, j(i) || (i = i == null ? [] : [i]), Mc(n, r, i));
        }
        var V1 = Mr(function(n, r, i) {
          n[i ? 0 : 1].push(r);
        }, function() {
          return [[], []];
        });
        function Q1(n, r, i) {
          var a = j(n) ? si : Ks, o = arguments.length < 3;
          return a(n, Y(r, 4), i, o, Pn);
        }
        function J1(n, r, i) {
          var a = j(n) ? ho : Ks, o = arguments.length < 3;
          return a(n, Y(r, 4), i, o, oc);
        }
        function j1(n, r) {
          var i = j(n) ? Rn : fc;
          return i(n, Or(Y(r, 3)));
        }
        function tu(n) {
          var r = j(n) ? sc : Gf;
          return r(n);
        }
        function nu(n, r, i) {
          (i ? Dt(n, r, i) : r === e) ? r = 1 : r = tt(r);
          var a = j(n) ? Tf : Zf;
          return a(n, r);
        }
        function eu(n) {
          var r = j(n) ? Af : $f;
          return r(n);
        }
        function ru(n) {
          if (n == null)
            return 0;
          if (Wt(n))
            return zr(n) ? ee(n) : n.length;
          var r = zt(n);
          return r == an || r == hn ? n.size : Ai(n).length;
        }
        function iu(n, r, i) {
          var a = j(n) ? ci : Vf;
          return i && Dt(n, r, i) && (r = e), a(n, Y(r, 3));
        }
        var su = st(function(n, r) {
          if (n == null)
            return [];
          var i = r.length;
          return i > 1 && Dt(n, r[0], r[1]) ? r = [] : i > 2 && Dt(r[0], r[1], r[2]) && (r = [r[0]]), Mc(n, Ot(r, 1), []);
        }), Lr = Fo || function() {
          return It.Date.now();
        };
        function cu(n, r) {
          if (typeof r != "function")
            throw new tn(f);
          return n = tt(n), function() {
            if (--n < 1)
              return r.apply(this, arguments);
          };
        }
        function da(n, r, i) {
          return r = i ? e : r, r = n && r == null ? n.length : r, Tn(n, D, e, e, e, e, r);
        }
        function ga(n, r) {
          var i;
          if (typeof r != "function")
            throw new tn(f);
          return n = tt(n), function() {
            return --n > 0 && (i = r.apply(this, arguments)), n <= 1 && (r = e), i;
          };
        }
        var Xi = st(function(n, r, i) {
          var a = S;
          if (i.length) {
            var o = In(i, fe(Xi));
            a |= z;
          }
          return Tn(n, a, r, i, o);
        }), ma = st(function(n, r, i) {
          var a = S | P;
          if (i.length) {
            var o = In(i, fe(ma));
            a |= z;
          }
          return Tn(r, a, n, i, o);
        });
        function xa(n, r, i) {
          r = i ? e : r;
          var a = Tn(n, N, e, e, e, e, e, r);
          return a.placeholder = xa.placeholder, a;
        }
        function va(n, r, i) {
          r = i ? e : r;
          var a = Tn(n, F, e, e, e, e, e, r);
          return a.placeholder = va.placeholder, a;
        }
        function _a(n, r, i) {
          var a, o, u, g, v, y, L = 0, I = !1, O = !1, U = !0;
          if (typeof n != "function")
            throw new tn(f);
          r = cn(r) || 0, Tt(i) && (I = !!i.leading, O = "maxWait" in i, u = O ? Ct(cn(i.maxWait) || 0, r) : u, U = "trailing" in i ? !!i.trailing : U);
          function k(St) {
            var un = a, Cn = o;
            return a = o = e, L = St, g = n.apply(Cn, un), g;
          }
          function G(St) {
            return L = St, v = Ue(at, r), I ? k(St) : g;
          }
          function rt(St) {
            var un = St - y, Cn = St - L, Fa = r - un;
            return O ? Pt(Fa, u - Cn) : Fa;
          }
          function Z(St) {
            var un = St - y, Cn = St - L;
            return y === e || un >= r || un < 0 || O && Cn >= u;
          }
          function at() {
            var St = Lr();
            if (Z(St))
              return ft(St);
            v = Ue(at, rt(St));
          }
          function ft(St) {
            return v = e, U && a ? k(St) : (a = o = e, g);
          }
          function Xt() {
            v !== e && Rc(v), L = 0, a = y = o = v = e;
          }
          function qt() {
            return v === e ? g : ft(Lr());
          }
          function $t() {
            var St = Lr(), un = Z(St);
            if (a = arguments, o = this, y = St, un) {
              if (v === e)
                return G(y);
              if (O)
                return Rc(v), v = Ue(at, r), k(y);
            }
            return v === e && (v = Ue(at, r)), g;
          }
          return $t.cancel = Xt, $t.flush = qt, $t;
        }
        var au = st(function(n, r) {
          return hc(n, 1, r);
        }), hu = st(function(n, r, i) {
          return hc(n, cn(r) || 0, i);
        });
        function ou(n) {
          return Tn(n, et);
        }
        function Ir(n, r) {
          if (typeof n != "function" || r != null && typeof r != "function")
            throw new tn(f);
          var i = function() {
            var a = arguments, o = r ? r.apply(this, a) : a[0], u = i.cache;
            if (u.has(o))
              return u.get(o);
            var g = n.apply(this, a);
            return i.cache = u.set(o, g) || u, g;
          };
          return i.cache = new (Ir.Cache || yn)(), i;
        }
        Ir.Cache = yn;
        function Or(n) {
          if (typeof n != "function")
            throw new tn(f);
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
        function fu(n) {
          return ga(2, n);
        }
        var lu = Qf(function(n, r) {
          r = r.length == 1 && j(r[0]) ? wt(r[0], Yt(Y())) : wt(Ot(r, 1), Yt(Y()));
          var i = r.length;
          return st(function(a) {
            for (var o = -1, u = Pt(a.length, i); ++o < u; )
              a[o] = r[o].call(this, a[o]);
            return Kt(n, this, a);
          });
        }), $i = st(function(n, r) {
          var i = In(r, fe($i));
          return Tn(n, z, e, r, i);
        }), Ma = st(function(n, r) {
          var i = In(r, fe(Ma));
          return Tn(n, B, e, r, i);
        }), uu = An(function(n, r) {
          return Tn(n, it, e, e, e, r);
        });
        function pu(n, r) {
          if (typeof n != "function")
            throw new tn(f);
          return r = r === e ? r : tt(r), st(n, r);
        }
        function du(n, r) {
          if (typeof n != "function")
            throw new tn(f);
          return r = r == null ? 0 : Ct(tt(r), 0), st(function(i) {
            var a = i[r], o = Dn(i, 0, r);
            return a && Ln(o, a), Kt(n, this, o);
          });
        }
        function gu(n, r, i) {
          var a = !0, o = !0;
          if (typeof n != "function")
            throw new tn(f);
          return Tt(i) && (a = "leading" in i ? !!i.leading : a, o = "trailing" in i ? !!i.trailing : o), _a(n, r, {
            leading: a,
            maxWait: r,
            trailing: o
          });
        }
        function mu(n) {
          return da(n, 1);
        }
        function xu(n, r) {
          return $i(Pi(r), n);
        }
        function vu() {
          if (!arguments.length)
            return [];
          var n = arguments[0];
          return j(n) ? n : [n];
        }
        function _u(n) {
          return en(n, T);
        }
        function Mu(n, r) {
          return r = typeof r == "function" ? r : e, en(n, T, r);
        }
        function yu(n) {
          return en(n, M | T);
        }
        function wu(n, r) {
          return r = typeof r == "function" ? r : e, en(n, M | T, r);
        }
        function Tu(n, r) {
          return r == null || ac(n, r, Lt(r));
        }
        function ln(n, r) {
          return n === r || n !== n && r !== r;
        }
        var Au = Ar(yi), Eu = Ar(function(n, r) {
          return n >= r;
        }), Vn = pc(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? pc : function(n) {
          return At(n) && xt.call(n, "callee") && !js.call(n, "callee");
        }, j = A.isArray, Su = zs ? Yt(zs) : zf;
        function Wt(n) {
          return n != null && Pr(n.length) && !Sn(n);
        }
        function Et(n) {
          return At(n) && Wt(n);
        }
        function bu(n) {
          return n === !0 || n === !1 || At(n) && Ut(n) == ge;
        }
        var qn = Wo || cs, Cu = Us ? Yt(Us) : Uf;
        function Ru(n) {
          return At(n) && n.nodeType === 1 && !De(n);
        }
        function Lu(n) {
          if (n == null)
            return !0;
          if (Wt(n) && (j(n) || typeof n == "string" || typeof n.splice == "function" || qn(n) || le(n) || Vn(n)))
            return !n.length;
          var r = zt(n);
          if (r == an || r == hn)
            return !n.size;
          if (ze(n))
            return !Ai(n).length;
          for (var i in n)
            if (xt.call(n, i))
              return !1;
          return !0;
        }
        function Iu(n, r) {
          return Ie(n, r);
        }
        function Ou(n, r, i) {
          i = typeof i == "function" ? i : e;
          var a = i ? i(n, r) : e;
          return a === e ? Ie(n, r, e, i) : !!a;
        }
        function Vi(n) {
          if (!At(n))
            return !1;
          var r = Ut(n);
          return r == Ye || r == ja || typeof n.message == "string" && typeof n.name == "string" && !De(n);
        }
        function Pu(n) {
          return typeof n == "number" && nc(n);
        }
        function Sn(n) {
          if (!Tt(n))
            return !1;
          var r = Ut(n);
          return r == Ge || r == hs || r == Ja || r == nh;
        }
        function ya(n) {
          return typeof n == "number" && n == tt(n);
        }
        function Pr(n) {
          return typeof n == "number" && n > -1 && n % 1 == 0 && n <= Ft;
        }
        function Tt(n) {
          var r = typeof n;
          return n != null && (r == "object" || r == "function");
        }
        function At(n) {
          return n != null && typeof n == "object";
        }
        var wa = Ds ? Yt(Ds) : qf;
        function zu(n, r) {
          return n === r || Ti(n, r, Wi(r));
        }
        function Uu(n, r, i) {
          return i = typeof i == "function" ? i : e, Ti(n, r, Wi(r), i);
        }
        function Du(n) {
          return Ta(n) && n != +n;
        }
        function qu(n) {
          if (Ml(n))
            throw new Q(h);
          return dc(n);
        }
        function Fu(n) {
          return n === null;
        }
        function Bu(n) {
          return n == null;
        }
        function Ta(n) {
          return typeof n == "number" || At(n) && Ut(n) == xe;
        }
        function De(n) {
          if (!At(n) || Ut(n) != _n)
            return !1;
          var r = cr(n);
          if (r === null)
            return !0;
          var i = xt.call(r, "constructor") && r.constructor;
          return typeof i == "function" && i instanceof i && er.call(i) == zo;
        }
        var Qi = qs ? Yt(qs) : Ff;
        function Wu(n) {
          return ya(n) && n >= -Ft && n <= Ft;
        }
        var Aa = Fs ? Yt(Fs) : Bf;
        function zr(n) {
          return typeof n == "string" || !j(n) && At(n) && Ut(n) == _e;
        }
        function Zt(n) {
          return typeof n == "symbol" || At(n) && Ut(n) == Ze;
        }
        var le = Bs ? Yt(Bs) : Wf;
        function Nu(n) {
          return n === e;
        }
        function ku(n) {
          return At(n) && zt(n) == Me;
        }
        function Hu(n) {
          return At(n) && Ut(n) == rh;
        }
        var Ku = Ar(Ei), Yu = Ar(function(n, r) {
          return n <= r;
        });
        function Ea(n) {
          if (!n)
            return [];
          if (Wt(n))
            return zr(n) ? on(n) : Bt(n);
          if (Te && n[Te])
            return wo(n[Te]());
          var r = zt(n), i = r == an ? ui : r == hn ? je : ue;
          return i(n);
        }
        function bn(n) {
          if (!n)
            return n === 0 ? n : 0;
          if (n = cn(n), n === Ht || n === -Ht) {
            var r = n < 0 ? -1 : 1;
            return r * He;
          }
          return n === n ? n : 0;
        }
        function tt(n) {
          var r = bn(n), i = r % 1;
          return r === r ? i ? r - i : r : 0;
        }
        function Sa(n) {
          return n ? Gn(tt(n), 0, pn) : 0;
        }
        function cn(n) {
          if (typeof n == "number")
            return n;
          if (Zt(n))
            return Nn;
          if (Tt(n)) {
            var r = typeof n.valueOf == "function" ? n.valueOf() : n;
            n = Tt(r) ? r + "" : r;
          }
          if (typeof n != "string")
            return n === 0 ? n : +n;
          n = Ys(n);
          var i = Ah.test(n);
          return i || Sh.test(n) ? io(n.slice(2), i ? 2 : 8) : Th.test(n) ? Nn : +n;
        }
        function ba(n) {
          return gn(n, Nt(n));
        }
        function Gu(n) {
          return n ? Gn(tt(n), -Ft, Ft) : n === 0 ? n : 0;
        }
        function gt(n) {
          return n == null ? "" : Gt(n);
        }
        var Zu = he(function(n, r) {
          if (ze(r) || Wt(r)) {
            gn(r, Lt(r), n);
            return;
          }
          for (var i in r)
            xt.call(r, i) && Ce(n, i, r[i]);
        }), Ca = he(function(n, r) {
          gn(r, Nt(r), n);
        }), Ur = he(function(n, r, i, a) {
          gn(r, Nt(r), n, a);
        }), Xu = he(function(n, r, i, a) {
          gn(r, Lt(r), n, a);
        }), $u = An(vi);
        function Vu(n, r) {
          var i = ae(n);
          return r == null ? i : cc(i, r);
        }
        var Qu = st(function(n, r) {
          n = _t(n);
          var i = -1, a = r.length, o = a > 2 ? r[2] : e;
          for (o && Dt(r[0], r[1], o) && (a = 1); ++i < a; )
            for (var u = r[i], g = Nt(u), v = -1, y = g.length; ++v < y; ) {
              var L = g[v], I = n[L];
              (I === e || ln(I, ie[L]) && !xt.call(n, L)) && (n[L] = u[L]);
            }
          return n;
        }), Ju = st(function(n) {
          return n.push(e, Yc), Kt(Ra, e, n);
        });
        function ju(n, r) {
          return Ns(n, Y(r, 3), dn);
        }
        function t0(n, r) {
          return Ns(n, Y(r, 3), Mi);
        }
        function n0(n, r) {
          return n == null ? n : _i(n, Y(r, 3), Nt);
        }
        function e0(n, r) {
          return n == null ? n : lc(n, Y(r, 3), Nt);
        }
        function r0(n, r) {
          return n && dn(n, Y(r, 3));
        }
        function i0(n, r) {
          return n && Mi(n, Y(r, 3));
        }
        function s0(n) {
          return n == null ? [] : mr(n, Lt(n));
        }
        function c0(n) {
          return n == null ? [] : mr(n, Nt(n));
        }
        function Ji(n, r, i) {
          var a = n == null ? e : Zn(n, r);
          return a === e ? i : a;
        }
        function a0(n, r) {
          return n != null && Xc(n, r, Lf);
        }
        function ji(n, r) {
          return n != null && Xc(n, r, If);
        }
        var h0 = Wc(function(n, r, i) {
          r != null && typeof r.toString != "function" && (r = rr.call(r)), n[r] = i;
        }, ns(kt)), o0 = Wc(function(n, r, i) {
          r != null && typeof r.toString != "function" && (r = rr.call(r)), xt.call(n, r) ? n[r].push(i) : n[r] = [i];
        }, Y), f0 = st(Le);
        function Lt(n) {
          return Wt(n) ? ic(n) : Ai(n);
        }
        function Nt(n) {
          return Wt(n) ? ic(n, !0) : Nf(n);
        }
        function l0(n, r) {
          var i = {};
          return r = Y(r, 3), dn(n, function(a, o, u) {
            wn(i, r(a, o, u), a);
          }), i;
        }
        function u0(n, r) {
          var i = {};
          return r = Y(r, 3), dn(n, function(a, o, u) {
            wn(i, o, r(a, o, u));
          }), i;
        }
        var p0 = he(function(n, r, i) {
          xr(n, r, i);
        }), Ra = he(function(n, r, i, a) {
          xr(n, r, i, a);
        }), d0 = An(function(n, r) {
          var i = {};
          if (n == null)
            return i;
          var a = !1;
          r = wt(r, function(u) {
            return u = Un(u, n), a || (a = u.length > 1), u;
          }), gn(n, Fi(n), i), a && (i = en(i, M | E | T, hl));
          for (var o = r.length; o--; )
            Li(i, r[o]);
          return i;
        });
        function g0(n, r) {
          return La(n, Or(Y(r)));
        }
        var m0 = An(function(n, r) {
          return n == null ? {} : Hf(n, r);
        });
        function La(n, r) {
          if (n == null)
            return {};
          var i = wt(Fi(n), function(a) {
            return [a];
          });
          return r = Y(r), yc(n, i, function(a, o) {
            return r(a, o[0]);
          });
        }
        function x0(n, r, i) {
          r = Un(r, n);
          var a = -1, o = r.length;
          for (o || (o = 1, n = e); ++a < o; ) {
            var u = n == null ? e : n[mn(r[a])];
            u === e && (a = o, u = i), n = Sn(u) ? u.call(n) : u;
          }
          return n;
        }
        function v0(n, r, i) {
          return n == null ? n : Oe(n, r, i);
        }
        function _0(n, r, i, a) {
          return a = typeof a == "function" ? a : e, n == null ? n : Oe(n, r, i, a);
        }
        var Ia = Hc(Lt), Oa = Hc(Nt);
        function M0(n, r, i) {
          var a = j(n), o = a || qn(n) || le(n);
          if (r = Y(r, 4), i == null) {
            var u = n && n.constructor;
            o ? i = a ? new u() : [] : Tt(n) ? i = Sn(u) ? ae(cr(n)) : {} : i = {};
          }
          return (o ? jt : dn)(n, function(g, v, y) {
            return r(i, g, v, y);
          }), i;
        }
        function y0(n, r) {
          return n == null ? !0 : Li(n, r);
        }
        function w0(n, r, i) {
          return n == null ? n : Sc(n, r, Pi(i));
        }
        function T0(n, r, i, a) {
          return a = typeof a == "function" ? a : e, n == null ? n : Sc(n, r, Pi(i), a);
        }
        function ue(n) {
          return n == null ? [] : li(n, Lt(n));
        }
        function A0(n) {
          return n == null ? [] : li(n, Nt(n));
        }
        function E0(n, r, i) {
          return i === e && (i = r, r = e), i !== e && (i = cn(i), i = i === i ? i : 0), r !== e && (r = cn(r), r = r === r ? r : 0), Gn(cn(n), r, i);
        }
        function S0(n, r, i) {
          return r = bn(r), i === e ? (i = r, r = 0) : i = bn(i), n = cn(n), Of(n, r, i);
        }
        function b0(n, r, i) {
          if (i && typeof i != "boolean" && Dt(n, r, i) && (r = i = e), i === e && (typeof r == "boolean" ? (i = r, r = e) : typeof n == "boolean" && (i = n, n = e)), n === e && r === e ? (n = 0, r = 1) : (n = bn(n), r === e ? (r = n, n = 0) : r = bn(r)), n > r) {
            var a = n;
            n = r, r = a;
          }
          if (i || n % 1 || r % 1) {
            var o = ec();
            return Pt(n + o * (r - n + ro("1e-" + ((o + "").length - 1))), r);
          }
          return bi(n, r);
        }
        var C0 = oe(function(n, r, i) {
          return r = r.toLowerCase(), n + (i ? Pa(r) : r);
        });
        function Pa(n) {
          return ts(gt(n).toLowerCase());
        }
        function za(n) {
          return n = gt(n), n && n.replace(Ch, xo).replace(Zh, "");
        }
        function R0(n, r, i) {
          n = gt(n), r = Gt(r);
          var a = n.length;
          i = i === e ? a : Gn(tt(i), 0, a);
          var o = i;
          return i -= r.length, i >= 0 && n.slice(i, o) == r;
        }
        function L0(n) {
          return n = gt(n), n && hh.test(n) ? n.replace(ls, vo) : n;
        }
        function I0(n) {
          return n = gt(n), n && dh.test(n) ? n.replace($r, "\\$&") : n;
        }
        var O0 = oe(function(n, r, i) {
          return n + (i ? "-" : "") + r.toLowerCase();
        }), P0 = oe(function(n, r, i) {
          return n + (i ? " " : "") + r.toLowerCase();
        }), z0 = qc("toLowerCase");
        function U0(n, r, i) {
          n = gt(n), r = tt(r);
          var a = r ? ee(n) : 0;
          if (!r || a >= r)
            return n;
          var o = (r - a) / 2;
          return Tr(fr(o), i) + n + Tr(or(o), i);
        }
        function D0(n, r, i) {
          n = gt(n), r = tt(r);
          var a = r ? ee(n) : 0;
          return r && a < r ? n + Tr(r - a, i) : n;
        }
        function q0(n, r, i) {
          n = gt(n), r = tt(r);
          var a = r ? ee(n) : 0;
          return r && a < r ? Tr(r - a, i) + n : n;
        }
        function F0(n, r, i) {
          return i || r == null ? r = 0 : r && (r = +r), Ko(gt(n).replace(Vr, ""), r || 0);
        }
        function B0(n, r, i) {
          return (i ? Dt(n, r, i) : r === e) ? r = 1 : r = tt(r), Ci(gt(n), r);
        }
        function W0() {
          var n = arguments, r = gt(n[0]);
          return n.length < 3 ? r : r.replace(n[1], n[2]);
        }
        var N0 = oe(function(n, r, i) {
          return n + (i ? "_" : "") + r.toLowerCase();
        });
        function k0(n, r, i) {
          return i && typeof i != "number" && Dt(n, r, i) && (r = i = e), i = i === e ? pn : i >>> 0, i ? (n = gt(n), n && (typeof r == "string" || r != null && !Qi(r)) && (r = Gt(r), !r && ne(n)) ? Dn(on(n), 0, i) : n.split(r, i)) : [];
        }
        var H0 = oe(function(n, r, i) {
          return n + (i ? " " : "") + ts(r);
        });
        function K0(n, r, i) {
          return n = gt(n), i = i == null ? 0 : Gn(tt(i), 0, n.length), r = Gt(r), n.slice(i, i + r.length) == r;
        }
        function Y0(n, r, i) {
          var a = l.templateSettings;
          i && Dt(n, r, i) && (r = e), n = gt(n), r = Ur({}, r, a, Kc);
          var o = Ur({}, r.imports, a.imports, Kc), u = Lt(o), g = li(o, u), v, y, L = 0, I = r.interpolate || Xe, O = "__p += '", U = pi(
            (r.escape || Xe).source + "|" + I.source + "|" + (I === us ? wh : Xe).source + "|" + (r.evaluate || Xe).source + "|$",
            "g"
          ), k = "//# sourceURL=" + (xt.call(r, "sourceURL") ? (r.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Jh + "]") + `
`;
          n.replace(U, function(Z, at, ft, Xt, qt, $t) {
            return ft || (ft = Xt), O += n.slice(L, $t).replace(Rh, _o), at && (v = !0, O += `' +
__e(` + at + `) +
'`), qt && (y = !0, O += `';
` + qt + `;
__p += '`), ft && (O += `' +
((__t = (` + ft + `)) == null ? '' : __t) +
'`), L = $t + Z.length, Z;
          }), O += `';
`;
          var G = xt.call(r, "variable") && r.variable;
          if (!G)
            O = `with (obj) {
` + O + `
}
`;
          else if (Mh.test(G))
            throw new Q(p);
          O = (y ? O.replace(ih, "") : O).replace(sh, "$1").replace(ch, "$1;"), O = "function(" + (G || "obj") + `) {
` + (G ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (y ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + O + `return __p
}`;
          var rt = Da(function() {
            return pt(u, k + "return " + O).apply(e, g);
          });
          if (rt.source = O, Vi(rt))
            throw rt;
          return rt;
        }
        function G0(n) {
          return gt(n).toLowerCase();
        }
        function Z0(n) {
          return gt(n).toUpperCase();
        }
        function X0(n, r, i) {
          if (n = gt(n), n && (i || r === e))
            return Ys(n);
          if (!n || !(r = Gt(r)))
            return n;
          var a = on(n), o = on(r), u = Gs(a, o), g = Zs(a, o) + 1;
          return Dn(a, u, g).join("");
        }
        function $0(n, r, i) {
          if (n = gt(n), n && (i || r === e))
            return n.slice(0, $s(n) + 1);
          if (!n || !(r = Gt(r)))
            return n;
          var a = on(n), o = Zs(a, on(r)) + 1;
          return Dn(a, 0, o).join("");
        }
        function V0(n, r, i) {
          if (n = gt(n), n && (i || r === e))
            return n.replace(Vr, "");
          if (!n || !(r = Gt(r)))
            return n;
          var a = on(n), o = Gs(a, on(r));
          return Dn(a, o).join("");
        }
        function Q0(n, r) {
          var i = lt, a = K;
          if (Tt(r)) {
            var o = "separator" in r ? r.separator : o;
            i = "length" in r ? tt(r.length) : i, a = "omission" in r ? Gt(r.omission) : a;
          }
          n = gt(n);
          var u = n.length;
          if (ne(n)) {
            var g = on(n);
            u = g.length;
          }
          if (i >= u)
            return n;
          var v = i - ee(a);
          if (v < 1)
            return a;
          var y = g ? Dn(g, 0, v).join("") : n.slice(0, v);
          if (o === e)
            return y + a;
          if (g && (v += y.length - v), Qi(o)) {
            if (n.slice(v).search(o)) {
              var L, I = y;
              for (o.global || (o = pi(o.source, gt(ps.exec(o)) + "g")), o.lastIndex = 0; L = o.exec(I); )
                var O = L.index;
              y = y.slice(0, O === e ? v : O);
            }
          } else if (n.indexOf(Gt(o), v) != v) {
            var U = y.lastIndexOf(o);
            U > -1 && (y = y.slice(0, U));
          }
          return y + a;
        }
        function J0(n) {
          return n = gt(n), n && ah.test(n) ? n.replace(fs, So) : n;
        }
        var j0 = oe(function(n, r, i) {
          return n + (i ? " " : "") + r.toUpperCase();
        }), ts = qc("toUpperCase");
        function Ua(n, r, i) {
          return n = gt(n), r = i ? e : r, r === e ? yo(n) ? Ro(n) : lo(n) : n.match(r) || [];
        }
        var Da = st(function(n, r) {
          try {
            return Kt(n, e, r);
          } catch (i) {
            return Vi(i) ? i : new Q(i);
          }
        }), tp = An(function(n, r) {
          return jt(r, function(i) {
            i = mn(i), wn(n, i, Xi(n[i], n));
          }), n;
        });
        function np(n) {
          var r = n == null ? 0 : n.length, i = Y();
          return n = r ? wt(n, function(a) {
            if (typeof a[1] != "function")
              throw new tn(f);
            return [i(a[0]), a[1]];
          }) : [], st(function(a) {
            for (var o = -1; ++o < r; ) {
              var u = n[o];
              if (Kt(u[0], this, a))
                return Kt(u[1], this, a);
            }
          });
        }
        function ep(n) {
          return bf(en(n, M));
        }
        function ns(n) {
          return function() {
            return n;
          };
        }
        function rp(n, r) {
          return n == null || n !== n ? r : n;
        }
        var ip = Bc(), sp = Bc(!0);
        function kt(n) {
          return n;
        }
        function es(n) {
          return gc(typeof n == "function" ? n : en(n, M));
        }
        function cp(n) {
          return xc(en(n, M));
        }
        function ap(n, r) {
          return vc(n, en(r, M));
        }
        var hp = st(function(n, r) {
          return function(i) {
            return Le(i, n, r);
          };
        }), op = st(function(n, r) {
          return function(i) {
            return Le(n, i, r);
          };
        });
        function rs(n, r, i) {
          var a = Lt(r), o = mr(r, a);
          i == null && !(Tt(r) && (o.length || !a.length)) && (i = r, r = n, n = this, o = mr(r, Lt(r)));
          var u = !(Tt(i) && "chain" in i) || !!i.chain, g = Sn(n);
          return jt(o, function(v) {
            var y = r[v];
            n[v] = y, g && (n.prototype[v] = function() {
              var L = this.__chain__;
              if (u || L) {
                var I = n(this.__wrapped__), O = I.__actions__ = Bt(this.__actions__);
                return O.push({ func: y, args: arguments, thisArg: n }), I.__chain__ = L, I;
              }
              return y.apply(n, Ln([this.value()], arguments));
            });
          }), n;
        }
        function fp() {
          return It._ === this && (It._ = Uo), this;
        }
        function is() {
        }
        function lp(n) {
          return n = tt(n), st(function(r) {
            return _c(r, n);
          });
        }
        var up = Ui(wt), pp = Ui(Ws), dp = Ui(ci);
        function qa(n) {
          return ki(n) ? ai(mn(n)) : Kf(n);
        }
        function gp(n) {
          return function(r) {
            return n == null ? e : Zn(n, r);
          };
        }
        var mp = Nc(), xp = Nc(!0);
        function ss() {
          return [];
        }
        function cs() {
          return !1;
        }
        function vp() {
          return {};
        }
        function _p() {
          return "";
        }
        function Mp() {
          return !0;
        }
        function yp(n, r) {
          if (n = tt(n), n < 1 || n > Ft)
            return [];
          var i = pn, a = Pt(n, pn);
          r = Y(r), n -= pn;
          for (var o = fi(a, r); ++i < n; )
            r(i);
          return o;
        }
        function wp(n) {
          return j(n) ? wt(n, mn) : Zt(n) ? [n] : Bt(ra(gt(n)));
        }
        function Tp(n) {
          var r = ++Po;
          return gt(n) + r;
        }
        var Ap = wr(function(n, r) {
          return n + r;
        }, 0), Ep = Di("ceil"), Sp = wr(function(n, r) {
          return n / r;
        }, 1), bp = Di("floor");
        function Cp(n) {
          return n && n.length ? gr(n, kt, yi) : e;
        }
        function Rp(n, r) {
          return n && n.length ? gr(n, Y(r, 2), yi) : e;
        }
        function Lp(n) {
          return Hs(n, kt);
        }
        function Ip(n, r) {
          return Hs(n, Y(r, 2));
        }
        function Op(n) {
          return n && n.length ? gr(n, kt, Ei) : e;
        }
        function Pp(n, r) {
          return n && n.length ? gr(n, Y(r, 2), Ei) : e;
        }
        var zp = wr(function(n, r) {
          return n * r;
        }, 1), Up = Di("round"), Dp = wr(function(n, r) {
          return n - r;
        }, 0);
        function qp(n) {
          return n && n.length ? oi(n, kt) : 0;
        }
        function Fp(n, r) {
          return n && n.length ? oi(n, Y(r, 2)) : 0;
        }
        return l.after = cu, l.ary = da, l.assign = Zu, l.assignIn = Ca, l.assignInWith = Ur, l.assignWith = Xu, l.at = $u, l.before = ga, l.bind = Xi, l.bindAll = tp, l.bindKey = ma, l.castArray = vu, l.chain = la, l.chunk = bl, l.compact = Cl, l.concat = Rl, l.cond = np, l.conforms = ep, l.constant = ns, l.countBy = q1, l.create = Vu, l.curry = xa, l.curryRight = va, l.debounce = _a, l.defaults = Qu, l.defaultsDeep = Ju, l.defer = au, l.delay = hu, l.difference = Ll, l.differenceBy = Il, l.differenceWith = Ol, l.drop = Pl, l.dropRight = zl, l.dropRightWhile = Ul, l.dropWhile = Dl, l.fill = ql, l.filter = B1, l.flatMap = k1, l.flatMapDeep = H1, l.flatMapDepth = K1, l.flatten = aa, l.flattenDeep = Fl, l.flattenDepth = Bl, l.flip = ou, l.flow = ip, l.flowRight = sp, l.fromPairs = Wl, l.functions = s0, l.functionsIn = c0, l.groupBy = Y1, l.initial = kl, l.intersection = Hl, l.intersectionBy = Kl, l.intersectionWith = Yl, l.invert = h0, l.invertBy = o0, l.invokeMap = Z1, l.iteratee = es, l.keyBy = X1, l.keys = Lt, l.keysIn = Nt, l.map = Rr, l.mapKeys = l0, l.mapValues = u0, l.matches = cp, l.matchesProperty = ap, l.memoize = Ir, l.merge = p0, l.mergeWith = Ra, l.method = hp, l.methodOf = op, l.mixin = rs, l.negate = Or, l.nthArg = lp, l.omit = d0, l.omitBy = g0, l.once = fu, l.orderBy = $1, l.over = up, l.overArgs = lu, l.overEvery = pp, l.overSome = dp, l.partial = $i, l.partialRight = Ma, l.partition = V1, l.pick = m0, l.pickBy = La, l.property = qa, l.propertyOf = gp, l.pull = $l, l.pullAll = oa, l.pullAllBy = Vl, l.pullAllWith = Ql, l.pullAt = Jl, l.range = mp, l.rangeRight = xp, l.rearg = uu, l.reject = j1, l.remove = jl, l.rest = pu, l.reverse = Gi, l.sampleSize = nu, l.set = v0, l.setWith = _0, l.shuffle = eu, l.slice = t1, l.sortBy = su, l.sortedUniq = a1, l.sortedUniqBy = h1, l.split = k0, l.spread = du, l.tail = o1, l.take = f1, l.takeRight = l1, l.takeRightWhile = u1, l.takeWhile = p1, l.tap = C1, l.throttle = gu, l.thru = Cr, l.toArray = Ea, l.toPairs = Ia, l.toPairsIn = Oa, l.toPath = wp, l.toPlainObject = ba, l.transform = M0, l.unary = mu, l.union = d1, l.unionBy = g1, l.unionWith = m1, l.uniq = x1, l.uniqBy = v1, l.uniqWith = _1, l.unset = y0, l.unzip = Zi, l.unzipWith = fa, l.update = w0, l.updateWith = T0, l.values = ue, l.valuesIn = A0, l.without = M1, l.words = Ua, l.wrap = xu, l.xor = y1, l.xorBy = w1, l.xorWith = T1, l.zip = A1, l.zipObject = E1, l.zipObjectDeep = S1, l.zipWith = b1, l.entries = Ia, l.entriesIn = Oa, l.extend = Ca, l.extendWith = Ur, rs(l, l), l.add = Ap, l.attempt = Da, l.camelCase = C0, l.capitalize = Pa, l.ceil = Ep, l.clamp = E0, l.clone = _u, l.cloneDeep = yu, l.cloneDeepWith = wu, l.cloneWith = Mu, l.conformsTo = Tu, l.deburr = za, l.defaultTo = rp, l.divide = Sp, l.endsWith = R0, l.eq = ln, l.escape = L0, l.escapeRegExp = I0, l.every = F1, l.find = W1, l.findIndex = sa, l.findKey = ju, l.findLast = N1, l.findLastIndex = ca, l.findLastKey = t0, l.floor = bp, l.forEach = ua, l.forEachRight = pa, l.forIn = n0, l.forInRight = e0, l.forOwn = r0, l.forOwnRight = i0, l.get = Ji, l.gt = Au, l.gte = Eu, l.has = a0, l.hasIn = ji, l.head = ha, l.identity = kt, l.includes = G1, l.indexOf = Nl, l.inRange = S0, l.invoke = f0, l.isArguments = Vn, l.isArray = j, l.isArrayBuffer = Su, l.isArrayLike = Wt, l.isArrayLikeObject = Et, l.isBoolean = bu, l.isBuffer = qn, l.isDate = Cu, l.isElement = Ru, l.isEmpty = Lu, l.isEqual = Iu, l.isEqualWith = Ou, l.isError = Vi, l.isFinite = Pu, l.isFunction = Sn, l.isInteger = ya, l.isLength = Pr, l.isMap = wa, l.isMatch = zu, l.isMatchWith = Uu, l.isNaN = Du, l.isNative = qu, l.isNil = Bu, l.isNull = Fu, l.isNumber = Ta, l.isObject = Tt, l.isObjectLike = At, l.isPlainObject = De, l.isRegExp = Qi, l.isSafeInteger = Wu, l.isSet = Aa, l.isString = zr, l.isSymbol = Zt, l.isTypedArray = le, l.isUndefined = Nu, l.isWeakMap = ku, l.isWeakSet = Hu, l.join = Gl, l.kebabCase = O0, l.last = sn, l.lastIndexOf = Zl, l.lowerCase = P0, l.lowerFirst = z0, l.lt = Ku, l.lte = Yu, l.max = Cp, l.maxBy = Rp, l.mean = Lp, l.meanBy = Ip, l.min = Op, l.minBy = Pp, l.stubArray = ss, l.stubFalse = cs, l.stubObject = vp, l.stubString = _p, l.stubTrue = Mp, l.multiply = zp, l.nth = Xl, l.noConflict = fp, l.noop = is, l.now = Lr, l.pad = U0, l.padEnd = D0, l.padStart = q0, l.parseInt = F0, l.random = b0, l.reduce = Q1, l.reduceRight = J1, l.repeat = B0, l.replace = W0, l.result = x0, l.round = Up, l.runInContext = _, l.sample = tu, l.size = ru, l.snakeCase = N0, l.some = iu, l.sortedIndex = n1, l.sortedIndexBy = e1, l.sortedIndexOf = r1, l.sortedLastIndex = i1, l.sortedLastIndexBy = s1, l.sortedLastIndexOf = c1, l.startCase = H0, l.startsWith = K0, l.subtract = Dp, l.sum = qp, l.sumBy = Fp, l.template = Y0, l.times = yp, l.toFinite = bn, l.toInteger = tt, l.toLength = Sa, l.toLower = G0, l.toNumber = cn, l.toSafeInteger = Gu, l.toString = gt, l.toUpper = Z0, l.trim = X0, l.trimEnd = $0, l.trimStart = V0, l.truncate = Q0, l.unescape = J0, l.uniqueId = Tp, l.upperCase = j0, l.upperFirst = ts, l.each = ua, l.eachRight = pa, l.first = ha, rs(l, (function() {
          var n = {};
          return dn(l, function(r, i) {
            xt.call(l.prototype, i) || (n[i] = r);
          }), n;
        })(), { chain: !1 }), l.VERSION = s, jt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
          l[n].placeholder = l;
        }), jt(["drop", "take"], function(n, r) {
          ot.prototype[n] = function(i) {
            i = i === e ? 1 : Ct(tt(i), 0);
            var a = this.__filtered__ && !r ? new ot(this) : this.clone();
            return a.__filtered__ ? a.__takeCount__ = Pt(i, a.__takeCount__) : a.__views__.push({
              size: Pt(i, pn),
              type: n + (a.__dir__ < 0 ? "Right" : "")
            }), a;
          }, ot.prototype[n + "Right"] = function(i) {
            return this.reverse()[n](i).reverse();
          };
        }), jt(["filter", "map", "takeWhile"], function(n, r) {
          var i = r + 1, a = i == dt || i == Qt;
          ot.prototype[n] = function(o) {
            var u = this.clone();
            return u.__iteratees__.push({
              iteratee: Y(o, 3),
              type: i
            }), u.__filtered__ = u.__filtered__ || a, u;
          };
        }), jt(["head", "last"], function(n, r) {
          var i = "take" + (r ? "Right" : "");
          ot.prototype[n] = function() {
            return this[i](1).value()[0];
          };
        }), jt(["initial", "tail"], function(n, r) {
          var i = "drop" + (r ? "" : "Right");
          ot.prototype[n] = function() {
            return this.__filtered__ ? new ot(this) : this[i](1);
          };
        }), ot.prototype.compact = function() {
          return this.filter(kt);
        }, ot.prototype.find = function(n) {
          return this.filter(n).head();
        }, ot.prototype.findLast = function(n) {
          return this.reverse().find(n);
        }, ot.prototype.invokeMap = st(function(n, r) {
          return typeof n == "function" ? new ot(this) : this.map(function(i) {
            return Le(i, n, r);
          });
        }), ot.prototype.reject = function(n) {
          return this.filter(Or(Y(n)));
        }, ot.prototype.slice = function(n, r) {
          n = tt(n);
          var i = this;
          return i.__filtered__ && (n > 0 || r < 0) ? new ot(i) : (n < 0 ? i = i.takeRight(-n) : n && (i = i.drop(n)), r !== e && (r = tt(r), i = r < 0 ? i.dropRight(-r) : i.take(r - n)), i);
        }, ot.prototype.takeRightWhile = function(n) {
          return this.reverse().takeWhile(n).reverse();
        }, ot.prototype.toArray = function() {
          return this.take(pn);
        }, dn(ot.prototype, function(n, r) {
          var i = /^(?:filter|find|map|reject)|While$/.test(r), a = /^(?:head|last)$/.test(r), o = l[a ? "take" + (r == "last" ? "Right" : "") : r], u = a || /^find/.test(r);
          o && (l.prototype[r] = function() {
            var g = this.__wrapped__, v = a ? [1] : arguments, y = g instanceof ot, L = v[0], I = y || j(g), O = function(at) {
              var ft = o.apply(l, Ln([at], v));
              return a && U ? ft[0] : ft;
            };
            I && i && typeof L == "function" && L.length != 1 && (y = I = !1);
            var U = this.__chain__, k = !!this.__actions__.length, G = u && !U, rt = y && !k;
            if (!u && I) {
              g = rt ? g : new ot(this);
              var Z = n.apply(g, v);
              return Z.__actions__.push({ func: Cr, args: [O], thisArg: e }), new nn(Z, U);
            }
            return G && rt ? n.apply(this, v) : (Z = this.thru(O), G ? a ? Z.value()[0] : Z.value() : Z);
          });
        }), jt(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
          var r = tr[n], i = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", a = /^(?:pop|shift)$/.test(n);
          l.prototype[n] = function() {
            var o = arguments;
            if (a && !this.__chain__) {
              var u = this.value();
              return r.apply(j(u) ? u : [], o);
            }
            return this[i](function(g) {
              return r.apply(j(g) ? g : [], o);
            });
          };
        }), dn(ot.prototype, function(n, r) {
          var i = l[r];
          if (i) {
            var a = i.name + "";
            xt.call(ce, a) || (ce[a] = []), ce[a].push({ name: r, func: i });
          }
        }), ce[yr(e, P).name] = [{
          name: "wrapper",
          func: e
        }], ot.prototype.clone = Qo, ot.prototype.reverse = Jo, ot.prototype.value = jo, l.prototype.at = R1, l.prototype.chain = L1, l.prototype.commit = I1, l.prototype.next = O1, l.prototype.plant = z1, l.prototype.reverse = U1, l.prototype.toJSON = l.prototype.valueOf = l.prototype.value = D1, l.prototype.first = l.prototype.head, Te && (l.prototype[Te] = P1), l;
      }), re = Lo();
      kn ? ((kn.exports = re)._ = re, ei._ = re) : It._ = re;
    }).call(Bp);
  })(Fe, Fe.exports)), Fe.exports;
}
var Np = Wp();
function kp(C) {
  const t = document.createElement("canvas");
  return t.style.display = "block", t.style.width = C.style.width, t.style.height = C.style.height, C.style.position = "relative", t.setAttribute("id", Np.uniqueId("canvas")), C.append(t), t;
}
class Ya {
  static gl;
}
class Hp {
  canvas;
  gl;
  constructor(t) {
    const e = window.devicePixelRatio || 1, s = kp(t), c = s.getBoundingClientRect();
    s.width = c.width * e, s.height = c.height * e, this.canvas = s, this.gl = s.getContext("webgl2", {
      stencil: !1
    }), Ya.gl = this.gl;
    const h = /* @__PURE__ */ new Set();
    h.add("OES_element_index_uint"), h.add("OES_vertex_array_object"), h.add("WEBGL_depth_texture"), h.forEach((f) => {
      this.gl.getExtension(f);
    });
  }
  init() {
  }
}
class Kp extends Set {
}
class Br {
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
class Ga extends Br {
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
class Yp extends Ga {
  constructor(t) {
    super(
      t,
      1
      /* fragment */
    );
  }
}
class Gp extends Ga {
  constructor(t) {
    super(
      t,
      0
      /* vertex */
    );
  }
}
class Ne extends Br {
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
      s.tie(t), s instanceof Gp && (this.VertexShader = s), s instanceof Yp && (this.FragmentShader = s);
  }
  create(t) {
    this.id = t.createProgram();
  }
  initAttribute(t) {
    const e = t.getProgramParameter(this.id, t.ACTIVE_ATTRIBUTES);
    for (let s = 0; s < e; s++) {
      const h = t.getActiveAttrib(this.id, s).name, f = t.getAttribLocation(this.id, h);
      this.m_attributeLocations[h] = {
        location: f
      };
    }
  }
  initUniform(t) {
    const e = t.getProgramParameter(this.id, t.ACTIVE_UNIFORMS);
    for (let s = 0; s < e; s++) {
      const c = t.getActiveUniform(this.id, s), h = c.name, f = t.getUniformLocation(this.id, h);
      this.m_uniformLocations[h] = {
        location: f,
        type: c.type
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
    this.gl.useProgram(this.id), Ne.current = this;
  }
}
let Zp = class extends Br {
  constructor() {
    super();
  }
};
class as extends Zp {
  constructor() {
    super();
  }
  static default() {
    return new as();
  }
}
class Xp extends Array {
  constructor() {
    super();
  }
  build(t) {
    this.createQueue(t);
  }
  createQueue(t) {
    const e = [];
    e.push(
      as.default()
    ), this.forEach((s) => {
      s.material.renderMode && s.geometry.updateDrawMode(s.material.renderMode.mode), e.push(
        new Ne(t, s.material.shader)
      ), this.camera.defaultUniform.forEach((c) => {
        c.name !== "uModelMatrix" && e.push(c);
      }), e.push(s.modelMatrix), s.material.state.forEach((c) => {
        e.push(c);
      }), s.material.uniform.forEach((c) => {
        e.push(c);
      }), s.geometry.vbos.forEach(
        (c) => {
          e.push(c);
        }
      ), s.geometry.drawers.forEach(
        (c) => {
          e.push(c);
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
class $p {
  constructor() {
  }
}
class Vp {
  context;
  setContext(t) {
    this.context = t;
  }
}
class Qp extends Vp {
  constructor() {
    super();
  }
  end() {
  }
  start() {
    this.context.chain.setNext(this.context.cameraChain);
  }
}
class Za {
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
class Jp extends Za {
}
const nt = 1e-6, Wa = new Float32Array([
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
class Rt extends Float32Array {
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
        super(Wa);
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
    return Rt.str(this);
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
    return this.set(Wa), this;
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
    return Rt.multiply(this, this, t);
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
    return Rt.transpose(this, this);
  }
  /**
   * Inverts this {@link Mat3}
   * Equivalent to `Mat4.invert(this, this);`
   *
   * @returns `this`
   */
  invert() {
    return Rt.invert(this, this);
  }
  /**
   * Translate this {@link Mat3} by the given vector
   * Equivalent to `Mat3.translate(this, this, v);`
   *
   * @param v - The {@link Vec2} to translate by
   * @returns `this`
   */
  translate(t) {
    return Rt.translate(this, this, t);
  }
  /**
   * Rotates this {@link Mat3} by the given angle around the given axis
   * Equivalent to `Mat3.rotate(this, this, rad);`
   *
   * @param rad - the angle to rotate the matrix by
   * @returns `out`
   */
  rotate(t) {
    return Rt.rotate(this, this, t);
  }
  /**
   * Scales this {@link Mat3} by the dimensions in the given vec3 not using vectorization
   * Equivalent to `Mat3.scale(this, this, v);`
   *
   * @param v - The {@link Vec2} to scale the matrix by
   * @returns `this`
   */
  scale(t) {
    return Rt.scale(this, this, t);
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
    return new Rt();
  }
  /**
   * Creates a new {@link Mat3} initialized with values from an existing matrix
   * @category Static
   *
   * @param a - Matrix to clone
   * @returns A new {@link Mat3}
   */
  static clone(t) {
    return new Rt(t);
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
    return new Rt(...t);
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
      const s = e[1], c = e[2], h = e[5];
      t[1] = e[3], t[2] = e[6], t[3] = s, t[5] = e[7], t[6] = c, t[7] = h;
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
    const s = e[0], c = e[1], h = e[2], f = e[3], p = e[4], d = e[5], m = e[6], x = e[7], M = e[8], E = M * p - d * x, T = -M * f + d * m, w = x * f - p * m;
    let b = s * E + c * T + h * w;
    return b ? (b = 1 / b, t[0] = E * b, t[1] = (-M * c + h * x) * b, t[2] = (d * c - h * p) * b, t[3] = T * b, t[4] = (M * s - h * m) * b, t[5] = (-d * s + h * f) * b, t[6] = w * b, t[7] = (-x * s + c * m) * b, t[8] = (p * s - c * f) * b, t) : null;
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
    const s = e[0], c = e[1], h = e[2], f = e[3], p = e[4], d = e[5], m = e[6], x = e[7], M = e[8];
    return t[0] = p * M - d * x, t[1] = h * x - c * M, t[2] = c * d - h * p, t[3] = d * m - f * M, t[4] = s * M - h * m, t[5] = h * f - s * d, t[6] = f * x - p * m, t[7] = c * m - s * x, t[8] = s * p - c * f, t;
  }
  /**
   * Calculates the determinant of a {@link Mat3}
   * @category Static
   *
   * @param a - the source matrix
   * @returns determinant of a
   */
  static determinant(t) {
    const e = t[0], s = t[1], c = t[2], h = t[3], f = t[4], p = t[5], d = t[6], m = t[7], x = t[8];
    return e * (x * f - p * m) + s * (-x * h + p * d) + c * (m * h - f * d);
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
    const c = e[0], h = e[1], f = e[2], p = e[3], d = e[4], m = e[5], x = e[6], M = e[7], E = e[8];
    let T = s[0], w = s[1], b = s[2];
    return t[0] = T * c + w * p + b * x, t[1] = T * h + w * d + b * M, t[2] = T * f + w * m + b * E, T = s[3], w = s[4], b = s[5], t[3] = T * c + w * p + b * x, t[4] = T * h + w * d + b * M, t[5] = T * f + w * m + b * E, T = s[6], w = s[7], b = s[8], t[6] = T * c + w * p + b * x, t[7] = T * h + w * d + b * M, t[8] = T * f + w * m + b * E, t;
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
    const c = e[0], h = e[1], f = e[2], p = e[3], d = e[4], m = e[5], x = e[6], M = e[7], E = e[8], T = s[0], w = s[1];
    return t[0] = c, t[1] = h, t[2] = f, t[3] = p, t[4] = d, t[5] = m, t[6] = T * c + w * p + x, t[7] = T * h + w * d + M, t[8] = T * f + w * m + E, t;
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
    const c = e[0], h = e[1], f = e[2], p = e[3], d = e[4], m = e[5], x = e[6], M = e[7], E = e[8], T = Math.sin(s), w = Math.cos(s);
    return t[0] = w * c + T * p, t[1] = w * h + T * d, t[2] = w * f + T * m, t[3] = w * p - T * c, t[4] = w * d - T * h, t[5] = w * m - T * f, t[6] = x, t[7] = M, t[8] = E, t;
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
    const c = s[0], h = s[1];
    return t[0] = c * e[0], t[1] = c * e[1], t[2] = c * e[2], t[3] = h * e[3], t[4] = h * e[4], t[5] = h * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t;
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
    const s = Math.sin(e), c = Math.cos(e);
    return t[0] = c, t[1] = s, t[2] = 0, t[3] = -s, t[4] = c, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
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
    const s = e[0], c = e[1], h = e[2], f = e[3], p = s + s, d = c + c, m = h + h, x = s * p, M = c * p, E = c * d, T = h * p, w = h * d, b = h * m, S = f * p, P = f * d, q = f * m;
    return t[0] = 1 - E - b, t[3] = M - q, t[6] = T + P, t[1] = M + q, t[4] = 1 - x - b, t[7] = w - S, t[2] = T - P, t[5] = w + S, t[8] = 1 - x - E, t;
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
    const s = e[0], c = e[1], h = e[2], f = e[3], p = e[4], d = e[5], m = e[6], x = e[7], M = e[8], E = e[9], T = e[10], w = e[11], b = e[12], S = e[13], P = e[14], q = e[15], N = s * d - c * p, F = s * m - h * p, z = s * x - f * p, B = c * m - h * d, D = c * x - f * d, it = h * x - f * m, et = M * S - E * b, lt = M * P - T * b, K = M * q - w * b, vt = E * P - T * S, mt = E * q - w * S, dt = T * q - w * P;
    let V = N * dt - F * mt + z * vt + B * K - D * lt + it * et;
    return V ? (V = 1 / V, t[0] = (d * dt - m * mt + x * vt) * V, t[1] = (m * K - p * dt - x * lt) * V, t[2] = (p * mt - d * K + x * et) * V, t[3] = (h * mt - c * dt - f * vt) * V, t[4] = (s * dt - h * K + f * lt) * V, t[5] = (c * K - s * mt - f * et) * V, t[6] = (S * it - P * D + q * B) * V, t[7] = (P * z - b * it - q * F) * V, t[8] = (b * D - S * z + q * N) * V, t) : null;
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
  static multiplyScalarAndAdd(t, e, s, c) {
    return t[0] = e[0] + s[0] * c, t[1] = e[1] + s[1] * c, t[2] = e[2] + s[2] * c, t[3] = e[3] + s[3] * c, t[4] = e[4] + s[4] * c, t[5] = e[5] + s[5] * c, t[6] = e[6] + s[6] * c, t[7] = e[7] + s[7] * c, t[8] = e[8] + s[8] * c, t;
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
    const s = t[0], c = t[1], h = t[2], f = t[3], p = t[4], d = t[5], m = t[6], x = t[7], M = t[8], E = e[0], T = e[1], w = e[2], b = e[3], S = e[4], P = e[5], q = e[6], N = e[7], F = e[8];
    return Math.abs(s - E) <= nt * Math.max(1, Math.abs(s), Math.abs(E)) && Math.abs(c - T) <= nt * Math.max(1, Math.abs(c), Math.abs(T)) && Math.abs(h - w) <= nt * Math.max(1, Math.abs(h), Math.abs(w)) && Math.abs(f - b) <= nt * Math.max(1, Math.abs(f), Math.abs(b)) && Math.abs(p - S) <= nt * Math.max(1, Math.abs(p), Math.abs(S)) && Math.abs(d - P) <= nt * Math.max(1, Math.abs(d), Math.abs(P)) && Math.abs(m - q) <= nt * Math.max(1, Math.abs(m), Math.abs(q)) && Math.abs(x - N) <= nt * Math.max(1, Math.abs(x), Math.abs(N)) && Math.abs(M - F) <= nt * Math.max(1, Math.abs(M), Math.abs(F));
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
Rt.prototype.mul = Rt.prototype.multiply;
Rt.mul = Rt.multiply;
Rt.sub = Rt.subtract;
const qr = Rt;
class X extends Float32Array {
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
    return X.str(this);
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
    return X.distance(this, t);
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
    return X.squaredDistance(this, t);
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
    return X.normalize(this, this);
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
    return new X();
  }
  /**
   * Creates a new vec3 initialized with values from an existing vector
   * @category Static
   *
   * @param a - vector to clone
   * @returns a new 3D vector
   */
  static clone(t) {
    return new X(t);
  }
  /**
   * Calculates the magnitude (length) of a {@link Vec3}
   * @category Static
   *
   * @param a - Vector to calculate magnitude of
   * @returns Magnitude of a
   */
  static magnitude(t) {
    let e = t[0], s = t[1], c = t[2];
    return Math.sqrt(e * e + s * s + c * c);
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
    return new X(t, e, s);
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
  static set(t, e, s, c) {
    return t[0] = e, t[1] = s, t[2] = c, t;
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
  static scaleAndAdd(t, e, s, c) {
    return t[0] = e[0] + s[0] * c, t[1] = e[1] + s[1] * c, t[2] = e[2] + s[2] * c, t;
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
    const s = e[0] - t[0], c = e[1] - t[1], h = e[2] - t[2];
    return Math.sqrt(s * s + c * c + h * h);
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
    const s = e[0] - t[0], c = e[1] - t[1], h = e[2] - t[2];
    return s * s + c * c + h * h;
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
    const e = t[0], s = t[1], c = t[2];
    return e * e + s * s + c * c;
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
    const s = e[0], c = e[1], h = e[2];
    let f = s * s + c * c + h * h;
    return f > 0 && (f = 1 / Math.sqrt(f)), t[0] = e[0] * f, t[1] = e[1] * f, t[2] = e[2] * f, t;
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
    const c = e[0], h = e[1], f = e[2], p = s[0], d = s[1], m = s[2];
    return t[0] = h * m - f * d, t[1] = f * p - c * m, t[2] = c * d - h * p, t;
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
  static lerp(t, e, s, c) {
    const h = e[0], f = e[1], p = e[2];
    return t[0] = h + c * (s[0] - h), t[1] = f + c * (s[1] - f), t[2] = p + c * (s[2] - p), t;
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
  static slerp(t, e, s, c) {
    const h = Math.acos(Math.min(Math.max(X.dot(e, s), -1), 1)), f = Math.sin(h), p = Math.sin((1 - c) * h) / f, d = Math.sin(c * h) / f;
    return t[0] = p * e[0] + d * s[0], t[1] = p * e[1] + d * s[1], t[2] = p * e[2] + d * s[2], t;
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
  static hermite(t, e, s, c, h, f) {
    const p = f * f, d = p * (2 * f - 3) + 1, m = p * (f - 2) + f, x = p * (f - 1), M = p * (3 - 2 * f);
    return t[0] = e[0] * d + s[0] * m + c[0] * x + h[0] * M, t[1] = e[1] * d + s[1] * m + c[1] * x + h[1] * M, t[2] = e[2] * d + s[2] * m + c[2] * x + h[2] * M, t;
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
  static bezier(t, e, s, c, h, f) {
    const p = 1 - f, d = p * p, m = f * f, x = d * p, M = 3 * f * d, E = 3 * m * p, T = m * f;
    return t[0] = e[0] * x + s[0] * M + c[0] * E + h[0] * T, t[1] = e[1] * x + s[1] * M + c[1] * E + h[1] * T, t[2] = e[2] * x + s[2] * M + c[2] * E + h[2] * T, t;
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
    const c = e[0], h = e[1], f = e[2], p = s[3] * c + s[7] * h + s[11] * f + s[15] || 1;
    return t[0] = (s[0] * c + s[4] * h + s[8] * f + s[12]) / p, t[1] = (s[1] * c + s[5] * h + s[9] * f + s[13]) / p, t[2] = (s[2] * c + s[6] * h + s[10] * f + s[14]) / p, t;
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
    let c = e[0], h = e[1], f = e[2];
    return t[0] = c * s[0] + h * s[3] + f * s[6], t[1] = c * s[1] + h * s[4] + f * s[7], t[2] = c * s[2] + h * s[5] + f * s[8], t;
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
    const c = s[0], h = s[1], f = s[2], p = s[3] * 2, d = e[0], m = e[1], x = e[2], M = h * x - f * m, E = f * d - c * x, T = c * m - h * d, w = (h * T - f * E) * 2, b = (f * M - c * T) * 2, S = (c * E - h * M) * 2;
    return t[0] = d + M * p + w, t[1] = m + E * p + b, t[2] = x + T * p + S, t;
  }
  /**
   * Rotate a 3D vector around the x-axis
   * @param out - The receiving vec3
   * @param a - The vec3 point to rotate
   * @param b - The origin of the rotation
   * @param rad - The angle of rotation in radians
   * @returns `out`
   */
  static rotateX(t, e, s, c) {
    const h = s[1], f = s[2], p = e[1] - h, d = e[2] - f;
    return t[0] = e[0], t[1] = p * Math.cos(c) - d * Math.sin(c) + h, t[2] = p * Math.sin(c) + d * Math.cos(c) + f, t;
  }
  /**
   * Rotate a 3D vector around the y-axis
   * @param out - The receiving vec3
   * @param a - The vec3 point to rotate
   * @param b - The origin of the rotation
   * @param rad - The angle of rotation in radians
   * @returns `out`
   */
  static rotateY(t, e, s, c) {
    const h = s[0], f = s[2], p = e[0] - h, d = e[2] - f;
    return t[0] = d * Math.sin(c) + p * Math.cos(c) + h, t[1] = e[1], t[2] = d * Math.cos(c) - p * Math.sin(c) + f, t;
  }
  /**
   * Rotate a 3D vector around the z-axis
   * @param out - The receiving vec3
   * @param a - The vec3 point to rotate
   * @param b - The origin of the rotation
   * @param rad - The angle of rotation in radians
   * @returns `out`
   */
  static rotateZ(t, e, s, c) {
    const h = s[0], f = s[1], p = e[0] - h, d = e[1] - f;
    return t[0] = p * Math.cos(c) - d * Math.sin(c) + h, t[1] = p * Math.sin(c) + d * Math.cos(c) + f, t[2] = s[2], t;
  }
  /**
   * Get the angle between two 3D vectors
   * @param a - The first operand
   * @param b - The second operand
   * @returns The angle in radians
   */
  static angle(t, e) {
    const s = t[0], c = t[1], h = t[2], f = e[0], p = e[1], d = e[2], m = Math.sqrt((s * s + c * c + h * h) * (f * f + p * p + d * d)), x = m && X.dot(t, e) / m;
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
    const s = t[0], c = t[1], h = t[2], f = e[0], p = e[1], d = e[2];
    return Math.abs(s - f) <= nt * Math.max(1, Math.abs(s), Math.abs(f)) && Math.abs(c - p) <= nt * Math.max(1, Math.abs(c), Math.abs(p)) && Math.abs(h - d) <= nt * Math.max(1, Math.abs(h), Math.abs(d));
  }
}
X.prototype.sub = X.prototype.subtract;
X.prototype.mul = X.prototype.multiply;
X.prototype.div = X.prototype.divide;
X.prototype.dist = X.prototype.distance;
X.prototype.sqrDist = X.prototype.squaredDistance;
X.sub = X.subtract;
X.mul = X.multiply;
X.div = X.divide;
X.dist = X.distance;
X.sqrDist = X.squaredDistance;
X.sqrLen = X.squaredLength;
X.mag = X.magnitude;
X.length = X.magnitude;
X.len = X.magnitude;
const H = X, Na = new Float32Array([
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
class ut extends Float32Array {
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
        super(Na);
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
    return ut.str(this);
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
    return this.set(Na), this;
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
    return ut.multiply(this, this, t);
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
    return ut.transpose(this, this);
  }
  /**
   * Inverts this {@link Mat4}
   * Equivalent to `Mat4.invert(this, this);`
   *
   * @returns `this`
   */
  invert() {
    return ut.invert(this, this);
  }
  /**
   * Translate this {@link Mat4} by the given vector
   * Equivalent to `Mat4.translate(this, this, v);`
   *
   * @param v - The {@link Vec3} to translate by
   * @returns `this`
   */
  translate(t) {
    return ut.translate(this, this, t);
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
    return ut.rotate(this, this, t, e);
  }
  /**
   * Scales this {@link Mat4} by the dimensions in the given vec3 not using vectorization
   * Equivalent to `Mat4.scale(this, this, v);`
   *
   * @param v - The {@link Vec3} to scale the matrix by
   * @returns `this`
   */
  scale(t) {
    return ut.scale(this, this, t);
  }
  /**
   * Rotates this {@link Mat4} by the given angle around the X axis
   * Equivalent to `Mat4.rotateX(this, this, rad);`
   *
   * @param rad - the angle to rotate the matrix by
   * @returns `this`
   */
  rotateX(t) {
    return ut.rotateX(this, this, t);
  }
  /**
   * Rotates this {@link Mat4} by the given angle around the Y axis
   * Equivalent to `Mat4.rotateY(this, this, rad);`
   *
   * @param rad - the angle to rotate the matrix by
   * @returns `this`
   */
  rotateY(t) {
    return ut.rotateY(this, this, t);
  }
  /**
   * Rotates this {@link Mat4} by the given angle around the Z axis
   * Equivalent to `Mat4.rotateZ(this, this, rad);`
   *
   * @param rad - the angle to rotate the matrix by
   * @returns `this`
   */
  rotateZ(t) {
    return ut.rotateZ(this, this, t);
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
  perspectiveNO(t, e, s, c) {
    return ut.perspectiveNO(this, t, e, s, c);
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
  perspectiveZO(t, e, s, c) {
    return ut.perspectiveZO(this, t, e, s, c);
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
  orthoNO(t, e, s, c, h, f) {
    return ut.orthoNO(this, t, e, s, c, h, f);
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
  orthoZO(t, e, s, c, h, f) {
    return ut.orthoZO(this, t, e, s, c, h, f);
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
    return new ut();
  }
  /**
   * Creates a new {@link Mat4} initialized with values from an existing matrix
   * @category Static
   *
   * @param a - Matrix to clone
   * @returns A new {@link Mat4}
   */
  static clone(t) {
    return new ut(t);
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
    return new ut(...t);
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
      const s = e[1], c = e[2], h = e[3], f = e[6], p = e[7], d = e[11];
      t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = s, t[6] = e[9], t[7] = e[13], t[8] = c, t[9] = f, t[11] = e[14], t[12] = h, t[13] = p, t[14] = d;
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
    const s = e[0], c = e[1], h = e[2], f = e[3], p = e[4], d = e[5], m = e[6], x = e[7], M = e[8], E = e[9], T = e[10], w = e[11], b = e[12], S = e[13], P = e[14], q = e[15], N = s * d - c * p, F = s * m - h * p, z = s * x - f * p, B = c * m - h * d, D = c * x - f * d, it = h * x - f * m, et = M * S - E * b, lt = M * P - T * b, K = M * q - w * b, vt = E * P - T * S, mt = E * q - w * S, dt = T * q - w * P;
    let V = N * dt - F * mt + z * vt + B * K - D * lt + it * et;
    return V ? (V = 1 / V, t[0] = (d * dt - m * mt + x * vt) * V, t[1] = (h * mt - c * dt - f * vt) * V, t[2] = (S * it - P * D + q * B) * V, t[3] = (T * D - E * it - w * B) * V, t[4] = (m * K - p * dt - x * lt) * V, t[5] = (s * dt - h * K + f * lt) * V, t[6] = (P * z - b * it - q * F) * V, t[7] = (M * it - T * z + w * F) * V, t[8] = (p * mt - d * K + x * et) * V, t[9] = (c * K - s * mt - f * et) * V, t[10] = (b * D - S * z + q * N) * V, t[11] = (E * z - M * D - w * N) * V, t[12] = (d * lt - p * vt - m * et) * V, t[13] = (s * vt - c * lt + h * et) * V, t[14] = (S * F - b * B - P * N) * V, t[15] = (M * B - E * F + T * N) * V, t) : null;
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
    const s = e[0], c = e[1], h = e[2], f = e[3], p = e[4], d = e[5], m = e[6], x = e[7], M = e[8], E = e[9], T = e[10], w = e[11], b = e[12], S = e[13], P = e[14], q = e[15], N = s * d - c * p, F = s * m - h * p, z = s * x - f * p, B = c * m - h * d, D = c * x - f * d, it = h * x - f * m, et = M * S - E * b, lt = M * P - T * b, K = M * q - w * b, vt = E * P - T * S, mt = E * q - w * S, dt = T * q - w * P;
    return t[0] = d * dt - m * mt + x * vt, t[1] = h * mt - c * dt - f * vt, t[2] = S * it - P * D + q * B, t[3] = T * D - E * it - w * B, t[4] = m * K - p * dt - x * lt, t[5] = s * dt - h * K + f * lt, t[6] = P * z - b * it - q * F, t[7] = M * it - T * z + w * F, t[8] = p * mt - d * K + x * et, t[9] = c * K - s * mt - f * et, t[10] = b * D - S * z + q * N, t[11] = E * z - M * D - w * N, t[12] = d * lt - p * vt - m * et, t[13] = s * vt - c * lt + h * et, t[14] = S * F - b * B - P * N, t[15] = M * B - E * F + T * N, t;
  }
  /**
   * Calculates the determinant of a {@link Mat4}
   * @category Static
   *
   * @param a - the source matrix
   * @returns determinant of a
   */
  static determinant(t) {
    const e = t[0], s = t[1], c = t[2], h = t[3], f = t[4], p = t[5], d = t[6], m = t[7], x = t[8], M = t[9], E = t[10], T = t[11], w = t[12], b = t[13], S = t[14], P = t[15], q = e * p - s * f, N = e * d - c * f, F = s * d - c * p, z = x * b - M * w, B = x * S - E * w, D = M * S - E * b, it = e * D - s * B + c * z, et = f * D - p * B + d * z, lt = x * F - M * N + E * q, K = w * F - b * N + S * q;
    return m * it - h * et + P * lt - T * K;
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
    const c = e[0], h = e[1], f = e[2], p = e[3], d = e[4], m = e[5], x = e[6], M = e[7], E = e[8], T = e[9], w = e[10], b = e[11], S = e[12], P = e[13], q = e[14], N = e[15];
    let F = s[0], z = s[1], B = s[2], D = s[3];
    return t[0] = F * c + z * d + B * E + D * S, t[1] = F * h + z * m + B * T + D * P, t[2] = F * f + z * x + B * w + D * q, t[3] = F * p + z * M + B * b + D * N, F = s[4], z = s[5], B = s[6], D = s[7], t[4] = F * c + z * d + B * E + D * S, t[5] = F * h + z * m + B * T + D * P, t[6] = F * f + z * x + B * w + D * q, t[7] = F * p + z * M + B * b + D * N, F = s[8], z = s[9], B = s[10], D = s[11], t[8] = F * c + z * d + B * E + D * S, t[9] = F * h + z * m + B * T + D * P, t[10] = F * f + z * x + B * w + D * q, t[11] = F * p + z * M + B * b + D * N, F = s[12], z = s[13], B = s[14], D = s[15], t[12] = F * c + z * d + B * E + D * S, t[13] = F * h + z * m + B * T + D * P, t[14] = F * f + z * x + B * w + D * q, t[15] = F * p + z * M + B * b + D * N, t;
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
    const c = s[0], h = s[1], f = s[2];
    if (e === t)
      t[12] = e[0] * c + e[4] * h + e[8] * f + e[12], t[13] = e[1] * c + e[5] * h + e[9] * f + e[13], t[14] = e[2] * c + e[6] * h + e[10] * f + e[14], t[15] = e[3] * c + e[7] * h + e[11] * f + e[15];
    else {
      const p = e[0], d = e[1], m = e[2], x = e[3], M = e[4], E = e[5], T = e[6], w = e[7], b = e[8], S = e[9], P = e[10], q = e[11];
      t[0] = p, t[1] = d, t[2] = m, t[3] = x, t[4] = M, t[5] = E, t[6] = T, t[7] = w, t[8] = b, t[9] = S, t[10] = P, t[11] = q, t[12] = p * c + M * h + b * f + e[12], t[13] = d * c + E * h + S * f + e[13], t[14] = m * c + T * h + P * f + e[14], t[15] = x * c + w * h + q * f + e[15];
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
    const c = s[0], h = s[1], f = s[2];
    return t[0] = e[0] * c, t[1] = e[1] * c, t[2] = e[2] * c, t[3] = e[3] * c, t[4] = e[4] * h, t[5] = e[5] * h, t[6] = e[6] * h, t[7] = e[7] * h, t[8] = e[8] * f, t[9] = e[9] * f, t[10] = e[10] * f, t[11] = e[11] * f, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
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
  static rotate(t, e, s, c) {
    let h = c[0], f = c[1], p = c[2], d = Math.sqrt(h * h + f * f + p * p);
    if (d < nt)
      return null;
    d = 1 / d, h *= d, f *= d, p *= d;
    const m = Math.sin(s), x = Math.cos(s), M = 1 - x, E = e[0], T = e[1], w = e[2], b = e[3], S = e[4], P = e[5], q = e[6], N = e[7], F = e[8], z = e[9], B = e[10], D = e[11], it = h * h * M + x, et = f * h * M + p * m, lt = p * h * M - f * m, K = h * f * M - p * m, vt = f * f * M + x, mt = p * f * M + h * m, dt = h * p * M + f * m, V = f * p * M - h * m, Qt = p * p * M + x;
    return t[0] = E * it + S * et + F * lt, t[1] = T * it + P * et + z * lt, t[2] = w * it + q * et + B * lt, t[3] = b * it + N * et + D * lt, t[4] = E * K + S * vt + F * mt, t[5] = T * K + P * vt + z * mt, t[6] = w * K + q * vt + B * mt, t[7] = b * K + N * vt + D * mt, t[8] = E * dt + S * V + F * Qt, t[9] = T * dt + P * V + z * Qt, t[10] = w * dt + q * V + B * Qt, t[11] = b * dt + N * V + D * Qt, e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t;
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
    let c = Math.sin(s), h = Math.cos(s), f = e[4], p = e[5], d = e[6], m = e[7], x = e[8], M = e[9], E = e[10], T = e[11];
    return e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[4] = f * h + x * c, t[5] = p * h + M * c, t[6] = d * h + E * c, t[7] = m * h + T * c, t[8] = x * h - f * c, t[9] = M * h - p * c, t[10] = E * h - d * c, t[11] = T * h - m * c, t;
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
    let c = Math.sin(s), h = Math.cos(s), f = e[0], p = e[1], d = e[2], m = e[3], x = e[8], M = e[9], E = e[10], T = e[11];
    return e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = f * h - x * c, t[1] = p * h - M * c, t[2] = d * h - E * c, t[3] = m * h - T * c, t[8] = f * c + x * h, t[9] = p * c + M * h, t[10] = d * c + E * h, t[11] = m * c + T * h, t;
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
    let c = Math.sin(s), h = Math.cos(s), f = e[0], p = e[1], d = e[2], m = e[3], x = e[4], M = e[5], E = e[6], T = e[7];
    return e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = f * h + x * c, t[1] = p * h + M * c, t[2] = d * h + E * c, t[3] = m * h + T * c, t[4] = x * h - f * c, t[5] = M * h - p * c, t[6] = E * h - d * c, t[7] = T * h - m * c, t;
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
    let c = s[0], h = s[1], f = s[2], p = Math.sqrt(c * c + h * h + f * f);
    if (p < nt)
      return null;
    p = 1 / p, c *= p, h *= p, f *= p;
    const d = Math.sin(e), m = Math.cos(e), x = 1 - m;
    return t[0] = c * c * x + m, t[1] = h * c * x + f * d, t[2] = f * c * x - h * d, t[3] = 0, t[4] = c * h * x - f * d, t[5] = h * h * x + m, t[6] = f * h * x + c * d, t[7] = 0, t[8] = c * f * x + h * d, t[9] = h * f * x - c * d, t[10] = f * f * x + m, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
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
    let s = Math.sin(e), c = Math.cos(e);
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = c, t[6] = s, t[7] = 0, t[8] = 0, t[9] = -s, t[10] = c, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
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
    let s = Math.sin(e), c = Math.cos(e);
    return t[0] = c, t[1] = 0, t[2] = -s, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = s, t[9] = 0, t[10] = c, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
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
    const s = Math.sin(e), c = Math.cos(e);
    return t[0] = c, t[1] = s, t[2] = 0, t[3] = 0, t[4] = -s, t[5] = c, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
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
    const c = e[0], h = e[1], f = e[2], p = e[3], d = c + c, m = h + h, x = f + f, M = c * d, E = c * m, T = c * x, w = h * m, b = h * x, S = f * x, P = p * d, q = p * m, N = p * x;
    return t[0] = 1 - (w + S), t[1] = E + N, t[2] = T - q, t[3] = 0, t[4] = E - N, t[5] = 1 - (M + S), t[6] = b + P, t[7] = 0, t[8] = T + q, t[9] = b - P, t[10] = 1 - (M + w), t[11] = 0, t[12] = s[0], t[13] = s[1], t[14] = s[2], t[15] = 1, t;
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
    let s = new X();
    const c = -e[0], h = -e[1], f = -e[2], p = e[3], d = e[4], m = e[5], x = e[6], M = e[7];
    let E = c * c + h * h + f * f + p * p;
    return E > 0 ? (s[0] = (d * p + M * c + m * f - x * h) * 2 / E, s[1] = (m * p + M * h + x * c - d * f) * 2 / E, s[2] = (x * p + M * f + d * h - m * c) * 2 / E) : (s[0] = (d * p + M * c + m * f - x * h) * 2, s[1] = (m * p + M * h + x * c - d * f) * 2, s[2] = (x * p + M * f + d * h - m * c) * 2), ut.fromRotationTranslation(t, e, s), t;
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
    const s = e[0], c = e[1], h = e[2], f = e[4], p = e[5], d = e[6], m = e[8], x = e[9], M = e[10];
    return t[0] = Math.sqrt(s * s + c * c + h * h), t[1] = Math.sqrt(f * f + p * p + d * d), t[2] = Math.sqrt(m * m + x * x + M * M), t;
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
    ut.getScaling(Fr, e);
    const s = 1 / Fr[0], c = 1 / Fr[1], h = 1 / Fr[2], f = e[0] * s, p = e[1] * c, d = e[2] * h, m = e[4] * s, x = e[5] * c, M = e[6] * h, E = e[8] * s, T = e[9] * c, w = e[10] * h, b = f + x + w;
    let S = 0;
    return b > 0 ? (S = Math.sqrt(b + 1) * 2, t[3] = 0.25 * S, t[0] = (M - T) / S, t[1] = (E - d) / S, t[2] = (p - m) / S) : f > x && f > w ? (S = Math.sqrt(1 + f - x - w) * 2, t[3] = (M - T) / S, t[0] = 0.25 * S, t[1] = (p + m) / S, t[2] = (E + d) / S) : x > w ? (S = Math.sqrt(1 + x - f - w) * 2, t[3] = (E - d) / S, t[0] = (p + m) / S, t[1] = 0.25 * S, t[2] = (M + T) / S) : (S = Math.sqrt(1 + w - f - x) * 2, t[3] = (p - m) / S, t[0] = (E + d) / S, t[1] = (M + T) / S, t[2] = 0.25 * S), t;
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
  static decompose(t, e, s, c) {
    e[0] = c[12], e[1] = c[13], e[2] = c[14];
    const h = c[0], f = c[1], p = c[2], d = c[4], m = c[5], x = c[6], M = c[8], E = c[9], T = c[10];
    s[0] = Math.sqrt(h * h + f * f + p * p), s[1] = Math.sqrt(d * d + m * m + x * x), s[2] = Math.sqrt(M * M + E * E + T * T);
    const w = 1 / s[0], b = 1 / s[1], S = 1 / s[2], P = h * w, q = f * b, N = p * S, F = d * w, z = m * b, B = x * S, D = M * w, it = E * b, et = T * S, lt = P + z + et;
    let K = 0;
    return lt > 0 ? (K = Math.sqrt(lt + 1) * 2, t[3] = 0.25 * K, t[0] = (B - it) / K, t[1] = (D - N) / K, t[2] = (q - F) / K) : P > z && P > et ? (K = Math.sqrt(1 + P - z - et) * 2, t[3] = (B - it) / K, t[0] = 0.25 * K, t[1] = (q + F) / K, t[2] = (D + N) / K) : z > et ? (K = Math.sqrt(1 + z - P - et) * 2, t[3] = (D - N) / K, t[0] = (q + F) / K, t[1] = 0.25 * K, t[2] = (B + it) / K) : (K = Math.sqrt(1 + et - P - z) * 2, t[3] = (q - F) / K, t[0] = (D + N) / K, t[1] = (B + it) / K, t[2] = 0.25 * K), t;
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
  static fromRotationTranslationScale(t, e, s, c) {
    const h = e[0], f = e[1], p = e[2], d = e[3], m = h + h, x = f + f, M = p + p, E = h * m, T = h * x, w = h * M, b = f * x, S = f * M, P = p * M, q = d * m, N = d * x, F = d * M, z = c[0], B = c[1], D = c[2];
    return t[0] = (1 - (b + P)) * z, t[1] = (T + F) * z, t[2] = (w - N) * z, t[3] = 0, t[4] = (T - F) * B, t[5] = (1 - (E + P)) * B, t[6] = (S + q) * B, t[7] = 0, t[8] = (w + N) * D, t[9] = (S - q) * D, t[10] = (1 - (E + b)) * D, t[11] = 0, t[12] = s[0], t[13] = s[1], t[14] = s[2], t[15] = 1, t;
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
  static fromRotationTranslationScaleOrigin(t, e, s, c, h) {
    const f = e[0], p = e[1], d = e[2], m = e[3], x = f + f, M = p + p, E = d + d, T = f * x, w = f * M, b = f * E, S = p * M, P = p * E, q = d * E, N = m * x, F = m * M, z = m * E, B = c[0], D = c[1], it = c[2], et = h[0], lt = h[1], K = h[2], vt = (1 - (S + q)) * B, mt = (w + z) * B, dt = (b - F) * B, V = (w - z) * D, Qt = (1 - (T + q)) * D, Ht = (P + N) * D, Ft = (b + F) * it, He = (P - N) * it, Nn = (1 - (T + S)) * it;
    return t[0] = vt, t[1] = mt, t[2] = dt, t[3] = 0, t[4] = V, t[5] = Qt, t[6] = Ht, t[7] = 0, t[8] = Ft, t[9] = He, t[10] = Nn, t[11] = 0, t[12] = s[0] + et - (vt * et + V * lt + Ft * K), t[13] = s[1] + lt - (mt * et + Qt * lt + He * K), t[14] = s[2] + K - (dt * et + Ht * lt + Nn * K), t[15] = 1, t;
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
    const s = e[0], c = e[1], h = e[2], f = e[3], p = s + s, d = c + c, m = h + h, x = s * p, M = c * p, E = c * d, T = h * p, w = h * d, b = h * m, S = f * p, P = f * d, q = f * m;
    return t[0] = 1 - E - b, t[1] = M + q, t[2] = T - P, t[3] = 0, t[4] = M - q, t[5] = 1 - x - b, t[6] = w + S, t[7] = 0, t[8] = T + P, t[9] = w - S, t[10] = 1 - x - E, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
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
  static frustum(t, e, s, c, h, f, p) {
    const d = 1 / (s - e), m = 1 / (h - c), x = 1 / (f - p);
    return t[0] = f * 2 * d, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = f * 2 * m, t[6] = 0, t[7] = 0, t[8] = (s + e) * d, t[9] = (h + c) * m, t[10] = (p + f) * x, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = p * f * 2 * x, t[15] = 0, t;
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
  static perspectiveNO(t, e, s, c, h) {
    const f = 1 / Math.tan(e / 2);
    if (t[0] = f / s, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = f, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = -1, t[12] = 0, t[13] = 0, t[15] = 0, h != null && h !== 1 / 0) {
      const p = 1 / (c - h);
      t[10] = (h + c) * p, t[14] = 2 * h * c * p;
    } else
      t[10] = -1, t[14] = -2 * c;
    return t;
  }
  /**
   * Alias for {@link Mat4.perspectiveNO}
   * @category Static
   * @deprecated Use {@link Mat4.perspectiveNO} or {@link Mat4.perspectiveZO} explicitly
   */
  static perspective(t, e, s, c, h) {
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
  static perspectiveZO(t, e, s, c, h) {
    const f = 1 / Math.tan(e / 2);
    if (t[0] = f / s, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = f, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = -1, t[12] = 0, t[13] = 0, t[15] = 0, h != null && h !== 1 / 0) {
      const p = 1 / (c - h);
      t[10] = h * p, t[14] = h * c * p;
    } else
      t[10] = -1, t[14] = -c;
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
  static perspectiveFromFieldOfView(t, e, s, c) {
    const h = Math.tan(e.upDegrees * Math.PI / 180), f = Math.tan(e.downDegrees * Math.PI / 180), p = Math.tan(e.leftDegrees * Math.PI / 180), d = Math.tan(e.rightDegrees * Math.PI / 180), m = 2 / (p + d), x = 2 / (h + f);
    return t[0] = m, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = x, t[6] = 0, t[7] = 0, t[8] = -((p - d) * m * 0.5), t[9] = (h - f) * x * 0.5, t[10] = c / (s - c), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = c * s / (s - c), t[15] = 0, t;
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
  static orthoNO(t, e, s, c, h, f, p) {
    const d = 1 / (e - s), m = 1 / (c - h), x = 1 / (f - p);
    return t[0] = -2 * d, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * m, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * x, t[11] = 0, t[12] = (e + s) * d, t[13] = (h + c) * m, t[14] = (p + f) * x, t[15] = 1, t;
  }
  /**
   * Alias for {@link Mat4.orthoNO}
   * @category Static
   * @deprecated Use {@link Mat4.orthoNO} or {@link Mat4.orthoZO} explicitly
   */
  static ortho(t, e, s, c, h, f, p) {
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
  static orthoZO(t, e, s, c, h, f, p) {
    const d = 1 / (e - s), m = 1 / (c - h), x = 1 / (f - p);
    return t[0] = -2 * d, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * m, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = x, t[11] = 0, t[12] = (e + s) * d, t[13] = (h + c) * m, t[14] = f * x, t[15] = 1, t;
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
  static lookAt(t, e, s, c) {
    const h = e[0], f = e[1], p = e[2], d = c[0], m = c[1], x = c[2], M = s[0], E = s[1], T = s[2];
    if (Math.abs(h - M) < nt && Math.abs(f - E) < nt && Math.abs(p - T) < nt)
      return ut.identity(t);
    let w = h - M, b = f - E, S = p - T, P = 1 / Math.sqrt(w * w + b * b + S * S);
    w *= P, b *= P, S *= P;
    let q = m * S - x * b, N = x * w - d * S, F = d * b - m * w;
    P = Math.sqrt(q * q + N * N + F * F), P ? (P = 1 / P, q *= P, N *= P, F *= P) : (q = 0, N = 0, F = 0);
    let z = b * F - S * N, B = S * q - w * F, D = w * N - b * q;
    return P = Math.sqrt(z * z + B * B + D * D), P ? (P = 1 / P, z *= P, B *= P, D *= P) : (z = 0, B = 0, D = 0), t[0] = q, t[1] = z, t[2] = w, t[3] = 0, t[4] = N, t[5] = B, t[6] = b, t[7] = 0, t[8] = F, t[9] = D, t[10] = S, t[11] = 0, t[12] = -(q * h + N * f + F * p), t[13] = -(z * h + B * f + D * p), t[14] = -(w * h + b * f + S * p), t[15] = 1, t;
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
  static targetTo(t, e, s, c) {
    const h = e[0], f = e[1], p = e[2], d = c[0], m = c[1], x = c[2];
    let M = h - s[0], E = f - s[1], T = p - s[2], w = M * M + E * E + T * T;
    w > 0 && (w = 1 / Math.sqrt(w), M *= w, E *= w, T *= w);
    let b = m * T - x * E, S = x * M - d * T, P = d * E - m * M;
    return w = b * b + S * S + P * P, w > 0 && (w = 1 / Math.sqrt(w), b *= w, S *= w, P *= w), t[0] = b, t[1] = S, t[2] = P, t[3] = 0, t[4] = E * P - T * S, t[5] = T * b - M * P, t[6] = M * S - E * b, t[7] = 0, t[8] = M, t[9] = E, t[10] = T, t[11] = 0, t[12] = h, t[13] = f, t[14] = p, t[15] = 1, t;
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
  static multiplyScalarAndAdd(t, e, s, c) {
    return t[0] = e[0] + s[0] * c, t[1] = e[1] + s[1] * c, t[2] = e[2] + s[2] * c, t[3] = e[3] + s[3] * c, t[4] = e[4] + s[4] * c, t[5] = e[5] + s[5] * c, t[6] = e[6] + s[6] * c, t[7] = e[7] + s[7] * c, t[8] = e[8] + s[8] * c, t[9] = e[9] + s[9] * c, t[10] = e[10] + s[10] * c, t[11] = e[11] + s[11] * c, t[12] = e[12] + s[12] * c, t[13] = e[13] + s[13] * c, t[14] = e[14] + s[14] * c, t[15] = e[15] + s[15] * c, t;
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
    const s = t[0], c = t[1], h = t[2], f = t[3], p = t[4], d = t[5], m = t[6], x = t[7], M = t[8], E = t[9], T = t[10], w = t[11], b = t[12], S = t[13], P = t[14], q = t[15], N = e[0], F = e[1], z = e[2], B = e[3], D = e[4], it = e[5], et = e[6], lt = e[7], K = e[8], vt = e[9], mt = e[10], dt = e[11], V = e[12], Qt = e[13], Ht = e[14], Ft = e[15];
    return Math.abs(s - N) <= nt * Math.max(1, Math.abs(s), Math.abs(N)) && Math.abs(c - F) <= nt * Math.max(1, Math.abs(c), Math.abs(F)) && Math.abs(h - z) <= nt * Math.max(1, Math.abs(h), Math.abs(z)) && Math.abs(f - B) <= nt * Math.max(1, Math.abs(f), Math.abs(B)) && Math.abs(p - D) <= nt * Math.max(1, Math.abs(p), Math.abs(D)) && Math.abs(d - it) <= nt * Math.max(1, Math.abs(d), Math.abs(it)) && Math.abs(m - et) <= nt * Math.max(1, Math.abs(m), Math.abs(et)) && Math.abs(x - lt) <= nt * Math.max(1, Math.abs(x), Math.abs(lt)) && Math.abs(M - K) <= nt * Math.max(1, Math.abs(M), Math.abs(K)) && Math.abs(E - vt) <= nt * Math.max(1, Math.abs(E), Math.abs(vt)) && Math.abs(T - mt) <= nt * Math.max(1, Math.abs(T), Math.abs(mt)) && Math.abs(w - dt) <= nt * Math.max(1, Math.abs(w), Math.abs(dt)) && Math.abs(b - V) <= nt * Math.max(1, Math.abs(b), Math.abs(V)) && Math.abs(S - Qt) <= nt * Math.max(1, Math.abs(S), Math.abs(Qt)) && Math.abs(P - Ht) <= nt * Math.max(1, Math.abs(P), Math.abs(Ht)) && Math.abs(q - Ft) <= nt * Math.max(1, Math.abs(q), Math.abs(Ft));
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
const Fr = new X();
ut.prototype.mul = ut.prototype.multiply;
ut.sub = ut.subtract;
ut.mul = ut.multiply;
ut.perspective = ut.perspectiveNO;
ut.ortho = ut.orthoNO;
const ct = ut;
class $ extends Float32Array {
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
    const t = this[0], e = this[1], s = this[2], c = this[3];
    return Math.sqrt(t * t + e * e + s * s + c * c);
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
    return $.str(this);
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
    return $.distance(this, t);
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
    return $.squaredDistance(this, t);
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
    return $.normalize(this, this);
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
    return new $();
  }
  /**
   * Creates a new {@link Vec4} initialized with values from an existing vector
   * @category Static
   *
   * @param a - vector to clone
   * @returns a new 4D vector
   */
  static clone(t) {
    return new $(t);
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
  static fromValues(t, e, s, c) {
    return new $(t, e, s, c);
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
  static set(t, e, s, c, h) {
    return t[0] = e, t[1] = s, t[2] = c, t[3] = h, t;
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
  static scaleAndAdd(t, e, s, c) {
    return t[0] = e[0] + s[0] * c, t[1] = e[1] + s[1] * c, t[2] = e[2] + s[2] * c, t[3] = e[3] + s[3] * c, t;
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
    const s = e[0] - t[0], c = e[1] - t[1], h = e[2] - t[2], f = e[3] - t[3];
    return Math.hypot(s, c, h, f);
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
    const s = e[0] - t[0], c = e[1] - t[1], h = e[2] - t[2], f = e[3] - t[3];
    return s * s + c * c + h * h + f * f;
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
    const e = t[0], s = t[1], c = t[2], h = t[3];
    return Math.sqrt(e * e + s * s + c * c + h * h);
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
    const e = t[0], s = t[1], c = t[2], h = t[3];
    return e * e + s * s + c * c + h * h;
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
    const s = e[0], c = e[1], h = e[2], f = e[3];
    let p = s * s + c * c + h * h + f * f;
    return p > 0 && (p = 1 / Math.sqrt(p)), t[0] = s * p, t[1] = c * p, t[2] = h * p, t[3] = f * p, t;
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
  static cross(t, e, s, c) {
    const h = s[0] * c[1] - s[1] * c[0], f = s[0] * c[2] - s[2] * c[0], p = s[0] * c[3] - s[3] * c[0], d = s[1] * c[2] - s[2] * c[1], m = s[1] * c[3] - s[3] * c[1], x = s[2] * c[3] - s[3] * c[2], M = e[0], E = e[1], T = e[2], w = e[3];
    return t[0] = E * x - T * m + w * d, t[1] = -(M * x) + T * p - w * f, t[2] = M * m - E * p + w * h, t[3] = -(M * d) + E * f - T * h, t;
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
  static lerp(t, e, s, c) {
    const h = e[0], f = e[1], p = e[2], d = e[3];
    return t[0] = h + c * (s[0] - h), t[1] = f + c * (s[1] - f), t[2] = p + c * (s[2] - p), t[3] = d + c * (s[3] - d), t;
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
    const c = e[0], h = e[1], f = e[2], p = e[3];
    return t[0] = s[0] * c + s[4] * h + s[8] * f + s[12] * p, t[1] = s[1] * c + s[5] * h + s[9] * f + s[13] * p, t[2] = s[2] * c + s[6] * h + s[10] * f + s[14] * p, t[3] = s[3] * c + s[7] * h + s[11] * f + s[15] * p, t;
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
    const c = e[0], h = e[1], f = e[2], p = s[0], d = s[1], m = s[2], x = s[3], M = x * c + d * f - m * h, E = x * h + m * c - p * f, T = x * f + p * h - d * c, w = -p * c - d * h - m * f;
    return t[0] = M * x + w * -p + E * -m - T * -d, t[1] = E * x + w * -d + T * -p - M * -m, t[2] = T * x + w * -m + M * -d - E * -p, t[3] = e[3], t;
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
    const s = t[0], c = t[1], h = t[2], f = t[3], p = e[0], d = e[1], m = e[2], x = e[3];
    return Math.abs(s - p) <= nt * Math.max(1, Math.abs(s), Math.abs(p)) && Math.abs(c - d) <= nt * Math.max(1, Math.abs(c), Math.abs(d)) && Math.abs(h - m) <= nt * Math.max(1, Math.abs(h), Math.abs(m)) && Math.abs(f - x) <= nt * Math.max(1, Math.abs(f), Math.abs(x));
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
const qe = $;
class J extends Float32Array {
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
    const t = this[0], e = this[1], s = this[2], c = this[3];
    return Math.sqrt(t * t + e * e + s * s + c * c);
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
    return J.str(this);
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
    return J.multiply(this, this, t);
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
    return J.rotateX(this, this, t);
  }
  /**
   * Rotates `this` by the given angle about the Y axis
   * Equivalent to `Quat.rotateY(this, this, rad);`
   *
   * @param rad - angle (in radians) to rotate
   * @returns `this`
   */
  rotateY(t) {
    return J.rotateY(this, this, t);
  }
  /**
   * Rotates `this` by the given angle about the Z axis
   * Equivalent to `Quat.rotateZ(this, this, rad);`
   *
   * @param rad - angle (in radians) to rotate
   * @returns `this`
   */
  rotateZ(t) {
    return J.rotateZ(this, this, t);
  }
  /**
   * Inverts `this`
   * Equivalent to `Quat.invert(this, this);`
   *
   * @returns `this`
   */
  invert() {
    return J.invert(this, this);
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
    return J.dot(this, t);
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
    return new J();
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
    const c = Math.sin(s);
    return t[0] = c * e[0], t[1] = c * e[1], t[2] = c * e[2], t[3] = Math.cos(s), t;
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
    const s = Math.acos(e[3]) * 2, c = Math.sin(s / 2);
    return c > nt ? (t[0] = e[0] / c, t[1] = e[1] / c, t[2] = e[2] / c) : (t[0] = 1, t[1] = 0, t[2] = 0), s;
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
    const s = J.dot(t, e);
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
    const c = e[0], h = e[1], f = e[2], p = e[3], d = s[0], m = s[1], x = s[2], M = s[3];
    return t[0] = c * M + p * d + h * x - f * m, t[1] = h * M + p * m + f * d - c * x, t[2] = f * M + p * x + c * m - h * d, t[3] = p * M - c * d - h * m - f * x, t;
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
    const c = e[0], h = e[1], f = e[2], p = e[3], d = Math.sin(s), m = Math.cos(s);
    return t[0] = c * m + p * d, t[1] = h * m + f * d, t[2] = f * m - h * d, t[3] = p * m - c * d, t;
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
    const c = e[0], h = e[1], f = e[2], p = e[3], d = Math.sin(s), m = Math.cos(s);
    return t[0] = c * m - f * d, t[1] = h * m + p * d, t[2] = f * m + c * d, t[3] = p * m - h * d, t;
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
    const c = e[0], h = e[1], f = e[2], p = e[3], d = Math.sin(s), m = Math.cos(s);
    return t[0] = c * m + h * d, t[1] = h * m - c * d, t[2] = f * m + p * d, t[3] = p * m - f * d, t;
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
    const s = e[0], c = e[1], h = e[2];
    return t[0] = s, t[1] = c, t[2] = h, t[3] = Math.sqrt(Math.abs(1 - s * s - c * c - h * h)), t;
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
    const s = e[0], c = e[1], h = e[2], f = e[3], p = Math.sqrt(s * s + c * c + h * h), d = Math.exp(f), m = p > 0 ? d * Math.sin(p) / p : 0;
    return t[0] = s * m, t[1] = c * m, t[2] = h * m, t[3] = d * Math.cos(p), t;
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
    const s = e[0], c = e[1], h = e[2], f = e[3], p = Math.sqrt(s * s + c * c + h * h), d = p > 0 ? Math.atan2(p, f) / p : 0;
    return t[0] = s * d, t[1] = c * d, t[2] = h * d, t[3] = 0.5 * Math.log(s * s + c * c + h * h + f * f), t;
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
    return J.ln(t, e), J.scale(t, t, s), J.exp(t, t), t;
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
  static slerp(t, e, s, c) {
    const h = e[0], f = e[1], p = e[2], d = e[3];
    let m = s[0], x = s[1], M = s[2], E = s[3], T, w, b = h * m + f * x + p * M + d * E;
    if (b < 0 && (b = -b, m = -m, x = -x, M = -M, E = -E), 1 - b > nt) {
      const S = Math.acos(b), P = Math.sin(S);
      T = Math.sin((1 - c) * S) / P, w = Math.sin(c * S) / P;
    } else
      T = 1 - c, w = c;
    return t[0] = T * h + w * m, t[1] = T * f + w * x, t[2] = T * p + w * M, t[3] = T * d + w * E, t;
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
    const s = e[0], c = e[1], h = e[2], f = e[3], p = s * s + c * c + h * h + f * f, d = p ? 1 / p : 0;
    return t[0] = -s * d, t[1] = -c * d, t[2] = -h * d, t[3] = f * d, t;
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
    let c;
    if (s > 0)
      c = Math.sqrt(s + 1), t[3] = 0.5 * c, c = 0.5 / c, t[0] = (e[5] - e[7]) * c, t[1] = (e[6] - e[2]) * c, t[2] = (e[1] - e[3]) * c;
    else {
      let h = 0;
      e[4] > e[0] && (h = 1), e[8] > e[h * 3 + h] && (h = 2);
      let f = (h + 1) % 3, p = (h + 2) % 3;
      c = Math.sqrt(e[h * 3 + h] - e[f * 3 + f] - e[p * 3 + p] + 1), t[h] = 0.5 * c, c = 0.5 / c, t[3] = (e[f * 3 + p] - e[p * 3 + f]) * c, t[f] = (e[f * 3 + h] + e[h * 3 + f]) * c, t[p] = (e[p * 3 + h] + e[h * 3 + p]) * c;
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
  static fromEuler(t, e, s, c) {
    let h = 0.5 * Math.PI / 180;
    e *= h, s *= h, c *= h;
    let f = Math.sin(e), p = Math.cos(e), d = Math.sin(s), m = Math.cos(s), x = Math.sin(c), M = Math.cos(c);
    return t[0] = f * m * M - p * d * x, t[1] = p * d * M + f * m * x, t[2] = p * m * x - f * d * M, t[3] = p * m * M + f * d * x, t;
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
    return new J(t);
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
  static fromValues(t, e, s, c) {
    return new J(t, e, s, c);
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
  static set(t, e, s, c, h) {
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
  static lerp(t, e, s, c) {
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
    let c = X.dot(e, s);
    return c < -0.999999 ? (X.cross(vn, jp, e), X.len(vn) < 1e-6 && X.cross(vn, td, e), X.normalize(vn, vn), J.setAxisAngle(t, vn, Math.PI), t) : c > 0.999999 ? (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t) : (X.cross(vn, e, s), t[0] = vn[0], t[1] = vn[1], t[2] = vn[2], t[3] = 1 + c, J.normalize(t, t));
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
  static sqlerp(t, e, s, c, h, f) {
    return J.slerp(ka, e, h, f), J.slerp(Ha, s, c, f), J.slerp(t, ka, Ha, 2 * f * (1 - f)), t;
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
  static setAxes(t, e, s, c) {
    return xn[0] = s[0], xn[3] = s[1], xn[6] = s[2], xn[1] = c[0], xn[4] = c[1], xn[7] = c[2], xn[2] = -e[0], xn[5] = -e[1], xn[8] = -e[2], J.normalize(t, J.fromMat3(t, xn));
  }
}
const ka = new J(), Ha = new J(), xn = new Rt(), vn = new X(), jp = new X(1, 0, 0), td = new X(0, 1, 0);
J.set = $.set;
J.add = $.add;
J.lerp = $.lerp;
J.normalize = $.normalize;
J.squaredLength = $.squaredLength;
J.sqrLen = $.squaredLength;
J.exactEquals = $.exactEquals;
J.equals = $.equals;
J.magnitude = $.magnitude;
J.prototype.mul = J.prototype.multiply;
J.mul = J.multiply;
J.mag = J.magnitude;
J.length = J.magnitude;
J.len = J.magnitude;
const Bn = J;
class ht extends Float32Array {
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
    return ht.str(this);
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
    return ht.distance(this, t);
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
    return ht.squaredDistance(this, t);
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
    return ht.normalize(this, this);
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
    return new ht();
  }
  /**
   * Creates a new {@link Vec2} initialized with values from an existing vector
   * @category Static
   *
   * @param a - Vector to clone
   * @returns A new 2D vector
   */
  static clone(t) {
    return new ht(t);
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
    return new ht(t, e);
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
  static scaleAndAdd(t, e, s, c) {
    return t[0] = e[0] + s[0] * c, t[1] = e[1] + s[1] * c, t;
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
    const s = e[0] - t[0], c = e[1] - t[1];
    return s * s + c * c;
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
    const s = e[0], c = e[1];
    let h = s * s + c * c;
    return h > 0 && (h = 1 / Math.sqrt(h)), t[0] = e[0] * h, t[1] = e[1] * h, t;
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
    const c = e[0] * s[1] - e[1] * s[0];
    return t[0] = t[1] = 0, t[2] = c, t;
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
  static lerp(t, e, s, c) {
    const h = e[0], f = e[1];
    return t[0] = h + c * (s[0] - h), t[1] = f + c * (s[1] - f), t;
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
    const c = e[0], h = e[1];
    return t[0] = s[0] * c + s[2] * h, t[1] = s[1] * c + s[3] * h, t;
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
    const c = e[0], h = e[1];
    return t[0] = s[0] * c + s[2] * h + s[4], t[1] = s[1] * c + s[3] * h + s[5], t;
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
    const c = e[0], h = e[1];
    return t[0] = s[0] * c + s[3] * h + s[6], t[1] = s[1] * c + s[4] * h + s[7], t;
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
    const c = e[0], h = e[1];
    return t[0] = s[0] * c + s[4] * h + s[12], t[1] = s[1] * c + s[5] * h + s[13], t;
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
  static rotate(t, e, s, c) {
    const h = e[0] - s[0], f = e[1] - s[1], p = Math.sin(c), d = Math.cos(c);
    return t[0] = h * d - f * p + s[0], t[1] = h * p + f * d + s[1], t;
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
    const s = t[0], c = t[1], h = e[0], f = e[1], p = Math.sqrt(s * s + c * c) * Math.sqrt(h * h + f * f), d = p && (s * h + c * f) / p;
    return Math.acos(Math.min(Math.max(d, -1), 1));
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
    const s = t[0], c = t[1], h = e[0], f = e[1];
    return Math.abs(s - h) <= nt * Math.max(1, Math.abs(s), Math.abs(h)) && Math.abs(c - f) <= nt * Math.max(1, Math.abs(c), Math.abs(f));
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
ht.prototype.sub = ht.prototype.subtract;
ht.prototype.mul = ht.prototype.multiply;
ht.prototype.div = ht.prototype.divide;
ht.prototype.dist = ht.prototype.distance;
ht.prototype.sqrDist = ht.prototype.squaredDistance;
ht.sub = ht.subtract;
ht.mul = ht.multiply;
ht.div = ht.divide;
ht.dist = ht.distance;
ht.sqrDist = ht.squaredDistance;
ht.sqrLen = ht.squaredLength;
ht.mag = ht.magnitude;
ht.length = ht.magnitude;
ht.len = ht.magnitude;
const Fn = ht;
class ke extends Br {
  constructor() {
    super();
  }
  name;
  matrix = ct.create();
  location;
  findUniformInfo() {
    return Ne.current.m_uniformLocations[this.name];
  }
  update() {
    Ne.current.gl.uniformMatrix4fv(this.location, !1, this.matrix);
  }
  updateMatrix(t) {
    this.matrix = t;
  }
}
class nd extends Set {
  constructor() {
    super();
  }
}
class ed extends ke {
  constructor(t) {
    super(), this.modelMatrix = t;
  }
  name = "uNormalMatrix";
  normalMatrix = qr.create();
  update() {
    const t = this.modelMatrix.matrix, e = qr.fromMat4(this.normalMatrix, t);
    qr.invert(e, e), qr.transpose(e, e);
  }
  tie(t) {
    const e = this.findUniformInfo();
    if (!e) return;
    this.location = e.location, this.update(), t.uniformMatrix3fv(this.location, !1, this.normalMatrix);
  }
}
class Wn extends ke {
  static current;
  defaultUniform;
  constructor(t) {
    super(), this.defaultUniform = t;
    const e = H.fromValues(0, 5, 5), s = H.fromValues(0, 0, 0), c = H.fromValues(0, 1, 0), h = ct.create();
    ct.lookAt(h, e, s, c), this.matrix = h;
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
    const s = [100, 100], c = this.matrix, h = H.fromValues(c[0], c[4], c[8]), f = H.fromValues(c[1], c[5], c[9]), p = H.fromValues(c[2], c[6], c[10]), d = Fn.length(e) / s[1] * Math.PI * 2;
    Fn.normalize(e, e), H.normalize(h, h);
    for (let S = 0; S < h.length; ++S)
      h[S] *= e[0];
    H.normalize(f, f);
    for (let S = 0; S < f.length; ++S)
      f[S] *= e[1];
    const m = H.create();
    H.add(m, m, h), H.add(m, m, f);
    const x = H.clone(p);
    H.cross(x, x, m), H.normalize(x, x);
    const M = Bn.create();
    Bn.setAxisAngle(M, x, d);
    const E = this.defaultUniform.orbitPoint, T = H.clone(E);
    H.negate(T, T);
    const w = ct.create();
    ct.translate(w, w, E);
    const b = ct.create();
    ct.fromQuat(b, M), ct.multiply(w, w, b), ct.translate(w, w, T), ct.multiply(c, c, w), this.matrix = c, this.update();
  }
  wheel(t) {
    if (!this.pos) return;
    const e = Fn.create();
    Fn.subtract(e, t, this.pos), e[1] = -e[1], this.pos = t;
    const s = [100, 100], c = this.matrix, h = H.fromValues(c[0], c[4], c[8]), f = H.fromValues(c[1], c[5], c[9]), p = H.fromValues(c[2], c[6], c[10]), d = Fn.length(e) / s[1] * Math.PI * 2;
    Fn.normalize(e, e), H.normalize(h, h);
    for (let S = 0; S < h.length; ++S)
      h[S] *= e[0];
    H.normalize(f, f);
    for (let S = 0; S < f.length; ++S)
      f[S] *= e[1];
    const m = H.create();
    H.add(m, m, h), H.add(m, m, f);
    const x = H.clone(p);
    H.cross(x, x, m), H.normalize(x, x);
    const M = Bn.create();
    Bn.setAxisAngle(M, x, d);
    const E = this.defaultUniform.orbitPoint, T = H.clone(E);
    H.negate(T, T);
    const w = ct.create();
    ct.translate(w, w, E);
    const b = ct.create();
    ct.fromQuat(b, M), ct.multiply(w, w, b), ct.translate(w, w, T), ct.multiply(c, c, w), this.matrix = c, this.update();
  }
  /**
   * 缩放相机（沿着视线方向移动相机）
   * @param amount 缩放量，正数放大（拉近），负数缩小（拉远）
   */
  zoom(t) {
    const e = this.matrix, s = H.fromValues(e[2], e[6], e[10]);
    H.normalize(s, s);
    const c = ct.create();
    ct.invert(c, e);
    const h = H.fromValues(c[12], c[13], c[14]), f = this.defaultUniform.orbitPoint, p = H.create();
    H.subtract(p, h, f);
    const d = H.length(p), m = 0.5, x = 50;
    let M = d - t * d;
    if (M = Math.max(m, Math.min(x, M)), Math.abs(M - d) < 1e-3)
      return;
    H.normalize(p, p);
    const E = H.create();
    H.scaleAndAdd(E, f, p, M);
    const T = H.fromValues(e[1], e[5], e[9]);
    H.normalize(T, T);
    const w = ct.create();
    ct.lookAt(w, E, f, T), this.matrix = w, this.update();
  }
}
var de;
((C) => {
  class t {
    static ZOOM_SPEED = 0.1;
    // 缩放速度
    /**
     * 放大（拉近相机）
     */
    static ZoomIn(c) {
      const h = Wn.current;
      if (!h) return;
      const f = c || this.ZOOM_SPEED;
      h.zoom(f);
    }
    /**
     * 缩小（拉远相机）
     */
    static ZoomOut(c) {
      const h = Wn.current;
      if (!h) return;
      const f = c || this.ZOOM_SPEED;
      h.zoom(-f);
    }
    /**
     * 根据滚轮增量缩放
     * @param deltaY 滚轮增量（正值向下，负值向上）
     */
    static ZoomByWheel(c) {
      const h = Wn.current;
      if (!h) return;
      const f = Math.abs(c) * 1e-3;
      c > 0 ? h.zoom(-f) : h.zoom(f);
    }
  }
  C.Zoom = t;
  class e {
    static update(c) {
      Wn.current.obr(c);
    }
  }
  C.Rotate = e;
})(de || (de = {}));
const rd = de.Rotate;
class id extends Za {
  constructor() {
    super();
  }
  mousedown(t) {
    const e = [t.clientX, t.clientY], s = Wn.current;
    return s.pos = e, null;
  }
  mouseup(t) {
    const e = Wn.current;
    return e.pos = void 0, super.mouseup(t);
  }
  mousemove(t) {
    const e = [t.clientX, t.clientY];
    return rd.update(e), null;
  }
}
class sd {
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
    const h = this.scene.context.canvas.getBoundingClientRect(), f = (t - h.left) / h.width * 2 - 1, p = -((e - h.top) / h.height) * 2 + 1, d = s.defaultUniform.projectMatrix.matrix, m = s.defaultUniform.viewMatrix.matrix, x = {
      origin: H.create(),
      direction: H.create()
    }, M = qe.fromValues(f, p, -1, 1), E = ct.create();
    ct.invert(E, d);
    const T = qe.create();
    qe.transformMat4(T, M, E), T[2] = -1, T[3] = 0;
    const w = ct.create();
    ct.invert(w, m);
    const b = qe.create();
    qe.transformMat4(b, T, w), H.normalize(x.direction, H.fromValues(b[0], b[1], b[2]));
    const S = H.fromValues(
      -m[12],
      -m[13],
      -m[14]
    );
    return H.copy(x.origin, S), x;
  }
  /**
   * 检测射线与对象的相交
   * @param ray 射线
   * @param objects 要检测的对象数组
   * @returns 相交结果数组，按距离排序
   */
  intersectObjects(t, e) {
    const s = [];
    for (const c of e) {
      const h = this.intersectObject(t, c);
      h && s.push(h);
    }
    return s.sort((c, h) => c.distance - h.distance), s;
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
    const s = H.fromValues(0, 0, 0), c = 1, h = H.create();
    H.subtract(h, t.origin, s);
    const f = H.dot(t.direction, t.direction), p = 2 * H.dot(h, t.direction), d = H.dot(h, h) - c * c, m = p * p - 4 * f * d;
    if (m < 0)
      return null;
    const x = Math.sqrt(m), M = (-p - x) / (2 * f), E = (-p + x) / (2 * f);
    let T = M > 0 ? M : E;
    if (T <= 0)
      return null;
    const w = H.create();
    return H.scaleAndAdd(w, t.origin, t.direction, T), {
      object: e,
      distance: T,
      point: w
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
class pe {
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
    return pe.instance || (pe.instance = new pe()), pe.instance;
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
        } catch (c) {
          console.error(`Error in event handler for ${t.type}:`, c);
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
    const s = (c) => {
      e(c), this.off(t, s);
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
var Vt = /* @__PURE__ */ ((C) => (C.MOUSE_DOWN = "mousedown", C.MOUSE_UP = "mouseup", C.MOUSE_MOVE = "mousemove", C.MOUSE_ENTER = "mouseenter", C.MOUSE_LEAVE = "mouseleave", C.MOUSE_WHEEL = "wheel", C.CLICK = "click", C.DOUBLE_CLICK = "dblclick", C.CONTEXT_MENU = "contextmenu", C.TOUCH_START = "touchstart", C.TOUCH_END = "touchend", C.TOUCH_MOVE = "touchmove", C.KEY_DOWN = "keydown", C.KEY_UP = "keyup", C.KEY_PRESS = "keypress", C))(Vt || {});
class cd {
  scene;
  raycaster;
  eventManager;
  controller;
  constructor(t) {
    this.scene = t, this.raycaster = new sd(t), this.eventManager = pe.getInstance(), this.controller = t.controller;
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
      ), s = this.raycaster.getInteractableObjects(), c = this.raycaster.intersectObjects(e, s);
      if (c.length > 0) {
        const h = c[0];
        t.hitObject = h.object, t.hitDistance = h.distance, t.hitPoint = h.point, h.point && (t.worldPosition = H.clone(h.point));
      }
    } catch (e) {
      console.warn("Raycast failed:", e);
    }
  }
  /**
   * 从鼠标事件创建 InteractionEvent
   */
  createInteractionEvent(t, e) {
    const c = this.scene.context.canvas.getBoundingClientRect();
    let h = 0, f = 0, p = 0, d = 0, m;
    return (e instanceof MouseEvent || e instanceof WheelEvent) && (h = e.clientX, f = e.clientY, p = e.clientX - c.left, d = e.clientY - c.top, m = e instanceof MouseEvent ? e.button : void 0), {
      type: t,
      originalEvent: e,
      screenX: p,
      screenY: d,
      clientX: h,
      clientY: f,
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
    const h = this.scene.context.canvas.getBoundingClientRect();
    return {
      type: t,
      originalEvent: e,
      screenX: s.clientX - h.left,
      screenY: s.clientY - h.top,
      clientX: s.clientX,
      clientY: s.clientY,
      ctrlKey: !1,
      shiftKey: !1,
      altKey: !1,
      metaKey: !1
    };
  }
}
class ad {
  scene;
  chain;
  cameraChain;
  interactionController = null;
  constructor() {
  }
  init(t) {
    this.scene = t, this.chain = new Jp(), this.cameraChain = new id(), this.switchState(
      0
      /* Camera */
    ), this.interactionController = new cd(t), this.interactionController.init();
  }
  switchState(t) {
    t === 0 && this.transitionTo(new Qp());
  }
  /*
  * 状态机切换
  * */
  state;
  transitionTo(t) {
    this.state = t, this.state.setContext(this), this.state.start();
  }
}
class hd extends ke {
  constructor() {
    super();
    const t = this.matrix;
    ct.translate(t, t, [0, 0, 0]), this.matrix = t;
  }
  name = "uModelMatrix";
  tie(t) {
    const e = this.findUniformInfo();
    this.location = e.location, this.update();
  }
}
class od extends ke {
  constructor() {
    super();
    const t = Ya.gl, e = 45 * Math.PI / 180, s = t.canvas.width / t.canvas.height, c = 0.1, h = 100, f = ct.create();
    ct.perspectiveNO(f, e, s, c, h), this.matrix = f;
  }
  name = "uProjectionMatrix";
  tie(t) {
    this.location = this.findUniformInfo().location, this.update();
  }
}
class fd extends ke {
  name = "uCameraPosition";
  position = H.create();
  viewMatrix;
  constructor(t) {
    super(), this.viewMatrix = t, H.set(this.position, 0, 5, 5);
  }
  update() {
    const t = ct.create();
    ct.invert(t, this.viewMatrix.matrix), H.set(this.position, t[12], t[13], t[14]);
  }
  tie(t) {
    const e = this.findUniformInfo();
    if (!e) return;
    this.location = e.location, this.update(), t.uniform3fv(this.location, this.position);
  }
}
class ld extends nd {
  modelMatrix;
  viewMatrix;
  projectMatrix;
  normalMatrix;
  cameraPosition;
  orbitPoint;
  viewportSize;
  constructor() {
    super(), this.projectMatrix = new od(), this.viewMatrix = new Wn(this), this.modelMatrix = new hd(), this.normalMatrix = new ed(this.modelMatrix), this.cameraPosition = new fd(this.viewMatrix), this.orbitPoint = H.create(), this.add(
      this.modelMatrix
    ), this.add(
      this.viewMatrix
    ), this.add(
      this.projectMatrix
    ), this.add(
      this.normalMatrix
    ), this.add(
      this.cameraPosition
    ), Wn.current = this.viewMatrix;
  }
}
class ud {
  defaultUniform;
  scene;
  constructor(t) {
    this.scene = t, this.defaultUniform = new ld();
  }
  update() {
    this.scene.render();
  }
}
const Xa = {
  /** 线性 */
  linear: (C) => C,
  /** 缓入 */
  easeIn: (C) => C * C,
  /** 缓出 */
  easeOut: (C) => C * (2 - C),
  /** 缓入缓出 */
  easeInOut: (C) => C < 0.5 ? 2 * C * C : -1 + (4 - 2 * C) * C,
  /** 二次缓入 */
  easeInQuad: (C) => C * C,
  /** 二次缓出 */
  easeOutQuad: (C) => C * (2 - C),
  /** 二次缓入缓出 */
  easeInOutQuad: (C) => C < 0.5 ? 2 * C * C : -1 + (4 - 2 * C) * C,
  /** 三次缓入 */
  easeInCubic: (C) => C * C * C,
  /** 三次缓出 */
  easeOutCubic: (C) => --C * C * C + 1,
  /** 三次缓入缓出 */
  easeInOutCubic: (C) => C < 0.5 ? 4 * C * C * C : (C - 1) * (2 * C - 2) * (2 * C - 2) + 1,
  /** 弹性 */
  elastic: (C) => Math.pow(2, -10 * C) * Math.sin((C - 0.3 / 4) * (2 * Math.PI) / 0.3) + 1,
  /** 弹跳 */
  bounce: (C) => C < 1 / 2.75 ? 7.5625 * C * C : C < 2 / 2.75 ? 7.5625 * (C -= 1.5 / 2.75) * C + 0.75 : C < 2.5 / 2.75 ? 7.5625 * (C -= 2.25 / 2.75) * C + 0.9375 : 7.5625 * (C -= 2.625 / 2.75) * C + 0.984375
};
class Be {
  startValue;
  endValue;
  duration;
  elapsed = 0;
  easing;
  onUpdate;
  onComplete;
  isPlaying = !1;
  isPaused = !1;
  startTime = 0;
  pauseTime = 0;
  constructor(t, e, s, c = Xa.linear) {
    this.startValue = t, this.endValue = e, this.duration = s, this.easing = c;
  }
  /**
   * 设置更新回调
   */
  onUpdateCallback(t) {
    return this.onUpdate = t, this;
  }
  /**
   * 设置完成回调
   */
  onCompleteCallback(t) {
    return this.onComplete = t, this;
  }
  /**
   * 开始动画
   */
  start() {
    return this.isPaused ? (this.startTime = performance.now() - this.pauseTime, this.isPaused = !1) : (this.startTime = performance.now(), this.elapsed = 0), this.isPlaying = !0, this;
  }
  /**
   * 暂停动画
   */
  pause() {
    return this.isPlaying && !this.isPaused && (this.isPaused = !0, this.pauseTime = performance.now() - this.startTime), this;
  }
  /**
   * 停止动画
   */
  stop() {
    return this.isPlaying = !1, this.isPaused = !1, this.elapsed = 0, this;
  }
  /**
   * 重置动画
   */
  reset() {
    return this.stop(), this.elapsed = 0, this;
  }
  /**
   * 更新动画
   * @param deltaTime 时间增量（毫秒）
   */
  update(t) {
    if (!this.isPlaying || this.isPaused)
      return !1;
    this.elapsed += t;
    const e = Math.min(this.elapsed / this.duration, 1), s = this.easing(e), c = this.startValue + (this.endValue - this.startValue) * s;
    return this.onUpdate && this.onUpdate(c), e >= 1 ? (this.isPlaying = !1, this.onComplete && this.onComplete(), !1) : !0;
  }
  /**
   * 获取当前值
   */
  getCurrentValue() {
    const t = Math.min(this.elapsed / this.duration, 1), e = this.easing(t);
    return this.startValue + (this.endValue - this.startValue) * e;
  }
  /**
   * 获取进度（0-1）
   */
  getProgress() {
    return Math.min(this.elapsed / this.duration, 1);
  }
  /**
   * 检查是否正在播放
   */
  isActive() {
    return this.isPlaying && !this.isPaused;
  }
}
const gd = (C, t, e) => C + (t - C) * e, Ka = (C, t, e) => [
  C[0] + (t[0] - C[0]) * e,
  C[1] + (t[1] - C[1]) * e,
  C[2] + (t[2] - C[2]) * e
];
class We {
  keyframes;
  duration;
  elapsed = 0;
  interpolator;
  onUpdate;
  onComplete;
  isPlaying = !1;
  isPaused = !1;
  isLoop = !1;
  startTime = 0;
  pauseTime = 0;
  constructor(t, e, s) {
    this.keyframes = [...t].sort((c, h) => c.time - h.time), this.duration = e, this.interpolator = s;
  }
  /**
   * 设置更新回调
   */
  onUpdateCallback(t) {
    return this.onUpdate = t, this;
  }
  /**
   * 设置完成回调
   */
  onCompleteCallback(t) {
    return this.onComplete = t, this;
  }
  /**
   * 设置循环播放
   */
  setLoop(t) {
    return this.isLoop = t, this;
  }
  /**
   * 开始动画
   */
  start() {
    return this.isPaused ? (this.startTime = performance.now() - this.pauseTime, this.isPaused = !1) : (this.startTime = performance.now(), this.elapsed = 0), this.isPlaying = !0, this;
  }
  /**
   * 暂停动画
   */
  pause() {
    return this.isPlaying && !this.isPaused && (this.isPaused = !0, this.pauseTime = performance.now() - this.startTime), this;
  }
  /**
   * 停止动画
   */
  stop() {
    return this.isPlaying = !1, this.isPaused = !1, this.elapsed = 0, this;
  }
  /**
   * 重置动画
   */
  reset() {
    return this.stop(), this.elapsed = 0, this;
  }
  /**
   * 更新动画
   * @param deltaTime 时间增量（毫秒）
   */
  update(t) {
    if (!this.isPlaying || this.isPaused)
      return !1;
    this.elapsed += t;
    let e = this.elapsed / this.duration % 1;
    !this.isLoop && this.elapsed >= this.duration && (e = 1);
    const s = this.getValueAtTime(e);
    return this.onUpdate && this.onUpdate(s), !this.isLoop && this.elapsed >= this.duration ? (this.isPlaying = !1, this.onComplete && this.onComplete(), !1) : !0;
  }
  /**
   * 获取指定时间的值
   */
  getValueAtTime(t) {
    if (this.keyframes.length === 0)
      throw new Error("AnimationTrack has no keyframes");
    if (t <= 0)
      return this.keyframes[0].value;
    if (t >= 1)
      return this.keyframes[this.keyframes.length - 1].value;
    for (let e = 0; e < this.keyframes.length - 1; e++) {
      const s = this.keyframes[e], c = this.keyframes[e + 1];
      if (t >= s.time && t <= c.time) {
        const h = c.time - s.time, f = (t - s.time) / h, d = (s.easing || Xa.linear)(f);
        return this.interpolator(s.value, c.value, d);
      }
    }
    return this.keyframes[this.keyframes.length - 1].value;
  }
  /**
   * 获取当前值
   */
  getCurrentValue() {
    const t = Math.min(this.elapsed / this.duration, 1);
    return this.getValueAtTime(t);
  }
  /**
   * 获取进度（0-1）
   */
  getProgress() {
    return Math.min(this.elapsed / this.duration, 1);
  }
  /**
   * 检查是否正在播放
   */
  isActive() {
    return this.isPlaying && !this.isPaused;
  }
}
class pd {
  animations = /* @__PURE__ */ new Set();
  lastTime = 0;
  isRunning = !1;
  constructor() {
    this.lastTime = performance.now();
  }
  /**
   * 添加动画
   */
  add(t) {
    this.animations.add(t), this.isRunning || this.start();
  }
  /**
   * 移除动画
   */
  remove(t) {
    this.animations.delete(t), this.animations.size === 0 && this.stop();
  }
  /**
   * 添加补间动画
   */
  addTween(t) {
    return this.add(t), t;
  }
  /**
   * 添加动画轨道
   */
  addTrack(t) {
    return this.add(t), t;
  }
  /**
   * 更新所有动画
   * 应该在渲染循环中调用
   */
  update() {
    if (!this.isRunning)
      return;
    const t = performance.now(), e = t - this.lastTime;
    this.lastTime = t;
    const s = [];
    this.animations.forEach((c) => {
      c.update(e) || s.push(c);
    }), s.forEach((c) => {
      this.remove(c);
    });
  }
  /**
   * 开始动画管理器
   */
  start() {
    this.isRunning = !0, this.lastTime = performance.now();
  }
  /**
   * 停止动画管理器
   */
  stop() {
    this.isRunning = !1;
  }
  /**
   * 暂停所有动画
   */
  pauseAll() {
    this.animations.forEach((t) => {
      (t instanceof Be || t instanceof We) && t.pause();
    });
  }
  /**
   * 恢复所有动画
   */
  resumeAll() {
    this.animations.forEach((t) => {
      (t instanceof Be || t instanceof We) && t.start();
    });
  }
  /**
   * 停止所有动画
   */
  stopAll() {
    this.animations.forEach((t) => {
      t.stop();
    }), this.animations.clear(), this.stop();
  }
  /**
   * 清除所有动画
   */
  clear() {
    this.stopAll();
  }
  /**
   * 获取动画数量
   */
  getAnimationCount() {
    return this.animations.size;
  }
  /**
   * 检查是否有活动的动画
   */
  hasActiveAnimations() {
    return this.animations.size > 0;
  }
}
class md {
  cell;
  modelMatrix;
  positionTrack;
  rotationTrack;
  scaleTrack;
  currentTransform;
  constructor(t, e) {
    this.cell = t, this.modelMatrix = e, this.currentTransform = {
      position: [0, 0, 0],
      rotation: [0, 0, 0, 1],
      // quaternion (x, y, z, w)
      scale: [1, 1, 1]
    };
  }
  /**
   * 设置位置动画轨道
   */
  setPositionTrack(t, e) {
    return this.positionTrack = new We(t, e, Ka), this.positionTrack.onUpdateCallback((s) => {
      this.currentTransform.position = s, this.updateModelMatrix();
    }), this;
  }
  /**
   * 设置位置动画轨道（支持循环）
   */
  setPositionTrackLoop(t, e, s = !0) {
    return this.setPositionTrack(t, e), this.positionTrack && (this.positionTrack.setLoop(s), this.positionTrack.start()), this;
  }
  /**
   * 设置旋转动画轨道（使用欧拉角）
   */
  setRotationTrack(t, e) {
    const s = t.map((c) => ({
      time: c.time,
      value: this.eulerToQuaternion(c.value),
      easing: c.easing
    }));
    return this.rotationTrack = new We(
      s,
      e,
      this.quaternionInterpolator
    ), this.rotationTrack.onUpdateCallback((c) => {
      this.currentTransform.rotation = c, this.updateModelMatrix();
    }), this;
  }
  /**
   * 设置旋转动画轨道（支持循环）
   */
  setRotationTrackLoop(t, e, s = !0) {
    return this.setRotationTrack(t, e), this.rotationTrack && (this.rotationTrack.setLoop(s), this.rotationTrack.start()), this;
  }
  /**
   * 设置缩放动画轨道
   */
  setScaleTrack(t, e) {
    return this.scaleTrack = new We(t, e, Ka), this.scaleTrack.onUpdateCallback((s) => {
      this.currentTransform.scale = s, this.updateModelMatrix();
    }), this;
  }
  /**
   * 设置缩放动画轨道（支持循环）
   */
  setScaleTrackLoop(t, e, s = !0) {
    return this.setScaleTrack(t, e), this.scaleTrack && (this.scaleTrack.setLoop(s), this.scaleTrack.start()), this;
  }
  /**
   * 使用补间动画设置位置
   */
  animatePosition(t, e, s) {
    const c = this.currentTransform.position, h = [];
    for (let f = 0; f < 3; f++) {
      const p = new Be(c[f], t[f], e, s);
      p.onUpdateCallback((d) => {
        this.currentTransform.position[f] = d, this.updateModelMatrix();
      }), h.push(p);
    }
    return h;
  }
  /**
   * 使用补间动画设置旋转（欧拉角）
   */
  animateRotation(t, e, s) {
    const c = this.eulerToQuaternion(this.getEulerRotation()), h = this.eulerToQuaternion(t), f = [];
    for (let p = 0; p < 4; p++) {
      const d = new Be(c[p], h[p], e, s);
      d.onUpdateCallback((m) => {
        this.currentTransform.rotation[p] = m, this.updateModelMatrix();
      }), f.push(d);
    }
    return f;
  }
  /**
   * 使用补间动画设置缩放
   */
  animateScale(t, e, s) {
    const c = this.currentTransform.scale, h = [];
    for (let f = 0; f < 3; f++) {
      const p = new Be(c[f], t[f], e, s);
      p.onUpdateCallback((d) => {
        this.currentTransform.scale[f] = d, this.updateModelMatrix();
      }), h.push(p);
    }
    return h;
  }
  /**
   * 更新模型矩阵
   * 变换顺序：先缩放，再旋转，最后平移（矩阵乘法顺序相反）
   */
  updateModelMatrix() {
    const t = ct.create();
    ct.scale(t, t, this.currentTransform.scale);
    const e = ct.create();
    ct.fromQuat(e, this.currentTransform.rotation), ct.multiply(t, t, e), ct.translate(t, t, this.currentTransform.position), this.modelMatrix.updateMatrix(t);
  }
  /**
   * 设置位置
   */
  setPosition(t) {
    return this.currentTransform.position = t, this.updateModelMatrix(), this;
  }
  /**
   * 设置旋转（欧拉角，弧度）
   */
  setRotation(t) {
    return this.currentTransform.rotation = this.eulerToQuaternion(t), this.updateModelMatrix(), this;
  }
  /**
   * 设置缩放
   */
  setScale(t) {
    return this.currentTransform.scale = t, this.updateModelMatrix(), this;
  }
  /**
   * 获取当前变换
   */
  getTransform() {
    return { ...this.currentTransform };
  }
  /**
   * 获取位置
   */
  getPosition() {
    return [...this.currentTransform.position];
  }
  /**
   * 获取旋转（欧拉角）
   */
  getEulerRotation() {
    return this.quaternionToEuler(this.currentTransform.rotation);
  }
  /**
   * 获取缩放
   */
  getScale() {
    return [...this.currentTransform.scale];
  }
  /**
   * 开始所有动画轨道
   */
  start() {
    return this.positionTrack && this.positionTrack.start(), this.rotationTrack && this.rotationTrack.start(), this.scaleTrack && this.scaleTrack.start(), this;
  }
  /**
   * 暂停所有动画轨道
   */
  pause() {
    return this.positionTrack && this.positionTrack.pause(), this.rotationTrack && this.rotationTrack.pause(), this.scaleTrack && this.scaleTrack.pause(), this;
  }
  /**
   * 停止所有动画轨道
   */
  stop() {
    return this.positionTrack && this.positionTrack.stop(), this.rotationTrack && this.rotationTrack.stop(), this.scaleTrack && this.scaleTrack.stop(), this;
  }
  /**
   * 欧拉角转四元数
   */
  eulerToQuaternion(t) {
    const e = Bn.create();
    return Bn.fromEuler(e, t[0] * 180 / Math.PI, t[1] * 180 / Math.PI, t[2] * 180 / Math.PI), [e[0], e[1], e[2], e[3]];
  }
  /**
   * 四元数转欧拉角
   */
  quaternionToEuler(t) {
    const e = t;
    H.create();
    const s = ct.create();
    return ct.fromQuat(s, e), [0, 0, 0];
  }
  /**
   * 四元数插值器
   */
  quaternionInterpolator = (t, e, s) => {
    const c = Bn.create();
    return Bn.slerp(c, t, e, s), [c[0], c[1], c[2], c[3]];
  };
}
class xd extends Xp {
  context;
  constructor() {
    super();
  }
  background = new $p();
  model = new Kp();
  camera;
  controller = new ad();
  animationManager = new pd();
  /*
  挂载 dom 节点
  * */
  mount(t) {
    this.context = new Hp(t), this.init();
  }
  /*
  初始化函数
   */
  init() {
    this.camera = new ud(this), this.controller.init(this);
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
    this.animationManager.update(), super.render(this.gl);
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
  /**
   * 销毁场景，清理所有资源
   */
  destroy() {
    this.animationManager && this.animationManager.stopAll(), this.controller && this.controller.interactionController, this.context && this.context.gl && this.destroyQueue(this.context.gl), this.length = 0, this.context && this.context.canvas && this.context.canvas.parentNode && this.context.canvas.parentNode.removeChild(this.context.canvas), this.context = void 0;
  }
}
export {
  pd as AnimationManager,
  We as AnimationTrack,
  Xa as Easing,
  xd as Scene,
  md as TransformAnimation,
  Be as Tween,
  gd as numberInterpolator,
  Ka as vec3Interpolator
};
