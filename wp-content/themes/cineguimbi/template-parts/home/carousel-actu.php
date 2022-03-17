<?php
$posts = new WP_Query([
    'post_type' => 'actualite'
]);
if ($posts->have_posts()): ?>
    <section class="relative">
        <h1 class="underline-title hover:text-primary hover:after:rotate-0"><a href="/actualites" title="Voir tous les actualités">Actualités</a></h1>
        <div class="max-w-xxl mx-auto grid auto-rows-[minmax(0,350px)] grid-cols-1 lg:grid-cols-2 gap-5 px-5 carousel-actu">
            <?php while ($posts->have_posts()) : $posts->the_post(); ?>
                <article class="group text-center font-bold font-family-bold relative aspect-card drop-shadow-md md:aspect-auto md:grid md:grid-cols-md-actu md:text-left overflow-hidden">
                    <?= get_the_post_thumbnail(null, 'medium_large', ['class' => 'h-full w-full object-cover']); ?>
                    <div class="bg-white mx-auto -mt-full absolute bottom-0 z-10 w-full py-8 px-6 md:static">
                        <time datetime="<?= get_the_date(); ?>" class="text-15px text-primary">
                            <?= date_i18n('l, j F Y', strtotime(get_the_date())); ?>
                        </time>
                        <h2 class="text-lg mb-4"><?php the_title(); ?></h2>
                        <div class="text-left text-dark font-normal font-family-regular line-clamp-6">
                            <?php the_content(); ?>
                        </div>
                        <p class="max-w-max block mx-auto pt-2 pb-1 px-3 mt-6 md:mx-0 uppercase text-xs text-primary transition ease-in-out group-hover:text-white group-hover:bg-primary">En savoir plus</p>
                    </div>
                    <a href="<?php the_permalink(); ?>" title=""
                       class="absolute h-full w-full top-0 left-0 z-10 group-hover:border-primary group-hover:border-2px">
                    </a>
                </article>
            <?php endwhile; ?>
        </div>
    </section>
<?php endif ?>