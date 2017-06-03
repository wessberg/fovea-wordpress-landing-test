<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <title>Fovea - Let's compile the web!</title>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="white">
    <meta name="theme-color" content="#4caf50">
	<!-- Add 'shared.css' -->
	<?php wp_enqueue_style( 'shared', get_stylesheet_directory_uri() . '/shared.css' ); ?>

	<!-- Add '/lib/elements.js' -->
	<?php wp_enqueue_script( 'elements', get_template_directory_uri() . '/lib/elements.js' ); ?>

	<!-- Add the URL to the template path as a Javascript object for consumption inside the elements bundle. -->
	<?php wp_localize_script( 'elements', 'WP', array( 'templateUrl' => get_bloginfo('template_url'), 'version' => get_bloginfo('version') ) ); ?>
	<style>
	    html, body {
            -ms-overflow-style: auto;
            -webkit-touch-callout: none !important;
            overflow: hidden;
        }

        html {
            overflow: hidden;
            height: 100%;
        }

        body {
            background-color: var(--color-background);
            margin: 0;
            padding: 0;
        }
	</style>
	<?php wp_head(); ?>
</head>
<body>
</body>
