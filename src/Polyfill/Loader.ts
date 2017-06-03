import {PointerEventsPolyfill} from "./PointerEventsPolyfill/PointerEventsPolyfill";
import {IPolyfill} from "./Interface/IPolyfill";
import {WebAnimationsPolyfill} from "./WebAnimationsPolyfill/WebAnimationsPolyfill";

const getScript = (): HTMLScriptElement => {
	const script = <HTMLScriptElement> document.createElement("script");
	script.type = "text/javascript";
	script.defer = true;
	return script;
};

function addPolyfill (source: IPolyfill): void {
	const script = getScript();
	const normalizedPath = source.path.startsWith("/") ? source.path : `/${source.path}`;
	script.src = `${WP.templateUrl}${normalizedPath}`;
	document.head.appendChild(script);
}

function loadPolyfills (): void {
	if (PointerEventsPolyfill.condition) addPolyfill(PointerEventsPolyfill);
	if (WebAnimationsPolyfill.condition) addPolyfill(WebAnimationsPolyfill);
}

loadPolyfills();