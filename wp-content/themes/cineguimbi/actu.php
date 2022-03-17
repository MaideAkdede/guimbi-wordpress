<?php /* Template Name: Toutes les actualités */ ?>
<?php get_header(); ?>
    <h1 class="underline-title"><?php the_title() ?></h1>
    <div class="bg-beige pt-12 pb-12 lg:pb-24">
        <?php
        $posts = new WP_Query([
            'post_type' => 'actualite',
            'posts_per_page' => 10,
        ]);
        if ($posts->have_posts()): ?>
            <div class="max-w-xxl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 px-5">
                <?php while ($posts->have_posts()) : $posts->the_post(); ?>
                    <article
                            class="text-center font-bold font-family-bold relative aspect-card drop-shadow-md md:aspect-auto md:grid md:grid-cols-md-actu md:items-center md:text-left group bg-white">

                        <?php if (has_post_thumbnail()): ?>
                            <?= get_the_post_thumbnail(null, 'medium_large', ['class' => 'md:h-full md:aspect-auto w-full aspect-square object-cover']); ?>
                        <?php endif; ?>
                        <div class="bg-white mx-auto py-8 px-6 z-10 md:static">
                            <?php if (get_the_date()): ?>
                                <time datetime="<?php the_field('date'); ?>"
                                      class="text-15px text-primary font-black font-family-black tracking-widest uppercase">
                                    <?= date_i18n('l, j F Y', strtotime(get_the_date())); ?>
                                </time>
                            <?php endif ?>
                            <h2 class="text-lg my-4"><?php the_title() ?></h2>
                            <div class="text-left text-dark font-light font-family-light  line-clamp-6">
                                <?php the_content(); ?>
                            </div>
                            <p class="block max-w-max mx-auto md:ml-0 font-bold font-family-bold uppercase text-primary text-xs border border-primary px-5 pt-3.5 pb-2.5 group-hover:text-white shadow-set-hover group-hover:shadow-hover duration-150 ease-in tracking-widest mt-5">
                                En savoir plus</p>
                            <a href="<?php the_permalink(); ?>" title="En savoir plus sur : <?php the_title() ?> "
                               class="absolute block h-full w-full top-0 left-0 group-hover:border-2px group-hover:border-primary focus:outline-none focus:border-2px focus:border-primary"></a>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>
        <?php else: ?>
            <p class="text-center">Aucun évènement disponnible</p>
        <?php endif; ?>
    </div>
<?php get_footer(); ?>