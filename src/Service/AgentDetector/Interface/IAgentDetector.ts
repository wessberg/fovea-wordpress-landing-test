import {BrowserKind} from "./BrowserKind";
import {NativePlatformKind} from "./NativePlatformKind";

export interface IAgentDetector {
	agent: string;
	IEMobileVersion: number;
	IEVersion: number;
	UCBrowserVersion: number;
	androidVersion: number;
	browser: BrowserKind;
	nativePlatform: NativePlatformKind|null;
	browserVersion: number;
	chromeVersion: number;
	edgeVersion: number;
	firefoxMobileVersion: number;
	firefoxVersion: number;
	iOSVersion: number;
	isAndroidBrowser: boolean;
	isAndroidDevice: boolean;
	isAppleDevice: boolean;
	isBlackberry: boolean;
	isChrome: boolean;
	isDesktopDevice: boolean;
	isEdge: boolean;
	isFirefox: boolean;
	isFirefoxMobile: boolean;
	isFirefoxOrFirefoxMobile: boolean;
	isIEMobile: boolean;
	isIOSDevice: boolean;
	isIPadDevice: boolean;
	isIPhoneDevice: boolean;
	isInternetExplorer: boolean;
	isInternetExplorerOrEdge: boolean;
	isMobile: boolean;
	isNative: boolean;
	isNativeAndroid: boolean;
	isNativeIOS: boolean;
	isOpera: boolean;
	isOperaMini: boolean;
	isOperaMobile: boolean;
	isSafari: boolean;
	isSafariOnDesktop: boolean;
	isSafariOnMobile: boolean;
	isSamsungInternet: boolean;
	isUCBrowser: boolean;
	isWebkitBrowser: boolean;
	operaMiniVersion: number;
	operaMobileVersion: number;
	operaVersion: number;
	safariVersion: number;
	samsungInternetVersion: number;
	vendorPrefix: string;
	vendorPrefixDashed: string;
}