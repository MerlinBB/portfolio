(function ($) {
    "use strict";

    var portfolio = {

        init: function () {
            this.bindUIActions();
            $(".slides").slick({
                slide: "li",
                dots: true,
                cssEase: "cubic-bezier(.72,.06,.35,.96)",
                lazyLoad: "progressive",
                speed: 600
            });
        },

        bindUIActions: function () {
            $(".btn").on("click", function (e) { portfolio.sayHello(e); });
        },

        windowLoaded: function () {
            this.drawLogo();
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
            var logoFlatPath = "l 50,0, l 50,0, l 50,0, l 50,0";

            var logo1Path =     "M90,103 " + logoPath;
            var logo1FlatPath = "M50,53 " + logoFlatPath;
            var logo2Path =     "M100,103 " + logoPath;
            var logo2FlatPath = "M50,53 " + logoFlatPath;
            var logo3Path =     "M110,103 " + logoPath;
            var logo3FlatPath = "M50,53 " + logoFlatPath;

            var s = new Snap("#logo");

            var logoattrs = {
                fill: "none",
                stroke: "#666",
                strokeWidth: 3,
                strokeLinejoin: "round",
                strokeLinecap: "round"
            };

            var logo1 = s.path(logo1Path);
            logo1.attr(logoattrs);

            var logo2 = s.path(logo2Path);
            logo2.attr(logoattrs);

            var logo3 = s.path(logo3Path);
            logo3.attr(logoattrs);

            $(".logo-wrap").hover(function () {
                logo1.animate({ d: logo1FlatPath, strokeWidth: 1 }, 200, mina.easeout);
                logo2.animate({ d: logo2FlatPath, strokeWidth: 1 }, 200, mina.easeout);
                logo3.animate({ d: logo3FlatPath, strokeWidth: 1 }, 200, mina.easeout);
            }, function () {
                logo1.animate({ d: logo1Path, strokeWidth: 3 }, 200, mina.easeout);
                logo2.animate({ d: logo2Path, strokeWidth: 3 }, 200, mina.easeout);
                logo3.animate({ d: logo3Path, strokeWidth: 3 }, 200, mina.easeout);
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
