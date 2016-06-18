$('a[href*=#]:not([href=#],[href=#bs-carousel])').click(function () {
    'use strict';
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

$(window).scroll(function () { //function here to change the behavior of the navbar when you scroll past a certain length
    'use strict';
    if ($(this).scrollTop() > 160) {
        $('nav').addClass("sticky");
        $('.navbar-collapse').removeClass("navbar-right");
        $('.top-bar').hide(); //hides that blue bar at the top
        $('img.brand-logo').hide();
    } else {
        $('nav').removeClass("sticky");
        $('.top-bar').show();
        $('.navbar-collapse').addClass("navbar-right");
        $('img.brand-logo').show();
    }
});

$('.services').click(function () {
    'use strict';
    $('.service').removeClass('current');

    $(this).toggleClass('current');
    $(this).children('.service-description').slideToggle(600);
});

$('.background-highlight').hover(function () {
    'use strict';
    //    $('.activity-btn').removeClass('fa-color-change');

    $(this).toggleClass('fa-color-change');
});

setInterval(function () {
    // toggle the class every five second
    'use strict';
    $('#onetest').toggle();
    $('#twotest').removeClass('hidden').fadeIn();
    setTimeout(function () {
        // toggle back after 1 second
        $('#onetest').fadeToggle();
        $('#twotest').addClass('hidden');
    }, 12000);

}, 20000);

setInterval(function () {
    // toggle the class every five second
    'use strict';
    $('#threetest').toggle();
    $('#fourtest').removeClass('hidden');
    setTimeout(function () {
        // toggle back after 1 second
        $('#threetest').fadeToggle();
        $('#fourtest').addClass('hidden');
    }, 12000);

}, 23500);

setInterval(function () {
    // toggle the class every five second
    'use strict';
    $('#fivetest').toggle();
    $('#sixtest').removeClass('hidden');
    setTimeout(function () {
        // toggle back after 1 second
        $('#fivetest').fadeToggle();
        $('#sixtest').addClass('hidden');
    }, 12000);

}, 27000);

$(function () {
    'use strict';
    $('#activities div div a').each(function (i) {
        $(this).delay((i++) * 500).fadeTo(1000, 1);
    });
});

$(function () {
    'use strict';
    var divHeight = $('.left-side-feature').height();
    $('.right-side-feature').css('min-height', divHeight / 2 + 'px');
});


$(function () {
    'use strict';
    $(".dropdown-toggle").dropdown();
});

$("li a span.pres").click(function () {
    'use strict';
    $(".rotate-nav-icon").toggleClass("down");
});

$("li a span.health").click(function () {
    'use strict';
    $(".rotate-nav-icon-health").toggleClass("down");
});

$("li a span.about").click(function () {
    'use strict';
    $(".rotate-nav-icon-about").toggleClass("down");
});

$(document).ready(function () {
    'use strict';
    $('body').append('<div id="toTop" class="btn btn-info"><i class="fa fa-arrow-up"></i>Back to Top</div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

$(document).ready(function () {
    'use strict';
    var images = ['waiting_empty.jpg', 'doctor_teach.jpg', 'test_tubs.jpg', 'front_desk.jpg'];
    $('.page-title-outer-box').css({'background-image': 'url(/content/hosted_images/header/' + images[Math.floor(Math.random() * images.length)] + ')'});
});

// use Moment.js to display current date in a div (#displayMoment)
$(function () {
    'use strict';
    var NowMoment = moment(), eDisplayMoment = document.getElementById('displayMoment');
    eDisplayMoment.innerHTML = NowMoment.format('[It&#39;s ]dddd[,] MMMM Do[. Today is a great day to be healthy.]');
});

$('.map-index').click(function () {
    $('.map-index iframe').css("pointer-events", "auto");
});

