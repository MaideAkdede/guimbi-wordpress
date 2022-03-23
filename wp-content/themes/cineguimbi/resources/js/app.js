
import('./parts/jquery.global.js');
import('./parts/owl-carousel.js');

window.addEventListener('load', function () {
    import('./parts/toggle-menu.js');
    import('./parts/toggle-submenu.js');
    import('./parts/toggle-submenu-footer.js');
    import('./parts/focus-search.js');
    import('./parts/toggle-tabs.js');
    import('./parts/masonry.js');
    import('./parts/toggle-readmore.js');
    import('./parts/toggle-sorting.js');
    import('./parts/toggle-views.js');
    import('./parts/carousel-fancybox.js');
});


/*
import $ from 'jquery';
import '../../node_modules/masonry-layout/masonry.js';
import Masonry from 'masonry-layout';
import jQueryBridget from 'jquery-bridget';
import imagesLoaded from 'imagesloaded';
jQueryBridget('masonry', Masonry, $);
jQueryBridget( 'imagesLoaded', imagesLoaded, $ );
const $container = $('#masonry-grid');

$(function() {
    $container.imagesLoaded(() => {
        $container.masonry({
            columnWidth: 200,
            itemSelector: '.item',
        });
    });
});*/
