(function ($) {
    "use strict";

    var starter = {

        init: function () {
            this.bindUIActions();
        },

        bindUIActions: function () {
            $(".btn").on("click", function (e) { starter.sayHello(e); });
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

            $(".container").hover(function () {
                logo.animate({d: logoFlatPath}, 200, mina.easeout);
            }, function () {
                logo.animate({d: logoPath}, 200, mina.easeout);
            });
        }

    };

    // DOM Ready
    $(function () { starter.init(); });
    // Images Loaded
    $(window).load(function () { starter.windowLoaded(); });
    // Window Resized (smart debounced event)
    $(window).bind("debouncedresize", function () { starter.windowResized(); });
    // Window Scrolled
    $(window).on("scroll", function () { starter.windowScrolled(); });

} (jQuery));
