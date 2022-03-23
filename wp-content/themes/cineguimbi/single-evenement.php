<?php get_header(); ?>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

    <h1 class="underline-title"><?php the_title(); ?></h1>
    <div class="text-right max-w-xxl mx-auto px-5 flex items-center justify-between md:mb-6 md:justify-start md:gap-8">
        <?php if (get_field('date')): ?>
            <time datetime="<?php the_field('date'); ?>"
                  class="text-xs md:text-lg text-primary font-black font-family-black tracking-widest uppercase">
                <?= date_i18n('l, j F Y', strtotime(get_field('date'))); ?>
            </time>
        <?php endif ?>
        <?php if (get_field('tag')): ?>
            <p class="tag md:-order-1"><?= get_field('tag'); ?></p>
        <?php endif ?>
    </div>
    <div class="max-w-xxl mx-auto px-5 xl:grid xl:gap-12 xl:grid-cols-2-2fr-1fr xl:gap-28 mb-14 lg:mb-24">
        <?php if (has_post_thumbnail()): ?>
            <div class="overflow-hidden aspect-square md:max-w-[35vw] xl:max-w-none md:float-right xl:order-2 my-6 md:my-0">
                <div class="xxl:col-start-4 xxl:justify-self-end lg:z-1 mx-auto w-auto xl:w-80vw max-w-movie-image">
                    <?= get_the_post_thumbnail(null, 'medium_large', ['class' => 'h-full w-full object-cover md:aspect-square']); ?>
                </div>
            </div>
        <?php endif; ?>
        <div class="xl:order-1 mb-12 md:mb-0">
            <div class="wysiwyg mb-5">
                <?php the_content(); ?>
            </div>
            <a href="/evenements"
               class="block max-w-max font-bold font-family-bold uppercase text-xs md:text-sm lg:text-base border-2px border-primary bg-primary px-6 text-white pt-4 pb-3 hover:text-primary shadow-set-hover hover:shadow-hover-white duration-150 ease-in mb-4 lg:block">
                <i class="mr-3 fa-solid fa-arrow-left"></i>Voir tous les évènements</a>
        </div>
    </div>
    <?php
    $images = get_field('gallery');
    if ($images): ?>
        <div class="max-w-xxl mx-auto mb-12">
            <h2 class="px-5 font-family-black font-extrabold tracking-widest uppercase text-xl md:text-25px text-center mt-11 md:mt-20 mb-8 md:mb-10 after:block after:h-[6px] after:w-12 after:bg-primary after:rounded-full after:mx-auto after:-rotate-3 after:mt-1 md:text-left md:after:ml-0 lg:text-black text-lg">
                Images de l‘évènement</h2>
            <ul class="owl-carousel-regular owl-carousel owl-theme">
                <?php foreach ($images as $image): ?>
                    <li>
                        <a href="<?= esc_url($image['url']); ?>" class="block overflow-hidden aspect-square"
                           data-fancybox="gallery">
                            <img src="<?= esc_url($image['sizes']['thumbnail']); ?>" alt="<?= esc_attr($image['alt']); ?>"
                                 class="h-full w-full object-cover"/>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    <?php endif; ?>
<?php endwhile; endif; ?>
<?php get_footer(); ?>
