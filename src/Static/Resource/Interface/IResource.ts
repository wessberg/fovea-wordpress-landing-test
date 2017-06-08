export interface IResourcePolyfillPathDict {
	pointerEvents: string;
	webAnimations: string;
}

export interface IResourceImgPathDict {
	author: string;
}

export interface IResourceAssetPathDict {
	img: IResourceImgPathDict;
}

export interface IResourceLibPathDict {
	polyfill: IResourcePolyfillPathDict;
	asset: IResourceAssetPathDict;
	elementsBundle: string;
}

export interface IResourcePathDict {
	template: string;
	base: string;
	pathname: string;
	sharedCss: string;
	lib: IResourceLibPathDict;
}

export interface IResource {
	path: IResourcePathDict
}