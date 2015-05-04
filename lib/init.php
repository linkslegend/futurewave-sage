<?php

namespace Roots\Sage\Init;

use Roots\Sage\Assets;

/**
 * Theme setup
 */
function setup() {
  // Make theme available for translation
  // Community translations can be found at https://github.com/roots/sage-translations
  load_theme_textdomain('sage', get_template_directory() . '/lang');

  // Enable plugins to manage the document title
  // http://codex.wordpress.org/Function_Reference/add_theme_support#Title_Tag
  add_theme_support('title-tag');

  // Register wp_nav_menu() menus
  // http://codex.wordpress.org/Function_Reference/register_nav_menus
  register_nav_menus([
    'primary_navigation' => __('Primary Navigation', 'sage')
  ]);

  // Add post thumbnails
  // http://codex.wordpress.org/Post_Thumbnails
  // http://codex.wordpress.org/Function_Reference/set_post_thumbnail_size
  // http://codex.wordpress.org/Function_Reference/add_image_size
  add_theme_support('post-thumbnails');

  // Add post formats
  // http://codex.wordpress.org/Post_Formats
  add_theme_support('post-formats', ['aside', 'gallery', 'link', 'image', 'quote', 'video', 'audio']);

  // Add HTML5 markup for captions
  // http://codex.wordpress.org/Function_Reference/add_theme_support#HTML5
  add_theme_support('html5', ['caption', 'comment-form', 'comment-list']);

  // Tell the TinyMCE editor to use a custom stylesheet
  add_editor_style(Assets\asset_path('styles/editor-style.css'));
}
add_action('after_setup_theme', __NAMESPACE__ . '\\setup');

/**
 * Register sidebars
 */
function widgets_init() {
  register_sidebar([
    'name'          => __('Primary', 'roots'),
    'id'            => 'sidebar-primary',
    'before_widget' => '<section class="widget %1$s %2$s"><div class="widget-inner">',
    'after_widget'  => '</div></section>',
    'before_title'  => '<h3>',
    'after_title'   => '</h3>',
]);

  register_sidebar([
    'name'          => __('Footer', 'roots'),
    'id'            => 'sidebar-footer',
    'before_widget' => '<div class="col-md-4"><section class="widget %1$s %2$s"><div class="widget-inner">',
    'after_widget'  => '</div></section></div>',
    'before_title'  => '<h3><span>',
    'after_title'   => '</span></h3>',
  ]);
  register_sidebar([
    'name'          => __('Contact Sidebar', 'roots'),
    'id'            => 'sidebar-contact',
    'before_widget' => '<section class="widget %1$s %2$s contact"><div class="widget-inner">',
    'after_widget'  => '</div></section>',
    'before_title'  => '<h3 class="h3_3border"><span>',
    'after_title'   => '</span></h3>',
  ]);
  register_sidebar([
    'name'          => __('Plz Widget', 'roots'),
    'id'            => 'plz-contact',
    'before_widget' => '<section class="widget %1$s %2$s contact plz"><div class="widget-inner">',
    'after_widget'  => '</div></section>',
    'before_title'  => '<h3 class="h3_3border"><span>',
    'after_title'   => '</span></h3>',
  ]);
}
add_action('widgets_init', __NAMESPACE__ . '\\widgets_init');
