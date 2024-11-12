/*global document, window*/

/* DOM elements with background images */
const backgrounds = document.querySelectorAll(".parallax-background");

$(() => {
    "use strict";
    
    /* global namespace */
    const global = {
    	"window": $(window),
        "document": $(document),
        "parallaxBackground": $(backgrounds)
    };

    /* check if the element is in viewport */
    $.fn.isInViewport = function() {
    	const self = $(this);

        let elementTop = self.offset().top;
        let elementBottom = elementTop + self.outerHeight();

        let viewportTop = global.window.scrollTop();
        let viewportBottom = viewportTop + global.window.height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    global.window.on("load scroll", () => {
        let scroll = global.document.scrollTop();
        const offset = -0.4;

        global.parallaxBackground.each(function() {
            const self = $(this);
            let selfPosition = self.offset().top;

            if (self.isInViewport()) {
                self.css({
                    "background-position": "50% " + (selfPosition * offset - scroll * offset) + "px"
                });
	    }
        });
    });
});