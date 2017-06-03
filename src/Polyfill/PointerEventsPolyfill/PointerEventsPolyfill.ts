import {IPolyfill} from "../Interface/IPolyfill";
import {GlobalObject} from "@wessberg/globalobject";

export const PointerEventsPolyfill: IPolyfill = {
	path: "/lib/polyfill/pointer-events.min.js",
	condition: !("PointerEvent" in GlobalObject)
};