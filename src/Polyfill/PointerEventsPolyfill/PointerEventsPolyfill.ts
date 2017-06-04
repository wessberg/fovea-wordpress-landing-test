import {IPolyfill} from "../Interface/IPolyfill";
import {GlobalObject} from "@wessberg/globalobject";
import {Resource} from "../../Static/Resource/Resource";

export const PointerEventsPolyfill: IPolyfill = {
	path: Resource.path.lib.polyfill.pointerEvents,
	condition: !("PointerEvent" in GlobalObject)
};