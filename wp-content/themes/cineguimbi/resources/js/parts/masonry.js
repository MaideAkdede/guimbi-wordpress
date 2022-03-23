import Masonry from 'masonry-layout';
import jQueryBridget from 'jquery-bridget';
import imagesLoaded from 'imagesloaded';

jQueryBridget('masonry', Masonry, $);
jQueryBridget( 'imagesLoaded', imagesLoaded, $ );

const $container = $('#masonry-grid');

$container.imagesLoaded(() => {
    $container.masonry({
        itemSelector: '.item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
    });
});