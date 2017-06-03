import "../../Component/HighlightsComponent/HighlightsComponent";
import "../../Component/HomeHeroComponent/HomeHeroComponent";
import "../../Component/SummaryComponent/SummaryComponent";
import "../../Component/ToolsComponent/ToolsComponent";
import "../../Component/FoveaFooterComponent/FoveaFooterComponent";
import "../../Component/MaterialTrianglesComponent/MaterialTrianglesComponent";

import {Page} from "../Page/Page";
import {IHomePage} from "./Interface/IHomePage";
import {selector} from "../../Component/Component/Component";

@selector("home-page-element")
export class HomePage extends Page implements IHomePage {

	public static markup (): string {
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

	public static styles () {
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

}