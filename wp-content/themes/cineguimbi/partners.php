<?php /* Template Name: Nos partanaires et soutiens */ ?>
<?php get_header(); ?>
    <h1 class="underline-title"><?php the_title() ?></h1>
<?php if (have_rows('partners')): ?>
    <div class="max-w-max mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mt-12 md:mt-24">
        <?php while (have_rows('partners')): the_row(); ?>
            <figure class="max-h-[71px] relative mb-8 duration-150 grayscale hover:grayscale-0">
                <img class=" hover: h-full w-full object-contain"
                     src="<?= get_sub_field('logo')['url']; ?>"
                     alt="<?= get_sub_field('logo')['alt']; ?>">
                <figcaption class="sr-only"><?= get_sub_field('logo')['alt']; ?></figcaption>
            </figure>
        <?php endwhile; ?>
    </div>
<?php endif;?>
<?php get_footer(); ?>