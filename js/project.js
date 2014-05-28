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
            $(".slides").slick({
                slide: "li",
                dots: true,
                cssEase: "cubic-bezier(.72,.06,.35,.96)",
                lazyLoad: "progressive",
                speed: Modernizr.touch ? 200 : 600
            });
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
        }
    };

    // DOM Ready
    $(function () { portfolio.init(); });
    // Window Scrolled
    $(window).on("scroll", function () { portfolio.windowScrolled(); });

} (jQuery));
