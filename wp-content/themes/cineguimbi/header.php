<!DOCTYPE html>
<html <?php language_attributes(); ?> class="scroll-smooth">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
    <!--FAV ICONS-->
        <link rel="icon" href="<?php echo get_template_directory_uri() . '/resources/images/logo/1x/2.png' ?>" sizes="any"><!-- 32×32 -->
        <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri() . '/resources/images/logo/1x/big.png' ?>"><!-- 180×180 -->
        <link rel="manifest" href="/manifest.webmanifest">
    <!--END FAV ICONS-->
    <?php wp_head(); ?>
</head>

<body <?php body_class('bg-white text-gray-900 antialiased'); ?>>

<?php do_action('tailpress_site_before'); ?>

<div id="page" class="min-h-screen flex flex-col">

    <?php do_action('tailpress_header'); ?>
    <header class="overflow-x-hidden xxl:bg-none sticky xxl:static top-0 z-30 w-full overflow-y-scroll xxl:overflow-visible <?php if(is_singular('film')): ?> bg-black lg:bg-black/50 <?php else: ?> bg-black<?php endif; ?>">
        <div class="mx-auto max-w-xxl">
            <div class="flex justify-between items-center">
                <div class="px-5 xxl:my-6 xxl:mx-auto h-logo-sm w-logo-sm md:h-logo-md md:w-logo-md">
                    <?php if (has_custom_logo()) { ?>
                        <?php the_custom_logo(); ?>
                    <?php } else { ?>
                        <div class="text-lg uppercase">
                            <a href="<?php echo get_bloginfo('url'); ?>" class="font-extrabold text-lg uppercase">
                                <?php echo get_bloginfo('name'); ?>
                            </a>
                        </div>

                        <p class="text-sm font-light text-gray-600">
                            <?php echo get_bloginfo('description'); ?>
                        </p>

                    <?php } ?>
                </div>
                <div class="flex items-center xxl:hidden">
                    <?php if (have_rows('socials', 'option')): ?>
                        <div class="text-white text-size-fontawesome mx-1 xs:mx-2 sm:mx-4 socials-mobile">
                            <ul>
                                <?php while (have_rows('socials', 'option')): the_row(); ?>
                                    <li>
                                        <a href="<?php the_sub_field('social_link'); ?>"
                                           title="<?php the_sub_field('social_name'); ?>">
                                            <?php the_sub_field('social_icon'); ?>
                                        </a>
                                    </li>
                                <?php endwhile; ?>
                            </ul>
                        </div>
                    <?php endif ?>
                    <a href="#" aria-label="Menu de navigation" id="primary-menu-toggle"
                       title="Menu de navigation"
                       class="open-menu bg-primary block flex transition hover:bg-primary-dark">
                        <span class="sr-only">Menu Principale</span>
                        <div class="h-1/4 w-2/4 flex flex-col items-end justify-between m-auto">
                            <span class="duration-300 block bg-white w-full h-2px"></span>
                            <span class="duration-150 block bg-white w-3/4 h-2px"></span>
                            <span class="duration-300  block bg-white w-full h-2px"></span>
                        </div>
                    </a>
                </div>
            </div>
            <nav class="xxl:flex xxl:items-center xxl:flex-wrap xxl:justify-center">
                <?php
                wp_nav_menu(
                    array(
                        'container_id' => 'primary-menu',
                        'container_class' => 'hidden xxl:block',
                        'menu_class' => 'py-5 text-white text-center text-sm uppercase tracking-widest xxl:block xxl:flex xxl:flex-wrap xxl:justify-center xxl:max-w-xxl xxl:p-0',
                        'theme_location' => 'primary',
                        'li_class' => '',
                        'link_class' => 'menu-link group',
                        'submenu_class' => 'hidden xxl:absolute xxl:top-full xxl:w-max xxl:max-w-submenu xxl:text-left normal-case',
                        'fallback_cb' => false,
                    )
                );
                ?>
                <?php if (have_rows('socials', 'option')): ?>
                    <div class="hidden xxl:block ml-4 text-white text-size-fontawesome socials-desktop">
                        <ul>
                            <?php while (have_rows('socials', 'option')): the_row(); ?>
                                <li>
                                    <a href="<?php the_sub_field('social_link'); ?>"
                                       title="<?php the_sub_field('social_name'); ?>">
                                        <?php the_sub_field('social_icon'); ?>
                                    </a>
                                </li>
                            <?php endwhile; ?>
                        </ul>
                    </div>
                <?php endif ?>
            </nav>

        </div>
    </header>

    <div id="content" class="site-content flex-grow">


        <?php do_action('tailpress_content_start'); ?>

        <main>
            <?php get_template_part('template-parts/widget/medias'); ?>