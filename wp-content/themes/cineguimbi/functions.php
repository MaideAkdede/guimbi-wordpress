<?php
/* * * Add ACF Option Page * * */
if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title' => 'Paramètres du site',
        'menu_title' => 'Paramètres du site',
        'menu_slug' => 'parametres-site',
        'capability' => 'edit_posts',
        'redirect' => false,
    ));
}
/* * * Register Multiple Custom Post Type * * */
add_action('init', 'tailpress_custom_post_type');
function tailpress_custom_post_type()
{
    register_post_type('film', [
        'label' => 'Films',
        'labels' => [
            'singular_name' => 'film',
            'add_new' => 'Ajouter',
            'add_new_item' => 'Nouveau film',
        ],
        'description' => 'Liste de tous nos films',
        'public' => true,
        'menu_position' => 5,
        'menu_icon' => 'dashicons-video-alt2',
        'supports' => ['title', 'excerpt', 'editor', 'thumbnail'],
        'rewrite' => [
            'slug' => 'films'
        ]
    ]);
    register_post_type('evenement', [
        'label' => 'Évènements',
        'labels' => [
            'singular_name' => 'evenement',
            'add_new' => 'Ajouter',
            'add_new_item' => 'Ajouter un nouvel évènement',
        ],
        'description' => 'Liste de tous nos évènements',
        'public' => true,
        'menu_position' => 4,
        'menu_icon' => 'dashicons-welcome-widgets-menus',
        'supports' => ['title', 'editor', 'thumbnail'],
        'rewrite' => [
            'slug' => 'evenements'
        ]
    ]);
    register_post_type('actualite', [
        'label' => 'Actualités',
        'labels' => [
            'singular_name' => 'actualite',
            'add_new' => 'Ajouter',
            'add_new_item' => 'Ajouter une nouvele actualité',
        ],
        'description' => 'Liste de tous nos évènements',
        'public' => true,
        'menu_position' => 4,
        'menu_icon' => 'dashicons-media-interactive',
        'supports' => ['title', 'editor', 'thumbnail'],
        'rewrite' => [
            'slug' => 'actualites'
        ]
    ]);
}
/* * * Setup Tailpress Theme * * */
function tailpress_setup()
{
    add_theme_support('title-tag');

    register_nav_menus(
        array(
            'primary' => __('Menu Principal', 'cineguimbi'),
            'footer' => __('Menu Footer', 'cineguimbi'),
        )
    );

    add_theme_support(
        'html5',
        array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
        )
    );

    add_theme_support('custom-logo');
    add_theme_support('post-thumbnails');

    add_theme_support('align-wide');
    add_theme_support('wp-block-styles');

    add_theme_support('editor-styles');
    add_editor_style('css/editor-style.css');
}

add_action('after_setup_theme', 'tailpress_setup');

/* * * Enqueue theme assets * * */
function tailpress_enqueue_scripts()
{
    $theme = wp_get_theme();

    wp_enqueue_style('cineguimbi', tailpress_asset('css/app.css'), array(), $theme->get('Version'));
    wp_enqueue_script('cineguimbi', tailpress_asset('js/app.js'), array(), $theme->get('Version'));
}

add_action('wp_enqueue_scripts', 'tailpress_enqueue_scripts');

/**
 * Get asset path.
 *
 * @param string $path Path to asset.
 *
 * @return string
 */
function tailpress_asset($path)
{
    if (wp_get_environment_type() === 'production') {
        return get_stylesheet_directory_uri() . '/' . $path;
    }

    return add_query_arg('time', time(), get_stylesheet_directory_uri() . '/' . $path);
}

/**
 * Adds option 'li_class' to 'wp_nav_menu'.
 *
 * @param string $classes String of classes.
 * @param mixed $item The curren item.
 * @param WP_Term $args Holds the nav menu arguments.
 *
 * @return array
 */
function tailpress_nav_menu_add_li_class($classes, $item, $args, $depth)
{
    if (isset($args->li_class)) {
        $classes[] = $args->li_class;
    }

    if (isset($args->{"li_class_$depth"})) {
        $classes[] = $args->{"li_class_$depth"};
    }

    return $classes;
}

add_filter('nav_menu_css_class', 'tailpress_nav_menu_add_li_class', 10, 4);

/**
 * Adds option 'submenu_class' to 'wp_nav_menu'.
 *
 * @param string $classes String of classes.
 * @param mixed $item The curren item.
 * @param WP_Term $args Holds the nav menu arguments.
 *
 * @return array
 */
function tailpress_nav_menu_add_submenu_class($classes, $args, $depth)
{
    if (isset($args->submenu_class)) {
        $classes[] = $args->submenu_class;
    }

    if (isset($args->{"submenu_class_$depth"})) {
        $classes[] = $args->{"submenu_class_$depth"};
    }

    return $classes;
}

add_filter('nav_menu_submenu_css_class', 'tailpress_nav_menu_add_submenu_class', 10, 3);

/* * * Add class to anchor link of the menu li items * * */
function add_menu_link_class($atts, $item, $args)
{
    if (property_exists($args, 'link_class')) {
        $atts['class'] = $args->link_class;
    }
    return $atts;
}

add_filter('nav_menu_link_attributes', 'add_menu_link_class', 1, 3);

/* * * Remove media buttons * * */
add_action( 'admin_menu', 'mf_remove_menu_pages' );
function mf_remove_menu_pages() {
    remove_menu_page('edit.php');
}
/* * * Remove media buttons * * */
remove_action('media_buttons', 'media_buttons');

/* * * Set the Local Lang  * * */
setlocale(LC_TIME, "fr_BE");