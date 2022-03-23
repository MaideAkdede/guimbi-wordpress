<?php get_header(); ?>
<div class="max-w-[65ch] mx-auto px-5">
    <div class="font-family-black font-extrabold tracking-widest uppercase text-[55px] text-center mt-11 lg:mt-24 md:mt-20 mb-24 after:block after:h-[6px] after:w-12 after:bg-primary after:rounded-full after:mx-auto after:-rotate-3 after:mt-1">404</div>
    <p class="text-gray-800 text-2xl md:text-3xl font-light mb-8"><?php _e('Oups, la page que vous cherchez n‘existe pas.', 'cineguimbi'); ?></p>
    <a href="<?php echo get_bloginfo('url'); ?>" class="block max-w-max font-bold font-family-bold uppercase text-xs md:text-sm lg:text-base border-2px border-primary bg-primary px-6 text-white pt-4 pb-3 hover:text-primary shadow-set-hover hover:shadow-hover-white duration-150 ease-in mb-4 lg:block">
        <i class="fa-solid fa-house-chimney mr-6"></i> <?php _e('Retourner à l‘accueil', 'cineguimbi'); ?>
    </a>
</div>
<?php get_footer(); ?>
