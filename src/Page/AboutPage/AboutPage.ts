import "../../Component/FoveaFooterComponent/FoveaFooterComponent";
import "../../Component/MaterialTrianglesComponent/MaterialTrianglesComponent";
import "../../Component/AboutHeroComponent/AboutHeroComponent";
import "../../Component/TTFMPComponent/TTFMPComponent";
import "../../Component/BrowserSupportComponent/BrowserSupportComponent";

import {Page} from "../Page/Page";
import {selector} from "../../Component/Component/Component";
import {IAboutPage} from "./Interface/IAboutPage";

@selector("about-page-element")
export class AboutPage extends Page implements IAboutPage {
	public static routeName = /\/about/;

	public static markup (): string {
		return `
			<about-hero-element></about-hero-element>
			<ttfmp-element></ttfmp-element>
			<section id="bottom">
				<material-triangles-element accent strong shifted></material-triangles-element>
				<browser-support-element></browser-support-element>
				<fovea-footer-element></fovea-footer-element>
			</section>
		`;
	}

	public static styles () {
		return super.styles() + `
			
			material-triangles-element {
				top: auto;
				bottom: 0;
			}
			
			#bottom {
				position: relative;
			}
		`;
	}

}