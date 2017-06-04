import {IPolyfill} from "../Interface/IPolyfill";
import {Resource} from "../../Static/Resource/Resource";

export const WebAnimationsPolyfill: IPolyfill = {
	path: Resource.path.lib.polyfill.webAnimations,
	condition: !(typeof document.head.animate === "function")
};