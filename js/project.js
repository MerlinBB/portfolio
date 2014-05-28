(function ($) {
    "use strict";

    var portfolio = {

        logoPath: "l 0,-100, l 50,50, l 50,-50, l 0,100",
        logoFlatPath: "M50,53 l 50,0, l 50,0, l 50,0, l 50,0",
        m1Path: "M95,103 l 0,-100, l 50,50, l 50,-50, l 0,100",
        m2Path: "M105,103 l 0,-100, l 50,50, l 50,-50, l 0,100",

        init: function () {
            this.drawLogo();
            this.bindUIActions();
            portfolio.initSlider();
        },

        bindUIActions: function () {
            $(".logo-wrap").on({
                mouseenter: function () { portfolio.flattenLogo(); },
                mouseleave: function () { portfolio.errectLogo(); }
            });
        },

        windowScrolled: function () {
            if ($(window).scrollTop() > 10) {
                portfolio.flattenLogo();
            } else {
                portfolio.errectLogo();
            }
        },

        drawLogo: function () {

            var s = new Snap("#logo");

            var logoSettings = {
                fill: "none",
                stroke: "#666",
                strokeWidth: 3,
                strokeLinejoin: "round",
                strokeLinecap: "round"
            };

            portfolio.m1 = s.path(portfolio.m1Path);
            portfolio.m1.attr(logoSettings);

            portfolio.m2 = s.path(portfolio.m2Path);
            portfolio.m2.attr(logoSettings);
        },

        flattenLogo: function () {
            portfolio.m1.animate({ d: portfolio.logoFlatPath }, 200);
            portfolio.m2.animate({ d: portfolio.logoFlatPath }, 200);
        },

        errectLogo: function () {
            portfolio.m1.animate({ d: portfolio.m1Path }, 200);
            portfolio.m2.animate({ d: portfolio.m2Path }, 200);
        },

        initSlider: function () {
            $(".flexslider").flexslider({
                animation: "slide",
                slideshow: false,
                prevText: "",
                nextText: "",
                easing: "easeInOutCubic",
                animationSpeed: Modernizr.touch ? 200 : 600,
                start: function (slider) {
                    var pos = $(slider).find(".flex-control-paging li:first-child").position();
                    if (pos) {
                        var paginator = $("<li class=paginator></li>").css({ "left" : pos.left + "px" });
                        $(slider).find(".flex-control-paging").append(paginator);
                    }
                },
                before: function (slider) {
                    var target = slider.animatingTo + 1; // 1 needed to convert zero indexed array into nth-child
                    var pos = $(slider).find(".flex-control-paging li:nth-child(" + target + ")").position();
                    $(slider).find(".paginator").css({ "left" : pos.left + "px" });
                }
            });
        }
    };

    // DOM Ready
    $(function () { portfolio.init(); });
    // Window Scrolled
    $(window).on("scroll", function () { portfolio.windowScrolled(); });

} (jQuery));
