<?php
$posts = new WP_Query([
    'post_type' => 'evenement'
]);
if ($posts->have_posts()): ?>
    <section class="pb-12 colored-box relative">
        <h1 class="underline-title hover:text-primary hover:after:rotate-0"><a href="/evenements" title="Voir tous les évènements">Évènements</a></h1>
        <div class="owl-carousel-regular owl-carousel owl-theme max-w-xxl mx-auto">
            <?php while ($posts->have_posts()) : $posts->the_post(); ?>
                <article class="text-center font-bold font-family-bold relative aspect-card">
                    <?= get_the_post_thumbnail(null, 'medium_large', ['class' => 'h-full w-full object-cover']); ?>
                    <div class="bg-white mx-auto -mt-full absolute bottom-0 z-10 w-full py-8 px-6">
                        <time datetime="<?php the_field('date'); ?>" class="text-15px text-primary">
                            <?= date_i18n('l, j F Y', strtotime(get_field('date'))); ?>
                        </time>
                        <h2 class="article-title text-lg text-center mb-4"><?php the_title() ?></h2>
                        <p class="tag mx-auto"><?= get_field('tag') ?></p>
                    </div>
                    <a class="z-20 hover-block absolute top-0 left-0 right-0 block z-5 h-full w-full border-2 border-opacity-0 border-primary hover:border-opacity-100 focus:outline-none focus:border-opacity-100 transition-all overflow-y-hidden"
                       href="<?php the_permalink(); ?>" title="Voir l‘évènement l‘empire du silence"></a>
                </article>
            <?php endwhile; ?>
        </div>
    </section>
<?php endif ?>