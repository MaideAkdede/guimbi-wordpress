<?php get_header(); ?>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <?php get_template_part('template-parts/single-movie/header'); ?>
    <div class="lg:grid lg:max-w-movie lg:mx-auto lg:auto-rows-auto lg:grid-cols-[1fr_auto]" id="info">
        <?php get_template_part('template-parts/single-movie/synopsis-details'); ?>
        <?php get_template_part('template-parts/single-movie/prochaines-seances'); ?>
        <?php get_template_part('template-parts/single-movie/image-masonry'); ?>
    </div>
    <?php get_template_part('template-parts/single-movie/background-image'); ?>
<?php endwhile; endif; ?>
<?php get_footer(); ?>
