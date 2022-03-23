<?php /* Template Name: Restaurant */ ?>
<?php get_header(); ?>
    <h1 class="underline-title"><?php the_title() ?></h1>
    <div class="max-w-xxl mx-auto px-5 xl:grid xl:gap-12 xl:grid-cols-2-2fr-1fr xl:gap-28">
        <div class="overflow-hidden aspect-square md:max-w-[35vw] xl:max-w-none md:float-right xl:order-2">
            <img class="h-full w-full object-cover md:aspect-square" src="<?= get_field('image')['url']; ?>" alt="">
        </div>
        <div class="xl:order-1">
            <div class="wysiwyg mb-12">
                <?php the_content(); ?>
            </div>
            <a href=""
               title="Télécharger fiche de <?= the_title(); ?>"
               class="block max-w-max font-bold font-family-bold uppercase text-xs md:text-sm lg:text-base border-2px border-primary bg-primary px-6 text-white pt-4 pb-3 hover:text-primary shadow-set-hover hover:shadow-hover-white duration-150 ease-in mb-4 lg:block">
                Télécharger le menu<i class="ml-3 fa-solid fa-down-from-line"></i></a>
        </div>
    </div>
<?php if (have_rows('restaurant_slider')): ?>
    <div class="max-w-xxl mx-auto py-12">
        <h2 class="px-5 font-family-black font-extrabold tracking-widest uppercase text-xl md:text-25px text-center mt-11 md:mt-20 mb-8 md:mb-10 after:block after:h-[6px] after:w-12 after:bg-primary after:rounded-full after:mx-auto after:-rotate-3 after:mt-1 md:text-left md:after:ml-0 lg:text-black text-lg">
            Images du restaurant</h2>
        <ul class="owl-carousel-regular owl-carousel owl-theme">
            <?php while (have_rows('restaurant_slider')): the_row(); ?>
                <a href="<?= get_sub_field('photo')['url']; ?>" class="block overflow-hidden aspect-square"
                   data-fancybox="gallery">
                    <img src="<?= get_sub_field('photo')['url']; ?>" alt="" class="h-full w-full object-cover">
                </a>
            <?php endwhile; ?>
        </ul>
    </div>
<?php endif; ?>
<?php
$images = get_field('gallery');
if ($images): ?>
    <div class="max-w-xxl mx-auto py-12">
        <h2 class="px-5 font-family-black font-extrabold tracking-widest uppercase text-xl md:text-25px text-center mt-11 md:mt-20 mb-8 md:mb-10 after:block after:h-[6px] after:w-12 after:bg-primary after:rounded-full after:mx-auto after:-rotate-3 after:mt-1 md:text-left md:after:ml-0 lg:text-black text-lg">
            Images du restaurant</h2>
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
<?php get_footer(); ?>