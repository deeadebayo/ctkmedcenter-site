(function (a) {
  "use strict";
  if (typeof define === "function" && define.amd && define.amd.jQuery) {
    define(["jquery"], a);
  } else {
    a(jQuery);
  }
})(function (f) {
  var p = "left",
    o = "right",
    e = "up",
    x = "down",
    c = "in",
    z = "out",
    m = "none",
    s = "auto",
    l = "swipe",
    t = "pinch",
    A = "tap",
    j = "doubletap",
    b = "longtap",
    y = "hold",
    D = "horizontal",
    u = "vertical",
    i = "all",
    r = 10,
    g = "start",
    k = "move",
    h = "end",
    q = "cancel",
    a = "ontouchstart" in window,
    v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
    d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
    B = "TouchSwipe";
  var n = {
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
    triggerOnTouchEnd: true,
    triggerOnTouchLeave: false,
    allowPageScroll: "auto",
    fallbackToMouseEvents: true,
    excludedElements: "label, button, input, select, textarea, a, .noSwipe",
    preventDefaultEvents: true,
  };
  f.fn.swipe = function (G) {
    var F = f(this),
      E = F.data(B);
    if (E && typeof G === "string") {
      if (E[G]) {
        return E[G].apply(this, Array.prototype.slice.call(arguments, 1));
      } else {
        f.error("Method " + G + " does not exist on jQuery.swipe");
      }
    } else {
      if (!E && (typeof G === "object" || !G)) {
        return w.apply(this, arguments);
      }
    }
    return F;
  };
  f.fn.swipe.defaults = n;
  f.fn.swipe.phases = {
    PHASE_START: g,
    PHASE_MOVE: k,
    PHASE_END: h,
    PHASE_CANCEL: q,
  };
  f.fn.swipe.directions = {
    LEFT: p,
    RIGHT: o,
    UP: e,
    DOWN: x,
    IN: c,
    OUT: z,
  };
  f.fn.swipe.pageScroll = {
    NONE: m,
    HORIZONTAL: D,
    VERTICAL: u,
    AUTO: s,
  };
  f.fn.swipe.fingers = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    ALL: i,
  };

  function w(E) {
    if (
      E &&
      E.allowPageScroll === undefined &&
      (E.swipe !== undefined || E.swipeStatus !== undefined)
    ) {
      E.allowPageScroll = m;
    }
    if (E.click !== undefined && E.tap === undefined) {
      E.tap = E.click;
    }
    if (!E) {
      E = {};
    }
    E = f.extend({}, f.fn.swipe.defaults, E);
    return this.each(function () {
      var G = f(this);
      var F = G.data(B);
      if (!F) {
        F = new C(this, E);
        G.data(B, F);
      }
    });
  }

  function C(a4, av) {
    var az = a || d || !av.fallbackToMouseEvents,
      J = az
        ? d
          ? v
            ? "MSPointerDown"
            : "pointerdown"
          : "touchstart"
        : "mousedown",
      ay = az
        ? d
          ? v
            ? "MSPointerMove"
            : "pointermove"
          : "touchmove"
        : "mousemove",
      U = az ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
      S = az ? null : "mouseleave",
      aD = d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel";
    var ag = 0,
      aP = null,
      ab = 0,
      a1 = 0,
      aZ = 0,
      G = 1,
      aq = 0,
      aJ = 0,
      M = null;
    var aR = f(a4);
    var Z = "start";
    var W = 0;
    var aQ = null;
    var T = 0,
      a2 = 0,
      a5 = 0,
      ad = 0,
      N = 0;
    var aW = null,
      af = null;
    try {
      aR.bind(J, aN);
      aR.bind(aD, a9);
    } catch (ak) {
      f.error("events not supported " + J + "," + aD + " on jQuery.swipe");
    }
    this.enable = function () {
      aR.bind(J, aN);
      aR.bind(aD, a9);
      return aR;
    };
    this.disable = function () {
      aK();
      return aR;
    };
    this.destroy = function () {
      aK();
      aR.data(B, null);
      aR = null;
    };
    this.option = function (bc, bb) {
      if (av[bc] !== undefined) {
        if (bb === undefined) {
          return av[bc];
        } else {
          av[bc] = bb;
        }
      } else {
        f.error("Option " + bc + " does not exist on jQuery.swipe.options");
      }
      return null;
    };

    function aN(bd) {
      if (aB()) {
        return;
      }
      if (f(bd.target).closest(av.excludedElements, aR).length > 0) {
        return;
      }
      var be = bd.originalEvent ? bd.originalEvent : bd;
      var bc,
        bb = a ? be.touches[0] : be;
      Z = g;
      if (a) {
        W = be.touches.length;
      } else {
        bd.preventDefault();
      }
      ag = 0;
      aP = null;
      aJ = null;
      ab = 0;
      a1 = 0;
      aZ = 0;
      G = 1;
      aq = 0;
      aQ = aj();
      M = aa();
      R();
      if (!a || W === av.fingers || av.fingers === i || aX()) {
        ai(0, bb);
        T = at();
        if (W == 2) {
          ai(1, be.touches[1]);
          a1 = aZ = au(aQ[0].start, aQ[1].start);
        }
        if (av.swipeStatus || av.pinchStatus) {
          bc = O(be, Z);
        }
      } else {
        bc = false;
      }
      if (bc === false) {
        Z = q;
        O(be, Z);
        return bc;
      } else {
        if (av.hold) {
          af = setTimeout(
            f.proxy(function () {
              aR.trigger("hold", [be.target]);
              if (av.hold) {
                bc = av.hold.call(aR, be, be.target);
              }
            }, this),
            av.longTapThreshold,
          );
        }
        ao(true);
      }
      return null;
    }

    function a3(be) {
      var bh = be.originalEvent ? be.originalEvent : be;
      if (Z === h || Z === q || am()) {
        return;
      }
      var bd,
        bc = a ? bh.touches[0] : bh;
      var bf = aH(bc);
      a2 = at();
      if (a) {
        W = bh.touches.length;
      }
      if (av.hold) {
        clearTimeout(af);
      }
      Z = k;
      if (W == 2) {
        if (a1 == 0) {
          ai(1, bh.touches[1]);
          a1 = aZ = au(aQ[0].start, aQ[1].start);
        } else {
          aH(bh.touches[1]);
          aZ = au(aQ[0].end, aQ[1].end);
          aJ = ar(aQ[0].end, aQ[1].end);
        }
        G = a7(a1, aZ);
        aq = Math.abs(a1 - aZ);
      }
      if (W === av.fingers || av.fingers === i || !a || aX()) {
        aP = aL(bf.start, bf.end);
        al(be, aP);
        ag = aS(bf.start, bf.end);
        ab = aM();
        aI(aP, ag);
        if (av.swipeStatus || av.pinchStatus) {
          bd = O(bh, Z);
        }
        if (!av.triggerOnTouchEnd || av.triggerOnTouchLeave) {
          var bb = true;
          if (av.triggerOnTouchLeave) {
            var bg = aY(this);
            bb = E(bf.end, bg);
          }
          if (!av.triggerOnTouchEnd && bb) {
            Z = aC(k);
          } else {
            if (av.triggerOnTouchLeave && !bb) {
              Z = aC(h);
            }
          }
          if (Z == q || Z == h) {
            O(bh, Z);
          }
        }
      } else {
        Z = q;
        O(bh, Z);
      }
      if (bd === false) {
        Z = q;
        O(bh, Z);
      }
    }

    function L(bb) {
      var bc = bb.originalEvent;
      if (a) {
        if (bc.touches.length > 0) {
          F();
          return true;
        }
      }
      if (am()) {
        W = ad;
      }
      a2 = at();
      ab = aM();
      if (ba() || !an()) {
        Z = q;
        O(bc, Z);
      } else {
        if (
          av.triggerOnTouchEnd ||
          (av.triggerOnTouchEnd == false && Z === k)
        ) {
          bb.preventDefault();
          Z = h;
          O(bc, Z);
        } else {
          if (!av.triggerOnTouchEnd && a6()) {
            Z = h;
            aF(bc, Z, A);
          } else {
            if (Z === k) {
              Z = q;
              O(bc, Z);
            }
          }
        }
      }
      ao(false);
      return null;
    }

    function a9() {
      W = 0;
      a2 = 0;
      T = 0;
      a1 = 0;
      aZ = 0;
      G = 1;
      R();
      ao(false);
    }

    function K(bb) {
      var bc = bb.originalEvent;
      if (av.triggerOnTouchLeave) {
        Z = aC(h);
        O(bc, Z);
      }
    }

    function aK() {
      aR.unbind(J, aN);
      aR.unbind(aD, a9);
      aR.unbind(ay, a3);
      aR.unbind(U, L);
      if (S) {
        aR.unbind(S, K);
      }
      ao(false);
    }

    function aC(bf) {
      var be = bf;
      var bd = aA();
      var bc = an();
      var bb = ba();
      if (!bd || bb) {
        be = q;
      } else {
        if (
          bc &&
          bf == k &&
          (!av.triggerOnTouchEnd || av.triggerOnTouchLeave)
        ) {
          be = h;
        } else {
          if (!bc && bf == h && av.triggerOnTouchLeave) {
            be = q;
          }
        }
      }
      return be;
    }

    function O(bd, bb) {
      var bc = undefined;
      if (I() || V() || P() || aX()) {
        if (I() || V()) {
          bc = aF(bd, bb, l);
        }
        if ((P() || aX()) && bc !== false) {
          bc = aF(bd, bb, t);
        }
      } else {
        if (aG() && bc !== false) {
          bc = aF(bd, bb, j);
        } else {
          if (ap() && bc !== false) {
            bc = aF(bd, bb, b);
          } else {
            if (ah() && bc !== false) {
              bc = aF(bd, bb, A);
            }
          }
        }
      }
      if (bb === q) {
        a9(bd);
      }
      if (bb === h) {
        if (a) {
          if (bd.touches.length == 0) {
            a9(bd);
          }
        } else {
          a9(bd);
        }
      }
      return bc;
    }

    function aF(be, bb, bd) {
      var bc = undefined;
      if (bd == l) {
        aR.trigger("swipeStatus", [bb, aP || null, ag || 0, ab || 0, W, aQ]);
        if (av.swipeStatus) {
          bc = av.swipeStatus.call(
            aR,
            be,
            bb,
            aP || null,
            ag || 0,
            ab || 0,
            W,
            aQ,
          );
          if (bc === false) {
            return false;
          }
        }
        if (bb == h && aV()) {
          aR.trigger("swipe", [aP, ag, ab, W, aQ]);
          if (av.swipe) {
            bc = av.swipe.call(aR, be, aP, ag, ab, W, aQ);
            if (bc === false) {
              return false;
            }
          }
          switch (aP) {
            case p:
              aR.trigger("swipeLeft", [aP, ag, ab, W, aQ]);
              if (av.swipeLeft) {
                bc = av.swipeLeft.call(aR, be, aP, ag, ab, W, aQ);
              }
              break;
            case o:
              aR.trigger("swipeRight", [aP, ag, ab, W, aQ]);
              if (av.swipeRight) {
                bc = av.swipeRight.call(aR, be, aP, ag, ab, W, aQ);
              }
              break;
            case e:
              aR.trigger("swipeUp", [aP, ag, ab, W, aQ]);
              if (av.swipeUp) {
                bc = av.swipeUp.call(aR, be, aP, ag, ab, W, aQ);
              }
              break;
            case x:
              aR.trigger("swipeDown", [aP, ag, ab, W, aQ]);
              if (av.swipeDown) {
                bc = av.swipeDown.call(aR, be, aP, ag, ab, W, aQ);
              }
              break;
          }
        }
      }
      if (bd == t) {
        aR.trigger("pinchStatus", [bb, aJ || null, aq || 0, ab || 0, W, G, aQ]);
        if (av.pinchStatus) {
          bc = av.pinchStatus.call(
            aR,
            be,
            bb,
            aJ || null,
            aq || 0,
            ab || 0,
            W,
            G,
            aQ,
          );
          if (bc === false) {
            return false;
          }
        }
        if (bb == h && a8()) {
          switch (aJ) {
            case c:
              aR.trigger("pinchIn", [aJ || null, aq || 0, ab || 0, W, G, aQ]);
              if (av.pinchIn) {
                bc = av.pinchIn.call(
                  aR,
                  be,
                  aJ || null,
                  aq || 0,
                  ab || 0,
                  W,
                  G,
                  aQ,
                );
              }
              break;
            case z:
              aR.trigger("pinchOut", [aJ || null, aq || 0, ab || 0, W, G, aQ]);
              if (av.pinchOut) {
                bc = av.pinchOut.call(
                  aR,
                  be,
                  aJ || null,
                  aq || 0,
                  ab || 0,
                  W,
                  G,
                  aQ,
                );
              }
              break;
          }
        }
      }
      if (bd == A) {
        if (bb === q || bb === h) {
          clearTimeout(aW);
          clearTimeout(af);
          if (Y() && !H()) {
            N = at();
            aW = setTimeout(
              f.proxy(function () {
                N = null;
                aR.trigger("tap", [be.target]);
                if (av.tap) {
                  bc = av.tap.call(aR, be, be.target);
                }
              }, this),
              av.doubleTapThreshold,
            );
          } else {
            N = null;
            aR.trigger("tap", [be.target]);
            if (av.tap) {
              bc = av.tap.call(aR, be, be.target);
            }
          }
        }
      } else {
        if (bd == j) {
          if (bb === q || bb === h) {
            clearTimeout(aW);
            N = null;
            aR.trigger("doubletap", [be.target]);
            if (av.doubleTap) {
              bc = av.doubleTap.call(aR, be, be.target);
            }
          }
        } else {
          if (bd == b) {
            if (bb === q || bb === h) {
              clearTimeout(aW);
              N = null;
              aR.trigger("longtap", [be.target]);
              if (av.longTap) {
                bc = av.longTap.call(aR, be, be.target);
              }
            }
          }
        }
      }
      return bc;
    }

    function an() {
      var bb = true;
      if (av.threshold !== null) {
        bb = ag >= av.threshold;
      }
      return bb;
    }

    function ba() {
      var bb = false;
      if (av.cancelThreshold !== null && aP !== null) {
        bb = aT(aP) - ag >= av.cancelThreshold;
      }
      return bb;
    }

    function ae() {
      if (av.pinchThreshold !== null) {
        return aq >= av.pinchThreshold;
      }
      return true;
    }

    function aA() {
      var bb;
      if (av.maxTimeThreshold) {
        if (ab >= av.maxTimeThreshold) {
          bb = false;
        } else {
          bb = true;
        }
      } else {
        bb = true;
      }
      return bb;
    }

    function al(bb, bc) {
      if (av.preventDefaultEvents === false) {
        return;
      }
      if (av.allowPageScroll === m) {
        bb.preventDefault();
      } else {
        var bd = av.allowPageScroll === s;
        switch (bc) {
          case p:
            if ((av.swipeLeft && bd) || (!bd && av.allowPageScroll != D)) {
              bb.preventDefault();
            }
            break;
          case o:
            if ((av.swipeRight && bd) || (!bd && av.allowPageScroll != D)) {
              bb.preventDefault();
            }
            break;
          case e:
            if ((av.swipeUp && bd) || (!bd && av.allowPageScroll != u)) {
              bb.preventDefault();
            }
            break;
          case x:
            if ((av.swipeDown && bd) || (!bd && av.allowPageScroll != u)) {
              bb.preventDefault();
            }
            break;
        }
      }
    }

    function a8() {
      var bc = aO();
      var bb = X();
      var bd = ae();
      return bc && bb && bd;
    }

    function aX() {
      return !!(av.pinchStatus || av.pinchIn || av.pinchOut);
    }

    function P() {
      return !!(a8() && aX());
    }

    function aV() {
      var be = aA();
      var bg = an();
      var bd = aO();
      var bb = X();
      var bc = ba();
      var bf = !bc && bb && bd && bg && be;
      return bf;
    }

    function V() {
      return !!(
        av.swipe ||
        av.swipeStatus ||
        av.swipeLeft ||
        av.swipeRight ||
        av.swipeUp ||
        av.swipeDown
      );
    }

    function I() {
      return !!(aV() && V());
    }

    function aO() {
      return W === av.fingers || av.fingers === i || !a;
    }

    function X() {
      return aQ[0].end.x !== 0;
    }

    function a6() {
      return !!av.tap;
    }

    function Y() {
      return !!av.doubleTap;
    }

    function aU() {
      return !!av.longTap;
    }

    function Q() {
      if (N == null) {
        return false;
      }
      var bb = at();
      return Y() && bb - N <= av.doubleTapThreshold;
    }

    function H() {
      return Q();
    }

    function ax() {
      return (W === 1 || !a) && (isNaN(ag) || ag < av.threshold);
    }

    function a0() {
      return ab > av.longTapThreshold && ag < r;
    }

    function ah() {
      return !!(ax() && a6());
    }

    function aG() {
      return !!(Q() && Y());
    }

    function ap() {
      return !!(a0() && aU());
    }

    function F() {
      a5 = at();
      ad = event.touches.length + 1;
    }

    function R() {
      a5 = 0;
      ad = 0;
    }

    function am() {
      var bb = false;
      if (a5) {
        var bc = at() - a5;
        if (bc <= av.fingerReleaseThreshold) {
          bb = true;
        }
      }
      return bb;
    }

    function aB() {
      return !!(aR.data(B + "_intouch") === true);
    }

    function ao(bb) {
      if (bb === true) {
        aR.bind(ay, a3);
        aR.bind(U, L);
        if (S) {
          aR.bind(S, K);
        }
      } else {
        aR.unbind(ay, a3, false);
        aR.unbind(U, L, false);
        if (S) {
          aR.unbind(S, K, false);
        }
      }
      aR.data(B + "_intouch", bb === true);
    }

    function ai(bc, bb) {
      var bd = bb.identifier !== undefined ? bb.identifier : 0;
      aQ[bc].identifier = bd;
      aQ[bc].start.x = aQ[bc].end.x = bb.pageX || bb.clientX;
      aQ[bc].start.y = aQ[bc].end.y = bb.pageY || bb.clientY;
      return aQ[bc];
    }

    function aH(bb) {
      var bd = bb.identifier !== undefined ? bb.identifier : 0;
      var bc = ac(bd);
      bc.end.x = bb.pageX || bb.clientX;
      bc.end.y = bb.pageY || bb.clientY;
      return bc;
    }

    function ac(bc) {
      for (var bb = 0; bb < aQ.length; bb++) {
        if (aQ[bb].identifier == bc) {
          return aQ[bb];
        }
      }
    }

    function aj() {
      var bb = [];
      for (var bc = 0; bc <= 5; bc++) {
        bb.push({
          start: {
            x: 0,
            y: 0,
          },
          end: {
            x: 0,
            y: 0,
          },
          identifier: 0,
        });
      }
      return bb;
    }

    function aI(bb, bc) {
      bc = Math.max(bc, aT(bb));
      M[bb].distance = bc;
    }

    function aT(bb) {
      if (M[bb]) {
        return M[bb].distance;
      }
      return undefined;
    }

    function aa() {
      var bb = {};
      bb[p] = aw(p);
      bb[o] = aw(o);
      bb[e] = aw(e);
      bb[x] = aw(x);
      return bb;
    }

    function aw(bb) {
      return {
        direction: bb,
        distance: 0,
      };
    }

    function aM() {
      return a2 - T;
    }

    function au(be, bd) {
      var bc = Math.abs(be.x - bd.x);
      var bb = Math.abs(be.y - bd.y);
      return Math.round(Math.sqrt(bc * bc + bb * bb));
    }

    function a7(bb, bc) {
      var bd = (bc / bb) * 1;
      return bd.toFixed(2);
    }

    function ar() {
      if (G < 1) {
        return z;
      } else {
        return c;
      }
    }

    function aS(bc, bb) {
      return Math.round(
        Math.sqrt(Math.pow(bb.x - bc.x, 2) + Math.pow(bb.y - bc.y, 2)),
      );
    }

    function aE(be, bc) {
      var bb = be.x - bc.x;
      var bg = bc.y - be.y;
      var bd = Math.atan2(bg, bb);
      var bf = Math.round((bd * 180) / Math.PI);
      if (bf < 0) {
        bf = 360 - Math.abs(bf);
      }
      return bf;
    }

    function aL(bc, bb) {
      var bd = aE(bc, bb);
      if (bd <= 45 && bd >= 0) {
        return p;
      } else {
        if (bd <= 360 && bd >= 315) {
          return p;
        } else {
          if (bd >= 135 && bd <= 225) {
            return o;
          } else {
            if (bd > 45 && bd < 135) {
              return x;
            } else {
              return e;
            }
          }
        }
      }
    }

    function at() {
      var bb = new Date();
      return bb.getTime();
    }

    function aY(bb) {
      bb = f(bb);
      var bd = bb.offset();
      var bc = {
        left: bd.left,
        right: bd.left + bb.outerWidth(),
        top: bd.top,
        bottom: bd.top + bb.outerHeight(),
      };
      return bc;
    }

    function E(bb, bc) {
      return (
        bb.x > bc.left && bb.x < bc.right && bb.y > bc.top && bb.y < bc.bottom
      );
    }
  }
});
