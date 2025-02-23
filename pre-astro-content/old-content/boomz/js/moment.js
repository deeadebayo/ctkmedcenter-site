!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
      ? define(e)
      : (t.moment = e());
})(this, function () {
  "use strict";
  function t() {
    return Pn.apply(null, arguments);
  }
  function e(t) {
    Pn = t;
  }
  function n(t) {
    return "[object Array]" === Object.prototype.toString.call(t);
  }
  function i(t) {
    return (
      t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
    );
  }
  function r(t, e) {
    var n,
      i = [];
    for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
    return i;
  }
  function s(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  function a(t, e) {
    for (var n in e) s(e, n) && (t[n] = e[n]);
    return (
      s(e, "toString") && (t.toString = e.toString),
      s(e, "valueOf") && (t.valueOf = e.valueOf),
      t
    );
  }
  function o(t, e, n, i) {
    return Ot(t, e, n, i, !0).utc();
  }
  function u() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
    };
  }
  function d(t) {
    return null == t._pf && (t._pf = u()), t._pf;
  }
  function l(t) {
    if (null == t._isValid) {
      var e = d(t);
      (t._isValid = !(
        isNaN(t._d.getTime()) ||
        !(e.overflow < 0) ||
        e.empty ||
        e.invalidMonth ||
        e.invalidWeekday ||
        e.nullInput ||
        e.invalidFormat ||
        e.userInvalidated
      )),
        t._strict &&
          (t._isValid =
            t._isValid &&
            0 === e.charsLeftOver &&
            0 === e.unusedTokens.length &&
            void 0 === e.bigHour);
    }
    return t._isValid;
  }
  function c(t) {
    var e = o(NaN);
    return null != t ? a(d(e), t) : (d(e).userInvalidated = !0), e;
  }
  function f(t, e) {
    var n, i, r;
    if (
      ("undefined" != typeof e._isAMomentObject &&
        (t._isAMomentObject = e._isAMomentObject),
      "undefined" != typeof e._i && (t._i = e._i),
      "undefined" != typeof e._f && (t._f = e._f),
      "undefined" != typeof e._l && (t._l = e._l),
      "undefined" != typeof e._strict && (t._strict = e._strict),
      "undefined" != typeof e._tzm && (t._tzm = e._tzm),
      "undefined" != typeof e._isUTC && (t._isUTC = e._isUTC),
      "undefined" != typeof e._offset && (t._offset = e._offset),
      "undefined" != typeof e._pf && (t._pf = d(e)),
      "undefined" != typeof e._locale && (t._locale = e._locale),
      Hn.length > 0)
    )
      for (n in Hn)
        (i = Hn[n]), (r = e[i]), "undefined" != typeof r && (t[i] = r);
    return t;
  }
  function h(e) {
    f(this, e),
      (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
      Ln === !1 && ((Ln = !0), t.updateOffset(this), (Ln = !1));
  }
  function m(t) {
    return t instanceof h || (null != t && null != t._isAMomentObject);
  }
  function _(t) {
    return 0 > t ? Math.ceil(t) : Math.floor(t);
  }
  function y(t) {
    var e = +t,
      n = 0;
    return 0 !== e && isFinite(e) && (n = _(e)), n;
  }
  function p(t, e, n) {
    var i,
      r = Math.min(t.length, e.length),
      s = Math.abs(t.length - e.length),
      a = 0;
    for (i = 0; r > i; i++)
      ((n && t[i] !== e[i]) || (!n && y(t[i]) !== y(e[i]))) && a++;
    return a + s;
  }
  function g() {}
  function D(t) {
    return t ? t.toLowerCase().replace("_", "-") : t;
  }
  function v(t) {
    for (var e, n, i, r, s = 0; s < t.length; ) {
      for (
        r = D(t[s]).split("-"),
          e = r.length,
          n = D(t[s + 1]),
          n = n ? n.split("-") : null;
        e > 0;

      ) {
        if ((i = M(r.slice(0, e).join("-")))) return i;
        if (n && n.length >= e && p(r, n, !0) >= e - 1) break;
        e--;
      }
      s++;
    }
    return null;
  }
  function M(t) {
    var e = null;
    if (!In[t] && "undefined" != typeof module && module && module.exports)
      try {
        (e = xn._abbr), require("./locale/" + t), Y(e);
      } catch (n) {}
    return In[t];
  }
  function Y(t, e) {
    var n;
    return (
      t && ((n = "undefined" == typeof e ? S(t) : w(t, e)), n && (xn = n)),
      xn._abbr
    );
  }
  function w(t, e) {
    return null !== e
      ? ((e.abbr = t), (In[t] = In[t] || new g()), In[t].set(e), Y(t), In[t])
      : (delete In[t], null);
  }
  function S(t) {
    var e;
    if ((t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t))
      return xn;
    if (!n(t)) {
      if ((e = M(t))) return e;
      t = [t];
    }
    return v(t);
  }
  function k(t, e) {
    var n = t.toLowerCase();
    An[n] = An[n + "s"] = An[e] = t;
  }
  function T(t) {
    return "string" == typeof t ? An[t] || An[t.toLowerCase()] : void 0;
  }
  function b(t) {
    var e,
      n,
      i = {};
    for (n in t) s(t, n) && ((e = T(n)), e && (i[e] = t[n]));
    return i;
  }
  function O(e, n) {
    return function (i) {
      return null != i
        ? (W(this, e, i), t.updateOffset(this, n), this)
        : U(this, e);
    };
  }
  function U(t, e) {
    return t._d["get" + (t._isUTC ? "UTC" : "") + e]();
  }
  function W(t, e, n) {
    return t._d["set" + (t._isUTC ? "UTC" : "") + e](n);
  }
  function C(t, e) {
    var n;
    if ("object" == typeof t) for (n in t) this.set(n, t[n]);
    else if (((t = T(t)), "function" == typeof this[t])) return this[t](e);
    return this;
  }
  function G(t, e, n) {
    var i = "" + Math.abs(t),
      r = e - i.length,
      s = t >= 0;
    return (
      (s ? (n ? "+" : "") : "-") +
      Math.pow(10, Math.max(0, r)).toString().substr(1) +
      i
    );
  }
  function F(t, e, n, i) {
    var r = i;
    "string" == typeof i &&
      (r = function () {
        return this[i]();
      }),
      t && (jn[t] = r),
      e &&
        (jn[e[0]] = function () {
          return G(r.apply(this, arguments), e[1], e[2]);
        }),
      n &&
        (jn[n] = function () {
          return this.localeData().ordinal(r.apply(this, arguments), t);
        });
  }
  function P(t) {
    return t.match(/\[[\s\S]/)
      ? t.replace(/^\[|\]$/g, "")
      : t.replace(/\\/g, "");
  }
  function x(t) {
    var e,
      n,
      i = t.match(zn);
    for (e = 0, n = i.length; n > e; e++)
      jn[i[e]] ? (i[e] = jn[i[e]]) : (i[e] = P(i[e]));
    return function (r) {
      var s = "";
      for (e = 0; n > e; e++)
        s += i[e] instanceof Function ? i[e].call(r, t) : i[e];
      return s;
    };
  }
  function H(t, e) {
    return t.isValid()
      ? ((e = L(e, t.localeData())), (Zn[e] = Zn[e] || x(e)), Zn[e](t))
      : t.localeData().invalidDate();
  }
  function L(t, e) {
    function n(t) {
      return e.longDateFormat(t) || t;
    }
    var i = 5;
    for (Nn.lastIndex = 0; i >= 0 && Nn.test(t); )
      (t = t.replace(Nn, n)), (Nn.lastIndex = 0), (i -= 1);
    return t;
  }
  function I(t) {
    return (
      "function" == typeof t &&
      "[object Function]" === Object.prototype.toString.call(t)
    );
  }
  function A(t, e, n) {
    ri[t] = I(e)
      ? e
      : function (t) {
          return t && n ? n : e;
        };
  }
  function z(t, e) {
    return s(ri, t) ? ri[t](e._strict, e._locale) : new RegExp(N(t));
  }
  function N(t) {
    return t
      .replace("\\", "")
      .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, i, r) {
        return e || n || i || r;
      })
      .replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function Z(t, e) {
    var n,
      i = e;
    for (
      "string" == typeof t && (t = [t]),
        "number" == typeof e &&
          (i = function (t, n) {
            n[e] = y(t);
          }),
        n = 0;
      n < t.length;
      n++
    )
      si[t[n]] = i;
  }
  function j(t, e) {
    Z(t, function (t, n, i, r) {
      (i._w = i._w || {}), e(t, i._w, i, r);
    });
  }
  function E(t, e, n) {
    null != e && s(si, t) && si[t](e, n._a, n, t);
  }
  function V(t, e) {
    return new Date(Date.UTC(t, e + 1, 0)).getUTCDate();
  }
  function q(t) {
    return this._months[t.month()];
  }
  function J(t) {
    return this._monthsShort[t.month()];
  }
  function $(t, e, n) {
    var i, r, s;
    for (
      this._monthsParse ||
        ((this._monthsParse = []),
        (this._longMonthsParse = []),
        (this._shortMonthsParse = [])),
        i = 0;
      12 > i;
      i++
    ) {
      if (
        ((r = o([2e3, i])),
        n &&
          !this._longMonthsParse[i] &&
          ((this._longMonthsParse[i] = new RegExp(
            "^" + this.months(r, "").replace(".", "") + "$",
            "i",
          )),
          (this._shortMonthsParse[i] = new RegExp(
            "^" + this.monthsShort(r, "").replace(".", "") + "$",
            "i",
          ))),
        n ||
          this._monthsParse[i] ||
          ((s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, "")),
          (this._monthsParse[i] = new RegExp(s.replace(".", ""), "i"))),
        n && "MMMM" === e && this._longMonthsParse[i].test(t))
      )
        return i;
      if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
      if (!n && this._monthsParse[i].test(t)) return i;
    }
  }
  function R(t, e) {
    var n;
    return "string" == typeof e &&
      ((e = t.localeData().monthsParse(e)), "number" != typeof e)
      ? t
      : ((n = Math.min(t.date(), V(t.year(), e))),
        t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n),
        t);
  }
  function B(e) {
    return null != e
      ? (R(this, e), t.updateOffset(this, !0), this)
      : U(this, "Month");
  }
  function Q() {
    return V(this.year(), this.month());
  }
  function X(t) {
    var e,
      n = t._a;
    return (
      n &&
        -2 === d(t).overflow &&
        ((e =
          n[oi] < 0 || n[oi] > 11
            ? oi
            : n[ui] < 1 || n[ui] > V(n[ai], n[oi])
              ? ui
              : n[di] < 0 ||
                  n[di] > 24 ||
                  (24 === n[di] && (0 !== n[li] || 0 !== n[ci] || 0 !== n[fi]))
                ? di
                : n[li] < 0 || n[li] > 59
                  ? li
                  : n[ci] < 0 || n[ci] > 59
                    ? ci
                    : n[fi] < 0 || n[fi] > 999
                      ? fi
                      : -1),
        d(t)._overflowDayOfYear && (ai > e || e > ui) && (e = ui),
        (d(t).overflow = e)),
      t
    );
  }
  function K(e) {
    t.suppressDeprecationWarnings === !1 &&
      "undefined" != typeof console &&
      console.warn &&
      console.warn("Deprecation warning: " + e);
  }
  function tt(t, e) {
    var n = !0;
    return a(function () {
      return (
        n && (K(t + "\n" + new Error().stack), (n = !1)),
        e.apply(this, arguments)
      );
    }, e);
  }
  function et(t, e) {
    _i[t] || (K(e), (_i[t] = !0));
  }
  function nt(t) {
    var e,
      n,
      i = t._i,
      r = yi.exec(i);
    if (r) {
      for (d(t).iso = !0, e = 0, n = pi.length; n > e; e++)
        if (pi[e][1].exec(i)) {
          t._f = pi[e][0];
          break;
        }
      for (e = 0, n = gi.length; n > e; e++)
        if (gi[e][1].exec(i)) {
          t._f += (r[6] || " ") + gi[e][0];
          break;
        }
      i.match(ei) && (t._f += "Z"), Mt(t);
    } else t._isValid = !1;
  }
  function it(e) {
    var n = Di.exec(e._i);
    return null !== n
      ? void (e._d = new Date(+n[1]))
      : (nt(e),
        void (
          e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e))
        ));
  }
  function rt(t, e, n, i, r, s, a) {
    var o = new Date(t, e, n, i, r, s, a);
    return 1970 > t && o.setFullYear(t), o;
  }
  function st(t) {
    var e = new Date(Date.UTC.apply(null, arguments));
    return 1970 > t && e.setUTCFullYear(t), e;
  }
  function at(t) {
    return ot(t) ? 366 : 365;
  }
  function ot(t) {
    return (t % 4 === 0 && t % 100 !== 0) || t % 400 === 0;
  }
  function ut() {
    return ot(this.year());
  }
  function dt(t, e, n) {
    var i,
      r = n - e,
      s = n - t.day();
    return (
      s > r && (s -= 7),
      r - 7 > s && (s += 7),
      (i = Ut(t).add(s, "d")),
      { week: Math.ceil(i.dayOfYear() / 7), year: i.year() }
    );
  }
  function lt(t) {
    return dt(t, this._week.dow, this._week.doy).week;
  }
  function ct() {
    return this._week.dow;
  }
  function ft() {
    return this._week.doy;
  }
  function ht(t) {
    var e = this.localeData().week(this);
    return null == t ? e : this.add(7 * (t - e), "d");
  }
  function mt(t) {
    var e = dt(this, 1, 4).week;
    return null == t ? e : this.add(7 * (t - e), "d");
  }
  function _t(t, e, n, i, r) {
    var s,
      a = 6 + r - i,
      o = st(t, 0, 1 + a),
      u = o.getUTCDay();
    return (
      r > u && (u += 7),
      (n = null != n ? 1 * n : r),
      (s = 1 + a + 7 * (e - 1) - u + n),
      { year: s > 0 ? t : t - 1, dayOfYear: s > 0 ? s : at(t - 1) + s }
    );
  }
  function yt(t) {
    var e =
      Math.round(
        (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5,
      ) + 1;
    return null == t ? e : this.add(t - e, "d");
  }
  function pt(t, e, n) {
    return null != t ? t : null != e ? e : n;
  }
  function gt(t) {
    var e = new Date();
    return t._useUTC
      ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]
      : [e.getFullYear(), e.getMonth(), e.getDate()];
  }
  function Dt(t) {
    var e,
      n,
      i,
      r,
      s = [];
    if (!t._d) {
      for (
        i = gt(t),
          t._w && null == t._a[ui] && null == t._a[oi] && vt(t),
          t._dayOfYear &&
            ((r = pt(t._a[ai], i[ai])),
            t._dayOfYear > at(r) && (d(t)._overflowDayOfYear = !0),
            (n = st(r, 0, t._dayOfYear)),
            (t._a[oi] = n.getUTCMonth()),
            (t._a[ui] = n.getUTCDate())),
          e = 0;
        3 > e && null == t._a[e];
        ++e
      )
        t._a[e] = s[e] = i[e];
      for (; 7 > e; e++)
        t._a[e] = s[e] = null == t._a[e] ? (2 === e ? 1 : 0) : t._a[e];
      24 === t._a[di] &&
        0 === t._a[li] &&
        0 === t._a[ci] &&
        0 === t._a[fi] &&
        ((t._nextDay = !0), (t._a[di] = 0)),
        (t._d = (t._useUTC ? st : rt).apply(null, s)),
        null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
        t._nextDay && (t._a[di] = 24);
    }
  }
  function vt(t) {
    var e, n, i, r, s, a, o;
    (e = t._w),
      null != e.GG || null != e.W || null != e.E
        ? ((s = 1),
          (a = 4),
          (n = pt(e.GG, t._a[ai], dt(Ut(), 1, 4).year)),
          (i = pt(e.W, 1)),
          (r = pt(e.E, 1)))
        : ((s = t._locale._week.dow),
          (a = t._locale._week.doy),
          (n = pt(e.gg, t._a[ai], dt(Ut(), s, a).year)),
          (i = pt(e.w, 1)),
          null != e.d
            ? ((r = e.d), s > r && ++i)
            : (r = null != e.e ? e.e + s : s)),
      (o = _t(n, i, r, a, s)),
      (t._a[ai] = o.year),
      (t._dayOfYear = o.dayOfYear);
  }
  function Mt(e) {
    if (e._f === t.ISO_8601) return void nt(e);
    (e._a = []), (d(e).empty = !0);
    var n,
      i,
      r,
      s,
      a,
      o = "" + e._i,
      u = o.length,
      l = 0;
    for (r = L(e._f, e._locale).match(zn) || [], n = 0; n < r.length; n++)
      (s = r[n]),
        (i = (o.match(z(s, e)) || [])[0]),
        i &&
          ((a = o.substr(0, o.indexOf(i))),
          a.length > 0 && d(e).unusedInput.push(a),
          (o = o.slice(o.indexOf(i) + i.length)),
          (l += i.length)),
        jn[s]
          ? (i ? (d(e).empty = !1) : d(e).unusedTokens.push(s), E(s, i, e))
          : e._strict && !i && d(e).unusedTokens.push(s);
    (d(e).charsLeftOver = u - l),
      o.length > 0 && d(e).unusedInput.push(o),
      d(e).bigHour === !0 &&
        e._a[di] <= 12 &&
        e._a[di] > 0 &&
        (d(e).bigHour = void 0),
      (e._a[di] = Yt(e._locale, e._a[di], e._meridiem)),
      Dt(e),
      X(e);
  }
  function Yt(t, e, n) {
    var i;
    return null == n
      ? e
      : null != t.meridiemHour
        ? t.meridiemHour(e, n)
        : null != t.isPM
          ? ((i = t.isPM(n)),
            i && 12 > e && (e += 12),
            i || 12 !== e || (e = 0),
            e)
          : e;
  }
  function wt(t) {
    var e, n, i, r, s;
    if (0 === t._f.length)
      return (d(t).invalidFormat = !0), void (t._d = new Date(NaN));
    for (r = 0; r < t._f.length; r++)
      (s = 0),
        (e = f({}, t)),
        null != t._useUTC && (e._useUTC = t._useUTC),
        (e._f = t._f[r]),
        Mt(e),
        l(e) &&
          ((s += d(e).charsLeftOver),
          (s += 10 * d(e).unusedTokens.length),
          (d(e).score = s),
          (null == i || i > s) && ((i = s), (n = e)));
    a(t, n || e);
  }
  function St(t) {
    if (!t._d) {
      var e = b(t._i);
      (t._a = [
        e.year,
        e.month,
        e.day || e.date,
        e.hour,
        e.minute,
        e.second,
        e.millisecond,
      ]),
        Dt(t);
    }
  }
  function kt(t) {
    var e = new h(X(Tt(t)));
    return e._nextDay && (e.add(1, "d"), (e._nextDay = void 0)), e;
  }
  function Tt(t) {
    var e = t._i,
      r = t._f;
    return (
      (t._locale = t._locale || S(t._l)),
      null === e || (void 0 === r && "" === e)
        ? c({ nullInput: !0 })
        : ("string" == typeof e && (t._i = e = t._locale.preparse(e)),
          m(e)
            ? new h(X(e))
            : (n(r) ? wt(t) : r ? Mt(t) : i(e) ? (t._d = e) : bt(t), t))
    );
  }
  function bt(e) {
    var s = e._i;
    void 0 === s
      ? (e._d = new Date())
      : i(s)
        ? (e._d = new Date(+s))
        : "string" == typeof s
          ? it(e)
          : n(s)
            ? ((e._a = r(s.slice(0), function (t) {
                return parseInt(t, 10);
              })),
              Dt(e))
            : "object" == typeof s
              ? St(e)
              : "number" == typeof s
                ? (e._d = new Date(s))
                : t.createFromInputFallback(e);
  }
  function Ot(t, e, n, i, r) {
    var s = {};
    return (
      "boolean" == typeof n && ((i = n), (n = void 0)),
      (s._isAMomentObject = !0),
      (s._useUTC = s._isUTC = r),
      (s._l = n),
      (s._i = t),
      (s._f = e),
      (s._strict = i),
      kt(s)
    );
  }
  function Ut(t, e, n, i) {
    return Ot(t, e, n, i, !1);
  }
  function Wt(t, e) {
    var i, r;
    if ((1 === e.length && n(e[0]) && (e = e[0]), !e.length)) return Ut();
    for (i = e[0], r = 1; r < e.length; ++r)
      (!e[r].isValid() || e[r][t](i)) && (i = e[r]);
    return i;
  }
  function Ct() {
    var t = [].slice.call(arguments, 0);
    return Wt("isBefore", t);
  }
  function Gt() {
    var t = [].slice.call(arguments, 0);
    return Wt("isAfter", t);
  }
  function Ft(t) {
    var e = b(t),
      n = e.year || 0,
      i = e.quarter || 0,
      r = e.month || 0,
      s = e.week || 0,
      a = e.day || 0,
      o = e.hour || 0,
      u = e.minute || 0,
      d = e.second || 0,
      l = e.millisecond || 0;
    (this._milliseconds = +l + 1e3 * d + 6e4 * u + 36e5 * o),
      (this._days = +a + 7 * s),
      (this._months = +r + 3 * i + 12 * n),
      (this._data = {}),
      (this._locale = S()),
      this._bubble();
  }
  function Pt(t) {
    return t instanceof Ft;
  }
  function xt(t, e) {
    F(t, 0, 0, function () {
      var t = this.utcOffset(),
        n = "+";
      return (
        0 > t && ((t = -t), (n = "-")),
        n + G(~~(t / 60), 2) + e + G(~~t % 60, 2)
      );
    });
  }
  function Ht(t) {
    var e = (t || "").match(ei) || [],
      n = e[e.length - 1] || [],
      i = (n + "").match(Si) || ["-", 0, 0],
      r = +(60 * i[1]) + y(i[2]);
    return "+" === i[0] ? r : -r;
  }
  function Lt(e, n) {
    var r, s;
    return n._isUTC
      ? ((r = n.clone()),
        (s = (m(e) || i(e) ? +e : +Ut(e)) - +r),
        r._d.setTime(+r._d + s),
        t.updateOffset(r, !1),
        r)
      : Ut(e).local();
  }
  function It(t) {
    return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
  }
  function At(e, n) {
    var i,
      r = this._offset || 0;
    return null != e
      ? ("string" == typeof e && (e = Ht(e)),
        Math.abs(e) < 16 && (e = 60 * e),
        !this._isUTC && n && (i = It(this)),
        (this._offset = e),
        (this._isUTC = !0),
        null != i && this.add(i, "m"),
        r !== e &&
          (!n || this._changeInProgress
            ? ee(this, Bt(e - r, "m"), 1, !1)
            : this._changeInProgress ||
              ((this._changeInProgress = !0),
              t.updateOffset(this, !0),
              (this._changeInProgress = null))),
        this)
      : this._isUTC
        ? r
        : It(this);
  }
  function zt(t, e) {
    return null != t
      ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this)
      : -this.utcOffset();
  }
  function Nt(t) {
    return this.utcOffset(0, t);
  }
  function Zt(t) {
    return (
      this._isUTC &&
        (this.utcOffset(0, t),
        (this._isUTC = !1),
        t && this.subtract(It(this), "m")),
      this
    );
  }
  function jt() {
    return (
      this._tzm
        ? this.utcOffset(this._tzm)
        : "string" == typeof this._i && this.utcOffset(Ht(this._i)),
      this
    );
  }
  function Et(t) {
    return (t = t ? Ut(t).utcOffset() : 0), (this.utcOffset() - t) % 60 === 0;
  }
  function Vt() {
    return (
      this.utcOffset() > this.clone().month(0).utcOffset() ||
      this.utcOffset() > this.clone().month(5).utcOffset()
    );
  }
  function qt() {
    if ("undefined" != typeof this._isDSTShifted) return this._isDSTShifted;
    var t = {};
    if ((f(t, this), (t = Tt(t)), t._a)) {
      var e = t._isUTC ? o(t._a) : Ut(t._a);
      this._isDSTShifted = this.isValid() && p(t._a, e.toArray()) > 0;
    } else this._isDSTShifted = !1;
    return this._isDSTShifted;
  }
  function Jt() {
    return !this._isUTC;
  }
  function $t() {
    return this._isUTC;
  }
  function Rt() {
    return this._isUTC && 0 === this._offset;
  }
  function Bt(t, e) {
    var n,
      i,
      r,
      a = t,
      o = null;
    return (
      Pt(t)
        ? (a = { ms: t._milliseconds, d: t._days, M: t._months })
        : "number" == typeof t
          ? ((a = {}), e ? (a[e] = t) : (a.milliseconds = t))
          : (o = ki.exec(t))
            ? ((n = "-" === o[1] ? -1 : 1),
              (a = {
                y: 0,
                d: y(o[ui]) * n,
                h: y(o[di]) * n,
                m: y(o[li]) * n,
                s: y(o[ci]) * n,
                ms: y(o[fi]) * n,
              }))
            : (o = Ti.exec(t))
              ? ((n = "-" === o[1] ? -1 : 1),
                (a = {
                  y: Qt(o[2], n),
                  M: Qt(o[3], n),
                  d: Qt(o[4], n),
                  h: Qt(o[5], n),
                  m: Qt(o[6], n),
                  s: Qt(o[7], n),
                  w: Qt(o[8], n),
                }))
              : null == a
                ? (a = {})
                : "object" == typeof a &&
                  ("from" in a || "to" in a) &&
                  ((r = Kt(Ut(a.from), Ut(a.to))),
                  (a = {}),
                  (a.ms = r.milliseconds),
                  (a.M = r.months)),
      (i = new Ft(a)),
      Pt(t) && s(t, "_locale") && (i._locale = t._locale),
      i
    );
  }
  function Qt(t, e) {
    var n = t && parseFloat(t.replace(",", "."));
    return (isNaN(n) ? 0 : n) * e;
  }
  function Xt(t, e) {
    var n = { milliseconds: 0, months: 0 };
    return (
      (n.months = e.month() - t.month() + 12 * (e.year() - t.year())),
      t.clone().add(n.months, "M").isAfter(e) && --n.months,
      (n.milliseconds = +e - +t.clone().add(n.months, "M")),
      n
    );
  }
  function Kt(t, e) {
    var n;
    return (
      (e = Lt(e, t)),
      t.isBefore(e)
        ? (n = Xt(t, e))
        : ((n = Xt(e, t)),
          (n.milliseconds = -n.milliseconds),
          (n.months = -n.months)),
      n
    );
  }
  function te(t, e) {
    return function (n, i) {
      var r, s;
      return (
        null === i ||
          isNaN(+i) ||
          (et(
            e,
            "moment()." +
              e +
              "(period, number) is deprecated. Please use moment()." +
              e +
              "(number, period).",
          ),
          (s = n),
          (n = i),
          (i = s)),
        (n = "string" == typeof n ? +n : n),
        (r = Bt(n, i)),
        ee(this, r, t),
        this
      );
    };
  }
  function ee(e, n, i, r) {
    var s = n._milliseconds,
      a = n._days,
      o = n._months;
    (r = null == r ? !0 : r),
      s && e._d.setTime(+e._d + s * i),
      a && W(e, "Date", U(e, "Date") + a * i),
      o && R(e, U(e, "Month") + o * i),
      r && t.updateOffset(e, a || o);
  }
  function ne(t, e) {
    var n = t || Ut(),
      i = Lt(n, this).startOf("day"),
      r = this.diff(i, "days", !0),
      s =
        -6 > r
          ? "sameElse"
          : -1 > r
            ? "lastWeek"
            : 0 > r
              ? "lastDay"
              : 1 > r
                ? "sameDay"
                : 2 > r
                  ? "nextDay"
                  : 7 > r
                    ? "nextWeek"
                    : "sameElse";
    return this.format(
      (e && e[s]) || this.localeData().calendar(s, this, Ut(n)),
    );
  }
  function ie() {
    return new h(this);
  }
  function re(t, e) {
    var n;
    return (
      (e = T("undefined" != typeof e ? e : "millisecond")),
      "millisecond" === e
        ? ((t = m(t) ? t : Ut(t)), +this > +t)
        : ((n = m(t) ? +t : +Ut(t)), n < +this.clone().startOf(e))
    );
  }
  function se(t, e) {
    var n;
    return (
      (e = T("undefined" != typeof e ? e : "millisecond")),
      "millisecond" === e
        ? ((t = m(t) ? t : Ut(t)), +t > +this)
        : ((n = m(t) ? +t : +Ut(t)), +this.clone().endOf(e) < n)
    );
  }
  function ae(t, e, n) {
    return this.isAfter(t, n) && this.isBefore(e, n);
  }
  function oe(t, e) {
    var n;
    return (
      (e = T(e || "millisecond")),
      "millisecond" === e
        ? ((t = m(t) ? t : Ut(t)), +this === +t)
        : ((n = +Ut(t)),
          +this.clone().startOf(e) <= n && n <= +this.clone().endOf(e))
    );
  }
  function ue(t, e, n) {
    var i,
      r,
      s = Lt(t, this),
      a = 6e4 * (s.utcOffset() - this.utcOffset());
    return (
      (e = T(e)),
      "year" === e || "month" === e || "quarter" === e
        ? ((r = de(this, s)),
          "quarter" === e ? (r /= 3) : "year" === e && (r /= 12))
        : ((i = this - s),
          (r =
            "second" === e
              ? i / 1e3
              : "minute" === e
                ? i / 6e4
                : "hour" === e
                  ? i / 36e5
                  : "day" === e
                    ? (i - a) / 864e5
                    : "week" === e
                      ? (i - a) / 6048e5
                      : i)),
      n ? r : _(r)
    );
  }
  function de(t, e) {
    var n,
      i,
      r = 12 * (e.year() - t.year()) + (e.month() - t.month()),
      s = t.clone().add(r, "months");
    return (
      0 > e - s
        ? ((n = t.clone().add(r - 1, "months")), (i = (e - s) / (s - n)))
        : ((n = t.clone().add(r + 1, "months")), (i = (e - s) / (n - s))),
      -(r + i)
    );
  }
  function le() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function ce() {
    var t = this.clone().utc();
    return 0 < t.year() && t.year() <= 9999
      ? "function" == typeof Date.prototype.toISOString
        ? this.toDate().toISOString()
        : H(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
      : H(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
  }
  function fe(e) {
    var n = H(this, e || t.defaultFormat);
    return this.localeData().postformat(n);
  }
  function he(t, e) {
    return this.isValid()
      ? Bt({ to: this, from: t }).locale(this.locale()).humanize(!e)
      : this.localeData().invalidDate();
  }
  function me(t) {
    return this.from(Ut(), t);
  }
  function _e(t, e) {
    return this.isValid()
      ? Bt({ from: this, to: t }).locale(this.locale()).humanize(!e)
      : this.localeData().invalidDate();
  }
  function ye(t) {
    return this.to(Ut(), t);
  }
  function pe(t) {
    var e;
    return void 0 === t
      ? this._locale._abbr
      : ((e = S(t)), null != e && (this._locale = e), this);
  }
  function ge() {
    return this._locale;
  }
  function De(t) {
    switch ((t = T(t))) {
      case "year":
        this.month(0);
      case "quarter":
      case "month":
        this.date(1);
      case "week":
      case "isoWeek":
      case "day":
        this.hours(0);
      case "hour":
        this.minutes(0);
      case "minute":
        this.seconds(0);
      case "second":
        this.milliseconds(0);
    }
    return (
      "week" === t && this.weekday(0),
      "isoWeek" === t && this.isoWeekday(1),
      "quarter" === t && this.month(3 * Math.floor(this.month() / 3)),
      this
    );
  }
  function ve(t) {
    return (
      (t = T(t)),
      void 0 === t || "millisecond" === t
        ? this
        : this.startOf(t)
            .add(1, "isoWeek" === t ? "week" : t)
            .subtract(1, "ms")
    );
  }
  function Me() {
    return +this._d - 6e4 * (this._offset || 0);
  }
  function Ye() {
    return Math.floor(+this / 1e3);
  }
  function we() {
    return this._offset ? new Date(+this) : this._d;
  }
  function Se() {
    var t = this;
    return [
      t.year(),
      t.month(),
      t.date(),
      t.hour(),
      t.minute(),
      t.second(),
      t.millisecond(),
    ];
  }
  function ke() {
    var t = this;
    return {
      years: t.year(),
      months: t.month(),
      date: t.date(),
      hours: t.hours(),
      minutes: t.minutes(),
      seconds: t.seconds(),
      milliseconds: t.milliseconds(),
    };
  }
  function Te() {
    return l(this);
  }
  function be() {
    return a({}, d(this));
  }
  function Oe() {
    return d(this).overflow;
  }
  function Ue(t, e) {
    F(0, [t, t.length], 0, e);
  }
  function We(t, e, n) {
    return dt(Ut([t, 11, 31 + e - n]), e, n).week;
  }
  function Ce(t) {
    var e = dt(
      this,
      this.localeData()._week.dow,
      this.localeData()._week.doy,
    ).year;
    return null == t ? e : this.add(t - e, "y");
  }
  function Ge(t) {
    var e = dt(this, 1, 4).year;
    return null == t ? e : this.add(t - e, "y");
  }
  function Fe() {
    return We(this.year(), 1, 4);
  }
  function Pe() {
    var t = this.localeData()._week;
    return We(this.year(), t.dow, t.doy);
  }
  function xe(t) {
    return null == t
      ? Math.ceil((this.month() + 1) / 3)
      : this.month(3 * (t - 1) + (this.month() % 3));
  }
  function He(t, e) {
    return "string" != typeof t
      ? t
      : isNaN(t)
        ? ((t = e.weekdaysParse(t)), "number" == typeof t ? t : null)
        : parseInt(t, 10);
  }
  function Le(t) {
    return this._weekdays[t.day()];
  }
  function Ie(t) {
    return this._weekdaysShort[t.day()];
  }
  function Ae(t) {
    return this._weekdaysMin[t.day()];
  }
  function ze(t) {
    var e, n, i;
    for (this._weekdaysParse = this._weekdaysParse || [], e = 0; 7 > e; e++)
      if (
        (this._weekdaysParse[e] ||
          ((n = Ut([2e3, 1]).day(e)),
          (i =
            "^" +
            this.weekdays(n, "") +
            "|^" +
            this.weekdaysShort(n, "") +
            "|^" +
            this.weekdaysMin(n, "")),
          (this._weekdaysParse[e] = new RegExp(i.replace(".", ""), "i"))),
        this._weekdaysParse[e].test(t))
      )
        return e;
  }
  function Ne(t) {
    var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return null != t
      ? ((t = He(t, this.localeData())), this.add(t - e, "d"))
      : e;
  }
  function Ze(t) {
    var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return null == t ? e : this.add(t - e, "d");
  }
  function je(t) {
    return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7);
  }
  function Ee(t, e) {
    F(t, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), e);
    });
  }
  function Ve(t, e) {
    return e._meridiemParse;
  }
  function qe(t) {
    return "p" === (t + "").toLowerCase().charAt(0);
  }
  function Je(t, e, n) {
    return t > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
  }
  function $e(t, e) {
    e[fi] = y(1e3 * ("0." + t));
  }
  function Re() {
    return this._isUTC ? "UTC" : "";
  }
  function Be() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  function Qe(t) {
    return Ut(1e3 * t);
  }
  function Xe() {
    return Ut.apply(null, arguments).parseZone();
  }
  function Ke(t, e, n) {
    var i = this._calendar[t];
    return "function" == typeof i ? i.call(e, n) : i;
  }
  function tn(t) {
    var e = this._longDateFormat[t],
      n = this._longDateFormat[t.toUpperCase()];
    return e || !n
      ? e
      : ((this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function (t) {
          return t.slice(1);
        })),
        this._longDateFormat[t]);
  }
  function en() {
    return this._invalidDate;
  }
  function nn(t) {
    return this._ordinal.replace("%d", t);
  }
  function rn(t) {
    return t;
  }
  function sn(t, e, n, i) {
    var r = this._relativeTime[n];
    return "function" == typeof r ? r(t, e, n, i) : r.replace(/%d/i, t);
  }
  function an(t, e) {
    var n = this._relativeTime[t > 0 ? "future" : "past"];
    return "function" == typeof n ? n(e) : n.replace(/%s/i, e);
  }
  function on(t) {
    var e, n;
    for (n in t)
      (e = t[n]), "function" == typeof e ? (this[n] = e) : (this["_" + n] = e);
    this._ordinalParseLenient = new RegExp(
      this._ordinalParse.source + "|" + /\d{1,2}/.source,
    );
  }
  function un(t, e, n, i) {
    var r = S(),
      s = o().set(i, e);
    return r[n](s, t);
  }
  function dn(t, e, n, i, r) {
    if (
      ("number" == typeof t && ((e = t), (t = void 0)),
      (t = t || ""),
      null != e)
    )
      return un(t, e, n, r);
    var s,
      a = [];
    for (s = 0; i > s; s++) a[s] = un(t, s, n, r);
    return a;
  }
  function ln(t, e) {
    return dn(t, e, "months", 12, "month");
  }
  function cn(t, e) {
    return dn(t, e, "monthsShort", 12, "month");
  }
  function fn(t, e) {
    return dn(t, e, "weekdays", 7, "day");
  }
  function hn(t, e) {
    return dn(t, e, "weekdaysShort", 7, "day");
  }
  function mn(t, e) {
    return dn(t, e, "weekdaysMin", 7, "day");
  }
  function _n() {
    var t = this._data;
    return (
      (this._milliseconds = Ri(this._milliseconds)),
      (this._days = Ri(this._days)),
      (this._months = Ri(this._months)),
      (t.milliseconds = Ri(t.milliseconds)),
      (t.seconds = Ri(t.seconds)),
      (t.minutes = Ri(t.minutes)),
      (t.hours = Ri(t.hours)),
      (t.months = Ri(t.months)),
      (t.years = Ri(t.years)),
      this
    );
  }
  function yn(t, e, n, i) {
    var r = Bt(e, n);
    return (
      (t._milliseconds += i * r._milliseconds),
      (t._days += i * r._days),
      (t._months += i * r._months),
      t._bubble()
    );
  }
  function pn(t, e) {
    return yn(this, t, e, 1);
  }
  function gn(t, e) {
    return yn(this, t, e, -1);
  }
  function Dn(t) {
    return 0 > t ? Math.floor(t) : Math.ceil(t);
  }
  function vn() {
    var t,
      e,
      n,
      i,
      r,
      s = this._milliseconds,
      a = this._days,
      o = this._months,
      u = this._data;
    return (
      (s >= 0 && a >= 0 && o >= 0) ||
        (0 >= s && 0 >= a && 0 >= o) ||
        ((s += 864e5 * Dn(Yn(o) + a)), (a = 0), (o = 0)),
      (u.milliseconds = s % 1e3),
      (t = _(s / 1e3)),
      (u.seconds = t % 60),
      (e = _(t / 60)),
      (u.minutes = e % 60),
      (n = _(e / 60)),
      (u.hours = n % 24),
      (a += _(n / 24)),
      (r = _(Mn(a))),
      (o += r),
      (a -= Dn(Yn(r))),
      (i = _(o / 12)),
      (o %= 12),
      (u.days = a),
      (u.months = o),
      (u.years = i),
      this
    );
  }
  function Mn(t) {
    return (4800 * t) / 146097;
  }
  function Yn(t) {
    return (146097 * t) / 4800;
  }
  function wn(t) {
    var e,
      n,
      i = this._milliseconds;
    if (((t = T(t)), "month" === t || "year" === t))
      return (
        (e = this._days + i / 864e5),
        (n = this._months + Mn(e)),
        "month" === t ? n : n / 12
      );
    switch (((e = this._days + Math.round(Yn(this._months))), t)) {
      case "week":
        return e / 7 + i / 6048e5;
      case "day":
        return e + i / 864e5;
      case "hour":
        return 24 * e + i / 36e5;
      case "minute":
        return 1440 * e + i / 6e4;
      case "second":
        return 86400 * e + i / 1e3;
      case "millisecond":
        return Math.floor(864e5 * e) + i;
      default:
        throw new Error("Unknown unit " + t);
    }
  }
  function Sn() {
    return (
      this._milliseconds +
      864e5 * this._days +
      (this._months % 12) * 2592e6 +
      31536e6 * y(this._months / 12)
    );
  }
  function kn(t) {
    return function () {
      return this.as(t);
    };
  }
  function Tn(t) {
    return (t = T(t)), this[t + "s"]();
  }
  function bn(t) {
    return function () {
      return this._data[t];
    };
  }
  function On() {
    return _(this.days() / 7);
  }
  function Un(t, e, n, i, r) {
    return r.relativeTime(e || 1, !!n, t, i);
  }
  function Wn(t, e, n) {
    var i = Bt(t).abs(),
      r = cr(i.as("s")),
      s = cr(i.as("m")),
      a = cr(i.as("h")),
      o = cr(i.as("d")),
      u = cr(i.as("M")),
      d = cr(i.as("y")),
      l = (r < fr.s && ["s", r]) ||
        (1 === s && ["m"]) ||
        (s < fr.m && ["mm", s]) ||
        (1 === a && ["h"]) ||
        (a < fr.h && ["hh", a]) ||
        (1 === o && ["d"]) ||
        (o < fr.d && ["dd", o]) ||
        (1 === u && ["M"]) ||
        (u < fr.M && ["MM", u]) ||
        (1 === d && ["y"]) || ["yy", d];
    return (l[2] = e), (l[3] = +t > 0), (l[4] = n), Un.apply(null, l);
  }
  function Cn(t, e) {
    return void 0 === fr[t] ? !1 : void 0 === e ? fr[t] : ((fr[t] = e), !0);
  }
  function Gn(t) {
    var e = this.localeData(),
      n = Wn(this, !t, e);
    return t && (n = e.pastFuture(+this, n)), e.postformat(n);
  }
  function Fn() {
    var t,
      e,
      n,
      i = hr(this._milliseconds) / 1e3,
      r = hr(this._days),
      s = hr(this._months);
    (t = _(i / 60)),
      (e = _(t / 60)),
      (i %= 60),
      (t %= 60),
      (n = _(s / 12)),
      (s %= 12);
    var a = n,
      o = s,
      u = r,
      d = e,
      l = t,
      c = i,
      f = this.asSeconds();
    return f
      ? (0 > f ? "-" : "") +
          "P" +
          (a ? a + "Y" : "") +
          (o ? o + "M" : "") +
          (u ? u + "D" : "") +
          (d || l || c ? "T" : "") +
          (d ? d + "H" : "") +
          (l ? l + "M" : "") +
          (c ? c + "S" : "")
      : "P0D";
  }
  var Pn,
    xn,
    Hn = (t.momentProperties = []),
    Ln = !1,
    In = {},
    An = {},
    zn =
      /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    Nn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    Zn = {},
    jn = {},
    En = /\d/,
    Vn = /\d\d/,
    qn = /\d{3}/,
    Jn = /\d{4}/,
    $n = /[+-]?\d{6}/,
    Rn = /\d\d?/,
    Bn = /\d{1,3}/,
    Qn = /\d{1,4}/,
    Xn = /[+-]?\d{1,6}/,
    Kn = /\d+/,
    ti = /[+-]?\d+/,
    ei = /Z|[+-]\d\d:?\d\d/gi,
    ni = /[+-]?\d+(\.\d{1,3})?/,
    ii =
      /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
    ri = {},
    si = {},
    ai = 0,
    oi = 1,
    ui = 2,
    di = 3,
    li = 4,
    ci = 5,
    fi = 6;
  F("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  }),
    F("MMM", 0, 0, function (t) {
      return this.localeData().monthsShort(this, t);
    }),
    F("MMMM", 0, 0, function (t) {
      return this.localeData().months(this, t);
    }),
    k("month", "M"),
    A("M", Rn),
    A("MM", Rn, Vn),
    A("MMM", ii),
    A("MMMM", ii),
    Z(["M", "MM"], function (t, e) {
      e[oi] = y(t) - 1;
    }),
    Z(["MMM", "MMMM"], function (t, e, n, i) {
      var r = n._locale.monthsParse(t, i, n._strict);
      null != r ? (e[oi] = r) : (d(n).invalidMonth = t);
    });
  var hi =
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_",
      ),
    mi = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    _i = {};
  t.suppressDeprecationWarnings = !1;
  var yi =
      /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    pi = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
      ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
      ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d{2}/],
      ["YYYY-DDD", /\d{4}-\d{3}/],
    ],
    gi = [
      ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
      ["HH:mm", /(T| )\d\d:\d\d/],
      ["HH", /(T| )\d\d/],
    ],
    Di = /^\/?Date\((\-?\d+)/i;
  (t.createFromInputFallback = tt(
    "moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",
    function (t) {
      t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
    },
  )),
    F(0, ["YY", 2], 0, function () {
      return this.year() % 100;
    }),
    F(0, ["YYYY", 4], 0, "year"),
    F(0, ["YYYYY", 5], 0, "year"),
    F(0, ["YYYYYY", 6, !0], 0, "year"),
    k("year", "y"),
    A("Y", ti),
    A("YY", Rn, Vn),
    A("YYYY", Qn, Jn),
    A("YYYYY", Xn, $n),
    A("YYYYYY", Xn, $n),
    Z(["YYYYY", "YYYYYY"], ai),
    Z("YYYY", function (e, n) {
      n[ai] = 2 === e.length ? t.parseTwoDigitYear(e) : y(e);
    }),
    Z("YY", function (e, n) {
      n[ai] = t.parseTwoDigitYear(e);
    }),
    (t.parseTwoDigitYear = function (t) {
      return y(t) + (y(t) > 68 ? 1900 : 2e3);
    });
  var vi = O("FullYear", !1);
  F("w", ["ww", 2], "wo", "week"),
    F("W", ["WW", 2], "Wo", "isoWeek"),
    k("week", "w"),
    k("isoWeek", "W"),
    A("w", Rn),
    A("ww", Rn, Vn),
    A("W", Rn),
    A("WW", Rn, Vn),
    j(["w", "ww", "W", "WW"], function (t, e, n, i) {
      e[i.substr(0, 1)] = y(t);
    });
  var Mi = { dow: 0, doy: 6 };
  F("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    k("dayOfYear", "DDD"),
    A("DDD", Bn),
    A("DDDD", qn),
    Z(["DDD", "DDDD"], function (t, e, n) {
      n._dayOfYear = y(t);
    }),
    (t.ISO_8601 = function () {});
  var Yi = tt(
      "moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",
      function () {
        var t = Ut.apply(null, arguments);
        return this > t ? this : t;
      },
    ),
    wi = tt(
      "moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",
      function () {
        var t = Ut.apply(null, arguments);
        return t > this ? this : t;
      },
    );
  xt("Z", ":"),
    xt("ZZ", ""),
    A("Z", ei),
    A("ZZ", ei),
    Z(["Z", "ZZ"], function (t, e, n) {
      (n._useUTC = !0), (n._tzm = Ht(t));
    });
  var Si = /([\+\-]|\d\d)/gi;
  t.updateOffset = function () {};
  var ki = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
    Ti =
      /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
  Bt.fn = Ft.prototype;
  var bi = te(1, "add"),
    Oi = te(-1, "subtract");
  t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  var Ui = tt(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function (t) {
      return void 0 === t ? this.localeData() : this.locale(t);
    },
  );
  F(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }),
    F(0, ["GG", 2], 0, function () {
      return this.isoWeekYear() % 100;
    }),
    Ue("gggg", "weekYear"),
    Ue("ggggg", "weekYear"),
    Ue("GGGG", "isoWeekYear"),
    Ue("GGGGG", "isoWeekYear"),
    k("weekYear", "gg"),
    k("isoWeekYear", "GG"),
    A("G", ti),
    A("g", ti),
    A("GG", Rn, Vn),
    A("gg", Rn, Vn),
    A("GGGG", Qn, Jn),
    A("gggg", Qn, Jn),
    A("GGGGG", Xn, $n),
    A("ggggg", Xn, $n),
    j(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, i) {
      e[i.substr(0, 2)] = y(t);
    }),
    j(["gg", "GG"], function (e, n, i, r) {
      n[r] = t.parseTwoDigitYear(e);
    }),
    F("Q", 0, 0, "quarter"),
    k("quarter", "Q"),
    A("Q", En),
    Z("Q", function (t, e) {
      e[oi] = 3 * (y(t) - 1);
    }),
    F("D", ["DD", 2], "Do", "date"),
    k("date", "D"),
    A("D", Rn),
    A("DD", Rn, Vn),
    A("Do", function (t, e) {
      return t ? e._ordinalParse : e._ordinalParseLenient;
    }),
    Z(["D", "DD"], ui),
    Z("Do", function (t, e) {
      e[ui] = y(t.match(Rn)[0], 10);
    });
  var Wi = O("Date", !0);
  F("d", 0, "do", "day"),
    F("dd", 0, 0, function (t) {
      return this.localeData().weekdaysMin(this, t);
    }),
    F("ddd", 0, 0, function (t) {
      return this.localeData().weekdaysShort(this, t);
    }),
    F("dddd", 0, 0, function (t) {
      return this.localeData().weekdays(this, t);
    }),
    F("e", 0, 0, "weekday"),
    F("E", 0, 0, "isoWeekday"),
    k("day", "d"),
    k("weekday", "e"),
    k("isoWeekday", "E"),
    A("d", Rn),
    A("e", Rn),
    A("E", Rn),
    A("dd", ii),
    A("ddd", ii),
    A("dddd", ii),
    j(["dd", "ddd", "dddd"], function (t, e, n) {
      var i = n._locale.weekdaysParse(t);
      null != i ? (e.d = i) : (d(n).invalidWeekday = t);
    }),
    j(["d", "e", "E"], function (t, e, n, i) {
      e[i] = y(t);
    });
  var Ci = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
      "_",
    ),
    Gi = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    Fi = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
  F("H", ["HH", 2], 0, "hour"),
    F("h", ["hh", 2], 0, function () {
      return this.hours() % 12 || 12;
    }),
    Ee("a", !0),
    Ee("A", !1),
    k("hour", "h"),
    A("a", Ve),
    A("A", Ve),
    A("H", Rn),
    A("h", Rn),
    A("HH", Rn, Vn),
    A("hh", Rn, Vn),
    Z(["H", "HH"], di),
    Z(["a", "A"], function (t, e, n) {
      (n._isPm = n._locale.isPM(t)), (n._meridiem = t);
    }),
    Z(["h", "hh"], function (t, e, n) {
      (e[di] = y(t)), (d(n).bigHour = !0);
    });
  var Pi = /[ap]\.?m?\.?/i,
    xi = O("Hours", !0);
  F("m", ["mm", 2], 0, "minute"),
    k("minute", "m"),
    A("m", Rn),
    A("mm", Rn, Vn),
    Z(["m", "mm"], li);
  var Hi = O("Minutes", !1);
  F("s", ["ss", 2], 0, "second"),
    k("second", "s"),
    A("s", Rn),
    A("ss", Rn, Vn),
    Z(["s", "ss"], ci);
  var Li = O("Seconds", !1);
  F("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  }),
    F(0, ["SS", 2], 0, function () {
      return ~~(this.millisecond() / 10);
    }),
    F(0, ["SSS", 3], 0, "millisecond"),
    F(0, ["SSSS", 4], 0, function () {
      return 10 * this.millisecond();
    }),
    F(0, ["SSSSS", 5], 0, function () {
      return 100 * this.millisecond();
    }),
    F(0, ["SSSSSS", 6], 0, function () {
      return 1e3 * this.millisecond();
    }),
    F(0, ["SSSSSSS", 7], 0, function () {
      return 1e4 * this.millisecond();
    }),
    F(0, ["SSSSSSSS", 8], 0, function () {
      return 1e5 * this.millisecond();
    }),
    F(0, ["SSSSSSSSS", 9], 0, function () {
      return 1e6 * this.millisecond();
    }),
    k("millisecond", "ms"),
    A("S", Bn, En),
    A("SS", Bn, Vn),
    A("SSS", Bn, qn);
  var Ii;
  for (Ii = "SSSS"; Ii.length <= 9; Ii += "S") A(Ii, Kn);
  for (Ii = "S"; Ii.length <= 9; Ii += "S") Z(Ii, $e);
  var Ai = O("Milliseconds", !1);
  F("z", 0, 0, "zoneAbbr"), F("zz", 0, 0, "zoneName");
  var zi = h.prototype;
  (zi.add = bi),
    (zi.calendar = ne),
    (zi.clone = ie),
    (zi.diff = ue),
    (zi.endOf = ve),
    (zi.format = fe),
    (zi.from = he),
    (zi.fromNow = me),
    (zi.to = _e),
    (zi.toNow = ye),
    (zi.get = C),
    (zi.invalidAt = Oe),
    (zi.isAfter = re),
    (zi.isBefore = se),
    (zi.isBetween = ae),
    (zi.isSame = oe),
    (zi.isValid = Te),
    (zi.lang = Ui),
    (zi.locale = pe),
    (zi.localeData = ge),
    (zi.max = wi),
    (zi.min = Yi),
    (zi.parsingFlags = be),
    (zi.set = C),
    (zi.startOf = De),
    (zi.subtract = Oi),
    (zi.toArray = Se),
    (zi.toObject = ke),
    (zi.toDate = we),
    (zi.toISOString = ce),
    (zi.toJSON = ce),
    (zi.toString = le),
    (zi.unix = Ye),
    (zi.valueOf = Me),
    (zi.year = vi),
    (zi.isLeapYear = ut),
    (zi.weekYear = Ce),
    (zi.isoWeekYear = Ge),
    (zi.quarter = zi.quarters = xe),
    (zi.month = B),
    (zi.daysInMonth = Q),
    (zi.week = zi.weeks = ht),
    (zi.isoWeek = zi.isoWeeks = mt),
    (zi.weeksInYear = Pe),
    (zi.isoWeeksInYear = Fe),
    (zi.date = Wi),
    (zi.day = zi.days = Ne),
    (zi.weekday = Ze),
    (zi.isoWeekday = je),
    (zi.dayOfYear = yt),
    (zi.hour = zi.hours = xi),
    (zi.minute = zi.minutes = Hi),
    (zi.second = zi.seconds = Li),
    (zi.millisecond = zi.milliseconds = Ai),
    (zi.utcOffset = At),
    (zi.utc = Nt),
    (zi.local = Zt),
    (zi.parseZone = jt),
    (zi.hasAlignedHourOffset = Et),
    (zi.isDST = Vt),
    (zi.isDSTShifted = qt),
    (zi.isLocal = Jt),
    (zi.isUtcOffset = $t),
    (zi.isUtc = Rt),
    (zi.isUTC = Rt),
    (zi.zoneAbbr = Re),
    (zi.zoneName = Be),
    (zi.dates = tt("dates accessor is deprecated. Use date instead.", Wi)),
    (zi.months = tt("months accessor is deprecated. Use month instead", B)),
    (zi.years = tt("years accessor is deprecated. Use year instead", vi)),
    (zi.zone = tt(
      "moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",
      zt,
    ));
  var Ni = zi,
    Zi = {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L",
    },
    ji = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A",
    },
    Ei = "Invalid date",
    Vi = "%d",
    qi = /\d{1,2}/,
    Ji = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    },
    $i = g.prototype;
  ($i._calendar = Zi),
    ($i.calendar = Ke),
    ($i._longDateFormat = ji),
    ($i.longDateFormat = tn),
    ($i._invalidDate = Ei),
    ($i.invalidDate = en),
    ($i._ordinal = Vi),
    ($i.ordinal = nn),
    ($i._ordinalParse = qi),
    ($i.preparse = rn),
    ($i.postformat = rn),
    ($i._relativeTime = Ji),
    ($i.relativeTime = sn),
    ($i.pastFuture = an),
    ($i.set = on),
    ($i.months = q),
    ($i._months = hi),
    ($i.monthsShort = J),
    ($i._monthsShort = mi),
    ($i.monthsParse = $),
    ($i.week = lt),
    ($i._week = Mi),
    ($i.firstDayOfYear = ft),
    ($i.firstDayOfWeek = ct),
    ($i.weekdays = Le),
    ($i._weekdays = Ci),
    ($i.weekdaysMin = Ae),
    ($i._weekdaysMin = Fi),
    ($i.weekdaysShort = Ie),
    ($i._weekdaysShort = Gi),
    ($i.weekdaysParse = ze),
    ($i.isPM = qe),
    ($i._meridiemParse = Pi),
    ($i.meridiem = Je),
    Y("en", {
      ordinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (t) {
        var e = t % 10,
          n =
            1 === y((t % 100) / 10)
              ? "th"
              : 1 === e
                ? "st"
                : 2 === e
                  ? "nd"
                  : 3 === e
                    ? "rd"
                    : "th";
        return t + n;
      },
    }),
    (t.lang = tt("moment.lang is deprecated. Use moment.locale instead.", Y)),
    (t.langData = tt(
      "moment.langData is deprecated. Use moment.localeData instead.",
      S,
    ));
  var Ri = Math.abs,
    Bi = kn("ms"),
    Qi = kn("s"),
    Xi = kn("m"),
    Ki = kn("h"),
    tr = kn("d"),
    er = kn("w"),
    nr = kn("M"),
    ir = kn("y"),
    rr = bn("milliseconds"),
    sr = bn("seconds"),
    ar = bn("minutes"),
    or = bn("hours"),
    ur = bn("days"),
    dr = bn("months"),
    lr = bn("years"),
    cr = Math.round,
    fr = { s: 45, m: 45, h: 22, d: 26, M: 11 },
    hr = Math.abs,
    mr = Ft.prototype;
  (mr.abs = _n),
    (mr.add = pn),
    (mr.subtract = gn),
    (mr.as = wn),
    (mr.asMilliseconds = Bi),
    (mr.asSeconds = Qi),
    (mr.asMinutes = Xi),
    (mr.asHours = Ki),
    (mr.asDays = tr),
    (mr.asWeeks = er),
    (mr.asMonths = nr),
    (mr.asYears = ir),
    (mr.valueOf = Sn),
    (mr._bubble = vn),
    (mr.get = Tn),
    (mr.milliseconds = rr),
    (mr.seconds = sr),
    (mr.minutes = ar),
    (mr.hours = or),
    (mr.days = ur),
    (mr.weeks = On),
    (mr.months = dr),
    (mr.years = lr),
    (mr.humanize = Gn),
    (mr.toISOString = Fn),
    (mr.toString = Fn),
    (mr.toJSON = Fn),
    (mr.locale = pe),
    (mr.localeData = ge),
    (mr.toIsoString = tt(
      "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
      Fn,
    )),
    (mr.lang = Ui),
    F("X", 0, 0, "unix"),
    F("x", 0, 0, "valueOf"),
    A("x", ti),
    A("X", ni),
    Z("X", function (t, e, n) {
      n._d = new Date(1e3 * parseFloat(t, 10));
    }),
    Z("x", function (t, e, n) {
      n._d = new Date(y(t));
    }),
    (t.version = "2.10.6"),
    e(Ut),
    (t.fn = Ni),
    (t.min = Ct),
    (t.max = Gt),
    (t.utc = o),
    (t.unix = Qe),
    (t.months = ln),
    (t.isDate = i),
    (t.locale = Y),
    (t.invalid = c),
    (t.duration = Bt),
    (t.isMoment = m),
    (t.weekdays = fn),
    (t.parseZone = Xe),
    (t.localeData = S),
    (t.isDuration = Pt),
    (t.monthsShort = cn),
    (t.weekdaysMin = mn),
    (t.defineLocale = w),
    (t.weekdaysShort = hn),
    (t.normalizeUnits = T),
    (t.relativeTimeThreshold = Cn);
  var _r = t;
  return _r;
});
