import {IPolyfill} from "../Interface/IPolyfill";

export const WebAnimationsPolyfill: IPolyfill = {
	path: "/lib/polyfill/web-animations.min.js",
	condition: !(typeof document.head.animate === "function")
};