/*import jquery from "jquery";
$ = jQuery = jquery;
import('../../node_modules/masonry-layout/masonry.js');

$(document).ready(function() {
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 200
    });
});*/

import {Fancybox, Carousel, Panzoom} from "@fancyapps/ui";

import('./parts/owl-carousel.js');
// Navigation toggle
window.addEventListener('load', function () {
    import('./parts/toggle-menu.js');
    import('./parts/toggle-submenu.js');
    import('./parts/toggle-submenu-footer.js');
    import('./parts/focus-search.js');
    import('./parts/toggle-tabs.js');
    import('./parts/sticky-scroll.js');
    import('./parts/toggle-readmore.js');
    import('./parts/toggle-sorting.js');
    import('./parts/toggle-views.js');
});

if (document.querySelector("#mainCarousel")) {
// Initialise Carousel
    const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
        infinite: false,
        Navigation: false,
    });

// Initialise Fancybox
    Fancybox.bind('[data-fancybox="gallery"]', {
        Carousel: {
            on: {
                change: (carousel, to) => {
                    // Sync Carousel slide
                    // ===
                    const $el = Fancybox.getInstance()
                        .getSlide()
                        .$trigger.closest(".carousel__slide");

                    const slide = mainCarousel.slides.find((slide) => {
                        return slide.$el === $el;
                    });

                    mainCarousel.slideTo(slide.index, {
                        friction: 0,
                    });
                },
            },
        },
    });
}