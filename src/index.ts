import {SvgIconUtil} from "./Service/SvgIconUtil/SvgIconUtil";
import {FOVEA_1_ICON, FOVEA_2_ICON, FOVEA_FAST_ICON, FOVEA_INTUITIVE_ICON, FOVEA_LOGO_ICON, FOVEA_TINY_ICON} from "./Asset/Icon/Product/ProductIcons";
import {MENU} from "./Asset/Icon/Standard/MaterialIcons";
import {agentDetector, globalEventBlocker} from "./Service/Services";

// Set up icons
SvgIconUtil.addIcons([
	MENU,
	FOVEA_TINY_ICON,
	FOVEA_FAST_ICON,
	FOVEA_INTUITIVE_ICON,
	FOVEA_LOGO_ICON,
	FOVEA_1_ICON,
	FOVEA_2_ICON
]);

// Block undesirable global events
globalEventBlocker.block("dragstart");
if (agentDetector.isMobile) globalEventBlocker.block("contextmenu");

// Exports
export {DataBindingExampleComponent} from "./Component/DataBindingExampleComponent/DataBindingExampleComponent";
export {SummaryComponent} from "./Component/SummaryComponent/SummaryComponent";
export {HeroComponent} from "./Component/HeroComponent/HeroComponent";
export {HomeHeroComponent} from "./Component/HomeHeroComponent/HomeHeroComponent";
export {HomeFrame} from "./Frame/HomeFrame/HomeFrame";
export {Frame} from "./Frame/Frame/Frame";
export {Page} from "./Page/Page/Page";
export {HomePage} from "./Page/HomePage/HomePage";
export {ScrollComponent} from "./Component/ScrollComponent/ScrollComponent";
export {IconComponent} from "./Component/IconComponent/IconComponent";
export {CardComponent} from "./Component/CardComponent/CardComponent";
export {Component} from "./Component/Component/Component";
export {AppBarComponent} from "./Component/AppBarComponent/AppBarComponent";
export {HighlightsComponent} from "./Component/HighlightsComponent/HighlightsComponent";
export {CodeComponent} from "./Component/CodeComponent/CodeComponent";
export {ButtonComponent} from "./Component/ButtonComponent/ButtonComponent";
export {RippleComposite} from "./Composite/RippleComposite/RippleComposite";
export {FocusableComposite} from "./Composite/FocusableComposite/FocusableComposite";
export {PrecompileCodeExampleComponent} from "./Component/PrecompileCodeExampleComponent/PrecompileCodeExampleComponent";
export {PrecompileExampleComponent} from "./Component/PrecompileExampleComponent/PrecompileExampleComponent";
export {PostcompileCodeExampleComponent} from "./Component/PostcompileCodeExampleComponent/PostcompileCodeExampleComponent";
export {PostcompileExampleComponent} from "./Component/PostcompileExampleComponent/PostcompileExampleComponent";