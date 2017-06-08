import {IResource} from "./Interface/IResource";

const TEMPLATE_PATH = WP.templateUrl;
const BASE_PATH = WP.siteUrl;
const SHARED_CSS_PATH = `${TEMPLATE_PATH}/shared.css`;
const LIB_PATH = `${TEMPLATE_PATH}/lib`;
const POLYFILL_PATH = `${LIB_PATH}/polyfill`;
const POINTER_EVENTS_POLYFILL_PATH = `${POLYFILL_PATH}/pointer-events.min.js`;
const WEB_ANIMATIONS_POLYFILL_PATH = `${POLYFILL_PATH}/web-animations.min.js`;
const ASSET_PATH = `${LIB_PATH}/asset`;
const IMG_PATH = `${ASSET_PATH}/img`;
const AUTHOR_IMG_PATH = `${IMG_PATH}/author.jpg`;
const ELEMENTS_BUNDLE_PATH = `${LIB_PATH}/elements.js`;

const pathname = () => {
	const path = location.pathname;

	if (path.endsWith("/about")) return path.slice(0, path.lastIndexOf("/about")) + "/";
	if (path.endsWith("/about/")) return path.slice(0, path.lastIndexOf("/about/")) + "/";
	if (path.endsWith("/learn")) return path.slice(0, path.lastIndexOf("/learn")) + "/";
	if (path.endsWith("/learn/")) return path.slice(0, path.lastIndexOf("/learn/")) + "/";
	if (path.endsWith("/news")) return path.slice(0, path.lastIndexOf("/news")) + "/";
	if (path.endsWith("/news/")) return path.slice(0, path.lastIndexOf("/news/")) + "/";
	return path;
};

export const Resource: IResource = {
	path: {
		base: BASE_PATH,
		template: TEMPLATE_PATH,
		pathname: pathname(),
		sharedCss: SHARED_CSS_PATH,
		lib: {
			polyfill: {
				pointerEvents: POINTER_EVENTS_POLYFILL_PATH,
				webAnimations: WEB_ANIMATIONS_POLYFILL_PATH
			},
			asset: {
				img: {
					author: AUTHOR_IMG_PATH
				}
			},
			elementsBundle: ELEMENTS_BUNDLE_PATH
		}
	}
};