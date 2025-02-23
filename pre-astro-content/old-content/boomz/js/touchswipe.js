!(function (t) {
  "use strict";
  "function" == typeof define && define.amd && define.amd.jQuery
    ? define(["jquery"], t)
    : t(jQuery);
})(function (t) {
  function e(e) {
    return (
      !e ||
        void 0 !== e.allowPageScroll ||
        (void 0 === e.swipe && void 0 === e.swipeStatus) ||
        (e.allowPageScroll = u),
      void 0 !== e.click && void 0 === e.tap && (e.tap = e.click),
      e || (e = {}),
      (e = t.extend({}, t.fn.swipe.defaults, e)),
      this.each(function () {
        var i = t(this),
          o = i.data(k);
        o || ((o = new n(this, e)), i.data(k, o));
      })
    );
  }
  function n(e, n) {
    function N(e) {
      if (!(ut() || t(e.target).closest(n.excludedElements, Bt).length > 0)) {
        var i,
          o = e.originalEvent ? e.originalEvent : e,
          r = E ? o.touches[0] : o;
        return (
          (zt = w),
          E ? (Vt = o.touches.length) : e.preventDefault(),
          (Rt = 0),
          (Pt = null),
          (Ut = null),
          (Ht = 0),
          (Ft = 0),
          (qt = 0),
          (Mt = 1),
          (Wt = 0),
          (Xt = ht()),
          (_t = mt()),
          at(),
          !E || Vt === n.fingers || n.fingers === y || _()
            ? (pt(0, r),
              (Qt = $t()),
              2 == Vt &&
                (pt(1, o.touches[1]), (Ft = qt = wt(Xt[0].start, Xt[1].start))),
              (n.swipeStatus || n.pinchStatus) && (i = R(o, zt)))
            : (i = !1),
          i === !1
            ? ((zt = C), R(o, zt), i)
            : (n.hold &&
                (te = setTimeout(
                  t.proxy(function () {
                    Bt.trigger("hold", [o.target]),
                      n.hold && (i = n.hold.call(Bt, o, o.target));
                  }, this),
                  n.longTapThreshold,
                )),
              ct(!0),
              null)
        );
      }
    }
    function D(t) {
      var e = t.originalEvent ? t.originalEvent : t;
      if (zt !== T && zt !== C && !lt()) {
        var i,
          o = E ? e.touches[0] : e,
          r = dt(o);
        if (
          ((Yt = $t()),
          E && (Vt = e.touches.length),
          n.hold && clearTimeout(te),
          (zt = x),
          2 == Vt &&
            (0 == Ft
              ? (pt(1, e.touches[1]), (Ft = qt = wt(Xt[0].start, Xt[1].start)))
              : (dt(e.touches[1]),
                (qt = wt(Xt[0].end, Xt[1].end)),
                (Ut = Tt(Xt[0].end, Xt[1].end))),
            (Mt = xt(Ft, qt)),
            (Wt = Math.abs(Ft - qt))),
          Vt === n.fingers || n.fingers === y || !E || _())
        ) {
          if (
            ((Pt = St(r.start, r.end)),
            W(t, Pt),
            (Rt = Ct(r.start, r.end)),
            (Ht = bt()),
            gt(Pt, Rt),
            (n.swipeStatus || n.pinchStatus) && (i = R(e, zt)),
            !n.triggerOnTouchEnd || n.triggerOnTouchLeave)
          ) {
            var s = !0;
            if (n.triggerOnTouchLeave) {
              var a = kt(this);
              s = Nt(r.end, a);
            }
            !n.triggerOnTouchEnd && s
              ? (zt = L(x))
              : n.triggerOnTouchLeave && !s && (zt = L(T)),
              (zt == C || zt == T) && R(e, zt);
          }
        } else (zt = C), R(e, zt);
        i === !1 && ((zt = C), R(e, zt));
      }
    }
    function A(t) {
      var e = t.originalEvent;
      return E && e.touches.length > 0
        ? (st(), !0)
        : (lt() && (Vt = Kt),
          (Yt = $t()),
          (Ht = bt()),
          F() || !H()
            ? ((zt = C), R(e, zt))
            : n.triggerOnTouchEnd || (0 == n.triggerOnTouchEnd && zt === x)
              ? (t.preventDefault(), (zt = T), R(e, zt))
              : !n.triggerOnTouchEnd && G()
                ? ((zt = T), P(e, zt, f))
                : zt === x && ((zt = C), R(e, zt)),
          ct(!1),
          null);
    }
    function O() {
      (Vt = 0), (Yt = 0), (Qt = 0), (Ft = 0), (qt = 0), (Mt = 1), at(), ct(!1);
    }
    function j(t) {
      var e = t.originalEvent;
      n.triggerOnTouchLeave && ((zt = L(T)), R(e, zt));
    }
    function I() {
      Bt.unbind(At, N),
        Bt.unbind(Lt, O),
        Bt.unbind(Ot, D),
        Bt.unbind(jt, A),
        It && Bt.unbind(It, j),
        ct(!1);
    }
    function L(t) {
      var e = t,
        i = M(),
        o = H(),
        r = F();
      return (
        !i || r
          ? (e = C)
          : !o || t != x || (n.triggerOnTouchEnd && !n.triggerOnTouchLeave)
            ? !o && t == T && n.triggerOnTouchLeave && (e = C)
            : (e = T),
        e
      );
    }
    function R(t, e) {
      var n = void 0;
      return (
        X() || V() || B() || _()
          ? ((X() || V()) && (n = P(t, e, p)),
            (B() || _()) && n !== !1 && (n = P(t, e, d)))
          : ot() && n !== !1
            ? (n = P(t, e, h))
            : rt() && n !== !1
              ? (n = P(t, e, g))
              : it() && n !== !1 && (n = P(t, e, f)),
        e === C && O(t),
        e === T && (E ? 0 == t.touches.length && O(t) : O(t)),
        n
      );
    }
    function P(e, u, c) {
      var v = void 0;
      if (c == p) {
        if (
          (Bt.trigger("swipeStatus", [u, Pt || null, Rt || 0, Ht || 0, Vt, Xt]),
          n.swipeStatus &&
            ((v = n.swipeStatus.call(
              Bt,
              e,
              u,
              Pt || null,
              Rt || 0,
              Ht || 0,
              Vt,
              Xt,
            )),
            v === !1))
        )
          return !1;
        if (u == T && z()) {
          if (
            (Bt.trigger("swipe", [Pt, Rt, Ht, Vt, Xt]),
            n.swipe &&
              ((v = n.swipe.call(Bt, e, Pt, Rt, Ht, Vt, Xt)), v === !1))
          )
            return !1;
          switch (Pt) {
            case i:
              Bt.trigger("swipeLeft", [Pt, Rt, Ht, Vt, Xt]),
                n.swipeLeft &&
                  (v = n.swipeLeft.call(Bt, e, Pt, Rt, Ht, Vt, Xt));
              break;
            case o:
              Bt.trigger("swipeRight", [Pt, Rt, Ht, Vt, Xt]),
                n.swipeRight &&
                  (v = n.swipeRight.call(Bt, e, Pt, Rt, Ht, Vt, Xt));
              break;
            case r:
              Bt.trigger("swipeUp", [Pt, Rt, Ht, Vt, Xt]),
                n.swipeUp && (v = n.swipeUp.call(Bt, e, Pt, Rt, Ht, Vt, Xt));
              break;
            case s:
              Bt.trigger("swipeDown", [Pt, Rt, Ht, Vt, Xt]),
                n.swipeDown &&
                  (v = n.swipeDown.call(Bt, e, Pt, Rt, Ht, Vt, Xt));
          }
        }
      }
      if (c == d) {
        if (
          (Bt.trigger("pinchStatus", [
            u,
            Ut || null,
            Wt || 0,
            Ht || 0,
            Vt,
            Mt,
            Xt,
          ]),
          n.pinchStatus &&
            ((v = n.pinchStatus.call(
              Bt,
              e,
              u,
              Ut || null,
              Wt || 0,
              Ht || 0,
              Vt,
              Mt,
              Xt,
            )),
            v === !1))
        )
          return !1;
        if (u == T && U())
          switch (Ut) {
            case a:
              Bt.trigger("pinchIn", [Ut || null, Wt || 0, Ht || 0, Vt, Mt, Xt]),
                n.pinchIn &&
                  (v = n.pinchIn.call(
                    Bt,
                    e,
                    Ut || null,
                    Wt || 0,
                    Ht || 0,
                    Vt,
                    Mt,
                    Xt,
                  ));
              break;
            case l:
              Bt.trigger("pinchOut", [
                Ut || null,
                Wt || 0,
                Ht || 0,
                Vt,
                Mt,
                Xt,
              ]),
                n.pinchOut &&
                  (v = n.pinchOut.call(
                    Bt,
                    e,
                    Ut || null,
                    Wt || 0,
                    Ht || 0,
                    Vt,
                    Mt,
                    Xt,
                  ));
          }
      }
      return (
        c == f
          ? (u === C || u === T) &&
            (clearTimeout(Zt),
            clearTimeout(te),
            K() && !tt()
              ? ((Jt = $t()),
                (Zt = setTimeout(
                  t.proxy(function () {
                    (Jt = null),
                      Bt.trigger("tap", [e.target]),
                      n.tap && (v = n.tap.call(Bt, e, e.target));
                  }, this),
                  n.doubleTapThreshold,
                )))
              : ((Jt = null),
                Bt.trigger("tap", [e.target]),
                n.tap && (v = n.tap.call(Bt, e, e.target))))
          : c == h
            ? (u === C || u === T) &&
              (clearTimeout(Zt),
              (Jt = null),
              Bt.trigger("doubletap", [e.target]),
              n.doubleTap && (v = n.doubleTap.call(Bt, e, e.target)))
            : c == g &&
              (u === C || u === T) &&
              (clearTimeout(Zt),
              (Jt = null),
              Bt.trigger("longtap", [e.target]),
              n.longTap && (v = n.longTap.call(Bt, e, e.target))),
        v
      );
    }
    function H() {
      var t = !0;
      return null !== n.threshold && (t = Rt >= n.threshold), t;
    }
    function F() {
      var t = !1;
      return (
        null !== n.cancelThreshold &&
          null !== Pt &&
          (t = vt(Pt) - Rt >= n.cancelThreshold),
        t
      );
    }
    function q() {
      return null !== n.pinchThreshold ? Wt >= n.pinchThreshold : !0;
    }
    function M() {
      var t;
      return (t = n.maxTimeThreshold && Ht >= n.maxTimeThreshold ? !1 : !0);
    }
    function W(t, e) {
      if (n.preventDefaultEvents !== !1)
        if (n.allowPageScroll === u) t.preventDefault();
        else {
          var a = n.allowPageScroll === c;
          switch (e) {
            case i:
              ((n.swipeLeft && a) || (!a && n.allowPageScroll != v)) &&
                t.preventDefault();
              break;
            case o:
              ((n.swipeRight && a) || (!a && n.allowPageScroll != v)) &&
                t.preventDefault();
              break;
            case r:
              ((n.swipeUp && a) || (!a && n.allowPageScroll != m)) &&
                t.preventDefault();
              break;
            case s:
              ((n.swipeDown && a) || (!a && n.allowPageScroll != m)) &&
                t.preventDefault();
          }
        }
    }
    function U() {
      var t = Q(),
        e = Y(),
        n = q();
      return t && e && n;
    }
    function _() {
      return !!(n.pinchStatus || n.pinchIn || n.pinchOut);
    }
    function B() {
      return !(!U() || !_());
    }
    function z() {
      var t = M(),
        e = H(),
        n = Q(),
        i = Y(),
        o = F(),
        r = !o && i && n && e && t;
      return r;
    }
    function V() {
      return !!(
        n.swipe ||
        n.swipeStatus ||
        n.swipeLeft ||
        n.swipeRight ||
        n.swipeUp ||
        n.swipeDown
      );
    }
    function X() {
      return !(!z() || !V());
    }
    function Q() {
      return Vt === n.fingers || n.fingers === y || !E;
    }
    function Y() {
      return 0 !== Xt[0].end.x;
    }
    function G() {
      return !!n.tap;
    }
    function K() {
      return !!n.doubleTap;
    }
    function J() {
      return !!n.longTap;
    }
    function Z() {
      if (null == Jt) return !1;
      var t = $t();
      return K() && t - Jt <= n.doubleTapThreshold;
    }
    function tt() {
      return Z();
    }
    function et() {
      return (1 === Vt || !E) && (isNaN(Rt) || Rt < n.threshold);
    }
    function nt() {
      return Ht > n.longTapThreshold && b > Rt;
    }
    function it() {
      return !(!et() || !G());
    }
    function ot() {
      return !(!Z() || !K());
    }
    function rt() {
      return !(!nt() || !J());
    }
    function st() {
      (Gt = $t()), (Kt = event.touches.length + 1);
    }
    function at() {
      (Gt = 0), (Kt = 0);
    }
    function lt() {
      var t = !1;
      if (Gt) {
        var e = $t() - Gt;
        e <= n.fingerReleaseThreshold && (t = !0);
      }
      return t;
    }
    function ut() {
      return !(Bt.data(k + "_intouch") !== !0);
    }
    function ct(t) {
      t === !0
        ? (Bt.bind(Ot, D), Bt.bind(jt, A), It && Bt.bind(It, j))
        : (Bt.unbind(Ot, D, !1),
          Bt.unbind(jt, A, !1),
          It && Bt.unbind(It, j, !1)),
        Bt.data(k + "_intouch", t === !0);
    }
    function pt(t, e) {
      var n = void 0 !== e.identifier ? e.identifier : 0;
      return (
        (Xt[t].identifier = n),
        (Xt[t].start.x = Xt[t].end.x = e.pageX || e.clientX),
        (Xt[t].start.y = Xt[t].end.y = e.pageY || e.clientY),
        Xt[t]
      );
    }
    function dt(t) {
      var e = void 0 !== t.identifier ? t.identifier : 0,
        n = ft(e);
      return (
        (n.end.x = t.pageX || t.clientX), (n.end.y = t.pageY || t.clientY), n
      );
    }
    function ft(t) {
      for (var e = 0; e < Xt.length; e++)
        if (Xt[e].identifier == t) return Xt[e];
    }
    function ht() {
      for (var t = [], e = 0; 5 >= e; e++)
        t.push({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 }, identifier: 0 });
      return t;
    }
    function gt(t, e) {
      (e = Math.max(e, vt(t))), (_t[t].distance = e);
    }
    function vt(t) {
      return _t[t] ? _t[t].distance : void 0;
    }
    function mt() {
      var t = {};
      return (t[i] = yt(i)), (t[o] = yt(o)), (t[r] = yt(r)), (t[s] = yt(s)), t;
    }
    function yt(t) {
      return { direction: t, distance: 0 };
    }
    function bt() {
      return Yt - Qt;
    }
    function wt(t, e) {
      var n = Math.abs(t.x - e.x),
        i = Math.abs(t.y - e.y);
      return Math.round(Math.sqrt(n * n + i * i));
    }
    function xt(t, e) {
      var n = (e / t) * 1;
      return n.toFixed(2);
    }
    function Tt() {
      return 1 > Mt ? l : a;
    }
    function Ct(t, e) {
      return Math.round(
        Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)),
      );
    }
    function Et(t, e) {
      var n = t.x - e.x,
        i = e.y - t.y,
        o = Math.atan2(i, n),
        r = Math.round((180 * o) / Math.PI);
      return 0 > r && (r = 360 - Math.abs(r)), r;
    }
    function St(t, e) {
      var n = Et(t, e);
      return 45 >= n && n >= 0
        ? i
        : 360 >= n && n >= 315
          ? i
          : n >= 135 && 225 >= n
            ? o
            : n > 45 && 135 > n
              ? s
              : r;
    }
    function $t() {
      var t = new Date();
      return t.getTime();
    }
    function kt(e) {
      e = t(e);
      var n = e.offset(),
        i = {
          left: n.left,
          right: n.left + e.outerWidth(),
          top: n.top,
          bottom: n.top + e.outerHeight(),
        };
      return i;
    }
    function Nt(t, e) {
      return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom;
    }
    var Dt = E || $ || !n.fallbackToMouseEvents,
      At = Dt
        ? $
          ? S
            ? "MSPointerDown"
            : "pointerdown"
          : "touchstart"
        : "mousedown",
      Ot = Dt
        ? $
          ? S
            ? "MSPointerMove"
            : "pointermove"
          : "touchmove"
        : "mousemove",
      jt = Dt
        ? $
          ? S
            ? "MSPointerUp"
            : "pointerup"
          : "touchend"
        : "mouseup",
      It = Dt ? null : "mouseleave",
      Lt = $ ? (S ? "MSPointerCancel" : "pointercancel") : "touchcancel",
      Rt = 0,
      Pt = null,
      Ht = 0,
      Ft = 0,
      qt = 0,
      Mt = 1,
      Wt = 0,
      Ut = 0,
      _t = null,
      Bt = t(e),
      zt = "start",
      Vt = 0,
      Xt = null,
      Qt = 0,
      Yt = 0,
      Gt = 0,
      Kt = 0,
      Jt = 0,
      Zt = null,
      te = null;
    try {
      Bt.bind(At, N), Bt.bind(Lt, O);
    } catch (ee) {
      t.error("events not supported " + At + "," + Lt + " on jQuery.swipe");
    }
    (this.enable = function () {
      return Bt.bind(At, N), Bt.bind(Lt, O), Bt;
    }),
      (this.disable = function () {
        return I(), Bt;
      }),
      (this.destroy = function () {
        I(), Bt.data(k, null), (Bt = null);
      }),
      (this.option = function (e, i) {
        if (void 0 !== n[e]) {
          if (void 0 === i) return n[e];
          n[e] = i;
        } else
          t.error("Option " + e + " does not exist on jQuery.swipe.options");
        return null;
      });
  }
  var i = "left",
    o = "right",
    r = "up",
    s = "down",
    a = "in",
    l = "out",
    u = "none",
    c = "auto",
    p = "swipe",
    d = "pinch",
    f = "tap",
    h = "doubletap",
    g = "longtap",
    v = "horizontal",
    m = "vertical",
    y = "all",
    b = 10,
    w = "start",
    x = "move",
    T = "end",
    C = "cancel",
    E = "ontouchstart" in window,
    S = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
    $ = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
    k = "TouchSwipe",
    N = {
      fingers: 1,
      threshold: 75,
      cancelThreshold: null,
      pinchThreshold: 20,
      maxTimeThreshold: null,
      fingerReleaseThreshold: 250,
      longTapThreshold: 500,
      doubleTapThreshold: 200,
      swipe: null,
      swipeLeft: null,
      swipeRight: null,
      swipeUp: null,
      swipeDown: null,
      swipeStatus: null,
      pinchIn: null,
      pinchOut: null,
      pinchStatus: null,
      click: null,
      tap: null,
      doubleTap: null,
      longTap: null,
      hold: null,
      triggerOnTouchEnd: !0,
      triggerOnTouchLeave: !1,
      allowPageScroll: "auto",
      fallbackToMouseEvents: !0,
      excludedElements: "label, button, input, select, textarea, a, .noSwipe",
      preventDefaultEvents: !0,
    };
  (t.fn.swipe = function (n) {
    var i = t(this),
      o = i.data(k);
    if (o && "string" == typeof n) {
      if (o[n])
        return o[n].apply(this, Array.prototype.slice.call(arguments, 1));
      t.error("Method " + n + " does not exist on jQuery.swipe");
    } else if (!(o || ("object" != typeof n && n)))
      return e.apply(this, arguments);
    return i;
  }),
    (t.fn.swipe.defaults = N),
    (t.fn.swipe.phases = {
      PHASE_START: w,
      PHASE_MOVE: x,
      PHASE_END: T,
      PHASE_CANCEL: C,
    }),
    (t.fn.swipe.directions = {
      LEFT: i,
      RIGHT: o,
      UP: r,
      DOWN: s,
      IN: a,
      OUT: l,
    }),
    (t.fn.swipe.pageScroll = { NONE: u, HORIZONTAL: v, VERTICAL: m, AUTO: c }),
    (t.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, ALL: y });
});
