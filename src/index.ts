import "./Polyfill/Loader";
import {SvgIconUtil} from "./Service/SvgIconUtil/SvgIconUtil";
import {BRAVE_LOGO, BROWSER_FRAME, CHROME_LOGO, EDGE_LOGO, FIREFOX_LOGO, FOVEA_1_ICON, FOVEA_2_ICON, FOVEA_FAST_ICON, FOVEA_INTUITIVE_ICON, FOVEA_LOGO_ICON, FOVEA_TINY_ICON, GITHUB_LOGO, IE_LOGO, MATERIAL_RECTANGLE, MATERIAL_TRIANGLE, MEDIUM_LOGO, NPM_LOGO, ROLLUP_LOGO, SAFARI_LOGO, TWITTER_LOGO, TYPESCRIPT_LOGO, WEBPACK_LOGO} from "./Asset/Icon/Product/ProductIcons";
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
	MEDIUM_LOGO,
	MENU,
	HEART_FILL,
	MATERIAL_TRIANGLE,
	MATERIAL_RECTANGLE,
	CHROME_LOGO,
	FIREFOX_LOGO,
	SAFARI_LOGO,
	BRAVE_LOGO,
	IE_LOGO,
	EDGE_LOGO,
	BROWSER_FRAME
]);

// Block undesirable global events
globalEventBlocker.block("dragstart");
if (agentDetector.isMobile) globalEventBlocker.block("contextmenu");