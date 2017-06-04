var _Mathabs=Math.abs,_Mathmax=Math.max;(function(){"use strict";function t(cn){const pn=M();pn.src=cn.path,document.head.appendChild(pn)}function a(cn,pn,gn,mn){var An,hn=arguments.length,En=3>hn?pn:null===mn?mn=Object.getOwnPropertyDescriptor(pn,gn):mn;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)En=Reflect.decorate(cn,pn,gn,mn);else for(var In=cn.length-1;0<=In;In--)(An=cn[In])&&(En=(3>hn?An(En):3<hn?An(pn,gn,En):An(pn,gn))||En);return 3<hn&&En&&Object.defineProperty(pn,gn,En),En}function s(cn){return(pn)=>{customElements.define(cn,pn);const gn=pn.styles(),mn=pn.markup();if(null!=gn||null!=mn){const hn=null==gn?"":`
		<link rel="stylesheet" href="${N.path.sharedCss}?ver=${WP.version}" />
		<style>${gn}</style>`,En=null==mn?"":mn,An=document.createElement("template");An.innerHTML=`
		${hn}
		${En}
	`,pn.template=An}}}function u(cn){if(je.testRoute(cn.name))return je;if(Qe.testRoute(cn.name))return Qe;if($e.testRoute(cn.name))return $e;if(en.testRoute(cn.name))return en;throw new ReferenceError(`Could not find a matching route for path: ${cn.name}`)}const f={env:{KIND:2,NODE_ENV:"production",TEST:!1,MOBILE:!1,SERVE:!1,TLS:!1,DEBUG:!1}};let p;const g=function(){let cn;try{cn=self,p="self","window"in cn||Object.defineProperty(cn,"window",{value:self}),"global"in cn||Object.defineProperty(cn,"global",{value:self}),"root"in cn||Object.defineProperty(cn,"root",{value:self})}catch(pn){try{cn=global,p="global","window"in cn||Object.defineProperty(cn,"window",{value:global}),"self"in cn||Object.defineProperty(cn,"self",{value:global}),"root"in cn||Object.defineProperty(cn,"root",{value:global})}catch(gn){cn=window,p="window","global"in cn||Object.defineProperty(cn,"global",{value:window}),"self"in cn||Object.defineProperty(cn,"self",{value:window}),"root"in cn||Object.defineProperty(cn,"root",{value:window})}}return cn}(),m=WP.templateUrl,E=`${m}/shared.css`,A=`${m}/lib`,I=`${A}/polyfill`,b=`${I}/pointer-events.min.js`,v=`${I}/web-animations.min.js`,O=`${A}/asset`,R=`${O}/img`,T=`${R}/author.jpg`,w=`${A}/elements.js`,N={path:{base:m,sharedCss:E,lib:{polyfill:{pointerEvents:b,webAnimations:v},asset:{img:{author:T}},elementsBundle:w}}},S={path:N.path.lib.polyfill.pointerEvents,condition:!("PointerEvent"in g)},D={path:N.path.lib.polyfill.webAnimations,condition:"function"!=typeof document.head.animate},M=()=>{const cn=document.createElement("script");return cn.type="text/javascript",cn.defer=!0,cn};(function(){S.condition&&t(S),D.condition&&t(D)})();class C{static addIcon(cn){C.seenIcons.set(cn.selector,cn)}static addIcons(cn){cn.map((pn)=>this.addIcon(pn))}buildIconFromName(cn){const pn=C.seenIcons.get(cn);if(null==pn)throw new ReferenceError(`No icon was found for selector: ${cn}`);return this.buildSvgIcon(pn)}buildSvgIcon(cn){const pn=document.createElementNS("http://www.w3.org/2000/svg","svg"),gn=document.createElementNS("http://www.w3.org/2000/svg","g");return gn.innerHTML=cn.template,gn.setAttribute("viewBox",cn.viewBox),pn.setAttribute("viewBox",cn.viewBox),pn.setAttribute("preserveAspectRatio","xMidYMid meet"),pn.style.cssText="pointer-events: none; display: block; width: 100%; height: 100%;",pn.appendChild(gn),pn}}C.seenIcons=new Map;const L={selector:"fovea-tiny",viewBox:"0 0 61 61",template:`<defs><circle id="path-1" cx="30.5" cy="30.5" r="30.5"/></defs><g id="Page-2" fill="none" fill-rule="evenodd"><g id="tiny_icon"><mask id="mask-2" fill="#fff"><use xlink:href="#path-1"/></mask><use id="rounding_mask" fill="#D8D8D8" xlink:href="#path-1"/><path id="fill_target" mask="url(#mask-2)" d="M0 0h61v61H0z"/><g id="chip" mask="url(#mask-2)" fill="#FFF"><path d="M22.06 18.3h17.5v1.52h4.36v3.05h-4.37v3.05h4.37v3.05h-4.37v3.06h4.37v3.04h-4.37v3.05h4.37v3.06h-4.37v1.52h-17.5v-1.53H17.7v-3.05h4.36v-3.04H17.7v-3.05h4.36v-3.05H17.7v-3.05h4.36v-3.05H17.7v-3.05h4.36V18.3zm7.3 16.77v4.58h1.45v-4.57h-1.44zm2.9 0v4.58h1.46v-4.57h-1.46zm2.92 0v4.58h1.45v-4.57h-1.45z" id="Shape"/></g><path id="bg_overlay" fill="#000" opacity=".07" mask="url(#mask-2)" d="M0 0h61v30.5H0z"/></g></g>`},P={selector:"fovea-fast",viewBox:"0 0 61 61",template:`<defs><circle id="path-1" cx="30.5" cy="30.5" r="30.5"/></defs><g id="Page-2" fill="none" fill-rule="evenodd"><g id="rounded_icon"><mask id="mask-2" fill="#fff"><use xlink:href="#path-1"/></mask><use id="rounding_mask" fill="#D8D8D8" xlink:href="#path-1"/><path id="fill_target" mask="url(#mask-2)" d="M0 0h61v61H0z"/><g id="logo" mask="url(#mask-2)" fill-rule="nonzero" fill="#FFF"><path d="M46.97 30.5c0 6.4-5.26 11.6-11.76 11.6-6.44 0-11.7-5.2-11.7-11.6 0-6.4 5.26-11.6 11.75-11.6 6.5 0 11.77 5.2 11.77 11.6zm-11.02-5.8h-2.2v6.38l4.06 4 1.6-1.52-3.4-3.38V24.7zM14.88 39.2c-.8 0-1.47-.66-1.47-1.46 0-.8.7-1.45 1.5-1.45h6.88c.45 1 1.04 2 1.72 2.9h-8.6zm-1.7-7.25c-.82 0-1.48-.65-1.48-1.45 0-.8.66-1.45 1.47-1.45h7.42l-.1 1.45.05 1.45h-7.42zm-1.4-7.25c-.82 0-1.48-.64-1.48-1.44 0-.8.66-1.45 1.47-1.45h11.7c-.7.9-1.28 1.9-1.73 2.9h-9.97z" id="Shape"/></g><path id="bg_overlay" fill="#000" opacity=".07" mask="url(#mask-2)" d="M0 0h61v30.5H0z"/></g></g>`},B={selector:"fovea-intuitive",viewBox:"0 0 61 61",template:`<defs><circle id="path-1" cx="30.5" cy="30.5" r="30.5"/></defs><g id="Page-2" fill="none" fill-rule="evenodd"><g id="intuitive_icon"><mask id="mask-2" fill="#fff"><use xlink:href="#path-1"/></mask><use id="rounding_mask" fill="#D8D8D8" xlink:href="#path-1"/><path id="fill_target" mask="url(#mask-2)" d="M0 0h61v61H0z"/><g id="web-components" mask="url(#mask-2)"><g fill-rule="nonzero" id="Group"><path id="Shape" fill-opacity=".68" fill="#FEC007" d="M21.97 47.96L11.77 19.9l28.04-7.53L45 41.8l-10.64 6.28-12.3-.12"/><path id="Shape" fill-opacity=".77" fill="#FEC007" d="M42.24 40.55L37.88 15.4 26.4 18.5l7.24 27.13z"/><path d="M53.16 26.88l1.3 4.52-10 2.84s0 6.04-4.86 8.44c-4.86 2.4-8.63.37-8.63.37l-.6-1.75 7.2-1.97 1.6-6.2-4.65-4.57-6.67 2.03-.58-1.6s3.13-7 12.33-3c0 0 2.9 1.8 3.55 3.4l10-2.6zm1.3-.33l1.6-.47 1.28 4.6-1.67.52-1.2-4.65z" id="Shape" fill="#FFF"/><path d="M55.02 26.34l1.04-.26 1.28 4.6-1.67.52-.44-1.54.67-.26-.88-3.06zm-2.97.83l1.1-.3 1.3 4.53-10 2.84s-.1 5.27-3.6 7.66c-3.46 2.38-7.38 2.3-9.88 1.15l-.28-.8s6.8 1.6 10.1-3.54c2-3.3 2-5.8 2-5.8l10-2.7-.87-3zM27.27 29l5.87-1.72 1.38 1.28-6.67 2.03-.58-1.6z" id="Shape" fill="#FEC007"/><path d="M6.56 32.2l1.18 4.54 10.04-2.7s3.08 5.2 8.48 4.76c5.4-.43 7.6-4.12 7.6-4.12l-.37-1.8-7.2 2-4.6-4.5 1.62-6.32 6.76-1.68-.3-1.67s-6.2-4.3-12.1 3.8c0 0-1.6 3.1-1.3 4.8l-9.9 3zm-1.3.38l-1.6.42 1.25 4.62 1.7-.42-1.3-4.62z" id="Shape" fill="#FFF"/><path d="M4.68 32.7l-1.02.3 1.25 4.62 1.7-.42-.4-1.55-.7.1-.8-3.06zm2.98-.83l-1.1.33 1.18 4.54 10.04-2.7s2.78 4.48 7 4.74c4.2.26 7.53-1.8 9.08-4.1l-.17-.83s-5.1 4.87-10.6 2.2c-3.5-1.87-4.7-3.98-4.7-3.98l-10 2.8-.8-3zm22.22-11.15l-5.92 1.54-.53 1.8 6.76-1.68-.4-1.66z" id="Shape" fill="#FEC007"/></g></g><path id="bg_overlay" fill="#000" opacity=".07" mask="url(#mask-2)" d="M0 0h61v30.5H0z"/></g></g>`},x={selector:"fovea-logo",viewBox:"0 0 123 197",template:`<g fill-rule="evenodd"><path opacity=".7" d="M61.2 46l60.6 52-60.6 46L0 98"/><path opacity=".8" d="M62 23.3l60.5 52.2-60.6 46-61.4-46"/><path d="M61.2 0l60.6 52-60.6 46L0 52"/><path opacity=".8" d="M0 98l61.2 46v52.2L0 149"/><path d="M121.8 98l-60.6 46v52.2c20.2-16 60.6-47.3 60.6-47.3V98z"/></g>`},y={selector:"fovea-1",viewBox:"0 0 74 74",template:`<path fill-rule="evenodd" d="M37 74C16.6 74 0 57.4 0 37S16.6 0 37 0s37 16.6 37 37-16.6 37-37 37zm2-24V26.5l-8 1v2.2h4.8V50H39z"/>`},F={selector:"fovea-2",viewBox:"0 0 74 74",template:`<path fill-rule="evenodd" d="M37 74C16.6 74 0 57.4 0 37S16.6 0 37 0s37 16.6 37 37-16.6 37-37 37zm8-24v-2.5H34l6.2-6.8c1.3-1.5 2.4-2.8 3.2-4 .7-1.4 1-2.7 1-4 0-2-.5-3.4-1.8-4.7-1.2-1.2-3-1.8-5-1.8-2.5 0-4.4.7-5.8 2-1.4 1.4-2 3-2 5.2h3c0-1.5.4-2.6 1.2-3.5.8-1 2-1.6 3.6-1.6 1 0 2 .4 2.7 1.2.8.7 1 1.7 1 3 0 .8 0 1.7-.6 2.6-.5 1-1.4 2-2.8 3.7l-8 9v2h15z"/>`},H={selector:"rollup-logo",viewBox:"0 0 56 73",template:`<defs><linearGradient id="a" x1="26.8%" x2="67.6%" y1="48.2%" y2="55.3%"><stop stop-color="#FF6533" offset="0%"/><stop stop-color="#FF5633" offset="15.7%"/><stop stop-color="#FF4333" offset="43.4%"/><stop stop-color="#FF3733" offset="71.4%"/><stop stop-color="#F33" offset="100%"/></linearGradient><linearGradient id="b" x1="20.5%" x2="93.5%" y1="38.1%" y2="80.4%"><stop stop-color="#BF3338" offset="0%"/><stop stop-color="#F33" offset="100%"/></linearGradient><linearGradient id="c" x1="32.3%" x2="45.6%" y1="39.5%" y2="48.9%"><stop stop-color="#FF6533" offset="0%"/><stop stop-color="#FF5633" offset="15.7%"/><stop stop-color="#FF4333" offset="43.4%"/><stop stop-color="#FF3733" offset="71.4%"/><stop stop-color="#F33" offset="100%"/></linearGradient><linearGradient id="d" x1="51.6%" x2="48.5%" y1="78.3%" y2="41.7%"><stop stop-color="#FF6533" offset="0%"/><stop stop-color="#FF5633" offset="15.7%"/><stop stop-color="#FF4333" offset="43.4%"/><stop stop-color="#FF3733" offset="71.4%"/><stop stop-color="#F33" offset="100%"/></linearGradient><linearGradient id="e" x1="40.2%" x2="54%" y1="47.2%" y2="54.5%"><stop stop-color="#FBB040" offset="0%"/><stop stop-color="#FB8840" offset="100%"/></linearGradient><linearGradient id="f" x1="55.2%" x2="40.9%" y1="5.9%" y2="128%"><stop stop-color="#FFF" offset="0%"/><stop stop-color="#FFF" stop-opacity="0" offset="100%"/></linearGradient></defs><g fill="none"><path fill="url(#a)" d="M48 16.4C48 12 47 8 45 4.6 39.8-1 28.4-2 25.6 4.6c-3 6.7 4.8 14.3 8.2 13.7 4.4-.8-.7-10.7-.7-10.7 7 12.5 5.5 8.6-6.5 20.2C14.5 39.3 2 63.5.5 64.6H0h47c.7 0 1.3-.8 1-1.5L35.5 39c-.2-.6 0-1.2.5-1.5 7.2-4 12-12 12-20.8z" transform="translate(7.505 7.67)"/><path fill="url(#b)" d="M48 16.4C48 12 47 8 45 4.6 39.8-1 28.4-2 25.6 4.6c-3 6.7 4.8 14.3 8.2 13.7 4.4-.8-.7-10.7-.7-10.7 7 12.5 5.5 8.6-6.5 20.2C14.5 39.3 2 63.5.5 64.6H0h47c.7 0 1.3-.8 1-1.5L35.5 39c-.2-.6 0-1.2.5-1.5 7.2-4 12-12 12-20.8z" transform="translate(7.505 7.67)"/><path fill="url(#c)" d="M7.8 72.2c1.7-1 14-25.3 26-36.8 12-11.5 13.4-7.7 6.8-20.2 0 0-25.3 35.7-34.5 53.3"/><path fill="url(#d)" d="M9.4 40.3C26.4 8.7 28.7 5.5 37.7 5.5c4.6 0 9.4 2 12.4 6C46 4.5 39 0 30 0H1C.6 0 0 .5 0 1v59c1.7-4.5 4.7-11 9.4-19.7z" transform="translate(1.908)"/><path fill="url(#e)" d="M33.7 35.4C21.7 47 9.5 71.2 7.7 72.2c-1.7 1-4.7 1.2-6.3-.6-1.7-2-4.3-5 10-31.3 17-31.6 19.2-34.8 28-34.8 4.7 0 9.5 2 12.5 6l.2.7c-5-5.4-16.4-6.6-19.4 0C30 19 38 26.6 41.3 26c4.3-.8-.8-10.8-.8-10.8 6.6 12.5 5 8.7-7 20.2z"/><path fill="url(#f)" d="M12.7 41.7C29.7 10 32 7 41 7c3.8 0 7.7 1.3 10.6 4-3-3.5-7.5-5.5-12-5.5-9 0-11.2 3.2-28.3 34.8C-3 66.6-.3 69.7 1.3 71.6l1 .7C.6 70 0 65 12.6 41.7z" opacity=".3"/></g>`},V={selector:"webpack-logo",viewBox:"0 0 67 78",template:`<g fill="none"><path fill="#A2BDE9" d="M33.5 0L0 19.6v38.8l33.5 19.4L67 58.3V19.5"/><path fill="#6F95DB" d="M33.5 19.8L17 29.4v19.3l16.5 9.6L50 48.7V29.4"/><path fill="#FFF" d="M33.5 0L0 19.5 33.5 38 67 19.6M33.5 40.4L0 58.4l33.5 19.3L67 58" opacity=".1"/></g>`},U={selector:"typescript-logo",viewBox:"0 0 284 70",template:`<path fill="#007ACC" d="M34.98 7.56H20.43v45.07h-5.9V7.56H0V2.2h34.98v5.36zm22.96 9.07L41.38 58.4c-2.95 7.44-7.1 11.17-12.45 11.17-1.5 0-2.75-.15-3.76-.46V64c1.24.42 2.38.63 3.4.63 2.92 0 5.1-1.73 6.55-5.2L38 52.55l-14.06-35.9h6.4l9.74 27.7c.12.34.36 1.26.74 2.73h.2c.13-.56.36-1.45.7-2.67l10.24-27.7h5.98zm9.43 30.8h-.14V69.2h-5.77V16.62h5.77v6.33h.14c2.84-4.78 6.98-7.17 12.45-7.17 4.64 0 8.26 1.6 10.86 4.82 2.6 3.22 3.9 7.54 3.9 12.96 0 6.02-1.46 10.85-4.4 14.47-2.92 3.62-6.93 5.43-12 5.43-4.68 0-8.28-2.02-10.8-6.05zm-.14-14.52V38c0 2.98.97 5.5 2.9 7.58s4.4 3.1 7.37 3.1c3.5 0 6.23-1.33 8.2-4 2-2.67 2.98-6.4 2.98-11.14 0-4-.93-7.15-2.78-9.42-1.85-2.27-4.36-3.4-7.52-3.4-3.35 0-6.05 1.16-8.1 3.5-2.03 2.3-3.05 5.23-3.05 8.75zm62.33 3.2h-25.42c.1 4 1.17 7.1 3.23 9.3 2.06 2.2 4.9 3.3 8.5 3.3 4.06 0 7.8-1.3 11.2-4V50c-3.17 2.3-7.36 3.45-12.56 3.45-5 0-9-1.63-11.9-4.9-2.9-3.27-4.3-7.87-4.3-13.8 0-5.6 1.6-10.17 4.8-13.7 3.2-3.52 7.1-5.28 11.9-5.28 4.7 0 8.4 1.5 11 4.56 2.6 3.05 3.9 7.28 3.9 12.7v3zm-5.9-4.9c-.03-3.3-.84-5.9-2.42-7.7-1.58-1.8-3.78-2.7-6.6-2.7-2.7 0-5.02 1-6.92 2.9-1.9 2-3.07 4.5-3.52 7.7h19.45zm10.94 19.4v-6.9c.73.7 1.6 1.4 2.62 1.9 1.02.6 2.1 1.1 3.22 1.5 1.13.4 2.26.7 3.4.9 1.13.2 2.18.3 3.14.3 3.32 0 5.8-.6 7.45-2 1.64-1.3 2.46-3.3 2.46-5.8 0-1.3-.3-2.5-.9-3.5-.6-1-1.3-1.9-2.3-2.7-1-.8-2.1-1.6-3.5-2.4l-4.2-2.5c-1.6-.9-3.1-1.8-4.5-2.7-1.4-.9-2.6-1.9-3.6-3-1.1-1.1-1.9-2.35-2.5-3.74-.6-1.4-.9-3.03-.9-4.9 0-2.3.4-4.3 1.3-6 .94-1.7 2.15-3.1 3.66-4.2 1.5-1.1 3.2-1.9 5.1-2.45 1.93-.55 3.9-.8 5.9-.8 4.52 0 7.83.6 9.9 1.77v6.6c-2.7-2-6.2-3.1-10.5-3.1-1.15 0-2.33.2-3.5.4-1.1.3-2.2.8-3.1 1.4-.9.6-1.6 1.4-2.2 2.4-.6 1-.86 2.17-.86 3.56 0 1.3.2 2.4.65 3.36s1.1 1.8 1.9 2.56c.87.8 1.9 1.54 3.15 2.27 1.27.7 2.7 1.5 4.3 2.3 1.68.9 3.25 1.8 4.7 2.8 1.5 1 2.8 2.1 3.9 3.3 1.1 1.2 2 2.5 2.67 3.93.65 1.46 1 3.1 1 5 0 2.48-.44 4.6-1.3 6.3-.9 1.7-2.1 3.1-3.6 4.2s-3.25 1.87-5.2 2.35c-2 .5-4.08.7-6.27.7-.75 0-1.65-.04-2.7-.2-1.1-.1-2.2-.3-3.3-.53-1.14-.23-2.2-.53-3.2-.9-1-.4-1.8-.8-2.4-1.23zm58.65.4c-2.77 1.7-6.05 2.5-9.84 2.5-5.1 0-9.2-1.6-12.4-5-3.1-3.3-4.7-7.7-4.7-13 0-5.9 1.7-10.7 5.1-14.3 3.4-3.6 8-5.4 13.6-5.4 3.2 0 6 .6 8.4 1.8v5.9c-2.6-1.8-5.5-2.8-8.6-2.8-3.7 0-6.7 1.3-9 4s-3.5 6.1-3.5 10.4c0 4.3 1.1 7.6 3.4 10 2.2 2.5 5.2 3.7 8.9 3.7 3.2 0 6.1-1 8.9-3.1V51zm22.3-28.5c-1-.7-2.45-1.1-4.35-1.1-2.46 0-4.52 1.2-6.17 3.5-1.65 2.3-2.48 5.5-2.48 9.5v18.3h-5.77v-36h5.77v7.4h.14c.8-2.5 2-4.5 3.7-5.9 1.7-1.4 3.6-2.1 5.6-2.1 1.5 0 2.6.2 3.4.5v6zm6.65-15c-1.03 0-1.9-.3-2.64-1-.73-.7-1.1-1.6-1.1-2.6 0-1.1.37-1.9 1.1-2.7.73-.7 1.6-1 2.64-1 1.05 0 1.95.4 2.7 1.1.73.7 1.1 1.6 1.1 2.7 0 1-.37 1.9-1.1 2.7-.75.7-1.65 1.1-2.7 1.1zm2.8 45.2h-5.76v-36H225v36zm9.3-5.2h-.13v21.7h-5.77V16.7h5.77V23h.14c2.9-4.8 7-7.18 12.5-7.18 4.7 0 8.3 1.6 10.9 4.8 2.6 3.24 3.9 7.56 3.9 12.98 0 6.02-1.4 10.85-4.4 14.47-2.9 3.62-6.9 5.43-12 5.43-4.6 0-8.2-2.02-10.8-6.05zm-.13-14.5v5c0 3 .97 5.5 2.9 7.6s4.4 3.1 7.37 3.1c3.5 0 6.23-1.3 8.2-4 2-2.6 2.98-6.4 2.98-11.1 0-4-.93-7.1-2.78-9.4-1.85-2.2-4.36-3.4-7.52-3.4-3.35 0-6.05 1.2-8.1 3.5-2.03 2.3-3.05 5.3-3.05 8.8zm48.93 19.4c-1.37.8-3.16 1.2-5.4 1.2-6.3 0-9.45-3.5-9.45-10.5V21.6h-6.2v-4.93h6.2v-8.8L274.02 6v10.65h9.07v4.92H274v20.28c0 2.4.4 4.14 1.23 5.17.82 1.03 2.18 1.55 4.08 1.55 1.5 0 2.7-.4 3.8-1.2v4.93z"/>`},G={selector:"github-logo",viewBox:"0 0 28 27",template:`<path fill-rule="evenodd" d="M26.1 6.9c-1.26-2.12-2.95-3.8-5.1-5.03C18.87.64 16.53.02 14 .02c-2.55 0-4.9.62-7.03 1.85-2.15 1.24-3.84 2.9-5.1 5.03C.64 9 0 11.32 0 13.82c0 3 .9 5.7 2.67 8.12 1.78 2.4 4.07 4.06 6.9 4.98.32.06.56.02.72-.12.1-.15.2-.33.2-.54V23.7l-.4.03c-.3.05-.66.07-1.06.06-.4 0-.83-.06-1.27-.1-.43-.1-.83-.3-1.2-.58-.38-.28-.65-.65-.8-1.1l-.2-.42c-.1-.27-.3-.57-.57-.9-.25-.3-.5-.55-.8-.67l-.1-.1c-.1-.05-.17-.12-.24-.2-.1-.1-.15-.17-.2-.26 0-.08 0-.15.1-.2.1-.06.3-.08.54-.08l.37.02c.24.05.54.2.9.43.36.24.65.55.9.94.26.5.6.9 1 1.14.4.26.8.38 1.2.38.4 0 .73-.02 1.02-.1.3-.03.55-.13.8-.24.1-.8.4-1.44.9-1.88-.7-.06-1.3-.17-1.87-.3-.56-.15-1.13-.4-1.7-.7-.6-.33-1.1-.74-1.5-1.2-.4-.5-.7-1.12-.95-1.9-.26-.78-.4-1.68-.4-2.7 0-1.45.5-2.68 1.45-3.7-.45-1.1-.4-2.3.13-3.66.36-.1.88-.03 1.57.24.7.28 1.2.5 1.5.7.33.2.6.35.8.5 1.1-.33 2.27-.48 3.5-.48 1.2 0 2.34.14 3.47.46l.7-.43c.47-.3 1.03-.56 1.67-.8.64-.24 1.13-.3 1.47-.2.56 1.36.6 2.58.16 3.67.96 1 1.44 2.24 1.44 3.7 0 1-.1 1.9-.35 2.7-.26.8-.58 1.4-.98 1.9-.4.46-.9.86-1.47 1.2-.6.3-1.15.54-1.7.7-.56.12-1.18.23-1.87.3.64.54.95 1.4.95 2.56v3.8c0 .2.08.38.23.53.15.13.4.17.7.1 2.84-.9 5.13-2.57 6.9-4.97 1.8-2.4 2.68-5.1 2.68-8.12 0-2.5-.63-4.8-1.88-6.9z"/>`},k={selector:"npm-logo",viewBox:"0 0 80 32",template:`<g><path d="M79.64 0H.24C.04 0 0 .06 0 .24v26.62c.14.17.34.12.5.12h20.83c.64 0 .72.08.72.73V31c-.02.14.03.28.13.38h17.75c.1-.1.15-.24.13-.38v-3.4c0-.42.13-.53.55-.55h39c.1 0 .3-.04.3-.13V.22c0-.17 0-.23-.2-.23zm-57.9 22.38h-3.56c-.4 0-.43-.02-.43-.43V9.37c0-.38-.03-.4-.4-.4h-3.6c-.4 0-.44 0-.44.42v12.5c0 .3 0 .4-.4.4h-8c-.3 0-.4-.1-.4-.4v-17c0-.4.1-.5.4-.5h16.9c.5 0 .5.02.5.46v17c0 .44 0 .46-.42.46zm22.07 0H36c-.45 0-.46 0-.46.47v3.6c0 .38-.02.4-.4.4H27.1c-.4 0-.43-.02-.43-.4V4.72c0-.07.02-.14.07-.18.03-.05.1-.07.17-.06h17.2c.2 0 .3.1.3.3v17.04c0 .54 0 .54-.5.54zm31.1 0h-3.4c-.5 0-.4 0-.4-.48 0-4.1.1-8.18.1-12.28v-.15c0-.5-.03-.5-.53-.5h-3.5c-.43 0-.46 0-.46.44V22c0 .44-.02.46-.45.46h-3.6c-.43 0-.44-.02-.44-.45V9.4c0-.42-.03-.44-.43-.44h-3.6c-.4 0-.42.02-.42.43v12.5c0 .3-.02.4-.4.4h-8.1c-.36 0-.4-.1-.4-.4v-17c0-.4.04-.4.44-.4h25.9c.2 0 .24 0 .24.2l-.03.23v16.9c0 .54.08.54-.5.54z"/><path d="M39.53 8.96H35.9c-.38 0-.4.03-.4.4v8.14c0 .38.02.4.4.4h3.62c.37 0 .4-.02.4-.4V9.37c0-.38-.02-.4-.4-.4z"/></g>`},W={selector:"twitter-logo",viewBox:"0 0 36 30",template:`<path d="M36 3.54c-1.33.6-2.75 1-4.24 1.18 1.52-.93 2.7-2.4 3.25-4.17-1.4.87-3 1.5-4.7 1.83C29 .92 27.1 0 24.97 0c-4.08 0-7.38 3.38-7.38 7.55 0 .6.06 1.16.2 1.72-6.15-.32-11.6-3.32-15.23-7.9-.63 1.12-1 2.42-1 3.8 0 2.62 1.3 4.93 3.3 6.28-1.22-.04-2.35-.38-3.35-.94v.1c0 3.7 2.54 6.7 5.9 7.4-.62.2-1.27.3-1.94.3-.48 0-.94-.04-1.4-.13.95 3 3.67 5.18 6.9 5.24-2.52 2-5.7 3.2-9.17 3.2-.6 0-1.2-.02-1.78-.1 3.27 2.16 7.15 3.4 11.32 3.4 13.6 0 21-11.5 21-21.5v-.94c1.44-1.06 2.7-2.4 3.68-3.9z"/>`},K={selector:"material-triangle",viewBox:"0 0 100 100",template:`<path fill-rule="evenodd" d="M50 0l50 100H0"/>`},Y={selector:"material-rectangle",viewBox:"0 0 919 887",template:`<path fill-rule="evenodd" d="M247.8 15.8H671v855.5H248z" opacity=".1"/>`},j={selector:"browser-frame",viewBox:"0 0 712 402",template:`<g fill="none"><path fill="#ECF0F1" d="M0 69.5h711.8v329.7c0 1-1 2-2 2H2c-1 0-2-1-2-2V69.5z"/><path fill="#546A79" d="M0 2c0-1 1-2 2-2h707.8c1 0 2 1 2 2v67.5H0V2z"/><g transform="translate(19 19)"><ellipse cx="15.8" cy="15.7" fill="#ED7161" rx="14.9" ry="14.9"/><ellipse cx="60.4" cy="15.7" fill="#EFC41A" rx="14.9" ry="14.9"/><ellipse cx="105.1" cy="15.7" fill="#4FBA6E" rx="14.9" ry="14.9"/></g></g>`},Z="0 0 24 24",X={selector:"heart-fill",viewBox:Z,template:`<path d="M12 21.4L10.6 20C5.4 15.4 2 12.3 2 8.5 2 5.5 4.4 3 7.5 3c1.7 0 3.4.8 4.5 2 1-1.2 2.8-2 4.5-2 3 0 5.5 2.4 5.5 5.5 0 3.8-3.4 7-8.6 11.5L12 21.4z"/>`},z={selector:"menu",viewBox:Z,template:`<path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />`};var $;(function(cn){cn[cn.ANDROID_STOCK=0]="ANDROID_STOCK",cn[cn.BLACKBERRY=1]="BLACKBERRY",cn[cn.CHROME=2]="CHROME",cn[cn.EDGE=3]="EDGE",cn[cn.FIREFOX=4]="FIREFOX",cn[cn.FIREFOX_MOBILE=5]="FIREFOX_MOBILE",cn[cn.IE=6]="IE",cn[cn.IE_MOBILE=7]="IE_MOBILE",cn[cn.OPERA=8]="OPERA",cn[cn.OPERA_MINI=9]="OPERA_MINI",cn[cn.OPERA_MOBILE=10]="OPERA_MOBILE",cn[cn.SAFARI=11]="SAFARI",cn[cn.SAMSUNG_INTERNET=12]="SAMSUNG_INTERNET",cn[cn.UC_BROWSER=13]="UC_BROWSER",cn[cn.UNKNOWN=14]="UNKNOWN"})($||($={}));var ee;(function(cn){cn[cn.ANDROID=0]="ANDROID",cn[cn.IOS=1]="IOS"})(ee||(ee={}));class ie{}let ae=class extends HTMLElement{constructor(){super(),this.role="presentation",this.tabindex="-1",this.cachedElementLookups=new Map,this.injectTemplate()}get domRoot(){return null==this.shadowRoot?this:this.shadowRoot}static styles(){return null}static markup(){return null}injectTemplate(){const pn=this.constructor;if(null!=pn.template){const gn=this.attachShadow({mode:"open"}),mn=document.importNode(pn.template.content,!0);gn.appendChild(mn)}}element(pn){const gn=this.getCachedElement(pn);if(null!=gn)return gn;const mn=null==this.shadowRoot?this.querySelector(`#${pn}`):this.shadowRoot.querySelector(`#${pn}`);return null==mn?this.setCachedElement(pn,null==this.shadowRoot?document.querySelector(pn):this.shadowRoot.querySelector(pn)):this.setCachedElement(pn,mn)}connectedCallback(){this.setAttribute("role",this.role),this.setAttribute("tabindex",this.tabindex)}disconnectedCallback(){}getCachedElement(pn){return this.cachedElementLookups.get(pn)}setCachedElement(pn,gn){return this.cachedElementLookups.set(pn,gn),gn}};ae.template=null,ae=a([s("component-element")],ae);let de=class extends ae{static get observedAttributes(){return["icon"]}static styles(){return`
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
			
			:host([brutal]) {
				width: var(--width-icon-brutal);
				height: var(--height-icon-brutal);
			}
			
		`}attributeChangedCallback(pn,gn,mn){switch(pn){case"icon":if(null!=mn){const hn=sn.buildIconFromName(mn);if(null==hn)throw ReferenceError(`Failed to build an SVG for icon: ${mn}`);this.svg=hn,this.setSvg(hn)}else this.svg=null,this.clearSvg();}}setSvg(pn){null==this.shadowRoot?this.appendChild(pn):this.shadowRoot.appendChild(pn)}clearSvg(){const pn=null==this.shadowRoot?this:this.shadowRoot,gn=pn.querySelector("svg");null==gn||pn.removeChild(gn)}};de=a([s("icon-element")],de);let re=class extends ae{constructor(){super(...arguments),this.role="navigation"}static styles(){return`
			
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
				display: block;
				top: 0;
				left: 0;
				right: 0;
				width: 100%;
				margin: 0;
				padding: 0;
				height: var(--app-bar-portrait-height-desktop);
				box-shadow: var(--shadow-level1);
				z-index: 998;
			}
			
			#menuItems {
				position: relative;
				display: flex;
				padding: 0 10px;
				margin: auto 0;
				height: 100%;
				flex-direction: row;
				align-content: center;
				justify-content: center;
				width: 100%;
			}
			
			#titleSlot::slotted(*) {
				user-select: none !important;
				font-size: var(--font-size-title) !important;
			}
			
			::slotted(*) {
				margin: auto 0 !important;
				color: var(--color-primary-text-light) !important;
				vertical-align: middle;
				line-height: 0 !important;
			}
			
			#menuItemSlot::slotted(*) {
				order: 3;
			}
			
			#titleSlot::slotted(*) {
				order: 1;
			}
	
			#leftIconSlot::slotted(*) {
				order: 0;
			}
			
			#rightIconSlot::slotted(*) {
				order: 4;
			}
			
			.flexer {
				flex-grow: 1;
				order: 2;
			}
		`}static markup(){return`
			
			<section id="menuItems">
				<slot id="leftIconSlot" class="iconSlot" name="leftIcon"></slot>
				<slot id="titleSlot" name="title"></slot>
				<div class="flexer"></div>
				<slot id="menuItemSlot" name="menuItem"></slot>
				<slot id="rightIconSlot" class="iconSlot" name="rightIcon"></slot>
			</section>
		`}};re=a([s("app-bar-element")],re);let se=class extends ae{constructor(){super(...arguments),this.pointerDown=!1,this.complexAnimating=!1,this.oneShotAnimating=!1,this.initialWaitTime=0.2,this.oneShotAnimationDuration=0.5,this.lastCoordinates=null}static get observedAttributes(){return["pointer-down"]}listenForTarget(pn){rn.listen(this,"click",pn,this.onPointerTap),rn.listen(this,"pointerdown",pn,this.onPointerDown),rn.listen(this,"pointerup",pn,this.onPointerUp),rn.listen(this,"pointercancel",pn,this.onPointerCancel),rn.listen(this,"pointerleave",pn,this.onPointerLeave)}unlistenFromTarget(pn){rn.unlisten(this,"click",pn,this.onPointerTap),rn.unlisten(this,"pointerdown",pn,this.onPointerDown),rn.unlisten(this,"pointerup",pn,this.onPointerUp),rn.unlisten(this,"pointercancel",pn,this.onPointerCancel),rn.unlisten(this,"pointerleave",pn,this.onPointerLeave)}async onPointerDown({offsetX:pn,offsetY:gn,width:mn,height:hn}){this.lastCoordinates=-1===mn&&-1===hn?null:{offsetX:pn,offsetY:gn},this.pointerDown||(this.pointerDown=!0,this.setAttribute("pointer-down",""))}async onPointerUp(){this.pointerDown&&(this.pointerDown=!1,this.hasAttribute("pointer-down")&&this.removeAttribute("pointer-down"))}async onPointerCancel(){await this.onPointerUp()}async onPointerLeave(){await this.onPointerUp()}async onPointerTap(){this.complexAnimating||(this.oneShotAnimating?await this.attributeChangedCallback("one-shot-animating","true","true"):(this.oneShotAnimating=!0,this.setAttribute("one-shot-animating","")))}connectedCallback(){super.connectedCallback();const pn=this.getRootNode().host;null==this.target&&null!=pn&&(this.target=pn,this.listenForTarget(this.target))}async attributeChangedCallback(pn){return"pointer-down"===pn?await this.onPointerDownChanged(this.pointerDown):void 0}async onPointerDownChanged(pn){pn&&(await ln.wait(1e3*this.initialWaitTime),this.pointerDown&&!this.oneShotAnimating&&(this.complexAnimating=!0,this.setAttribute("complex-animating","")))}};se=a([s("feedback-composite")],se);let le=ue=class extends se{constructor(){super(...arguments),this.rippleEasing="linear",this.highlightAmount=ue.HIGHLIGHT_AMOUNT,this.rippleHighlightAmount=ue.RIPPLE_HIGHLIGHT_AMOUNT,this.highlightDuration=0.7,this.rippleDuration=5}static get observedAttributes(){return["light","one-shot-animating","complex-animating","pointer-down"]}static markup(){return`<aside id="highlight"></aside>`}static styles(){return`

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
		`}async animateOneShot(pn){null==pn&&(pn=await this.createAndAddRipple());null==pn||(await Promise.all([un.animate(pn,{opacity:[this.rippleHighlightAmount,0],transform:["scale(0) translateZ(0)","scale(1) translateZ(0)"]},{duration:1e3*this.oneShotAnimationDuration,easing:this.rippleEasing}),null==this.element("highlight")?Promise.resolve():un.animate(this.element("highlight"),{opacity:[0,this.highlightAmount,0]},{duration:1e3*this.oneShotAnimationDuration,easing:this.rippleEasing})]),this.clearRipple(pn))}async attributeChangedCallback(pn,gn,mn){await super.attributeChangedCallback(pn,gn,mn);"light"===pn?mn&&(this.rippleHighlightAmount=ue.RIPPLE_LIGHT_HIGHLIGHT_AMOUNT,this.highlightAmount=ue.HIGHLIGHT_LIGHT_AMOUNT):"one-shot-animating"===pn?this.oneShotAnimating&&(await Promise.all([this.animateOneShot(),this.whenAllRipplesHasFinishedAnimating()]),this.oneShotAnimating=!1,this.hasAttribute("one-shot-animating")&&this.removeAttribute("one-shot-animating")):"complex-animating"===pn?this.complexAnimating&&(await this.animateIn()):"pointer-down"===pn?!this.complexAnimating||this.pointerDown||this.oneShotAnimating||(await this.animateOut(),this.complexAnimating=!1,this.hasAttribute("complex-animating")&&this.removeAttribute("complex-animating")):void 0}connectedCallback(){super.connectedCallback(),null!=this.target&&this.prepareTarget(this.target)}getTargetDimensions(){return null==this.target?void 0:this.target.getBoundingClientRect()}computeRippleDimensions(){const pn=this.getTargetDimensions();if(null==pn)return;const{width:gn,height:mn}=pn;let hn=_Mathmax(gn,mn)+_Mathmax(gn,mn)/2;if(null!=this.lastCoordinates&&!this.hasAttribute("center")){const En=_Mathabs(gn/2-this.lastCoordinates.offsetX),An=_Mathabs(mn/2-this.lastCoordinates.offsetY);hn+=En+An+ue.RIPPLE_ADDITIONAL_SIZE}return{width:gn,height:mn,size:hn}}getRippleStyles(){const pn=this.computeRippleDimensions();if(null!=pn){const{width:gn,height:mn,size:hn}=pn,En=this.hasAttribute("center")||null==this.lastCoordinates?mn/2-hn/2:this.lastCoordinates.offsetY-hn/2,An=this.hasAttribute("center")||null==this.lastCoordinates?gn/2-hn/2:this.lastCoordinates.offsetX-hn/2;return[{prop:"top",value:`${En}px`},{prop:"left",value:`${An}px`},{prop:"width",value:`${hn}px`},{prop:"height",value:`${hn}px`}]}}createRipple(){const pn=this.getRippleStyles();if(null==pn)throw new ReferenceError(`RippleComposite could not get styles for undefined target!`);const gn=document.createElement("div");return pn.forEach((mn)=>gn.style[mn.prop]=mn.value),gn}async whenAllRipplesHasFinishedAnimating(){if(null!=this.lastRipple)return await ln.wait(100),await this.whenAllRipplesHasFinishedAnimating()}clearRipple(pn){null!=this.shadowRoot&&this.shadowRoot.contains(pn)&&(this.shadowRoot.removeChild(pn),this.lastRipple===pn&&(this.lastRipple=null))}async createAndAddRipple(){const pn=this.createRipple();return null==pn?null:(null==this.shadowRoot?this.appendChild(pn):this.shadowRoot.appendChild(pn),this.lastRipple=pn,await ln.wait(ue.ANIMATION_FRAME_DELAY),pn)}async animateHighlightIn(){await un.animate(this.element("highlight"),{opacity:[0,this.highlightAmount]},{duration:1e3*this.highlightDuration,easing:this.rippleEasing,fill:"forwards"})}async animateHighlightOut(){let pn=window.getComputedStyle(this.element("highlight")).opacity;null==pn&&(pn=this.highlightAmount),await un.animate(this.element("highlight"),{opacity:[pn,0]},{duration:1e3*this.oneShotAnimationDuration,easing:this.rippleEasing,fill:"forwards"})}async animateIn(){if(await this.animateHighlightIn(),!!this.pointerDown){const pn=await this.createAndAddRipple();null==pn||(await un.animate(pn,{opacity:[this.rippleHighlightAmount,0],transform:["scale(0) translateZ(0)","scale(1) translateZ(0)"]},{duration:1e3*this.rippleDuration,easing:this.rippleEasing}))}}async animateOut(){if(null==this.lastRipple)return await this.animateHighlightOut();const pn=window.getComputedStyle(this.lastRipple),gn=null==pn.opacity?this.rippleHighlightAmount:pn.opacity,mn=null==pn.transform?"scale(0) translateZ(0)":pn.transform;await Promise.all([un.animate(this.lastRipple,{opacity:[gn,0],transform:[mn,"scale(1) translateZ(0)"]},{duration:1e3*this.oneShotAnimationDuration,easing:this.rippleEasing}),this.animateHighlightOut()]),this.clearRipple(this.lastRipple)}prepareTarget(pn){pn.style.overflow=pn.style.overflow||"hidden"}};le.RIPPLE_ADDITIONAL_SIZE=50,le.ANIMATION_FRAME_DELAY=20,le.RIPPLE_HIGHLIGHT_AMOUNT=0.3,le.HIGHLIGHT_AMOUNT=0.2,le.RIPPLE_LIGHT_HIGHLIGHT_AMOUNT=0.18,le.HIGHLIGHT_LIGHT_AMOUNT=0.08,le=ue=a([s("ripple-composite")],le);var ue,fe;(function(cn){cn[cn.SPACEBAR=32]="SPACEBAR",cn[cn.HTML_SPACE=160]="HTML_SPACE",cn[cn.ENTER=13]="ENTER",cn[cn.BACKSPACE=8]="BACKSPACE",cn[cn.TAB=9]="TAB",cn[cn.LEFT_COMMAND_OR_WINDOWS_KEY=91]="LEFT_COMMAND_OR_WINDOWS_KEY",cn[cn.RIGHT_COMMAND_OR_WINDOWS_MENU=93]="RIGHT_COMMAND_OR_WINDOWS_MENU",cn[cn.ALT=18]="ALT",cn[cn.CONTROL=17]="CONTROL",cn[cn.SHIFT=16]="SHIFT",cn[cn.LEFT_ARROW=37]="LEFT_ARROW",cn[cn.UP_ARROW=38]="UP_ARROW",cn[cn.RIGHT_ARROW=39]="RIGHT_ARROW",cn[cn.DOWN_ARROW=40]="DOWN_ARROW",cn[cn.ESCAPE=27]="ESCAPE",cn[cn.ZERO=48]="ZERO",cn[cn.ONE=49]="ONE",cn[cn.TWO=50]="TWO",cn[cn.THREE=51]="THREE",cn[cn.FOUR=52]="FOUR",cn[cn.FIVE=53]="FIVE",cn[cn.SIX=54]="SIX",cn[cn.SEVEN=55]="SEVEN",cn[cn.EIGHT=56]="EIGHT",cn[cn.NINE=57]="NINE"})(fe||(fe={}));let ce=pe=class extends ae{constructor(){super(...arguments),this.pointerInitiated=!1}styles(){return`
			:host {
				display: none;
			}
		`}listenForTarget(pn){rn.listen(this,"pointerdown",pn,this.onTargetPointerDown),rn.listen(this,"keydown",pn,this.onTargetKeyDown,!1),rn.listen(this,"focus",pn,this.onTargetGotFocus),rn.listen(this,"blur",pn,this.onTargetLostFocus)}unlistenFromTarget(pn){rn.unlisten(this,"pointerdown",pn,this.onTargetPointerDown),rn.unlisten(this,"keydown",pn,this.onTargetKeyDown),rn.unlisten(this,"focus",pn,this.onTargetGotFocus),rn.unlisten(this,"blur",pn,this.onTargetLostFocus)}connectedCallback(){super.connectedCallback();const pn=this.getRootNode().host;null==this.target&&null!=pn&&(this.target=pn,null==this.actionTarget&&(this.actionTarget=this.target),this.listenForTarget(this.target))}onTargetKeyDown(pn){switch(pn.keyCode){case fe.SPACEBAR:pn.preventDefault(),this.fireClickEventOnActionTarget();}}async onTargetPointerDown(pn){pn===this.lastFiredPointerDownEvent||(this.pointerInitiated=!0,null!=this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.timeout=setTimeout(()=>{this.pointerInitiated=!1,this.timeout=null},pe.POINTER_INITIATED_DELAY))}fireClickEventOnActionTarget(){if(null!=this.target&&null!=this.actionTarget){this.target.focus();const pn=new MouseEvent("click");this.actionTarget.dispatchEvent(pn)}}firePointerDownEventOnTarget(){if(null!=this.target){const pn=new PointerEvent("pointerdown",{width:-1,height:-1});this.lastFiredPointerDownEvent=pn,this.target.dispatchEvent(pn),this.target.focus()}}firePointerUpEventOnTarget(){if(null!=this.target){const pn=new PointerEvent("pointerup");this.target.dispatchEvent(pn),this.target.blur()}}async onTargetGotFocus(){this.pointerInitiated||this.firePointerDownEventOnTarget()}async onTargetLostFocus(){this.firePointerUpEventOnTarget()}};ce.POINTER_INITIATED_DELAY=1e3,ce=pe=a([s("focusable-composite")],ce);var pe;let ge=class extends ae{constructor(){super(...arguments),this.tabindex="0",this.role="button"}static markup(){return`
			<slot></slot>
			<ripple-composite class="ripple" light></ripple-composite>
			<focusable-composite></focusable-composite>
		`}static styles(){return`

		:host-context([center]),
		:host([center]) {
			align-self: center;
			justify-self: center;
		}
		
		:host-context([round]),
		:host([round]) {
			border-radius: 50%;
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
			color: var(--color-primary-100) !important;
			font-size: var(--font-size-button) !important;
			line-height: var(--font-size-button) !important;
			font-weight: var(--font-weight-button) !important;
		}
		
		:host-context([large-text]),
		:host([large-text]) {
			font-size: var(--font-size-title) !important;
		}
		
		:host-context([keep-case]) ::slotted(*),
		:host([keep-case]) ::slotted(*) {
			text-transform: none;
		}
		
		::slotted(*) {
			color: inherit !important;
			font-size: inherit !important;
			line-height: inherit !important;
			font-weight: inherit !important;
			pointer-events: none;
			cursor: pointer !important;
			text-transform: uppercase;
		}
		
		::slotted(icon-element) {
			fill: var(--color-icon-dark);
		}
		
		.ripple {
			color: var(--color-primary-100);
		}
		
		:host(:not([no-background])[primary]) {
			background: var(--color-primary-100);
		}
		
		:host([primary]) .ripple {
			color: var(--color-white-70);
		}
		
		:host(:not([no-background])[primary]:hover) {
			background: var(--color-primary-120) !important;
		}
		
		:host([primary]) ::slotted(*) {
			color: var(--color-primary-text-light) !important;
		}
		
		:host([primary]) ::slotted(icon-element) {
			fill: var(--color-icon-light) !important;
		}
			
		:host(:not([no-background])[accent]) {
			background: var(--color-accent-100);
		}
		
		:host([accent]) .ripple {
			color: var(--color-white-70);
		}
		
		:host(:not([no-background])[accent]:hover) {
			background: var(--color-accent-120);
		}
		
		:host([accent]) ::slotted(*) {
			color: var(--color-primary-text-light) !important;
		}
		
		:host([accent]) ::slotted(icon-element) {
			fill: var(--color-icon-light) !important;
		}
			
		:host(:not([no-background])[dark]) {
			background: var(--color-black-70);
		}
		
		:host([dark]) .ripple {
			color: var(--color-white-70);
		}
		
		:host(:not([no-background])[dark]:hover) {
			background: var(--color-black-87);
		}
		
		:host([dark]) ::slotted(*) {
			color: var(--color-primary-text-light) !important;
		}
		
		:host([dark]) ::slotted(icon-element) {
			fill: var(--color-icon-light) !important;
		}
			
		:host(:not([no-background])[light]) {
			background: var(--color-white-100);
		}
		
		:host([light]) .ripple {
			color: var(--color-icon-dark);
		}
		
		:host(:not([no-background])[light]:hover) {
			background: var(--color-white-87);
		}
		
		:host([light]) ::slotted(*) {
			color: var(--color-primary-text-dark) !important;
		}
		
		:host([light]) ::slotted(icon-element) {
			fill: var(--color-icon-dark) !important;
		}
		
		:host(:not([no-background])[warning]) {
			background: var(--color-red-100);
		}
		
		:host(:not([no-background])[warning]:hover) {
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
		
		:host(:not([no-background]):hover) {
			background: var(--color-black-06);
		}

		:host[disabled] {
			pointer-events: none;
			opacity: .6;
		}
		`}};ge=a([s("button-element")],ge);let me=class extends ae{static styles(){return`
			:host {
				position: relative;
				display: flex;
				flex-direction: column;
				align-content: center;
				justify-content: center;
				padding-top: 3px;
			}
			
			:host(:hover) hr {
				visibility: visible;
				opacity: 1;
			}

			::slotted(*) {
				font-size: var(--font-size-subheading) !important;
				color: var(--color-primary-text-light) !important;
			}
			
			button-element {
				width: inherit;
			}
			
			hr {
				visibility: hidden;
				opacity: 0;
				transition: opacity var(--duration-medium) var(--easing-standard-curve);
				display: block;
				position: relative;
				height: 3px;
				background-color: var(--color-primary-text-light);
			}
		`}static markup(){return`
			<button-element dark keep-case no-background>
				<slot></slot>
			</button-element>
			<hr>
		`}};me=a([s("app-bar-item-element")],me);let he=class extends ae{constructor(){super(...arguments),this.role="link",this.tabindex="0"}get opensInNewWindow(){const pn=this.getAttribute("target");return"_blank"===pn}static styles(){return`
			:host {
				color: var(--color-primary-100);
				font-size: var(--font-size-body);
    		line-height: var(--line-height-body);
    		font-weight: var(--font-weight-body);
			}
			
			:host, a {
				cursor: pointer;
				user-select: text !important;
			}

			a {
    		text-decoration: none;
    		font-family: var(--font-family), sans-serif;
    		user-select: none;
    		text-rendering: var(--font-rendering);
    		margin: 0;
    		font-size: inherit;
    		line-height: inherit;
    		font-weight: inherit;
    		color: inherit;
    		transition: color var(--duration-short) var(--easing-standard-curve);
			}
			
			:host:hover a, :host:focus a,
			a:hover, a:focus {
				color: var(--color-primary-120) !important;
			}
		`}static markup(){return`
			<a><slot></slot></a>
		`}connectedCallback(){super.connectedCallback();const pn=this.element("a"),gn=this.getAttribute("href"),mn=this.getAttribute("target");null!=gn&&pn.setAttribute("href",gn),pn.setAttribute("target",null==mn?"_self":mn),this.listenForClicks()}onClicked(pn){if(!this.opensInNewWindow){pn.preventDefault(),pn.stopPropagation();const gn=this.getAttribute("href");null!=gn&&fn.navigate(gn)}}listenForClicks(){this.element("a").addEventListener("click",(pn)=>this.onClicked(pn))}};he=a([s("anchor-element")],he);let Ee=class extends ae{constructor(){super(...arguments),this.role="navigation"}static styles(){return`
		
			#githubItem {
				width: 46px;
				margin-left: var(--distance-minimum);
				display: none;
			}
			
			#logoItem {
				margin-left: var(--distance-minimum);
				width: 46px;
			}
			
			#logoItem > p {
				display: none;
			}
			
			app-bar-item-element {
				width: 80px;
			}
			
			@media screen and (min-width: 427px) {
				#githubItem {
					display: block;
				}
			}
			
			
			@media screen and (min-width: 440px) {
			
				#logoItem {
					width: 110px;
					margin-left: 0;
				}
				
				#logoItem > p {
					display: block;
				}
				
				#logoItem > icon-element {
					margin-right: var(--distance-minimum);
				}
			}
		`}static markup(){return`
			<app-bar-element primary>
				<anchor-element href="/" target="_self" slot="title">
					<app-bar-item-element id="logoItem" large-text>
						<icon-element icon="fovea-logo" light medium></icon-element>
						<p>Fovea</p>
					</app-bar-item-element>
				</anchor-element>
				<anchor-element href="https://github.com/wessberg/" target="_blank" slot="rightIcon">
					<app-bar-item-element id="githubItem" round>
						<icon-element icon="github-logo" light medium></icon-element>
					</app-bar-item-element>
				</anchor-element>
			</app-bar-element>
		`}connectedCallback(){super.connectedCallback(),this.addPages()}getMenuItem(pn){const gn=document.createElement("anchor-element");gn.setAttribute("href",pn.name),gn.setAttribute("target","_self"),gn.setAttribute("slot","menuItem");const mn=document.createElement("app-bar-item-element"),hn=document.createElement("p");return hn.innerText=pn.title,mn.appendChild(hn),gn.appendChild(mn),gn}addPages(){const pn=this.element("app-bar-element");tn.pages.forEach((gn)=>pn.appendChild(this.getMenuItem(gn)))}};Ee=a([s("fovea-app-bar-element")],Ee);let Ae=Ie=class extends ae{constructor(){super(...arguments),this.role="application"}static styles(){return`
			:host {
				transform: translate3d(0,0,0);
				backface-visibility: hidden;
				box-sizing: border-box;
				contain: content;
				position: relative;
				display: block;
				width: 100%;
				height: 100vh;
			}
		`}static markup(){return`
			<fovea-app-bar-element></fovea-app-bar-element>
			<slot></slot>
		`}connectedCallback(){super.connectedCallback(),rn.fire(Ie.READY_EVENT_NAME,g,this)}};Ae.READY_EVENT_NAME="ATTACHED_FRAME",Ae=Ie=a([s("frame-element")],Ae);var Ie,be;(function(cn){cn[cn.DEVELOPMENT=0]="DEVELOPMENT",cn[cn.STAGING=1]="STAGING",cn[cn.PRODUCTION=2]="PRODUCTION"})(be||(be={}));const ve={KIND:function(cn){switch(cn.toLowerCase()){case"staging":case"beta":return be.STAGING;case"production":case"live":case"release":return be.PRODUCTION;case"development":case"alpha":default:return be.DEVELOPMENT;}}(f.env.NODE_ENV||"development"),NODE_ENV:f.env.NODE_ENV||"development",TEST:"true"===f.env.TEST||!0===f.env.TEST||f.env.npm_config_test||!1,MOBILE:"true"===f.env.MOBILE||!0===f.env.MOBILE||f.env.npm_config_mobile||!1,SERVE:"true"===f.env.SERVE||!0===f.env.SERVE||"true"===f.env.npm_config_serve||!1,TLS:"true"===f.env.TLS||!0===f.env.TLS||"true"===f.env.npm_config_tls||!1,DEBUG:"true"===f.env.DEBUG||!0===f.env.DEBUG||"true"===f.env.npm_config_debug||!1},Oe={PRODUCTION:ve.KIND===be.PRODUCTION,DEVELOPMENT:ve.KIND===be.DEVELOPMENT,STAGING:ve.KIND===be.STAGING,TEST:ve.TEST,MOBILE:ve.MOBILE,DEBUG:ve.DEBUG};class Re{constructor(cn){this.routeHistoryListener=cn,this.uid=0,this.didRequestNavigation=!1,this.uidMap=new Map,this.listenForPopstate()}async forward(){history.forward(),await this.routeHistoryListener.onNavigateTo(this.getRouteForUid(this.uid-1))}async back(){history.back(),await this.routeHistoryListener.onNavigateTo(this.getRouteForUid(this.uid-2))}async addState(cn){this.uidMap.set(this.uid,cn),history.pushState({uid:this.uid},cn.title,cn.path),this.uid++,await this.forward()}getRouteForUid(cn=this.uid){const pn=this.uidMap.get(cn);if(null==pn)throw new ReferenceError(`${this.constructor.name} could not get a route for uid: ${cn}`);return pn}async onStateChanged({uid:cn}){this.uid=cn,await this.routeHistoryListener.onNavigateTo(this.getRouteForUid(cn))}listenForPopstate(){g.addEventListener(Re.POPSTATE_EVENT_NAME,async(cn)=>{this.didRequestNavigation?this.didRequestNavigation=!1:await this.onStateChanged(null==cn.state?{uid:_Mathmax(0,this.uid-1)}:cn.state)})}}Re.POPSTATE_EVENT_NAME="popstate";let we=class extends ae{constructor(){super(...arguments),this.role="complementary"}static styles(){return`

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
		
		::slotted(*) {
			user-select: text !important;
		}
		
		::slotted(button-element),
		::slotted(anchor-element) {
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
		
	`}static markup(){return`
			<slot></slot>
		`}};we=a([s("card-element")],we);let Ne=class extends ae{constructor(){super(...arguments),this.role="complementary"}static markup(){return`
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
		`}static styles(){return`

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
		`}};Ne=a([s("highlights-element")],Ne);let Se=De=class extends ae{constructor(){super(),this.role="list",dn.isIOSDevice&&!De.BOUND_BODY_LISTENER&&(De.BOUND_BODY_LISTENER=!0,rn.listen(this,"touchmove",document.body,De.onBodyTouchMove,!1))}static markup(){return`<slot></slot>`}static styles(){return`

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
		`}static onBodyTouchMove(pn){if(pn.cancelable&&!pn._isScroller)return pn.preventDefault()}async connectedCallback(){super.connectedCallback(),this.listenForScrollTarget(this),await this.connectScroller()}disconnectedCallback(){super.disconnectedCallback(),this.unlistenForScrollTarget(this)}async connectScroller(){dn.isIOSDevice&&(await ln.wait(1e3),this.style.webkitOverflowScrolling="touch")}listenForScrollTarget(pn){dn.isIOSDevice&&(rn.listen(this,"touchstart",pn,this.onScrollTargetTouchstart),rn.listen(this,"touchmove",pn,this.onScrollTargetTouchmove))}unlistenForScrollTarget(pn){dn.isIOSDevice&&(rn.unlisten(this,"touchstart",pn,this.onScrollTargetTouchstart),rn.unlisten(this,"touchmove",pn,this.onScrollTargetTouchmove))}canScroll(pn){if(!(pn instanceof HTMLElement))return!1;if(pn.scrollHeight===pn.offsetHeight)throw new TypeError(`scrollTarget is either not visible or hasn't got a fixed height and display style property. Couldn't decide scrollability`);return pn.scrollHeight>pn.offsetHeight}fixScrollBounds(pn){if(pn instanceof HTMLElement){const{scrollTop:gn}=pn;0===gn?pn.scrollTop=1:gn+pn.offsetHeight===pn.scrollHeight&&(pn.scrollTop=gn-1)}}onScrollTargetTouchstart(pn){this.fixScrollBounds(pn.currentTarget)}onScrollTargetTouchmove(pn){this.canScroll(pn.currentTarget)&&(pn._isScroller=!0)}};Se.BOUND_BODY_LISTENER=!1,Se=De=a([s("scroll-element")],Se);var De;let Me=class extends ae{constructor(){super(...arguments),this.role="figure"}static styles(){return`
			:host-context([center]),
			:host([center]) {
				margin-left: auto;
				margin-right: auto;
				text-align: center;
			}
			
			:host([shadow]) {
				box-shadow: var(--shadow-level4);
			}

			:host {
				background: var(--color-dark-hex);
				border-radius: var(--box-radius);
				transform: translate3d(0,0,0);
				backface-visibility: hidden;
				margin: 0;
				padding: var(--distance-minimum);
				width: auto;
				position: relative;
				display: flex;
				contain: content;
				flex-direction: column;
				text-align: left;
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
		`}static markup(){return`
			<scroll-element direction="both">
				<slot></slot>
			</scroll-element>
		`}};Me=a([s("code-element")],Me);let _e=class extends ae{static styles(){return`
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
		`}static markup(){return`
			<icon-element id="triangle1" icon="material-triangle"></icon-element>
			<icon-element id="triangle2" icon="material-triangle"></icon-element>
		`}};_e=a([s("material-triangles-element")],_e);let Ce=class extends ae{constructor(){super(...arguments),this.role="banner"}static styles(){return`
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
		`}static markup(){return`
			<slot></slot>
			<material-triangles-element></material-triangles-element>
		`}};Ce=a([s("hero-element")],Ce);let Le=class extends ae{constructor(){super(...arguments),this.role="banner"}static markup(){return`
			<hero-element center>
				<icon-element icon="fovea-logo" extreme light></icon-element>
				<h3>Fovea</h3>
				<h5>Let's build a better web. For <strong>everyone.</strong></h5>
				<code-element>
					<pre>npm install @wessberg/fovea</pre>
				</code-element>
				<anchor-element href="/learn">
					<button-element primary shadow>
						<p>Get started</p>
					</button-element>
				</anchor-element>
			</hero-element>
		`}static styles(){return`
			h3, h5 {
				color: var(--color-primary-text-light);
			}
			
			h3, h5, strong {
				user-select:text;
			}
			
			h3 {
				font-weight: var(--font-weight-bold);
				line-height: 1;
			}
			
			h5 {
				padding: 0 var(--distance-minimum);
			}
			
			code-element {
				max-width: 392px;
				margin-bottom: var(--distance-regular);
			}
		`}};Le=a([s("home-hero-element")],Le);const Pe=`<!--
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
	-->
`;let Be=class extends ae{static styles(){return`
			:host {
				position: relative;
				text-align: center;
				width: 100%;
				max-width: var(--width-frame-max);
				justify-content: center;
				align-content: center;
				display: flex;
				flex-direction: column;
				margin: 0 auto;
			}
			
			card-element > p {
				margin: 20px 0;
			}
			
			card-element > anchor-element > button-element {
				width: 120px;
			}
			
			card-element > p,
			card-element > strong,
			card-element > h6 {
				user-select: text;
			}
			
			card-element,
			code-element {
				margin: var(--distance-minimum) auto;
				width: 100%;
				max-width: 369px;
				height: 100%;
			}
			
			@media screen and (min-width: 700px) {
			
				:host {
					flex-direction: row;
				}

				card-element,
				code-element {
					margin: 0 var(--distance-minimum);
					height: 500px;
					max-width: calc((100% / 2) - (var(--distance-minimum) * 2));
				}
			}
			
			@media screen and (min-width: 825px) {
	
				card-element,
				code-element {
					max-height: 450px;
				}
			}

		`}static markup(){return`
			<code-element shadow>${Pe}</code-element>
			<card-element>
				<h6>Data-binding has never been easier</h6>
				<p>
					Enjoy binding your data to the DOM will full autocompletion support from your editor. Bindings persist and change immediately when your model changes.
				</p>
				<strong>You can bind to anything</strong>
				<p>
					Not only can you bind complex data to elements and text nodes. Fovea comes with groundbreaking support for binding data to the CSS styles of individual view component instances. No serializing is going on. Instead, the values or references are passed directly. It just works!
				</p>
				<anchor-element href="/learn">
					<button-element>
						<p>Learn more</p>
					</button-element>
				</anchor-element>
			</card-element>
		`}};Be=a([s("data-binding-example-element")],Be);const xe=`<!--
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
	-->
`;let ye=class extends ae{static styles(){return`
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
			
			code-element {
				max-height: 150px;
				margin: auto;
				width: calc(100% - var(--width-icon-larger) - var(--distance-regular) );
			}

		`}static markup(){return`
			<icon-element icon="fovea-1" larger light></icon-element>
			<code-element center shadow>${xe}</code-element>
		`}};ye=a([s("precompile-example-element")],ye);const Fe=`<!--
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
	-->`;let He=class extends ae{static styles(){return`
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
			
			code-element {
				max-height: 150px;
				margin: auto;
				width: calc(100% - var(--width-icon-larger) - var(--distance-regular) );
			}

		`}static markup(){return`
			<icon-element icon="fovea-2" larger light></icon-element>
			<code-element center shadow>${Fe}</code-element>
		`}};He=a([s("postcompile-example-element")],He);let Ve=class extends ae{static styles(){return`
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
			
			icon-element {
				width: var(--height-icon-large);
				height: var(--width-icon-large);
			}
			
			h3 {
    			font-size: var(--font-size-display1);
				}
			
			@media screen and (min-width: 367px) {
				icon-element {
					width: var(--height-icon-larger);
					height: var(--width-icon-larger);
				}
				
				h3 {
    			font-size: var(--font-size-display2);
				}
			}
		`}static markup(){return`
			<icon-element id="fovea" icon="fovea-logo" larger primary></icon-element>
			<h3>+</h3>
			<icon-element id="rollup" icon="rollup-logo" larger></icon-element>
			<icon-element id="webpack" icon="webpack-logo" larger></icon-element>
			<h3>=</h3>
			<icon-element id="heart" icon="heart-fill" larger warning></icon-element>
		`}};Ve=a([s("fovea-rollup-webpack-element")],Ve);let Ue=class extends ae{constructor(){super(...arguments),this.role="complementary"}static styles(){return`
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
			
			card-element > anchor-element > button-element {
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
		`}static markup(){return`
			<section id="row1">
				<card-element>
						<h6>Works with your existing build tools</h6>
						<p>
							Fovea won’t ask you to change your tools, habits or the way you write code. Instead, Fovea is a simple plugin for your favorite bundler such as <anchor-element href="https://rollupjs.org/" target="_blank">rollup</anchor-element> or <anchor-element href="https://webpack.js.org/" target="_blank">webpack</anchor-element>.
						</p>
						<anchor-element href="/learn">
							<button-element>
								<p>Learn more</p>
							</button-element>
						</anchor-element>
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
						<anchor-element href="/learn">
							<button-element>
								<p>Learn more</p>
							</button-element>
						</anchor-element>
				</card-element>
			</section>
		`}};Ue=a([s("tools-element")],Ue);let Ge=class extends ae{constructor(){super(...arguments),this.role="complementary"}static styles(){return`
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
				user-select: text;
			}
			
			
		`}static markup(){return`
			<h4>Summary</h4>
			<data-binding-example-element></data-binding-example-element>
			<h5>Fovea takes this:</h5>
			<precompile-example-element></precompile-example-element>
			<h5>And compiles it into this:</h5>
			<postcompile-example-element></postcompile-example-element>
		`}};Ge=a([s("summary-element")],Ge);let ke=class extends ae{constructor(){super(...arguments),this.role="contentinfo"}static styles(){return`
			
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
				align-content: space-around;
				justify-content: space-around;
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
			
			.rowSlot::slotted(*) {
				font-size: var(--font-size-caption) !important;
			}
			
			.rowSlot::slotted(anchor-element) {
				color: var(--color-white-100) !important;
			}
			
			.rowSlot::slotted(anchor-element:hover),
			.rowSlot::slotted(anchor-element:focus) {
				color: var(--color-primary-100) !important;
			}
			
			#logoSlot::slotted(*) {
				display: none;
				margin: auto 0 auto var(--distance-regular);
			}
			
			@media screen and (min-width: 415px) {
				#logoSlot::slotted(*) {
					display: block;
				}
				
				#wrapper {
					align-content: flex-start;
					justify-content: flex-start;
				}
			}
			
			@media screen and (min-width: 677px) {
				#wrapper {
					align-content: space-around;
					justify-content: space-around;
				}
			}
			
		`}static markup(){return`
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
		`}};ke=a([s("app-footer-element")],ke);let We=class extends ae{constructor(){super(...arguments),this.role="contentinfo"}static styles(){return``}static markup(){return`
			<app-footer-element dark>
					<icon-element icon="fovea-logo" slot="logo" larger light></icon-element>
					<h3 slot="row1">Getting started</h3>
					<anchor-element href="/learn" slot="row1">Your first component</anchor-element>
					<anchor-element href="/learn" slot="row1">Your first app</anchor-element>
					<anchor-element href="/learn" slot="row1">Tool integration</anchor-element>
					
					<h3 slot="row2">Help</h3>
					<anchor-element href="/learn" slot="row2">Report issue</anchor-element>
					<anchor-element href="/learn" slot="row2">Stack overflow</anchor-element>
					<anchor-element href="/learn" slot="row2">License</anchor-element>
					
					<h3 slot="row3">About</h3>
					<anchor-element href="/learn" slot="row3">Author</anchor-element>
					<anchor-element href="/learn" slot="row3">Motivation</anchor-element>
					<anchor-element href="/learn" slot="row3">Benchmarks</anchor-element>
					
					<h3 slot="row4">Resources</h3>
					<anchor-element href="/learn" slot="row4">Learn</anchor-element>
					<anchor-element href="/learn" slot="row4">Advanced</anchor-element>
					<anchor-element href="/learn" slot="row4">FAQ</anchor-element>
					
					<h3 slot="row5">News</h3>
					<anchor-element href="/learn" slot="row5">Releases</anchor-element>
					<anchor-element href="/learn" slot="row5">Blog</anchor-element>
					<anchor-element href="/learn" slot="row5">Press</anchor-element>
					
					<h3 slot="row6">Links</h3>
					<anchor-element href="/learn" slot="row6">Github</anchor-element>
					<anchor-element href="/learn" slot="row6">NPM</anchor-element>
					<anchor-element href="/learn" slot="row6">Twitter</anchor-element>
					
      </app-footer-element>
		`}};We=a([s("fovea-footer-element")],We);let Ke=Ye=class extends Se{constructor(){super(...arguments),this.role="main",this.inDuration=200,this.outDuration=this.inDuration}static get observedAttributes(){return["visible"]}static testRoute(pn){return`${this.routeName}`=="/\\//"?"/"===pn||""===pn:this.routeName.test(pn)}static styles(){return super.styles()+`
			:host {
				display: none;
				contain: strict;
				height: calc(100vh - var(--app-bar-portrait-height-desktop));
				top: var(--app-bar-portrait-height-desktop);
				margin-bottom: var(--app-bar-portrait-height-desktop);
				position: absolute;
			}
		`}async didBecomeVisible(){this.setAttribute("visible","")}async didBecomeInvisible(){this.hasAttribute("visible")&&this.removeAttribute("visible")}async animateIn(){if(this.style.display="block",!Ye.didFirstPageRender)return void(Ye.didFirstPageRender=!0)}async animateOut(){this.style.display="none"}async attributeChangedCallback(pn,gn,mn){"visible"===pn?null==mn?await this.animateOut():await this.animateIn():void 0}};Ke.routeName=/(?:)/,Ke.didFirstPageRender=!1,Ke=Ye=a([s("page-element")],Ke);var Ye;let je=class extends Ke{static markup(){return`
			<home-hero-element></home-hero-element>
			<highlights-element></highlights-element>
			<summary-element></summary-element>
			<section id="bottom">
				<material-triangles-element accent></material-triangles-element>
				<tools-element></tools-element>
				<fovea-footer-element></fovea-footer-element>
			</section>
		`}static styles(){return super.styles()+`
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
		`}};je.routeName=/\//,je=a([s("home-page-element")],je);let Ze=class extends ae{constructor(){super(...arguments),this.role="presentation",this._loading=!1,this._loaded=!1}static get observedAttributes(){return["loading","loaded","src","cover","contained"]}get loading(){return this._loading}set loading(pn){this._loading=pn,pn?this.setAttribute("loading",""):this.hasAttribute("loading")&&this.removeAttribute("loading")}get loaded(){return this._loaded}set loaded(pn){this._loaded=pn,pn?this.setAttribute("loaded",""):this.hasAttribute("loaded")&&this.removeAttribute("loaded")}async unload(){this.hasAttribute("src")&&this.loaded&&this.onUnloadMediaAction()}async load(){if(!this.hasAttribute("src"))throw new ReferenceError(`'load()' could not find any media to load!`);if(this.loaded)throw new TypeError(`'load()' was called, but the media is already loaded!`);this.loading||this.onLoadMediaAction()}async onPlaceholderTapped(){}async setInitialState(){}async loadMedia(){}async attributeChangedCallback(pn,gn,mn){switch(pn){case"src":if(null==mn)return await this.unload();this.hasAttribute("autoload")&&(await this.load());break;case"cover":this.hasAttribute("cover")&&this.hasAttribute("contained")&&this.removeAttribute("contained");break;case"contained":this.hasAttribute("contained")&&this.hasAttribute("cover")&&this.removeAttribute("cover");break;case"loading":if(this.loading&&this.hasAttribute("src"))return await this.loadMedia(this.getAttribute("src"));break;case"loaded":if(!this.loaded)return await this.setInitialState();}}onUnloadMediaAction(){this.hasAttribute("src")&&this.removeAttribute("src"),this.loaded=!1,this.loading=!1}onLoadMediaAction(){this.loading=!0,this.loaded=!1}onLoadMediaFailedAction(){throw this.onUnloadMediaAction(),new TypeError(`'load()' failed while attempting to load an image with src: '${this.getAttribute("src")}'`)}onLoadMediaSuccessAction(){this.loaded=!0,this.loading=!1}};Ze=a([s("media-element")],Ze);let Xe=class extends Ze{constructor(){super(...arguments),this.role="img",this.placeholderMedia="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsPSJyZ2JhKDAsMCwwLDAuMTIpIiBkPSJNOS43IDEyLjZsMS42IDIgMi4zLTMgMyA0SDcuM20xMC40LjZ2LTljMC0uOC0uNi0xLjQtMS4zLTEuNGgtOUM2LjYgNS44IDYgNi40IDYgN3Y5LjJjMCAuNy43IDEuMyAxLjQgMS4zaDljLjggMCAxLjQtLjYgMS40LTEuM3oiLz4KPC9zdmc+"}static get observedAttributes(){return[...super.observedAttributes,"width","height"]}static markup(){return`
		<img id="placeholderImage"/>
		<img id="mainImage" />`}static styles(){return`

			:host {
				backface-visibility: hidden;
				transform: translate3d(0,0,0);
				box-sizing: border-box;
				height: 250px;
				position: relative;
				display: block;
				width: 100%;
				max-width: 100%;
				padding: 0;
				overflow: hidden;
				contain: strict;
				border: none;
			}

			:host(:not([loaded])) #mainImage,
			:host([loaded]) #placeholderImage {
				opacity: 0;
				pointer-events: none;
			}

			#placeholderImage,
			#mainImage {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				user-select: none;
				backface-visibility: hidden;
				box-sizing: border-box;
				contain: strict;
				transition: opacity var(--duration-entering-desktop) ease;
				height: inherit;
				width: inherit;
				margin: 0 auto;
				opacity: 1;
				visibility: visible;
			}

			:host([contained]) #placeholderImage,
			:host([contained]) #mainImage {
				 object-fit: contain;
			}

			:host([cover]) #placeholderImage,
			:host([cover]) #mainImage {
			 	object-fit: cover;
			}
		`}async onPlaceholderTapped(){this.loaded||this.loading||(await this.load())}connectedCallback(){const pn=this.element("placeholderImage");pn.addEventListener("click",()=>this.onPlaceholderTapped()),pn.src=this.placeholderMedia}async loadMedia(pn){const gn=this.element("mainImage");gn.src=pn,gn.onload=()=>{gn.onload=null,this.onLoadMediaSuccessAction()},gn.onerror=()=>{gn.onload=null,this.onLoadMediaFailedAction()}}async setInitialState(){this.element("mainImage").removeAttribute("src")}async attributeChangedCallback(pn,gn,mn){switch(await super.attributeChangedCallback(pn,gn,mn),pn){case"width":case"height":const hn=this.element("placeholderImage"),En=this.element("mainImage");null==mn?(hn.hasAttribute(pn)&&hn.removeAttribute(pn),En.hasAttribute(pn)&&En.removeAttribute(pn)):(hn.setAttribute(pn,mn),En.setAttribute(pn,mn));}}};Xe=a([s("image-element")],Xe);let ze=class extends ae{constructor(){super(...arguments),this.role="banner"}static markup(){return`
			<hero-element center>
				<div id="builtWithHeartContainer">
					<h4 class="headline">Built with</h4>
					<icon-element icon="heart-fill" larger warning></icon-element>
				</div>
				<h4 class="headline">For developers.</h4>
				<h4 class="headline">And for our users.</h4>
				
				<section id="cards">
					<card-element id="descriptionCard">
						<h6>Use the platform.</h6>
						<p>
							Fovea was built to prove a point: A great development experience doesn’t have to mean a bad user experience.
						</p>
						<p>
							In 2016, things were looking down for web development. Since browserify, web apps had become larger and larger and grown to a point where several megabytes of JavaScript code needed to be fetched and parsed by the client before first paint.
						</p>
						<p>
							The first step in attempting to solve this problem was to recognize that the browser can do lots of cool things on its own. The second step was to recognize that more often than not, libraries and frameworks add a lot of overhead to web applications on runtime. The third step was to recognize that by leveraging native browser APIs on runtime and shifting the complexities of parsing and upgrading elements to compile-time, the problem could be solved.
						</p>
						<p>
							And so, Fovea was born.
						</p>
						</p>
					</card-element>
					<card-element id="authorCard">
						<image-element width="321" height="321" cover autoload src="${N.path.lib.asset.img.author}"></image-element>
						<h6 id="authorName">FREDERIK WESSBERG</h6>
						<p>
							Frederik is the creator of Fovea and the technical lead of the project. He has open-sourced more than 30 projects, works at <anchor-element href="https://ideanote.io" target="_blank">Ideanote</anchor-element> and is a student at the <anchor-element href="https://itu.dk" target="_blank">IT-University of Copenhagen</anchor-element>.
						</p>
						
						<section id="links">
						
							<anchor-element href="https://npmjs.com/~wessberg" target="_blank">
								<button-element no-background round>
									<icon-element icon="npm-logo" medium></icon-element>
								</button-element>
							</anchor-element>
							
							<anchor-element href="https://github.com/wessberg" target="_blank">
								<button-element no-background round>
									<icon-element icon="github-logo" medium></icon-element>
								</button-element>
							</anchor-element>
							
							<anchor-element href="https://twitter.com/FredWessberg" target="_blank">
								<button-element no-background round>
									<icon-element icon="twitter-logo" medium></icon-element>
								</button-element>
							</anchor-element>
							
						</section>
					</card-element>
				</section>
			</hero-element>
		`}static styles(){return`
			#builtWithHeartContainer,
			#links {
				display: inline-flex;
				flex-direction: row;
			}

			#builtWithHeartContainer {
				align-content: center;
				justify-content: center;
			}
			
			#links {
				margin-top: var(--distance-regular);
				align-content: flex-end;
				justify-content: flex-end;
			}
			
			#builtWithHeartContainer > .headline {
				margin-bottom: 0;
				line-height: 1.5;
				margin-right: var(--distance-minimum);
			}
		
			.headline {
				color: var(--color-primary-text-light);
				font-weight: var(--font-weight-bold);
				line-height: 1;
			}
			
			.headline,
			card-element > p,
			card-element > strong,
			card-element > h6,
			card-element > anchor-element {
				user-select: text;
			}
			
			#descriptionCard > p:not(:last-of-type) {
				margin: var(--distance-minimum) 0;
			}
			
			#authorCard > image-element {
				max-width: 321px;
				max-height: 321px;
			}
			
			card-element {
				margin: var(--distance-minimum) auto;
				width: 100%;
				height: 100%;
			}
			
			#descriptionCard {
				max-width: 546px;
				flex-grow: 2;
			}
			
			#authorCard {
				flex-grow: 1;
				max-width: 321px;
			}
			
			#authorName {
				margin: 20px 0;
			}
			
			#cards {
				position: relative;
				text-align: center;
				width: 100%;
				max-width: var(--width-frame-max);
				justify-content: center;
				align-content: center;
				display: flex;
				flex-direction: column;
				margin: 0 auto;
			}
			
			#links button-element {
				width: var(--width-icon-medium);
				height: var(--height-icon-medium);
			}
			
			@media screen and (min-width: 700px) {
			
				#cards {
					flex-direction: row;
				}

				card-element {
					margin: 0 var(--distance-minimum);
				}
			}

		`}};ze=a([s("about-hero-element")],ze);let qe=class extends ae{constructor(){super(...arguments),this.role="complementary"}static styles(){return`
			:host {
				text-align: center;
				width: 100%;
				justify-content: center;
				align-content: center;
				position: relative;
				display: flex;
				flex-direction: column;
				margin: 0 auto;
				max-width: 650px;
			}
			
			.headline, .chunk > h6 {
				padding-top: var(--distance-regular);
				color: var(--color-primary-text-light);
				user-select: text;
			}
			
			#chunkContainer {
				display: flex;
				flex-direction: row;
				align-content: space-around;
				justify-content: space-around;
			}
			
			.chunk {
				display: flex;
				flex-direction: column;
				text-align: left;
				align-content: space-around;
				justify-content: space-around;
			}
			
			.chunk > h6 {
				margin: 0;
				padding: 0;
				line-height: 1.2;
			}
			
			#chunk1 > h6 {
				color: var(--color-white-12);
			}
			
			#chunk2 > h6 {
				color: var(--color-white-38);
			}
			
			#chunk3 > h6 {
				color: var(--color-white-50);
			}
			
			#chunk4 > h6 {
				color: var(--color-white-70);
			}
			
			#chunk5 > h6 {
				color: var(--color-white-100);
			}
			
			#browserFrameIcon {
				width: 712px;
				max-width: 100%;
				height: 402px;
				max-height: calc(100vw / 2);
				margin: var(--distance-minimum) auto 0 auto;
			}
			
		`}static markup(){return`
			<h5 class="headline">Reducing Time To First Meaningful Paint</h5>
			
			<article id="chunkContainer">
				<div class="chunk" id="chunk1">
					<h6>368kb</h6>
					<h6>200ms</h6>
				</div>
				<div class="chunk" id="chunk2">
					<h6>782kb</h6>
					<h6>800ms</h6>
				</div>
				<div class="chunk" id="chunk3">
					<h6>1.3mb</h6>
					<h6>2s</h6>
				</div>
				<div class="chunk" id="chunk4">
					<h6>2.6mb</h6>
					<h6>4.8s</h6>
				</div>
				<div class="chunk" id="chunk5">
					<h6>3.8mb+</h6>
					<h6>7s+</h6>
				</div>
			</article>
			<icon-element id="browserFrameIcon" icon="browser-frame"></icon-element>
			
			<h5 class="headline">Fovea <strong>drastically</strong> reduces the potential size of your app and produces much faster FMPs due to the compilation step:</h5>
		`}};qe=a([s("ttfmp-description-element")],qe);let Je=class extends ae{constructor(){super(...arguments),this.role="complementary"}static styles(){return`
			:host {
				background: var(--color-blue-100);
				text-align: center;
				width: 100%;
				justify-content: center;
				align-content: center;
				position: relative;
				display: flex;
				flex-direction: column;
				margin: 0;
				padding: var(--distance-minimum) var(--distance-minimum) 100px var(--distance-minimum);
				overflow: hidden;
			}
			
			#descriptionSection {
				position: relative;
				display: block;
			}
			
			#browserFrameShadowIcon {
				position: absolute;
				top: 20px;
				width: 918px;
				height: 887px;
				max-width: 100%;
				transform-origin: left top;
				transform: rotate(45deg) translateZ(0);
				z-index: 0;
				left: 0;
				right: 0;
				margin: 0 auto;
				display: none;
			}
			
			ttfmp-description-element {
				z-index: 1;
			}
			
			@media screen and (min-width: 690px) {
				#browserFrameShadowIcon {
					display: block;
				}
			}
			
		`}static markup(){return`
			<section id="descriptionSection">
				<ttfmp-description-element></ttfmp-description-element>
				<icon-element id="browserFrameShadowIcon" icon="material-rectangle"></icon-element>
			</section>
		`}};Je=a([s("ttfmp-element")],Je);let Qe=class extends Ke{static markup(){return`
			<about-hero-element></about-hero-element>
			<ttfmp-element></ttfmp-element>
			<section id="bottom">
				<material-triangles-element accent></material-triangles-element>
				<fovea-footer-element></fovea-footer-element>
			</section>
		`}static styles(){return super.styles()+`
			
			material-triangles-element {
				top: auto;
				bottom: 0;
			}
			
			#bottom {
				position: relative;
			}
		`}};Qe.routeName=/\/about/,Qe=a([s("about-page-element")],Qe);let $e=class extends Ke{static markup(){return`
			<h4>Learn</h4>
			<section id="bottom">
				<material-triangles-element accent></material-triangles-element>
				<fovea-footer-element></fovea-footer-element>
			</section>
		`}static styles(){return super.styles()+`
			
			material-triangles-element {
				top: auto;
				bottom: 0;
			}
			
			#bottom {
				position: relative;
			}
		`}};$e.routeName=/\/learn/,$e=a([s("learn-page-element")],$e);let en=class extends Ke{static markup(){return`
			<h4>News</h4>
			<section id="bottom">
				<material-triangles-element accent></material-triangles-element>
				<fovea-footer-element></fovea-footer-element>
			</section>
		`}static styles(){return super.styles()+`
			
			material-triangles-element {
				top: auto;
				bottom: 0;
			}
			
			#bottom {
				position: relative;
			}
		`}};en.routeName=/\/news/,en=a([s("news-page-element")],en);const tn=new class extends ie{constructor(){super(...arguments),this.pages=this.formatWordpressPages()}getPage(cn){return this.pages.find((pn)=>pn.name.toLowerCase()===cn.toLowerCase())}formatWordpressPages(){return WP.pages.filter((cn)=>"page"===cn.post_type).map((cn)=>{return{name:`/${cn.post_name}`,title:cn.post_title,order:cn.menu_order}})}},an=new class{block(cn){window.addEventListener(cn,(pn)=>{pn.preventDefault(),pn.stopPropagation()})}},dn=new class{constructor(){this.agent=null==navigator||null==navigator.userAgent?"":navigator.userAgent.toLowerCase(),this.browser=this.detectBrowser(),this.isEdge=this.browser===$.EDGE,this.isInternetExplorer=this.browser===$.IE,this.isInternetExplorerOrEdge=this.isEdge||this.isInternetExplorer,this.isFirefox=this.browser===$.FIREFOX,this.isFirefoxMobile=this.browser===$.FIREFOX_MOBILE,this.isFirefoxOrFirefoxMobile=this.isFirefox||this.isFirefoxMobile,this.isSamsungInternet=this.browser===$.SAMSUNG_INTERNET,this.isUCBrowser=this.browser===$.UC_BROWSER,this.isChrome=this.browser===$.CHROME,this.isSafari=this.browser===$.SAFARI,this.isOpera=this.browser===$.OPERA,this.isBlackberry=this.browser===$.BLACKBERRY,this.isOperaMobile=this.browser===$.OPERA_MOBILE,this.isIEMobile=this.browser===$.IE_MOBILE,this.isOperaMini=this.browser===$.OPERA_MINI,this.isNative=null!=g.cordova,this.isAndroidBrowser=this.browser===$.ANDROID_STOCK&&!this.isNative,this.isMobile=this.isNative||/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent),this.nativePlatform=this.detectNativePlatform(),this.isIOSDevice=this.isIOSAgent()||this.nativePlatform===ee.IOS,this.isIPhoneDevice=/iphone|ipod/i.test(this.agent),this.isIPadDevice=/ipad/i.test(this.agent),this.isSafariOnDesktop=this.browser===$.SAFARI&&!this.isMobile,this.isSafariOnMobile=this.isMobile&&!this.isNative&&this.browser===$.SAFARI,this.isNativeIOS=this.nativePlatform===ee.IOS,this.isNativeAndroid=this.nativePlatform===ee.ANDROID,this.isAndroidDevice=this.isNativeAndroid||this.agent.includes("android"),this.isAppleDevice=this.isNativeIOS||this.browser===$.SAFARI,this.isDesktopDevice=!this.isMobile,this.isWebkitBrowser=this.agent.includes("applewebkit"),this.iOSVersion=this.isIOSDevice?this.detectIOSVersion():-1,this.IEVersion=this.isInternetExplorer?this.detectIEVersion():-1,this.chromeVersion=this.isChrome?this.detectChromeVersion():-1,this.firefoxVersion=this.isFirefox?this.detectFirefoxVersion():-1,this.safariVersion=this.isSafari?this.detectSafariVersion():-1,this.edgeVersion=this.isEdge?this.detectEdgeVersion():-1,this.operaVersion=this.isOpera?this.detectOperaVersion():-1,this.operaMiniVersion=this.isOperaMini?this.detectOperaMiniVersion():-1,this.operaMobileVersion=this.isOperaMobile?this.detectOperaMobileVersion():-1,this.androidVersion=this.isAndroidDevice?this.detectAndroidVersion():-1,this.samsungInternetVersion=this.isSamsungInternet?this.detectSamsungInternetVersion():-1,this.firefoxMobileVersion=this.isFirefoxMobile?this.detectFirefoxMobileVersion():-1,this.UCBrowserVersion=this.isFirefoxMobile?this.detectUCBrowserVersion():-1,this.IEMobileVersion=this.isIEMobile?this.detectIEMobileVersion():-1,this.browserVersion=(()=>{return this.isIOSDevice?this.iOSVersion:this.isInternetExplorer?this.IEVersion:this.isChrome?this.chromeVersion:this.isFirefox?this.firefoxVersion:this.isSafari?this.safariVersion:this.isEdge?this.edgeVersion:this.isOpera?this.operaVersion:this.isOperaMini?this.operaMiniVersion:this.isOperaMobile?this.operaMobileVersion:this.isAndroidDevice?this.androidVersion:this.isSamsungInternet?this.samsungInternetVersion:this.isFirefoxMobile?this.firefoxMobileVersion:this.isUCBrowser?this.UCBrowserVersion:this.isIEMobile?this.IEMobileVersion:-1})(),this.vendorPrefix=(()=>{return this.isWebkitBrowser?"webkit":this.isFirefoxOrFirefoxMobile?"moz":""})(),this.vendorPrefixDashed=(()=>{return this.isWebkitBrowser?"-webkit-":this.isFirefoxOrFirefoxMobile?"-moz-":""})()}detectIOSVersion(){const cn=this.agent.match(/cpu.*os {0,1}_{0,1}([0-9_]{1})|(cpu like).*applewebkit.*mobile/i);return null==cn?-1:parseInt(cn[1])}detectIEMobileVersion(){const cn=this.agent.match(/iemobile\/{0,1} {0,1}(\d{1})/i);return null==cn?-1:parseInt(cn[1])}detectAndroidVersion(){const cn=this.agent.match(/android (\d{1,3})/i);return null==cn?-1:parseInt(cn[1])}detectSamsungInternetVersion(){const cn=this.agent.match(/(?:samsung|smart-tv).*(?:samsungbrowser|web browser)\/(\d{1,2})/i);return null==cn?/armv7l/.test(this.agent)||/version\/\d{1,2}/.test(this.agent)?1:-1:parseInt(cn[1])}detectUCBrowserVersion(){const cn=/ucbrowser|uc browser/i.test(this.agent)?this.agent.match(/(?:ucbrowser|uc browser)\/{0,1}(\d{1,2})/i):this.agent.match(/(?!ucweb)\/{0,1}(\d{1,2})/i);return null==cn?-1:parseInt(cn[1])}detectFirefoxMobileVersion(){const cn=this.agent.match(/firefox\/(\d{1,2})/i);return null==cn?-1:parseInt(cn[1])}detectIEVersion(){return document.all?document.all&&!document.compatMode?5:document.all&&!g.XMLHttpRequest?6:document.all&&!document.querySelector?7:document.all&&!document.addEventListener?8:document.all&&!g.atob?9:document.all?10:-1:11}detectChromeVersion(){let cn=this.agent.match(/chrome\/(\d{1,2})/i);return null==cn?(null==cn&&(cn=this.agent.match(/(chrome)\/\s{1}safari/i)),null==cn?-1:0):parseInt(cn[1])}detectSafariVersion(){const cn=this.agent.match(/version\/(\d{1,2})/i);if(null!=cn)return parseInt(cn[1]);const pn=this.agent.match(/applewebkit\/(\d{1,4})/i);if(null!=pn){const gn=parseFloat(pn[1]);return gn>=601?9:gn>=538?8:gn>=537?7:gn>=536?6:gn>=533?5:gn>=526?4:gn>=522?3:gn>=412?2:gn>=85?1:0}return-1}detectFirefoxVersion(){const cn=this.agent.match(/firefox\/(\d{1,})/i);return cn?parseInt(cn[1]):-1}detectEdgeVersion(){const cn=this.agent.match(/edge\/(\d{1,3})/i);return cn?parseInt(cn[1]):-1}detectOperaVersion(){const cn=this.agent.match(/[opera|opr]+\/(\d{1,3})/i);return cn?parseInt(cn[1]):-1}detectOperaMiniVersion(){let cn=this.agent.match(/opera mini\/(\d{1,3})/i);return null==cn?(cn=this.agent.match(/opera mini\/([symbianos|nokia|mozilla|(windows]+)/i),cn?0:-1):parseInt(cn[1])}detectOperaMobileVersion(){let cn=this.agent.match(/version\/(\d{1,3})/i);return null==cn?(cn=this.agent.match(/opera (\d{1,3})/i),cn?parseInt(cn[1]):-1):parseInt(cn[1])}isIOSAgent(){return /iphone|ipad|ipod/i.test(this.agent)}isChromeAgent(){return-1!==this.agent.indexOf("chrome")&&-1===this.agent.indexOf("edge")&&-1===this.agent.indexOf("chromeframe")&&!this.isIOSAgent()}detectNativePlatform(){if(!this.isNative)return null;const cn=g.device?g.device.platform:null;if(null!=cn){const pn=cn.toUpperCase();if(pn===ee[ee.ANDROID])return ee.ANDROID;if(pn===ee[ee.IOS])return ee.IOS}return this.browser===$.SAFARI?ee.IOS:ee.ANDROID}detectBrowser(){const cn=this.agent;return(cn.includes("ucbrowser")||cn.includes("ucweb")||cn.includes("uc browser"))&&!this.isChromeAgent()&&!this.isIOSAgent()?$.UC_BROWSER:cn.includes("opera mini/")?$.OPERA_MINI:-1===cn.indexOf("opera mobi/")||this.isIOSAgent()||this.isChromeAgent()?(cn.includes("opera")||cn.includes("opr/")||cn.includes("oupeng/"))&&!this.isIOSAgent()&&!this.isChromeAgent()?$.OPERA:cn.includes("blackberry")&&!this.isIOSAgent()?$.BLACKBERRY:cn.includes("iemobile")?$.IE_MOBILE:this.isChromeAgent()?$.CHROME:cn.includes("samsung")||cn.includes("smart-tv")?$.SAMSUNG_INTERNET:cn.includes("firefox")&&/mobile|tablet|tv/.test(cn)&&!this.isIOSAgent()?$.FIREFOX_MOBILE:cn.includes("firefox")?$.FIREFOX:cn.includes("android")?$.ANDROID_STOCK:cn.includes("safari")&&!cn.includes("edge")||cn.includes("iphone")||cn.includes("ipod")||cn.includes("ipad")?$.SAFARI:cn.includes("msie")||!0==!!document.documentMode||!g.ActiveXObject&&"ActiveXObject"in g||cn.includes("rv:11.0")?$.IE:cn.includes("edge")?$.EDGE:$.UNKNOWN:$.OPERA_MOBILE}},rn=new class{constructor(){this.boundEventHandlers=new Map}fire(cn,pn=window,gn=null){const mn=Object.assign({},{detail:gn}),hn=new CustomEvent(cn,mn);return pn.dispatchEvent(hn),hn}waitFor(cn,pn){return new Promise((gn)=>{const mn=function(hn){pn.removeEventListener(cn,mn),gn(hn)};pn.addEventListener(cn,mn)})}waitForAny(cn,pn){return new Promise((gn)=>{let mn=!1;cn.forEach(async(hn)=>{const En=await this.waitFor(hn,pn);mn||(mn=!0,gn(En))})})}listen(cn,pn,gn,mn,hn=!0,En=!1,An){const In=mn.bind(An||cn),bn=En?(On)=>{const Rn=On.currentTarget;requestAnimationFrame(()=>In(On,Rn))}:In;gn.addEventListener(pn,bn,{passive:hn,capture:!1});const vn=this.boundEventHandlers.get(cn)||[];vn.push({listener:bn,unbound:mn,eventName:pn,on:gn}),this.boundEventHandlers.set(cn,vn)}unlisten(cn,pn,gn,mn){const hn=this.boundEventHandlers.get(cn);if(null!=hn){const En=hn.find((An)=>An.eventName===pn&&An.on===gn&&An.unbound===mn);if(null==En)throw new ReferenceError(`Could not find an associated handler to unbind for event: '${pn}' with handler: '${mn.toString()}' for binder: '${cn.nodeName.toLowerCase()}'`);gn.removeEventListener(pn,En.listener),this.boundEventHandlers.delete(cn)}}clearListeners(cn){this.boundEventHandlers.forEach((pn,gn)=>{null!=cn&&gn!==cn||pn.forEach((mn)=>this.unlisten(gn,mn.eventName,mn.on,mn.unbound))})}},sn=new C,ln=new class{async wait(cn=0){return new Promise((pn)=>setTimeout(pn,cn))}},un=new class{animate(cn,pn,gn){return new Promise((mn,hn)=>{try{requestAnimationFrame(()=>{const En=cn.animate(pn,gn);return gn.iterations===Infinity?mn(En):void(En.onfinish=En.oncancel=()=>{mn(En)})})}catch(En){hn(En)}})}},fn=new class{constructor(cn){this.routeToPageInstanceMap=new Map,this.routeHistory=new Re(this),this.setRoutes(cn),this.navigate(location.pathname).then()}async onNavigateTo(cn){await this.attachRoute(cn)}async navigate(cn){if(Oe.DEBUG&&void 0,!this.isCurrentRoute(cn)){const pn=this.getRoute(cn);if(null==pn)throw new ReferenceError(`${this.constructor.name} could not find a route for location: ${cn}`);await this.routeHistory.addState(pn)}}isCurrentRoute(cn){if(null==this.currentPageInstance)return!1;const pn=this.currentPageInstance.constructor;return pn.testRoute(cn)}getRoute(cn){return this.routes.get(cn)||this.matchPathWithRoutes(cn)}matchPathWithRoutes(cn){for(const pn of this.routes.entries()){const[,gn]=pn;if(gn.page.testRoute(cn))return this.routes.set(cn,gn),gn}return null}async whenReady(){if(null==this.frame){const{detail:cn}=await rn.waitFor(Ae.READY_EVENT_NAME,g);this.frame=cn}}async attachRoute(cn){if(await this.whenReady(),!this.isCurrentRoute(cn.path)){const pn=this.getInstance(cn),gn=this.currentPageInstance;this.currentPageInstance=pn,await Promise.all([pn.didBecomeVisible(),null==gn?Promise.resolve():gn.didBecomeInvisible()])}}getInstance(cn){if(null==cn.page)throw new ReferenceError(`${this.constructor.name} could not find a page for route: ${cn.path}`);let pn=this.routeToPageInstanceMap.get(cn.page);return null==pn&&(pn=new cn.page,this.frame.appendChild(pn),this.routeToPageInstanceMap.set(cn.page,pn)),pn}setRoutes(cn){const pn=cn.map((gn)=>[gn.path,gn]);this.routes=new Map(pn)}}(((cn)=>{return[{path:"/",title:"Fovea",page:je},...cn.map((pn)=>({path:pn.name,title:pn.title,page:u(pn)}))]})(tn.pages));C.addIcons([z,L,P,B,x,y,F,H,V,U,G,k,W,X,K,Y,j]),an.block("dragstart"),dn.isMobile&&an.block("contextmenu")})();
