(function ($) {
    "use strict";

    var portfolio = {

        init: function () {
            this.bindUIActions();
            $(".slides").slick({
                slide: "li",
                dots: true
            });
        },

        bindUIActions: function () {
            $(".btn").on("click", function (e) { portfolio.sayHello(e); });
        },

        windowLoaded: function () {
            this.drawLogo();
        },

        windowResized: function () {
            console.log("Resized");
        },

        windowScrolled: function () {
            console.log("Scrolled");
        },

        sayHello: function (e) {
            var button = $(e.currentTarget);
            alert("Hello from " + button);
        },

        drawLogo: function () {
            var logoPath = "M100,103 l 0,-100, l 50,50, l 50,-50, l 0,100";
            var logoFlatPath = "M50,53 l 50,0, l 50,0, l 50,0, l 50,0";
            var s = new Snap("#logo");
            var logo = s.path(logoFlatPath);
            logo.attr({
                fill: "none",
                stroke: "#666",
                strokeWidth: 3
            });
            logo.animate({d: logoPath}, 600, mina.easeout);

            $(".page-header").hover(function () {
                logo.animate({d: logoFlatPath}, 200, mina.easeout);
            }, function () {
                logo.animate({d: logoPath}, 200, mina.easeout);
            });
        }

    };

    // DOM Ready
    $(function () { portfolio.init(); });
    // Images Loaded
    $(window).load(function () { portfolio.windowLoaded(); });
    // Window Resized (smart debounced event)
    $(window).bind("debouncedresize", function () { portfolio.windowResized(); });
    // Window Scrolled
    $(window).on("scroll", function () { portfolio.windowScrolled(); });

} (jQuery));
