(function ($) {

    'use strict';

    /*-------------------------------------------
        Sticky Header
    --------------------------------------------- */

    $(".menu-bar > a").on("click", function (e) {
        e.preventDefault();
        $(".menu-area").toggleClass("active");
        $(this).addClass('active');
    });

    $(".close-btn > a").on("click", function (e) {
        e.preventDefault();
        $(".menu-area").removeClass("active");
        $(".menu-bar > a").removeClass("active");
    });

    let win = $(window);
    let sticky_id = $(".header-area");
    let slider_id = $(".single-slide");
    win.on('scroll', function () {
        let scroll = win.scrollTop();
        if (scroll < 50) {
            sticky_id.removeClass("sticky-header");
        } else {
            sticky_id.addClass("sticky-header");
        }

        if (scroll < 50) {
            slider_id.removeClass("active");
        } else {
            slider_id.addClass("active");
        }
    });

    /*------------------------------------
        Data-Background
    --------------------------------------*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background", $(this).attr("data-bg-color"))
    });


})(jQuery);
