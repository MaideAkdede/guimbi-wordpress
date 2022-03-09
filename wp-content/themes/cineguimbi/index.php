<?php get_header(); ?>
<!-- FRONT PAGE -->
<?php if (is_front_page()) : ?>
    <?php get_template_part('template-parts/hero'); ?>
    <?php get_template_part('template-parts/home/carousel-affiche'); ?>
    <?php get_template_part('template-parts/home/calendar'); ?>
    <?php get_template_part('template-parts/home/pub'); ?>
    <?php get_template_part('template-parts/home/carousel-event'); ?>
    <?php get_template_part('template-parts/home/carousel-actu'); ?>
    <?php get_template_part('template-parts/home/support'); ?>
<?php endif; ?>
<!-- END FRONT PAGE -->

<!-- CLASSIC PAGE -->
<?php if ( have_posts() ) : ?>
    <?php
    while ( have_posts() ) :
        the_post();
        ?>
        <?php get_template_part( 'template-parts/content', 'single' ); ?>
    <?php endwhile; ?>
<?php endif; ?>
<!-- END CLASSIC PAGE -->
<?php get_footer(); ?>
