import {SvgIconUtil} from "./Service/SvgIconUtil/SvgIconUtil";
import {FOVEA_1_ICON, FOVEA_2_ICON, FOVEA_FAST_ICON, FOVEA_INTUITIVE_ICON, FOVEA_LOGO_ICON, FOVEA_TINY_ICON, MATERIAL_TRIANGLE, ROLLUP_LOGO, TYPESCRIPT_LOGO, WEBPACK_LOGO} from "./Asset/Icon/Product/ProductIcons";
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
	HEART_FILL,
	MATERIAL_TRIANGLE
]);

// Block undesirable global events
globalEventBlocker.block("dragstart");
if (agentDetector.isMobile) globalEventBlocker.block("contextmenu");

// Exports
export {HomeFrame} from "./Frame/HomeFrame/HomeFrame";