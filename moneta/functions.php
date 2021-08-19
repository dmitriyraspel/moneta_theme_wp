<?php
/**
 * moneta functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package moneta
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'moneta_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function moneta_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on moneta, use a find and replace
		 * to change 'moneta' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'moneta', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'moneta' ),
				'social' => __( 'Social Links Navigation', 'moneta' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'moneta_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		// Add support for full and wide align images.
		add_theme_support( 'align-wide' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'moneta_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function moneta_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'moneta_content_width', 640 );
}
add_action( 'after_setup_theme', 'moneta_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function moneta_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'moneta' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'moneta' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar-shop', 'moneta' ),
			'id'            => 'sidebar-shop',
			'description'   => esc_html__( 'Add widgets to shop page.', 'moneta' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);
	
}
add_action( 'widgets_init', 'moneta_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function moneta_scripts() {

	// wp_enqueue_style( 'moneta-style', get_stylesheet_uri(), array(), _S_VERSION );
	// wp_style_add_data( 'moneta-style', 'rtl', 'replace' );


	// Enqueue Google fonts
	wp_enqueue_style( 'moneta-fonts-temp', 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap/', array(), null );

	// Main style temp
	wp_enqueue_style( 'moneta-style-temp', get_template_directory_uri() . '/style.css', array(), filemtime(get_template_directory() . '/style.css') );

	// wp_enqueue_script( 'moneta-navigation', get_template_directory_uri() . '/js/navigation.js?2', array(), _S_VERSION, true );

	wp_enqueue_script( 'moneta-exchange-js', get_template_directory_uri() . '/assets/js/exchange.js?45', array('jquery'), true );
	
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	if ( is_woocommerce() ) {
		wp_enqueue_script( 'moneta-shop-filters-js', get_template_directory_uri() . '/assets/js/shop-filters.js?3', array(), true );
	}
	if ( is_woocommerce() || is_cart() ) {
		wp_enqueue_script( 'moneta-product-quantity-js', get_template_directory_uri() . '/assets/js/quantity.js?4', array(), true );
	}
	if ( is_page( array(17, 'statistika') ) ) {
		wp_enqueue_script( 'moneta-coins-rates-js', get_template_directory_uri() . '/assets/js/coins-rates.js?2', array('jquery'), true );
		wp_enqueue_script( 'lib-chart-js', get_template_directory_uri() . '/assets/js/lib/chart.js', array('jquery'), true );
		wp_enqueue_script( 'market-charts-js', get_template_directory_uri() . '/assets/js/charts.js?8', array('lib-chart-js'), true );
	}
}
add_action( 'wp_enqueue_scripts', 'moneta_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * SVG Icons class.
 */
require get_template_directory() . '/classes/class-architect-svg-icons.php';

/**
 * SVG Icons related functions.
 */
require get_template_directory() . '/inc/icon-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Load WooCommerce compatibility file.
 */
if ( class_exists( 'WooCommerce' ) ) {
	require get_template_directory() . '/inc/woocommerce.php';
}
