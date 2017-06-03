import "./Polyfill/Loader";
import {SvgIconUtil} from "./Service/SvgIconUtil/SvgIconUtil";
import {FOVEA_1_ICON, FOVEA_2_ICON, FOVEA_FAST_ICON, FOVEA_INTUITIVE_ICON, FOVEA_LOGO_ICON, FOVEA_TINY_ICON, GITHUB_LOGO, MATERIAL_TRIANGLE, NPM_LOGO, ROLLUP_LOGO, TWITTER_LOGO, TYPESCRIPT_LOGO, WEBPACK_LOGO} from "./Asset/Icon/Product/ProductIcons";
import {HEART_FILL, MENU} from "./Asset/Icon/Standard/MaterialIcons";
import {agentDetector, globalEventBlocker} from "./Service/Services";

// Set up icons
SvgIconUtil.addIcons([
	MENU,
	FOVEA_TINY_ICON,
	FOVEA_FAST_ICON,
	FOVEA_INTUITIVE_ICON,
	FOVEA_LOGO_ICON,
	FOVEA_1_ICON,
	FOVEA_2_ICON,
	ROLLUP_LOGO,
	WEBPACK_LOGO,
	TYPESCRIPT_LOGO,
	GITHUB_LOGO,
	NPM_LOGO,
	TWITTER_LOGO,
	HEART_FILL,
	MATERIAL_TRIANGLE
]);

// Block undesirable global events
globalEventBlocker.block("dragstart");
if (agentDetector.isMobile) globalEventBlocker.block("contextmenu");