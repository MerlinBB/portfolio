(function ($) {
    "use strict";

    var portfolio = {

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
            $(".btn").on("click", function (e) { portfolio.sayHello(e); });
        },

        windowLoaded: function () {
            //
        },

        windowScrolled: function () {
            console.log("Scrolled");
        },

        sayHello: function (e) {
            var button = $(e.currentTarget);
            alert("Hello from " + button);
        },

        drawLogo: function () {
            var logoPath = "l 0,-100, l 50,50, l 50,-50, l 0,100";
            var logoFlatPath = "M50,53 l 50,0, l 50,0, l 50,0, l 50,0";

            var m1Path = "M95,103 " + logoPath;
            var m2Path = "M105,103 " + logoPath;

            var s = new Snap("#logo");

            var logoSettings = {
                fill: "none",
                stroke: "#666",
                strokeWidth: 3,
                strokeLinejoin: "round",
                strokeLinecap: "round"
            };

            var m1 = s.path(m1Path);
            m1.attr(logoSettings);

            var m2 = s.path(m2Path);
            m2.attr(logoSettings);

            $(".logo-wrap").hover(function () {
                m1.animate({ d: logoFlatPath, strokeWidth: 1 }, 200, mina.easeout);
                m2.animate({ d: logoFlatPath, strokeWidth: 1 }, 200, mina.easeout);
            }, function () {
                m1.animate({ d: m1Path, strokeWidth: 3 }, 200, mina.easeout);
                m2.animate({ d: m2Path, strokeWidth: 3 }, 200, mina.easeout);
            });
        }

    };

    // DOM Ready
    $(function () { portfolio.init(); });
    // Images Loaded
    $(window).load(function () { portfolio.windowLoaded(); });
    // Window Scrolled
    $(window).on("scroll", function () { portfolio.windowScrolled(); });

} (jQuery));
