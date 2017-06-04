import {IResource} from "./Interface/IResource";

const BASE_PATH = WP.templateUrl;
const SHARED_CSS_PATH = `${BASE_PATH}/shared.css`;
const LIB_PATH = `${BASE_PATH}/lib`;
const POLYFILL_PATH = `${LIB_PATH}/polyfill`;
const POINTER_EVENTS_POLYFILL_PATH = `${POLYFILL_PATH}/pointer-events.min.js`;
const WEB_ANIMATIONS_POLYFILL_PATH = `${POLYFILL_PATH}/web-animations.min.js`;
const ASSET_PATH = `${LIB_PATH}/asset`;
const IMG_PATH = `${ASSET_PATH}/img`;
const AUTHOR_IMG_PATH = `${IMG_PATH}/author.jpg`;
const ELEMENTS_BUNDLE_PATH = `${LIB_PATH}/elements.js`;

export const Resource: IResource = {
	path: {
		base: BASE_PATH,
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