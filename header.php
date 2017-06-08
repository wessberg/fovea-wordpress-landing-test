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
	<?php
	    wp_enqueue_script( 'elements', get_template_directory_uri() . (wp_is_mobile() ? '/lib/elements.mobile.js' : '/lib/elements.desktop.js') );?>

	<!-- Add the URL to the template path as a Javascript object for consumption inside the elements bundle. -->
	<?php wp_localize_script( 'elements', 'WP', array(
	    'templateUrl' => get_bloginfo('template_url'),
	    'version' => get_bloginfo('version'),
	    'pages' =>  get_pages(),
	    'posts' => array_map(function ($post) {
	                // Cast the value to an array so we can extend its properties
        	        $castPost = (array)$post;

        	        $date = date('F j, Y', strtotime($post->post_date));
        	        $castPost['post_date'] = $date;

                    // Take the featured image from the post (if it has one)
        	        if (has_post_thumbnail($post->ID)) {
        	            $featured_image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' )[0];
        	            $castPost['image'] = $featured_image;
        	        }

        	        // Take the post categories and add them to the object.
        	        $categories = array_map(function ($category) {return $category->cat_name;}, get_the_category($post->ID));
        	        $castPost['categories'] = $categories;

                    // Loop through the users to find the author.
        	        foreach (get_users() as $user) {

        	            // If the current user is the post author
        	            if ($user->ID == $post->post_author) {

        	                // Cast the value to an array so we can extend its properties
                            $castUser = (array)$user -> data;
                            // Get the avatar for the user
                            $castUser['avatar'] = get_avatar_url($user->ID);
                            // Bind it to the post
                            $castPost['author'] = (object)$castUser;
        	            }
        	        }

        	        // Return the contents (as an object).
        	        return (object)$castPost;
        	    }, get_posts())
	    ));
	?>
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
