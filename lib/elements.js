(function (exports) {
'use strict';


	const process = {
		env: {"KIND":0,"NODE_ENV":"development","TEST":false,"MOBILE":false,"SERVE":false,"TLS":false,"DEBUG":false}
	};


let GlobalObjectIdentifier;
function shimGlobalObject() {
    /* tslint:disable */
    let root;
    /* tslint:enable */
    try {
        root = self;
        GlobalObjectIdentifier = "self";
        if (!("window" in root))
            Object.defineProperty(root, "window", { value: self });
        if (!("global" in root))
            Object.defineProperty(root, "global", { value: self });
        if (!("root" in root))
            Object.defineProperty(root, "root", { value: self });
    }
    catch (e) {
        try {
            root = global;
            GlobalObjectIdentifier = "global";
            if (!("window" in root))
                Object.defineProperty(root, "window", { value: global });
            if (!("self" in root))
                Object.defineProperty(root, "self", { value: global });
            if (!("root" in root))
                Object.defineProperty(root, "root", { value: global });
        }
        catch (e) {
            root = window;
            GlobalObjectIdentifier = "window";
            if (!("global" in root))
                Object.defineProperty(root, "global", { value: window });
            if (!("self" in root))
                Object.defineProperty(root, "self", { value: window });
            if (!("root" in root))
                Object.defineProperty(root, "root", { value: window });
        }
    }
    return root;
}

const GlobalObject = shimGlobalObject();

const PointerEventsPolyfill = {
    path: "/lib/polyfill/pointer-events.min.js",
    condition: !("PointerEvent" in GlobalObject)
};

const WebAnimationsPolyfill = {
    path: "/lib/polyfill/web-animations.min.js",
    condition: !(typeof document.head.animate === "function")
};

const getScript = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.defer = true;
    return script;
};
function addPolyfill(source) {
    const script = getScript();
    const normalizedPath = source.path.startsWith("/") ? source.path : `/${source.path}`;
    script.src = `${WP.templateUrl}${normalizedPath}`;
    document.head.appendChild(script);
}
function loadPolyfills() {
    if (PointerEventsPolyfill.condition)
        addPolyfill(PointerEventsPolyfill);
    if (WebAnimationsPolyfill.condition)
        addPolyfill(WebAnimationsPolyfill);
}
loadPolyfills();

class SvgIconUtil {
    static addIcon(icon) {
        SvgIconUtil.seenIcons.set(icon.selector, icon);
    }
    static addIcons(icons) {
        icons.map(icon => this.addIcon(icon));
    }
    buildIconFromName(iconName) {
        const icon = SvgIconUtil.seenIcons.get(iconName);
        if (icon == null)
            throw new ReferenceError(`No icon was found for selector: ${iconName}`);
        return this.buildSvgIcon(icon);
    }
    buildSvgIcon(icon) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const content = document.createElementNS("http://www.w3.org/2000/svg", "g");
        content.innerHTML = icon.template;
        content.setAttribute("viewBox", icon.viewBox);
        svg.setAttribute("viewBox", icon.viewBox);
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svg.style.cssText = "pointer-events: none; display: block; width: 100%; height: 100%;";
        svg.appendChild(content);
        return svg;
    }
}
SvgIconUtil.seenIcons = new Map();

const FOVEA_TINY_ICON = {
    selector: "fovea-tiny",
    viewBox: "0 0 61 61",
    template: `<defs><circle id="path-1" cx="30.5" cy="30.5" r="30.5"/></defs><g id="Page-2" fill="none" fill-rule="evenodd"><g id="tiny_icon"><mask id="mask-2" fill="#fff"><use xlink:href="#path-1"/></mask><use id="rounding_mask" fill="#D8D8D8" xlink:href="#path-1"/><path id="fill_target" mask="url(#mask-2)" d="M0 0h61v61H0z"/><g id="chip" mask="url(#mask-2)" fill="#FFF"><path d="M22.06 18.3h17.5v1.52h4.36v3.05h-4.37v3.05h4.37v3.05h-4.37v3.06h4.37v3.04h-4.37v3.05h4.37v3.06h-4.37v1.52h-17.5v-1.53H17.7v-3.05h4.36v-3.04H17.7v-3.05h4.36v-3.05H17.7v-3.05h4.36v-3.05H17.7v-3.05h4.36V18.3zm7.3 16.77v4.58h1.45v-4.57h-1.44zm2.9 0v4.58h1.46v-4.57h-1.46zm2.92 0v4.58h1.45v-4.57h-1.45z" id="Shape"/></g><path id="bg_overlay" fill="#000" opacity=".07" mask="url(#mask-2)" d="M0 0h61v30.5H0z"/></g></g>`
};
const FOVEA_FAST_ICON = {
    selector: "fovea-fast",
    viewBox: "0 0 61 61",
    template: `<defs><circle id="path-1" cx="30.5" cy="30.5" r="30.5"/></defs><g id="Page-2" fill="none" fill-rule="evenodd"><g id="rounded_icon"><mask id="mask-2" fill="#fff"><use xlink:href="#path-1"/></mask><use id="rounding_mask" fill="#D8D8D8" xlink:href="#path-1"/><path id="fill_target" mask="url(#mask-2)" d="M0 0h61v61H0z"/><g id="logo" mask="url(#mask-2)" fill-rule="nonzero" fill="#FFF"><path d="M46.97 30.5c0 6.4-5.26 11.6-11.76 11.6-6.44 0-11.7-5.2-11.7-11.6 0-6.4 5.26-11.6 11.75-11.6 6.5 0 11.77 5.2 11.77 11.6zm-11.02-5.8h-2.2v6.38l4.06 4 1.6-1.52-3.4-3.38V24.7zM14.88 39.2c-.8 0-1.47-.66-1.47-1.46 0-.8.7-1.45 1.5-1.45h6.88c.45 1 1.04 2 1.72 2.9h-8.6zm-1.7-7.25c-.82 0-1.48-.65-1.48-1.45 0-.8.66-1.45 1.47-1.45h7.42l-.1 1.45.05 1.45h-7.42zm-1.4-7.25c-.82 0-1.48-.64-1.48-1.44 0-.8.66-1.45 1.47-1.45h11.7c-.7.9-1.28 1.9-1.73 2.9h-9.97z" id="Shape"/></g><path id="bg_overlay" fill="#000" opacity=".07" mask="url(#mask-2)" d="M0 0h61v30.5H0z"/></g></g>`
};
const FOVEA_INTUITIVE_ICON = {
    selector: "fovea-intuitive",
    viewBox: "0 0 61 61",
    template: `<defs><circle id="path-1" cx="30.5" cy="30.5" r="30.5"/></defs><g id="Page-2" fill="none" fill-rule="evenodd"><g id="intuitive_icon"><mask id="mask-2" fill="#fff"><use xlink:href="#path-1"/></mask><use id="rounding_mask" fill="#D8D8D8" xlink:href="#path-1"/><path id="fill_target" mask="url(#mask-2)" d="M0 0h61v61H0z"/><g id="web-components" mask="url(#mask-2)"><g fill-rule="nonzero" id="Group"><path id="Shape" fill-opacity=".68" fill="#FEC007" d="M21.97 47.96L11.77 19.9l28.04-7.53L45 41.8l-10.64 6.28-12.3-.12"/><path id="Shape" fill-opacity=".77" fill="#FEC007" d="M42.24 40.55L37.88 15.4 26.4 18.5l7.24 27.13z"/><path d="M53.16 26.88l1.3 4.52-10 2.84s0 6.04-4.86 8.44c-4.86 2.4-8.63.37-8.63.37l-.6-1.75 7.2-1.97 1.6-6.2-4.65-4.57-6.67 2.03-.58-1.6s3.13-7 12.33-3c0 0 2.9 1.8 3.55 3.4l10-2.6zm1.3-.33l1.6-.47 1.28 4.6-1.67.52-1.2-4.65z" id="Shape" fill="#FFF"/><path d="M55.02 26.34l1.04-.26 1.28 4.6-1.67.52-.44-1.54.67-.26-.88-3.06zm-2.97.83l1.1-.3 1.3 4.53-10 2.84s-.1 5.27-3.6 7.66c-3.46 2.38-7.38 2.3-9.88 1.15l-.28-.8s6.8 1.6 10.1-3.54c2-3.3 2-5.8 2-5.8l10-2.7-.87-3zM27.27 29l5.87-1.72 1.38 1.28-6.67 2.03-.58-1.6z" id="Shape" fill="#FEC007"/><path d="M6.56 32.2l1.18 4.54 10.04-2.7s3.08 5.2 8.48 4.76c5.4-.43 7.6-4.12 7.6-4.12l-.37-1.8-7.2 2-4.6-4.5 1.62-6.32 6.76-1.68-.3-1.67s-6.2-4.3-12.1 3.8c0 0-1.6 3.1-1.3 4.8l-9.9 3zm-1.3.38l-1.6.42 1.25 4.62 1.7-.42-1.3-4.62z" id="Shape" fill="#FFF"/><path d="M4.68 32.7l-1.02.3 1.25 4.62 1.7-.42-.4-1.55-.7.1-.8-3.06zm2.98-.83l-1.1.33 1.18 4.54 10.04-2.7s2.78 4.48 7 4.74c4.2.26 7.53-1.8 9.08-4.1l-.17-.83s-5.1 4.87-10.6 2.2c-3.5-1.87-4.7-3.98-4.7-3.98l-10 2.8-.8-3zm22.22-11.15l-5.92 1.54-.53 1.8 6.76-1.68-.4-1.66z" id="Shape" fill="#FEC007"/></g></g><path id="bg_overlay" fill="#000" opacity=".07" mask="url(#mask-2)" d="M0 0h61v30.5H0z"/></g></g>`
};
const FOVEA_LOGO_ICON = {
    selector: "fovea-logo",
    viewBox: "0 0 123 197",
    template: `<g fill-rule="evenodd"><path opacity=".7" d="M61.2 46l60.6 52-60.6 46L0 98"/><path opacity=".8" d="M62 23.3l60.5 52.2-60.6 46-61.4-46"/><path d="M61.2 0l60.6 52-60.6 46L0 52"/><path opacity=".8" d="M0 98l61.2 46v52.2L0 149"/><path d="M121.8 98l-60.6 46v52.2c20.2-16 60.6-47.3 60.6-47.3V98z"/></g>`
};
const FOVEA_1_ICON = {
    selector: "fovea-1",
    viewBox: "0 0 74 74",
    template: `<path fill-rule="evenodd" d="M37 74C16.6 74 0 57.4 0 37S16.6 0 37 0s37 16.6 37 37-16.6 37-37 37zm2-24V26.5l-8 1v2.2h4.8V50H39z"/>`
};
const FOVEA_2_ICON = {
    selector: "fovea-2",
    viewBox: "0 0 74 74",
    template: `<path fill-rule="evenodd" d="M37 74C16.6 74 0 57.4 0 37S16.6 0 37 0s37 16.6 37 37-16.6 37-37 37zm8-24v-2.5H34l6.2-6.8c1.3-1.5 2.4-2.8 3.2-4 .7-1.4 1-2.7 1-4 0-2-.5-3.4-1.8-4.7-1.2-1.2-3-1.8-5-1.8-2.5 0-4.4.7-5.8 2-1.4 1.4-2 3-2 5.2h3c0-1.5.4-2.6 1.2-3.5.8-1 2-1.6 3.6-1.6 1 0 2 .4 2.7 1.2.8.7 1 1.7 1 3 0 .8 0 1.7-.6 2.6-.5 1-1.4 2-2.8 3.7l-8 9v2h15z"/>`
};
const ROLLUP_LOGO = {
    selector: "rollup-logo",
    viewBox: "0 0 56 73",
    template: `<defs><linearGradient id="a" x1="26.8%" x2="67.6%" y1="48.2%" y2="55.3%"><stop stop-color="#FF6533" offset="0%"/><stop stop-color="#FF5633" offset="15.7%"/><stop stop-color="#FF4333" offset="43.4%"/><stop stop-color="#FF3733" offset="71.4%"/><stop stop-color="#F33" offset="100%"/></linearGradient><linearGradient id="b" x1="20.5%" x2="93.5%" y1="38.1%" y2="80.4%"><stop stop-color="#BF3338" offset="0%"/><stop stop-color="#F33" offset="100%"/></linearGradient><linearGradient id="c" x1="32.3%" x2="45.6%" y1="39.5%" y2="48.9%"><stop stop-color="#FF6533" offset="0%"/><stop stop-color="#FF5633" offset="15.7%"/><stop stop-color="#FF4333" offset="43.4%"/><stop stop-color="#FF3733" offset="71.4%"/><stop stop-color="#F33" offset="100%"/></linearGradient><linearGradient id="d" x1="51.6%" x2="48.5%" y1="78.3%" y2="41.7%"><stop stop-color="#FF6533" offset="0%"/><stop stop-color="#FF5633" offset="15.7%"/><stop stop-color="#FF4333" offset="43.4%"/><stop stop-color="#FF3733" offset="71.4%"/><stop stop-color="#F33" offset="100%"/></linearGradient><linearGradient id="e" x1="40.2%" x2="54%" y1="47.2%" y2="54.5%"><stop stop-color="#FBB040" offset="0%"/><stop stop-color="#FB8840" offset="100%"/></linearGradient><linearGradient id="f" x1="55.2%" x2="40.9%" y1="5.9%" y2="128%"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#FFF" stop-opacity="0" offset="100%"/></linearGradient></defs><g fill="none"><path fill="url(#a)" d="M48 16.4C48 12 47 8 45 4.6 39.8-1 28.4-2 25.6 4.6c-3 6.7 4.8 14.3 8.2 13.7 4.4-.8-.7-10.7-.7-10.7 7 12.5 5.5 8.6-6.5 20.2C14.5 39.3 2 63.5.5 64.6H0h47c.7 0 1.3-.8 1-1.5L35.5 39c-.2-.6 0-1.2.5-1.5 7.2-4 12-12 12-20.8z" transform="translate(7.505 7.67)"/><path fill="url(#b)" d="M48 16.4C48 12 47 8 45 4.6 39.8-1 28.4-2 25.6 4.6c-3 6.7 4.8 14.3 8.2 13.7 4.4-.8-.7-10.7-.7-10.7 7 12.5 5.5 8.6-6.5 20.2C14.5 39.3 2 63.5.5 64.6H0h47c.7 0 1.3-.8 1-1.5L35.5 39c-.2-.6 0-1.2.5-1.5 7.2-4 12-12 12-20.8z" transform="translate(7.505 7.67)"/><path fill="url(#c)" d="M7.8 72.2c1.7-1 14-25.3 26-36.8 12-11.5 13.4-7.7 6.8-20.2 0 0-25.3 35.7-34.5 53.3"/><path fill="url(#d)" d="M9.4 40.3C26.4 8.7 28.7 5.5 37.7 5.5c4.6 0 9.4 2 12.4 6C46 4.5 39 0 30 0H1C.6 0 0 .5 0 1v59c1.7-4.5 4.7-11 9.4-19.7z" transform="translate(1.908)"/><path fill="url(#e)" d="M33.7 35.4C21.7 47 9.5 71.2 7.7 72.2c-1.7 1-4.7 1.2-6.3-.6-1.7-2-4.3-5 10-31.3 17-31.6 19.2-34.8 28-34.8 4.7 0 9.5 2 12.5 6l.2.7c-5-5.4-16.4-6.6-19.4 0C30 19 38 26.6 41.3 26c4.3-.8-.8-10.8-.8-10.8 6.6 12.5 5 8.7-7 20.2z"/><path fill="url(#f)" d="M12.7 41.7C29.7 10 32 7 41 7c3.8 0 7.7 1.3 10.6 4-3-3.5-7.5-5.5-12-5.5-9 0-11.2 3.2-28.3 34.8C-3 66.6-.3 69.7 1.3 71.6l1 .7C.6 70 0 65 12.6 41.7z" opacity=".3"/></g>`
};
const WEBPACK_LOGO = {
    selector: "webpack-logo",
    viewBox: "0 0 67 78",
    template: `<g fill="none"><path fill="#A2BDE9" d="M33.5 0L0 19.6v38.8l33.5 19.4L67 58.3V19.5"/><path fill="#6F95DB" d="M33.5 19.8L17 29.4v19.3l16.5 9.6L50 48.7V29.4"/><path fill="#FFF" d="M33.5 0L0 19.5 33.5 38 67 19.6M33.5 40.4L0 58.4l33.5 19.3L67 58" opacity=".1"/></g>`
};
const TYPESCRIPT_LOGO = {
    selector: "typescript-logo",
    viewBox: "0 0 284 70",
    template: `<path fill="#007ACC" d="M34.98 7.56H20.43v45.07h-5.9V7.56H0V2.2h34.98v5.36zm22.96 9.07L41.38 58.4c-2.95 7.44-7.1 11.17-12.45 11.17-1.5 0-2.75-.15-3.76-.46V64c1.24.42 2.38.63 3.4.63 2.92 0 5.1-1.73 6.55-5.2L38 52.55l-14.06-35.9h6.4l9.74 27.7c.12.34.36 1.26.74 2.73h.2c.13-.56.36-1.45.7-2.67l10.24-27.7h5.98zm9.43 30.8h-.14V69.2h-5.77V16.62h5.77v6.33h.14c2.84-4.78 6.98-7.17 12.45-7.17 4.64 0 8.26 1.6 10.86 4.82 2.6 3.22 3.9 7.54 3.9 12.96 0 6.02-1.46 10.85-4.4 14.47-2.92 3.62-6.93 5.43-12 5.43-4.68 0-8.28-2.02-10.8-6.05zm-.14-14.52V38c0 2.98.97 5.5 2.9 7.58s4.4 3.1 7.37 3.1c3.5 0 6.23-1.33 8.2-4 2-2.67 2.98-6.4 2.98-11.14 0-4-.93-7.15-2.78-9.42-1.85-2.27-4.36-3.4-7.52-3.4-3.35 0-6.05 1.16-8.1 3.5-2.03 2.3-3.05 5.23-3.05 8.75zm62.33 3.2h-25.42c.1 4 1.17 7.1 3.23 9.3 2.06 2.2 4.9 3.3 8.5 3.3 4.06 0 7.8-1.3 11.2-4V50c-3.17 2.3-7.36 3.45-12.56 3.45-5 0-9-1.63-11.9-4.9-2.9-3.27-4.3-7.87-4.3-13.8 0-5.6 1.6-10.17 4.8-13.7 3.2-3.52 7.1-5.28 11.9-5.28 4.7 0 8.4 1.5 11 4.56 2.6 3.05 3.9 7.28 3.9 12.7v3zm-5.9-4.9c-.03-3.3-.84-5.9-2.42-7.7-1.58-1.8-3.78-2.7-6.6-2.7-2.7 0-5.02 1-6.92 2.9-1.9 2-3.07 4.5-3.52 7.7h19.45zm10.94 19.4v-6.9c.73.7 1.6 1.4 2.62 1.9 1.02.6 2.1 1.1 3.22 1.5 1.13.4 2.26.7 3.4.9 1.13.2 2.18.3 3.14.3 3.32 0 5.8-.6 7.45-2 1.64-1.3 2.46-3.3 2.46-5.8 0-1.3-.3-2.5-.9-3.5-.6-1-1.3-1.9-2.3-2.7-1-.8-2.1-1.6-3.5-2.4l-4.2-2.5c-1.6-.9-3.1-1.8-4.5-2.7-1.4-.9-2.6-1.9-3.6-3-1.1-1.1-1.9-2.35-2.5-3.74-.6-1.4-.9-3.03-.9-4.9 0-2.3.4-4.3 1.3-6 .94-1.7 2.15-3.1 3.66-4.2 1.5-1.1 3.2-1.9 5.1-2.45 1.93-.55 3.9-.8 5.9-.8 4.52 0 7.83.6 9.9 1.77v6.6c-2.7-2-6.2-3.1-10.5-3.1-1.15 0-2.33.2-3.5.4-1.1.3-2.2.8-3.1 1.4-.9.6-1.6 1.4-2.2 2.4-.6 1-.86 2.17-.86 3.56 0 1.3.2 2.4.65 3.36s1.1 1.8 1.9 2.56c.87.8 1.9 1.54 3.15 2.27 1.27.7 2.7 1.5 4.3 2.3 1.68.9 3.25 1.8 4.7 2.8 1.5 1 2.8 2.1 3.9 3.3 1.1 1.2 2 2.5 2.67 3.93.65 1.46 1 3.1 1 5 0 2.48-.44 4.6-1.3 6.3-.9 1.7-2.1 3.1-3.6 4.2s-3.25 1.87-5.2 2.35c-2 .5-4.08.7-6.27.7-.75 0-1.65-.04-2.7-.2-1.1-.1-2.2-.3-3.3-.53-1.14-.23-2.2-.53-3.2-.9-1-.4-1.8-.8-2.4-1.23zm58.65.4c-2.77 1.7-6.05 2.5-9.84 2.5-5.1 0-9.2-1.6-12.4-5-3.1-3.3-4.7-7.7-4.7-13 0-5.9 1.7-10.7 5.1-14.3 3.4-3.6 8-5.4 13.6-5.4 3.2 0 6 .6 8.4 1.8v5.9c-2.6-1.8-5.5-2.8-8.6-2.8-3.7 0-6.7 1.3-9 4s-3.5 6.1-3.5 10.4c0 4.3 1.1 7.6 3.4 10 2.2 2.5 5.2 3.7 8.9 3.7 3.2 0 6.1-1 8.9-3.1V51zm22.3-28.5c-1-.7-2.45-1.1-4.35-1.1-2.46 0-4.52 1.2-6.17 3.5-1.65 2.3-2.48 5.5-2.48 9.5v18.3h-5.77v-36h5.77v7.4h.14c.8-2.5 2-4.5 3.7-5.9 1.7-1.4 3.6-2.1 5.6-2.1 1.5 0 2.6.2 3.4.5v6zm6.65-15c-1.03 0-1.9-.3-2.64-1-.73-.7-1.1-1.6-1.1-2.6 0-1.1.37-1.9 1.1-2.7.73-.7 1.6-1 2.64-1 1.05 0 1.95.4 2.7 1.1.73.7 1.1 1.6 1.1 2.7 0 1-.37 1.9-1.1 2.7-.75.7-1.65 1.1-2.7 1.1zm2.8 45.2h-5.76v-36H225v36zm9.3-5.2h-.13v21.7h-5.77V16.7h5.77V23h.14c2.9-4.8 7-7.18 12.5-7.18 4.7 0 8.3 1.6 10.9 4.8 2.6 3.24 3.9 7.56 3.9 12.98 0 6.02-1.4 10.85-4.4 14.47-2.9 3.62-6.9 5.43-12 5.43-4.6 0-8.2-2.02-10.8-6.05zm-.13-14.5v5c0 3 .97 5.5 2.9 7.6s4.4 3.1 7.37 3.1c3.5 0 6.23-1.3 8.2-4 2-2.6 2.98-6.4 2.98-11.1 0-4-.93-7.1-2.78-9.4-1.85-2.2-4.36-3.4-7.52-3.4-3.35 0-6.05 1.2-8.1 3.5-2.03 2.3-3.05 5.3-3.05 8.8zm48.93 19.4c-1.37.8-3.16 1.2-5.4 1.2-6.3 0-9.45-3.5-9.45-10.5V21.6h-6.2v-4.93h6.2v-8.8L274.02 6v10.65h9.07v4.92H274v20.28c0 2.4.4 4.14 1.23 5.17.82 1.03 2.18 1.55 4.08 1.55 1.5 0 2.7-.4 3.8-1.2v4.93z"/>`
};
const MATERIAL_TRIANGLE = {
    selector: "material-triangle",
    viewBox: "0 0 100 100",
    template: `<path fill-rule="evenodd" d="M50 0l50 100H0"/>`
};

