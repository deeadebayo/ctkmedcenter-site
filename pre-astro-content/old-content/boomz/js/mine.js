$("a[href*=#]:not([href=#],[href=#bs-carousel])").click(function () {
  "use strict";
  if (
    location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") ||
    location.hostname === this.hostname
  ) {
    var t = $(this.hash);
    if (((t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")), t.length))
      return $("html,body").animate({ scrollTop: t.offset().top }, 1e3), !1;
  }
}),
  $(window).scroll(function () {
    "use strict";
    $(this).scrollTop() > 160
      ? ($("nav").addClass("sticky"),
        $(".navbar-collapse").removeClass("navbar-right"),
        $(".top-bar").hide(),
        $("img.brand-logo").hide())
      : ($("nav").removeClass("sticky"),
        $(".top-bar").show(),
        $(".navbar-collapse").addClass("navbar-right"),
        $("img.brand-logo").show());
  }),
  $(".services").click(function () {
    "use strict";
    $(".service").removeClass("current"),
      $(this).toggleClass("current"),
      $(this).children(".service-description").slideToggle(600);
  }),
  $(".background-highlight").hover(function () {
    "use strict";
    $(this).toggleClass("fa-color-change");
  }),
  setInterval(function () {
    "use strict";
    $("#onetest").toggle(),
      $("#twotest").removeClass("hidden").fadeIn(),
      setTimeout(function () {
        $("#onetest").fadeToggle(), $("#twotest").addClass("hidden");
      }, 12e3);
  }, 2e4),
  setInterval(function () {
    "use strict";
    $("#threetest").toggle(),
      $("#fourtest").removeClass("hidden"),
      setTimeout(function () {
        $("#threetest").fadeToggle(), $("#fourtest").addClass("hidden");
      }, 12e3);
  }, 23500),
  setInterval(function () {
    "use strict";
    $("#fivetest").toggle(),
      $("#sixtest").removeClass("hidden"),
      setTimeout(function () {
        $("#fivetest").fadeToggle(), $("#sixtest").addClass("hidden");
      }, 12e3);
  }, 27e3),
  $(function () {
    "use strict";
    $("#activities div div a").each(function (t) {
      $(this)
        .delay(500 * t++)
        .fadeTo(1e3, 1);
    });
  }),
  $(function () {
    "use strict";
    var t = $(".left-side-feature").height();
    $(".right-side-feature").css("min-height", t / 2 + "px");
  }),
  $(function () {
    "use strict";
    $(".dropdown-toggle").dropdown();
  }),
  $("li a span.pres").click(function () {
    "use strict";
    $(".rotate-nav-icon").toggleClass("down");
  }),
  $("li a span.health").click(function () {
    "use strict";
    $(".rotate-nav-icon-health").toggleClass("down");
  }),
  $("li a span.about").click(function () {
    "use strict";
    $(".rotate-nav-icon-about").toggleClass("down");
  }),
  $(document).ready(function () {
    "use strict";
    $("body").append(
      '<div id="toTop" class="btn btn-info"><i class="fa fa-arrow-up"></i>Back to Top</div>',
    ),
      $(window).scroll(function () {
        0 !== $(this).scrollTop()
          ? $("#toTop").fadeIn()
          : $("#toTop").fadeOut();
      }),
      $("#toTop").click(function () {
        return $("html, body").animate({ scrollTop: 0 }, 600), !1;
      });
  }),
  $(document).ready(function () {
    "use strict";
    var t = [
      "waiting_empty.jpg",
      "doctor_teach.jpg",
      "test_tubs.jpg",
      "front_desk.jpg",
    ];
    $(".page-title-outer-box").css({
      "background-image":
        "url(/content/hosted_images/header/" +
        t[Math.floor(Math.random() * t.length)] +
        ")",
    });
  }),
  $(function () {
    "use strict";
    var t = moment(),
      e = document.getElementById("displayMoment");
    e.innerHTML = t.format(
      "[It&#39;s ]dddd[,] MMMM Do[. Today is a great day to be healthy.]",
    );
  }),
  $(".map-index").click(function () {
    "use strict";
    $(".map-index iframe").css("pointer-events", "auto");
  }),
  (function () {
    "use strict";
    var t = new Date(),
      e = t.getFullYear(),
      s = document.getElementById("this-year");
    s.innerHTML = e;
  })();
