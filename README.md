# Fovea Wordpress Theme

> Author: Frederik Wessberg (frra@itu.dk), June 2017.

![Fovea logo](./src/Asset/Img/fovea_logo_green.png)

## Demo

This page is live at [https://www.itu.dk/people/frra/fovea](https://www.itu.dk/people/frra/fovea)

A clickable mockup is also live at [https://www.itu.dk/people/frra/fovea](https://www.itu.dk/people/frra/fovea-clickable)

## Disclaimer

This theme is meant as a showcase of modern web technologies such as:

- CSS Custom properties
- Custom Elements
- Shadow DOM
- Web Animations
- PointerEvents
- Routing with the History API

Since polyfilling the Shadow DOM is a massive challenge and still doesn't accurately tackle `::slotted` pseudo-selectors,
this theme will only work on Chrome, Opera and Safari. For Safari, polyfills for PointerEvents and Web Animations are lazy-loaded.

There are some layout quirks in Safari still, due to the young age of the Shadow DOM v1 spec,
so **for the best experience, use Chrome or Opera**.

## Highlights

- Variable bundle generation for mobile and desktop clients. Among other things, this means that `:hover` styles are stripped from mobile clients AOT.
- The page is fully responsive.
- The Material Design guidelines are followed strictly and this page serves a custom implementation of, among other things, buttons, ripples and cards that all follow the spec.

## Installation

1. Move this theme inside your Wordpress themes folder (`/wp/wp-content/themes/`)

## Usage

### Blog posts

Your blog posts will appear in the *News* section of the site.
In the current version, these will appear in full length directly in the feed.

### Pages

Your pages will appear in the App Bar. There has been made static content for pages with
names *"about"*, *"news"* and *"learn"*.

## Building

If you want to build it yourself:

1. Go to the folder `/src` inside the theme.
2. Write `npm install` from the terminal and press enter.

You can now use the npm scripts for building and watching. Here are some of the things
you can do:

1. Use `npm run b` for building the desktop and mobile bundles.
2. Use `npm run b:desktop` for only building the desktop bundle.
3. Use `npm run b:mobile` for only building the mobile bundle.
4. Use `npm run b:production` for building the desktop and mobile bundles for production (minified and gzipped).
5. Use `npm run b:desktop:production` for only building the desktop bundle for production (minified and gzipped).
6. Use `npm run b:mobile:production` for only building the mobile bundle for production (minified and gzipped).

For all of these, you can exchange the `b` with `w` for instead watching and auto-compiling the bundle when your files change.