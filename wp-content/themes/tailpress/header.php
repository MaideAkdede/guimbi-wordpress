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

    <header class="bg-black overflow-x-hidden xxl:bg-none sticky xxl:static top-0 z-30 w-screen overflow-y-scroll">
        <div class="mx-auto max-w-xxl">
            <div class="flex justify-between items-center">
                <div class="px-5 xxl:my-10 xxl:mx-auto h-[50px] w-[138px] md:h-[85px] md:w-[233px]">
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
                    <div class="text-white text-size-fontawesome mx-4">
                        <a href="" class="border-r border-dark-secondary p-4 hover:text-primary focus:text-primary-dark active:text-primary-dark" ><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="" class="border-r border-dark-secondary p-4 hover:text-primary focus:text-primary-dark active:text-primary-dark" ><i class="fa-brands fa-instagram"></i></a>
                        <a href="" class="p-4 hover:text-primary focus:text-primary-dark active:text-primary-dark" ><i class="fa-brands fa-twitter"></i></a>
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
            <div class="xxl:flex xxl:items-center xxl:flex-wrap">
                <ul id="primary-menu"
                    class="py-5 hidden text-white text-center max-w-[80vw] mx-auto text-sm uppercase tracking-widest xxl:block xxl:flex xxl:flex-wrap xxl:justify-center xxl:max-w-xxl xxl:p-0">
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
                        <a href="" class="menu-link">Tous les films</a></li>
                    <li class="">
                        <a href="" class="menu-link">Évènements</a>
                    </li>
                    <li class="">
                        <a href="" class="menu-link">Hub ciné guimbi</a>
                    </li>
                    <li class="">
                        <a href="" class="menu-link">Restaurant</a>
                    </li>
                    <li class="">
                        <a href="" class="menu-link">Actualités</a>
                    </li>
                    <li class="">
                        <a href="" class="menu-link">En pratique</a>
                        <ul class="sub-menu hidden">
                            <li class=""><a href="" class="">Tarifs</a></li>
                            <li class=""><a href="" class="">Nos services</a></li>
                            <li class=""><a href="" class="">Nous trouver</a></li>
                        </ul>
                    </li>
                    <li class="">
                        <a href="" class="menu-link">Contact</a>
                    </li>
                </ul>
                <div class="hidden xxl:block text-white text-size-fontawesome mx-5">
                    <a href="" class="mx-3 hover:text-primary focus:text-primary active:text-primary-dark"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="" class="mx-3 hover:text-primary focus:text-primary active:text-primary-dark"><i class="fa-brands fa-instagram"></i></a>
                    <a href="" class="mx-3 hover:text-primary focus:text-primary active:text-primary-dark"><i class="fa-brands fa-twitter"></i></a>
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