/* tslint:enable */

const viewBox = "0 0 24 24";
/* tslint:disable */



































const HEART_FILL$$1 = {
    selector: "heart-fill",
    viewBox,
    template: `<path d="M12 21.4L10.6 20C5.4 15.4 2 12.3 2 8.5 2 5.5 4.4 3 7.5 3c1.7 0 3.4.8 4.5 2 1-1.2 2.8-2 4.5-2 3 0 5.5 2.4 5.5 5.5 0 3.8-3.4 7-8.6 11.5L12 21.4z"/>`
};



























































































































































































































const MENU$$1 = {
    selector: "menu",
    viewBox,
    template: `<path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />`
};












































/* tslint:enable */

class AnimationOperations {
    animate(element, keyframes, options) {
        return new Promise((resolve, reject) => {
            try {
                requestAnimationFrame(() => {
                    const animation = element.animate(keyframes, options);
                    if (options.iterations === Infinity)
                        return resolve(animation);
                    animation.onfinish = animation.oncancel = () => {
                        resolve(animation);
                    };
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
}

class EventUtil {
    constructor() {
        this.boundEventHandlers = new Map();
    }
    fire(eventName, target = window, detail = null) {
        const normalizedConfig = Object.assign({}, { detail });
        const event = new CustomEvent(eventName, normalizedConfig);
        target.dispatchEvent(event);
        return event;
    }
    waitFor(event, on) {
        return new Promise(resolve => {
            const handler = function (e) {
                on.removeEventListener(event, handler);
                resolve(e);
            };
            on.addEventListener(event, handler);
        });
    }
    waitForAny(events, on) {
        return new Promise(resolve => {
            let resolved = false;
            events.forEach(async (eventName) => {
                const e = await this.waitFor(eventName, on);
                if (resolved)
                    return;
                resolved = true;
                resolve(e);
            });
        });
    }
    listen(binder, eventName, on, handler, passive = true, raf = false, bindTo) {
        const bound = handler.bind(bindTo || binder);
        const boundHandler = raf ? (e) => {
            const currentTarget = e.currentTarget;
            requestAnimationFrame(() => bound(e, currentTarget));
        } : bound;
        on.addEventListener(eventName, boundHandler, { passive, capture: false });
        const existingHandlers = this.boundEventHandlers.get(binder) || [];
        existingHandlers.push({
            listener: boundHandler,
            unbound: handler,
            eventName,
            on
        });
        this.boundEventHandlers.set(binder, existingHandlers);
    }
    unlisten(binder, eventName, on, handler) {
        const boundHandlers = this.boundEventHandlers.get(binder);
        if (boundHandlers == null)
            return;
        const boundHandler = boundHandlers.find(h => h.eventName === eventName && h.on === on && h.unbound === handler);
        if (boundHandler == null)
            throw new ReferenceError(`Could not find an associated handler to unbind for event: '${eventName}' with handler: '${handler.toString()}' for binder: '${binder.nodeName.toLowerCase()}'`);
        on.removeEventListener(eventName, boundHandler.listener);
        this.boundEventHandlers.delete(binder);
    }
    clearListeners(specificBinder) {
        this.boundEventHandlers.forEach((bindings, binder) => {
            if (specificBinder != null && binder !== specificBinder)
                return;
            bindings.forEach(bound => this.unlisten(binder, bound.eventName, bound.on, bound.unbound));
        });
    }
}

class WaitOperations {
    async wait(time = 0) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
}

var BrowserKind;
(function (BrowserKind) {
    BrowserKind[BrowserKind["ANDROID_STOCK"] = 0] = "ANDROID_STOCK";
    BrowserKind[BrowserKind["BLACKBERRY"] = 1] = "BLACKBERRY";
    BrowserKind[BrowserKind["CHROME"] = 2] = "CHROME";
    BrowserKind[BrowserKind["EDGE"] = 3] = "EDGE";
    BrowserKind[BrowserKind["FIREFOX"] = 4] = "FIREFOX";
    BrowserKind[BrowserKind["FIREFOX_MOBILE"] = 5] = "FIREFOX_MOBILE";
    BrowserKind[BrowserKind["IE"] = 6] = "IE";
    BrowserKind[BrowserKind["IE_MOBILE"] = 7] = "IE_MOBILE";
    BrowserKind[BrowserKind["OPERA"] = 8] = "OPERA";
    BrowserKind[BrowserKind["OPERA_MINI"] = 9] = "OPERA_MINI";
    BrowserKind[BrowserKind["OPERA_MOBILE"] = 10] = "OPERA_MOBILE";
    BrowserKind[BrowserKind["SAFARI"] = 11] = "SAFARI";
    BrowserKind[BrowserKind["SAMSUNG_INTERNET"] = 12] = "SAMSUNG_INTERNET";
    BrowserKind[BrowserKind["UC_BROWSER"] = 13] = "UC_BROWSER";
    BrowserKind[BrowserKind["UNKNOWN"] = 14] = "UNKNOWN";
})(BrowserKind || (BrowserKind = {}));

var NativePlatformKind;
(function (NativePlatformKind) {
    NativePlatformKind[NativePlatformKind["ANDROID"] = 0] = "ANDROID";
    NativePlatformKind[NativePlatformKind["IOS"] = 1] = "IOS";
})(NativePlatformKind || (NativePlatformKind = {}));

class AgentDetector {
    constructor() {
        this.agent = (navigator == null || navigator.userAgent == null) ? "" : navigator.userAgent.toLowerCase();
        this.browser = this.detectBrowser();
        this.isEdge = this.browser === BrowserKind.EDGE;
        this.isInternetExplorer = this.browser === BrowserKind.IE;
        this.isInternetExplorerOrEdge = this.isEdge || this.isInternetExplorer;
        this.isFirefox = this.browser === BrowserKind.FIREFOX;
        this.isFirefoxMobile = this.browser === BrowserKind.FIREFOX_MOBILE;
        this.isFirefoxOrFirefoxMobile = this.isFirefox || this.isFirefoxMobile;
        this.isSamsungInternet = this.browser === BrowserKind.SAMSUNG_INTERNET;
        this.isUCBrowser = this.browser === BrowserKind.UC_BROWSER;
        this.isChrome = this.browser === BrowserKind.CHROME;
        this.isSafari = this.browser === BrowserKind.SAFARI;
        this.isOpera = this.browser === BrowserKind.OPERA;
        this.isBlackberry = this.browser === BrowserKind.BLACKBERRY;
        this.isOperaMobile = this.browser === BrowserKind.OPERA_MOBILE;
        this.isIEMobile = this.browser === BrowserKind.IE_MOBILE;
        this.isOperaMini = this.browser === BrowserKind.OPERA_MINI;
        this.isNative = GlobalObject.cordova != null;
        this.isAndroidBrowser = this.browser === BrowserKind.ANDROID_STOCK && !this.isNative;
        this.isMobile = this.isNative || /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent);
        this.nativePlatform = this.detectNativePlatform();
        this.isIOSDevice = this.isIOSAgent() || this.nativePlatform === NativePlatformKind.IOS;
        this.isIPhoneDevice = /iphone|ipod/i.test(this.agent);
        this.isIPadDevice = /ipad/i.test(this.agent);
        this.isSafariOnDesktop = this.browser === BrowserKind.SAFARI && !this.isMobile;
        this.isSafariOnMobile = this.isMobile && !this.isNative && this.browser === BrowserKind.SAFARI;
        this.isNativeIOS = this.nativePlatform === NativePlatformKind.IOS;
        this.isNativeAndroid = this.nativePlatform === NativePlatformKind.ANDROID;
        this.isAndroidDevice = this.isNativeAndroid || this.agent.includes("android");
        this.isAppleDevice = this.isNativeIOS || this.browser === BrowserKind.SAFARI;
        this.isDesktopDevice = !this.isMobile;
        this.isWebkitBrowser = this.agent.includes("applewebkit");
        this.iOSVersion = this.isIOSDevice ? this.detectIOSVersion() : -1;
        this.IEVersion = this.isInternetExplorer ? this.detectIEVersion() : -1;
        this.chromeVersion = this.isChrome ? this.detectChromeVersion() : -1;
        this.firefoxVersion = this.isFirefox ? this.detectFirefoxVersion() : -1;
        this.safariVersion = this.isSafari ? this.detectSafariVersion() : -1;
        this.edgeVersion = this.isEdge ? this.detectEdgeVersion() : -1;
        this.operaVersion = this.isOpera ? this.detectOperaVersion() : -1;
        this.operaMiniVersion = this.isOperaMini ? this.detectOperaMiniVersion() : -1;
        this.operaMobileVersion = this.isOperaMobile ? this.detectOperaMobileVersion() : -1;
        this.androidVersion = this.isAndroidDevice ? this.detectAndroidVersion() : -1;
        this.samsungInternetVersion = this.isSamsungInternet ? this.detectSamsungInternetVersion() : -1;
        this.firefoxMobileVersion = this.isFirefoxMobile ? this.detectFirefoxMobileVersion() : -1;
        this.UCBrowserVersion = this.isFirefoxMobile ? this.detectUCBrowserVersion() : -1;
        this.IEMobileVersion = this.isIEMobile ? this.detectIEMobileVersion() : -1;
        this.browserVersion = (() => {
            if (this.isIOSDevice)
                return this.iOSVersion;
            if (this.isInternetExplorer)
                return this.IEVersion;
            if (this.isChrome)
                return this.chromeVersion;
            if (this.isFirefox)
                return this.firefoxVersion;
            if (this.isSafari)
                return this.safariVersion;
            if (this.isEdge)
                return this.edgeVersion;
            if (this.isOpera)
                return this.operaVersion;
            if (this.isOperaMini)
                return this.operaMiniVersion;
            if (this.isOperaMobile)
                return this.operaMobileVersion;
            if (this.isAndroidDevice)
                return this.androidVersion;
            if (this.isSamsungInternet)
                return this.samsungInternetVersion;
            if (this.isFirefoxMobile)
                return this.firefoxMobileVersion;
            if (this.isUCBrowser)
                return this.UCBrowserVersion;
            if (this.isIEMobile)
                return this.IEMobileVersion;
            return -1;
        })();
        this.vendorPrefix = (() => {
            if (this.isWebkitBrowser)
                return "webkit";
            if (this.isFirefoxOrFirefoxMobile)
                return "moz";
            return "";
        })();
        this.vendorPrefixDashed = (() => {
            if (this.isWebkitBrowser)
                return "-webkit-";
            if (this.isFirefoxOrFirefoxMobile)
                return "-moz-";
            return "";
        })();
    }
    detectIOSVersion() {
        const version = this.agent.match(/cpu.*os {0,1}_{0,1}([0-9_]{1})|(cpu like).*applewebkit.*mobile/i);
        return version != null ? parseInt(version[1]) : -1;
    }
    detectIEMobileVersion() {
        const version = this.agent.match(/iemobile\/{0,1} {0,1}(\d{1})/i);
        return version != null ? parseInt(version[1]) : -1;
    }
    detectAndroidVersion() {
        const version = this.agent.match(/android (\d{1,3})/i);
        return version != null ? parseInt(version[1]) : -1;
    }
    detectSamsungInternetVersion() {
        const match1 = this.agent.match(/(?:samsung|smart-tv).*(?:samsungbrowser|web browser)\/(\d{1,2})/i);
        if (match1 != null)
            return parseInt(match1[1]);
        if (/armv7l/.test(this.agent) || /version\/\d{1,2}/.test(this.agent))
            return 1;
        return -1;
    }
    detectUCBrowserVersion() {
        const version = /ucbrowser|uc browser/i.test(this.agent) ? this.agent.match(/(?:ucbrowser|uc browser)\/{0,1}(\d{1,2})/i) : this.agent.match(/(?!ucweb)\/{0,1}(\d{1,2})/i);
        return version != null ? parseInt(version[1]) : -1;
    }
    detectFirefoxMobileVersion() {
        const version = this.agent.match(/firefox\/(\d{1,2})/i);
        return version != null ? parseInt(version[1]) : -1;
    }
    detectIEVersion() {
        if (!document.all)
            return 11;
        if (document.all && !document.compatMode)
            return 5;
        if (document.all && !GlobalObject.XMLHttpRequest)
            return 6;
        if (document.all && !document.querySelector)
            return 7;
        if (document.all && !document.addEventListener)
            return 8;
        if (document.all && !GlobalObject.atob)
            return 9;
        if (document.all)
            return 10;
        return -1;
    }
    detectChromeVersion() {
        let versionMatch = this.agent.match(/chrome\/(\d{1,2})/i);
        if (versionMatch != null)
            return parseInt(versionMatch[1]);
        // For very few of the early versions of Chrome, no version number was attached (instead it took the Safari build version).
        // Return 0 in that case.
        if (versionMatch == null)
            versionMatch = this.agent.match(/(chrome)\/\s{1}safari/i);
        return versionMatch != null ? 0 : -1;
    }
    detectSafariVersion() {
        const versionMatch = this.agent.match(/version\/(\d{1,2})/i);
        if (versionMatch != null)
            return parseInt(versionMatch[1]);
        // If no version were found, lets' see if we can figure it out from the build-number.
        const webkitBuildVersion = this.agent.match(/applewebkit\/(\d{1,4})/i);
        if (webkitBuildVersion != null) {
            const version = parseFloat(webkitBuildVersion[1]);
            const WEBKIT_BUILD_601 = 601;
            const WEBKIT_BUILD_538 = 538;
            const WEBKIT_BUILD_537 = 537;
            const WEBKIT_BUILD_536 = 536;
            const WEBKIT_BUILD_533 = 533;
            const WEBKIT_BUILD_526 = 526;
            const WEBKIT_BUILD_522 = 522;
            const WEBKIT_BUILD_412 = 412;
            const WEBKIT_BUILD_85 = 85;
            if (version >= WEBKIT_BUILD_601)
                return 9;
            if (version >= WEBKIT_BUILD_538)
                return 8;
            if (version >= WEBKIT_BUILD_537)
                return 7;
            if (version >= WEBKIT_BUILD_536)
                return 6;
            if (version >= WEBKIT_BUILD_533)
                return 5;
            if (version >= WEBKIT_BUILD_526)
                return 4;
            if (version >= WEBKIT_BUILD_522)
                return 3;
            if (version >= WEBKIT_BUILD_412)
                return 2;
            if (version >= WEBKIT_BUILD_85)
                return 1;
            return 0;
        }
        return -1;
    }
    detectFirefoxVersion() {
        const versionMatch = this.agent.match(/firefox\/(\d{1,})/i);
        return versionMatch ? parseInt(versionMatch[1]) : -1;
    }
    detectEdgeVersion() {
        const versionMatch = this.agent.match(/edge\/(\d{1,3})/i);
        return versionMatch ? parseInt(versionMatch[1]) : -1;
    }
    detectOperaVersion() {
        const versionMatch = this.agent.match(/[opera|opr]+\/(\d{1,3})/i);
        return versionMatch ? parseInt(versionMatch[1]) : -1;
    }
    detectOperaMiniVersion() {
        let versionMatch = this.agent.match(/opera mini\/(\d{1,3})/i);
        if (versionMatch != null)
            return parseInt(versionMatch[1]);
        // For strange reasons, some Opera Mini builds have no version.
        // Check if this string is such a build.
        versionMatch = this.agent.match(/opera mini\/([symbianos|nokia|mozilla|(windows]+)/i);
        return versionMatch ? 0 : -1;
    }
    detectOperaMobileVersion() {
        let versionMatch = this.agent.match(/version\/(\d{1,3})/i);
        if (versionMatch != null)
            return parseInt(versionMatch[1]);
        // Some user agents is a little different. Check for that too:
        versionMatch = this.agent.match(/opera (\d{1,3})/i);
        return versionMatch ? parseInt(versionMatch[1]) : -1;
    }
    isIOSAgent() {
        return /iphone|ipad|ipod/i.test(this.agent);
    }
    isChromeAgent() {
        return (this.agent.indexOf("chrome") !== -1 && this.agent.indexOf("edge") === -1 && this.agent.indexOf("chromeframe") === -1) && !this.isIOSAgent();
    }
    detectNativePlatform() {
        if (!this.isNative)
            return null;
        const platform = GlobalObject.device ? GlobalObject.device.platform : null;
        if (platform != null) {
            const uppercased = platform.toUpperCase();
            if (uppercased === NativePlatformKind[NativePlatformKind.ANDROID])
                return NativePlatformKind.ANDROID;
            if (uppercased === NativePlatformKind[NativePlatformKind.IOS])
                return NativePlatformKind.IOS;
        }
        return this.browser === BrowserKind.SAFARI ? NativePlatformKind.IOS : NativePlatformKind.ANDROID;
    }
    detectBrowser() {
        const agent = this.agent;
        if ((agent.includes("ucbrowser") || agent.includes("ucweb") || agent.includes("uc browser")) && !this.isChromeAgent() && !this.isIOSAgent()) {
            return BrowserKind.UC_BROWSER;
        }
        else if (agent.includes("opera mini/")) {
            return BrowserKind.OPERA_MINI;
        }
        else if (agent.indexOf("opera mobi/") !== -1 && !this.isIOSAgent() && !this.isChromeAgent()) {
            return BrowserKind.OPERA_MOBILE;
        }
        else if ((agent.includes("opera") || agent.includes("opr/") || agent.includes("oupeng/")) && !this.isIOSAgent() && !this.isChromeAgent()) {
            return BrowserKind.OPERA;
        }
        else if (agent.includes("blackberry") && !this.isIOSAgent()) {
            return BrowserKind.BLACKBERRY;
        }
        else if (agent.includes("iemobile")) {
            return BrowserKind.IE_MOBILE;
        }
        else if (this.isChromeAgent()) {
            return BrowserKind.CHROME;
        }
        else if (agent.includes("samsung") || agent.includes("smart-tv")) {
            return BrowserKind.SAMSUNG_INTERNET;
        }
        else if (agent.includes("firefox") && /mobile|tablet|tv/.test(agent) && !this.isIOSAgent()) {
            return BrowserKind.FIREFOX_MOBILE;
        }
        else if (agent.includes("firefox")) {
            return BrowserKind.FIREFOX;
        }
        else if (agent.includes("android")) {
            return BrowserKind.ANDROID_STOCK;
        }
        else if ((agent.includes("safari") && !agent.includes("edge")) || agent.includes("iphone") || agent.includes("ipod") || agent.includes("ipad")) {
            return BrowserKind.SAFARI;
        }
        else if ((agent.includes("msie")) || (!!document.documentMode === true) || (!(GlobalObject.ActiveXObject) && "ActiveXObject" in GlobalObject) || agent.includes("rv:11.0")) {
            return BrowserKind.IE;
        }
        else if (agent.includes("edge")) {
            return BrowserKind.EDGE;
        }
        else {
            return BrowserKind.UNKNOWN;
        }
    }
}

class GlobalEventBlocker {
    block(eventName) {
        window.addEventListener(eventName, e => {
            e.preventDefault();
            e.stopPropagation();
        });
    }
}

const globalEventBlocker = new GlobalEventBlocker();
const agentDetector = new AgentDetector();
const eventUtil = new EventUtil();
const svgIconUtil = new SvgIconUtil();
const waitOperations = new WaitOperations();
const animationOperations = new AnimationOperations();

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */







function __decorate (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function selector(selector) {
    return (prototype) => {
        customElements.define(selector, prototype);
        const styles = prototype.styles();
        const markup = prototype.markup();
        if (styles == null && markup == null)
            return;
        const actualStyles = styles == null ? "" : `
		<link rel="stylesheet" href="${WP.templateUrl}/shared.css?ver=${WP.version}" />
		<style>${styles}</style>`;
        const actualMarkup = markup == null ? "" : markup;
        const template = document.createElement("template");
        template.innerHTML = `
		${actualStyles}
		${actualMarkup}
	`;
        prototype.template = template;
    };
}
let Component = class Component extends HTMLElement {
    constructor() {
        super();
        this.role = "presentation";
        this.tabindex = "-1";
        this.cachedElementLookups = new Map();
        this.injectTemplate();
    }
    get domRoot() {
        return this.shadowRoot == null ? this : this.shadowRoot;
    }
    static styles() {
        return null;
    }
    static markup() {
        return null;
    }
    injectTemplate() {
        const ctor = this.constructor;
        if (ctor.template == null)
            return;
        const root = this.attachShadow({ mode: "open" });
        const temp = document.importNode(ctor.template.content, true);
        root.appendChild(temp);
    }
    element(selector) {
        const cached = this.getCachedElement(selector);
        if (cached != null)
            return cached;
        const firstPass = (this.shadowRoot == null ? this.querySelector(`#${selector}`) : this.shadowRoot.querySelector(`#${selector}`));
        if (firstPass != null)
            return this.setCachedElement(selector, firstPass);
        return this.setCachedElement(selector, (this.shadowRoot == null ? document.querySelector(selector) : this.shadowRoot.querySelector(selector)));
    }
    connectedCallback() {
        this.setAttribute("role", this.role);
        this.setAttribute("tabindex", this.tabindex);
    }
    disconnectedCallback() {
    }
    getCachedElement(selector) {
        return this.cachedElementLookups.get(selector);
    }
    setCachedElement(selector, element) {
        this.cachedElementLookups.set(selector, element);
        return element;
    }
};
Component.template = null;
Component = __decorate([
    selector("component-element")
], Component);

let IconComponent = class IconComponent extends Component {
    static get observedAttributes() {
        return ["icon"];
    }
    static styles() {
        return `
			:host-context([center]),
			:host([center]) {
				margin: 0 auto;
			}
			
			#fill_target,
			:host {
				fill: var(--color-icon-dark);
			}
			
			:host([light]) #fill_target,
			:host([light]) {
				fill: var(--color-icon-light);
			}
			
			:host([dark]) #fill_target,
			:host([dark]) {
				fill: var(--color-icon-dark);
			}
			
			:host([primary]) #fill_target,
			:host([primary]) {
				fill: var(--color-primary-100);
			}
			
			:host([accent]) #fill_target,
			:host([accent]) {
				fill: var(--color-accent-100);
			}
			
			:host([warning]) #fill_target,
			:host([warning]) {
				fill: var(--color-red-100);
			}
			
			:host {
				user-select: none;
				backface-visibility: hidden;
				transform: translate3d(0,0,0);
				position: relative;
				vertical-align: middle;
				width: var(--width-icon-small);
				height: var(--height-icon-small);
				pointer-events: none;
				contain: size layout style;
				overflow: hidden;
				flex-shrink: 0;
				display: inline-flex;
				justify-content: center;
				align-items: center;
			}
			
			:host([small]) {
				width: var(--width-icon-small);
				height: var(--height-icon-small);
			}
			
			:host([medium]) {
				width: var(--width-icon-medium);
				height: var(--height-icon-medium);
			}
			
			:host([large]) {
				width: var(--width-icon-large);
				height: var(--height-icon-large);
			}
			
			:host([larger]) {
				width: var(--width-icon-larger);
				height: var(--height-icon-larger);
			}
			
			:host([huge]) {
				width: var(--width-icon-huge);
				height: var(--height-icon-huge);
			}
			
			:host([extreme]) {
				width: var(--width-icon-extreme);
				height: var(--height-icon-extreme);
			}
		`;
    }
    attributeChangedCallback(attrName, _, newVal) {
        switch (attrName) {
            case "icon":
                if (newVal != null) {
                    const svg = svgIconUtil.buildIconFromName(newVal);
                    if (svg == null)
                        throw ReferenceError(`Failed to build an SVG for icon: ${newVal}`);
                    this.svg = svg;
                    this.setSvg(svg);
                }
                else {
                    this.svg = null;
                    this.clearSvg();
                }
                break;
        }
    }
    setSvg(svg) {
        if (this.shadowRoot != null)
            this.shadowRoot.appendChild(svg);
        else
            this.appendChild(svg);
    }
    clearSvg() {
        const elem = this.shadowRoot != null ? this.shadowRoot : this;
        const svg = elem.querySelector("svg");
        if (svg == null)
            return;
        elem.removeChild(svg);
    }
};
IconComponent = __decorate([
    selector("icon-element")
], IconComponent);

let AppBarComponent = class AppBarComponent extends Component {
    constructor() {
        super(...arguments);
        this.role = "navigation";
    }
    static styles() {
        return `
			
			:host([primary]) {
				background: var(--color-primary-100);
			}
			
			:host([accent]) {
				background: var(--color-accent-100);
			}
			
			:host([dark]) {
				background: var(--color-black-70);
			}
			
			:host([light]) {
				background: var(--color-white-87);
			}

			:host {
				box-sizing: border-box;
				position: fixed;
				top: 0;
				left: 0;
				right: 0;
				width: 100%;
				height: var(--app-bar-portrait-height-desktop);
				box-shadow: var(--shadow-level1);
				z-index: 998;
			}
	
			#titleSlot::slotted(*),
			#leftIconSlot::slotted(*) {
				position: absolute;
				top: 0 !important;
				bottom: 0 !important;
				margin-top: auto !important;
				margin-bottom: auto !important;
			}
			
			#titleSlot::slotted(*) {
				user-select: none !important;
				left: calc(var(--distance-minimum) + var(--width-icon-medium) + var(--distance-minimum)) !important;
				height: var(--font-size-title) !important;
				line-height: 17px !important;
				vertical-align: middle !important;
				padding: 0 !important;
			}
	
			#leftIconSlot::slotted(*) {
				left: var(--distance-minimum) !important;
				border-radius: 50% !important;
			}
		`;
    }
    static markup() {
        return `
			<slot id="leftIconSlot" name="leftIcon"></slot>
			<slot id="titleSlot" name="title"></slot>
		`;
    }
};
AppBarComponent = __decorate([
    selector("app-bar-element")
], AppBarComponent);

let FoveaAppBarComponent = class FoveaAppBarComponent extends Component {
    constructor() {
        super(...arguments);
        this.role = "navigation";
    }
    static styles() {
        return `
			#title {
				color: var(--color-primary-text-light);
			}
		`;
    }
    static markup() {
        return `
			<app-bar-element primary>
				<icon-element icon="fovea-logo" slot="leftIcon" light medium></icon-element>
				<h6 id="title" slot="title">Fovea</h6>
			</app-bar-element>
		`;
    }
};
FoveaAppBarComponent = __decorate([
    selector("fovea-app-bar-element")
], FoveaAppBarComponent);

let CardComponent = class CardComponent extends Component {
    constructor() {
        super(...arguments);
        this.role = "complementary";
    }
    static styles() {
        return `

		:host([center]) {
			align-content: center;
			justify-content: center;
			text-align: center;
		}
		
		:host([center]) ::slotted(*) {
			text-align: center;
		}
		
		:host([center]) ::slotted(p),
		:host([center]) ::slotted(strong),
		:host([center]) ::slotted(span),
		::slotted(*) {
			text-align: justify;
		}
		
		::slotted(button-element) {
			align-self: flex-end;
			justify-self: flex-end;
		}
		
		:host {
			max-width: 369px;
			min-width: 200px;
			margin: 0;
			padding: var(--distance-regular);
			width: auto;
			position: relative;
			display: flex;
			flex-direction: column;
			background: var(--color-white-100);
			box-shadow: var(--shadow-level4);
			contain: content;
			border-radius: var(--box-radius);
		}
		
		:host([shadow="1"]) {
			box-shadow: var(--shadow-level1);
		}
		
		:host([shadow="2"]) {
			box-shadow: var(--shadow-level2);
		}
		
		:host([shadow="3"]) {
			box-shadow: var(--shadow-level3);
		}
		
		:host([shadow="4"]) {
			box-shadow: var(--shadow-level4);
		}
		
		:host([shadow="5"]) {
			box-shadow: var(--shadow-level5);
		}
		
		:host([shadow="6"]) {
			box-shadow: var(--shadow-level6);
		}
		
		:host([shadow="7"]) {
			box-shadow: var(--shadow-level7);
		}
		
	`;
    }
    static markup() {
        return `
			<slot></slot>
		`;
    }
};
CardComponent = __decorate([
    selector("card-element")
], CardComponent);

let HighlightsComponent = class HighlightsComponent extends Component {
    constructor() {
        super(...arguments);
        this.role = "complementary";
    }
    static markup() {
        return `
			<card-element center>
						<h4>Tiny</h4>
						<p>The days of huge monolithic Javascript bundles are over. Our users deserve better. Fovea compiles your view components into DOM-instructions ahead-of-time and then gets out of the way. Completely.</p>
						<div class="flex"></div>
						<icon-element icon="fovea-tiny" larger primary></icon-element>
				</card-element>
		
				<card-element center>
						<h4>Super fast</h4>
						<p>No dirty checking. No DOM traversal or parsing. Instead, Fovea maps your bindings directly to nodes and does all the heavy lifting on compile time. When something changes, Fovea simply looks up the bound node and updates the value immediately.</p>
						<div class="flex"></div>
						<icon-element icon="fovea-fast" larger primary></icon-element>
				</card-element>
		
				<card-element center>
						<h4>Intuitive</h4>
						<p>Fovea is built on modern standards such as Custom Elements and declarative data binding through string interpolation. It believes that the DOM is fast as it is with no need to ship an entire virtual DOM implementation on runtime.</p>
						<div class="flex"></div>
						<icon-element icon="fovea-intuitive" larger primary></icon-element>
				</card-element>
		`;
    }
    static styles() {
        return `

			:host {
				width: 100%;
				justify-content: center;
				align-content: center;
				position: relative;
				display: inline-flex;
				flex-direction: column;
				margin: 0;
			}
			
			card-element > p,
			card-element > h4 {
				user-select: text;
			}
			
			card-element {
				margin: var(--distance-minimum) auto;
			}
			
			.flex {
				flex-grow: 1;
			}
			
			@media screen and (min-width: 700px) {
				:host {
					flex-direction: row;
				}
				
				card-element {
					margin: var(--distance-minimum);
				}
			
				card-element:first-of-type {
					margin-left: var(--distance-minimum);
					margin-right: calc(var(--distance-minimum) / 2);
				}
			
				card-element:last-of-type {
					margin-right: var(--distance-minimum);
					margin-left: calc(var(--distance-minimum) / 2);
				}
			
				card-element > icon-element {
					margin-top: var(--distance-regular);
				}
			}
		`;
    }
};
HighlightsComponent = __decorate([
    selector("highlights-element")
], HighlightsComponent);

let ScrollComponent = ScrollComponent_1 = class ScrollComponent extends Component {
    constructor() {
        super();
        this.role = "list";
        if (agentDetector.isIOSDevice && !ScrollComponent_1.BOUND_BODY_LISTENER) {
            ScrollComponent_1.BOUND_BODY_LISTENER = true;
            eventUtil.listen(this, "touchmove", document.body, ScrollComponent_1.onBodyTouchMove, false);
        }
    }
    static markup() {
        return `<slot></slot>`;
    }
    static styles() {
        return `

			:host {
				transform: translate3d(0,0,0);
				backface-visibility: hidden;
				box-sizing: border-box;
				contain: content;
				position: relative;
				display: block;
				width: 100%;
			}

			:host,
			:host([direction="y"]),
			:host([direction="Y"]) {
				overflow-y: scroll;
				overflow-x: hidden;
			}
			
			:host([direction="x"]),
			:host([direction="X"]) {
				overflow-y: hidden;
				overflow-x: scroll;
			}
			
			:host([direction="x"]),
			:host([direction="X"]) {
				overflow-y: hidden;
				overflow-x: scroll;
			}
			
			:host([direction="both"]),
			:host([direction="both"]) {
				overflow-y: scroll;
				overflow-x: scroll;
				overflow: scroll;
			}
		`;
    }
    static onBodyTouchMove(e) {
        if (e.cancelable && !e._isScroller) {
            return e.preventDefault();
        }
    }
    async connectedCallback() {
        super.connectedCallback();
        this.listenForScrollTarget(this);
        await this.connectScroller();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.unlistenForScrollTarget(this);
    }
    async connectScroller() {
        if (agentDetector.isIOSDevice) {
            await waitOperations.wait(1000);
            this.style.webkitOverflowScrolling = "touch";
        }
    }
    listenForScrollTarget(target) {
        if (agentDetector.isIOSDevice) {
            eventUtil.listen(this, "touchstart", target, this.onScrollTargetTouchstart);
            eventUtil.listen(this, "touchmove", target, this.onScrollTargetTouchmove);
        }
    }
    unlistenForScrollTarget(target) {
        if (agentDetector.isIOSDevice) {
            eventUtil.unlisten(this, "touchstart", target, this.onScrollTargetTouchstart);
            eventUtil.unlisten(this, "touchmove", target, this.onScrollTargetTouchmove);
        }
    }
    canScroll(target) {
        if (!(target instanceof HTMLElement))
            return false;
        if (target.scrollHeight === target.offsetHeight)
            throw new TypeError(`scrollTarget is either not visible or hasn't got a fixed height and display style property. Couldn't decide scrollability`);
        return target.scrollHeight > target.offsetHeight;
    }
    fixScrollBounds(target) {
        if (!(target instanceof HTMLElement))
            return;
        const { scrollTop } = target;
        if (scrollTop === 0)
            target.scrollTop = 1;
        else if (scrollTop + target.offsetHeight === target.scrollHeight) {
            target.scrollTop = scrollTop - 1;
        }
    }
    onScrollTargetTouchstart(e) {
        this.fixScrollBounds(e.currentTarget);
    }
    onScrollTargetTouchmove(e) {
        if (this.canScroll(e.currentTarget))
            e._isScroller = true;
    }
};
ScrollComponent.BOUND_BODY_LISTENER = false;
ScrollComponent = ScrollComponent_1 = __decorate([
    selector("scroll-element")
], ScrollComponent);
var ScrollComponent_1;

let CodeComponent = class CodeComponent extends Component {
    constructor() {
        super(...arguments);
        this.role = "figure";
    }
    static styles() {
        return `
			:host-context([center]),
			:host([center]) {
				margin-left: auto;
				margin-right: auto;
				text-align: center;
			}

			:host {
				background: var(--color-dark-hex);
				border-radius: var(--box-radius);
				margin: 0;
				padding: var(--distance-minimum);
				width: auto;
				position: relative;
				display: flex;
				contain: content;
				flex-direction: column;
				text-align: left;
			}
			
			scroll-element {
				max-height: inherit;
			}
			
			:host,
			scroll-element,
			::slotted(*) {
				user-select: text !important;
				cursor: text !important;
			}
			
			::slotted(*) {
				font-family: var(--font-family-monospace) !important;
				color: var(--color-white-87);
				font-size: var(--font-size-mono);
				line-height: var(--font-size-mono);
				display: inline;
			}
			
			::slotted(.keyword) {
				color: var(--color-syntax-keyword);
			}
			
			::slotted(.identifier) {
				color: var(--color-syntax-identifier);
			}
			
			::slotted(.bracket) {
				color: var(--color-syntax-bracket);
			}
			
			::slotted(.decorator) {
				color: var(--color-syntax-decorator);
			}
			
			::slotted(.property) {
				color: var(--color-syntax-property);
			}
			
			::slotted(.token) {
				color: var(--color-syntax-token);
			}
			
			::slotted(.type) {
				color: var(--color-syntax-type);
			}
			
			::slotted(.method) {
				color: var(--color-syntax-method);
			}
			
			::slotted(.function) {
				color: var(--color-syntax-function);
			}
			
			::slotted(.tagname) {
				color: var(--color-syntax-tagname);
			}
			
			::slotted(.string) {
				color: var(--color-syntax-string);
			}
			
			::slotted(.attribute_name) {
				color: var(--color-syntax-attribute-name);
			}
			
			::slotted(.attribute_value) {
				color: var(--color-syntax-attribute-value);
			}
			
			::slotted(.css_selector_name) {
				color: var(--color-syntax-css-selector-name);
			}
			
			::slotted(.css_property_name) {
				color: var(--color-syntax-css-property-name);
			}
			
			::slotted(.variable) {
				color: var(--color-syntax-variable);
			}
			
			::slotted(.number) {
				color: var(--color-syntax-number);
			}
			
			::slotted(.comment) {
				color: var(--color-syntax-comment);
			}
		`;
    }
    static markup() {
        return `
			<scroll-element direction="both">
				<slot></slot>
			</scroll-element>
		`;
    }
};
CodeComponent = __decorate([
    selector("code-element")
], CodeComponent);

let MaterialTrianglesComponent = class MaterialTrianglesComponent extends Component {
    static styles() {
        return `
			:host {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				contain: strict;
				backface-visibility: hidden;
				transform: translate3d(0,0,0);
				overflow: hidden;
			}
			
			:host([dark]) icon-element,
			icon-element {
				fill: var(--color-black-02);
			}
			
			:host([primary]) icon-element {
				fill: var(--color-primary-06);
			}
			
			:host([accent]) icon-element {
				fill: var(--color-accent-06);
			}
			
			:host([light]) icon-element {
				fill: var(--color-white-12);
			}
			
			:host([warning]) icon-element {
				fill: var(--color-red-12);
			}
			
			
			icon-element {
				width: 200vw;
				height: 200vw;
				position: absolute;
				z-index: 0;
				contain: strict;
				backface-visibility: hidden;
				overflow: hidden;
			}
			
			#triangle1 {
				top: -20vw;
				left: -80vw;
				transform: rotate(-24deg) translateZ(0);
			}
			
			#triangle2 {
				top: -50vw;
				left: -40vw;
				transform: rotate(23deg) translateZ(0);
			}
		`;
    }
    static markup() {
        return `
			<icon-element id="triangle1" icon="material-triangle"></icon-element>
			<icon-element id="triangle2" icon="material-triangle"></icon-element>
		`;
    }
};
MaterialTrianglesComponent = __decorate([
    selector("material-triangles-element")
], MaterialTrianglesComponent);

let HeroComponent = class HeroComponent extends Component {
    constructor() {
        super(...arguments);
        this.role = "banner";
    }
    static styles() {
        return `
			:host {
				width: 100%;
				display: flex;
				align-content: center;
				padding-top: var(--app-bar-landscape-height-mobile);
				flex-direction: column;
				position: relative;
				background: var(--color-accent-100);
				contain: content;
				backface-visibility: hidden;
				transform: translate3d(0,0,0);
				overflow: hidden;
				padding-bottom: 60px;
			}
			
			::slotted(*) {
				text-align: center;
				z-index: 1;
				margin: 0 auto;
			}
		`;
    }
    static markup() {
        return `
			<slot></slot>
			<material-triangles-element></material-triangles-element>
		`;
    }
};
HeroComponent = __decorate([
    selector("hero-element")
], HeroComponent);

let FeedbackComposite = class FeedbackComposite extends Component {
    constructor() {
        super(...arguments);
        this.pointerDown = false;
        this.complexAnimating = false;
        this.oneShotAnimating = false;
        this.initialWaitTime = 0.2;
        this.oneShotAnimationDuration = 0.5;
        this.lastCoordinates = null;
    }
    static get observedAttributes() {
        return ["pointer-down"];
    }
    listenForTarget(target) {
        eventUtil.listen(this, "click", target, this.onPointerTap);
        eventUtil.listen(this, "pointerdown", target, this.onPointerDown);
        eventUtil.listen(this, "pointerup", target, this.onPointerUp);
        eventUtil.listen(this, "pointercancel", target, this.onPointerCancel);
        eventUtil.listen(this, "pointerleave", target, this.onPointerLeave);
    }
    unlistenFromTarget(target) {
        eventUtil.unlisten(this, "click", target, this.onPointerTap);
        eventUtil.unlisten(this, "pointerdown", target, this.onPointerDown);
        eventUtil.unlisten(this, "pointerup", target, this.onPointerUp);
        eventUtil.unlisten(this, "pointercancel", target, this.onPointerCancel);
        eventUtil.unlisten(this, "pointerleave", target, this.onPointerLeave);
    }
    async onPointerDown({ offsetX, offsetY, width, height }) {
        if (width === -1 && height === -1)
            this.lastCoordinates = null;
        else
            this.lastCoordinates = { offsetX, offsetY };
        if (!this.pointerDown) {
            this.pointerDown = true;
            this.setAttribute("pointer-down", "");
        }
    }
    async onPointerUp() {
        if (this.pointerDown) {
            this.pointerDown = false;
            if (this.hasAttribute("pointer-down"))
                this.removeAttribute("pointer-down");
        }
    }
    async onPointerCancel() {
        await this.onPointerUp();
    }
    async onPointerLeave() {
        await this.onPointerUp();
    }
    async onPointerTap() {
        if (this.complexAnimating)
            return;
        if (!this.oneShotAnimating) {
            this.oneShotAnimating = true;
            this.setAttribute("one-shot-animating", "");
        }
        else
            await this.attributeChangedCallback("one-shot-animating", "true", "true");
    }
    connectedCallback() {
        super.connectedCallback();
        const parent = this.getRootNode().host;
        if (this.target == null && parent != null) {
            this.target = parent;
            this.listenForTarget(this.target);
        }
    }
    async attributeChangedCallback(attrName, _, _1) {
        switch (attrName) {
            case "pointer-down":
                return await this.onPointerDownChanged(this.pointerDown);
        }
    }
    async onPointerDownChanged(pointerDown) {
        if (pointerDown) {
            await waitOperations.wait(this.initialWaitTime * 1000);
            if (this.pointerDown && !this.oneShotAnimating) {
                this.complexAnimating = true;
                this.setAttribute("complex-animating", "");
            }
        }
    }
};
FeedbackComposite = __decorate([
    selector("feedback-composite")
], FeedbackComposite);

let RippleComposite = RippleComposite_1 = class RippleComposite extends FeedbackComposite {
    constructor() {
        super(...arguments);
        this.rippleEasing = "linear";
        this.highlightAmount = RippleComposite_1.HIGHLIGHT_AMOUNT;
        this.rippleHighlightAmount = RippleComposite_1.RIPPLE_HIGHLIGHT_AMOUNT;
        this.highlightDuration = 0.7;
        this.rippleDuration = 5;
    }
    static get observedAttributes() {
        return ["light", "one-shot-animating", "complex-animating", "pointer-down"];
    }
    static markup() {
        return `<aside id="highlight"></aside>`;
    }
    static styles() {
        return `

			#highlight {
				visibility: hidden;
				background-color: currentcolor;
				opacity: 0;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
			}

			:host([one-shot-animating]) #highlight,
			:host([complex-animating]) #highlight {
				visibility: visible;
			}

			:host > div, #highlight {
				user-select: none;
				position: absolute;
				pointer-events: none;
				contain: strict;
			}

			:host > div {
				position: absolute;
				display: block;
				border-radius: 50%;
				background-color: currentcolor;
				transform: scale(0) translateZ(0);
				width: 0;
  			height: 0;
				opacity: 0;
			}
		`;
    }
    async animateOneShot(ripple) {
        if (ripple == null)
            ripple = await this.createAndAddRipple();
        if (ripple == null)
            return;
        await Promise.all([
            animationOperations.animate(ripple, {
                opacity: [this.rippleHighlightAmount, 0],
                transform: ["scale(0) translateZ(0)", "scale(1) translateZ(0)"]
            }, { duration: this.oneShotAnimationDuration * 1000, easing: this.rippleEasing }),
            this.element("highlight") == null ? Promise.resolve() :
                animationOperations.animate(this.element("highlight"), { opacity: [0, this.highlightAmount, 0] }, {
                    duration: this.oneShotAnimationDuration * 1000,
                    easing: this.rippleEasing
                })
        ]);
        this.clearRipple(ripple);
    }
    async attributeChangedCallback(attrName, _, newVal) {
        await super.attributeChangedCallback(attrName, _, newVal);
        switch (attrName) {
            case "light":
                if (newVal) {
                    this.rippleHighlightAmount = RippleComposite_1.RIPPLE_LIGHT_HIGHLIGHT_AMOUNT;
                    this.highlightAmount = RippleComposite_1.HIGHLIGHT_LIGHT_AMOUNT;
                }
                break;
            case "one-shot-animating":
                if (this.oneShotAnimating) {
                    await Promise.all([this.animateOneShot(), this.whenAllRipplesHasFinishedAnimating()]);
                    this.oneShotAnimating = false;
                    if (this.hasAttribute("one-shot-animating"))
                        this.removeAttribute("one-shot-animating");
                }
                break;
            case "complex-animating":
                if (this.complexAnimating) {
                    await this.animateIn();
                }
                break;
            case "pointer-down":
                if (this.complexAnimating && !this.pointerDown && !this.oneShotAnimating) {
                    await this.animateOut();
                    this.complexAnimating = false;
                    if (this.hasAttribute("complex-animating"))
                        this.removeAttribute("complex-animating");
                }
                break;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.target != null) {
            this.prepareTarget(this.target);
        }
    }
    getTargetDimensions() {
        if (this.target == null)
            return;
        return this.target.getBoundingClientRect();
    }
    computeRippleDimensions() {
        // Get the width and height of the surrounding container.
        // The ripple will always have equal width and height.
        const dimensions = this.getTargetDimensions();
        if (dimensions == null)
            return;
        const { width, height } = dimensions;
        // The size should be equal to the greater of the two axis.
        // Add half of the size to it to make sure that the circle fills the entire square.
        let size = Math.max(width, height) + (Math.max(width, height) / 2);
        // Add in whatever pixels are floating beyond the visible square in relation to the offset position of the pointer event.
        if (this.lastCoordinates != null && !this.hasAttribute("center")) {
            const xDiff = Math.abs((width / 2) - this.lastCoordinates.offsetX);
            const yDiff = Math.abs((height / 2) - this.lastCoordinates.offsetY);
            size += xDiff + yDiff + RippleComposite_1.RIPPLE_ADDITIONAL_SIZE;
        }
        return { width, height, size };
    }
    getRippleStyles() {
        const dimensions = this.computeRippleDimensions();
        if (dimensions == null)
            return;
        const { width, height, size } = dimensions;
        const top = this.hasAttribute("center") || this.lastCoordinates == null
            ? (height / 2) - (size / 2)
            : this.lastCoordinates.offsetY - (size / 2);
        const left = this.hasAttribute("center") || this.lastCoordinates == null
            ? (width / 2) - (size / 2)
            : this.lastCoordinates.offsetX - (size / 2);
        return [
            { prop: "top", value: `${top}px` },
            { prop: "left", value: `${left}px` },
            { prop: "width", value: `${size}px` },
            { prop: "height", value: `${size}px` }
        ];
    }
    createRipple() {
        const styles = this.getRippleStyles();
        if (styles == null)
            throw new ReferenceError(`RippleComposite could not get styles for undefined target!`);
        const div = document.createElement("div");
        styles.forEach(style => div.style[style.prop] = style.value);
        return div;
    }
    async whenAllRipplesHasFinishedAnimating() {
        if (this.lastRipple == null)
            return;
        else
            await waitOperations.wait(100);
        return await this.whenAllRipplesHasFinishedAnimating();
    }
    clearRipple(ripple) {
        if (this.shadowRoot == null)
            return;
        if (!this.shadowRoot.contains(ripple))
            return;
        this.shadowRoot.removeChild(ripple);
        if (this.lastRipple === ripple)
            this.lastRipple = null;
    }
    async createAndAddRipple() {
        const ripple = this.createRipple();
        if (ripple == null)
            return null;
        this.shadowRoot == null ? this.appendChild(ripple) : this.shadowRoot.appendChild(ripple);
        this.lastRipple = ripple;
        await waitOperations.wait(RippleComposite_1.ANIMATION_FRAME_DELAY);
        return ripple;
    }
    async animateHighlightIn() {
        await animationOperations.animate(this.element("highlight"), { opacity: [0, this.highlightAmount] }, {
            duration: this.highlightDuration * 1000,
            easing: this.rippleEasing,
            fill: "forwards"
        });
    }
    async animateHighlightOut() {
        let opacity = window.getComputedStyle(this.element("highlight")).opacity;
        if (opacity == null)
            opacity = this.highlightAmount;
        await animationOperations.animate(this.element("highlight"), { opacity: [opacity, 0] }, {
            duration: this.oneShotAnimationDuration * 1000,
            easing: this.rippleEasing,
            fill: "forwards"
        });
    }
    async animateIn() {
        await this.animateHighlightIn();
        if (!this.pointerDown)
            return;
        const ripple = await this.createAndAddRipple();
        if (ripple == null)
            return;
        await animationOperations.animate(ripple, {
            opacity: [this.rippleHighlightAmount, 0],
            transform: ["scale(0) translateZ(0)", "scale(1) translateZ(0)"]
        }, { duration: this.rippleDuration * 1000, easing: this.rippleEasing });
    }
    async animateOut() {
        // If there is no ripple to animate, just animate the highlight.
        if (this.lastRipple == null)
            return await this.animateHighlightOut();
        const style = window.getComputedStyle(this.lastRipple);
        const opacity = style.opacity == null ? this.rippleHighlightAmount : style.opacity;
        const transform = style.transform == null ? "scale(0) translateZ(0)" : style.transform;
        await Promise.all([
            animationOperations.animate(this.lastRipple, {
                opacity: [opacity, 0],
                transform: [transform, "scale(1) translateZ(0)"]
            }, { duration: this.oneShotAnimationDuration * 1000, easing: this.rippleEasing }),
            this.animateHighlightOut()
        ]);
        this.clearRipple(this.lastRipple);
    }
    prepareTarget(target) {
        target.style.overflow = target.style.overflow || "hidden";
    }
};
RippleComposite.RIPPLE_ADDITIONAL_SIZE = 50;
RippleComposite.ANIMATION_FRAME_DELAY = 20;
RippleComposite.RIPPLE_HIGHLIGHT_AMOUNT = 0.30;
RippleComposite.HIGHLIGHT_AMOUNT = 0.2;
RippleComposite.RIPPLE_LIGHT_HIGHLIGHT_AMOUNT = 0.18;
RippleComposite.HIGHLIGHT_LIGHT_AMOUNT = 0.08;
RippleComposite = RippleComposite_1 = __decorate([
    selector("ripple-composite")
], RippleComposite);
var RippleComposite_1;

var KeyboardButtonKind;
(function (KeyboardButtonKind) {
    KeyboardButtonKind[KeyboardButtonKind["SPACEBAR"] = 32] = "SPACEBAR";
    KeyboardButtonKind[KeyboardButtonKind["HTML_SPACE"] = 160] = "HTML_SPACE";
    KeyboardButtonKind[KeyboardButtonKind["ENTER"] = 13] = "ENTER";
    KeyboardButtonKind[KeyboardButtonKind["BACKSPACE"] = 8] = "BACKSPACE";
    KeyboardButtonKind[KeyboardButtonKind["TAB"] = 9] = "TAB";
    KeyboardButtonKind[KeyboardButtonKind["LEFT_COMMAND_OR_WINDOWS_KEY"] = 91] = "LEFT_COMMAND_OR_WINDOWS_KEY";
    KeyboardButtonKind[KeyboardButtonKind["RIGHT_COMMAND_OR_WINDOWS_MENU"] = 93] = "RIGHT_COMMAND_OR_WINDOWS_MENU";
    KeyboardButtonKind[KeyboardButtonKind["ALT"] = 18] = "ALT";
    KeyboardButtonKind[KeyboardButtonKind["CONTROL"] = 17] = "CONTROL";
    KeyboardButtonKind[KeyboardButtonKind["SHIFT"] = 16] = "SHIFT";
    KeyboardButtonKind[KeyboardButtonKind["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    KeyboardButtonKind[KeyboardButtonKind["UP_ARROW"] = 38] = "UP_ARROW";
    KeyboardButtonKind[KeyboardButtonKind["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KeyboardButtonKind[KeyboardButtonKind["DOWN_ARROW"] = 40] = "DOWN_ARROW";
    KeyboardButtonKind[KeyboardButtonKind["ESCAPE"] = 27] = "ESCAPE";
    KeyboardButtonKind[KeyboardButtonKind["ZERO"] = 48] = "ZERO";
    KeyboardButtonKind[KeyboardButtonKind["ONE"] = 49] = "ONE";
    KeyboardButtonKind[KeyboardButtonKind["TWO"] = 50] = "TWO";
    KeyboardButtonKind[KeyboardButtonKind["THREE"] = 51] = "THREE";
    KeyboardButtonKind[KeyboardButtonKind["FOUR"] = 52] = "FOUR";
    KeyboardButtonKind[KeyboardButtonKind["FIVE"] = 53] = "FIVE";
    KeyboardButtonKind[KeyboardButtonKind["SIX"] = 54] = "SIX";
    KeyboardButtonKind[KeyboardButtonKind["SEVEN"] = 55] = "SEVEN";
    KeyboardButtonKind[KeyboardButtonKind["EIGHT"] = 56] = "EIGHT";
    KeyboardButtonKind[KeyboardButtonKind["NINE"] = 57] = "NINE";
})(KeyboardButtonKind || (KeyboardButtonKind = {}));

let FocusableComposite = FocusableComposite_1 = class FocusableComposite extends Component {
    constructor() {
        super(...arguments);
        this.pointerInitiated = false;
    }
    styles() {
        return `
			:host {
				display: none;
			}
		`;
    }
    listenForTarget(target) {
        eventUtil.listen(this, "pointerdown", target, this.onTargetPointerDown);
        eventUtil.listen(this, "keydown", target, this.onTargetKeyDown, false);
        eventUtil.listen(this, "focus", target, this.onTargetGotFocus);
        eventUtil.listen(this, "blur", target, this.onTargetLostFocus);
    }
    unlistenFromTarget(target) {
        eventUtil.unlisten(this, "pointerdown", target, this.onTargetPointerDown);
        eventUtil.unlisten(this, "keydown", target, this.onTargetKeyDown);
        eventUtil.unlisten(this, "focus", target, this.onTargetGotFocus);
        eventUtil.unlisten(this, "blur", target, this.onTargetLostFocus);
    }
    connectedCallback() {
        super.connectedCallback();
        const parent = this.getRootNode().host;
        // Force the parent node as target if it hasn't been set yet.
        if (this.target == null && parent != null) {
            this.target = parent;
            if (this.actionTarget == null)
                this.actionTarget = this.target;
            this.listenForTarget(this.target);
        }
    }
    onTargetKeyDown(e) {
        switch (e.keyCode) {
            case KeyboardButtonKind.SPACEBAR:
                e.preventDefault();
                this.fireClickEventOnActionTarget();
        }
    }
    async onTargetPointerDown(e) {
        if (e === this.lastFiredPointerDownEvent)
            return;
        this.pointerInitiated = true;
        if (this.timeout != null) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.timeout = setTimeout(() => {
            this.pointerInitiated = false;
            this.timeout = null;
        }, FocusableComposite_1.POINTER_INITIATED_DELAY);
    }
    fireClickEventOnActionTarget() {
        console.log(this.target, this.actionTarget);
        if (this.target == null || this.actionTarget == null)
            return;
        this.target.focus();
        const event = new MouseEvent("click");
        this.actionTarget.dispatchEvent(event);
    }
    firePointerDownEventOnTarget() {
        if (this.target == null)
            return;
        const event = new PointerEvent("pointerdown", { width: -1, height: -1 });
        this.lastFiredPointerDownEvent = event;
        this.target.dispatchEvent(event);
        this.target.focus();
    }
    firePointerUpEventOnTarget() {
        if (this.target == null)
            return;
        const event = new PointerEvent("pointerup");
        this.target.dispatchEvent(event);
        this.target.blur();
    }
    async onTargetGotFocus() {
        if (!this.pointerInitiated)
            this.firePointerDownEventOnTarget();
    }
    async onTargetLostFocus() {
        this.firePointerUpEventOnTarget();
    }
};
FocusableComposite.POINTER_INITIATED_DELAY = 1000;
FocusableComposite = FocusableComposite_1 = __decorate([
    selector("focusable-composite")
], FocusableComposite);
var FocusableComposite_1;

let ButtonComponent = class ButtonComponent extends Component {
    constructor() {
        super(...arguments);
        this.tabindex = "0";
        this.role = "button";
    }
    static markup() {
        return `
			<slot></slot>
			<ripple-composite class="ripple" light></ripple-composite>
			<focusable-composite></focusable-composite>
		`;
    }
    static styles() {
        return `

		:host-context([center]),
		:host([center]) {
			align-self: center;
			justify-self: center;
		}

		:host {
			user-select: none;
			backface-visibility: hidden;
			transform: translate3d(0,0,0);
			box-sizing: border-box;
			contain: content;
			overflow: hidden;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			flex-direction: row;
			position: relative;
			min-height: 46px;
			min-width: 46px;
			width: 200px;
			height: 46px;
			cursor: pointer !important;
			padding: 14px;
			border-radius: var(--box-radius);
			flex-shrink: 0;
			transition: background var(--duration-medium) var(--easing-standard-curve);
		}
		
		::slotted(*) {
			color: var(--color-primary-100) !important;
			font-size: var(--font-size-button) !important;
			line-height: var(--font-size-button) !important;
			font-weight: var(--font-weight-button) !important;
			text-transform: uppercase;
			pointer-events: none;
			cursor: pointer !important;
		}
		
		::slotted(icon-element) {
			fill: var(--color-icon-dark);
		}
		
		.ripple {
			color: var(--color-primary-100);
		}
		
		:host([primary]) {
			background: var(--color-primary-100);
		}
		
		:host([primary]) .ripple {
			color: var(--color-white-70);
		}
		
		:host([primary]:hover) {
			background: var(--color-primary-120) !important;
		}
		
		:host([primary]) ::slotted(*) {
			color: var(--color-primary-text-light) !important;
		}
		
		:host([primary]) ::slotted(icon-element) {
			fill: var(--color-icon-light) !important;
		}
			
		:host([accent]) {
			background: var(--color-accent-100);
		}
		
		:host([accent]) .ripple {
			color: var(--color-white-70);
		}
		
		:host([accent]:hover) {
			background: var(--color-accent-120);
		}
		
		:host([accent]) ::slotted(*) {
			color: var(--color-primary-text-light) !important;
		}
		
		:host([accent]) ::slotted(icon-element) {
			fill: var(--color-icon-light) !important;
		}
			
		:host([dark]) {
			background: var(--color-black-70);
		}
		
		:host([dark]) .ripple {
			color: var(--color-white-70);
		}
		
		:host([dark]:hover) {
			background: var(--color-black-87);
		}
		
		:host([dark]) ::slotted(*) {
			color: var(--color-primary-text-light) !important;
		}
		
		:host([dark]) ::slotted(icon-element) {
			fill: var(--color-icon-light) !important;
		}
			
		:host([light]) {
			background: var(--color-white-100);
		}
		
		:host([light]) .ripple {
			color: var(--color-icon-dark);
		}
		
		:host([light]:hover) {
			background: var(--color-white-87);
		}
		
		:host([light]) ::slotted(*) {
			color: var(--color-primary-text-dark) !important;
		}
		
		:host([light]) ::slotted(icon-element) {
			fill: var(--color-icon-dark) !important;
		}
		
		:host([warning]) {
			background: var(--color-red-100);
		}
		
		:host([warning]:hover) {
			background: var(--color-red-120);
		}
		
		:host([warning]) .ripple {
			color: var(--color-white-70);
		}
		
		:host([warning]) ::slotted(*) {
			color: var(--color-primary-text-light) !important;
		}
		
		:host([warning]) ::slotted(icon-element) {
			fill: var(--color-icon-light) !important;
		}
		
		:host([shadow]) {
			box-shadow: var(--shadow-level1);
		}
		
		:host([shadow]:hover) {
			box-shadow: var(--shadow-level3);
		}
		
		:host(:hover) {
			background: var(--color-black-06);
		}

		:host[disabled] {
			pointer-events: none;
			opacity: .6;
		}
		`;
    }
    connectedCallback() {
        super.connectedCallback();
    }
};
ButtonComponent = __decorate([
    selector("button-element")
], ButtonComponent);

let HomeHeroComponent = class HomeHeroComponent extends Component {
    constructor() {
        super(...arguments);
        this.role = "banner";
    }
    static markup() {
        return `
			<hero-element center>
				<icon-element icon="fovea-logo" extreme light></icon-element>
				<h3>Fovea</h3>
				<h5>Let's build a better web. For <strong>everyone.</strong></h5>
				<code-element>
					<pre>npm install @wessberg/fovea</pre>
				</code-element>
				<button-element primary shadow>
					<p>Get started</p>
				</button-element>
			</hero-element>
		`;
    }
    static styles() {
        return `
			h3, h5 {
				color: var(--color-primary-text-light);
			}
			
			h3, h5, strong {
				user-select:text;
			}
			
			h3 {
				font-weight: var(--font-weight-bold);
			}
			
			code-element {
				max-width: 392px;
				margin-bottom: var(--distance-regular);
			}
		`;
    }
};
HomeHeroComponent = __decorate([
    selector("home-hero-element")
], HomeHeroComponent);

let CodeExampleComponent = class CodeExampleComponent extends Component {
    static styles() {
        return `
			code-element {
				position: relative;
				width: 100%;
				max-width: 369px;
				max-height: inherit;
				box-shadow: var(--shadow-level3);
			}
		`;
    }
    static markup() {
        return `
			<code-element><!--
		 --><pre class="keyword">class</pre><!--
		 --><pre> </pre><!--
		 --><pre class="identifier">MyView</pre><!--
		 --><pre> </pre><!--
		 --><pre class="keyword">extends</pre><!--
		 --><pre> </pre><!--
		 --><pre class="identifier">View</pre><!--
		 --><pre> </pre><!--
		 --><pre class="brace">{</pre><!--
		 --><br><pre>  </pre><!--
		 --><pre class="decorator">@prop</pre><!--
		 --><pre> </pre><!--
		 --><pre class="property">name</pre><!--
		 --><pre class="token">:</pre><!--
		 --><pre> </pre><!--
		 --><pre class="keyword">string</pre><!--
		 --><pre class="token">;</pre><!--
		 --><br><pre>  </pre><!--
		 --><pre class="decorator">@prop</pre><!--
		 --><pre> </pre><!--
		 --><pre class="property">media</pre><!--
		 --><pre class="token">:</pre><!--
		 --><pre> </pre><!--
		 --><pre class="type">IMedia</pre><!--
		 --><pre class="token">;</pre><!--
		 --><br><pre>  </pre><!--
		 --><pre class="decorator">@prop</pre><!--
		 --><pre> </pre><!--
		 --><pre class="property">numbers</pre><!--
		 --><pre class="token">:</pre><!--
		 --><pre> </pre><!--
		 --><pre class="keyword">number</pre><!--
		 --><pre class="bracket">[]</pre><!--
		 --><pre class="token">;</pre><!--
		 --><br><pre>  </pre><!--
		 --><pre class="decorator">@prop</pre><!--
		 --><pre> </pre><!--
		 --><pre class="property">myFavoriteColor</pre><!--
		 --><pre class="token">:</pre><!--
		 --><pre> </pre><!--
		 --><pre class="keyword">string</pre><!--
		 --><pre class="token">;</pre><!--
		 --><br><!--
		 --><br><pre>  </pre><!--
		 --><pre class="method">markup</pre><!--
		 --><pre> </pre><!--
		 --><pre class="parenthesis">()</pre><!--
		 --><pre> </pre><!--
		 --><pre class="brace">{</pre><!--
		 --><br><pre>    </pre><!--
		 --><pre class="keyword">return</pre><!--
		 --><pre> </pre><!--
		 --><pre class="token">\`</pre><!--
		 --><br><pre>      </pre><!--
		 --><pre class="token"><</pre><!--
		 --><pre class="tagname">p</pre><!--
		 --><pre class="token">></pre><!--
		 --><pre class="string">Hello </pre><!--
		 --><pre class="token">$</pre><!--
		 --><pre class="brace">{</pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">name</pre><!--
		 --><pre class="brace">}</pre><!--
		 --><pre class="string">!</pre><!--
		 --><pre class="token"><</pre><!--
		 --><pre class="token">/</pre><!--
		 --><pre class="tagname">p</pre><!--
		 --><pre class="token">></pre><!--
		 --><br><pre>      </pre><!--
		 --><pre class="token"><</pre><!--
		 --><pre class="tagname">img</pre><!--
		 --><pre> </pre><!--
		 --><pre class="attribute_name">src=</pre><!--
		 --><pre class="attribute_value">"</pre><!--
		 --><pre class="token">$</pre><!--
		 --><pre class="brace">{</pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">media</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">src</pre><!--
		 --><pre class="brace">}</pre><!--
		 --><pre class="attribute_value">"</pre><!--
		 --><pre class="token">/</pre><!--
		 --><pre class="token">></pre><!--
		 --><br><pre>      </pre><!--
		 --><pre class="token"><</pre><!--
		 --><pre class="tagname">span</pre><!--
		 --><pre> </pre><!--
		 --><pre class="attribute_name">foreach=</pre><!--
		 --><pre class="attribute_value">"</pre><!--
		 --><pre class="token">$</pre><!--
		 --><pre class="brace">{</pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">numbers</pre><!--
		 --><pre class="brace">}</pre><!--
		 --><pre class="attribute_value">"</pre><!--
		 --><pre class="token">></pre><!--
		 --><br><pre>        </pre><!--
		 --><pre class="token">$</pre><!--
		 --><pre class="brace">{</pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">numbers</pre><!--
		 --><pre class="bracket">[</pre><!--
		 --><pre class="type">index</pre><!--
		 --><pre class="bracket">]</pre><!--
		 --><pre class="brace">}</pre><!--
		 --><br><pre>      </pre><!--
		 --><pre class="token"><</pre><!--
		 --><pre class="token">/</pre><!--
		 --><pre class="tagname">span</pre><!--
		 --><pre class="token">></pre><!--
		 --><br><pre>    </pre><!--
		 --><pre class="token">\`</pre><!--
		 --><pre class="token">;</pre><!--
		 --><br><pre>  </pre><!--
		 --><pre class="brace">}</pre><!--
		 --><br><!--
		 --><br><pre>  </pre><!--
		 --><pre class="method">styles</pre><!--
		 --><pre> </pre><!--
		 --><pre class="parenthesis">()</pre><!--
		 --><pre> </pre><!--
		 --><pre class="brace">{</pre><!--
		 --><br><pre>    </pre><!--
		 --><pre class="keyword">return</pre><!--
		 --><pre> </pre><!--
		 --><pre class="token">\`</pre><!--
		 --><br><pre>      </pre><!--
		 --><pre class="css_selector_name">p</pre><!--
		 --><pre> </pre><!--
		 --><pre class="brace">{</pre><!--
		 --><br><pre>        </pre><!--
		 --><pre class="css_property_name">color</pre><!--
		 --><pre class="token">:</pre><!--
		 --><pre> </pre><!--
		 --><pre class="token">$</pre><!--
		 --><pre class="brace">{</pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">myFavoriteColor</pre><!--
		 --><pre class="brace">}</pre><!--
		 --><pre class="token">;</pre><!--
		 --><br><pre>        </pre><!--
		 --><pre class="css_property_name">font-size</pre><!--
		 --><pre class="token">:</pre><!--
		 --><pre> </pre><!--
		 --><pre class="token">$</pre><!--
		 --><pre class="brace">{</pre><!--
		 --><pre class="identifier">Text</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">DEFAULT_SIZE</pre><!--
		 --><pre class="brace">}</pre><!--
		 --><pre class="token">px</pre><!--
		 --><pre class="token">;</pre><!--
		 --><br><pre>      </pre><!--
		 --><pre class="brace">}</pre><!--
		 --><br><pre>    </pre><!--
		 --><pre class="token">\`</pre><!--
		 --><pre class="token">;</pre><!--
		 --><br><pre>  </pre><!--
		 --><pre class="brace">}</pre><!--
		 --><br><!--
		 --><pre class="brace">}</pre><!--
	--></code-element>
		`;
    }
};
CodeExampleComponent = __decorate([
    selector("code-example-element")
], CodeExampleComponent);

let DataBindingExampleComponent = class DataBindingExampleComponent extends Component {
    static styles() {
        return `
			:host {
				position: relative;
				text-align: center;
				width: 100%;
				max-width: var(--width-frame-max);
				justify-content: center;
				align-content: center;
				display: inline-flex;
				flex-direction: column;
				margin: 0 auto;
			}
			
			card-element > p {
				margin: 20px 0;
			}
			
			card-element > button-element {
				width: 120px;
			}
			
			card-element > p,
			card-element > strong,
			card-element > h6 {
				user-select: text;
			}
			
			card-element,
			code-example-element {
				max-height: 450px;
				margin: var(--distance-minimum) auto;
				width: 100%;
			}
			
			@media screen and (min-width: 700px) {
			
				:host {
					flex-direction: row;
				}
				
				card-element,
				code-example-element {
					margin: var(--distance-minimum) 0;
				}
			}
		`;
    }
    static markup() {
        return `
			<code-example-element></code-example-element>
			<card-element>
				<h6>Data-binding has never been easier</h6>
				<p>
					Enjoy binding your data to the DOM will full autocompletion support from your editor. Bindings persist and change immediately when your model changes.
				</p>
				<strong>You can bind to anything</strong>
				<p>
					Not only can you bind complex data to elements and text nodes. Fovea comes with groundbreaking support for binding data to the CSS styles of individual view component instances. No serializing is going on. Instead, the values or references are passed directly. It just works!
				</p>
				<button-element>
					<p>Learn more</p>
				</button-element>
			</card-element>
		`;
    }
};
DataBindingExampleComponent = __decorate([
    selector("data-binding-example-element")
], DataBindingExampleComponent);

let PrecompileCodeExampleComponent = class PrecompileCodeExampleComponent extends Component {
    static styles() {
        return `
			code-element {
				max-height: inherit;
				max-width: inherit;
				box-shadow: var(--shadow-level3);
				text-align: left;
			}
		`;
    }
    static markup() {
        return `
			<code-element><!--
		 --><pre class="token"><</pre><!--
		 --><pre class="tagname">img</pre><!--
		 --><pre> </pre><!--
		 --><pre class="attribute_name">id=</pre><!--
		 --><pre class="attribute_value">"placeholderImage"</pre><!--
		 --><pre> </pre><!--
		 --><pre class="attribute_name">src=</pre><!--
		 --><pre class="attribute_value">"</pre><!--
		 --><pre class="token">$</pre><!--
		 --><pre class="brace">{</pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">placeholderMedia</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">src</pre><!--
		 --><pre class="brace">}</pre><!--
		 --><pre class="attribute_value">"</pre><!--
		 --><pre> </pre><!--
		 --><pre class="attribute_name">onclick=</pre><!--
		 --><pre class="attribute_value">"</pre><!--
		 --><pre class="token">$</pre><!--
		 --><pre class="brace">{</pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">onPlaceholderTapped</pre><!--
		 --><pre class="brace">}</pre><!--
		 --><pre class="attribute_value">"</pre><!--
		 --><pre class="token">/</pre><!--
		 --><pre class="token">></pre><!--
		 --><br><!--
		 --><pre class="token"><</pre><!--
		 --><pre class="tagname">img</pre><!--
		 --><pre> </pre><!--
		 --><pre class="attribute_name">alt=</pre><!--
		 --><pre class="attribute_value">"placeholderImage"</pre><!--
		 --><pre class="token">$</pre><!--
		 --><pre class="brace">{</pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">currentMedia</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">description</pre><!--
		 --><pre class="brace">}</pre><!--
		 --><pre class="attribute_value">"</pre><!--
		 --><pre> </pre><!--
		 --><pre class="attribute_name">id=</pre><!--
		 --><pre class="attribute_value">"mainImage"</pre><!--
		 --><pre class="token">/</pre><!--
		 --><pre class="token">></pre><!--
	--></code-element>
		`;
    }
};
PrecompileCodeExampleComponent = __decorate([
    selector("precompile-code-example-element")
], PrecompileCodeExampleComponent);

let PrecompileExampleComponent = class PrecompileExampleComponent extends Component {
    static styles() {
        return `
			:host {
				text-align: center;
				width: 100%;
				max-width: 830px;
				justify-content: center;
				align-content: center;
				align-self: center;
				justify-self: center;
				position: relative;
				display: inline-flex;
				flex-direction: row;
				margin: 0;
			}
			
			icon-element {
				margin: auto;		
			}
			
			precompile-code-example-element {
				max-height: 150px;
				margin: auto;
				width: calc(100% - var(--width-icon-larger) - var(--distance-regular) );
			}

		`;
    }
    static markup() {
        return `
			<icon-element icon="fovea-1" larger light></icon-element>
			<precompile-code-example-element center></precompile-code-example-element>
		`;
    }
};
PrecompileExampleComponent = __decorate([
    selector("precompile-example-element")
], PrecompileExampleComponent);

let PostcompileCodeExampleComponent = class PostcompileCodeExampleComponent extends Component {
    static styles() {
        return `
			code-element {
				max-height: inherit;
				max-width: inherit;
				box-shadow: var(--shadow-level3);
				text-align: left;
			}
		`;
    }
    static markup() {
        return `
			<code-element><!--
		 --><pre class="keyword">const</pre><!--
		 --><pre> </pre><!--
		 --><pre class="variable">_0</pre><!--
		 --><pre> </pre><!--
		 --><pre class="token">=</pre><!--
		 --><pre> </pre><!--
		 --><pre class="function">__createElementHelper</pre><!--
		 --><pre class="parenthesis">(</pre><!--
		 --><pre class="string">"img"</pre><!--
		 --><pre class="parenthesis">)</pre><!--
		 --><pre class="token">;</pre><!--
		 --><pre class="function">__addBindingHelper</pre><!--
		 --><pre class="parenthesis">(</pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">,</pre><!--
		 --><pre> </pre><!--
		 --><pre class="variable">_0</pre><!--
		 --><pre class="token">,</pre><!--
		 --><pre> </pre><!--
		 --><pre class="string">"placeholderMedia"</pre><!--
		 --><pre class="token">,</pre><!--
		 --><pre> </pre><!--
		 --><pre class="bracket">[</pre><!--
		 --><pre class="string">"src"</pre><!--
		 --><pre class="bracket">]</pre><!--
		 --><pre class="token">,</pre><!--
		 --><pre> </pre><!--
		 --><pre class="string">"src"</pre><!--
		 --><pre class="parenthesis">)</pre><!--
		 --><pre class="token">,</pre><!--
		 --><br><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">placeholderMedia</pre><!--
		 --><pre> </pre><!--
		 --><pre class="token">!==</pre><!--
		 --><pre> </pre><!--
		 --><pre class="keyword">void</pre><!--
		 --><pre> </pre><!--
		 --><pre class="number">0</pre><!--
		 --><pre> </pre><!--
		 --><pre class="token">&&</pre><!--
		 --><pre> </pre><!--
		 --><pre class="keyword">this</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">placeholderMedia</pre><!--
		 --><pre class="token">.</pre><!--
		 --><pre class="property">src</pre><!--
		 --><pre> </pre><!--
		 --><pre class="token">!==</pre><!--
		 --><pre> </pre><!--
		 --><pre class="keyword">void</pre><!--
		 --><pre> </pre><!--
		 --><pre class="number">0</pre><!--
		 --><pre class="comment">... // And so on</pre><!--
	--></code-element>
		`;
        // And so on
    }
};
PostcompileCodeExampleComponent = __decorate([
    selector("postcompile-code-example-element")
], PostcompileCodeExampleComponent);

let PostcompileExampleComponent = class PostcompileExampleComponent extends Component {
    static styles() {
        return `
			:host {
				text-align: center;
				width: 100%;
				max-width: var(--width-frame-max);
				justify-content: center;
				align-content: center;
				align-self: center;
				justify-self: center;
				position: relative;
				display: inline-flex;
				flex-direction: row;
				margin: 0;
			}
			
			icon-element {
				margin: auto;		
			}
			
			postcompile-code-example-element {
				max-height: 150px;
				margin: auto;
				width: calc(100% - var(--width-icon-larger) - var(--distance-regular) );
			}

		`;
    }
    static markup() {
        return `
			<icon-element icon="fovea-2" larger light></icon-element>
			<postcompile-code-example-element center></postcompile-code-example-element>
		`;
    }
};
PostcompileExampleComponent = __decorate([
    selector("postcompile-example-element")
], PostcompileExampleComponent);

let FoveaRollupWebpackComponent = class FoveaRollupWebpackComponent extends Component {
    static styles() {
        return `
			:host {
				display: flex;
				align-content: center;
				justify-content: center;
				flex-direction: row;
				height: var(--height-icon-larger);
			}
			
			h3 {
				margin: 0;
				line-height: 1.2;
				padding: 0 10px;
			}
		`;
    }
    static markup() {
        return `
			<icon-element id="fovea" icon="fovea-logo" larger primary></icon-element>
			<h3>+</h3>
			<icon-element id="rollup" icon="rollup-logo" larger></icon-element>
			<icon-element id="webpack" icon="webpack-logo" larger></icon-element>
			<h3>=</h3>
			<icon-element id="heart" icon="heart-fill" larger warning></icon-element>
		`;
    }
};
FoveaRollupWebpackComponent = __decorate([
    selector("fovea-rollup-webpack-element")
], FoveaRollupWebpackComponent);

let ToolsComponent = class ToolsComponent extends Component {
    constructor() {
        super(...arguments);
        this.role = "complementary";
    }
    static styles() {
        return `
			:host {
				text-align: center;
				width: 100%;
				justify-content: center;
				align-content: center;
				position: relative;
				display: flex;
				flex-direction: column;
				margin: 0;
			}
			
			#row1 {
				flex-direction: column;
			}
			
			#row2 {
				flex-direction: column-reverse;
			}
			
			#row1, #row2 {
				display: inline-flex;
				justify-content: center;
				align-content: center;
				max-width: var(--width-frame-max);
				width: 100%;
				margin: 0 auto;
			}
			
			#row2 > icon-element {
				height: var(--height-icon-larger);
			}
			
			#row1 > fovea-rollup-webpack-element,
			#row2 > icon-element {
				align-self: center;
				margin-top: 15px;
			}
			
			#row1 > fovea-rollup-webpack-element,
			#row2 > icon-element {
				flex-grow: 1;
			}
			
			#row1,
			#row2 {
				transform: translate3d(0, -60px, 0);
				margin-top: 20px;
				margin-bottom: 20px;
			}
			
			#row1 > fovea-rollup-webpack-element {
				padding-right: var(--distance-minimum);
			}
			
			card-element > button-element {
				width: 120px;
			}
			
			card-element > p,
			card-element > h6,
			a {
				user-select: text;
			}
			
			card-element {
				max-height: 350px;
				margin: var(--distance-minimum) auto;
			}
			
			
			
			@media screen and (min-width: 700px) {
				
				card-element {
					margin: var(--distance-minimum);
				}
				
				#row1, #row2 {
					flex-direction: row;
					margin-top: 0;
					margin-bottom: 0;
				}
				
				#row1 > fovea-rollup-webpack-element,
				#row2 > icon-element {
					margin-top: 0;
				}
			}
		`;
    }
    static markup() {
        return `
			<section id="row1">
				<card-element>
						<h6>Works with your existing build tools</h6>
						<p>
							Fovea won’t ask you to change your tools, habits or the way you write code. Instead, Fovea is a simple plugin for your favorite bundler such as <a href="https://rollupjs.org/" target="_blank">rollup</a> or <a href="https://webpack.js.org/" target="_blank">webpack</a>.
						</p>
						<button-element>
							<p>Learn more</p>
						</button-element>
				</card-element>
				<fovea-rollup-webpack-element></fovea-rollup-webpack-element>
			</section>
			
			<section id="row2">
				<icon-element icon="typescript-logo" extreme></icon-element>
				<card-element>
						<h6>Built with TypeScript</h6>
						<p>
							Fovea is built with TypeScript. Whether or not you annotate your code, you will have a great development experience!
						</p>
						<button-element>
							<p>Learn more</p>
						</button-element>
				</card-element>
			</section>
		`;
    }
};
ToolsComponent = __decorate([
    selector("tools-element")
], ToolsComponent);

let SummaryComponent = class SummaryComponent extends Component {
    constructor() {
        super(...arguments);
        this.role = "complementary";
    }
    static styles() {
        return `
			:host {
				background: var(--color-primary-100);
				text-align: center;
				width: 100%;
				justify-content: center;
				align-content: center;
				position: relative;
				display: inline-flex;
				flex-direction: column;
				margin: 0;
				padding: var(--distance-minimum) var(--distance-minimum) 100px var(--distance-minimum);
			}
			
			h4, h5 {
				padding-top: var(--distance-regular);
				color: var(--color-primary-text-light);
			}
			
			
		`;
    }
    static markup() {
        return `
			<h4>Summary</h4>
			<data-binding-example-element></data-binding-example-element>
			<h5>Fovea takes this:</h5>
			<precompile-example-element></precompile-example-element>
			<h5>And compiles it into this:</h5>
			<postcompile-example-element></postcompile-example-element>
		`;
    }
};
SummaryComponent = __decorate([
    selector("summary-element")
], SummaryComponent);

let AppFooterComponent = class AppFooterComponent extends Component {
    constructor() {
        super(...arguments);
        this.role = "contentinfo";
    }
    static styles() {
        return `
			
			:host([primary]) {
				background: var(--color-primary-100);
			}
			
			:host([accent]) {
				background: var(--color-accent-100);
			}
			
			:host([dark]) {
				background: var(--color-black-70);
			}
			
			:host([light]) {
				background: var(--color-white-87);
			}

			:host {
				box-sizing: border-box;
				position: relative;
				display: flex;
				width: 100%;
				z-index: 997;
			}
			
			#wrapper {
				position: relative;
				display: inline-flex;
				padding: var(--distance-regular);
				flex-wrap: wrap;
				margin: auto;
				flex-direction: row;
				align-content: flex-start;
				justify-content: flex-start;
				width: 100%;
				
			}
			
			.row {
				display: flex;
				flex-direction: column;
				align-content: flex-start;
				justify-content: flex-start;
				margin: var(--distance-minimum);
			}
			
			.rowSlot::slotted(h1),
			.rowSlot::slotted(h2),
			.rowSlot::slotted(h3),
			.rowSlot::slotted(h4),
			.rowSlot::slotted(h5),
			.rowSlot::slotted(h6) {
				text-transform: uppercase !important;
				color: var(--color-white-70) !important;
				margin: 0 0 8px 0 !important;
				line-height: 1 !important;
				order: 0;
			}
			
			#logoSlot::slotted(*) {
				margin: auto;
			}
			
			.rowSlot::slotted(*) {
				font-size: var(--font-size-caption) !important;
			}
			
			.rowSlot::slotted(a) {
				color: var(--color-white-100) !important;
			}
			
			.rowSlot::slotted(a:hover),
			.rowSlot::slotted(a:focus) {
				color: var(--color-primary-100) !important;
			}
			
			#logoSlot::slotted(*) {
					margin: auto 0 auto var(--distance-regular);
				}
			
			@media screen and (min-width: 677px) {
				#wrapper {
					align-content: space-around;
					justify-content: space-around;
				}
			}
			
		`;
    }
    static markup() {
        return `
			<slot id="logoSlot" name="logo"></slot>
			<div id="wrapper">
				<section id="row1" class="row">
					<slot id="row1Slot" class="rowSlot" name="row1"></slot>
				</section>
				<section id="row2" class="row">
					<slot id="row2Slot" class="rowSlot" name="row2"></slot>
				</section>
				<section id="row3" class="row">
					<slot id="row3Slot" class="rowSlot" name="row3"></slot>
				</section>	
				<section id="row4" class="row">
					<slot id="row4Slot" class="rowSlot" name="row4"></slot>
				</section>
				<section id="row5" class="row">
					<slot id="row5Slot" class="rowSlot" name="row5"></slot>
				</section>
				
			</div>
		`;
    }
};
AppFooterComponent = __decorate([
    selector("app-footer-element")
], AppFooterComponent);

let FoveaFooterComponent = class FoveaFooterComponent extends Component {
    constructor() {
        super(...arguments);
        this.role = "contentinfo";
    }
    static styles() {
        return ``;
    }
    static markup() {
        return `
			<app-footer-element dark>
					<icon-element icon="fovea-logo" slot="logo" larger light></icon-element>
					<h3 slot="row1">Getting started</h3>
					<a href="/" target="_self" slot="row1">Your first component</a>
					<a href="/" target="_self" slot="row1">Your first app</a>
					<a href="/" target="_self" slot="row1">Tool integration</a>
					
					<h3 slot="row2">Help</h3>
					<a href="/" target="_self" slot="row2">Report issue</a>
					<a href="/" target="_self" slot="row2">Stack overflow</a>
					<a href="/" target="_self" slot="row2">License</a>
					
					<h3 slot="row3">About</h3>
					<a href="/" target="_self" slot="row3">Author</a>
					<a href="/" target="_self" slot="row3">Motivation</a>
					<a href="/" target="_self" slot="row3">Benchmarks</a>
					
					<h3 slot="row4">Resources</h3>
					<a href="/" target="_self" slot="row4">Learn</a>
					<a href="/" target="_self" slot="row4">Advanced</a>
					<a href="/" target="_self" slot="row4">FAQ</a>
					
					<h3 slot="row5">News</h3>
					<a href="/" target="_self" slot="row5">Releases</a>
					<a href="/" target="_self" slot="row5">Blog</a>
					<a href="/" target="_self" slot="row5">Press</a>
					
					<h3 slot="row6">Links</h3>
					<a href="/" target="_self" slot="row6">Github</a>
					<a href="/" target="_self" slot="row6">NPM</a>
					<a href="/" target="_self" slot="row6">Twitter</a>
					
      </app-footer-element>
		`;
    }
};
FoveaFooterComponent = __decorate([
    selector("fovea-footer-element")
], FoveaFooterComponent);

let Page = class Page extends ScrollComponent {
    constructor() {
        super(...arguments);
        this.role = "main";
    }
    static styles() {
        return super.styles() + `
			:host {
				height: calc(100vh - var(--app-bar-portrait-height-desktop));
				top: var(--app-bar-portrait-height-desktop);
				margin-bottom: var(--app-bar-portrait-height-desktop);
				
			}
		`;
    }
};
Page = __decorate([
    selector("page-element")
], Page);

let HomePage = class HomePage extends Page {
    static markup() {
        return `
			<home-hero-element></home-hero-element>
			<highlights-element></highlights-element>
			<summary-element></summary-element>
			<section id="bottom">
				<material-triangles-element accent></material-triangles-element>
				<tools-element></tools-element>
				<fovea-footer-element></fovea-footer-element>
			</section>
		`;
    }
    static styles() {
        return super.styles() + `
			highlights-element {
				transform: translate3d(0, -40px, 0);
			}
			
			material-triangles-element {
				top: auto;
				bottom: 0;
			}
			
			#bottom {
				position: relative;
			}
		`;
    }
};
HomePage = __decorate([
    selector("home-page-element")
], HomePage);

let Frame = class Frame extends Component {
    constructor() {
        super(...arguments);
        this.role = "application";
    }
    static styles() {
        return `
			:host {
				transform: translate3d(0,0,0);
				backface-visibility: hidden;
				box-sizing: border-box;
				contain: content;
				position: relative;
				display: block;
				width: 100%;
				height: 100%;
			}
		`;
    }
};
Frame = __decorate([
    selector("frame-element")
], Frame);

exports.HomeFrame = class HomeFrame extends Frame {
    static markup() {
        return `
			<fovea-app-bar-element></fovea-app-bar-element>
			<home-page-element></home-page-element>
		`;
    }
};
exports.HomeFrame = __decorate([
    selector("home-frame-element")
], exports.HomeFrame);

SvgIconUtil.addIcons([
    MENU$$1,
    FOVEA_TINY_ICON,
    FOVEA_FAST_ICON,
    FOVEA_INTUITIVE_ICON,
    FOVEA_LOGO_ICON,
    FOVEA_1_ICON,
    FOVEA_2_ICON,
    ROLLUP_LOGO,
    WEBPACK_LOGO,
    TYPESCRIPT_LOGO,
    HEART_FILL$$1,
    MATERIAL_TRIANGLE
]);
// Block undesirable global events
globalEventBlocker.block("dragstart");
if (agentDetector.isMobile)
    globalEventBlocker.block("contextmenu");
// Exports

}((this.fovea = this.fovea || {})));
