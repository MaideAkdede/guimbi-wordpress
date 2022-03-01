<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

    <?php wp_head(); ?>
</head>

<body <?php body_class('bg-white text-gray-900 antialiased'); ?>>

<?php do_action('tailpress_site_before'); ?>

<div id="page" class="min-h-screen flex flex-col">

    <?php do_action('tailpress_header'); ?>

    <header class="bg-black overflow-x-hidden xxl:bg-none sticky xxl:static top-0 z-30 w-full overflow-y-scroll xxl:overflow-visible">
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
                    <div class="text-white text-size-fontawesome mx-1 xs:mx-2 sm:mx-4">
                        <a href=""
                           class="border-r border-dark-secondary p-0 xxs:p-1 xs:p-2 sm:p-4 hover:text-primary focus:text-primary-dark active:text-primary-dark"><i
                                    class="fa-brands fa-facebook-f"></i></a>
                        <a href=""
                           class="border-r border-dark-secondary p-0 xxs:p-1 xs:p-2 sm:p-4 hover:text-primary focus:text-primary-dark active:text-primary-dark"><i
                                    class="fa-brands fa-instagram"></i></a>
                        <a href=""
                           class="p-0 xxs:p-1 xs:p-2 sm:p-4 hover:text-primary focus:text-primary-dark active:text-primary-dark"><i
                                    class="fa-brands fa-twitter"></i></a>
                    </div>
                    <a href="#" aria-label="Toggle navigation" id="primary-menu-toggle"
                       class="open-menu bg-primary block flex transition hover:bg-primary-dark">
                        <span class="sr-only">Menu</span>
                        <div class="h-1/4 w-2/4 flex flex-col items-end justify-between m-auto">
                            <span class="ease-in-out duration-150 block bg-white w-full h-2px"></span>
                            <span class="ease-in-out duration-150 block bg-white w-3/4 h-2px"></span>
                            <span class="ease-in-out duration-150 block bg-white w-full h-2px"></span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="xxl:flex xxl:items-center xxl:flex-wrap xxl:justify-between">
                <ul id="primary-menu"
                    class="py-5 hidden text-white text-center text-sm uppercase tracking-widest xxl:block xxl:flex xxl:flex-wrap xxl:justify-center xxl:max-w-xxl xxl:p-0">
                    <li class="hidden xxl:block">
                        <a href=""
                           class="menu-link border-none hover:fill-primary-dark <?php if (is_front_page()): ?> fill-primary <?php else: ?> fill-white <?php endif; ?>">
                            <span class="sr-only">Accueil</span>
                            <svg id="Groupe_98" data-name="Groupe 98" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" width="17.41" height="14.995"
                                 viewBox="0 0 17.41 14.995">
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect id="Rectangle_10" data-name="Rectangle 10" width="17.41" height="14.995"/>
                                    </clipPath>
                                </defs>
                                <g id="Groupe_7" data-name="Groupe 7" clip-path="url(#clip-path)">
                                    <path id="Tracé_16" data-name="Tracé 16"
                                          d="M17.311,7.828,14.265,5.034V.856h-2.91V2.363L8.866.079a.3.3,0,0,0-.407,0L.1,7.829a.3.3,0,0,0-.051.385.317.317,0,0,0,.271.14h2.1v6.34a.3.3,0,0,0,.3.3H6.654a.289.289,0,0,0,.289-.289V11.043a.365.365,0,0,1,.365-.365H10.1a.365.365,0,0,1,.365.365v3.664a.289.289,0,0,0,.289.289h3.938a.3.3,0,0,0,.3-.3V8.354h2.1a.317.317,0,0,0,.271-.141.3.3,0,0,0-.053-.385"
                                          transform="translate(0 -0.001)"/>
                                </g>
                            </svg>
                        </a>
                    </li>
                    <li class="">
                        <a href="" class="menu-link">À l‘affiche</a>
                    </li>
                    <li class="">
                        <a href="" class="menu-link">Agenda</a>
                    </li>
                    <li class="">
                        <a href="" class="menu-link ">Tous les films</a></li>
                    <li class="">
                        <a href="" class="menu-link ">Évènements</a>
                    </li>
                    <li class="">
                        <a href="" class="menu-link ">Hub ciné guimbi</a>
                    </li>
                    <li class="">
                        <a href="" class="menu-link">Restaurant</a>
                    </li>
                    <li class="">
                        <a href="" class="menu-link">Actualités</a>
                    </li>
                    <li class="xxl:relative xxl:overflow-visible">
                        <a href="" class="menu-link sub relative">
                            En pratique
                            <i class="xxl:hidden text-primary text-15px fa-regular fa-angle-down absolute top-1/2 right-0 -translate-y-1/2"></i>
                        </a>
                        <ul class="sub-menu hidden xxl:absolute xxl:top-full xxl:w-max xxl:max-w-submenu xxl:text-left normal-case">
                            <?php for ($x = 1; $x <= 6; $x++): ?>
                                <li class="border-b border-dark last:border-b-0 border-b-primary-dark xxl:border-b-dark xxl:hover:border-b-dark"><a href="" class="inline-block w-full p-5 xxl:p-25px xxl:my-0 bg-primary hover:bg-primary-dark  xxl:bg-black xxl:hover:bg-black xxl:hover:border-l-8 xxl:hover:border-l-primary ">Engagement de
                                        l‘égalité femmes-hommes</a></li>
                            <?php endfor; ?>
                        </ul>
                    </li>
                    <li class="">
                        <a href="" class="menu-link">Contact</a>
                    </li>
                </ul>
                <div class="hidden xxl:block text-white text-size-fontawesome">
                    <a href="" class="mx-3 hover:text-primary focus:text-primary active:text-primary-dark"><i
                                class="fa-brands fa-facebook-f"></i></a>
                    <a href="" class="mx-3 hover:text-primary focus:text-primary active:text-primary-dark"><i
                                class="fa-brands fa-instagram"></i></a>
                    <a href="" class="mx-3 hover:text-primary focus:text-primary active:text-primary-dark"><i
                                class="fa-brands fa-twitter"></i></a>
                </div>
            </div>
            <!-- --><?php
            /*            wp_nav_menu(
                            array(
                                'container_id' => 'primary-menu',
                                'container_class' => 'hidden bg-gray-100 mt-4 p-4 lg:mt-0 lg:p-0 xxl:bg-transparent lg:block',
                                'menu_class' => 'lg:flex lg:-mx-4',
                                'theme_location' => 'primary',
                                'li_class' => 'lg:mx-4',
                                'fallback_cb' => false,
                            )
                        );
                        */ ?>
        </div>
    </header>

    <div id="content" class="site-content flex-grow">


        <?php do_action('tailpress_content_start'); ?>

        <main>
