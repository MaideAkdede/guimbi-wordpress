<?php
$posts = new WP_Query([
    'post_type' => 'film',
    'meta_key' => 'teased',
    'meta_value' => true,
]);

if ($posts->have_posts()): ?>
    <section class="pb-12 my-8 colored-box relative">
        <h1 class="underline-title">À l‘affiche</h1>
        <div class="owl-carousel-regular owl-carousel owl-theme max-w-xxl mx-auto">
            <?php while ($posts->have_posts()) : $posts->the_post(); ?>
                <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                    <figure class="relative h-full w-full">
                        <?php if (has_post_thumbnail()): ?>
                            <?= get_the_post_thumbnail(null, 'medium_large', ['class' => 'h-full w-full object-cover']); ?>
                        <?php endif; ?>
                        <figcaption class="sr-only"><?php the_title(); ?></figcaption>
                    </figure>
                </a>
            <?php endwhile; ?>
        </div>
    </section>
<?php endif ?>