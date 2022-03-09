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

import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import('./parts/owl-carousel.js');
// Navigation toggle
window.addEventListener('load', function () {
    import('./parts/toggle-menu.js');
    import('./parts/toggle-submenu.js');
    import('./parts/focus-search.js');
    import('./parts/toggle-tabs.js');
    import('./parts/sticky-scroll.js');
    import('./parts/toggle-readmore.js');
    import('./parts/toggle-sorting.js');
});


