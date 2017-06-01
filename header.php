<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<!-- Add 'shared.css' -->
	<?php wp_enqueue_style( 'shared', get_stylesheet_directory_uri() . '/shared.css' ); ?>
	<?php wp_enqueue_style( 'style', get_stylesheet_directory_uri() . '/style.css' ); ?>

	<!-- Add '/lib/elements.js' -->
	<?php wp_enqueue_script( 'elements', get_template_directory_uri() . '/lib/elements.js' ); ?>

	<!-- Add the URL to the template path as a Javascript object for consumption inside the elements bundle. -->
	<?php wp_localize_script( 'elements', 'WP', array( 'templateUrl' => get_bloginfo('template_url'), 'version' => get_bloginfo('version') ) ); ?>
	<?php wp_head(); ?>
</head>
<body>
</body>
