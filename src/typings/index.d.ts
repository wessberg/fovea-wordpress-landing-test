declare interface WPDict {
	templateUrl: string;
	version: string;
}

declare const WP: WPDict;

/* tslint:disable */
declare interface TouchEvent {
	/* tslint:enable */
	_isScroller?: boolean;
}

/* tslint:disable */
declare interface CSSStyleDeclaration {
	/* tslint:enable */
	willChange: string|null;
	contain: string|null;
	webkitOverflowScrolling: string|null;
	objectFit: string|null;
}

/* tslint:disable */
declare interface Document {
	/* tslint:enable */
	documentMode: boolean;
}

/* tslint:disable */
declare interface Window {
	XMLHttpRequest: XMLHttpRequest;
	device?: { platform: string };
	ActiveXObject?: string;
	cordova: any;
	/* tslint:enable */
	requestIdleCallback(callback: () => void): void;
}

declare interface Node {
	getRootNode (): ShadowRoot;
}