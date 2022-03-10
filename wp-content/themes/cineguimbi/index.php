<?php get_header(); ?>
<!-- FRONT PAGE -->
<?php if (is_front_page()) : ?>
    <?php get_front_page_template(); ?>
<?php else:?>
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
<?php endif; ?>
<!-- END FRONT PAGE -->

<?php get_footer(); ?>
