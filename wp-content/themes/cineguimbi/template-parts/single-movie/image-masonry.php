<?php
$images = get_field('gallery');
if ($images): ?>
    <section class="lg:col-start-1 mt-4 lg:mt-0 order-5 px-5 mb-16">
        <h2 class=" underline-title lg:underline-title-green lg:text-left lg:after:ml-0">Images du film</h2>
        <div id="masonry-grid">
            <div class="grid-sizer"></div>
            <?php foreach ($images as $image): ?>
                <a href="<?= esc_url($image['url']); ?>" class="item"
                   data-fancybox="gallery">
                    <img src="<?= esc_url($image['sizes']['medium']); ?>" alt="<?= esc_attr($image['alt']); ?>">
                </a>
            <?php endforeach; ?>
        </div>
    </section>
<?php endif; ?>
