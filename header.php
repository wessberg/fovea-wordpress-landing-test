<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <title>Fovea - Let's compile the web!</title>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="white">
    <meta name="theme-color" content="#4caf50">

    <script type="text/javascript">
        if (!('attachShadow' in Element.prototype && 'getRootNode' in Element.prototype) ||
           (!window.customElements || window.customElements.forcePolyfill)) {
                document.write(`
                   <div style="padding: 10px; display: flex; justify-content: center; align-items: center; flex-direction: column; font-family: 'Roboto', 'Noto', 'Helvetica Neue', Arial, Verdana, sans-serif;">
                    <h3 style="font-size: 20px; font-weight: 600;">Please visit this site in Chrome, Opera or Safari!</h3>
                    <h6 style="font-size: 16px;">This site is built with modern technologies such as Custom Elements, Shadow DOM, Web Animations, PointerEvents and CSS Custom properties.</h6>
                    <h6 style="font-size: 16px;">It is meant as a showcase of the modern component model for the web.</h6>
                   </div>
                `);
           }
    </script>
	<!-- Add 'shared.css' -->
	<?php
	    $stylesheet_uri = /* get_stylesheet_directory_uri(); */ str_replace("http", "https", get_stylesheet_directory_uri());
	    wp_enqueue_style( 'shared', $stylesheet_uri . '/shared.css' );
	?>

	<!-- Add '/lib/elements.js' -->
	<?php
	    $template_directory_uri = /* get_template_directory_uri(); */ str_replace("http", "https", get_template_directory_uri());
	    wp_enqueue_script( 'elements', $template_directory_uri . (wp_is_mobile() ? '/lib/elements.mobile.js' : '/lib/elements.desktop.js') );
	?>

	<!-- Add the URL to the template path as a Javascript object for consumption inside the elements bundle. -->
	<?php
	    $template_url = /* get_bloginfo('template_url'); */ str_replace("http", "https", get_bloginfo('template_url'));
	    $site_url = /* get_site_url(); */ str_replace("http", "https", get_site_url());
	    wp_localize_script( 'elements', 'WP', array(
	    'templateUrl' => $template_url,
	    'siteUrl' => $site_url,
	    'version' => get_bloginfo('version'),
	    'pages' =>  get_pages(),
	    'posts' => array_map(function ($post) {
	                // Cast the value to an array so we can extend its properties
        	        $castPost = (array)$post;

        	        $date = date('F j, Y', strtotime($post->post_date));
        	        $castPost['post_date'] = $date;

                    // Take the featured image from the post (if it has one)
        	        if (has_post_thumbnail($post->ID)) {
        	            $thumbnail_id = get_post_thumbnail_id( $post->ID );
        	            $featured_image = wp_get_attachment_image_src($thumbnail_id, 'full' );
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
