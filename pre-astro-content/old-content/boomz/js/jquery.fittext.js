!(function (t) {
  "use strict";
  t.fn.fitText = function (e, n) {
    var i = e || 1,
      o = t.extend(
        {
          minFontSize: Number.NEGATIVE_INFINITY,
          maxFontSize: Number.POSITIVE_INFINITY,
        },
        n,
      );
    return this.each(function () {
      var e = t(this),
        n = function () {
          e.css(
            "font-size",
            Math.max(
              Math.min(e.width() / (10 * i), parseFloat(o.maxFontSize)),
              parseFloat(o.minFontSize),
            ),
          );
        };
      n(), t(window).on("resize.fittext orientationchange.fittext", n);
    });
  };
})(jQuery);
